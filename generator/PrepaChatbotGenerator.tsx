
import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, AlertCircle, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "Comment gérer le stress avant les concours ?",
  "Je me sens débordé, que faire ?",
  "Comment organiser ses révisions ?",
  "Faut-il faire des pauses ?",
];

export const PrepaChatbotGenerator: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Bonjour 👋 Je suis Majora, ton coach IA Prépa pour la motivation, la méthode et le bien-être ! Pose-moi toutes tes questions (gestion du stress, révisions, organisation, motivation...)."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleWhatsAppContact = () => {
    const message = "Bonjour, j'ai une question sur la prépa et j'aimerais échanger avec l'équipe Prépa Rationnelle !";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/33609164668?text=${encodedMessage}`, '_blank');
  };

  async function sendMessage(message: string) {
    if (!message.trim()) return;
    
    setLoading(true);
    setError(null);
    
    // Add user message immediately
    const userMessage: ChatMessage = { role: "user", content: message };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      // Prepare messages for API (exclude the initial greeting)
      const apiMessages = messages
        .slice(1) // Remove the initial greeting
        .concat(userMessage)
        .map(({ role, content }) => ({ role, content }));

      console.log("Sending messages to Edge Function:", apiMessages);

      const { data, error: supabaseError } = await supabase.functions.invoke('chat-ai-assistant', {
        body: { messages: apiMessages }
      });

      if (supabaseError) {
        console.error("Supabase function error:", supabaseError);
        throw new Error(`Erreur de connexion: ${supabaseError.message}`);
      }

      if (!data) {
        throw new Error("Aucune réponse reçue du serveur");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: data.text || "Désolé, je n'ai pas pu générer une réponse."
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (err) {
      console.error("Error sending message:", err);
      const errorMessage = err instanceof Error ? err.message : "Une erreur inattendue s'est produite";
      setError(errorMessage);
      
      // Add error message to chat
      const errorChatMessage: ChatMessage = {
        role: "assistant",
        content: `Désolé, une erreur s'est produite : ${errorMessage}. Essayez à nouveau dans quelques instants ou contactez-nous directement sur WhatsApp !`
      };
      setMessages(prev => [...prev, errorChatMessage]);
    } finally {
      setLoading(false);
    }
  }

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !loading) {
      await sendMessage(input.trim());
    }
  };

  const handleSuggestion = (suggestion: string) => {
    if (!loading) {
      setInput(suggestion);
    }
  };

  const retryLastMessage = () => {
    const lastUserMessage = messages
      .slice()
      .reverse()
      .find(msg => msg.role === "user");
    
    if (lastUserMessage) {
      sendMessage(lastUserMessage.content);
    }
  };

  return (
    <div className="w-full flex justify-center py-3">
      <Card className="w-full max-w-2xl rounded-xl shadow-lg border-0 bg-gradient-to-br from-[#d9f7fa] via-[#f3f6fa] to-[#d5e7f7]">
        <CardHeader className="rounded-t-xl px-6 py-5 bg-gradient-to-r from-teal-500/70 via-sky-400/60 to-violet-300/50 border-b-0">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-white/30 rounded-lg">
              <Heart className="h-7 w-7 text-pink-600" />
            </span>
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-teal-900">Chatbot prépa – Conseils & Méthode</CardTitle>
              <CardDescription className="text-sky-900 mt-1 font-medium">
                Pose-moi tes questions : motivation, stress, bien-être, méthode&nbsp;!
              </CardDescription>
            </div>
            <Button
              onClick={handleWhatsAppContact}
              variant="outline"
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600 flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col px-5 py-5 gap-4 min-h-[480px]">
          {/* WhatsApp info banner */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="font-medium">Besoin d'aide personnalisée ?</span>
            </div>
            <p className="mt-1 text-green-700">
              L'IA répond instantanément, mais pour des conseils personnalisés tu peux aussi nous contacter directement sur WhatsApp !
            </p>
          </div>
          
          <div
            className="grow flex flex-col gap-2 h-[320px] overflow-y-auto scrollbar-thin pr-2 mb-2"
            style={{ maxHeight: 320 }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "mb-1 flex",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-xs md:max-w-md rounded-lg px-4 py-2 whitespace-pre-line",
                    msg.role === "user"
                      ? "bg-teal-200 text-teal-900"
                      : "bg-white text-gray-800 border border-gray-200"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start mb-1">
                <div className="bg-white text-gray-800 border border-gray-200 rounded-lg px-4 py-2 max-w-xs md:max-w-md">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-sm text-gray-500">Majora réfléchit...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
              <div className="ml-auto flex gap-2">
                <Button
                  onClick={handleWhatsAppContact}
                  size="sm"
                  variant="outline"
                  className="bg-green-500 hover:bg-green-600 text-white border-green-500"
                >
                  WhatsApp
                </Button>
                <Button
                  onClick={retryLastMessage}
                  size="sm"
                  variant="outline"
                  disabled={loading}
                >
                  Réessayer
                </Button>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-2">
            {SUGGESTIONS.map((suggestion, i) => (
              <button
                key={i}
                type="button"
                className="bg-teal-100 text-teal-800 rounded-full text-xs px-3 py-1 hover:bg-teal-200 border border-teal-200 transition disabled:opacity-50"
                onClick={() => handleSuggestion(suggestion)}
                disabled={loading}
                tabIndex={-1}
              >
                {suggestion}
              </button>
            ))}
          </div>
          
          <form onSubmit={handleSend} className="flex gap-2 mt-auto w-full">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Écris ta question ici..."
              className="flex-1 bg-white/80 border-0 shadow text-base"
              disabled={loading}
              autoFocus
            />
            <Button 
              className="px-4" 
              type="submit" 
              disabled={loading || !input.trim()}
            >
              {loading ? "Envoi..." : <MessageSquare className="h-5 w-5" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

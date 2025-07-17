
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface AIChatOptionProps {
  onBack: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIChatOption = ({ onBack }: AIChatOptionProps) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-ai-assistant', {
        body: {
          messages: [...messages, userMessage],
          context: "Tu es un assistant spécialisé pour aider les étudiants à préparer les oraux des écoles de commerce. Tu dois être précis, pertinent et concis dans tes réponses."
        },
      });

      if (error) throw new Error(error.message);

      setMessages(prev => [...prev, { role: 'assistant', content: data.text || "Je n'ai pas pu générer de réponse. Essayez à nouveau." }]);
    } catch (err) {
      console.error('Error calling AI assistant:', err);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la communication avec l'assistant IA.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h3 className="font-medium ml-2">Assistant IA Prépa Rationnelle</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-3 max-h-[300px]">
        {messages.length === 0 ? (
          <p className="text-muted-foreground text-sm text-center p-4">
            Pose ta question sur les oraux et notre IA te répondra instantanément.
          </p>
        ) : (
          <div className="space-y-3">
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                className={`p-2 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground ml-6' 
                    : 'bg-muted mr-6'
                }`}
              >
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Pose ta question ici..." 
          className="resize-none"
          rows={2}
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default AIChatOption;

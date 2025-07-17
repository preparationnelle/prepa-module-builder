
import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Code, Clipboard } from "lucide-react";

type Mode = "analyze" | "debug" | "improve";

function countLines(code: string) {
  return code.split(/\r\n|\r|\n/).length;
}

export const PythonTutorGenerator: React.FC = () => {
  const [code, setCode] = useState("");
  const [question, setQuestion] = useState("");
  const [libraries, setLibraries] = useState(""); 
  const [history, setHistory] = useState<{ mode: Mode, text: string }[]>([]);
  const [loading, setLoading] = useState<Mode | null>(null);
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isFormFilled = code.trim() && question.trim();

  // Copy improved code (if any) to clipboard
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() =>
      // Correction: variant="default" (pas "success") pour shadcn toast.
      toast({ title: "Code copié dans le presse-papier", variant: "default" })
    );
  }
  
  // Highlight code fences for suggestions (results with code)
  function formatMarkdownWithHighlight(md: string) {
    return md.split("\n").map((line, idx) => {
      if (line.trim().startsWith("```") || line.trim().endsWith("```")) {
        return null;
      }
      return <div key={idx} className="leading-snug font-mono whitespace-pre break-all">{line}</div>;
    });
  }

  const handlePythonHelp = async (mode: Mode) => {
    if (!isFormFilled) {
      toast({ title: "Merci de remplir tous les champs", variant: "destructive" });
      return;
    }
    setLoading(mode);
    setHistory(h => [...h, { mode, text: "Analyse en cours..." }]);
    try {
      const resp = await fetch("/functions/v1/python-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, question, libraries, mode })
      });
      const data = await resp.json();
      let text = data.result || "Pas de réponse.";
      setHistory(h => [
        ...h.slice(0, h.length - 1),
        { mode, text }
      ]);
    } catch (e) {
      toast({ title: "Erreur", description: "Impossible de contacter l'IA", variant: "destructive" });
      setHistory(h => [
        ...h.slice(0, h.length - 1),
        { mode, text: "Erreur lors de l'analyse." }
      ]);
    } finally {
      setLoading(null);
    }
  };

  const reset = () => {
    setCode("");
    setQuestion("");
    setLibraries("");
    setHistory([]);
    setLoading(null);
    if (textareaRef.current) textareaRef.current.focus();
  };

  // Editor detail: line numbers
  const editorLines = Array.from({ length: countLines(code) || 1 });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#212847] via-[#373159] to-[#267c5a] py-10">
      <Card className="w-full max-w-3xl rounded-2xl shadow-2xl bg-[#232744ee] backdrop-blur-2xl border-0 border-white/5" style={{boxShadow:'0px 4px 42px 0px rgba(0,6,55,0.14)'}}>
        <CardHeader className="rounded-t-2xl px-8 py-7 bg-gradient-to-r from-[#222d5f] via-[#26354a] to-[#0e705e] text-white border-b-0" style={{
          background: "linear-gradient(90deg,#232c57 45%,#333b70 80%,#10c6a1 120%)"
        }}>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <span className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
              <Code className="h-6 w-6 text-white" />
            </span>
            Assistant Python IA
          </CardTitle>
          <CardDescription className="text-cyan-100/90 mt-1 font-medium">
            Analyse ton code Python, identifie les erreurs et reçois une version améliorée. Expérience type éditeur de code.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 space-y-8 bg-transparent">
          <form className="space-y-7" onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="code" className="block font-semibold mb-2 text-white text-lg flex items-center gap-2">
                Ton code Python
                <span className="ml-3 rounded bg-[#283d4a] text-xs px-2 py-1 text-[#1ce0d9] font-mono shadow-inner">
                  Ctrl+Entrée <span className="font-normal text-white/80">pour valider</span>
                </span>
              </label>
              <div className="relative rounded-xl overflow-hidden group w-full shadow-md border border-[#212846] bg-[#202846] focus-within:ring-2 focus-within:ring-primary">
                {/* Numéros de ligne */}
                <div className="absolute top-0 left-0 h-full w-10 flex flex-col items-end pr-2 pt-3 select-none z-10 bg-transparent">
                  {editorLines.map((_, i) => (
                    <span key={i} className="text-[#345c7a] font-mono text-xs opacity-70 block h-[25px]">{i + 1}</span>
                  ))}
                </div>
                <Textarea
                  id="code"
                  name="code"
                  ref={textareaRef}
                  className="w-full min-h-[160px] bg-[#202846] text-[#b7cee5] font-mono text-base border-0 pl-12 pr-2 resize-vertical focus-visible:ring-2 focus-visible:ring-primary placeholder:text-[#3f678e] placeholder:italic rounded-xl"
                  rows={8}
                  placeholder="Écris ici ton code Python... (avec indentation et commentaires si possible)"
                  value={code}
                  autoComplete="off"
                  spellCheck={false}
                  onChange={e => setCode(e.target.value)}
                  onKeyDown={e => {
                    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                      e.preventDefault();
                      if (isFormFilled) handlePythonHelp("analyze");
                    }
                  }}
                  required
                  style={{
                    letterSpacing: ".01em"
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="question" className="block font-semibold mb-2 text-[#dff6ff] text-base">
                Quelle est ta question ou le problème à résoudre ?
              </label>
              <Input
                id="question"
                name="question"
                className="w-full bg-[#222e3f] text-[#e0eaef] font-mono border-0 rounded-lg placeholder:text-[#47607b]/80 py-3 px-4 shadow focus:ring focus:ring-primary"
                placeholder="Quelle partie du code te pose problème ? Que veux-tu améliorer ?"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="libraries" className="block font-semibold mb-2 text-[#e7fffc] text-base">
                Quelles bibliothèques/frameworks veux-tu utiliser ? <span className="font-normal text-[#ebfffd99]">(optionnel)</span>
              </label>
              <Input
                id="libraries"
                name="libraries"
                className="w-full bg-[#222e3f] text-[#e0eaef] font-mono border-0 rounded-lg placeholder:text-[#47607b]/70 py-3 px-4 shadow focus:ring focus:ring-primary"
                placeholder="ex : pandas, numpy, flask, requests, Python 3.11..."
                value={libraries}
                onChange={e => setLibraries(e.target.value)}
                autoComplete="off"
              />
            </div>
          </form>
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <Button
              variant="secondary"
              onClick={() => handlePythonHelp("analyze")}
              disabled={loading !== null || !isFormFilled}
              className="font-bold py-2 px-4 bg-[#535b67] border-none text-white rounded-lg hover:bg-[#677584] hover:text-white"
            >
              {loading === "analyze" ? "Analyse..." : "Analyser le code"}
            </Button>
            <Button
              variant="outline"
              onClick={() => handlePythonHelp("debug")}
              disabled={loading !== null || !isFormFilled}
              className="font-bold py-2 px-4 bg-[#949ba6] border-none text-[#232744] rounded-lg hover:bg-[#bbc8d6]"
            >
              {loading === "debug" ? "Recherche d'erreurs..." : "Trouver les erreurs"}
            </Button>
            <Button
              onClick={() => handlePythonHelp("improve")}
              disabled={loading !== null || !isFormFilled}
              className="font-bold py-2 px-4 bg-[#46f8bf] text-[#1a3b31] rounded-lg tracking-wide shadow-sm hover:bg-[#28dab8]"
            >
              {loading === "improve" ? "Suggestions..." : "Proposer une version améliorée"}
            </Button>
            <Button
              variant="ghost"
              onClick={reset}
              disabled={loading !== null && !isFormFilled}
              className="font-semibold text-[#fff] px-4"
            >
              Réinitialiser
            </Button>
          </div>
          {/* Affichage du résultat */}
          <div className="mt-8">
            {history.length > 0 && (
              <div className="space-y-4">
                {history.map((item, idx) => (
                  <div
                    key={idx}
                    className={
                      "relative bg-[#141933] border border-[#20294a] p-4 rounded-lg font-mono text-sm overflow-x-auto animate-fade-in"
                    }
                  >
                    <div className="font-semibold mb-2 flex items-center">
                      {item.mode === "analyze" && (
                        <>
                          <Code className="mr-1 h-4 w-4" /> Analyse&nbsp;:
                        </>
                      )}
                      {item.mode === "debug" && (
                        <>
                          <Code className="mr-1 h-4 w-4" /> Recherche d'erreurs&nbsp;:
                        </>
                      )}
                      {item.mode === "improve" && (
                        <>
                          <Code className="mr-1 h-4 w-4" /> Suggestion d'amélioration&nbsp;:
                          <Button
                            variant="ghost"
                            className="ml-2 p-1 h-7 w-7"
                            onClick={() => copyToClipboard(item.text)}
                            title="Copier la suggestion"
                          >
                            <Clipboard className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                    <div className="text-[#e1e8f6] selection:bg-[#30c57f]/50">
                      {item.text.includes("```")
                        ? formatMarkdownWithHighlight(item.text)
                        : <span>{item.text}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

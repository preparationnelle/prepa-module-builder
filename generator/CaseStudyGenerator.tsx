
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CaseStudyDisplay } from './CaseStudyDisplay';

interface CaseStudyGeneratorProps {
  language: 'fr' | 'en';
}

export const CaseStudyGenerator = ({ language }: CaseStudyGeneratorProps) => {
  const [article, setArticle] = useState('');
  const [notion, setNotion] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCaseStudy, setGeneratedCaseStudy] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const loadExample = () => {
    setArticle("https://www.lemonde.fr/international/article/2024/01/15/tensions-en-mer-de-chine-meridionale_6210234_3210.html");
    setNotion("Rivalités de puissances et espaces maritimes");
  };

  const handleGenerate = async () => {
    if (!article.trim() || !notion.trim()) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Veuillez remplir tous les champs" : "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (!currentUser) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Vous devez être connecté" : "You must be logged in",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-case-study', {
        body: {
          article: article.trim(),
          notion: notion.trim(),
          userId: currentUser.id,
          language: language,
        },
      });

      if (error) {
        console.error('Error generating case study:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: error.message || (language === 'fr' ? "Erreur lors de la génération" : "Generation error"),
          variant: "destructive",
        });
        return;
      }

      setGeneratedCaseStudy(data.caseStudy);
      setWordCount(data.wordCount);
      toast({
        title: language === 'fr' ? "Succès" : "Success",
        description: language === 'fr' ? "Étude de cas générée avec succès !" : "Case study generated successfully!",
      });

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Une erreur s'est produite" : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {language === 'fr' ? 'Générateur d\'Études de Cas' : 'Case Study Generator'}
              </div>
              <div className="text-blue-100 text-sm font-normal mt-1">
                {language === 'fr' ? "Transformez vos articles d'actualité en études de cas géopolitiques" : "Transform news articles into geopolitical case studies"}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="article" className="text-base font-medium">
                {language === 'fr' ? 'Article (URL ou texte)' : 'Article (URL or text)'}
              </Label>
              <Textarea
                id="article"
                placeholder={language === 'fr' ? 'Collez une URL d\'article ou le texte complet...' : 'Paste an article URL or full text...'}
                value={article}
                onChange={(e) => setArticle(e.target.value)}
                className="min-h-[120px] resize-none border-2 hover:border-primary/50 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notion" className="text-base font-medium">
                {language === 'fr' ? 'Notion/Thème géopolitique' : 'Geopolitical notion/theme'}
              </Label>
              <Input
                id="notion"
                placeholder={language === 'fr' ? 'Ex: Rivalités de puissances, Frontières, Ressources énergétiques...' : 'Ex: Power rivalries, Borders, Energy resources...'}
                value={notion}
                onChange={(e) => setNotion(e.target.value)}
                className="border-2 hover:border-primary/50 focus:border-primary transition-colors"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !article.trim() || !notion.trim()}
                className="flex-1 h-14 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                    {language === 'fr' ? 'Génération en cours...' : 'Generating...'}
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-3" />
                    {language === 'fr' ? 'Générer l\'étude de cas' : 'Generate case study'}
                  </>
                )}
              </Button>
              
              <Button 
                onClick={loadExample} 
                variant="outline"
                className="h-14 px-8 border-2 hover:bg-primary hover:text-white transition-all duration-300"
              >
                {language === 'fr' ? 'Exemple' : 'Example'}
              </Button>
            </div>
          </div>

          <Alert className="border-2 border-blue-200 bg-blue-50">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              {language === 'fr' 
                ? "Entrez l'URL d'un article d'actualité ou collez directement le texte, puis précisez le thème géopolitique à analyser. L'IA générera une étude de cas structurée avec contexte, chiffres clés, sujets de dissertation et analyse des acteurs."
                : "Enter the URL of a news article or paste the text directly, then specify the geopolitical theme to analyze. The AI will generate a structured case study with context, key figures, dissertation topics and actor analysis."
              }
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {generatedCaseStudy && (
        <CaseStudyDisplay
          caseStudy={generatedCaseStudy}
          wordCount={wordCount}
          language={language}
        />
      )}
    </div>
  );
};

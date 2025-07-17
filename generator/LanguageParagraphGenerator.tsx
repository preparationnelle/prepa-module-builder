
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Languages, Download, BookOpen, Sparkles, Lightbulb, Copy, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';
import { useToast } from '@/hooks/use-toast';

interface LanguageParagraphGeneratorProps {
  language: 'fr' | 'en';
}

export const LanguageParagraphGenerator = ({ language }: LanguageParagraphGeneratorProps) => {
  const [article, setArticle] = useState('');
  const [idea, setIdea] = useState('');
  const [targetLanguage, setTargetLanguage] = useState<'en' | 'de' | 'es'>('en');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!article.trim() || !idea.trim()) {
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' ? 
          'Veuillez remplir l\'article et l\'idée à développer.' : 
          'Please fill in both the article and the idea to develop.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-language-paragraph', {
        body: {
          article: article.trim(),
          idea: idea.trim(),
          language: targetLanguage,
        },
      });

      if (error) throw error;

      setResult(data.content);
      toast({
        title: language === 'fr' ? 'Succès' : 'Success',
        description: language === 'fr' ? 
          'Paragraphe généré avec succès!' : 
          'Paragraph generated successfully!',
      });
    } catch (error) {
      console.error('Error generating paragraph:', error);
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' ? 
          'Erreur lors de la génération du paragraphe.' : 
          'Error generating paragraph.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!result) return;
    const timestamp = new Date().toISOString().split('T')[0];
    const languageNames = { en: 'anglais', de: 'allemand', es: 'espagnol' };
    await downloadAsPDF(
      result, 
      `paragraphe-${languageNames[targetLanguage]}-${timestamp}`, 
      `Paragraphe d'Argumentation - ${languageNames[targetLanguage].charAt(0).toUpperCase() + languageNames[targetLanguage].slice(1)}`
    );
  };

  const handleDownloadText = () => {
    if (!result) return;
    const timestamp = new Date().toISOString().split('T')[0];
    const languageNames = { en: 'anglais', de: 'allemand', es: 'espagnol' };
    downloadAsText(result, `paragraphe-${languageNames[targetLanguage]}-${timestamp}`);
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: language === 'fr' ? 'Copié!' : 'Copied!',
      description: language === 'fr' ? 'Le paragraphe a été copié dans le presse-papiers.' : 'The paragraph has been copied to clipboard.',
    });
  };

  const loadExample = () => {
    setArticle("Remote work, accelerated by the pandemic, is transforming work organization and geographical distribution of populations. More and more city dwellers are choosing to move to the provinces, taking advantage of the flexibility offered by companies. This phenomenon raises questions about the future of large cities and the revitalization of rural areas.");
    setIdea("Remote work is transforming modern society.");
    setTargetLanguage('en');
  };

  const languageFlags = {
    en: '🇬🇧',
    de: '🇩🇪',
    es: '🇪🇸'
  };

  const languageNames = {
    en: language === 'fr' ? 'Anglais / English' : 'English',
    de: language === 'fr' ? 'Allemand / Deutsch' : 'German',
    es: language === 'fr' ? 'Espagnol / Español' : 'Spanish'
  };

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Languages className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {language === 'fr' ? 'Générateur de Paragraphes de Langues' : 'Language Paragraph Generator'}
              </div>
              <div className="text-blue-100 text-sm font-normal mt-1">
                {language === 'fr' ? 'Créez des paragraphes argumentatifs de 150 mots avec vocabulaire clé' : 'Create 150-word argumentative paragraphs with key vocabulary'}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="grid gap-6">
            <div className="relative">
              <Label htmlFor="language-select" className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-3">
                <span className="text-2xl">{languageFlags[targetLanguage]}</span>
                {language === 'fr' ? 'Langue cible' : 'Target Language'}
              </Label>
              <Select value={targetLanguage} onValueChange={(value: 'en' | 'de' | 'es') => setTargetLanguage(value)}>
                <SelectTrigger className="h-14 text-lg border-2 hover:border-primary/50 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en" className="py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🇬🇧</span>
                      <span className="font-medium">{languageNames.en}</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="de" className="py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🇩🇪</span>
                      <span className="font-medium">{languageNames.de}</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="es" className="py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🇪🇸</span>
                      <span className="font-medium">{languageNames.es}</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="article" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  {language === 'fr' ? 'Article de presse' : 'Press Article'}
                </Label>
                <Textarea
                  id="article"
                  placeholder={language === 'fr' ? 
                    'Collez ici l\'article de presse à analyser...' : 
                    'Paste the press article to analyze here...'}
                  value={article}
                  onChange={(e) => setArticle(e.target.value)}
                  rows={8}
                  className="border-2 hover:border-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="idea" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                  {language === 'fr' ? 'Idée à développer' : 'Idea to Develop'}
                </Label>
                <Textarea
                  id="idea"
                  placeholder={language === 'fr' ? 
                    'Quelle idée voulez-vous développer à partir de cet article ?' : 
                    'What idea do you want to develop from this article?'}
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  rows={8}
                  className="border-2 hover:border-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                onClick={handleGenerate} 
                disabled={loading} 
                className="flex-1 h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                    {language === 'fr' ? 'Génération en cours...' : 'Generating...'}
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-3" />
                    {language === 'fr' ? 'Générer le paragraphe' : 'Generate Paragraph'}
                  </>
                )}
              </Button>
              <Button 
                onClick={loadExample} 
                variant="outline" 
                className="h-14 px-8 border-2 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                {language === 'fr' ? 'Exemple' : 'Example'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl font-bold">
                    {language === 'fr' ? 'Paragraphe Généré' : 'Generated Paragraph'}
                  </div>
                  <div className="text-green-100 text-sm font-normal mt-1">
                    {language === 'fr' ? 'Prêt à être utilisé et mémorisé' : 'Ready to use and memorize'}
                  </div>
                </div>
              </CardTitle>
              <div className="flex gap-2">
                <Button 
                  onClick={handleCopy} 
                  variant="outline" 
                  size="sm"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all"
                >
                  {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  {copied ? (language === 'fr' ? 'Copié!' : 'Copied!') : (language === 'fr' ? 'Copier' : 'Copy')}
                </Button>
                <Button 
                  onClick={handleDownloadText} 
                  variant="outline" 
                  size="sm"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all"
                >
                  <Download className="h-4 w-4 mr-2" />
                  TXT
                </Button>
                <Button 
                  onClick={handleDownloadPDF} 
                  size="sm"
                  className="bg-white text-green-600 hover:bg-green-50 transition-all"
                >
                  <Download className="h-4 w-4 mr-2" />
                  PDF
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-200 whitespace-pre-wrap text-gray-800 leading-relaxed text-lg shadow-inner">
              {result}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

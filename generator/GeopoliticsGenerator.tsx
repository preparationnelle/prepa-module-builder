
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Globe, Loader2, AlertCircle, Download, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { downloadAll } from '@/utils/downloadUtils';

// Import nouveaux composants d'affichage
import { FlashcardDisplay } from './FlashcardDisplay';
import { CourseDisplay } from './CourseDisplay';
import { DissertationTopicsDisplay } from './DissertationTopicsDisplay';
import { CurrentEventsDisplay } from './CurrentEventsDisplay';

interface GeopoliticsGeneratorProps {
  language: 'fr' | 'en';
}

interface GeneratedContent {
  structuredCourse: string;
  flashcards: string;
  dissertationTopics: string;
  currentEvents: string;
}

export const GeopoliticsGenerator = ({ language }: GeopoliticsGeneratorProps) => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const handleGenerate = async () => {
    if (!pdfUrl.trim()) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Veuillez entrer une URL de PDF ou du texte" : "Please enter a PDF URL or text",
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
      const { data, error } = await supabase.functions.invoke('process-geopolitics-pdf', {
        body: {
          pdfUrl: pdfUrl.trim(),
          userId: currentUser.id,
          language: language,
        },
      });

      if (error) {
        console.error('Error processing PDF:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: error.message || (language === 'fr' ? "Erreur lors du traitement" : "Processing error"),
          variant: "destructive",
        });
        return;
      }

      setGeneratedContent(data);
      setPdfUrl('');
      toast({
        title: language === 'fr' ? "Succès" : "Success",
        description: language === 'fr' ? "Contenu généré avec succès !" : "Content generated successfully!",
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

  const handleDownloadAll = async () => {
    if (!generatedContent) return;
    
    try {
      await downloadAll(
        generatedContent.structuredCourse,
        generatedContent.flashcards,
        generatedContent.dissertationTopics,
        generatedContent.currentEvents,
        language
      );
      
      toast({
        title: language === 'fr' ? "Téléchargement" : "Download",
        description: language === 'fr' ? "Tous les fichiers ont été téléchargés" : "All files have been downloaded",
      });
    } catch (error) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Erreur lors du téléchargement" : "Download error",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {language === 'fr' ? 'Générateur de Géopolitique' : 'Geopolitics Generator'}
              </div>
              <div className="text-emerald-100 text-sm font-normal mt-1">
                {language === 'fr' ? "Transformez vos cours en contenu pédagogique structuré" : "Transform your courses into structured educational content"}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <Textarea
              placeholder={language === 'fr' ? 'URL du PDF (Google Drive, etc.) ou collez directement le texte du cours...' : 'PDF URL (Google Drive, etc.) or paste course text directly...'}
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
              className="min-h-[120px] resize-none border-2 hover:border-primary/50 focus:border-primary transition-colors text-lg"
            />

            <div className="flex gap-4 pt-4">
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !pdfUrl.trim()}
                className="flex-1 h-14 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                    {language === 'fr' ? 'Traitement en cours...' : 'Processing...'}
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-3" />
                    {language === 'fr' ? 'Analyser et générer' : 'Analyze and Generate'}
                  </>
                )}
              </Button>
              
              {generatedContent && (
                <Button 
                  onClick={handleDownloadAll} 
                  variant="outline"
                  className="h-14 px-8 border-2 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Download className="h-5 w-5 mr-2" />
                  {language === 'fr' ? 'Tout télécharger' : 'Download All'}
                </Button>
              )}
            </div>
          </div>

          <Alert className="border-2 border-emerald-200 bg-emerald-50">
            <AlertCircle className="h-4 w-4 text-emerald-600" />
            <AlertDescription className="text-emerald-800">
              {language === 'fr' 
                ? "Entrez l'URL d'un PDF accessible publiquement ou collez directement le texte de votre cours. Le système génèrera automatiquement : fiches structurées, flashcards, sujets de dissertation et actualités."
                : "Enter the URL of a publicly accessible PDF or paste your course text directly. The system will automatically generate: structured sheets, flashcards, dissertation topics and current events."
              }
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Affichage du contenu généré */}
      {generatedContent && (
        <div className="space-y-6">
          {/* Cours structuré */}
          <CourseDisplay 
            structuredCourse={generatedContent.structuredCourse}
            language={language}
          />
          
          {/* Flashcards */}
          <FlashcardDisplay 
            flashcards={generatedContent.flashcards}
            language={language}
          />
          
          {/* Sujets de dissertation */}
          <DissertationTopicsDisplay 
            dissertationTopics={generatedContent.dissertationTopics}
            language={language}
          />
          
          {/* Actualités */}
          <CurrentEventsDisplay 
            currentEvents={generatedContent.currentEvents}
            language={language}
          />
        </div>
      )}
    </div>
  );
};

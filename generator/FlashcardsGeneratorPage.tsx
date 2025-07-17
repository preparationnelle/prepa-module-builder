
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Youtube } from 'lucide-react';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { useProgress } from "@/context/ProgressContext";

const FlashcardsGeneratorPage = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleFlashcardCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const { trackPageVisit } = useProgress();
  
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Flashcards intelligentes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Créez automatiquement des flashcards optimisées pour la mémorisation avec révision espacée intégrée.
        </p>
        
        {/* Usage Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r max-w-4xl mx-auto mb-8">
          <p className="text-sm text-blue-800 font-medium mb-2">💡 Comment l'utiliser :</p>
          <p className="text-sm text-blue-700">
            Collez votre cours ou saisissez un thème, l'IA génère des flashcards avec questions-réponses optimisées. Système de révision espacée intégré pour mémoriser efficacement.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-red-600" />
              Tutoriel vidéo - Comment créer des flashcards intelligentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.loom.com/embed/136b7d11d85948679b56ee740374c683"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>

      <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />
    </div>
  );
};

export default FlashcardsGeneratorPage;

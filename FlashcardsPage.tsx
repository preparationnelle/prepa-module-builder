
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useProgress } from '@/context/ProgressContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { FlashcardReviewer } from '@/components/flashcards/FlashcardReviewer';

const FlashcardsPage = () => {
  const { trackPageVisit } = useProgress();
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  // Track page visit
  useEffect(() => {
    trackPageVisit('flashcards');
  }, [trackPageVisit]);

  const handleFlashcardCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {language === 'fr' ? 'Flashcards' : 'Flashcards'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Créez et révisez vos flashcards bilingues'
              : 'Create and review your bilingual flashcards'
            }
          </p>
        </div>
        
        <ToggleGroup 
          type="single" 
          value={language} 
          onValueChange={(value) => value && setLanguage(value as 'fr' | 'en')}
        >
          <ToggleGroupItem value="fr" aria-label="Français">
            🇫🇷
          </ToggleGroupItem>
          <ToggleGroupItem value="en" aria-label="English">
            🇬🇧
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="generator">
            {language === 'fr' ? 'Créer' : 'Create'}
          </TabsTrigger>
          <TabsTrigger value="review">
            {language === 'fr' ? 'Réviser' : 'Review'}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="generator">
          <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />
        </TabsContent>
        
        <TabsContent value="review">
          <FlashcardReviewer language={language} refreshTrigger={refreshTrigger} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FlashcardsPage;

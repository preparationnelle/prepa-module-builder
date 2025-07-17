
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Zap, BookOpen, Brain, Play, History, Search, Calendar } from 'lucide-react';
import { FlashcardInput } from './FlashcardInput';
import { GeneratedFlashcardsList } from './GeneratedFlashcardsList';
import { FlashcardReviewSystem } from '@/components/flashcards/FlashcardReviewSystem';
import { AutoPhraseGenerator } from './AutoPhraseGenerator';
import { useFlashcardGenerator } from '@/hooks/useFlashcardGenerator';
import { useUnifiedFlashcards } from '@/hooks/useUnifiedFlashcards';
import { FlashcardHistoryTab } from './FlashcardHistoryTab';

interface FlashcardGeneratorProps {
  language: 'fr' | 'en';
  onFlashcardCreated?: () => void;
}

export const FlashcardGenerator = ({ language, onFlashcardCreated }: FlashcardGeneratorProps) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const {
    inputWord,
    setInputWord,
    inputLanguage,
    setInputLanguage,
    isGenerating,
    generatedFlashcards,
    generateFlashcard,
    clearGeneratedHistory,
  } = useFlashcardGenerator(language, () => {
    setRefreshTrigger(prev => prev + 1);
    if (onFlashcardCreated) onFlashcardCreated();
  });

  const {
    allFlashcards,
    isLoading: isLoadingHistory,
    deleteFlashcard,
  } = useUnifiedFlashcards(language, refreshTrigger);

  const handlePhraseGenerated = (phrase: string, reference: string) => {
    // Optionally pre-fill the input with the first word of the generated phrase
    const firstWord = phrase.split(' ')[0];
    if (firstWord) {
      setInputWord(firstWord);
    }
  };

  const handleGenerate = async () => {
    await generateFlashcard(inputWord, inputLanguage);
  };

  return (
    <div className="space-y-8">
      {/* Auto phrase generation section */}
      <AutoPhraseGenerator 
        language={language} 
        onPhraseGenerated={handlePhraseGenerated}
      />

      {/* Main flashcard generator card */}
      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {language === 'fr' ? 'Générateur de Flashcards Intelligentes' : 'Smart Flashcard Generator'}
              </div>
              <div className="text-purple-100 text-sm font-normal mt-1">
                {language === 'fr' ? 'Créez des flashcards optimisées pour vos révisions' : 'Create optimized flashcards for your reviews'}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <FlashcardInput
            language={language}
            inputWord={inputWord}
            setInputWord={setInputWord}
            inputLanguage={inputLanguage}
            setInputLanguage={setInputLanguage}
            isGenerating={isGenerating}
            onGenerate={handleGenerate}
          />
        </CardContent>
      </Card>

      {/* Enhanced tabs system */}
      <Tabs defaultValue="generated" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6 h-14 bg-gradient-to-r from-purple-50 to-indigo-50">
          <TabsTrigger value="generated" className="text-base py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
            <Brain className="h-4 w-4 mr-2" />
            <div className="flex flex-col items-center">
              <span>{language === 'fr' ? 'Générées' : 'Generated'}</span>
              {generatedFlashcards.length > 0 && (
                <Badge variant="secondary" className="text-xs mt-1">
                  {generatedFlashcards.length}
                </Badge>
              )}
            </div>
          </TabsTrigger>
          
          <TabsTrigger value="history" className="text-base py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
            <History className="h-4 w-4 mr-2" />
            <div className="flex flex-col items-center">
              <span>{language === 'fr' ? 'Historique' : 'History'}</span>
              {allFlashcards.length > 0 && (
                <Badge variant="secondary" className="text-xs mt-1">
                  {allFlashcards.length}
                </Badge>
              )}
            </div>
          </TabsTrigger>
          
          <TabsTrigger value="review" className="text-base py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
            <Play className="h-4 w-4 mr-2" />
            <div className="flex flex-col items-center">
              <span>{language === 'fr' ? 'Révision' : 'Review'}</span>
              {allFlashcards.length > 0 && (
                <Badge variant="default" className="text-xs mt-1 bg-green-500">
                  {allFlashcards.length}
                </Badge>
              )}
            </div>
          </TabsTrigger>
          
          <TabsTrigger value="stats" className="text-base py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
            <BookOpen className="h-4 w-4 mr-2" />
            <div className="flex flex-col items-center">
              <span>{language === 'fr' ? 'Stats' : 'Stats'}</span>
            </div>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="generated" className="space-y-4">
          <GeneratedFlashcardsList
            language={language}
            generatedFlashcards={generatedFlashcards}
            onClearHistory={clearGeneratedHistory}
          />
        </TabsContent>
        
        <TabsContent value="history" className="space-y-4">
          <FlashcardHistoryTab
            language={language}
            flashcards={allFlashcards}
            isLoading={isLoadingHistory}
            onDelete={deleteFlashcard}
          />
        </TabsContent>
        
        <TabsContent value="review" className="space-y-4">
          <FlashcardReviewSystem
            language={language}
            refreshTrigger={refreshTrigger}
          />
        </TabsContent>
        
        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {language === 'fr' ? 'Statistiques' : 'Statistics'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{allFlashcards.length}</div>
                  <div className="text-sm text-blue-600">
                    {language === 'fr' ? 'Total créées' : 'Total created'}
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{generatedFlashcards.length}</div>
                  <div className="text-sm text-green-600">
                    {language === 'fr' ? 'Cette session' : 'This session'}
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {allFlashcards.filter(card => {
                      const today = new Date();
                      const cardDate = new Date(card.created_at);
                      return cardDate.toDateString() === today.toDateString();
                    }).length}
                  </div>
                  <div className="text-sm text-purple-600">
                    {language === 'fr' ? 'Aujourd\'hui' : 'Today'}
                  </div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">
                    {allFlashcards.filter(card => {
                      const oneWeekAgo = new Date();
                      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                      const cardDate = new Date(card.created_at);
                      return cardDate >= oneWeekAgo;
                    }).length}
                  </div>
                  <div className="text-sm text-orange-600">
                    {language === 'fr' ? 'Cette semaine' : 'This week'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

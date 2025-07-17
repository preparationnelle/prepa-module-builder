
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History } from 'lucide-react';

interface FlashcardData {
  id?: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at?: string;
}

interface GeneratedFlashcardsListProps {
  language: 'fr' | 'en';
  generatedFlashcards: FlashcardData[];
  onClearHistory: () => void;
}

export const GeneratedFlashcardsList = ({ 
  language, 
  generatedFlashcards, 
  onClearHistory 
}: GeneratedFlashcardsListProps) => {
  if (generatedFlashcards.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            {language === 'fr' ? 'Flashcards générées' : 'Generated Flashcards'}
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={onClearHistory}
            className="text-muted-foreground"
          >
            {language === 'fr' ? 'Effacer l\'historique' : 'Clear history'}
          </Button>
        </div>
        <CardDescription>
          {generatedFlashcards.length} {language === 'fr' ? 'flashcard(s) générée(s) dans cette session' : 'flashcard(s) generated in this session'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {generatedFlashcards.map((flashcard, index) => (
            <div key={index} className={`border rounded-lg p-4 ${index === 0 ? 'border-primary bg-primary/5' : ''}`}>
              {index === 0 && (
                <div className="text-sm text-primary font-medium mb-2">
                  {language === 'fr' ? '✨ Dernière générée' : '✨ Latest generated'}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">🇫🇷 Français</h4>
                  <p className="font-medium">{flashcard.word_fr}</p>
                  <p className="text-sm text-muted-foreground italic">"{flashcard.sentence_fr}"</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">🇬🇧 English</h4>
                  <p className="font-medium">{flashcard.word_en}</p>
                  <p className="text-sm text-muted-foreground italic">"{flashcard.sentence_en}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

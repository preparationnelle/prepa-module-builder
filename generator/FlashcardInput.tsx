
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Languages } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface FlashcardInputProps {
  language: 'fr' | 'en';
  inputWord: string;
  setInputWord: (word: string) => void;
  inputLanguage: 'fr' | 'en';
  setInputLanguage: (language: 'fr' | 'en') => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

export const FlashcardInput = ({ 
  language, 
  inputWord, 
  setInputWord, 
  inputLanguage, 
  setInputLanguage, 
  isGenerating, 
  onGenerate 
}: FlashcardInputProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Languages className="h-5 w-5" />
          {language === 'fr' ? 'Générateur de Flashcards' : 'Flashcard Generator'}
        </CardTitle>
        <CardDescription>
          {language === 'fr' 
            ? 'Entrez un mot pour générer une flashcard bilingue avec des exemples de phrases'
            : 'Enter a word to generate a bilingual flashcard with example sentences'
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Input
              placeholder={language === 'fr' ? 'Entrez un mot...' : 'Enter a word...'}
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && onGenerate()}
            />
          </div>
          <ToggleGroup 
            type="single" 
            value={inputLanguage} 
            onValueChange={(value) => value && setInputLanguage(value as 'fr' | 'en')}
          >
            <ToggleGroupItem value="fr" aria-label="Français">
              🇫🇷 FR
            </ToggleGroupItem>
            <ToggleGroupItem value="en" aria-label="English">
              🇬🇧 EN
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <Button 
          onClick={onGenerate} 
          disabled={isGenerating || !inputWord.trim()}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {language === 'fr' ? 'Génération...' : 'Generating...'}
            </>
          ) : (
            <>
              <Languages className="mr-2 h-4 w-4" />
              {language === 'fr' ? 'Générer la flashcard' : 'Generate flashcard'}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

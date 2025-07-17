
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, RefreshCw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

interface FlashcardData {
  id: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at: string;
}

interface FlashcardReviewerProps {
  language: 'fr' | 'en';
  refreshTrigger?: number;
}

export const FlashcardReviewer = ({ language, refreshTrigger }: FlashcardReviewerProps) => {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const loadFlashcards = async () => {
    if (!currentUser) return;

    try {
      setIsLoading(true);
      console.log('Loading flashcards for user:', currentUser.id);
      
      const { data, error } = await supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading flashcards:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' ? "Erreur lors du chargement des flashcards" : "Error loading flashcards",
          variant: "destructive",
        });
        return;
      }

      console.log('Loaded flashcards:', data);
      setFlashcards(data || []);
      setCurrentIndex(0);
      setIsFlipped(false);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const resetReview = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const refreshFlashcards = () => {
    loadFlashcards();
  };

  useEffect(() => {
    if (currentUser) {
      loadFlashcards();
    }
  }, [currentUser]);

  // Refresh when trigger changes (when new flashcard is created)
  useEffect(() => {
    if (refreshTrigger && currentUser) {
      loadFlashcards();
    }
  }, [refreshTrigger, currentUser]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            {language === 'fr' ? 'Chargement...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  if (flashcards.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            {language === 'fr' ? 'Aucune flashcard trouvée' : 'No flashcards found'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'fr' 
              ? 'Créez des flashcards d\'abord pour commencer à réviser'
              : 'Create flashcards first to start reviewing'
            }
          </p>
          <Button
            variant="outline"
            onClick={refreshFlashcards}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            {language === 'fr' ? 'Actualiser' : 'Refresh'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {language === 'fr' ? 'Révision des Flashcards' : 'Flashcard Review'}
              </CardTitle>
              <CardDescription>
                {language === 'fr' 
                  ? `Carte ${currentIndex + 1} sur ${flashcards.length}`
                  : `Card ${currentIndex + 1} of ${flashcards.length}`
                }
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={refreshFlashcards}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                {language === 'fr' ? 'Actualiser' : 'Refresh'}
              </Button>
              <Button
                variant="outline"
                onClick={resetReview}
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                {language === 'fr' ? 'Recommencer' : 'Reset'}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Flashcard */}
      <Card className="min-h-[300px] cursor-pointer" onClick={flipCard}>
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  flipCard();
                }}
                className="flex items-center gap-2"
              >
                {isFlipped ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {language === 'fr' ? 'Retourner' : 'Flip'}
              </Button>
            </div>

            {!isFlipped ? (
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? '🇫🇷 Français' : '🇫🇷 French'}
                </div>
                <h2 className="text-3xl font-bold">{currentCard.word_fr}</h2>
                <p className="text-lg text-muted-foreground italic">
                  "{currentCard.sentence_fr}"
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? '🇬🇧 Anglais' : '🇬🇧 English'}
                </div>
                <h2 className="text-3xl font-bold">{currentCard.word_en}</h2>
                <p className="text-lg text-muted-foreground italic">
                  "{currentCard.sentence_en}"
                </p>
              </div>
            )}

            <div className="pt-4 text-sm text-muted-foreground">
              {language === 'fr' ? 'Cliquez pour retourner la carte' : 'Click to flip the card'}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={previousCard}
          disabled={currentIndex === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          {language === 'fr' ? 'Précédente' : 'Previous'}
        </Button>

        <div className="flex gap-2">
          {flashcards.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          onClick={nextCard}
          disabled={currentIndex === flashcards.length - 1}
          className="flex items-center gap-2"
        >
          {language === 'fr' ? 'Suivante' : 'Next'}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress */}
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

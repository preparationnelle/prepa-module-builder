
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, RefreshCw } from 'lucide-react';

interface ReviewEmptyStateProps {
  language: 'fr' | 'en';
  showingDueForReview: boolean;
  showingDifficult: boolean;
  onShowAll: () => void;
  onRefresh: () => void;
}

export const ReviewEmptyState = ({
  language,
  showingDueForReview,
  showingDifficult,
  onShowAll,
  onRefresh,
}: ReviewEmptyStateProps) => {
  return (
    <Card>
      <CardContent className="p-8 text-center">
        <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">
          {showingDueForReview 
            ? (language === 'fr' ? 'Aucune carte à réviser maintenant' : 'No cards due for review now')
            : showingDifficult 
              ? (language === 'fr' ? 'Aucune carte difficile' : 'No difficult cards')
              : (language === 'fr' ? 'Aucune flashcard trouvée' : 'No flashcards found')
          }
        </h3>
        <p className="text-muted-foreground mb-4">
          {showingDueForReview
            ? (language === 'fr' ? 'Revenez plus tard pour de nouvelles révisions !' : 'Come back later for new reviews!')
            : showingDifficult
              ? (language === 'fr' ? 'Toutes vos cartes sont maîtrisées !' : 'All your cards are mastered!')
              : (language === 'fr' ? 'Créez des flashcards d\'abord' : 'Create flashcards first')
          }
        </p>
        <div className="flex gap-2 justify-center">
          {(showingDifficult || showingDueForReview) && (
            <Button onClick={onShowAll} variant="outline">
              {language === 'fr' ? 'Voir toutes les cartes' : 'Show all cards'}
            </Button>
          )}
          <Button onClick={onRefresh} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Actualiser' : 'Refresh'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

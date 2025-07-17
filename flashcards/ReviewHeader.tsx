
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, RotateCcw, RefreshCw } from 'lucide-react';

interface ReviewHeaderProps {
  language: 'fr' | 'en';
  currentIndex: number;
  totalCards: number;
  dueForReviewCount: number;
  difficultCount: number;
  showingDueForReview: boolean;
  showingDifficult: boolean;
  onToggleDueForReview: () => void;
  onToggleDifficult: () => void;
  onReset: () => void;
  onRefresh: () => void;
}

export const ReviewHeader = ({
  language,
  currentIndex,
  totalCards,
  dueForReviewCount,
  difficultCount,
  showingDueForReview,
  showingDifficult,
  onToggleDueForReview,
  onToggleDifficult,
  onReset,
  onRefresh,
}: ReviewHeaderProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {language === 'fr' ? 'Système de Révision Intelligent' : 'Intelligent Review System'}
              {showingDueForReview && (
                <Badge variant="default">
                  {language === 'fr' ? 'À Réviser' : 'Due for Review'}
                </Badge>
              )}
              {showingDifficult && (
                <Badge variant="destructive">
                  {language === 'fr' ? 'Mode Difficile' : 'Difficult Mode'}
                </Badge>
              )}
            </CardTitle>
            <CardDescription>
              {language === 'fr' 
                ? `Carte ${currentIndex + 1} sur ${totalCards}`
                : `Card ${currentIndex + 1} of ${totalCards}`
              }
              {dueForReviewCount > 0 && !showingDueForReview && (
                <span className="ml-2 text-blue-600">
                  ({dueForReviewCount} {language === 'fr' ? 'à réviser' : 'due for review'})
                </span>
              )}
              {difficultCount > 0 && !showingDifficult && (
                <span className="ml-2 text-orange-600">
                  ({difficultCount} {language === 'fr' ? 'difficiles' : 'difficult'})
                </span>
              )}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            {dueForReviewCount > 0 && (
              <Button
                variant={showingDueForReview ? "default" : "outline"}
                onClick={onToggleDueForReview}
                size="sm"
              >
                {language === 'fr' ? 'À réviser' : 'Due for review'} ({dueForReviewCount})
              </Button>
            )}
            {difficultCount > 0 && (
              <Button
                variant={showingDifficult ? "default" : "outline"}
                onClick={onToggleDifficult}
                size="sm"
              >
                {language === 'fr' ? 'Difficiles' : 'Difficult'} ({difficultCount})
              </Button>
            )}
            <Button variant="outline" onClick={onReset} size="sm">
              <RotateCcw className="h-4 w-4 mr-1" />
              {language === 'fr' ? 'Recommencer' : 'Reset'}
            </Button>
            <Button variant="outline" onClick={onRefresh} size="sm">
              <RefreshCw className="h-4 w-4 mr-1" />
              {language === 'fr' ? 'Actualiser' : 'Refresh'}
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

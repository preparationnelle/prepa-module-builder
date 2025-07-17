
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff } from 'lucide-react';

interface FlashcardData {
  id: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at: string;
}

interface ReviewData {
  id?: string;
  status: 'new' | 'learning' | 'review' | 'mastered';
  difficulty: number;
  review_count: number;
  correct_count: number;
  next_review_date: string;
}

interface FlashcardDisplayProps {
  language: 'fr' | 'en';
  card: FlashcardData;
  reviewData?: ReviewData;
  isFlipped: boolean;
  onFlip: () => void;
}

export const FlashcardDisplay = ({
  language,
  card,
  reviewData,
  isFlipped,
  onFlip,
}: FlashcardDisplayProps) => {
  return (
    <Card className="min-h-[400px] cursor-pointer" onClick={onFlip}>
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          {/* Card status info */}
          {reviewData && (
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant={reviewData.status === 'mastered' ? 'default' : 'secondary'}>
                {reviewData.status === 'mastered' ? '🏆 Maîtrisé' : 
                 reviewData.status === 'learning' ? '📚 Apprentissage' :
                 reviewData.status === 'review' ? '🔄 Révision' : '🆕 Nouveau'}
              </Badge>
              <Badge variant="outline">
                Difficulté: {reviewData.difficulty}/5
              </Badge>
              <Badge variant="outline">
                {language === 'fr' ? 'Révisions' : 'Reviews'}: {reviewData.review_count}
              </Badge>
              <Badge variant={reviewData.correct_count / Math.max(1, reviewData.review_count) >= 0.8 ? 'default' : 'secondary'}>
                {language === 'fr' ? 'Réussite' : 'Success'}: {Math.round((reviewData.correct_count / Math.max(1, reviewData.review_count)) * 100)}%
              </Badge>
            </div>
          )}

          <div className="flex justify-center mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
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
              <h2 className="text-4xl font-bold text-blue-600">{card.word_fr}</h2>
              <p className="text-xl text-muted-foreground italic bg-blue-50 p-4 rounded-lg">
                "{card.sentence_fr}"
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                {language === 'fr' ? '🇬🇧 Anglais' : '🇬🇧 English'}
              </div>
              <h2 className="text-4xl font-bold text-green-600">{card.word_en}</h2>
              <p className="text-xl text-muted-foreground italic bg-green-50 p-4 rounded-lg">
                "{card.sentence_en}"
              </p>
            </div>
          )}

          <div className="pt-4 text-sm text-muted-foreground">
            {language === 'fr' ? 'Cliquez pour retourner la carte' : 'Click to flip the card'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

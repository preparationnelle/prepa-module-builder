
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

interface ReviewAnswerButtonsProps {
  language: 'fr' | 'en';
  onAnswer: (correct: boolean) => void;
}

export const ReviewAnswerButtons = ({ language, onAnswer }: ReviewAnswerButtonsProps) => {
  return (
    <Card className="bg-gradient-to-r from-red-50 to-green-50 border-2">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium">
            {language === 'fr' ? 'Avez-vous mémorisé cette carte ?' : 'Have you memorized this card?'}
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => onAnswer(false)}
              variant="outline"
              size="lg"
              className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100 flex items-center gap-2 px-8 py-3"
            >
              <X className="h-5 w-5" />
              {language === 'fr' ? 'À revoir' : 'Review again'}
            </Button>
            <Button
              onClick={() => onAnswer(true)}
              variant="outline"
              size="lg"
              className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 flex items-center gap-2 px-8 py-3"
            >
              <Check className="h-5 w-5" />
              {language === 'fr' ? 'Acquis' : 'Mastered'}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            {language === 'fr' 
              ? 'Soyez honnête pour optimiser votre apprentissage !'
              : 'Be honest to optimize your learning!'
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

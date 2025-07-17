
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewNavigationProps {
  language: 'fr' | 'en';
  currentIndex: number;
  totalCards: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const ReviewNavigation = ({
  language,
  currentIndex,
  totalCards,
  onPrevious,
  onNext,
}: ReviewNavigationProps) => {
  return (
    <>
      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          {language === 'fr' ? 'Précédente' : 'Previous'}
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: totalCards }, (_, index) => (
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
          onClick={onNext}
          disabled={currentIndex === totalCards - 1}
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
          style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
        />
      </div>
    </>
  );
};

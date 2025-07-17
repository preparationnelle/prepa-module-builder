
import React from 'react';
import { useFlashcardReview } from '@/hooks/useFlashcardReview';
import { ReviewHeader } from './ReviewHeader';
import { FlashcardDisplay } from './FlashcardDisplay';
import { ReviewAnswerButtons } from './ReviewAnswerButtons';
import { ReviewNavigation } from './ReviewNavigation';
import { ReviewEmptyState } from './ReviewEmptyState';

interface FlashcardReviewSystemProps {
  language: 'fr' | 'en';
  refreshTrigger?: number;
}

export const FlashcardReviewSystem = ({ language, refreshTrigger }: FlashcardReviewSystemProps) => {
  const {
    isLoading,
    getCurrentDisplayCards,
    getDifficultCards,
    getDueForReviewCards,
    currentIndex,
    isFlipped,
    showingDifficult,
    showingDueForReview,
    reviewData,
    handleReviewAnswer,
    nextCard,
    previousCard,
    flipCard,
    resetReview,
    toggleDifficultMode,
    toggleDueForReviewMode,
    loadFlashcardsWithReviews,
  } = useFlashcardReview(language, refreshTrigger);

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

  const displayCards = getCurrentDisplayCards();
  const difficultCount = getDifficultCards().length;
  const dueForReviewCount = getDueForReviewCards().length;

  if (displayCards.length === 0) {
    return (
      <ReviewEmptyState
        language={language}
        showingDueForReview={showingDueForReview}
        showingDifficult={showingDifficult}
        onShowAll={() => {
          toggleDifficultMode();
          toggleDueForReviewMode();
        }}
        onRefresh={loadFlashcardsWithReviews}
      />
    );
  }

  const currentCard = displayCards[currentIndex];
  const currentReview = reviewData.get(currentCard.id);

  return (
    <div className="space-y-6">
      <ReviewHeader
        language={language}
        currentIndex={currentIndex}
        totalCards={displayCards.length}
        dueForReviewCount={dueForReviewCount}
        difficultCount={difficultCount}
        showingDueForReview={showingDueForReview}
        showingDifficult={showingDifficult}
        onToggleDueForReview={toggleDueForReviewMode}
        onToggleDifficult={toggleDifficultMode}
        onReset={resetReview}
        onRefresh={loadFlashcardsWithReviews}
      />

      <FlashcardDisplay
        language={language}
        card={currentCard}
        reviewData={currentReview}
        isFlipped={isFlipped}
        onFlip={flipCard}
      />

      {isFlipped && (
        <ReviewAnswerButtons
          language={language}
          onAnswer={handleReviewAnswer}
        />
      )}

      <ReviewNavigation
        language={language}
        currentIndex={currentIndex}
        totalCards={displayCards.length}
        onPrevious={previousCard}
        onNext={nextCard}
      />
    </div>
  );
};

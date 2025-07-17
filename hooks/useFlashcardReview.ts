
import { useState, useEffect } from 'react';
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

interface ReviewData {
  id?: string;
  status: 'new' | 'learning' | 'review' | 'mastered';
  difficulty: number;
  review_count: number;
  correct_count: number;
  next_review_date: string;
}

export const useFlashcardReview = (language: 'fr' | 'en', refreshTrigger?: number) => {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [reviewData, setReviewData] = useState<Map<string, ReviewData>>(new Map());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showingDifficult, setShowingDifficult] = useState(false);
  const [showingDueForReview, setShowingDueForReview] = useState(false);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  // Algorithme de répétition espacée amélioré
  const calculateNextReviewDate = (difficulty: number, correct: boolean, reviewCount: number): Date => {
    let intervalHours: number;
    
    if (correct) {
      // Si correct, augmenter l'intervalle basé sur la facilité (inverse de la difficulté)
      const easeFactor = Math.max(1.3, 2.5 - (difficulty * 0.3));
      const baseInterval = Math.pow(easeFactor, reviewCount);
      intervalHours = baseInterval * 24; // En heures
    } else {
      // Si incorrect, revoir rapidement (1-4 heures selon la difficulté)
      intervalHours = Math.max(1, 4 - difficulty);
    }

    // Limiter les intervalles extrêmes
    intervalHours = Math.min(intervalHours, 365 * 24); // Max 1 an
    intervalHours = Math.max(intervalHours, 0.5); // Min 30 minutes

    return new Date(Date.now() + intervalHours * 60 * 60 * 1000);
  };

  const getDueForReviewCards = () => {
    const now = new Date();
    return flashcards.filter(card => {
      const review = reviewData.get(card.id);
      if (!review) return true; // Nouvelles cartes sont dues
      return new Date(review.next_review_date) <= now;
    });
  };

  const getDifficultCards = () => {
    return flashcards.filter(card => {
      const review = reviewData.get(card.id);
      return review && review.difficulty >= 3;
    });
  };

  const getCurrentDisplayCards = () => {
    if (showingDueForReview) {
      return getDueForReviewCards();
    } else if (showingDifficult) {
      return getDifficultCards();
    }
    return flashcards;
  };

  const loadFlashcardsWithReviews = async () => {
    if (!currentUser) return;

    try {
      setIsLoading(true);
      
      // Load flashcards
      const { data: flashcardsData, error: flashcardsError } = await supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false });

      if (flashcardsError) {
        console.error('Error loading flashcards:', flashcardsError);
        return;
      }

      // Load review data
      const { data: reviewsData, error: reviewsError } = await supabase
        .from('flashcard_reviews')
        .select('*')
        .eq('user_id', currentUser.id);

      if (reviewsError) {
        console.error('Error loading reviews:', reviewsError);
        return;
      }

      setFlashcards(flashcardsData || []);
      
      const reviewMap = new Map<string, ReviewData>();
      reviewsData?.forEach(review => {
        const validStatuses = ['new', 'learning', 'review', 'mastered'] as const;
        const status = validStatuses.includes(review.status as any) 
          ? (review.status as 'new' | 'learning' | 'review' | 'mastered')
          : 'new';
          
        reviewMap.set(review.flashcard_id, {
          id: review.id,
          status,
          difficulty: review.difficulty,
          review_count: review.review_count,
          correct_count: review.correct_count,
          next_review_date: review.next_review_date,
        });
      });
      setReviewData(reviewMap);

      setCurrentIndex(0);
      setIsFlipped(false);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReviewAnswer = async (correct: boolean) => {
    if (!currentUser || flashcards.length === 0) return;

    const currentCard = getCurrentDisplayCards()[currentIndex];
    const existingReview = reviewData.get(currentCard.id);

    // Algorithme de difficulté amélioré
    let newDifficulty: number;
    if (correct) {
      // Réduire la difficulté graduellement quand c'est correct
      newDifficulty = Math.max(0, (existingReview?.difficulty || 2) - 0.5);
    } else {
      // Augmenter la difficulté plus agressivement quand c'est incorrect
      newDifficulty = Math.min(5, (existingReview?.difficulty || 2) + 1);
    }

    const reviewCount = (existingReview?.review_count || 0) + 1;
    const correctCount = (existingReview?.correct_count || 0) + (correct ? 1 : 0);

    // Calculer la prochaine date de révision avec l'algorithme amélioré
    const nextReviewDate = calculateNextReviewDate(newDifficulty, correct, reviewCount);

    // Déterminer le statut
    let status: 'new' | 'learning' | 'review' | 'mastered' = 'learning';
    
    // Une carte est maîtrisée si elle a été vue plusieurs fois avec succès et a une faible difficulté
    if (newDifficulty === 0 && correctCount >= 3 && reviewCount >= 3) {
      status = 'mastered';
    } else if (correctCount >= 2 && newDifficulty <= 1) {
      status = 'review';
    } else if (reviewCount === 1) {
      status = 'learning';
    } else {
      status = 'review';
    }

    const reviewPayload = {
      user_id: currentUser.id,
      flashcard_id: currentCard.id,
      status,
      difficulty: newDifficulty,
      review_count: reviewCount,
      correct_count: correctCount,
      next_review_date: nextReviewDate.toISOString(),
    };

    try {
      const { error } = await supabase
        .from('flashcard_reviews')
        .upsert(reviewPayload);

      if (error) {
        console.error('Error updating review:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' ? "Erreur lors de la sauvegarde" : "Error saving review",
          variant: "destructive",
        });
        return;
      }

      // Update local state
      setReviewData(prev => new Map(prev.set(currentCard.id, {
        id: existingReview?.id,
        status,
        difficulty: newDifficulty,
        review_count: reviewCount,
        correct_count: correctCount,
        next_review_date: nextReviewDate.toISOString(),
      })));

      // Move to next card
      nextCard();

      // Messages d'encouragement plus détaillés
      const nextReviewText = nextReviewDate.getTime() - Date.now() < 24 * 60 * 60 * 1000 
        ? language === 'fr' ? 'bientôt' : 'soon'
        : language === 'fr' ? `dans ${Math.ceil((nextReviewDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000))} jour(s)` : `in ${Math.ceil((nextReviewDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000))} day(s)`;

      toast({
        title: correct ? "✅ Acquis !" : "❌ À revoir",
        description: correct 
          ? (language === 'fr' ? `Parfait ! Prochaine révision ${nextReviewText}` : `Perfect! Next review ${nextReviewText}`)
          : (language === 'fr' ? `Cette carte reviendra ${nextReviewText}` : `This card will return ${nextReviewText}`),
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const nextCard = () => {
    const displayCards = getCurrentDisplayCards();
    if (currentIndex < displayCards.length - 1) {
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

  const toggleDifficultMode = () => {
    setShowingDifficult(!showingDifficult);
    setShowingDueForReview(false);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const toggleDueForReviewMode = () => {
    setShowingDueForReview(!showingDueForReview);
    setShowingDifficult(false);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  useEffect(() => {
    if (currentUser) {
      loadFlashcardsWithReviews();
    }
  }, [currentUser, refreshTrigger]);

  return {
    flashcards,
    reviewData,
    currentIndex,
    isFlipped,
    isLoading,
    showingDifficult,
    showingDueForReview,
    getCurrentDisplayCards,
    getDifficultCards,
    getDueForReviewCards,
    handleReviewAnswer,
    nextCard,
    previousCard,
    flipCard,
    resetReview,
    toggleDifficultMode,
    toggleDueForReviewMode,
    loadFlashcardsWithReviews,
  };
};

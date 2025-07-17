
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';

interface FlashcardData {
  id: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at: string;
}

export const useUnifiedFlashcards = (language: 'fr' | 'en', refreshTrigger?: number) => {
  const [allFlashcards, setAllFlashcards] = useState<FlashcardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { currentUser } = useAuth();
  const { toast } = useToast();

  const loadAllFlashcards = async () => {
    if (!currentUser) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      console.log('Loading all flashcards for user:', currentUser.id);
      
      const { data, error } = await supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading flashcards:', error);
        setError(error.message);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' 
            ? "Erreur lors du chargement des flashcards" 
            : "Error loading flashcards",
          variant: "destructive",
        });
        return;
      }

      console.log('Loaded flashcards:', data?.length || 0);
      setAllFlashcards(data || []);
      
    } catch (error) {
      console.error('Unexpected error:', error);
      setError('Une erreur inattendue s\'est produite');
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' 
          ? "Une erreur inattendue s'est produite" 
          : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteFlashcard = async (flashcardId: string) => {
    if (!currentUser) return;

    try {
      const { error } = await supabase
        .from('flashcards')
        .delete()
        .eq('id', flashcardId)
        .eq('user_id', currentUser.id);

      if (error) {
        console.error('Error deleting flashcard:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' 
            ? "Erreur lors de la suppression" 
            : "Error deleting flashcard",
          variant: "destructive",
        });
        return;
      }

      // Remove from local state
      setAllFlashcards(prev => prev.filter(card => card.id !== flashcardId));
      
      toast({
        title: language === 'fr' ? "Supprimé" : "Deleted",
        description: language === 'fr' 
          ? "Flashcard supprimée avec succès" 
          : "Flashcard deleted successfully",
      });
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const searchFlashcards = (query: string) => {
    if (!query.trim()) return allFlashcards;
    
    const lowerQuery = query.toLowerCase();
    return allFlashcards.filter(card => 
      card.word_fr.toLowerCase().includes(lowerQuery) ||
      card.word_en.toLowerCase().includes(lowerQuery) ||
      card.sentence_fr.toLowerCase().includes(lowerQuery) ||
      card.sentence_en.toLowerCase().includes(lowerQuery)
    );
  };

  const getFlashcardsByDateRange = (startDate?: Date, endDate?: Date) => {
    if (!startDate && !endDate) return allFlashcards;
    
    return allFlashcards.filter(card => {
      const cardDate = new Date(card.created_at);
      if (startDate && cardDate < startDate) return false;
      if (endDate && cardDate > endDate) return false;
      return true;
    });
  };

  useEffect(() => {
    if (currentUser) {
      loadAllFlashcards();
    }
  }, [currentUser, refreshTrigger]);

  return {
    allFlashcards,
    isLoading,
    error,
    loadAllFlashcards,
    deleteFlashcard,
    searchFlashcards,
    getFlashcardsByDateRange,
  };
};

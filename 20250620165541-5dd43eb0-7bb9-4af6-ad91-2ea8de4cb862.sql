
-- Add review tracking table for flashcards
CREATE TABLE public.flashcard_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  flashcard_id UUID NOT NULL REFERENCES public.flashcards(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'learning', 'review', 'mastered')),
  difficulty INTEGER NOT NULL DEFAULT 0 CHECK (difficulty >= 0 AND difficulty <= 5),
  next_review_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  review_count INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, flashcard_id)
);

-- Enable RLS on flashcard_reviews table
ALTER TABLE public.flashcard_reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for flashcard_reviews
CREATE POLICY "Users can view their own flashcard reviews" 
  ON public.flashcard_reviews 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own flashcard reviews" 
  ON public.flashcard_reviews 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own flashcard reviews" 
  ON public.flashcard_reviews 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own flashcard reviews" 
  ON public.flashcard_reviews 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create trigger to update updated_at column
CREATE TRIGGER update_flashcard_reviews_updated_at
  BEFORE UPDATE ON public.flashcard_reviews
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for performance
CREATE INDEX idx_flashcard_reviews_user_next_review 
  ON public.flashcard_reviews(user_id, next_review_date) 
  WHERE status IN ('learning', 'review');

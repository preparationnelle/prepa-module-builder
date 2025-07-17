
-- Créer une table pour l'historique des activités utilisateur
CREATE TABLE public.user_activity_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL, -- 'generator', 'translation', 'flashcard', etc.
  generator_type TEXT, -- 'answer', 'flashcards', 'languages', 'geopolitics', etc.
  input_data JSONB, -- Données d'entrée (question, texte à traduire, etc.)
  output_data JSONB, -- Résultat généré
  metadata JSONB DEFAULT '{}', -- Métadonnées additionnelles (langue, paramètres, etc.)
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index pour améliorer les performances des requêtes par utilisateur
CREATE INDEX idx_user_activity_history_user_id ON public.user_activity_history (user_id);
CREATE INDEX idx_user_activity_history_type ON public.user_activity_history (activity_type);
CREATE INDEX idx_user_activity_history_created_at ON public.user_activity_history (created_at DESC);

-- Activer RLS
ALTER TABLE public.user_activity_history ENABLE ROW LEVEL SECURITY;

-- Politiques RLS : les utilisateurs ne peuvent voir que leur propre historique
CREATE POLICY "Users can view their own activity history"
  ON public.user_activity_history
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own activity history"
  ON public.user_activity_history
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own activity history"
  ON public.user_activity_history
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own activity history"
  ON public.user_activity_history
  FOR DELETE
  USING (auth.uid() = user_id);

-- Trigger pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_user_activity_history_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_activity_history_updated_at
    BEFORE UPDATE ON public.user_activity_history
    FOR EACH ROW
    EXECUTE FUNCTION update_user_activity_history_updated_at();

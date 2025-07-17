
-- Création de la table school_profiles pour générer et stocker les fiches personnalisées d'école

CREATE TABLE public.school_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_slug TEXT NOT NULL,
  generated_data JSONB NOT NULL,
  requested_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Indice pour rechercher rapidement la fiche par école
CREATE INDEX idx_school_profiles_school_slug ON public.school_profiles (school_slug);

-- Activer la RLS :
ALTER TABLE public.school_profiles ENABLE ROW LEVEL SECURITY;

-- Policy: L'utilisateur ne peut voir que ses propres fiches
CREATE POLICY "Users can view their school profiles"
  ON public.school_profiles
  FOR SELECT
  USING (auth.uid() = requested_by);

-- Policy: L'utilisateur ne peut insérer que ses propres fiches
CREATE POLICY "Users can create their school profiles"
  ON public.school_profiles
  FOR INSERT
  WITH CHECK (auth.uid() = requested_by);

-- Policy: L'utilisateur peut modifier ses propres fiches
CREATE POLICY "Users can update their school profiles"
  ON public.school_profiles
  FOR UPDATE
  USING (auth.uid() = requested_by);

-- Policy: L'utilisateur peut supprimer ses propres fiches
CREATE POLICY "Users can delete their school profiles"
  ON public.school_profiles
  FOR DELETE
  USING (auth.uid() = requested_by);


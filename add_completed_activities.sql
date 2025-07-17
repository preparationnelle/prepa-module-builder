
-- Cette migration ajoute une colonne pour stocker les activités complétées par l'utilisateur
-- comme un objet JSON pour éviter de compter plusieurs fois la même activité

ALTER TABLE "public"."progress"
ADD COLUMN IF NOT EXISTS "completed_activities" JSONB DEFAULT '{}';

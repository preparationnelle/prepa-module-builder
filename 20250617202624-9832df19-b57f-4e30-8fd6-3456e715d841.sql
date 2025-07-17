
-- Création de la table pour stocker les erreurs grammaticales
CREATE TABLE grammar_errors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    language TEXT NOT NULL,
    grammar_point TEXT NOT NULL,
    rule TEXT NOT NULL,
    french_sentence TEXT NOT NULL,
    student_answer TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    error_type TEXT NOT NULL,
    reviewed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour optimiser les requêtes
CREATE INDEX idx_grammar_errors_user_language ON grammar_errors(user_id, language);
CREATE INDEX idx_grammar_errors_reviewed ON grammar_errors(reviewed);
CREATE INDEX idx_grammar_errors_grammar_point ON grammar_errors(grammar_point);

-- RLS (Row Level Security)
ALTER TABLE grammar_errors ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs ne voient que leurs propres erreurs
CREATE POLICY "Users can view their own grammar errors" ON grammar_errors
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own grammar errors" ON grammar_errors
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own grammar errors" ON grammar_errors
    FOR UPDATE USING (auth.uid() = user_id);

-- Trigger pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_grammar_errors_updated_at BEFORE UPDATE
    ON grammar_errors FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

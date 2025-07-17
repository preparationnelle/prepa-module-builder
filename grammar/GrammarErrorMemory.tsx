
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, RotateCcw, CheckCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface GrammarError {
  id: string;
  grammar_point: string;
  rule: string;
  french_sentence: string;
  student_answer: string;
  correct_answer: string;
  error_type: string;
  created_at: string;
  reviewed: boolean;
}

interface GrammarErrorMemoryProps {
  language: string;
  newError?: {
    grammar_point: string;
    rule: string;
    french_sentence: string;
    student_answer: string;
    correct_answer: string;
    error_type: string;
  } | null;
}

export const GrammarErrorMemory: React.FC<GrammarErrorMemoryProps> = ({ 
  language, 
  newError 
}) => {
  const { currentUser } = useAuth();
  const [errors, setErrors] = useState<GrammarError[]>([]);
  const [loading, setLoading] = useState(false);

  // Sauvegarder une nouvelle erreur
  const saveError = async (errorData: any) => {
    if (!currentUser?.id) return;
    
    try {
      const { error } = await supabase
        .from('grammar_errors')
        .insert({
          user_id: currentUser.id,
          language,
          grammar_point: errorData.grammar_point,
          rule: errorData.rule,
          french_sentence: errorData.french_sentence,
          student_answer: errorData.student_answer,
          correct_answer: errorData.correct_answer,
          error_type: errorData.error_type,
          reviewed: false
        });
      
      if (error) throw error;
      await loadErrors();
    } catch (e) {
      console.error('Erreur sauvegarde:', e);
    }
  };

  // Charger les erreurs
  const loadErrors = async () => {
    if (!currentUser?.id) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('grammar_errors')
        .select('*')
        .eq('user_id', currentUser.id)
        .eq('language', language)
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (error) throw error;
      setErrors(data || []);
    } catch (e) {
      console.error('Erreur chargement:', e);
    } finally {
      setLoading(false);
    }
  };

  // Marquer comme révisé
  const markAsReviewed = async (errorId: string) => {
    try {
      const { error } = await supabase
        .from('grammar_errors')
        .update({ reviewed: true })
        .eq('id', errorId);
      
      if (error) throw error;
      await loadErrors();
    } catch (e) {
      console.error('Erreur mise à jour:', e);
    }
  };

  // Générer une flashcard grammaticale
  const createGrammarFlashcard = async (grammarError: GrammarError) => {
    if (!currentUser?.id) return;
    
    try {
      const { error } = await supabase
        .from('flashcards')
        .insert({
          user_id: currentUser.id,
          word_fr: `Règle: ${grammarError.grammar_point}`,
          word_en: grammarError.rule,
          sentence_fr: grammarError.french_sentence,
          sentence_en: grammarError.correct_answer
        });
      
      if (error) throw error;
      await markAsReviewed(grammarError.id);
    } catch (e) {
      console.error('Erreur création flashcard:', e);
    }
  };

  useEffect(() => {
    if (currentUser?.id) {
      loadErrors();
    }
  }, [currentUser, language]);

  useEffect(() => {
    if (newError && currentUser?.id) {
      saveError(newError);
    }
  }, [newError, currentUser]);

  if (!currentUser) return null;

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-600" />
          Mémoire des erreurs grammaticales
        </CardTitle>
      </CardHeader>
      <CardContent>
        {errors.length === 0 ? (
          <p className="text-muted-foreground text-center py-4">
            Aucune erreur enregistrée pour le moment
          </p>
        ) : (
          <div className="space-y-4">
            {errors.map((error) => (
              <div
                key={error.id}
                className={`p-4 rounded-lg border ${
                  error.reviewed ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{error.grammar_point}</Badge>
                      <Badge variant={error.reviewed ? "default" : "destructive"}>
                        {error.error_type}
                      </Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p><strong>Phrase:</strong> {error.french_sentence}</p>
                      <p className="text-red-600"><strong>Votre réponse:</strong> {error.student_answer}</p>
                      <p className="text-green-600"><strong>Correction:</strong> {error.correct_answer}</p>
                      <p className="text-blue-600"><strong>Règle:</strong> {error.rule}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {!error.reviewed && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => createGrammarFlashcard(error)}
                          className="text-xs"
                        >
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Créer flashcard
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => markAsReviewed(error.id)}
                          className="text-xs"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Marqué lu
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

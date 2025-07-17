
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Loader2, Languages, Target, RefreshCw, Eye, EyeOff, Plus, CheckCircle, AlertCircle, BookOpen, Lightbulb } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { GrammarErrorMemory } from './GrammarErrorMemory';
import { SimilarSentencesGenerator } from './SimilarSentencesGenerator';
import { ProgressionTracker } from './ProgressionTracker';

interface ThemeSentence {
  french: string;
  reference: string;
  grammar_points: string[];
  notes?: string[];
  glossary?: Record<string, string>;
  mini_exercise?: {
    question: string;
    answer: string;
    explanation: string;
  };
  difficulty_level?: string;
  specialized?: boolean;
}

interface ThemeEvaluation {
  score: number;
  severity: {
    major_errors: string[];
    minor_errors: string[];
    accepted_variations: string[];
  };
  corrected: string;
  reference: string;
  grammar_rules: string[];
  tips: string[];
  weak_grammar_points: string[];
  similar_sentences: string[];
  flashcard_rule: string;
}

export const ThemeGrammaticalGenerator: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'de' | 'es'>('de'); // Défaut allemand pour vos phrases
  const [currentSentence, setCurrentSentence] = useState<ThemeSentence | null>(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<ThemeEvaluation | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showMiniExercise, setShowMiniExercise] = useState(false);
  const [newError, setNewError] = useState<any>(null);
  const [weakGrammarPoints, setWeakGrammarPoints] = useState<string[]>([]);
  const [similarSentences, setSimilarSentences] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [completedSentence, setCompletedSentence] = useState(false);

  const { currentUser } = useAuth();
  const { toast } = useToast();

  const generateNewSentence = useCallback(async () => {
    console.log(`🚀 Génération d'une nouvelle phrase en ${language}`);
    setIsGenerating(true);
    
    try {
      console.log('📝 Historique actuel:', history);
      
      const { data, error } = await supabase.functions.invoke('generate-theme-sentence', {
        body: { 
          language, 
          history: history.length > 0 ? history : [] 
        }
      });

      console.log('📊 Réponse reçue:', { data, error });

      if (error) {
        console.error('❌ Erreur Supabase:', error);
        throw error;
      }

      if (!data) {
        console.error('❌ Pas de données reçues');
        throw new Error('Aucune donnée reçue du serveur');
      }

      console.log('✅ Phrase générée avec succès:', {
        french: data.french,
        reference: data.reference,
        specialized: data.specialized,
        difficulty: data.difficulty_level
      });

      setCurrentSentence(data);
      setStudentAnswer('');
      setEvaluation(null);
      setShowHints(false);
      setShowMiniExercise(false);
      setNewError(null);
      setWeakGrammarPoints([]);
      setSimilarSentences([]);
      setCompletedSentence(false);
      
      // Ajouter à l'historique
      if (data.reference) {
        setHistory(prev => [...prev, data.reference].slice(-5)); // Garder les 5 dernières
      }
      
      toast({
        title: "Phrase générée !",
        description: data.specialized ? 
          "Nouvelle phrase spécialisée allemande prête pour la traduction" : 
          "Nouvelle phrase prête pour la traduction",
      });
      
    } catch (error) {
      console.error('💥 Erreur complète lors de la génération:', error);
      toast({
        title: "Erreur de génération",
        description: `Une erreur est survenue: ${error instanceof Error ? error.message : 'Erreur inconnue'}`,
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  }, [language, history, toast]);

  const evaluateAnswer = useCallback(async () => {
    if (!currentSentence || !studentAnswer.trim()) {
      toast({
        title: "Réponse requise",
        description: "Veuillez entrer votre traduction avant d'évaluer.",
        variant: "destructive"
      });
      return;
    }

    console.log(`🔍 Évaluation de la réponse en ${language}:`, {
      student: studentAnswer.trim(),
      french: currentSentence.french,
      reference: currentSentence.reference
    });

    setIsEvaluating(true);
    try {
      const { data, error } = await supabase.functions.invoke('evaluate-theme-translation', {
        body: {
          language,
          student: studentAnswer.trim(),
          french: currentSentence.french,
          reference: currentSentence.reference,
          grammar_points: currentSentence.grammar_points
        }
      });

      console.log('📊 Évaluation reçue:', { data, error });

      if (error) {
        console.error('❌ Erreur d\'évaluation:', error);
        throw error;
      }

      if (!data) {
        throw new Error('Pas de données d\'évaluation reçues');
      }

      console.log('✅ Évaluation terminée avec succès:', {
        score: data.score,
        major_errors: data.severity?.major_errors?.length || 0,
        minor_errors: data.severity?.minor_errors?.length || 0
      });

      setEvaluation(data);
      setWeakGrammarPoints(data.weak_grammar_points || []);
      setSimilarSentences(data.similar_sentences || []);
      setCompletedSentence(true);

      // Sauvegarder l'erreur pour la mémoire si il y a des erreurs grammaticales
      if (data.severity?.major_errors?.length > 0 && currentUser?.id) {
        const grammarError = {
          grammar_point: data.weak_grammar_points?.[0] || currentSentence.grammar_points[0],
          rule: data.flashcard_rule || "Règle à réviser",
          french_sentence: currentSentence.french,
          student_answer: studentAnswer.trim(),
          correct_answer: data.corrected || currentSentence.reference,
          error_type: data.severity.major_errors[0] || "Erreur grammaticale"
        };
        setNewError(grammarError);
      }

      toast({
        title: `Score: ${data.score}/10`,
        description: data.score >= 8 ? "Excellente traduction !" : 
                    data.score >= 6 ? "Bonne traduction, quelques erreurs à corriger" :
                    "Traduction à retravailler, consultez les corrections",
        variant: data.score >= 6 ? "default" : "destructive"
      });

    } catch (error) {
      console.error('💥 Erreur complète lors de l\'évaluation:', error);
      toast({
        title: "Erreur d'évaluation",
        description: `Une erreur est survenue: ${error instanceof Error ? error.message : 'Erreur inconnue'}`,
        variant: "destructive"
      });
    } finally {
      setIsEvaluating(false);
    }
  }, [currentSentence, studentAnswer, language, currentUser, toast]);

  const resetExercise = useCallback(() => {
    console.log('🔄 Reset de l\'exercice');
    setCurrentSentence(null);
    setStudentAnswer('');
    setEvaluation(null);
    setShowHints(false);
    setShowMiniExercise(false);
    setNewError(null);
    setWeakGrammarPoints([]);
    setSimilarSentences([]);
    setHistory([]);
    setCompletedSentence(false);
    
    toast({
      title: "Exercice réinitialisé",
      description: "Vous pouvez commencer un nouvel exercice",
    });
  }, [toast]);

  const handlePracticeSentence = useCallback((sentence: string) => {
    setStudentAnswer('');
    setEvaluation(null);
    setShowHints(false);
    setCompletedSentence(false);
    toast({
      title: "Nouvelle phrase à pratiquer",
      description: "Traduisez cette phrase similaire pour renforcer vos acquis !",
    });
  }, [toast]);

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-700 bg-green-50 border-green-200";
    if (score >= 6) return "text-amber-700 bg-amber-50 border-amber-200";
    return "text-red-700 bg-red-50 border-red-200";
  };

  // Génération automatique au chargement
  React.useEffect(() => {
    console.log('🎯 Composant monté, génération automatique d\'une phrase');
    generateNewSentence();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header harmonisé avec la direction artistique */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-gradient-to-br from-primary to-orange-600 rounded-xl text-white shadow-lg">
            <Languages className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              Thème Grammatical
            </h1>
            <p className="text-muted-foreground">
              Entraînement intensif avec phrases spécialisées et correction IA détaillée
            </p>
          </div>
        </div>

        {/* Sélection de langue avec palette harmonisée */}
        <ToggleGroup
          type="single"
          value={language}
          onValueChange={(value) => {
            if (value) {
              console.log(`🌍 Changement de langue vers: ${value}`);
              setLanguage(value as 'en' | 'de' | 'es');
              // Reset l'exercice lors du changement de langue
              setCurrentSentence(null);
              setStudentAnswer('');
              setEvaluation(null);
              setHistory([]);
            }
          }}
          className="bg-orange-50 p-1 rounded-lg border border-orange-100"
        >
          <ToggleGroupItem value="en" className="data-[state=on]:bg-white data-[state=on]:shadow-sm data-[state=on]:text-primary">
            🇬🇧 Anglais
          </ToggleGroupItem>
          <ToggleGroupItem value="de" className="data-[state=on]:bg-white data-[state=on]:shadow-sm data-[state=on]:text-primary">
            🇩🇪 Allemand
          </ToggleGroupItem>
          <ToggleGroupItem value="es" className="data-[state=on]:bg-white data-[state=on]:shadow-sm data-[state=on]:text-primary">
            🇪🇸 Espagnol
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Debug info en développement */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-gray-100 p-2 rounded text-xs">
          <strong>Debug:</strong> Langue={language}, Phrase chargée={!!currentSentence}, 
          Historique={history.length}, Spécialisée={currentSentence?.specialized ? 'Oui' : 'Non'}
        </div>
      )}

      {/* Progression tracker harmonisé */}
      <ProgressionTracker 
        language={language}
        currentScore={evaluation?.score}
        completedSentence={completedSentence}
      />

      {/* Zone 1: Génération de phrase - Palette orange */}
      <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <Target className="h-5 w-5" />
            Zone de génération
            {language === 'de' && (
              <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                Phrases spécialisées
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <Button
              onClick={generateNewSentence}
              disabled={isGenerating}
              size="lg"
              className="bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Génération en cours...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-5 w-5" />
                  Nouvelle phrase
                </>
              )}
            </Button>
            <p className="text-sm text-orange-700 mt-2">
              {language === 'de' 
                ? "Phrases de presse spécialisées avec géopolitique et actualité"
                : "Cliquez pour générer une phrase de presse à traduire"
              }
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Zone 2: Phrase à traduire et réponse candidat */}
      {currentSentence && (
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Phrase source - Tons pêche/orange pâle */}
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Languages className="h-5 w-5" />
                Phrase à traduire
                {currentSentence.difficulty_level && (
                  <Badge variant={currentSentence.difficulty_level === 'advanced' ? 'destructive' : 'secondary'}>
                    {currentSentence.difficulty_level === 'advanced' ? 'Avancé' : 'Intermédiaire'}
                  </Badge>
                )}
                {currentSentence.specialized && (
                  <Badge className="bg-purple-100 text-purple-800">
                    Spécialisé
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-orange-200 shadow-sm">
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  {currentSentence.french}
                </p>
              </div>

              {/* Boutons d'aide */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowHints(!showHints)}
                  className="flex-1 border-orange-300 text-orange-700 hover:bg-orange-100"
                >
                  {showHints ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" />
                      Masquer indices
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir indices
                    </>
                  )}
                </Button>

                {currentSentence.glossary && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMiniExercise(!showMiniExercise)}
                    className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-100"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Glossaire
                  </Button>
                )}
              </div>

              {/* Indices conditionnels */}
              {showHints && (
                <div className="bg-orange-100 p-4 rounded-lg space-y-3 border border-orange-200">
                  <div>
                    <p className="text-sm font-medium text-orange-800">Points grammaticaux :</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {currentSentence.grammar_points.map((point, index) => (
                        <Badge key={index} variant="secondary" className="bg-orange-200 text-orange-800 text-xs border-orange-300">
                          {point}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {currentSentence.notes && (
                    <div>
                      <p className="text-sm font-medium text-orange-800">Notes :</p>
                      <ul className="text-sm text-orange-700 space-y-1">
                        {currentSentence.notes.map((note, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-1">•</span>
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Glossaire et vocabulaire */}
              {showMiniExercise && currentSentence.glossary && (
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-sm font-medium text-purple-800 mb-2">Glossaire :</p>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(currentSentence.glossary).map(([german, french], index) => (
                      <div key={index} className="flex justify-between items-center bg-white p-2 rounded border">
                        <span className="font-medium text-purple-900">{german}</span>
                        <span className="text-purple-700">{french}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Zone de réponse - Tons neutres chauds */}
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <CheckCircle className="h-5 w-5" />
                Votre traduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={studentAnswer}
                onChange={(e) => setStudentAnswer(e.target.value)}
                placeholder={`Écrivez votre traduction en ${language === 'en' ? 'anglais' : language === 'de' ? 'allemand' : 'espagnol'}...`}
                className="min-h-[120px] border-amber-200 focus:border-primary bg-white"
                disabled={isEvaluating}
              />

              <div className="flex gap-3">
                <Button
                  onClick={evaluateAnswer}
                  disabled={isEvaluating || !studentAnswer.trim()}
                  className="flex-1 bg-primary hover:bg-orange-600 text-white"
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Évaluation...
                    </>
                  ) : (
                    'Tester ma réponse'
                  )}
                </Button>
                <Button onClick={resetExercise} variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Message d'attente si pas de phrase */}
      {!currentSentence && !isGenerating && (
        <Card className="border-2 border-gray-200 bg-gray-50">
          <CardContent className="p-8 text-center">
            <p className="text-gray-600 mb-4">Aucune phrase chargée. Cliquez sur "Nouvelle phrase" pour commencer.</p>
            <Button onClick={generateNewSentence} className="bg-primary hover:bg-orange-600">
              <Plus className="mr-2 h-4 w-4" />
              Générer une phrase
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Zone 3: Correction et notation - Palette harmonisée */}
      {evaluation && (
        <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <AlertCircle className="h-5 w-5" />
                Correction détaillée
              </CardTitle>
              <div className={`px-4 py-2 rounded-full border-2 font-bold text-lg ${getScoreColor(evaluation.score)}`}>
                {evaluation.score}/10
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Comparaison des réponses */}
            <div className="grid gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-sm font-medium text-red-700 mb-2">Votre réponse :</p>
                <p className="text-red-800 font-medium">{studentAnswer}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-green-700 mb-2">Correction :</p>
                <p className="text-green-800 font-medium">{evaluation.corrected}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="text-sm font-medium text-orange-700 mb-2">Version parfaite :</p>
                <p className="text-orange-800 font-medium">{evaluation.reference}</p>
              </div>
            </div>

            {/* Analyse des erreurs avec couleurs harmonisées */}
            {(evaluation.severity.major_errors.length > 0 || evaluation.severity.minor_errors.length > 0) && (
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-800">Analyse des erreurs :</h4>
                
                {evaluation.severity.major_errors.length > 0 && (
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="text-sm font-medium text-red-700 mb-2">Erreurs graves (-2 points) :</p>
                    <ul className="space-y-1">
                      {evaluation.severity.major_errors.map((error, index) => (
                        <li key={index} className="text-red-600 flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {evaluation.severity.minor_errors.length > 0 && (
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <p className="text-sm font-medium text-amber-700 mb-2">Erreurs mineures (-1 point) :</p>
                    <ul className="space-y-1">
                      {evaluation.severity.minor_errors.map((error, index) => (
                        <li key={index} className="text-amber-600 flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {evaluation.severity.accepted_variations.length > 0 && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm font-medium text-green-700 mb-2">Variations acceptées :</p>
                    <ul className="space-y-1">
                      {evaluation.severity.accepted_variations.map((variation, index) => (
                        <li key={index} className="text-green-600 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {variation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Règles et conseils avec tons harmonisés */}
            <div className="grid lg:grid-cols-2 gap-4">
              {evaluation.grammar_rules.length > 0 && (
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="text-sm font-medium text-orange-700 mb-2">Règles à retenir :</p>
                  <ul className="space-y-1">
                    {evaluation.grammar_rules.map((rule, index) => (
                      <li key={index} className="text-orange-600 text-sm flex items-start">
                        <span className="text-orange-500 mr-2">📖</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {evaluation.tips.length > 0 && (
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm font-medium text-amber-700 mb-2">Conseils :</p>
                  <ul className="space-y-1">
                    {evaluation.tips.map((tip, index) => (
                      <li key={index} className="text-amber-600 text-sm flex items-start">
                        <span className="text-amber-500 mr-2">💡</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mini-exercice après correction */}
      {evaluation && currentSentence?.mini_exercise && (
        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Lightbulb className="h-5 w-5" />
              Mini-exercice de renforcement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <p className="text-purple-900 font-medium mb-3">{currentSentence.mini_exercise.question}</p>
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <p className="text-sm text-purple-700 mb-1"><strong>Réponse :</strong> {currentSentence.mini_exercise.answer}</p>
                <p className="text-sm text-purple-600"><strong>Explication :</strong> {currentSentence.mini_exercise.explanation}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Générateur de phrases similaires */}
      <SimilarSentencesGenerator
        weakGrammarPoints={weakGrammarPoints}
        similarSentences={similarSentences}
        language={language}
        onPracticeSentence={handlePracticeSentence}
      />

      {/* Mémoire des erreurs grammaticales */}
      <GrammarErrorMemory 
        language={language} 
        newError={newError}
      />
    </div>
  );
};

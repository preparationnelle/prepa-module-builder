
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, RotateCcw, BookOpen } from 'lucide-react';
import { pythonQuestions, PythonQuestion } from '@/data/pythonQuestions';
import { Link } from 'react-router-dom';

export const PythonQuizGenerator = () => {
  const [currentQuestion, setCurrentQuestion] = useState<PythonQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [stats, setStats] = useState({ correct: 0, total: 0 });
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);

  const getRandomQuestion = () => {
    const availableQuestions = pythonQuestions.filter(q => !usedQuestions.includes(q.id));
    
    if (availableQuestions.length === 0) {
      // Reset si toutes les questions ont été utilisées
      setUsedQuestions([]);
      return pythonQuestions[Math.floor(Math.random() * pythonQuestions.length)];
    }
    
    return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  };

  const startNewQuestion = () => {
    const question = getRandomQuestion();
    setCurrentQuestion(question);
    setUserAnswer('');
    setShowResult(false);
    setUsedQuestions(prev => [...prev, question.id]);
  };

  const checkAnswer = () => {
    if (!currentQuestion) return;
    
    const userAnswerNormalized = userAnswer.trim().toLowerCase();
    const correctAnswerNormalized = currentQuestion.correctAnswer.toLowerCase();
    
    const correct = userAnswerNormalized === correctAnswerNormalized;
    setIsCorrect(correct);
    setShowResult(true);
    setStats(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const resetQuiz = () => {
    setStats({ correct: 0, total: 0 });
    setUsedQuestions([]);
    startNewQuestion();
  };

  useEffect(() => {
    startNewQuestion();
  }, []);

  const successRate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header avec statistiques */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-blue-800">
                🐍 Testez vos connaissances Python ECG
              </CardTitle>
              <p className="text-blue-600 mt-2">
                Maîtrisez toutes les commandes Python au programme de prépa ECG
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/python-reference">
                <Button variant="outline" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Voir toutes les commandes
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={resetQuiz}
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Statistiques */}
      {stats.total > 0 && (
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{stats.correct}</div>
                <div className="text-sm text-muted-foreground">Bonnes réponses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                <div className="text-sm text-muted-foreground">Questions totales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{successRate}%</div>
                <div className="text-sm text-muted-foreground">Taux de réussite</div>
              </div>
            </div>
            <Progress value={successRate} className="mt-4" />
          </CardContent>
        </Card>
      )}

      {/* Question actuelle */}
      {currentQuestion && (
        <Card className="bg-white border-2 border-blue-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                {currentQuestion.category}
              </Badge>
              <div className="text-sm text-muted-foreground">
                Question {stats.total + 1}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">
                {currentQuestion.question}
              </h3>
              
              {!showResult ? (
                <div className="space-y-4">
                  <div>
                    <Input
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Tapez votre réponse ici... (ex: np.sin())"
                      className="text-lg font-mono"
                      onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                    />
                  </div>
                  <Button 
                    onClick={checkAnswer}
                    disabled={!userAnswer.trim()}
                    className="w-full"
                  >
                    Valider la réponse
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg border-2 ${
                    isCorrect 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <span className="font-semibold">
                        {isCorrect ? 'Correct !' : 'Incorrect'}
                      </span>
                    </div>
                    
                    {!isCorrect && (
                      <div>
                        <p className="mb-2">Votre réponse : <code className="bg-gray-100 px-2 py-1 rounded">{userAnswer}</code></p>
                        <p>Bonne réponse : <code className="bg-gray-100 px-2 py-1 rounded">{currentQuestion.correctAnswer}</code></p>
                      </div>
                    )}
                    
                    {currentQuestion.explanation && (
                      <p className="mt-2 text-sm">{currentQuestion.explanation}</p>
                    )}
                  </div>
                  
                  <Button 
                    onClick={startNewQuestion}
                    className="w-full"
                  >
                    Question suivante
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

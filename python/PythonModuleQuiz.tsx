
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  correctAnswers: string[];
  hint?: string;
  explanation?: string;
}

interface PythonModuleQuizProps {
  title: string;
  questions: QuizQuestion[];
  moduleColor?: string;
}

export const PythonModuleQuiz: React.FC<PythonModuleQuizProps> = ({
  title,
  questions,
  moduleColor = "blue"
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const normalizeAnswer = (answer: string) => {
    return answer.trim().toLowerCase().replace(/\s+/g, ' ');
  };

  const checkAnswer = () => {
    const normalizedUserAnswer = normalizeAnswer(userAnswer);
    const isCorrect = questions[currentQuestion].correctAnswers.some(
      correct => normalizeAnswer(correct) === normalizedUserAnswer
    );
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = isCorrect;
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer('');
    setAnswers([]);
    setShowResult(false);
    setIsCompleted(false);
  };

  const score = answers.filter(Boolean).length;
  const colorClasses = {
    blue: "border-blue-200 bg-gradient-to-br from-blue-50 to-violet-50 text-blue-700",
    green: "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700",
    purple: "border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 text-purple-700"
  };

  if (isCompleted) {
    return (
      <Card className={`mt-8 ${colorClasses[moduleColor as keyof typeof colorClasses]}`}>
        <CardHeader>
          <CardTitle className="text-xl">🎉 Quiz terminé !</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold">
              {score} / {questions.length}
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Score: {Math.round((score / questions.length) * 100)}%
            </Badge>
            <p className="text-gray-700">
              {score === questions.length 
                ? "Parfait ! Vous maîtrisez toutes les notions." 
                : score >= questions.length * 0.7
                ? "Très bien ! Quelques révisions et ce sera parfait."
                : "Continuez à vous entraîner, vous y arriverez !"}
            </p>
            <Button onClick={resetQuiz} className="mt-4">
              <RotateCcw className="h-4 w-4 mr-2" />
              Recommencer
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`mt-8 ${colorClasses[moduleColor as keyof typeof colorClasses]}`}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="outline">
            {currentQuestion + 1} / {questions.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">
              Question {currentQuestion + 1}
            </h3>
            <p className="text-gray-700 mb-4">
              {questions[currentQuestion].question}
            </p>
          </div>

          <div>
            <Input
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Tapez votre réponse Python ici..."
              className="font-mono"
              onKeyPress={(e) => e.key === 'Enter' && !showResult && checkAnswer()}
              disabled={showResult}
            />
          </div>

          {!showResult ? (
            <Button 
              onClick={checkAnswer} 
              disabled={!userAnswer.trim()}
              className="w-full"
            >
              Vérifier
            </Button>
          ) : (
            <div className="space-y-3">
              <div className={`p-3 rounded flex items-center gap-2 ${
                answers[currentQuestion] 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                {answers[currentQuestion] ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-700 font-semibold">Correct !</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span className="text-red-700 font-semibold">Incorrect</span>
                  </>
                )}
              </div>
              
              {!answers[currentQuestion] && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-blue-700 font-semibold mb-1">Réponse correcte :</p>
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    {questions[currentQuestion].correctAnswers[0]}
                  </code>
                  {questions[currentQuestion].explanation && (
                    <p className="text-blue-600 text-sm mt-2">
                      {questions[currentQuestion].explanation}
                    </p>
                  )}
                </div>
              )}

              <Button onClick={nextQuestion} className="w-full">
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
              </Button>
            </div>
          )}

          {questions[currentQuestion].hint && !showResult && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-yellow-700 text-sm">
                💡 <strong>Indice :</strong> {questions[currentQuestion].hint}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

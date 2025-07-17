
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface ContextualQuestionsFormProps {
  questions: string[];
  onAnswersSubmit: (answers: string[]) => void;
  onBack: () => void;
  language: 'fr' | 'en';
  loading?: boolean;
}

export const ContextualQuestionsForm: React.FC<ContextualQuestionsFormProps> = ({
  questions,
  onAnswersSubmit,
  onBack,
  language,
  loading = false
}) => {
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onAnswersSubmit(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      onBack();
    }
  };

  const canProceed = answers[currentQuestionIndex]?.trim().length > 10;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>
            {language === 'fr' 
              ? `Question ${currentQuestionIndex + 1} sur ${questions.length}` 
              : `Question ${currentQuestionIndex + 1} of ${questions.length}`}
          </span>
          <div className="flex space-x-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentQuestionIndex 
                    ? 'bg-primary' 
                    : index < currentQuestionIndex 
                      ? 'bg-green-500' 
                      : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </CardTitle>
        <CardDescription>
          {language === 'fr'
            ? 'Répondez aux questions pour personnaliser votre réponse d\'entretien'
            : 'Answer the questions to personalize your interview response'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">
            {questions[currentQuestionIndex]}
          </h3>
          <Textarea
            placeholder={language === 'fr' 
              ? "Décrivez une situation concrète, avec des détails..." 
              : "Describe a concrete situation, with details..."}
            value={answers[currentQuestionIndex]}
            onChange={(e) => handleAnswerChange(currentQuestionIndex, e.target.value)}
            className="min-h-[120px]"
          />
          <p className="text-sm text-muted-foreground mt-2">
            {language === 'fr'
              ? `${answers[currentQuestionIndex]?.length || 0} caractères (minimum 10)`
              : `${answers[currentQuestionIndex]?.length || 0} characters (minimum 10)`}
          </p>
        </div>

        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === 'fr' ? 'Précédent' : 'Previous'}
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={!canProceed || loading}
            className="flex items-center gap-2"
          >
            {loading ? (
              language === 'fr' ? 'Génération...' : 'Generating...'
            ) : isLastQuestion ? (
              language === 'fr' ? 'Générer ma réponse' : 'Generate my answer'
            ) : (
              language === 'fr' ? 'Suivant' : 'Next'
            )}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

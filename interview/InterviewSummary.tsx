
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InterviewQuestion } from './interviewQuestions';

interface InterviewSummaryProps {
  responses: {
    question: InterviewQuestion;
    response: string;
    feedback: {
      strength: string;
      improvement: string;
    };
  }[];
  onFinish: () => void;
}

const InterviewSummary: React.FC<InterviewSummaryProps> = ({ responses, onFinish }) => {
  // Generate global feedback based on all responses
  const generateGlobalFeedback = () => {
    // This would be more sophisticated in a real app with AI
    return {
      strengths: [
        "Vous présentez clairement vos idées et utilisez des exemples concrets.",
        "Vous montrez une bonne connaissance de vous-même et de vos objectifs.",
        "Votre capacité à structurer vos réponses est appréciable."
      ],
      improvements: [
        "Certaines réponses pourraient être plus concises et aller droit au but.",
        "Pensez à mettre davantage en valeur vos réalisations et compétences.",
        "Veillez à équilibrer le temps de parole entre les différentes questions."
      ],
      tips: [
        "Préparez 3-4 exemples précis de réalisations que vous pouvez adapter à différentes questions.",
        "Entraînez-vous à répondre en utilisant la méthode STAR (Situation, Tâche, Action, Résultat).",
        "Filmez-vous pour prendre conscience de votre langage corporel et verbal."
      ]
    };
  };

  const feedback = generateGlobalFeedback();

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Félicitations pour votre entretien simulé !</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="text-lg font-medium mb-3">Points forts</h3>
          <ul className="space-y-2">
            {feedback.strengths.map((strength, index) => (
              <li key={index} className="flex gap-2">
                <span>•</span> {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <h3 className="text-lg font-medium mb-3">Axes d'amélioration</h3>
          <ul className="space-y-2">
            {feedback.improvements.map((improvement, index) => (
              <li key={index} className="flex gap-2">
                <span>•</span> {improvement}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <h3 className="text-lg font-medium mb-3">Conseils pratiques</h3>
          <ul className="space-y-2">
            {feedback.tips.map((tip, index) => (
              <li key={index} className="flex gap-2">
                <span>•</span> {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center italic text-muted-foreground">
          "La préparation est la clé du succès. Continuez à vous entraîner et vous verrez les résultats!"
        </div>

        <div className="flex flex-col items-center pt-4">
          <Button size="lg" onClick={onFinish}>
            Explorer d'autres questions d'entretien
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterviewSummary;

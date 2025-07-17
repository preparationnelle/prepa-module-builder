
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordCountIndicator } from './WordCountIndicator';
import { ResponseTabs, Answer } from './ResponseTabs';

type ResponseCardProps = {
  question: string;
  answer: Answer;
  wordCount: number;
  language: 'fr' | 'en';
  activeTab: string;
  onTabChange: (value: string) => void;
  onClearAnswer: () => void;
};

export const ResponseCard = ({
  question,
  answer,
  wordCount,
  language,
  activeTab,
  onTabChange,
  onClearAnswer
}: ResponseCardProps) => {
  return (
    <Card className="bg-white">
      <CardHeader className="border-b pb-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold">{question}</CardTitle>
            <CardDescription className="flex justify-between mt-1">
              <span>
                {language === 'fr'
                  ? 'Réponse complète avec analyse et conseils'
                  : 'Complete answer with analysis and advice'}
              </span>
              <WordCountIndicator count={wordCount} target={250} tolerance={0.2} language={language} />
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <ResponseTabs 
          answer={answer} 
          activeTab={activeTab} 
          language={language} 
          onTabChange={onTabChange} 
        />
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button variant="outline" onClick={onClearAnswer}>
          {language === 'fr' ? 'Générer une autre réponse' : 'Generate another answer'}
        </Button>
        <Button asChild>
          <Link to="/methodologie/entretiens-personnalite">
            {language === 'fr' ? 'Voir nos méthodes d\'entretien' : 'See our interview methods'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};


import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Target } from 'lucide-react';

interface SimilarSentencesGeneratorProps {
  weakGrammarPoints: string[];
  similarSentences: string[];
  language: string;
  onPracticeSentence: (sentence: string) => void;
}

export const SimilarSentencesGenerator: React.FC<SimilarSentencesGeneratorProps> = ({
  weakGrammarPoints,
  similarSentences,
  language,
  onPracticeSentence
}) => {
  const [practiceMode, setPracticeMode] = useState(false);

  if (!weakGrammarPoints.length && !similarSentences.length) {
    return null;
  }

  return (
    <Card className="mt-6 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-amber-800">
          <Target className="h-5 w-5" />
          Consolidation grammaticale
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {weakGrammarPoints.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 text-amber-700">Points à renforcer :</h4>
            <div className="flex flex-wrap gap-2">
              {weakGrammarPoints.map((point, index) => (
                <Badge key={index} variant="outline" className="border-amber-300 text-amber-700">
                  {point}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {similarSentences.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 text-amber-700">Phrases similaires à pratiquer :</h4>
            <div className="space-y-2">
              {similarSentences.map((sentence, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded border border-amber-200">
                  <span className="text-sm flex-1">{sentence}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onPracticeSentence(sentence)}
                    className="ml-2 text-xs border-primary text-primary hover:bg-orange-50"
                  >
                    Pratiquer
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-xs text-amber-700 bg-amber-100 p-2 rounded border border-amber-200">
          💡 Ces phrases travaillent les mêmes structures grammaticales que votre erreur. Entraînez-vous pour consolider vos acquis !
        </div>
      </CardContent>
    </Card>
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock } from 'lucide-react';

interface ProgressionData {
  totalSentences: number;
  completedSentences: number;
  averageScore: number;
  weakPoints: string[];
  lastSession: Date;
  streak: number;
}

interface ProgressionTrackerProps {
  language: string;
  currentScore?: number;
  completedSentence?: boolean;
}

export const ProgressionTracker: React.FC<ProgressionTrackerProps> = ({
  language,
  currentScore,
  completedSentence
}) => {
  const [progression, setProgression] = useState<ProgressionData>({
    totalSentences: 0,
    completedSentences: 0,
    averageScore: 0,
    weakPoints: [],
    lastSession: new Date(),
    streak: 0
  });

  // Load progression data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`theme-progression-${language}`);
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        // Ensure lastSession is a Date object
        if (parsedData.lastSession) {
          parsedData.lastSession = new Date(parsedData.lastSession);
        }
        setProgression(parsedData);
      } catch (error) {
        console.error('Error parsing progression data:', error);
      }
    }
  }, [language]);

  // Stable function to save progression
  const saveProgression = useCallback((updatedProgression: ProgressionData) => {
    localStorage.setItem(`theme-progression-${language}`, JSON.stringify(updatedProgression));
  }, [language]);

  // Save progression when a sentence is completed
  useEffect(() => {
    if (completedSentence && currentScore !== undefined) {
      setProgression(prevProgression => {
        const updated = {
          ...prevProgression,
          totalSentences: prevProgression.totalSentences + 1,
          completedSentences: prevProgression.completedSentences + 1,
          averageScore: Math.round(
            (prevProgression.averageScore * prevProgression.totalSentences + currentScore) / 
            (prevProgression.totalSentences + 1)
          ),
          lastSession: new Date(),
          streak: currentScore >= 7 ? prevProgression.streak + 1 : 0
        };
        
        saveProgression(updated);
        return updated;
      });
    }
  }, [completedSentence, currentScore, saveProgression]);

  const progressPercentage = progression.totalSentences > 0 
    ? (progression.completedSentences / Math.max(progression.totalSentences, 10)) * 100 
    : 0;

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <TrendingUp className="h-5 w-5" />
          Progression - {language.toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main statistics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {progression.completedSentences}
            </div>
            <div className="text-xs text-muted-foreground">Phrases</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${getScoreColor(progression.averageScore)}`}>
              {progression.averageScore}/10
            </div>
            <div className="text-xs text-muted-foreground">Moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">
              {progression.streak}
            </div>
            <div className="text-xs text-muted-foreground">Série</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-orange-700">Objectif session</span>
            <span className="text-orange-700">{Math.min(progressPercentage, 100).toFixed(0)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Weak points */}
        {progression.weakPoints.length > 0 && (
          <div>
            <div className="text-sm font-medium text-orange-700 mb-2">Points à travailler :</div>
            <div className="flex flex-wrap gap-1">
              {progression.weakPoints.slice(0, 3).map((point, index) => (
                <Badge key={index} variant="outline" className="text-xs border-orange-300 text-orange-700">
                  {point}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Last session */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          Dernière session : {progression.lastSession.toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  );
};

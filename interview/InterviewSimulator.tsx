
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { InterviewQuestion, INTERVIEW_QUESTIONS } from './interviewQuestions';
import InterviewFeedback from './InterviewFeedback';
import InterviewSummary from './InterviewSummary';

interface InterviewSimulatorProps {
  onFinish: () => void;
}

const InterviewSimulator: React.FC<InterviewSimulatorProps> = ({ onFinish }) => {
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [responses, setResponses] = useState<{question: InterviewQuestion, response: string, feedback: {strength: string, improvement: string}}[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Current block and question
  const currentBlock = INTERVIEW_QUESTIONS[currentBlockIndex];
  const currentQuestion = currentBlock?.questions[currentQuestionIndex];

  // Handle question submission
  const handleSubmit = () => {
    if (userResponse.trim().length < 5) return;
    
    setIsSubmitted(true);
    
    // Generate mock feedback (in a real app, this could come from an AI)
    const mockFeedback = generateFeedback(userResponse);
    
    // Save the response and feedback
    setResponses([...responses, {
      question: currentQuestion,
      response: userResponse,
      feedback: mockFeedback
    }]);
  };

  // Move to the next question
  const handleNext = () => {
    setIsSubmitted(false);
    setUserResponse('');
    
    // Check if we're at the end of the current block's questions
    if (currentQuestionIndex < currentBlock.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentBlockIndex < INTERVIEW_QUESTIONS.length - 1) {
      // Move to the next block
      setCurrentBlockIndex(currentBlockIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Interview is complete
      setIsComplete(true);
    }
  };

  // Focus textarea when question changes
  useEffect(() => {
    if (textareaRef.current && !isSubmitted) {
      textareaRef.current.focus();
    }
  }, [currentBlockIndex, currentQuestionIndex, isSubmitted]);

  // Simple mock feedback generator (would be replaced by a real AI in production)
  const generateFeedback = (response: string) => {
    // This is a very simple mock - in a real app, use AI
    const wordCount = response.split(/\s+/).filter(Boolean).length;
    
    let strength = "Votre réponse est bien structurée.";
    let improvement = "Essayez d'ajouter des exemples concrets.";
    
    if (wordCount < 20) {
      strength = "Vous allez droit au but.";
      improvement = "Développez davantage votre réponse pour plus d'impact.";
    } else if (wordCount > 50) {
      strength = "Votre réponse est détaillée et complète.";
      improvement = "Essayez d'être plus concis sur certains points.";
    }
    
    if (response.toLowerCase().includes('exemple')) {
      strength = "Bon usage d'exemples concrets.";
    }
    
    return { strength, improvement };
  };

  // If interview is complete, show summary
  if (isComplete) {
    return <InterviewSummary responses={responses} onFinish={onFinish} />;
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-6">
        {/* Progress indication */}
        <div className="flex justify-between mb-4 text-sm text-muted-foreground">
          <div>Bloc {currentBlockIndex + 1}/{INTERVIEW_QUESTIONS.length}: {currentBlock.title}</div>
          <div>Question {currentQuestionIndex + 1}/{currentBlock.questions.length}</div>
        </div>
        
        {/* Question display */}
        <div className="mb-6">
          <div className="text-xl font-medium mb-2">{currentQuestion.text}</div>
          {currentQuestion.optional && (
            <div className="text-sm text-muted-foreground italic">Question optionnelle</div>
          )}
        </div>
        
        {!isSubmitted ? (
          <>
            {/* Response input */}
            <Textarea
              ref={textareaRef}
              placeholder="Tapez votre réponse ici..."
              className="min-h-[150px] mb-4"
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
            />
            
            <div className="flex justify-end">
              <Button 
                onClick={handleSubmit} 
                disabled={userResponse.trim().length < 5}
              >
                Soumettre ma réponse
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Display feedback */}
            <div className="mb-6">
              <div className="font-medium mb-2">Votre réponse:</div>
              <div className="bg-muted p-3 rounded-md whitespace-pre-wrap">
                {userResponse}
              </div>
            </div>
            
            <InterviewFeedback 
              strength={responses[responses.length - 1].feedback.strength}
              improvement={responses[responses.length - 1].feedback.improvement}
            />
            
            <div className="flex justify-end mt-4">
              <Button onClick={handleNext}>
                {currentBlockIndex === INTERVIEW_QUESTIONS.length - 1 && 
                 currentQuestionIndex === currentBlock.questions.length - 1 
                  ? "Terminer l'entretien" 
                  : "Question suivante"}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default InterviewSimulator;

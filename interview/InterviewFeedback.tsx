
import React from 'react';

interface InterviewFeedbackProps {
  strength: string;
  improvement: string;
}

const InterviewFeedback: React.FC<InterviewFeedbackProps> = ({ strength, improvement }) => {
  return (
    <div className="bg-muted p-4 rounded-lg space-y-3">
      <h3 className="font-medium text-lg">Feedback sur votre réponse:</h3>
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="mt-0.5 flex-shrink-0">👍</div>
          <div>
            <span className="font-medium">Point fort:</span> {strength}
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="mt-0.5 flex-shrink-0">💡</div>
          <div>
            <span className="font-medium">À travailler:</span> {improvement}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewFeedback;

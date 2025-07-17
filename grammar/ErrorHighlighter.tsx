
import React from 'react';

interface ErrorHighlighterProps {
  text: string;
  errors: Array<{
    start: number;
    end: number;
    type: 'major' | 'minor' | 'correct';
    message?: string;
  }>;
}

export const ErrorHighlighter: React.FC<ErrorHighlighterProps> = ({ text, errors }) => {
  // Sort errors by start position
  const sortedErrors = [...errors].sort((a, b) => a.start - b.start);
  
  // Create text segments with their status
  const segments = [];
  let currentPos = 0;
  
  for (const error of sortedErrors) {
    // Add text before error (if any)
    if (error.start > currentPos) {
      segments.push({
        text: text.slice(currentPos, error.start),
        type: 'normal'
      });
    }
    
    // Add error segment
    segments.push({
      text: text.slice(error.start, error.end),
      type: error.type,
      message: error.message
    });
    
    currentPos = error.end;
  }
  
  // Add remaining text
  if (currentPos < text.length) {
    segments.push({
      text: text.slice(currentPos),
      type: 'normal'
    });
  }
  
  const getSegmentStyle = (type: string) => {
    switch (type) {
      case 'major':
        return 'bg-red-100 text-red-800 border-b-2 border-red-400 font-medium';
      case 'minor':
        return 'bg-amber-100 text-amber-800 border-b-2 border-amber-400';
      case 'correct':
        return 'bg-green-100 text-green-800 border-b-2 border-green-400';
      default:
        return '';
    }
  };
  
  return (
    <div className="leading-relaxed">
      {segments.map((segment, index) => (
        <span
          key={index}
          className={getSegmentStyle(segment.type)}
          title={segment.message}
        >
          {segment.text}
        </span>
      ))}
    </div>
  );
};

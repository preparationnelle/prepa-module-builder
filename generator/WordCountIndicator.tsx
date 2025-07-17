
import React from 'react';

type WordCountIndicatorProps = {
  count: number;
  target?: number;
  tolerance?: number;
  language?: 'fr' | 'en';
};

export const WordCountIndicator = ({ 
  count, 
  target = 250, 
  tolerance = 0.1,
  language = 'fr'
}: WordCountIndicatorProps) => {
  const min = target * (1 - tolerance);
  const max = target * (1 + tolerance);
  const isWithinRange = count >= min && count <= max;
  const isUnder = count < min;
  
  let colorClass = "text-amber-600";
  if (isWithinRange) colorClass = "text-green-600";
  else if (count > max) colorClass = "text-red-600";
  
  const wordLabel = language === 'fr' ? 'mots' : 'words';
  
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span className={colorClass}>{count} {wordLabel}</span>
      <div className="bg-gray-200 h-2 w-24 rounded-full overflow-hidden">
        <div 
          className={`h-full ${isWithinRange ? 'bg-green-500' : isUnder ? 'bg-amber-500' : 'bg-red-500'}`}
          style={{ width: `${Math.min(count / max * 100, 100)}%` }}
        />
      </div>
      <span className="text-gray-500">{min.toFixed(0)}-{max.toFixed(0)}</span>
    </div>
  );
};

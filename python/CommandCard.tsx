
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface CommandCardProps {
  command: string;
  description: string;
  copiedCommand: string | null;
  onCopy: (command: string) => void;
}

const CommandCard = ({ command, description, copiedCommand, onCopy }: CommandCardProps) => (
  <div className="bg-slate-50 p-4 rounded-lg border hover:border-blue-300 transition-colors group">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <code className="text-sm font-mono text-blue-600 font-semibold">{command}</code>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onCopy(command)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copiedCommand === command ? (
          <span className="text-green-600 text-xs">✓</span>
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  </div>
);

export default CommandCard;

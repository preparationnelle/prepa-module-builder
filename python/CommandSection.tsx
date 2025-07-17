
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CommandCard from './CommandCard';
import { PythonCommand } from '@/data/pythonCommands';

interface CommandSectionProps {
  title: string;
  commands: PythonCommand[];
  copiedCommand: string | null;
  onCopy: (command: string) => void;
}

const CommandSection = ({ title, commands, copiedCommand, onCopy }: CommandSectionProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {title}
        <Badge variant="outline">{commands.length}</Badge>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {commands.map((cmd, index) => (
          <CommandCard 
            key={index} 
            command={cmd.command} 
            description={cmd.description}
            copiedCommand={copiedCommand}
            onCopy={onCopy}
          />
        ))}
      </div>
    </CardContent>
  </Card>
);

export default CommandSection;

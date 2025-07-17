
import React from 'react';
import { cn } from "@/lib/utils";
import {
  MessageSquare, Zap, Languages, Globe, TrendingUp,
  HelpCircle, Dices, BookOpen, Calculator, Code, Heart
} from 'lucide-react';

type AutomationKey =
  | 'answer'
  | 'flashcards'
  | 'languages'
  | 'geopolitics'
  | 'case-study'
  | 'emlyon'
  | 'edhec'
  | 'theme-grammar'
  | 'school-profile'
  | 'math-tutor'
  | 'python-tutor'
  | 'python-exercises'
  | 'prepa-chatbot';

interface Automation {
  key: AutomationKey;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

interface GeneratorAutomationListProps {
  automations: Automation[];
  onSelect: (key: AutomationKey) => void;
}

export const GeneratorAutomationList: React.FC<GeneratorAutomationListProps> = ({
  automations,
  onSelect,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
    {automations.map(auto => (
      <button
        key={auto.key}
        onClick={() => onSelect(auto.key)}
        className={cn(
          "group flex flex-col items-start p-6 rounded-lg bg-white/90 hover:shadow-xl hover:bg-primary/5 transition-all border border-border/40 relative ring-0 focus-visible:ring-2 focus-visible:ring-primary outline-none",
        )}
        style={{ minHeight: 170 }}
        tabIndex={0}
        aria-label={auto.title}
      >
        <div className="flex items-center gap-3 mb-2">
          {auto.icon}
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium ml-2">
            {auto.badge}
          </span>
        </div>
        <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{auto.title}</div>
        <div className="text-sm text-muted-foreground mb-2">{auto.description}</div>
      </button>
    ))}
  </div>
);

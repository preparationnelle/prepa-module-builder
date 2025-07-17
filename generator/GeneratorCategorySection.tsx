
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Automation {
  key: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  automations: Automation[];
}

interface GeneratorCategorySectionProps {
  categories: Category[];
  onSelect: (key: string) => void;
}

export const GeneratorCategorySection: React.FC<GeneratorCategorySectionProps> = ({ 
  categories, 
  onSelect 
}) => {
  const getAutomationUrl = (key: string) => {
    return `/generator/${key}`;
  };

  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-6">
          {/* Category Header */}
          <div className={`${category.gradient} rounded-2xl p-8 text-white`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                {category.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
                <p className="text-lg opacity-90 mt-2">{category.description}</p>
              </div>
            </div>
          </div>

          {/* Automations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.automations.map((automation, automationIndex) => (
              <Card key={automationIndex} className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-white/80 backdrop-blur-sm group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {automation.icon}
                    </div>
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      {automation.badge}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{automation.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {automation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={getAutomationUrl(automation.key)}>
                    <Button 
                      className="w-full group-hover:shadow-md transition-all"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Accéder à l'outil
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

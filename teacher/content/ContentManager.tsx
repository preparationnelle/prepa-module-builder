import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ModulesManager from './ModulesManager';
import LessonsManager from './LessonsManager';
import ExercisesManager from './ExercisesManager';

const ContentManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState('modules');

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="modules">Modules</TabsTrigger>
        <TabsTrigger value="lessons">Leçons</TabsTrigger>
        <TabsTrigger value="exercises">Exercices</TabsTrigger>
      </TabsList>
      
      <TabsContent value="modules" className="mt-6">
        <ModulesManager />
      </TabsContent>
      
      <TabsContent value="lessons" className="mt-6">
        <LessonsManager />
      </TabsContent>
      
      <TabsContent value="exercises" className="mt-6">
        <ExercisesManager />
      </TabsContent>
    </Tabs>
  );
};

export default ContentManager;
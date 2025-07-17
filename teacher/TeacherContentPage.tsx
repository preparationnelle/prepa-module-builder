import React from 'react';
import TeacherLayout from '@/components/teacher/TeacherLayout';
import ContentManager from '@/components/teacher/content/ContentManager';

const TeacherContentPage: React.FC = () => {
  return (
    <TeacherLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Gestion de contenu</h1>
          <p className="text-muted-foreground">
            Créez et gérez vos modules, leçons et exercices
          </p>
        </div>

        <ContentManager />
      </div>
    </TeacherLayout>
  );
};

export default TeacherContentPage;
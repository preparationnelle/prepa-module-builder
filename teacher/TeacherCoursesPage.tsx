import React, { useState } from 'react';
import { Plus, BookOpen, Users, Calendar, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TeacherLayout from '@/components/teacher/TeacherLayout';

const TeacherCoursesPage = () => {
  const [courses] = useState([
    {
      id: 'math-101',
      title: 'Mathématiques ECG1',
      description: 'Cours de mathématiques pour ECG première année',
      students: 45,
      modules: 12,
      status: 'active' as const,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'math-201',
      title: 'Mathématiques ECG2',
      description: 'Mathématiques approfondies pour ECG deuxième année',
      students: 38,
      modules: 15,
      status: 'active' as const,
      lastUpdated: '2024-01-12'
    },
    {
      id: 'python-101',
      title: 'Python Fondamentaux',
      description: 'Introduction à la programmation Python',
      students: 52,
      modules: 8,
      status: 'draft' as const,
      lastUpdated: '2024-01-10'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'draft':
        return 'Brouillon';
      default:
        return status;
    }
  };

  return (
    <TeacherLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Mes Cours</h1>
            <p className="text-muted-foreground">Gérez vos cours et modules d'enseignement</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nouveau Cours
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <Badge className={getStatusColor(course.status)}>
                    {getStatusText(course.status)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students} étudiants</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{course.modules} modules</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Mis à jour: {new Date(course.lastUpdated).toLocaleDateString('fr-FR')}</span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Settings className="h-4 w-4 mr-1" />
                    Gérer
                  </Button>
                  <Button size="sm" className="flex-1">
                    Voir le cours
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {courses.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Aucun cours créé</h3>
              <p className="text-muted-foreground mb-4">
                Commencez par créer votre premier cours pour organiser vos modules d'enseignement.
              </p>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Créer un cours
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </TeacherLayout>
  );
};

export default TeacherCoursesPage;
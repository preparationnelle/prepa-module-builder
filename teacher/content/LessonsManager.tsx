import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Eye, Clock, Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';

interface Lesson {
  id: string;
  module_id: string;
  title: string;
  description: string;
  order_index: number;
  duration_minutes: number;
  difficulty_level: number;
  is_active: boolean;
  created_at: string;
  version: number;
  modules: {
    title: string;
  };
}

interface Module {
  id: string;
  title: string;
}

const LessonsManager: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModules();
    fetchLessons();
  }, []);

  useEffect(() => {
    fetchLessons();
  }, [selectedModule]);

  const fetchModules = async () => {
    try {
      const { data, error } = await supabase
        .from('modules')
        .select('id, title')
        .eq('is_active', true)
        .order('order_index', { ascending: true });

      if (error) throw error;
      setModules(data || []);
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

  const fetchLessons = async () => {
    try {
      let query = supabase
        .from('lessons')
        .select(`
          *,
          modules:module_id(title)
        `)
        .order('order_index', { ascending: true });

      if (selectedModule !== 'all') {
        query = query.eq('module_id', selectedModule);
      }

      const { data, error } = await query;

      if (error) throw error;
      setLessons(data || []);
    } catch (error) {
      console.error('Error fetching lessons:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateLesson = () => {
    // TODO: Open create lesson modal
    console.log('Create lesson');
  };

  const handleEditLesson = (lessonId: string) => {
    // TODO: Open edit lesson modal
    console.log('Edit lesson:', lessonId);
  };

  const handleDeleteLesson = async (lessonId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette leçon ?')) return;

    try {
      const { error } = await supabase
        .from('lessons')
        .delete()
        .eq('id', lessonId);

      if (error) throw error;
      
      fetchLessons();
    } catch (error) {
      console.error('Error deleting lesson:', error);
    }
  };

  const toggleLessonStatus = async (lessonId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('lessons')
        .update({ is_active: !currentStatus })
        .eq('id', lessonId);

      if (error) throw error;
      
      fetchLessons();
    } catch (error) {
      console.error('Error updating lesson status:', error);
    }
  };

  const getDifficultyBadge = (level: number) => {
    const colors = {
      1: 'bg-green-100 text-green-800',
      2: 'bg-blue-100 text-blue-800',
      3: 'bg-yellow-100 text-yellow-800',
      4: 'bg-orange-100 text-orange-800',
      5: 'bg-red-100 text-red-800'
    };
    
    const labels = {
      1: 'Débutant',
      2: 'Facile',
      3: 'Intermédiaire',
      4: 'Difficile',
      5: 'Expert'
    };

    return (
      <Badge className={colors[level as keyof typeof colors] || colors[3]}>
        {labels[level as keyof typeof labels] || 'Intermédiaire'}
      </Badge>
    );
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Gestion des leçons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-muted animate-pulse rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Gestion des leçons</CardTitle>
        <div className="flex items-center gap-2">
          <Select value={selectedModule} onValueChange={setSelectedModule}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrer par module" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les modules</SelectItem>
              {modules.map((module) => (
                <SelectItem key={module.id} value={module.id}>
                  {module.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleCreateLesson}>
            <Plus className="h-4 w-4 mr-2" />
            Nouvelle leçon
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {lessons.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              {selectedModule === 'all' 
                ? 'Aucune leçon créée' 
                : 'Aucune leçon dans ce module'
              }
            </p>
            <Button onClick={handleCreateLesson} className="mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Créer votre première leçon
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold">{lesson.title}</h3>
                      <Badge variant={lesson.is_active ? 'default' : 'secondary'}>
                        {lesson.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                      <Badge variant="outline">v{lesson.version}</Badge>
                      {lesson.difficulty_level && getDifficultyBadge(lesson.difficulty_level)}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {lesson.description || 'Aucune description'}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Module: {lesson.modules?.title}</span>
                      <span>Position: {lesson.order_index}</span>
                      {lesson.duration_minutes && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {lesson.duration_minutes} min
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleLessonStatus(lesson.id, lesson.is_active)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditLesson(lesson.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteLesson(lesson.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LessonsManager;
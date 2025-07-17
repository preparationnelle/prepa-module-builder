import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Eye, Clock, Tag } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';

interface Exercise {
  id: string;
  lesson_id?: string;
  title: string;
  description: string;
  difficulty_level: number;
  estimated_time_minutes: number;
  tags: string[];
  concepts: string[];
  is_active: boolean;
  created_at: string;
  version: number;
  lessons?: {
    title: string;
    modules: {
      title: string;
    };
  };
}

interface Lesson {
  id: string;
  title: string;
  modules: {
    title: string;
  };
}

const ExercisesManager: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLessons();
    fetchExercises();
  }, []);

  useEffect(() => {
    fetchExercises();
  }, [selectedLesson]);

  const fetchLessons = async () => {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select(`
          id, 
          title,
          modules:module_id(title)
        `)
        .eq('is_active', true)
        .order('order_index', { ascending: true });

      if (error) throw error;
      setLessons(data || []);
    } catch (error) {
      console.error('Error fetching lessons:', error);
    }
  };

  const fetchExercises = async () => {
    try {
      let query = supabase
        .from('exercises')
        .select(`
          *,
          lessons:lesson_id(
            title,
            modules:module_id(title)
          )
        `)
        .order('created_at', { ascending: false });

      if (selectedLesson !== 'all') {
        query = query.eq('lesson_id', selectedLesson);
      }

      const { data, error } = await query;

      if (error) throw error;
      setExercises(data || []);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateExercise = () => {
    // TODO: Open create exercise modal
    console.log('Create exercise');
  };

  const handleEditExercise = (exerciseId: string) => {
    // TODO: Open edit exercise modal
    console.log('Edit exercise:', exerciseId);
  };

  const handleDeleteExercise = async (exerciseId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet exercice ?')) return;

    try {
      const { error } = await supabase
        .from('exercises')
        .delete()
        .eq('id', exerciseId);

      if (error) throw error;
      
      fetchExercises();
    } catch (error) {
      console.error('Error deleting exercise:', error);
    }
  };

  const toggleExerciseStatus = async (exerciseId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('exercises')
        .update({ is_active: !currentStatus })
        .eq('id', exerciseId);

      if (error) throw error;
      
      fetchExercises();
    } catch (error) {
      console.error('Error updating exercise status:', error);
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
          <CardTitle>Gestion des exercices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-muted animate-pulse rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Gestion des exercices</CardTitle>
        <div className="flex items-center gap-2">
          <Select value={selectedLesson} onValueChange={setSelectedLesson}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrer par leçon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les leçons</SelectItem>
              {lessons.map((lesson) => (
                <SelectItem key={lesson.id} value={lesson.id}>
                  {lesson.modules?.title} - {lesson.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleCreateExercise}>
            <Plus className="h-4 w-4 mr-2" />
            Nouvel exercice
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {exercises.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              {selectedLesson === 'all' 
                ? 'Aucun exercice créé' 
                : 'Aucun exercice dans cette leçon'
              }
            </p>
            <Button onClick={handleCreateExercise} className="mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Créer votre premier exercice
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold">{exercise.title}</h3>
                      <Badge variant={exercise.is_active ? 'default' : 'secondary'}>
                        {exercise.is_active ? 'Actif' : 'Inactif'}
                      </Badge>
                      <Badge variant="outline">v{exercise.version}</Badge>
                      {exercise.difficulty_level && getDifficultyBadge(exercise.difficulty_level)}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {exercise.description || 'Aucune description'}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      {exercise.lessons && (
                        <span>
                          {exercise.lessons.modules?.title} - {exercise.lessons.title}
                        </span>
                      )}
                      {exercise.estimated_time_minutes && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {exercise.estimated_time_minutes} min
                        </span>
                      )}
                    </div>
                    
                    {(exercise.tags?.length > 0 || exercise.concepts?.length > 0) && (
                      <div className="flex items-center gap-2 flex-wrap">
                        {exercise.tags?.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <Tag className="h-2 w-2 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                        {exercise.concepts?.slice(0, 2).map((concept, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {concept}
                          </Badge>
                        ))}
                        {(exercise.tags?.length > 3 || exercise.concepts?.length > 2) && (
                          <span className="text-xs text-muted-foreground">...</span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleExerciseStatus(exercise.id, exercise.is_active)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditExercise(exercise.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteExercise(exercise.id)}
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

export default ExercisesManager;
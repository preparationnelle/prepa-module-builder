
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useActivityHistory, ActivityHistoryEntry } from '@/hooks/useActivityHistory';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MessageSquare, Zap, Languages, Globe, Calculator, Code, Search, Clock, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const { getActivityHistory, loading } = useActivityHistory();
  const [activities, setActivities] = useState<ActivityHistoryEntry[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      const history = await getActivityHistory();
      setActivities(history);
    };
    
    if (currentUser) {
      loadHistory();
    }
  }, [currentUser, getActivityHistory]);

  const getGeneratorIcon = (generatorType?: string) => {
    switch (generatorType) {
      case 'answer':
        return <MessageSquare className="h-4 w-4" />;
      case 'flashcards':
        return <Zap className="h-4 w-4" />;
      case 'languages':
        return <Languages className="h-4 w-4" />;
      case 'geopolitics':
        return <Globe className="h-4 w-4" />;
      case 'math-tutor':
        return <Calculator className="h-4 w-4" />;
      case 'python-tutor':
        return <Code className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getActivityIcon = (activityType: string, generatorType?: string) => {
    if (activityType === 'search') {
      return <Search className="h-4 w-4" />;
    }
    return getGeneratorIcon(generatorType);
  };

  const getGeneratorLabel = (generatorType?: string) => {
    switch (generatorType) {
      case 'answer':
        return 'Réponse d\'entretien';
      case 'flashcards':
        return 'Flashcards';
      case 'languages':
        return 'Paragraphe de langue';
      case 'geopolitics':
        return 'Géopolitique';
      case 'math-tutor':
        return 'Assistant Maths';
      case 'python-tutor':
        return 'Assistant Python';
      default:
        return 'Générateur';
    }
  };

  const getActivityLabel = (activityType: string, generatorType?: string) => {
    if (activityType === 'search') {
      return 'Recherche';
    }
    return getGeneratorLabel(generatorType);
  };

  // Séparer les recherches des autres activités
  const searchActivities = activities.filter(a => a.activity_type === 'search');
  const generatorActivities = activities.filter(a => a.activity_type === 'generator');

  // Statistiques des recherches
  const searchStats = {
    totalSearches: searchActivities.length,
    uniqueTerms: new Set(searchActivities.map(a => a.input_data?.searchTerm)).size,
    totalResults: searchActivities.reduce((sum, a) => sum + (a.metadata?.resultCount || 0), 0)
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-pulse">
            <div className="h-8 w-8 rounded-full bg-primary/50"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
        <p className="text-muted-foreground">
          Bienvenue {currentUser?.email} ! Voici votre historique d'activités.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Statistiques globales */}
        <Card>
          <CardHeader>
            <CardTitle>Statistiques globales</CardTitle>
            <CardDescription>Résumé de votre activité</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {activities.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Activités totales
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {searchStats.totalSearches}
                </div>
                <div className="text-sm text-muted-foreground">
                  Recherches
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {generatorActivities.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Générations
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {new Set(activities.map(a => new Date(a.created_at).toDateString())).size}
                </div>
                <div className="text-sm text-muted-foreground">
                  Jours d'activité
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Historique des recherches */}
        {searchActivities.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Historique des recherches
              </CardTitle>
              <CardDescription>
                Vos {searchStats.totalSearches} dernières recherches avec {searchStats.totalResults} résultats au total
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {searchActivities.slice(0, 10).map((activity, index) => (
                  <div key={activity.id}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <Search className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              Recherche
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(activity.created_at), 'dd MMM yyyy à HH:mm', { locale: fr })}
                            </span>
                          </div>
                          <p className="font-medium text-sm mb-1">
                            "{activity.input_data?.searchTerm}"
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.metadata?.resultCount} résultat{activity.metadata?.resultCount > 1 ? 's' : ''} trouvé{activity.metadata?.resultCount > 1 ? 's' : ''}
                            {activity.metadata?.categories && activity.metadata.categories.length > 0 && (
                              <span> dans {activity.metadata.categories.join(', ')}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < searchActivities.length - 1 && index < 9 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Historique des générateurs */}
        {generatorActivities.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Historique des générateurs
              </CardTitle>
              <CardDescription>Vos dernières utilisations des générateurs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {generatorActivities.slice(0, 10).map((activity, index) => (
                  <div key={activity.id}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          {getGeneratorIcon(activity.generator_type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="secondary" className="text-xs">
                              {getGeneratorLabel(activity.generator_type)}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(activity.created_at), 'dd MMM yyyy à HH:mm', { locale: fr })}
                            </span>
                          </div>
                          {activity.input_data?.question && (
                            <p className="text-sm text-muted-foreground mb-2">
                              Question : {activity.input_data.question}
                            </p>
                          )}
                          {activity.input_data?.word && (
                            <p className="text-sm text-muted-foreground mb-2">
                              Mot : {activity.input_data.word}
                            </p>
                          )}
                          {activity.metadata?.wordCount && (
                            <p className="text-xs text-muted-foreground">
                              {activity.metadata.wordCount} mots générés
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    {index < generatorActivities.length - 1 && index < 9 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* État vide si aucune activité */}
        {activities.length === 0 && (
          <div className="text-center py-12">
            <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">
              Aucune activité pour le moment.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Commencez par utiliser nos générateurs ou effectuer des recherches pour voir votre historique ici !
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/generator">Découvrir les générateurs</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/methodologie/entretiens-personnalite">Explorer les méthodes d'entretien</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ActivityItem {
  id: string;
  user_id: string;
  activity_type: string;
  generator_type?: string;
  created_at: string;
  user_email?: string;
}

const RecentActivity: React.FC = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentActivity = async () => {
      try {
        // Fetch recent activities with user information
        const { data: activityData } = await supabase
          .from('user_activity_history')
          .select(`
            id,
            user_id,
            activity_type,
            generator_type,
            created_at
          `)
          .order('created_at', { ascending: false })
          .limit(10);

        if (activityData) {
          // For each activity, try to get user email from auth
          const activitiesWithUsers = await Promise.all(
            activityData.map(async (activity) => {
              // Note: In a real scenario, you'd need to join with profiles table
              // or have user info stored in your public schema
              return {
                ...activity,
                user_email: `user-${activity.user_id.slice(0, 8)}@example.com` // Placeholder
              };
            })
          );

          setActivities(activitiesWithUsers);
        }
      } catch (error) {
        console.error('Error fetching recent activity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentActivity();
  }, []);

  const getActivityBadgeColor = (activityType: string) => {
    switch (activityType) {
      case 'flashcard_generation':
        return 'bg-blue-100 text-blue-800';
      case 'exercise_generation':
        return 'bg-green-100 text-green-800';
      case 'theme_generation':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityLabel = (activityType: string, generatorType?: string) => {
    if (generatorType) {
      return `${activityType} (${generatorType})`;
    }
    return activityType.replace('_', ' ');
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Activité récente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-8 w-8 bg-muted animate-pulse rounded-full" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-48 bg-muted animate-pulse rounded" />
                  <div className="h-3 w-32 bg-muted animate-pulse rounded" />
                </div>
                <div className="h-5 w-16 bg-muted animate-pulse rounded" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité récente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">
              Aucune activité récente
            </p>
          ) : (
            activities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {activity.user_email?.charAt(0).toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.user_email || `Utilisateur ${activity.user_id.slice(0, 8)}`}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(activity.created_at), { 
                      addSuffix: true, 
                      locale: fr 
                    })}
                  </p>
                </div>
                <Badge 
                  variant="secondary" 
                  className={getActivityBadgeColor(activity.activity_type)}
                >
                  {getActivityLabel(activity.activity_type, activity.generator_type)}
                </Badge>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
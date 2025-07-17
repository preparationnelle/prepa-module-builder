import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';

interface ModuleProgressData {
  module: string;
  totalUsers: number;
  completedUsers: number;
  progressPercentage: number;
}

const ModuleProgress: React.FC = () => {
  const [progressData, setProgressData] = useState<ModuleProgressData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModuleProgress = async () => {
      try {
        // Fetch all modules
        const { data: modules } = await supabase
          .from('modules')
          .select('title, slug')
          .eq('is_active', true);

        if (!modules) return;

        const progressResults: ModuleProgressData[] = [];

        for (const module of modules) {
          // Get progress data for this module
          const { data: progressData } = await supabase
            .from('progress')
            .select('progression, user_id')
            .eq('module', module.slug);

          const totalUsers = progressData?.length || 0;
          const completedUsers = progressData?.filter(p => (p.progression || 0) >= 100).length || 0;
          const progressPercentage = totalUsers > 0 ? Math.round((completedUsers / totalUsers) * 100) : 0;

          progressResults.push({
            module: module.title,
            totalUsers,
            completedUsers,
            progressPercentage
          });
        }

        setProgressData(progressResults);
      } catch (error) {
        console.error('Error fetching module progress:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchModuleProgress();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Progression par module</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                <div className="h-2 w-full bg-muted animate-pulse rounded" />
                <div className="h-3 w-20 bg-muted animate-pulse rounded" />
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
        <CardTitle>Progression par module</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {progressData.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">
              Aucune donnée de progression disponible
            </p>
          ) : (
            progressData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.module}</span>
                  <span className="text-muted-foreground">
                    {item.completedUsers}/{item.totalUsers}
                  </span>
                </div>
                <Progress value={item.progressPercentage} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {item.progressPercentage}% de completion
                </p>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleProgress;
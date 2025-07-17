import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, BookOpen, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface DashboardStatsData {
  totalUsers: number;
  activeUsers: number;
  totalModules: number;
  completionRate: number;
}

const DashboardStats: React.FC = () => {
  const [stats, setStats] = useState<DashboardStatsData>({
    totalUsers: 0,
    activeUsers: 0,
    totalModules: 0,
    completionRate: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch total users count (from profiles table)
        const { count: totalUsers } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        // Fetch active modules count
        const { count: totalModules } = await supabase
          .from('modules')
          .select('*', { count: 'exact', head: true })
          .eq('is_active', true);

        // Fetch active users (users with recent activity)
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
        const { count: activeUsers } = await supabase
          .from('user_activity_history')
          .select('user_id', { count: 'exact', head: true })
          .gte('created_at', oneWeekAgo.toISOString());

        // Calculate completion rate from progress table
        const { data: progressData } = await supabase
          .from('progress')
          .select('progression');

        let completionRate = 0;
        if (progressData && progressData.length > 0) {
          const avgProgression = progressData.reduce((sum, p) => sum + (p.progression || 0), 0) / progressData.length;
          completionRate = Math.round(avgProgression);
        }

        setStats({
          totalUsers: totalUsers || 0,
          activeUsers: activeUsers || 0,
          totalModules: totalModules || 0,
          completionRate
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsCards = [
    {
      title: 'Utilisateurs inscrits',
      value: stats.totalUsers,
      icon: Users,
      description: 'Total des comptes créés'
    },
    {
      title: 'Utilisateurs actifs',
      value: stats.activeUsers,
      icon: UserCheck,
      description: 'Actifs cette semaine'
    },
    {
      title: 'Modules disponibles',
      value: stats.totalModules,
      icon: BookOpen,
      description: 'Modules de formation'
    },
    {
      title: 'Taux de completion',
      value: `${stats.completionRate}%`,
      icon: TrendingUp,
      description: 'Moyenne générale'
    }
  ];

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 w-20 bg-muted animate-pulse rounded" />
              <div className="h-4 w-4 bg-muted animate-pulse rounded" />
            </CardHeader>
            <CardContent>
              <div className="h-8 w-16 bg-muted animate-pulse rounded mb-1" />
              <div className="h-3 w-24 bg-muted animate-pulse rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsCards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {card.title}
            </CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { supabase } from '@/integrations/supabase/client';

interface ActivityData {
  date: string;
  connections: number;
  activities: number;
}

const ActivityChart: React.FC = () => {
  const [data, setData] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        // Get data for the last 7 days
        const dates = [];
        for (let i = 6; i >= 0; i--) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          dates.push(date.toISOString().split('T')[0]);
        }

        const activityData: ActivityData[] = [];

        for (const date of dates) {
          const startDate = `${date}T00:00:00.000Z`;
          const endDate = `${date}T23:59:59.999Z`;

          // Count unique users with activity on this date
          const { data: activities } = await supabase
            .from('user_activity_history')
            .select('user_id')
            .gte('created_at', startDate)
            .lte('created_at', endDate);

          const uniqueUsers = new Set(activities?.map(a => a.user_id) || []).size;

          activityData.push({
            date: new Date(date).toLocaleDateString('fr-FR', { 
              day: '2-digit', 
              month: '2-digit' 
            }),
            connections: uniqueUsers,
            activities: activities?.length || 0
          });
        }

        setData(activityData);
      } catch (error) {
        console.error('Error fetching activity data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityData();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Activité des 7 derniers jours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité des 7 derniers jours</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="connections" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              name="Connexions uniques"
            />
            <Line 
              type="monotone" 
              dataKey="activities" 
              stroke="hsl(var(--secondary))" 
              strokeWidth={2}
              name="Activités totales"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
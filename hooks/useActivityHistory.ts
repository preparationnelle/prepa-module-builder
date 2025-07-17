
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface ActivityHistoryEntry {
  id: string;
  activity_type: string;
  generator_type?: string;
  input_data?: any;
  output_data?: any;
  metadata?: any;
  created_at: string;
  updated_at: string;
}

export const useActivityHistory = () => {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const saveActivity = async (
    activityType: string,
    generatorType?: string,
    inputData?: any,
    outputData?: any,
    metadata?: any
  ) => {
    if (!currentUser) return;

    try {
      const { error } = await supabase
        .from('user_activity_history')
        .insert({
          user_id: currentUser.id,
          activity_type: activityType,
          generator_type: generatorType,
          input_data: inputData,
          output_data: outputData,
          metadata: metadata
        });

      if (error) {
        console.error('Error saving activity:', error);
        // Only show toast if we have a toast context available
        if (toast) {
          toast({
            title: "Erreur",
            description: "Impossible de sauvegarder l'activité",
            variant: "destructive"
          });
        }
      }
    } catch (error) {
      console.error('Error saving activity:', error);
    }
  };

  const getActivityHistory = useCallback(async (): Promise<ActivityHistoryEntry[]> => {
    if (!currentUser) return [];

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_activity_history')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) {
        console.error('Error fetching activity history:', error);
        if (toast) {
          toast({
            title: "Erreur",
            description: "Impossible de récupérer l'historique",
            variant: "destructive"
          });
        }
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching activity history:', error);
      return [];
    } finally {
      setLoading(false);
    }
  }, [currentUser, toast]);

  return {
    saveActivity,
    getActivityHistory,
    loading
  };
};


import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useProgressTracker } from '@/hooks/useProgressTracker';
import { toast } from 'sonner';

const ProgressContext = createContext<{
  progress: number;
  refreshProgress: () => Promise<void>;
  trackPageVisit: (pageType: string) => void;
}>({
  progress: 0,
  refreshProgress: async () => {},
  trackPageVisit: () => {},
});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);
  const { currentUser } = useAuth();
  const { trackPageVisit } = useProgressTracker();

  const refreshProgress = async () => {
    if (!currentUser) {
      setProgress(0);
      return;
    }
    
    try {
      const { data, error } = await supabase
        .from('progress')
        .select('progression')
        .eq('user_id', currentUser.id)
        .eq('module', 'main')
        .limit(1)
        .single();

      if (error) {
        // Check specifically for the no rows error code
        if (error.code === 'PGSQL_NO_ROWS_RETURNED') {
          // No progress record found - this is normal for new users
          setProgress(0);
        } else {
          console.error('Error retrieving progress:', error);
          toast.error('Impossible de charger votre progression');
        }
      } else if (data) {
        setProgress(data.progression || 0);
      } else {
        setProgress(0);
      }
    } catch (error) {
      console.error('Failed to refresh progress:', error);
      // Don't allow errors to prevent rendering
      setProgress(0);
    }
  };

  useEffect(() => {
    refreshProgress();
  }, [currentUser]);

  const value = {
    progress,
    refreshProgress,
    trackPageVisit,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

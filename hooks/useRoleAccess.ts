import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

export type UserRole = 'user' | 'prof' | 'admin' | 'super_admin';

interface RoleHookReturn {
  userRole: UserRole | null;
  hasRole: (role: UserRole) => boolean;
  isProfessor: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  loading: boolean;
}

export const useRoleAccess = (): RoleHookReturn => {
  const { currentUser } = useAuth();
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      if (!currentUser) {
        setUserRole(null);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', currentUser.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (error) {
          // If no role found, default to 'user'
          if (error.code === 'PGRST116') {
            setUserRole('user');
          } else {
            console.error('Error fetching user role:', error);
            setUserRole('user');
          }
        } else {
          setUserRole(data.role as UserRole);
        }
      } catch (error) {
        console.error('Error checking user role:', error);
        setUserRole('user');
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();
  }, [currentUser]);

  const hasRole = (role: UserRole): boolean => {
    if (!userRole) return false;
    
    const roleHierarchy = {
      'user': 1,
      'prof': 2,
      'admin': 3,
      'super_admin': 4
    };
    
    return roleHierarchy[userRole] >= roleHierarchy[role];
  };

  return {
    userRole,
    hasRole,
    isProfessor: hasRole('prof'),
    isAdmin: hasRole('admin'),
    isSuperAdmin: hasRole('super_admin'),
    loading
  };
};

export default useRoleAccess;
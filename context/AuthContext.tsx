import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { posthog } from '@/integrations/posthog/client';

interface AuthContextProps {
  currentUser: User | null;
  session: Session | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  register: (email: string, password: string, name: string, phone: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    console.log("Setting up auth state listener");
    
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event, session?.user?.id);
        setSession(session);
        setCurrentUser(session?.user ?? null);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Got existing session:", session?.user?.id);
      setSession(session);
      setCurrentUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      console.log("Unsubscribing from auth state changes");
      subscription.unsubscribe();
    };
  }, []);

  const register = async (email: string, password: string, name: string, phone: string): Promise<void> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email, 
        password,
        options: {
          data: {
            first_name: name,
            phone_number: phone,
          }
        }
      });

      if (error) {
        throw error;
      }
      
      // Track registration event
      posthog.capture('user_registered', {
        source: window.location.pathname
      });
      
      toast({
        title: "Compte créé avec succès",
        description: "Bienvenue sur Prepa Rationnelle !",
      });
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Track registration error
      posthog.capture('registration_error', {
        error: error.message
      });
      
      toast({
        title: "Erreur d'inscription",
        description: error.message || "Une erreur s'est produite lors de l'inscription",
        variant: "destructive",
      });
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) {
        throw error;
      }
      
      // Track login event
      posthog.capture('user_logged_in');
      
      toast({
        title: "Connexion réussie",
        description: "Bon retour parmi nous !",
      });
      
      return data;
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Track login error
      posthog.capture('login_error', {
        error: error.message
      });
      
      toast({
        title: "Erreur de connexion",
        description: error.message || "Identifiants incorrects",
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = async () => {
    console.log("Attempting to log out");
    try {
      // Track logout event before the user is logged out
      posthog.capture('user_logged_out');
      
      // Always clear local state first to ensure UI updates even if request fails
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Logout error from Supabase:', error);
        throw error;
      }
      
      // Force clear the session and user state
      setSession(null);
      setCurrentUser(null);
      
      toast({
        title: "Déconnexion réussie",
        description: "À bientôt !",
      });
    } catch (error: any) {
      console.error('Logout error:', error);
      
      // Even if there's an error, try to clear the local session
      setSession(null);
      setCurrentUser(null);
      
      toast({
        title: "Erreur de déconnexion",
        description: error.message || "Une erreur s'est produite",
        variant: "destructive",
      });
      
      // Rethrow the error for the component to handle if needed
      throw error;
    }
  };

  const value: AuthContextProps = {
    currentUser,
    session,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};


import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

export const usePythonAccess = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accessCode, setAccessCode] = useState<string | null>(null);
  const { currentUser } = useAuth();

  const checkAccess = async () => {
    // Si l'utilisateur n'est pas connecté, pas d'accès par défaut
    if (!currentUser) {
      // Vérifier d'abord le localStorage pour les codes d'accès des invités
      const storedCode = localStorage.getItem('python_access_code');
      if (storedCode) {
        setHasAccess(true);
        setAccessCode(storedCode);
        setLoading(false);
        return;
      }
      
      setHasAccess(false);
      setLoading(false);
      return;
    }

    try {
      // Vérifier si l'utilisateur a un code d'accès valide
      const { data: codes, error } = await supabase
        .from('access_codes')
        .select('*')
        .eq('user_id', currentUser.id)
        .eq('active', true)
        .maybeSingle();

      if (error) {
        console.error('Erreur lors de la vérification d\'accès:', error);
        setHasAccess(false);
      } else if (codes) {
        setHasAccess(true);
        setAccessCode(codes.code);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setHasAccess(false);
    } finally {
      setLoading(false);
    }
  };

  const validateAccessCode = async (code: string, guestEmail?: string) => {
    try {
      // Code spécial PRDIMITAR - accès libre pour tous (vérifier en premier)
      if (code.toUpperCase() === 'PRDIMITAR') {
        setHasAccess(true);
        setAccessCode(code.toUpperCase());
        
        // Stocker le code d'accès dans le localStorage pour les utilisateurs non connectés
        if (!currentUser) {
          localStorage.setItem('python_access_code', code.toUpperCase());
        } else {
          // Pour les utilisateurs connectés, créer une entrée personnelle
          const { error: insertError } = await supabase
            .from('access_codes')
            .insert({
              code: `PRDIMITAR_${currentUser.id.slice(0, 8)}`,
              user_id: currentUser.id,
              used_at: new Date().toISOString(),
              active: true
            });
          
          if (!insertError) {
            setAccessCode(`PRDIMITAR_${currentUser.id.slice(0, 8)}`);
          }
        }
        
        return true;
      }

      // Vérifier si le code existe et n'est pas déjà utilisé (pour les autres codes)
      const { data: existingCode, error: fetchError } = await supabase
        .from('access_codes')
        .select('*')
        .eq('code', code.toUpperCase())
        .eq('active', true)
        .maybeSingle();

      if (fetchError) {
        throw new Error('Erreur lors de la vérification du code');
      }

      if (!existingCode) {
        throw new Error('Code d\'accès invalide ou expiré');
      }

      if (existingCode.user_id && currentUser && existingCode.user_id !== currentUser.id) {
        throw new Error('Ce code d\'accès a déjà été utilisé');
      }

      // Si l'utilisateur est connecté, attribuer le code à l'utilisateur
      if (currentUser && !existingCode.user_id) {
        const { error: updateError } = await supabase
          .from('access_codes')
          .update({
            user_id: currentUser.id,
            used_at: new Date().toISOString()
          })
          .eq('id', existingCode.id);

        if (updateError) {
          throw new Error('Erreur lors de l\'activation du code');
        }
      }

      // Pour les utilisateurs non connectés ou connectés, donner l'accès
      setHasAccess(true);
      setAccessCode(code.toUpperCase());
      
      // Stocker le code d'accès dans le localStorage pour les utilisateurs non connectés
      if (!currentUser) {
        localStorage.setItem('python_access_code', code.toUpperCase());
      }

      return true;
    } catch (error) {
      throw error;
    }
  };

  const createCheckoutSession = async (guestEmail?: string) => {
    // Permettre les achats sans connexion
    try {
      const { data, error } = await supabase.functions.invoke(
        'create-python-course-checkout',
        {
          headers: currentUser ? {
            Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
          } : {},
          body: guestEmail ? { guest_email: guestEmail } : {}
        }
      );

      if (error) {
        throw new Error(error.message);
      }

      // Ouvrir Stripe checkout dans un nouvel onglet
      window.open(data.url, '_blank');
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    checkAccess();
  }, [currentUser]);

  return {
    hasAccess,
    loading,
    accessCode,
    validateAccessCode,
    createCheckoutSession,
    refetch: checkAccess
  };
};

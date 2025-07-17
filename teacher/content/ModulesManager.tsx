import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Badge } from '@/components/ui/badge';

interface Module {
  id: string;
  title: string;
  description: string;
  slug: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  version: number;
}

const ModulesManager: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      const { data, error } = await supabase
        .from('modules')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setModules(data || []);
    } catch (error) {
      console.error('Error fetching modules:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateModule = () => {
    // TODO: Open create module modal
    console.log('Create module');
  };

  const handleEditModule = (moduleId: string) => {
    // TODO: Open edit module modal
    console.log('Edit module:', moduleId);
  };

  const handleDeleteModule = async (moduleId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce module ?')) return;

    try {
      const { error } = await supabase
        .from('modules')
        .delete()
        .eq('id', moduleId);

      if (error) throw error;
      
      // Refresh the list
      fetchModules();
    } catch (error) {
      console.error('Error deleting module:', error);
    }
  };

  const toggleModuleStatus = async (moduleId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('modules')
        .update({ is_active: !currentStatus })
        .eq('id', moduleId);

      if (error) throw error;
      
      // Refresh the list
      fetchModules();
    } catch (error) {
      console.error('Error updating module status:', error);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Gestion des modules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-muted animate-pulse rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Gestion des modules</CardTitle>
        <Button onClick={handleCreateModule}>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau module
        </Button>
      </CardHeader>
      <CardContent>
        {modules.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Aucun module créé</p>
            <Button onClick={handleCreateModule} className="mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Créer votre premier module
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {modules.map((module) => (
              <div key={module.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{module.title}</h3>
                      <Badge variant={module.is_active ? 'default' : 'secondary'}>
                        {module.is_active ? 'Actif' : 'Inactif'}
                      </Badge>
                      <Badge variant="outline">v{module.version}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {module.description || 'Aucune description'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Slug: {module.slug} • Position: {module.order_index}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleModuleStatus(module.id, module.is_active)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditModule(module.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteModule(module.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ModulesManager;
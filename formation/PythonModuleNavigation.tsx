import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, BookOpen, Calculator, TrendingUp, BarChart3, PlayCircle, CheckCircle } from 'lucide-react';
interface ModuleInfo {
  id: number;
  title: string;
  slug: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  color: string;
  hasExercises?: boolean;
}
const modules: ModuleInfo[] = [{
  id: 0,
  title: 'Fondamentaux',
  slug: 'fondamentaux',
  icon: BookOpen,
  color: 'orange',
  hasExercises: true
}, {
  id: 1,
  title: 'Matrices',
  slug: 'matrices',
  icon: Calculator,
  color: 'green',
  hasExercises: true
}, {
  id: 2,
  title: 'Analyse',
  slug: 'analyse',
  icon: TrendingUp,
  color: 'blue',
  hasExercises: true
}, {
  id: 3,
  title: 'Probabilités',
  slug: 'probabilites',
  icon: BarChart3,
  color: 'purple',
  hasExercises: true
}];
const PythonModuleNavigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine current module and type (course or exercises)
  const getCurrentModule = () => {
    for (const module of modules) {
      if (path.includes(module.slug)) {
        return {
          module,
          type: path.includes('exercices') ? 'exercices' : 'cours',
          isExercises: path.includes('exercices')
        };
      }
    }
    return null;
  };
  const current = getCurrentModule();
  if (!current) return null;
  const {
    module,
    type,
    isExercises
  } = current;
  const currentIndex = modules.findIndex(m => m.id === module.id);
  const previousModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;
  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: 'bg-orange-500 hover:bg-orange-600 text-white',
      green: 'bg-green-500 hover:bg-green-600 text-white',
      blue: 'bg-blue-500 hover:bg-blue-600 text-white',
      purple: 'bg-purple-500 hover:bg-purple-600 text-white'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500 hover:bg-gray-600 text-white';
  };
  return <div className="space-y-6">
      {/* Current Module Navigation */}
      

      {/* Module Progression */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            {/* Previous Module */}
            <div className="flex-1">
              {previousModule ? <Link to={`/formation/python-${previousModule.slug}`}>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    <previousModule.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      Module {previousModule.id} - {previousModule.title}
                    </span>
                    <span className="sm:hidden">Précédent</span>
                  </Button>
                </Link> : <div className="w-full"></div>}
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2 mx-4">
              {modules.map((mod, index) => <div key={mod.id} className={`w-2 h-2 rounded-full ${index <= currentIndex ? `bg-${mod.color}-500` : 'bg-gray-300'}`} />)}
            </div>

            {/* Next Module */}
            <div className="flex-1 flex justify-end">
              {nextModule ? <Link to={`/formation/python-${nextModule.slug}`}>
                  <Button size="sm" className={getColorClasses(nextModule.color)}>
                    <span className="hidden sm:inline">
                      Module {nextModule.id} - {nextModule.title}
                    </span>
                    <span className="sm:hidden">Suivant</span>
                    <nextModule.icon className="h-4 w-4 ml-1" />
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link> : <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Formation terminée !</span>
                </div>}
            </div>
          </div>
        </CardContent>
      </Card>

    </div>;
};
export default PythonModuleNavigation;
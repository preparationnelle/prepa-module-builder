import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, PlayCircle, ArrowLeft } from 'lucide-react';

interface ModuleNavigationCardsProps {
  currentModule: {
    id: number;
    title: string;
    slug: string;
    color: string;
  };
  isExercisePage?: boolean;
}

const ModuleNavigationCards: React.FC<ModuleNavigationCardsProps> = ({ 
  currentModule, 
  isExercisePage = false 
}) => {
  const courseLink = `/formation/python-${currentModule.slug}`;
  const exerciseLink = `/formation/python-${currentModule.slug}-exercices`;

  if (isExercisePage) {
    // Show "Return to course" card on exercise pages
    return (
      <div className="mt-16 mb-12">
        <Link to={courseLink} className="block">
          <Card className="border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl group cursor-pointer bg-white hover:bg-orange-50 p-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-xl bg-orange-100 border-2 border-orange-200 group-hover:bg-orange-200 group-hover:border-orange-300 transition-all duration-300">
                  <ArrowLeft className="h-8 w-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-800 transition-colors">
                    Retour au cours du Module {currentModule.id}
                  </h3>
                  <p className="text-base text-gray-600 group-hover:text-orange-700 transition-colors">
                    Revoir la théorie et les concepts - {currentModule.title}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors border border-orange-200">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  }

  // Show exercises card on course pages
  return (
    <div className="mt-16 mb-12">
      <Link to={exerciseLink} className="block">
        <Card className={`border-2 border-gray-200 hover:border-${currentModule.color}-400 transition-all duration-300 hover:shadow-xl group cursor-pointer bg-white hover:bg-${currentModule.color}-50 p-2`}>
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-xl bg-${currentModule.color}-500 text-white group-hover:bg-${currentModule.color}-600 group-hover:scale-110 transition-all duration-300 border-2 border-${currentModule.color}-500`}>
                <PlayCircle className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-bold text-gray-900 mb-2 group-hover:text-${currentModule.color}-800 transition-colors`}>
                  Exercices du Module {currentModule.id}
                </h3>
                <p className={`text-base text-gray-600 group-hover:text-${currentModule.color}-700 transition-colors`}>
                  Mettre en pratique - {currentModule.title}
                </p>
              </div>
              <div className={`p-3 rounded-full bg-${currentModule.color}-100 group-hover:bg-${currentModule.color}-200 transition-colors border border-${currentModule.color}-200`}>
                <PlayCircle className={`h-6 w-6 text-${currentModule.color}-600`} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ModuleNavigationCards;
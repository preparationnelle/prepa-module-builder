import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Play } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
const PythonFondamentauxExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const exercises = [{
    id: 1,
    title: "Exercice 1 - Variables et types",
    difficulty: "Facile",
    description: "Manipulation des types de base : int, float, str, bool. Conversions et opérations.",
    color: "green"
  }, {
    id: 2,
    title: "Exercice 2 - Opérateurs",
    difficulty: "Facile",
    description: "Opérateurs arithmétiques, de comparaison et logiques. Priorités des opérateurs.",
    color: "green"
  }, {
    id: 3,
    title: "Exercice 3 - Structures conditionnelles",
    difficulty: "Facile",
    description: "Instructions if, elif, else. Conditions composées et imbriquées.",
    color: "green"
  }];
  if (selectedExercise) {
    return <PythonModuleLayout>
        <div className="mb-8">
          <Button variant="outline" size="sm" className="flex items-center gap-2 mb-6" onClick={() => setSelectedExercise(null)}>
            ← Retour aux exercices
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {exercises[selectedExercise - 1].title}
            </h1>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              {exercises[selectedExercise - 1].difficulty}
            </Badge>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-blue-700">
              <Calculator className="h-6 w-6" />
              Contenu à venir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Le contenu détaillé de cet exercice sera ajouté prochainement.
            </p>
          </CardContent>
        </Card>
      </PythonModuleLayout>;
  }
  return <PythonModuleLayout>
      <div className="mb-8">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Module 0 : Exercices - Fondamentaux</h1>
            <p className="text-xl text-muted-foreground">
              Exercices pratiques sur les bases de Python
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-blue-700">
              <Target className="h-6 w-6" />
              Objectifs des exercices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Types de base</Badge>
                <p className="text-sm text-muted-foreground">
                  Maîtriser les types fondamentaux de Python
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Structures de contrôle</Badge>
                <p className="text-sm text-muted-foreground">
                  Comprendre les conditions et les boucles
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Fonctions</Badge>
                <p className="text-sm text-muted-foreground">
                  Créer et utiliser des fonctions Python
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map(exercise => <Card key={exercise.id} className="hover:shadow-lg transition-shadow cursor-pointer border border-green-200" onClick={() => setSelectedExercise(exercise.id)}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle className="text-lg">Exercice {exercise.id}</CardTitle>
                    <Badge variant="secondary" className="mt-1 bg-green-100 text-green-700">
                      {exercise.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2 text-green-700">
                  {exercise.title.replace(`Exercice ${exercise.id} - `, '')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {exercise.description}
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Play className="h-4 w-4 mr-2" />
                  Commencer l'exercice
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Navigation Card */}
        <ModuleNavigationCards 
          currentModule={{
            id: 0,
            title: "Fondamentaux",
            slug: "fondamentaux", 
            color: "orange"
          }}
          isExercisePage={true}
        />
    </PythonModuleLayout>;
};
export default PythonFondamentauxExercicesPage;
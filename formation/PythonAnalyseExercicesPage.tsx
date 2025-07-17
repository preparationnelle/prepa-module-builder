import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, CheckCircle, Play, ChevronLeft, ChevronRight, Calculator } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PythonAnalyseExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const exercises = [
    {
      id: 1,
      title: "Exercice 1 - Création de vecteurs",
      difficulty: "Facile",
      description: "En une seule ligne de commande, créer le vecteur x = (1, 1/4, 1/9, 1/16, ..., 1/100) sans saisir un à un les éléments.",
      color: "green"
    },
    {
      id: 2,
      title: "Exercice 2 - Somme géométrique",
      difficulty: "Facile",
      description: "En une seule ligne de commande, calculer la somme ∑(n=0 à 10) 1/2ⁿ",
      color: "green"
    },
    {
      id: 3,
      title: "Exercice 3 - Interprétation de commandes",
      difficulty: "Facile",
      description: "Interpréter les commandes utilisant np.ones(10) et np.cumsum() pour comprendre les opérations de cumul.",
      color: "green"
    },
    {
      id: 4,
      title: "Exercice 4 - Somme harmonique",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour calculer la somme harmonique définie par Sₙ = ∑(k=1 à n) 1/k",
      color: "orange"
    },
    {
      id: 5,
      title: "Exercice 5 - Condition d'arrêt",
      difficulty: "Moyen",
      description: "Compléter le script Python pour afficher le premier entier naturel non nul n vérifiant n²e⁻ⁿ < 10⁻⁴",
      color: "orange"
    }
  ];

  if (selectedExercise) {
    return (
      <PythonModuleLayout>
        <div className="mb-8">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 mb-6"
            onClick={() => setSelectedExercise(null)}
          >
            ← Retour aux exercices
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              {exercises[selectedExercise - 1].title}
            </h1>
            <Badge variant="secondary" className={`${
              exercises[selectedExercise - 1].color === 'green' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-orange-100 text-orange-700'
            }`}>
              {exercises[selectedExercise - 1].difficulty}
            </Badge>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-amber-700">
              <Calculator className="h-6 w-6" />
              Exercice {selectedExercise}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Le contenu détaillé de cet exercice sera ajouté prochainement.
            </p>
            
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {selectedExercise > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedExercise(selectedExercise - 1)}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Exercice précédent
                  </Button>
                )}
                
                {selectedExercise < exercises.length && (
                  <Button 
                    onClick={() => setSelectedExercise(selectedExercise + 1)}
                    className="flex items-center gap-2"
                  >
                    Exercice suivant
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground">
                Exercice {selectedExercise} sur {exercises.length}
              </p>
            </div>
          </CardContent>
        </Card>
      </PythonModuleLayout>
    );
  }

  return (
    <PythonModuleLayout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
          Module 3 : Exercices - Analyse
        </h1>
        <p className="text-xl text-muted-foreground">
          Exercices pratiques sur l'analyse numérique avec NumPy
        </p>
      </div>

      {/* Objectifs des exercices */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-amber-700">
            <Target className="h-6 w-6" />
            Objectifs des exercices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Badge variant="outline" className="mb-2">Vecteurs NumPy</Badge>
              <p className="text-sm text-muted-foreground">
                Maîtriser la création de vecteurs avec des opérations mathématiques
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="mb-2">Sommes finies</Badge>
              <p className="text-sm text-muted-foreground">
                Calculer des sommes de séries numériques avec NumPy
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="mb-2">Suites récurrentes</Badge>
              <p className="text-sm text-muted-foreground">
                Implémenter des suites définies par récurrence
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des exercices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <Card 
            key={exercise.id} 
            className={`hover:shadow-lg transition-shadow cursor-pointer ${
              exercise.color === 'green' 
                ? 'border border-green-200' 
                : 'border border-orange-200'
            }`}
            onClick={() => setSelectedExercise(exercise.id)}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calculator className={`h-6 w-6 ${
                  exercise.color === 'green' ? 'text-green-600' : 'text-orange-600'
                }`} />
                <div>
                  <CardTitle className="text-lg">Exercice {exercise.id}</CardTitle>
                  <Badge 
                    variant="secondary" 
                    className={`mt-1 ${
                      exercise.color === 'green' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {exercise.difficulty}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className={`font-semibold mb-2 ${
                exercise.color === 'green' ? 'text-green-700' : 'text-orange-700'
              }`}>
                {exercise.title.replace(`Exercice ${exercise.id} - `, '')}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {exercise.description}
              </p>
              <Button className={`w-full ${
                exercise.color === 'green' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-orange-600 hover:bg-orange-700'
              }`}>
                <Play className="h-4 w-4 mr-2" />
                Commencer l'exercice
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation retour au cours */}
      <ModuleNavigationCards 
        currentModule={{
          id: 2,
          title: "Analyse",
          slug: "analyse",
          color: "blue"
        }}
        isExercisePage={true}
      />
    </PythonModuleLayout>
  );
};

export default PythonAnalyseExercicesPage;
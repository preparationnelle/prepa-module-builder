
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calculator, CheckSquare, RotateCcw, Zap, Target, Activity, Grid, X, BarChart, Hash } from 'lucide-react';

export interface Exercise {
  id: string;
  title: string;
  description: string;
  template: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  category: string;
}

export const exercises: Exercise[] = [
  {
    id: 'matrice_z',
    title: 'Création de matrice Z',
    description: 'D\'après ECE EDHEC 2015. Créer une matrice 5×5 spécifique avec différentes méthodes numpy.',
    template: `import numpy as np

# Question a) Créer Z avec numpy.ones et boucles for
def creer_Z_ones():
    # TODO: Créer la matrice Z avec np.ones et modifier avec des boucles
    pass

# Question b) Créer Z avec numpy.zeros et boucles for  
def creer_Z_zeros():
    # TODO: Créer la matrice Z avec np.zeros et remplir avec des boucles
    pass

# Question c) Créer Z avec numpy.ones puis modifier avec numpy.zeros
def creer_Z_slicing():
    # TODO: Créer Z avec np.ones puis utiliser le slicing pour modifier
    pass

# Test des fonctions
print("Question a):")
print(creer_Z_ones())
print("\\nQuestion b):")  
print(creer_Z_zeros())
print("\\nQuestion c):")
print(creer_Z_slicing())`,
    difficulty: 'Débutant',
    category: 'Matrices'
  },
  {
    id: 'trace',
    title: 'Trace d\'une matrice',
    description: 'Écrire def trace(M): qui renvoie la somme des éléments diagonaux de la matrice carrée M.',
    template: 'def trace(M):\n    # TODO: compléter la fonction\n    # La trace est la somme des éléments diagonaux M[i][i]\n    pass',
    difficulty: 'Débutant',
    category: 'Matrices'
  },
  {
    id: 'est_symetrique',
    title: 'Test de symétrie',
    description: 'Écrire def est_symetrique(M): qui renvoie True si M est carrée et M[i,j] == M[j,i] pour tous i,j, sinon False.',
    template: 'def est_symetrique(M):\n    # TODO: compléter la fonction\n    # Vérifier que M[i][j] == M[j][i] pour tous i,j\n    pass',
    difficulty: 'Débutant',
    category: 'Matrices'
  },
  {
    id: 'est_antisymetrique',
    title: 'Test d\'antisymétrie',
    description: 'Écrire def est_antisymetrique(M): qui renvoie True si M est carrée, que tous les éléments diagonaux sont nuls et que M[j,i] == -M[i,j] pour i≠j.',
    template: 'def est_antisymetrique(M):\n    # TODO: compléter la fonction\n    # Vérifier diagonale nulle et M[j][i] == -M[i][j]\n    pass',
    difficulty: 'Intermédiaire',
    category: 'Matrices'
  },
  {
    id: 'puissance_naive',
    title: 'Puissance naïve',
    description: 'Écrire def puissance_naive(M, n): qui calcule M^n par une boucle de multiplications successives.',
    template: 'def puissance_naive(M, n):\n    # TODO: compléter la fonction\n    # Multiplier M par elle-même n fois\n    pass',
    difficulty: 'Intermédiaire',
    category: 'Matrices'
  },
  {
    id: 'matmul',
    title: 'Produit matriciel',
    description: 'Écrire def matmul(A, B): qui renvoie le produit A×B sans utiliser l\'opérateur @.',
    template: 'def matmul(A, B):\n    # TODO: compléter la fonction\n    # Implémenter la multiplication matricielle\n    pass',
    difficulty: 'Avancé',
    category: 'Matrices'
  }
];

interface ExerciseSelectorProps {
  onSelectExercise: (exercise: Exercise) => void;
  selectedExerciseId?: string;
}

const difficultyColors = {
  'Débutant': 'bg-green-100 text-green-800',
  'Intermédiaire': 'bg-yellow-100 text-yellow-800',
  'Avancé': 'bg-red-100 text-red-800'
};

const exerciseIcons = {
  matrice_z: Hash,
  trace: Calculator,
  est_symetrique: CheckSquare,
  est_antisymetrique: X,
  puissance_naive: RotateCcw,
  matmul: Grid
};

export const ExerciseSelector: React.FC<ExerciseSelectorProps> = ({
  onSelectExercise,
  selectedExerciseId
}) => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-zinc-200">
          Exercices Python - Matrices
        </h2>
        <p className="text-slate-50">
          Choisissez un exercice pour commencer à coder et tester votre solution
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map(exercise => {
          const Icon = exerciseIcons[exercise.id as keyof typeof exerciseIcons] || Target;
          const isSelected = selectedExerciseId === exercise.id;
          
          return (
            <Card 
              key={exercise.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => onSelectExercise(exercise)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Icon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <Badge className={difficultyColors[exercise.difficulty]}>
                    {exercise.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {exercise.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {exercise.description}
                </p>
                <Button 
                  variant={isSelected ? "default" : "outline"} 
                  size="sm" 
                  className="w-full"
                >
                  {isSelected ? "Exercice sélectionné" : "Commencer"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

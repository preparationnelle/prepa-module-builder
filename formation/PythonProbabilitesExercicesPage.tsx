import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Target, Book, CheckCircle, Play } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';

const PythonProbabilitesExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const exercices = [
    {
      id: 1,
      title: "Loi d'arrêt aléatoire",
      description: "Simuler X = rang d'obtention de deux Pile consécutifs au pile ou face.",
      difficulty: "Intermédiaire",
      badge: "Simulation"
    },
    {
      id: 2,
      title: "Processus de renforcement",
      description: "Simuler le processus de renforcement dans une urne avec règles spécifiques.",
      difficulty: "Intermédiaire", 
      badge: "Algorithme"
    },
    {
      id: 3,
      title: "Tirages dans une urne",
      description: "Simuler Z = rang d'apparition de la première boule rouge et Y_n = nombre de boules vertes.",
      difficulty: "Intermédiaire",
      badge: "Probabilités"
    },
    {
      id: 4,
      title: "Simulation d'un événement",
      description: "Simuler la réalisation d'un événement A de probabilité p avec Python.",
      difficulty: "Intermédiaire",
      badge: "Fondamental"
    },
    {
      id: 5,
      title: "Sauts aléatoires dans un escalier",
      description: "Un animal gravit un escalier de n marches en montant 1 ou 2 marches à chaque bond.",
      difficulty: "Intermédiaire",
      badge: "Simulation"
    },
    {
      id: 6,
      title: "Simulation de lois géométriques",
      description: "Estimer P(X = 2Y) où X et Y suivent des lois géométriques par méthode de Monte-Carlo.",
      difficulty: "Intermédiaire",
      badge: "Monte-Carlo"
    }
  ];

  const handleStartExercise = (exerciceId: number) => {
    setSelectedExercise(exerciceId);
  };

  const handleBackToList = () => {
    setSelectedExercise(null);
  };

  const scrollToExercice = (exerciceId: number) => {
    const element = document.getElementById(`exercice-${exerciceId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (selectedExercise) {
    return (
      <PythonModuleLayout>
        <div className="mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2 mb-6" 
            onClick={handleBackToList}
          >
            ← Retour aux exercices
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
              Exercice {selectedExercise} - Probabilités
            </h1>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                Contenu détaillé de l'exercice sera développé ici...
              </p>
            </CardContent>
          </Card>
        </div>
      </PythonModuleLayout>
    );
  }

  return (
    <PythonModuleLayout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
          Module 3 : Exercices - Probabilités
        </h1>
        <p className="text-xl text-muted-foreground">
          Exercices pratiques sur les probabilités et statistiques
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercices.map((exercice) => (
          <Card key={exercice.id} className="border-2 hover:border-purple-300 transition-colors cursor-pointer"
                onClick={() => handleStartExercise(exercice.id)}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500 text-white">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Exercice {exercice.id}</CardTitle>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    {exercice.difficulty}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2 text-purple-700">
                {exercice.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {exercice.description}
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Play className="h-4 w-4 mr-2" />
                Commencer l'exercice
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation vers cours */}
      <ModuleNavigationCards 
        currentModule={{
          id: 3,
          title: "Probabilités",
          slug: "probabilites",
          color: "purple"
        }}
        isExercisePage={true}
      />
    </PythonModuleLayout>
  );
};

export default PythonProbabilitesExercicesPage;

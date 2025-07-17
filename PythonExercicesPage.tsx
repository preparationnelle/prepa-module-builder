import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, TrendingUp, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
import { useProgress } from '@/context/ProgressContext';

const PythonExercicesPage: React.FC = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('python-exercices');
  }, [trackPageVisit]);

  const exerciseModules = [
    {
      id: 0,
      title: "Module 0 : Fondamentaux",
      description: "Maîtrisez les bases essentielles de Python : variables, types de données, opérateurs et structures de contrôle.",
      icon: BookOpen,
      color: "orange",
      link: "/formation/python-fondamentaux-exercices",
      topics: [
        "Variables et types de données",
        "Opérateurs arithmétiques et logiques",
        "Structures conditionnelles (if, elif, else)",
        "Boucles (for, while)",
        "Fonctions de base"
      ]
    },
    {
      id: 1,
      title: "Module 1 : Matrices",
      description: "Apprenez à manipuler les matrices avec NumPy : création, indexation, opérations et applications pratiques.",
      icon: Calculator,
      color: "green",
      link: "/formation/python-matrices-exercices",
      topics: [
        "Création et manipulation de matrices",
        "Indexation et slicing",
        "Opérations matricielles",
        "Fonctions NumPy essentielles",
        "Applications pratiques"
      ]
    },
    {
      id: 2,
      title: "Module 2 : Analyse",
      description: "Explorez l'analyse de données avec Pandas : traitement, visualisation et statistiques descriptives.",
      icon: TrendingUp,
      color: "blue",
      link: "/formation/python-analyse-exercices",
      topics: [
        "DataFrames et Series",
        "Nettoyage de données",
        "Groupement et agrégation",
        "Visualisation avec Matplotlib",
        "Statistiques descriptives"
      ]
    },
    {
      id: 3,
      title: "Module 3 : Probabilités",
      description: "Découvrez les probabilités et statistiques avec Python : distributions, tests et simulations.",
      icon: BarChart3,
      color: "purple",
      link: "/formation/python-probabilites-exercices",
      topics: [
        "Distributions de probabilité",
        "Échantillonnage et simulation",
        "Tests statistiques",
        "Intervalles de confiance",
        "Applications ECG"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Breadcrumb Navigation */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/formation">Formation</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Exercices Python</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Exercices Python ECG
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Renforcez vos compétences Python avec nos exercices pratiques adaptés aux concours des Grandes Écoles de Commerce
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Exercise Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {exerciseModules.map((module) => {
            const IconComponent = module.icon;
            const colorClasses = {
              orange: "from-orange-500/20 to-orange-600/20 border-orange-200 dark:border-orange-800",
              green: "from-green-500/20 to-green-600/20 border-green-200 dark:border-green-800",
              blue: "from-blue-500/20 to-blue-600/20 border-blue-200 dark:border-blue-800",
              purple: "from-purple-500/20 to-purple-600/20 border-purple-200 dark:border-purple-800"
            };

            return (
              <Link key={module.id} to={module.link} className="block">
                <Card className={`bg-gradient-to-br ${colorClasses[module.color as keyof typeof colorClasses]} transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-${module.color}-100 dark:bg-${module.color}-900/20`}>
                        <IconComponent className={`h-6 w-6 text-${module.color}-600 dark:text-${module.color}-400`} />
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-foreground">Au programme :</h4>
                        <ul className="space-y-1">
                          {module.topics.map((topic, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${module.color}-500`} />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className={`w-full bg-${module.color}-600 hover:bg-${module.color}-700 pointer-events-none`}>
                        Accéder aux exercices
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Besoin d'aide supplémentaire ?</h3>
              <p className="text-muted-foreground mb-4">
                Découvrez nos flashcards Python et notre référence complète des commandes essentielles.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="outline">
                  <Link to="/python-flashcards">
                    Flashcards Python
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/python-reference">
                    Référence Python
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PythonExercicesPage;
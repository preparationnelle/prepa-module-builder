import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Code, Calculator, TrendingUp, BarChart3, Play, BookOpen, ChevronDown, Home, ChevronRight } from 'lucide-react';
import PythonNavigationTabs from "@/components/formation/PythonNavigationTabs";
const FormationPage = () => {
  const [openModules, setOpenModules] = useState<Set<number>>(new Set());
  const toggleModule = (moduleId: number) => {
    const newOpenModules = new Set(openModules);
    if (newOpenModules.has(moduleId)) {
      newOpenModules.delete(moduleId);
    } else {
      newOpenModules.add(moduleId);
    }
    setOpenModules(newOpenModules);
  };
  const coursModules = [{
    id: 0,
    title: "Les Fondamentaux",
    description: "Variables, types, opérateurs, fonctions et structures de contrôle. Les bases essentielles pour débuter en Python.",
    topics: ["Types fondamentaux (int, float, bool, str)", "Opérateurs numériques", "Fonctions et structures de contrôle", "Listes et boucles"],
    link: "/formation/python-fondamentaux",
    exerciseLink: "/formation/python-fondamentaux-exercices",
    icon: BookOpen,
    color: "bg-orange-500",
    available: true
  }];
  const exerciseModules = [{
    id: 1,
    title: "Les Matrices NumPy",
    description: "Introduction à NumPy pour le calcul scientifique et les opérations matricielles. Création, manipulation et analyse de matrices.",
    topics: ["Création de matrices et vecteurs", "Opérations matricielles", "Fonctions d'analyse statistique", "Applications pratiques"],
    link: "/formation/python-matrices",
    exerciseLink: "/formation/python-matrices-exercices",
    icon: Calculator,
    color: "bg-green-500",
    available: true
  }, {
    id: 2,
    title: "Analyse",
    description: "Méthodes d'analyse numérique : calcul de sommes et produits, étude des suites, et approximation par dichotomie.",
    topics: ["Calcul de sommes et produits finis", "Suites définies par récurrence", "Méthode de dichotomie", "Visualisation avec Matplotlib"],
    link: "/formation/python-analyse",
    exerciseLink: "/formation/python-analyse-exercices",
    icon: TrendingUp,
    color: "bg-blue-500",
    available: true
  }, {
    id: 3,
    title: "Probabilités",
    description: "Simulation et statistiques avec NumPy & Matplotlib. Lois de probabilité, méthode de Monte-Carlo et visualisations.",
    topics: ["Génération aléatoire et lois discrètes", "Statistiques descriptives", "Méthode de Monte-Carlo", "Graphiques statistiques"],
    link: "/formation/python-probabilites",
    exerciseLink: "/formation/python-probabilites-exercices",
    icon: BarChart3,
    color: "bg-purple-500",
    available: true
  }];
  return <div className="min-h-screen bg-background">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation" className="hover:text-foreground transition-colors">
              Formation
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Formation Python ECG
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Formation complète en Python pour les concours des Grandes Écoles de Commerce
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

      <div className="container mx-auto px-4">
        <Tabs defaultValue="cours" className="w-full">
          <TabsContent value="cours" className="mt-8">

      {/* Section Cours */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Cours
        </h2>
        <div className="grid gap-6">
          {coursModules.map(module => <Link key={module.id} to={module.link} className="block">
              <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${module.color} text-white`}>
                        <module.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          Module {module.id}
                          <Badge className="bg-black text-white">Disponible</Badge>
                        </CardTitle>
                        <h3 className="text-xl font-semibold text-primary mt-1">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{module.description}</p>
                  
                  <Collapsible open={openModules.has(module.id)} onOpenChange={() => toggleModule(module.id)}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto mb-4" onClick={e => e.preventDefault()}>
                        <span className="text-sm font-medium">Voir le détail</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openModules.has(module.id) ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                        {module.topics.map((topic, index) => <li key={index}>{topic}</li>)}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <div className="flex gap-3" onClick={e => e.preventDefault()}>
                    <Link to={module.link} className="flex-1">
                      <Button variant="outline" className="w-full">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Voir le cours
                      </Button>
                    </Link>
                    <Link to={module.exerciseLink || module.link} className="flex-1">
                      <Button className={`${module.color} hover:opacity-90 w-full`}>
                        <Play className="mr-2 h-4 w-4" />
                        Voir les exercices
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Link>)}
        </div>
      </div>

      {/* Section Exercices */}
      <div>
        
        <div className="grid gap-6">
          {exerciseModules.map(module => <Link key={module.id} to={module.link} className="block">
              <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${module.color} text-white`}>
                        <module.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          Module {module.id}
                          <Badge className="bg-green-600 text-white">Disponible</Badge>
                        </CardTitle>
                        <h3 className="text-xl font-semibold text-primary mt-1">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{module.description}</p>
                  
                  <Collapsible open={openModules.has(module.id)} onOpenChange={() => toggleModule(module.id)}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto mb-4" onClick={e => e.preventDefault()}>
                        <span className="text-sm font-medium">Voir le détail</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openModules.has(module.id) ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                        {module.topics.map((topic, index) => <li key={index}>{topic}</li>)}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <div className="flex gap-3" onClick={e => e.preventDefault()}>
                    <Link to={module.link} className="flex-1">
                      <Button variant="outline" className="w-full">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Voir le cours
                      </Button>
                    </Link>
                    <Link to={module.exerciseLink} className="flex-1">
                      <Button className={`${module.color} hover:opacity-90 w-full`}>
                        <Play className="mr-2 h-4 w-4" />
                        Voir les exercices
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Link>)}
        </div>
      </div>

          </TabsContent>
        </Tabs>
      </div>
      </div>
    </div>;
};
export default FormationPage;
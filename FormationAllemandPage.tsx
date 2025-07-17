
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Languages, BookOpen, Target, FileText, List, Play, ExternalLink } from 'lucide-react';

const FormationAllemandPage = () => {
  const generatorModules = [
    {
      id: 1,
      title: "Thème Grammatical",
      description: "Générateur et correcteur de thèmes de traduction avec phrases spécialisées et notation détaillée instantanée.",
      topics: [
        "Phrases de presse spécialisées",
        "Correction IA détaillée avec scoring",
        "Règles grammaticales personnalisées",
        "Suivi des erreurs et progression"
      ],
      link: "/generator/theme-grammar",
      icon: Target,
      color: "bg-orange-500",
      badge: "IA Correction"
    },
    {
      id: 2,
      title: "Paragraphes d'Allemand",
      description: "Générez des paragraphes argumentatifs de 150 mots en allemand avec vocabulaire clé à partir d'articles de presse.",
      topics: [
        "Paragraphes de 150 mots",
        "Vocabulaire spécialisé",
        "Analyse d'articles de presse",
        "Idées argumentatives structurées"
      ],
      link: "/generator/languages",
      icon: Languages,
      color: "bg-purple-500",
      badge: "Nouveau"
    }
  ];

  const grammarModules = [
    {
      id: 1,
      title: "Les Déclinaisons de l'Adjectif",
      description: "Maîtrisez les trois types de déclinaisons (faible, mixte, forte) avec tableaux complets et exercices pratiques.",
      topics: [
        "Déclinaison faible (der/die/das + adj.)",
        "Déclinaison mixte (ein/kein + adj.)",
        "Déclinaison forte (adj. seul)",
        "Règles et mémos mnémotechniques"
      ],
      link: "/formation/allemand-declinaisons",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "La Proposition Relative",
      description: "Pronoms relatifs, antécédents, construction des relatives et transformation en relatives participiales.",
      topics: [
        "Tableau des pronoms relatifs",
        "Choix du bon pronom (genre et cas)",
        "Traduction de 'dont' en allemand",
        "Relatives participiales"
      ],
      link: "/formation/allemand-relatives",
      icon: FileText,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Le Passif en Allemand",
      description: "Passif d'action (werden), passif d'état (sein), passif modal et gestion de l'agent.",
      topics: [
        "Vorgangspassiv (werden + Part. II)",
        "Zustandspassiv (sein + Part. II)",
        "Passif avec modaux",
        "Agent (von) vs moyen (durch)"
      ],
      link: "/formation/allemand-passif",
      icon: FileText,
      color: "bg-red-500"
    },
    {
      id: 4,
      title: "Structure de la Phrase",
      description: "Ordre des mots, positions du verbe, inversion et construction des subordonnées.",
      topics: [
        "Les trois positions du verbe",
        "Klammer (parenthèse verbale)",
        "Ordre des compléments (T-L-M)",
        "Négation avec 'nicht'"
      ],
      link: "/formation/allemand-structure",
      icon: FileText,
      color: "bg-indigo-500"
    },
    {
      id: 5,
      title: "Points de Grammaire Récurrents",
      description: "Liste complète des règles grammaticales essentielles à maîtriser pour les concours.",
      topics: [
        "26 points grammaticaux essentiels",
        "Constructions subordonnées",
        "Déclinaisons et prépositions",
        "Erreurs fréquentes à éviter"
      ],
      link: "/formation/allemand-recurrents",
      icon: List,
      color: "bg-amber-500"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-red-600 text-white">
            <Languages className="h-8 w-8" />
          </div>
          Formation Allemand
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Formation complète en allemand pour les concours des Grandes Écoles de Commerce : générateurs IA et fiches de grammaire détaillées
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">Niveau prépa</Badge>
          <Badge variant="outline">Grammaire complète</Badge>
          <Badge className="bg-red-600">Allemand LV2</Badge>
        </div>
      </div>

      {/* Section Générateurs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Générateurs Intelligents
        </h2>
        <div className="grid gap-6">
          {generatorModules.map((module) => (
            <Card key={module.id} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${module.color} text-white`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-xl font-semibold text-primary">
                          {module.title}
                        </span>
                        <Badge className="bg-red-600 text-white">{module.badge}</Badge>
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                  {module.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
                <Link to={module.link}>
                  <Button className={`${module.color} hover:opacity-90 w-full`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Accéder au générateur
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section Fiches de Grammaire */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Fiches de Grammaire
        </h2>
        <div className="grid gap-6">
          {grammarModules.map((module) => (
            <Card key={module.id} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${module.color} text-white`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-xl font-semibold text-primary">
                          {module.title}
                        </span>
                        <Badge variant="outline">Fiche complète</Badge>
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                  {module.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
                <Link to={module.link}>
                  <Button variant="outline" className="w-full border-2 hover:bg-primary hover:text-white transition-all duration-300">
                    <Play className="mr-2 h-4 w-4" />
                    Consulter la fiche
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Note informative */}
      <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-start gap-3">
          <Languages className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-red-800 mb-2">Formation Allemand LV2</h3>
            <p className="text-red-700 text-sm leading-relaxed">
              Cette formation d'allemand est spécialement conçue pour les étudiants de prépa ECG. 
              Elle combine des outils de génération IA pour l'entraînement pratique et des fiches de grammaire 
              détaillées couvrant tous les points essentiels du programme. Chaque fiche inclut des exemples, 
              des tableaux récapitulatifs et des exercices d'application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationAllemandPage;

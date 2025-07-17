
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { VideoAndIntro } from '@/components/VideoAndIntro';

const PythonIntroductionPage = () => {
  const pythonCommands = [
    { category: "Bases", commands: ["print()", "input()", "len()", "type()", "str()", "int()", "float()"] },
    { category: "Listes", commands: ["list()", "append()", "insert()", "remove()", "pop()", "index()", "count()"] },
    { category: "Boucles", commands: ["for", "while", "range()", "enumerate()", "zip()"] },
    { category: "Conditions", commands: ["if", "elif", "else", "and", "or", "not", "in"] },
    { category: "Fonctions", commands: ["def", "return", "lambda", "map()", "filter()", "sorted()"] },
    { category: "NumPy", commands: ["np.array()", "np.zeros()", "np.ones()", "np.random.rand()", "np.dot()", "np.linalg.solve()"] },
    { category: "Matplotlib", commands: ["plt.plot()", "plt.scatter()", "plt.hist()", "plt.xlabel()", "plt.ylabel()", "plt.show()"] },
    { category: "Math", commands: ["math.sqrt()", "math.exp()", "math.log()", "math.sin()", "math.cos()", "abs()"] }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            Formation Python ECG
          </h1>
          <p className="text-xl text-muted-foreground">
            Maîtrisez Python pour réussir vos concours de prépa ECG
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Programme officiel</Badge>
            <Badge variant="outline">Concours ECG</Badge>
            <Badge className="bg-blue-600">Complet</Badge>
          </div>
        </div>

        {/* Video and Introduction */}
        <div className="mb-12">
          <VideoAndIntro />
        </div>

        {/* Module Python cards with direct links to course pages */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              🚀 Accès direct aux modules Python ECG
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-lg mb-6">
              Découvrez notre formation complète Python structurée en 4 modules progressifs :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/formation/python-fondamentaux" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">🐍 Module 0: Fondamentaux</h4>
                  <p className="text-blue-700 mb-3">Variables, boucles, conditions, fonctions</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <span className="font-medium">Commencer le module →</span>
                  </div>
                </div>
              </Link>
              
              <Link to="/formation/python-matrices" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">🔢 Module 1: Matrices & Numpy</h4>
                  <p className="text-blue-700 mb-3">Algèbre linéaire, résolution de systèmes</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <span className="font-medium">Commencer le module →</span>
                  </div>
                </div>
              </Link>
              
              <Link to="/formation/python-analyse" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">📊 Module 2: Analyse & Graphiques</h4>
                  <p className="text-blue-700 mb-3">Matplotlib, tracer des fonctions, suites</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <span className="font-medium">Commencer le module →</span>
                  </div>
                </div>
              </Link>
              
              <Link to="/formation/python-probabilites" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">🎲 Module 3: Probabilités</h4>
                  <p className="text-blue-700 mb-3">Simulations, lois, statistiques</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <span className="font-medium">Commencer le module →</span>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Liste des commandes Python */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Toutes les commandes Python au programme ECG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pythonCommands.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 text-primary">{section.category}</h3>
                  <ul className="space-y-1">
                    {section.commands.map((command, cmdIndex) => (
                      <li key={cmdIndex} className="text-sm font-mono bg-white px-2 py-1 rounded border">
                        {command}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pourquoi Python */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🐍 Pourquoi Python en prépa ECG ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Python devient de plus en plus important dans le cursus ECG pour :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>L'analyse de données économiques et financières</li>
                <li>La modélisation mathématique</li>
                <li>L'automatisation de calculs statistiques</li>
                <li>La préparation aux écoles les plus innovantes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Applications pratiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>💡 Applications en prépa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">📈 En mathématiques</h4>
                <p className="text-sm text-muted-foreground">Résolution d'équations, calcul de probabilités, simulation de Monte Carlo</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💰 En économie</h4>
                <p className="text-sm text-muted-foreground">Analyse de séries temporelles, modélisation économétrique, calcul d'indicateurs</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🌍 En géopolitique</h4>
                <p className="text-sm text-muted-foreground">Traitement de données géographiques, création de cartes, analyse de flux</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accès aux formations */}
        <div className="text-center">
          <Link to="/formation/python-fondamentaux">
            <Button size="lg" className="mr-4">
              Commencer par les fondamentaux
            </Button>
          </Link>
          <Link to="/generator/python-tutor">
            <Button variant="outline" size="lg">
              Tuteur Python IA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PythonIntroductionPage;

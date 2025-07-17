import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Target, Code, Calculator, TrendingUp, BarChart } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';

const PythonProbabilitesPage = () => {
  return (
    <PythonModuleLayout>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-purple-500 text-white">
            <BarChart3 className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Module 3 - Probabilités
            </h1>
            <Badge variant="secondary" className="mt-2 bg-purple-100 text-purple-700">Module 3</Badge>
          </div>
        </div>
      </div>

        {/* Objectifs du module */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Target className="h-6 w-6" />
              Objectifs du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Simulation</Badge>
                <p className="text-sm text-muted-foreground">
                  Maîtriser la génération de nombres aléatoires et la simulation de lois de probabilité
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Statistiques</Badge>
                <p className="text-sm text-muted-foreground">
                  Calculer des statistiques descriptives et analyser des échantillons
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Monte-Carlo</Badge>
                <p className="text-sm text-muted-foreground">
                  Appliquer la méthode de Monte-Carlo pour estimer des probabilités et espérances
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Visualisation</Badge>
                <p className="text-sm text-muted-foreground">
                  Créer des graphiques statistiques avec Matplotlib
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Imports et principes généraux */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Code className="h-6 w-6" />
              Imports et principes généraux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm">
{`import numpy as np
import numpy.random as rd
import matplotlib.pyplot as plt`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Simulation</h4>
                <p className="text-sm text-purple-700">
                  Quand le nombre de tirages devient grand, la fréquence observée se rapproche de la probabilité théorique
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Monte-Carlo</h4>
                <p className="text-sm text-purple-700">
                  Pour estimer une espérance, on simule un grand nombre de valeurs et on prend la moyenne
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Génération aléatoire de base */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Calculator className="h-6 w-6" />
              Génération aléatoire de base
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Objectif</TableHead>
                  <TableHead>Commande</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Réel uniforme sur [0, 1[</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">rd.random()</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vecteur de taille n</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">rd.random(n)</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Matrice n×m</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">rd.random((n, m))</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dé (faces 1 à 6)</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">np.floor(6 * rd.random()) + 1</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Uniforme sur [a, b]</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">(b - a) * rd.random() + a</code></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Lois discrètes courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <BarChart className="h-6 w-6" />
              Lois discrètes courantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="mb-6">
              <TableHeader>
                <TableRow>
                  <TableHead>Loi</TableHead>
                  <TableHead>Appel rd.</TableHead>
                  <TableHead>Paramètres</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Bernoulli(p)</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">binomial(1, p)</code></TableCell>
                  <TableCell>p entre 0 et 1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Binomiale(n, p)</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">binomial(n, p)</code></TableCell>
                  <TableCell>n, p</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Uniforme discrète [a, b]</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">randint(a, b+1)</code></TableCell>
                  <TableCell>a, b entiers</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Géométrique(p)</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">geometric(p)</code></TableCell>
                  <TableCell>p</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Poisson(λ)</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">poisson(lam)</code></TableCell>
                  <TableCell>λ {'>'}  0</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Accordion type="single" collapsible>
              <AccordionItem value="fonctions-maison">
                <AccordionTrigger>Fonctions "maison" alternatives</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Fonction Bernoulli</h4>
                      <div className="bg-slate-900 rounded-lg p-4">
                        <pre className="text-green-400 text-sm">
{`def bernoulli(p):
    """Retourne 1 avec une probabilité p, 0 sinon."""
    return 1 if rd.random() <= p else 0`}
                        </pre>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Fonction Géométrique</h4>
                      <div className="bg-slate-900 rounded-lg p-4">
                        <pre className="text-green-400 text-sm">
{`def geometrique(p):
    """Retourne le rang de la première réussite (>= 1)."""
    n = 1
    while rd.random() > p:
        n += 1
    return n`}
                        </pre>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Fonction Binomiale</h4>
                      <div className="bg-slate-900 rounded-lg p-4">
                        <pre className="text-green-400 text-sm">
{`def binomiale(n, p):
    """Retourne le nombre de succès sur n essais."""
    S = 0
    for _ in range(n):
        if rd.random() <= p:
            S += 1
    return S`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Statistiques descriptives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <TrendingUp className="h-6 w-6" />
              Statistiques descriptives (NumPy)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fonction</TableHead>
                  <TableHead>Rôle</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">np.min(A)</code> / <code className="bg-slate-100 px-2 py-1 rounded">np.max(A)</code></TableCell>
                  <TableCell>Valeurs extrêmes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">np.mean(A)</code></TableCell>
                  <TableCell>Moyenne</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">np.median(A)</code></TableCell>
                  <TableCell>Médiane</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">np.var(A)</code> / <code className="bg-slate-100 px-2 py-1 rounded">np.std(A)</code></TableCell>
                  <TableCell>Variance / écart-type</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">np.sum(A)</code></TableCell>
                  <TableCell>Sommes totales</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">np.cumsum(A)</code></TableCell>
                  <TableCell>Sommes cumulées</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Graphiques Matplotlib */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <BarChart className="h-6 w-6" />
              Graphiques de base (Matplotlib)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Graphe</TableHead>
                  <TableHead>Syntaxe</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Courbe</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">plt.plot(x, y)</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Diagramme en barres</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">plt.bar(x, y, width)</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Histogramme</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">plt.hist(x, bins, density=True)</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Boîte à moustaches</TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">plt.boxplot(x)</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Affichage</strong></TableCell>
                  <TableCell><code className="bg-slate-100 px-2 py-1 rounded">plt.show()</code></TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-800">
                <strong>Conseil :</strong> Utiliser <code>density=True</code> dans <code>plt.hist</code> pour comparer directement à la densité théorique.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Méthode Monte-Carlo et Exercices */}
        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="monte-carlo">
            <AccordionTrigger className="text-lg font-semibold">
              Méthode de Monte-Carlo et estimation
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Estimer une espérance</h4>
                    <code className="text-sm bg-slate-100 px-2 py-1 rounded">np.mean(rd.&lt;loi&gt;(..., size=N))</code>
                    <p className="text-sm text-blue-700 mt-2">avec un grand N</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Estimer une probabilité</h4>
                    <code className="text-sm bg-slate-100 px-2 py-1 rounded">freq = np.mean(condition_bool)</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Exemple d'intégrale</h4>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
{`def approx_Jn(n, m=5000):
    x = rd.exponential(1, m)
    y = -x / (1 + np.exp(-n * x))
    return y.mean()`}
                    </pre>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="exercices">
            <AccordionTrigger className="text-lg font-semibold">
              Exercices types
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">1. Deux faces "Pile" consécutives au pile ou face</h4>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
{`def simul_X():
    tirs, pile = 0, 0
    while pile < 2:
        pile = pile + 1 if rd.random() < 0.5 else 0
        tirs += 1
    return tirs`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Jeu de dés : le joueur A gagne s'il obtient 6 avant B</h4>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
{`def partie():
    while True:
        if rd.randint(1, 7) == 6:  # A
            return 1
        if rd.randint(1, 7) == 6:  # B
            return 0

proba_A = np.mean([partie() for _ in range(10000)])`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Géométrique(p=0.2) : comparaison simulation / théorie</h4>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
{`ech = rd.geometric(0.2, 10000)
c = np.arange(0.5, 21)
plt.hist(ech, c, density=True, label="Simulation")

x = np.arange(1, 21)
y = 0.2 * 0.8**(x - 1)
plt.bar(x, y, label="Théorique")
plt.legend(); plt.show()`}
                    </pre>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Mémo-commandes rapides */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Code className="h-6 w-6" />
              Mémo-commandes rapides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
{`rd.random()              # uniforme 0–1
rd.randint(a, b)         # uniforme discrète a … b-1
rd.binomial(n, p)        # binomiale
rd.geometric(p)          # géométrique
rd.poisson(lam)          # poisson
rd.exponential(1/l)      # exponentielle
rd.normal(mean, sigma)   # normale`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Quiz express */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Target className="h-6 w-6" />
              Quiz express
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm font-medium">1. <code>rd.random((3,4))</code> produit-il bien 12 réels indépendants entre 0 et 1 ?</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm font-medium">2. Quelle commande simule une valeur de loi de Poisson avec paramètre 2 ?</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm font-medium">3. Pour estimer une espérance, quelle syntaxe est la plus simple ?</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm font-medium">4. Pourquoi ajouter <code>density=True</code> dans un histogramme ?</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm font-medium">5. Une ligne pour simuler dix mille valeurs de la loi géométrique avec paramètre 0.25 ?</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Les réponses se déduisent des sections précédentes.</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers exercices */}
        <ModuleNavigationCards 
          currentModule={{
            id: 3,
            title: "Probabilités",
            slug: "probabilites",
            color: "purple"
          }}
        />
    </PythonModuleLayout>
  );
};

export default PythonProbabilitesPage;

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PythonModuleQuiz } from '@/components/python/PythonModuleQuiz';
import { matricesQuizQuestions } from '@/data/pythonQuizQuestions';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';

const PythonMatricesPage = () => {
  return (
    <PythonModuleLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-green-500 text-white">
            <Calculator className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Module 1 - Les Matrices NumPy
            </h1>
            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">Module 1</Badge>
          </div>
        </div>
      </div>

        {/* Présentation générale */}
        <Card className="mb-8 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">1. PRÉSENTATION GÉNÉRALE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-600 mb-2">Définition</h3>
                <p className="text-gray-700">
                  NumPy (Numerical Python) est une bibliothèque pour le calcul en Python. Elle fournit un objet tableau multidimensionnel performant ainsi qu'un ensemble d'outils pour travailler avec ces tableaux.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-green-600 mb-2">Importation</h3>
                <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                  import numpy as np
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Cette convention d'importation avec l'alias 'np' est universellement adoptée.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Création de matrices */}
        <Card className="mb-8 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">2. CRÉATION DE MATRICES</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="creation-directe">
                <AccordionTrigger className="text-gray-600">Création directe avec np.array()</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>La fonction <code className="bg-gray-100 px-1 rounded">np.array()</code> permet de créer une matrice à partir de listes Python.</p>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-semibold mb-2">Syntaxe générale :</p>
                      <code className="font-mono">np.array(liste_de_listes)</code>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Cas particuliers :</p>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Matrice rectangulaire :</strong> chaque sous-liste représente une ligne</li>
                        <li>• <strong>Vecteur ligne :</strong> liste simple d'éléments</li>
                        <li>• <strong>Vecteur colonne :</strong> liste de listes à un élément chacune</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="matrices-speciales">
                <AccordionTrigger className="text-gray-600">Matrices spéciales</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Syntaxe</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Matrice nulle</TableCell>
                        <TableCell className="font-mono bg-gray-50">np.zeros([n, m])</TableCell>
                        <TableCell>Crée une matrice de dimensions n×m remplie de zéros</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Matrice de uns</TableCell>
                        <TableCell className="font-mono bg-gray-50">np.ones([n, m])</TableCell>
                        <TableCell>Crée une matrice de dimensions n×m remplie de uns</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Matrice identité</TableCell>
                        <TableCell className="font-mono bg-gray-50">np.eye(n)</TableCell>
                        <TableCell>Crée la matrice identité de dimension n×n</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="creation-vecteurs">
                <AccordionTrigger className="text-gray-600">Création de vecteurs</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Syntaxe</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Valeurs uniformément réparties</TableCell>
                        <TableCell className="font-mono bg-gray-50">np.linspace(début, fin, nombre_éléments)</TableCell>
                        <TableCell>Génère un vecteur de 'nombre_éléments' valeurs uniformément espacées entre 'début' et 'fin' inclus</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Entiers consécutifs</TableCell>
                        <TableCell className="font-mono bg-gray-50">np.arange(n)</TableCell>
                        <TableCell>Génère un vecteur contenant les entiers de 0 à n-1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Suite arithmétique</TableCell>
                        <TableCell className="font-mono bg-gray-50">np.arange(début, fin, pas)</TableCell>
                        <TableCell>Génère un vecteur selon une progression arithmétique de 'début' (inclus) à 'fin' (exclus) avec le pas spécifié</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Accès aux éléments */}
        <Card className="mb-8 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">3. ACCÈS AUX ÉLÉMENTS</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="indexation">
                <AccordionTrigger className="text-green-600">Système d'indexation</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>Les matrices NumPy utilisent un système d'indexation commençant à 0. Pour une matrice A de dimensions n×m :</p>
                    <ul className="space-y-1">
                      <li>• Les lignes sont numérotées de 0 à n-1</li>
                      <li>• Les colonnes sont numérotées de 0 à m-1</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="acces-elements">
                <AccordionTrigger className="text-green-600">Accès aux éléments et lignes/colonnes</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Objectif</TableHead>
                        <TableHead>Syntaxe</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Élément spécifique</TableCell>
                        <TableCell className="font-mono bg-gray-50">A[i, j]</TableCell>
                        <TableCell>Renvoie l'élément situé à la ligne i et à la colonne j</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Ligne complète</TableCell>
                        <TableCell className="font-mono bg-gray-50">A[i, :]</TableCell>
                        <TableCell>Renvoie la ligne i complète sous forme de vecteur</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Colonne complète</TableCell>
                        <TableCell className="font-mono bg-gray-50">A[:, j]</TableCell>
                        <TableCell>Renvoie la colonne j complète sous forme de vecteur</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Dimensions</TableCell>
                        <TableCell className="font-mono bg-gray-50">np.shape(A)</TableCell>
                        <TableCell>Renvoie un tuple (n, m) où n est le nombre de lignes et m le nombre de colonnes</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Opérations matricielles */}
        <Card className="mb-8 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">4. OPÉRATIONS MATRICIELLES</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="operations-elementaires">
                <AccordionTrigger className="text-gray-600">Opérations arithmétiques élémentaires</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Pour deux matrices A et B de mêmes dimensions :</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Opération</TableHead>
                        <TableHead>Syntaxe</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Addition</TableCell>
                        <TableCell className="font-mono bg-gray-50">A + B</TableCell>
                        <TableCell>Addition terme à terme des matrices</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Soustraction</TableCell>
                        <TableCell className="font-mono bg-gray-50">A - B</TableCell>
                        <TableCell>Soustraction terme à terme des matrices</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="multiplication">
                <AccordionTrigger className="text-gray-600">Multiplication</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Syntaxe</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Multiplication terme à terme</TableCell>
                        <TableCell className="font-mono bg-gray-50">A * B</TableCell>
                        <TableCell>Multiplie chaque élément de A par l'élément correspondant de B</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Produit matriciel</TableCell>
                        <TableCell className="font-mono bg-gray-50">np.dot(A, B)</TableCell>
                        <TableCell>Effectue le produit matriciel classique AB</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                    <p className="text-red-700 font-semibold">⚠️ Attention : Il est crucial de ne pas confondre ces deux types de multiplication.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="autres-operations">
                <AccordionTrigger className="text-gray-600">Division et transposition</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Opération</TableHead>
                        <TableHead>Syntaxe</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Division terme à terme</TableCell>
                        <TableCell className="font-mono bg-gray-50">A / B</TableCell>
                        <TableCell>Divise chaque élément de A par l'élément correspondant de B</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Transposition</TableCell>
                        <TableCell className="font-mono bg-gray-50">np.transpose(A)</TableCell>
                        <TableCell>Renvoie la matrice transposée de A</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Fonctions d'analyse */}
        <Card className="mb-8 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">5. FONCTIONS D'ANALYSE</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="fonctions-globales">
                <AccordionTrigger className="text-green-600">Fonctions globales</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Ces fonctions s'appliquent à tous les éléments de la matrice :</p>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
                    <div>np.sum(A)      # Somme de tous les éléments</div>
                    <div>np.min(A)      # Élément minimal</div>
                    <div>np.max(A)      # Élément maximal</div>
                    <div>np.mean(A)     # Moyenne arithmétique</div>
                    <div>np.median(A)   # Médiane</div>
                    <div>np.var(A)      # Variance</div>
                    <div>np.std(A)      # Écart-type</div>
                    <div>np.prod(A)     # Produit de tous les éléments</div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fonctions-axe">
                <AccordionTrigger className="text-green-600">Fonctions par axe</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Ces fonctions peuvent être appliquées ligne par ligne ou colonne par colonne :</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Application par colonne (axis=0)</h4>
                      <div className="bg-gray-50 p-3 rounded font-mono text-sm space-y-1">
                        <div>np.sum(A, 0)   # Somme de chaque colonne</div>
                        <div>np.mean(A, 0)  # Moyenne de chaque colonne</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Application par ligne (axis=1)</h4>
                      <div className="bg-gray-50 p-3 rounded font-mono text-sm space-y-1">
                        <div>np.sum(A, 1)   # Somme de chaque ligne</div>
                        <div>np.mean(A, 1)  # Moyenne de chaque ligne</div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fonctions-speciales">
                <AccordionTrigger className="text-green-600">Fonctions spéciales</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <h4 className="font-semibold mb-2">Somme cumulée</h4>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm mb-2">
                      np.cumsum(A)
                    </div>
                    <p className="text-sm text-gray-600">
                      Calcule les sommes partielles des éléments parcourus dans l'ordre (ligne par ligne).
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Application de fonctions mathématiques */}
        <Card className="mb-8 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">6. APPLICATION DE FONCTIONS MATHÉMATIQUES</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="fonctions-predefinies">
                <AccordionTrigger className="text-gray-600">Fonctions prédéfinies</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Les fonctions mathématiques s'appliquent élément par élément :</p>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
                    <div>np.exp(A)      # Exponentielle de chaque élément</div>
                    <div>np.log(A)      # Logarithme de chaque élément</div>
                    <div>np.abs(A)      # Valeur absolue de chaque élément</div>
                    <div>np.sqrt(A)     # Racine carrée de chaque élément</div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fonctions-personnalisees">
                <AccordionTrigger className="text-gray-600">Fonctions personnalisées</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Pour appliquer une fonction définie par l'utilisateur :</p>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
                    <div>def fonction_personnelle(x):</div>
                    <div className="ml-4">return x**2 + 1</div>
                    <div></div>
                    <div>fonction_vectorisée = np.vectorize(fonction_personnelle)</div>
                    <div>résultat = fonction_vectorisée(A)</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Opérations de comparaison */}
        <Card className="mb-8 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">7. OPÉRATIONS DE COMPARAISON</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="comparaison-valeur">
                <AccordionTrigger className="text-green-600">Comparaison avec une valeur</AccordionTrigger>
                <AccordionContent>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
                    <div>A &gt; valeur    # Renvoie une matrice de booléens</div>
                    <div>A == valeur   # Test d'égalité élément par élément</div>
                    <div>A &gt;= valeur   # Test de supériorité ou égalité</div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="comparaison-matrices">
                <AccordionTrigger className="text-green-600">Comparaison entre matrices</AccordionTrigger>
                <AccordionContent>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
                    <div>A == B        # Comparaison élément par élément</div>
                    <div>A &gt; B         # Test de supériorité élément par élément</div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Ces opérations renvoient des matrices de même dimension contenant des valeurs booléennes (True/False).
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Points essentiels */}
        <Card className="mb-8 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">8. POINTS ESSENTIELS À RETENIR</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <h4 className="font-semibold text-yellow-800 mb-2">Conventions d'indexation</h4>
                <ul className="space-y-1 text-yellow-700">
                  <li>• La numérotation commence toujours à 0</li>
                  <li>• L'ordre des indices est toujours [ligne, colonne]</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <h4 className="font-semibold text-yellow-800 mb-2">Distinction des opérations</h4>
                <ul className="space-y-1 text-yellow-700">
                  <li>• L'opérateur * effectue une multiplication terme à terme, pas un produit matriciel</li>
                  <li>• Le produit matriciel s'obtient exclusivement avec np.dot()</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded">
                <h4 className="font-semibold text-red-800 mb-2">Paramètre axis</h4>
                <ul className="space-y-1 text-red-700">
                  <li>• axis=0 : opération par colonne</li>
                  <li>• axis=1 : opération par ligne</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Vectorisation</h4>
                <p className="text-blue-700">
                  Toute fonction personnalisée doit être vectorisée avec np.vectorize() avant application à une matrice
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* QCM */}
        <Card className="mb-8 border-slate-200 bg-gradient-to-br from-slate-50 to-gray-50">
          <CardHeader>
            <CardTitle className="text-xl text-slate-700">QCM D'ÉVALUATION</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="qcm-questions">
                <AccordionTrigger className="text-slate-600">Questions du QCM</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    
                    <div className="p-4 bg-gray-50 rounded border">
                      <p className="font-semibold mb-2">Question 1</p>
                      <p className="mb-2">Que renvoie l'instruction <code className="bg-gray-100 px-1 rounded">np.array([[1,2],[3,4]])[1,0]</code> ?</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div>A) 1</div>
                        <div>B) 2</div>
                        <div>C) 3</div>
                        <div>D) 4</div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded border">
                      <p className="font-semibold mb-2">Question 2</p>
                      <p className="mb-2">Quelle est la différence fondamentale entre <code className="bg-gray-100 px-1 rounded">A * B</code> et <code className="bg-gray-100 px-1 rounded">np.dot(A,B)</code> ?</p>
                      <div className="space-y-1">
                        <div>A) Aucune différence</div>
                        <div>B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel</div>
                        <div>C) np.dot() est plus performant</div>
                        <div>D) A * B ne fonctionne que pour les vecteurs</div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded border">
                      <p className="font-semibold mb-2">Question 3</p>
                      <p className="mb-2">Pour calculer la somme de chaque ligne d'une matrice A, on utilise :</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div>A) np.sum(A, 0)</div>
                        <div>B) np.sum(A, 1)</div>
                        <div>C) np.sum(A)</div>
                        <div>D) np.row_sum(A)</div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded border">
                      <p className="font-semibold mb-2">Question 4</p>
                      <p className="mb-2">L'instruction <code className="bg-gray-100 px-1 rounded">np.zeros([3,2])</code> crée une matrice de dimensions :</p>
                      <div className="space-y-1">
                        <div>A) 2 lignes, 3 colonnes</div>
                        <div>B) 3 lignes, 2 colonnes</div>
                        <div>C) 6 éléments au total</div>
                        <div>D) Dimensions variables</div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded border">
                      <p className="font-semibold mb-2">Question 5</p>
                      <p className="mb-2">Pour extraire la troisième colonne d'une matrice A :</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div>A) A[3,:]</div>
                        <div>B) A[:,3]</div>
                        <div>C) A[:,2]</div>
                        <div>D) A[2,:]</div>
                      </div>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="qcm-reponses">
                <AccordionTrigger className="text-slate-600">Réponses du QCM</AccordionTrigger>
                <AccordionContent>
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Réponses correctes
                    </h4>
                    <div className="space-y-2 text-green-700">
                      <div><strong>1 - C</strong> (l'élément [1,0] vaut 3)</div>
                      <div><strong>2 - B</strong> (A * B = multiplication terme à terme, np.dot(A,B) = produit matriciel)</div>
                      <div><strong>3 - B</strong> (axis=1 pour les lignes)</div>
                      <div><strong>4 - B</strong> (3 lignes, 2 colonnes)</div>
                      <div><strong>5 - C</strong> (indexation commence à 0, donc colonne 3 = indice 2)</div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

      {/* Quiz Section */}
      <PythonModuleQuiz 
        title="🧠 Quiz Pratique - Module 2"
        questions={matricesQuizQuestions}
        moduleColor="green"
      />

      {/* Exercices */}
      <Card className="mb-8 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">EXERCICES D'APPLICATION</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              
              <AccordionItem value="niveau-1">
                <AccordionTrigger className="text-gray-600">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-700">Niveau 1</Badge>
                    Application directe
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="font-semibold mb-2">Exercice 1.1</p>
                      <p>Créer une matrice 3×4 contenant uniquement des zéros, puis une matrice 2×3 contenant uniquement des uns.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="font-semibold mb-2">Exercice 1.2</p>
                      <p>Soit A = np.array([[1,2,3],[4,5,6]]). Extraire l'élément de la deuxième ligne et troisième colonne.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="niveau-2">
                <AccordionTrigger className="text-gray-600">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-gray-100 text-gray-700">Niveau 2</Badge>
                    Manipulation des données
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="font-semibold mb-2">Exercice 2.1</p>
                      <p>Créer un vecteur contenant 10 valeurs uniformément réparties entre 0 et 1.</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="font-semibold mb-2">Exercice 2.2</p>
                      <p>Pour la matrice B = np.array([[10,20,30],[40,50,60]]), calculer la somme de chaque ligne et de chaque colonne.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="niveau-3">
                <AccordionTrigger className="text-gray-600">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-slate-100 text-slate-700">Niveau 3</Badge>
                    Opérations matricielles
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="font-semibold mb-2">Exercice 3.1</p>
                      <p>Soient A = np.array([[1,2],[3,4]]) et B = np.array([[2,1],[1,2]]). 
                         Calculer A + B, A * B et np.dot(A,B).</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="font-semibold mb-2">Exercice 3.2</p>
                      <p>Calculer la transposée de la matrice C = np.array([[1,2,3],[4,5,6],[7,8,9]]).</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="niveau-4">
                <AccordionTrigger className="text-gray-600">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-700">Niveau 4</Badge>
                    Analyse statistique
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold mb-2">Exercice 4.1</p>
                    <p className="mb-2">Une matrice représente les notes de 4 étudiants (lignes) dans 3 matières (colonnes).</p>
                    <div className="bg-gray-100 p-2 rounded font-mono text-sm mb-2">
                      Notes = np.array([[12,14,16],[15,13,17],[11,18,14],[16,15,13]])
                    </div>
                    <p>Calculer la moyenne générale, la moyenne par étudiant et la moyenne par matière.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="niveau-5">
                <AccordionTrigger className="text-gray-600">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-red-100 text-red-700">Niveau 5</Badge>
                    Problèmes de synthèse
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold mb-2">Exercice 5.1</p>
                    <p className="mb-2">Soit la matrice A = np.array([[2,1],[1,2]]).</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Calculer A²</li>
                      <li>• Vérifier que A² = 3A - 2I où I est la matrice identité</li>
                      <li>• En déduire une expression de A³</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </CardContent>
        </Card>

        {/* Navigation vers les exercices */}
        <ModuleNavigationCards 
          currentModule={{
            id: 1,
            title: "Matrices",
            slug: "matrices",
            color: "green"
          }}
          isExercisePage={false}
        />

    </PythonModuleLayout>
  );
};

export default PythonMatricesPage;

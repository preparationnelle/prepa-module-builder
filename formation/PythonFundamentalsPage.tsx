
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target, Lightbulb, Code, Settings } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PythonModuleQuiz } from '@/components/python/PythonModuleQuiz';
import { fundamentalsQuizQuestions } from '@/data/pythonQuizQuestions';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';

const PythonFundamentalsPage = () => {
  return (
    <PythonModuleLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-orange-500 text-white">
            <Code className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              Module 0 - Les Fondamentaux
            </h1>
            <Badge variant="secondary" className="mt-2 bg-orange-100 text-orange-700">Module 0</Badge>
          </div>
        </div>
      </div>

        {/* Objectifs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-orange-700 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Objectifs du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                Comprendre pourquoi Python rapporte facilement des points au concours ECG.
              </li>
              <li className="flex items-start gap-2">  
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                Maîtriser les bases du langage et les principales librairies utiles.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                Savoir écrire et structurer un script ou une fonction simple.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                Manipuler les listes et utiliser les boucles/conditions efficacement.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                Être capable de traiter tous les types d'exercices classiques en Python au concours.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          
          {/* Notion 1: Pourquoi miser sur Python */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                Notion 1 - Pourquoi miser sur Python est (très) rentable aux concours ECG
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-python">
                  <AccordionTrigger>Découvrir les avantages stratégiques de Python</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        Quand on prépare les concours ECG, la tentation peut être forte de consacrer tout son temps aux chapitres « mathématiques » classiques, parfois impressionnants par leur longueur ou leur technicité. Pourtant, le Python – souvent relégué au second plan – est un puissant levier de points trop souvent sous-estimé.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">1. Des questions courtes, des points rapides</h4>
                          <ul className="text-sm space-y-1 text-blue-700">
                            <li>• Compléter une ou deux lignes dans un script</li>
                            <li>• Corriger une erreur simple</li>
                            <li>• Écrire une mini-fonction à partir d'un énoncé clair</li>
                          </ul>
                          <p className="text-sm mt-2 text-blue-600">
                            <strong>En pratique :</strong> Beaucoup moins de temps qu'un exercice de matrices ou de probabilités.
                          </p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">2. Un barème qui pèse plus lourd qu'on le croit</h4>
                          <p className="text-sm text-green-700 mb-2">
                            La partie Python représente jusqu'à <strong>7 à 10 points</strong> du barème dans certaines épreuves.
                          </p>
                          <p className="text-sm text-green-600">
                            Faire l'essentiel en Python, c'est souvent gagner 4 à 5 points réels sur la note finale.
                          </p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">3. Des points accessibles, même pour les non-experts</h4>
                          <p className="text-sm text-purple-700">
                            Les questions de Python sont souvent indépendantes : Tu peux les traiter même si tu as « sauté » une ou deux sous-questions mathématiques plus dures juste avant.
                          </p>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">4. Un bonus pour tous les profils</h4>
                          <ul className="text-sm space-y-1 text-orange-700">
                            <li>• Si tu as des difficultés en maths → Python peut remonter ta note</li>
                            <li>• Si tu es déjà solide → moyen de viser l'excellence sans y passer beaucoup de temps</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-semibold text-yellow-800 mb-2">🎯 La stratégie gagnante : toujours finir par Python</h4>
                        <p className="text-sm text-yellow-700">
                          À la fin de l'épreuve, même si tu bloques sur des questions difficiles ou que le temps file, revenir sur les questions Python permet souvent de "gratter" quelques points supplémentaires rapidement, sans stress ni perte de temps.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">En résumé</h4>
                        <p className="text-sm text-gray-700">
                          Miser sur Python, c'est maximiser ton rendement : peu d'investissement, des points très accessibles, une vraie influence sur la note finale. N'oublie pas : un concours, ça se joue à quelques points près. Le Python est la zone stratégique où il ne faut jamais rien laisser passer.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 2: Principales librairies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-600" />
                Notion 2 - Les principales librairies Python (ECG)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="libraries">
                  <AccordionTrigger>Découvrir les librairies incontournables</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="text-gray-700 mb-4">
                        En Python, les librairies sont des ensembles de fonctions prêtes à l'emploi. Elles évitent de "réinventer la roue" et accélèrent le travail pour le calcul, l'algèbre linéaire, la manipulation de données ou la visualisation.
                      </p>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Nom</TableHead>
                            <TableHead>Alias</TableHead>
                            <TableHead>Utilité principale</TableHead>
                            <TableHead>Exemples clés</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-mono text-red-600">random</TableCell>
                            <TableCell className="font-mono">rd</TableCell>
                            <TableCell>Tirages aléatoires</TableCell>
                            <TableCell className="font-mono text-sm">rd.randint(), rd.choices()</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-blue-600">numpy</TableCell>
                            <TableCell className="font-mono">np</TableCell>
                            <TableCell>Calculs vectoriels/matriciels</TableCell>
                            <TableCell className="font-mono text-sm">np.array(), np.sum()</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-green-600">matplotlib</TableCell>
                            <TableCell className="font-mono">plt</TableCell>
                            <TableCell>Tracer des graphiques</TableCell>
                            <TableCell className="font-mono text-sm">plt.plot(), plt.show()</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-purple-600">pandas</TableCell>
                            <TableCell className="font-mono">pd</TableCell>
                            <TableCell>Données type tableau/Excel</TableCell>
                            <TableCell className="font-mono text-sm">pd.DataFrame(), pd.read_csv()</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-800 mb-2">1. random (rd)</h4>
                          <p className="text-sm text-red-700 mb-2">Générer des nombres aléatoires</p>
                          <div className="bg-gray-100 p-2 rounded font-mono text-sm">
                            <div>import random as rd</div>
                            <div>x = rd.randint(1, 6)  # Tire entre 1 et 6</div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">2. numpy (np)</h4>
                          <p className="text-sm text-blue-700 mb-2">Manipuler des tableaux de nombres</p>
                          <div className="bg-gray-100 p-2 rounded font-mono text-sm">
                            <div>import numpy as np</div>
                            <div>M = np.array([[1, 2], [3, 4]])</div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">3. matplotlib (plt)</h4>
                          <p className="text-sm text-green-700 mb-2">Créer des graphiques</p>
                          <div className="bg-gray-100 p-2 rounded font-mono text-sm">
                            <div>import matplotlib.pyplot as plt</div>
                            <div>plt.plot(x, y)</div>
                            <div>plt.show()</div>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">4. pandas (pd)</h4>
                          <p className="text-sm text-purple-700 mb-2">Travailler avec des données (type Excel)</p>
                          <div className="bg-gray-100 p-2 rounded font-mono text-sm">
                            <div>import pandas as pd</div>
                            <div>df = pd.DataFrame(data)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 3: Types fondamentaux et variables */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notion 3 - Types fondamentaux et Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="types-variables">
                  <AccordionTrigger>Maîtriser les types de base et les opérateurs</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Type</TableHead>
                            <TableHead>Exemple de déclaration</TableHead>
                            <TableHead>Particularités</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-mono text-blue-600">int</TableCell>
                            <TableCell className="font-mono bg-gray-50">a = 17</TableCell>
                            <TableCell>Entier</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-blue-600">float</TableCell>
                            <TableCell className="font-mono bg-gray-50">y = 8.5</TableCell>
                            <TableCell>Nombre à virgule</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-blue-600">bool</TableCell>
                            <TableCell className="font-mono bg-gray-50">flag = (a == 2)</TableCell>
                            <TableCell>Vaut True / False</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-blue-600">str</TableCell>
                            <TableCell className="font-mono bg-gray-50">nom = "ESCP"</TableCell>
                            <TableCell>Chaîne de caractères</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-semibold mb-2">Variables booléennes</h4>
                        <p className="text-sm mb-2"><code className="bg-gray-100 px-1 rounded">A==2</code> signifie « A est-il égal à 2 ?»</p>
                        <p className="text-sm"><code className="bg-gray-100 px-1 rounded">E = (A == C)</code> stocke TRUE ou FALSE dans E selon le test A==C</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Opérateurs numériques incontournables</h4>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Opérateur</TableHead>
                              <TableHead>Usage</TableHead>
                              <TableHead>Signification</TableHead>
                              <TableHead>Exemple Python</TableHead>
                              <TableHead>Résultat</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-mono text-blue-600">+</TableCell>
                              <TableCell>a + b</TableCell>
                              <TableCell>Addition</TableCell>
                              <TableCell className="font-mono bg-gray-50">3 + 2</TableCell>
                              <TableCell className="font-mono">5</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-blue-600">-</TableCell>
                              <TableCell>a - b</TableCell>
                              <TableCell>Soustraction</TableCell>
                              <TableCell className="font-mono bg-gray-50">5 - 8</TableCell>
                              <TableCell className="font-mono">-3</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-blue-600">*</TableCell>
                              <TableCell>a * b</TableCell>
                              <TableCell>Multiplication</TableCell>
                              <TableCell className="font-mono bg-gray-50">4 * 3</TableCell>
                              <TableCell className="font-mono">12</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-blue-600">/</TableCell>
                              <TableCell>a / b</TableCell>
                              <TableCell>Division (résultat float)</TableCell>
                              <TableCell className="font-mono bg-gray-50">7 / 2</TableCell>
                              <TableCell className="font-mono">3.5</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-blue-600">//</TableCell>
                              <TableCell>a // b</TableCell>
                              <TableCell>Division entière (quotient sans reste)</TableCell>
                              <TableCell className="font-mono bg-gray-50">7 // 2</TableCell>
                              <TableCell className="font-mono">3</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-blue-600">%</TableCell>
                              <TableCell>a % b</TableCell>
                              <TableCell>Modulo (reste de la division euclidienne)</TableCell>
                              <TableCell className="font-mono bg-gray-50">17 % 6</TableCell>
                              <TableCell className="font-mono">5</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-mono text-blue-600">**</TableCell>
                              <TableCell>a ** b</TableCell>
                              <TableCell>Puissance (a exposant b)</TableCell>
                              <TableCell className="font-mono bg-gray-50">2 ** 4</TableCell>
                              <TableCell className="font-mono">16</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 4: Print et Input */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notion 4 - Instructions d'affichage et de saisie en Python</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="print-input">
                  <AccordionTrigger>Maîtriser print() et input()</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">1. L'instruction d'affichage : print</h4>
                          <p className="text-sm text-blue-700 mb-2">Afficher du texte ou la valeur d'une variable à l'écran.</p>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div>print("Bonjour tout le monde !")</div>
                            <div>a = 7</div>
                            <div>print(a)</div>
                            <div>print("La valeur de a est :", a)</div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">2. L'instruction de saisie : input</h4>
                          <p className="text-sm text-green-700 mb-2">Demander à l'utilisateur d'entrer une valeur.</p>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div>nom = input("Quel est votre nom ? ")</div>
                            <div>print("Bonjour, " + nom + " !")</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <h4 className="font-semibold text-red-800 mb-2">⚠️ Important : Conversion des types</h4>
                        <p className="text-sm text-red-700 mb-2">Si tu veux récupérer un nombre, il faut convertir :</p>
                        <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                          <div>n = int(input("Donne un nombre entier : "))</div>
                          <div>x = float(input("Donne un nombre décimal : "))</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Script complet : Exemple interactif</h4>
                        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                          <div className="text-green-600"># Script pour saisir un entier et afficher la somme des entiers de 1 à n</div>
                          <div className="mt-2 space-y-1">
                            <div>n = int(input("Saisis un entier positif n : "))</div>
                            <div>somme = 0</div>
                            <div>for k in range(1, n+1):</div>
                            <div className="ml-4">somme += k</div>
                            <div>print("La somme de 1 à", n, "vaut", somme)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 5: Fonctions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notion 5 - Fonctions Python : natives, numpy et personnalisées</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="functions">
                  <AccordionTrigger>Comprendre et créer des fonctions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">1. Fonctions toutes faites</h4>
                          <p className="text-sm text-blue-700 mb-2">Python et numpy proposent beaucoup de fonctions prêtes à l'emploi :</p>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div>import numpy as np</div>
                            <div>L = [3.1, 2.5, 7.6]</div>
                            <div className="mt-2"></div>
                            <div>print(np.sum(L))     # Somme : 13.2</div>
                            <div>print(np.max(L))     # Maximum : 7.6</div>
                            <div>print(np.floor(L))   # Partie entière</div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">2. Fonctions personnalisées</h4>
                          <p className="text-sm text-green-700 mb-2">Quand aucune fonction ne correspond à ce que tu veux :</p>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div>def f(x):</div>
                            <div className="ml-4">"""Calcule 7x³ + 1"""</div>
                            <div className="ml-4">return 7*x**3 + 1</div>
                            <div className="mt-2"></div>
                            <div>def fpv(x, y, z):</div>
                            <div className="ml-4">"""Calcule 3x + 100y + 10000z"""</div>
                            <div className="ml-4">return 3*x + 100*y + 10000*z</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-semibold mb-2">Bonnes pratiques</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Le corps est indenté (4 espaces recommandés)</li>
                          <li>• Toujours fournir une docstring courte et un return</li>
                          <li>• Ces fonctions sont optimisées et à privilégier dès que possible</li>
                          <li>• Crée ta propre fonction quand tu dois effectuer un calcul original</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 6: Listes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notion 6 - Fiche Python – Listes (uniquement maths appli)</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="lists">
                  <AccordionTrigger>Maîtriser les listes Python</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        Une liste est une séquence ordonnée d'éléments (nombres, textes…). C'est le type le plus utilisé pour stocker des données ou des résultats de calculs en Python.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Créer et remplir une liste</h4>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div>L = [2, 4, 6]   # En extension</div>
                            <div>L2 = list(range(5))   # [0,1,2,3,4]</div>
                            <div>L3 = [k**2 for k in range(5)]   # [0,1,4,9,16]</div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Principales opérations</h4>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div>L.append(8)      # Ajout</div>
                            <div>L.remove(4)      # Suppression</div>
                            <div>premier = L[0]   # Premier élément</div>
                            <div>n = len(L)       # Longueur</div>
                          </div>
                        </div>
                      </div>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Opération</TableHead>
                            <TableHead>Syntaxe</TableHead>
                            <TableHead>Effet/Exemple</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Création</TableCell>
                            <TableCell className="font-mono">L = [2,4,6]</TableCell>
                            <TableCell>Nouvelle liste</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Ajout</TableCell>
                            <TableCell className="font-mono">L.append(8)</TableCell>
                            <TableCell>[2,4,6,8]</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Suppression</TableCell>
                            <TableCell className="font-mono">L.remove(4)</TableCell>
                            <TableCell>[2,6,8]</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Indexation</TableCell>
                            <TableCell className="font-mono">L[0]</TableCell>
                            <TableCell>2 (premier élément)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Concaténation</TableCell>
                            <TableCell className="font-mono">L1 + L2</TableCell>
                            <TableCell>[1,2,3,4]</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Répétition</TableCell>
                            <TableCell className="font-mono">[0]*3</TableCell>
                            <TableCell>[0,0,0]</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Tri</TableCell>
                            <TableCell className="font-mono">L.sort(), sorted(L)</TableCell>
                            <TableCell>Liste triée</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Appartenance</TableCell>
                            <TableCell className="font-mono">x in L</TableCell>
                            <TableCell>True/False</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Application mathématique</h4>
                        <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                          <div>S = sum(L)                    # Calcul de somme</div>
                          <div>moyenne = sum(L) / len(L)     # Moyenne</div>
                          <div>for x in L:                   # Itération</div>
                          <div className="ml-4">print(x)</div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 7: Structures de contrôle */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notion 7 - Structures de contrôle : for, if, while</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="control-structures">
                  <AccordionTrigger>Maîtriser les boucles et conditions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Structure</TableHead>
                            <TableHead>Utilité principale</TableHead>
                            <TableHead>Syntaxe courte</TableHead>
                            <TableHead>Exemple typique</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-semibold">for</TableCell>
                            <TableCell>Répéter pour chaque valeur</TableCell>
                            <TableCell className="font-mono">for k in range(...):</TableCell>
                            <TableCell>Double somme</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">if</TableCell>
                            <TableCell>Tester une condition</TableCell>
                            <TableCell className="font-mono">if ...: elif ...: else:</TableCell>
                            <TableCell>Pair/impair</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">while</TableCell>
                            <TableCell>Répéter tant que condition</TableCell>
                            <TableCell className="font-mono">while condition:</TableCell>
                            <TableCell>Recherche de seuil</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Boucle for</h4>
                          <p className="text-sm text-blue-700 mb-2">Quand on sait combien de fois répéter</p>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div>n = int(input("n ? "))</div>
                            <div>S = 0</div>
                            <div>for i in range(1, n+1):</div>
                            <div className="ml-4">for j in range(1, n+1):</div>
                            <div className="ml-8">S += i*j</div>
                            <div>print(S)</div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Structure if</h4>
                          <p className="text-sm text-green-700 mb-2">Pour prendre des décisions</p>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div>n = 5</div>
                            <div>if n % 2 == 0:</div>
                            <div className="ml-4">print("n est pair")</div>
                            <div>else:</div>
                            <div className="ml-4">print("n est impair")</div>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Boucle while</h4>
                          <p className="text-sm text-purple-700 mb-2">Quand on ne sait pas combien de fois</p>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div>n = 0</div>
                            <div>while 3*n + 1 &lt;= 5000:</div>
                            <div className="ml-4">n += 1</div>
                            <div>print(n, 3*n + 1)</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-semibold mb-2">Bonnes pratiques</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>for :</strong> Préférer range() aux boucles indice manuelles</li>
                          <li>• <strong>if :</strong> Utiliser elif pour éviter l'imbrication excessive</li>
                          <li>• <strong>while :</strong> Toujours prévoir une condition de sortie clairement commentée</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 8: Différence script/fonction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notion 8 - Différence entre une fonction et un script en Python</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="script-vs-function">
                  <AccordionTrigger>Comprendre script vs fonction</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Script</h4>
                          <p className="text-sm text-blue-700 mb-3">
                            Ensemble d'instructions exécutées directement quand on lance le fichier. Effectue une tâche, mais n'est pas conçu pour être réutilisé facilement.
                          </p>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div className="text-green-600"># Script qui calcule la somme de 1 à n</div>
                            <div>n = 10</div>
                            <div>somme = 0</div>
                            <div>for k in range(1, n+1):</div>
                            <div className="ml-4">somme += k</div>
                            <div>print(f"La somme de 1 à {'{n}'} vaut {'{somme}'}")</div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Fonction</h4>
                          <p className="text-sm text-green-700 mb-3">
                            Bloc de code réutilisable, défini une seule fois, et que l'on peut appeler plusieurs fois avec des paramètres différents.
                          </p>
                          <div className="bg-gray-100 p-3 rounded font-mono text-sm space-y-1">
                            <div className="text-green-600"># Fonction qui calcule la somme de 1 à n</div>
                            <div>def somme_1_a_n(n):</div>
                            <div className="ml-4">somme = 0</div>
                            <div className="ml-4">for k in range(1, n+1):</div>
                            <div className="ml-8">somme += k</div>
                            <div className="ml-4">return somme</div>
                            <div className="mt-2"></div>
                            <div>print(somme_1_a_n(10))    # Affiche 55</div>
                            <div>print(somme_1_a_n(100))   # Affiche 5050</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-semibold mb-2">L'intérêt principal des fonctions</h4>
                        <p className="text-sm">
                          <strong>Réutilisabilité et clarté du code.</strong> Impossible de réutiliser facilement un script pour une autre valeur sans modifier le code ou relancer l'exécution. Avec une fonction, on peut l'appeler autant de fois qu'on veut avec des paramètres différents.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 9: Méthode de résolution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Settings className="h-5 w-5 text-orange-600" />
                Notion 9 - Fiche méthode – Résoudre un exercice en Python
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="method">
                  <AccordionTrigger>Maîtriser la méthode de résolution</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Plan de résolution en 3 étapes</h4>
                        <p className="text-sm">Décomposer en trois grandes étapes : <strong>Initialisation → Traitement → Sortie</strong></p>
                      </div>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Étape</TableHead>
                            <TableHead>Script</TableHead>
                            <TableHead>Fonction</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-semibold">Initialisation</TableCell>
                            <TableCell>Variables et compteurs avant la boucle</TableCell>
                            <TableCell>Paramètres d'entrée + compteurs locaux</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">Traitement</TableCell>
                            <TableCell>Calculs, boucles, conditions</TableCell>
                            <TableCell>Même logique, mais variables locales</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">Sortie</TableCell>
                            <TableCell>print(...) (affichage à l'utilisateur)</TableCell>
                            <TableCell>return ... (valeur renvoyée à l'appelant)</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">1. Initialisation</h4>
                          <p className="text-sm text-blue-700 mb-2">Préparer les variables, compteurs, listes</p>
                          <ul className="text-xs space-y-1">
                            <li>• Toujours initialiser les compteurs à 0</li>
                            <li>• Pour une liste : créer la structure vide (L = [])</li>
                            <li>• Bien distinguer : input(), paramètres, variables locales</li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">2. Traitement</h4>
                          <p className="text-sm text-green-700 mb-2">Mettre en œuvre l'algorithme</p>
                          <ul className="text-xs space-y-1">
                            <li>• Boucles (for ou while) pour répéter des calculs</li>
                            <li>• Transformation ou calcul sur des listes</li>
                            <li>• Utilisation de conditions (if) pour ajuster</li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">3. Sortie</h4>
                          <p className="text-sm text-purple-700 mb-2">Afficher ou retourner le résultat</p>
                          <ul className="text-xs space-y-1">
                            <li>• Script : utiliser print() pour l'utilisateur</li>
                            <li>• Fonction : utiliser return pour l'appelant</li>
                            <li>• Choisir le bon format : nombre, liste, chaîne...</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-semibold mb-2">Astuce méthode</h4>
                        <p className="text-sm">
                          Toujours écrire d'abord le plan sur papier avant de coder : <strong>Initialisation → Traitement → Sortie</strong>. Tester avec plusieurs cas (petit, grand, valeurs limites).
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 10: Types d'exercices */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notion 10 - Les trois types d'exercices programmation fréquents en ECG</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="exercise-types">
                  <AccordionTrigger>Reconnaître les types d'exercices</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        Dans les sujets d'annales ou en contrôle, on retrouve presque toujours trois grandes familles d'exercices. Les repérer aide à gagner du temps et à adopter la bonne stratégie.
                      </p>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Type d'exercice</TableHead>
                            <TableHead>Ce qu'on attend</TableHead>
                            <TableHead>Points stratégiques</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-semibold">Créer un script ou une fonction</TableCell>
                            <TableCell>Structuration, logique</TableCell>
                            <TableCell>Initialisation → Traitement → Sortie, ne pas oublier les imports</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">Compléter/comprendre un script</TableCell>
                            <TableCell>Lecture, rigueur, déduction</TableCell>
                            <TableCell>Tester à la main, suivre la logique</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-semibold">Interpréter une sortie</TableCell>
                            <TableCell>Analyse, synthèse, lien au cours</TableCell>
                            <TableCell>Faire le lien avec le programme, argumenter</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Type 1 : Créer à partir de rien</h4>
                          <p className="text-sm text-blue-700 mb-2">« Écrire un script qui réalise… », « Créer une fonction qui calcule… »</p>
                          <ul className="text-xs space-y-1">
                            <li>• Partir d'un énoncé et construire la totalité de la solution</li>
                            <li>• Structurer selon : Initialisation → Traitement → Sortie</li>
                            <li>• Ne pas oublier les imports de librairies</li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Type 2 : Comprendre/Compléter</h4>
                          <p className="text-sm text-green-700 mb-2">« Que fait ce script ? », « Compléter la ligne manquante »</p>
                          <ul className="text-xs space-y-1">
                            <li>• Analyser un code fourni (en entier ou partiellement)</li>
                            <li>• Comprendre la logique des variables</li>
                            <li>• Retracer l'évolution ligne par ligne</li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Type 3 : Interpréter</h4>
                          <p className="text-sm text-purple-700 mb-2">« Interpréter ce graphique », « Conclure sur la convergence »</p>
                          <ul className="text-xs space-y-1">
                            <li>• Lire, analyser et expliquer un résultat obtenu</li>
                            <li>• Interpréter courbe, tableau, histogramme</li>
                            <li>• Faire le lien avec les notions du cours</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-semibold mb-2">🎯 Stratégie gagnante</h4>
                        <p className="text-sm">
                          Entraîne-toi régulièrement sur des annales en repérant à quelle catégorie appartient chaque question. Reconnaître rapidement le type d'exercice aide à organiser sa réflexion et à maximiser ses points le jour de l'épreuve.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 11: Comment bien se préparer */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notion 11 - Comment bien se préparer en Python pour réussir les concours ECG</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="preparation">
                  <AccordionTrigger>Découvrir la méthode de préparation efficace</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        Réussir l'épreuve de Python aux concours ne tient pas du hasard. C'est une question de méthode, de rigueur, mais aussi de bonnes ressources.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">1. Se tester avec les flashcards</h4>
                          <p className="text-sm text-blue-700 mb-2">L'entraînement régulier permet de vérifier que les notions de base sont bien assimilées :</p>
                          <ul className="text-xs space-y-1">
                            <li>• Syntaxes clés (for, while, if, listes, fonctions)</li>
                            <li>• Commandes incontournables à connaître par cœur</li>
                            <li>• Se tester plusieurs fois, à intervalles réguliers</li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">2. Réviser avec des fiches structurées</h4>
                          <p className="text-sm text-green-700 mb-2">Avoir accès à toutes les notions du programme fait gagner un temps considérable :</p>
                          <ul className="text-xs space-y-1">
                            <li>• Définitions et syntaxes bien présentées</li>
                            <li>• Bonnes pratiques et astuces</li>
                            <li>• Révisions rapides avant l'épreuve</li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">3. S'entraîner sur les scripts classiques</h4>
                          <p className="text-sm text-purple-700 mb-2">Retrouver tous les scripts tombés ou susceptibles de tomber :</p>
                          <ul className="text-xs space-y-1">
                            <li>• Sommes, produits, suites, simulations</li>
                            <li>• Les reconnaître au premier coup d'œil</li>
                            <li>• Les adapter rapidement à une consigne nouvelle</li>
                          </ul>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">4. Développer son propre outil</h4>
                          <p className="text-sm text-orange-700 mb-2">S'approprier l'outil de travail :</p>
                          <ul className="text-xs space-y-1">
                            <li>• Ajouter les scripts qui t'ont posé difficulté</li>
                            <li>• Prendre des notes sur les erreurs fréquentes</li>
                            <li>• Construire une bibliothèque de bouts de code maîtrisés</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-semibold mb-2">🎒 Le kit de survie Python</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Une liste exhaustive des commandes, structures, syntaxes à connaître</li>
                          <li>• Les scripts classiques, déjà tombés ou repérés dans les annales</li>
                          <li>• Les fiches de cours synthétiques sur toutes les notions du programme</li>
                          <li>• La capacité de retrouver rapidement un exemple ou une structure type</li>
                          <li>• Et surtout, la compréhension de ce que tu fais (et non seulement le « par cœur »)</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <h4 className="font-semibold text-red-800 mb-2">🔑 La clé : compréhension + pratique régulière</h4>
                        <p className="text-sm text-red-700">
                          C'est la compréhension profonde des mécanismes de Python, associée à une pratique régulière et ciblée, qui te permettra de réussir dans n'importe quelle situation. Avoir un outil complet, c'est bien. Mais l'avoir personnalisé, enrichi, testé et retravaillé, c'est ce qui fait la différence le jour du concours.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Notion 12: Récapitulatif des commandes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notion 12 - Récapitulatif des commandes utiles</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="commands-summary">
                  <AccordionTrigger>Tableau récapitulatif complet</AccordionTrigger>
                  <AccordionContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Action ou test</TableHead>
                          <TableHead>Syntaxe Python</TableHead>
                          <TableHead>Exemple</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Affecter une valeur</TableCell>
                          <TableCell className="font-mono">=</TableCell>
                          <TableCell className="font-mono bg-gray-50">A = 5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Afficher une valeur</TableCell>
                          <TableCell className="font-mono">print(...)</TableCell>
                          <TableCell className="font-mono bg-gray-50">print(A)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Connaître le type</TableCell>
                          <TableCell className="font-mono">type(...)</TableCell>
                          <TableCell className="font-mono bg-gray-50">type(A)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Addition</TableCell>
                          <TableCell className="font-mono">+</TableCell>
                          <TableCell className="font-mono bg-gray-50">A + B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Soustraction</TableCell>
                          <TableCell className="font-mono">-</TableCell>
                          <TableCell className="font-mono bg-gray-50">A - B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Multiplication</TableCell>
                          <TableCell className="font-mono">*</TableCell>
                          <TableCell className="font-mono bg-gray-50">A * B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Division réelle</TableCell>
                          <TableCell className="font-mono">/</TableCell>
                          <TableCell className="font-mono bg-gray-50">A / B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Division entière</TableCell>
                          <TableCell className="font-mono">//</TableCell>
                          <TableCell className="font-mono bg-gray-50">A // B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Modulo (reste de division)</TableCell>
                          <TableCell className="font-mono">%</TableCell>
                          <TableCell className="font-mono bg-gray-50">A % B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Puissance</TableCell>
                          <TableCell className="font-mono">**</TableCell>
                          <TableCell className="font-mono bg-gray-50">A ** B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Partie entière</TableCell>
                          <TableCell className="font-mono">int(...)</TableCell>
                          <TableCell className="font-mono bg-gray-50">int(6.4)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Entrée clavier utilisateur</TableCell>
                          <TableCell className="font-mono">input(...)</TableCell>
                          <TableCell className="font-mono bg-gray-50">x = input("Entrer x : ")</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Boucle for</TableCell>
                          <TableCell className="font-mono">for ... in range(...):</TableCell>
                          <TableCell className="font-mono bg-gray-50">for i in range(1, 5, 2):</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Boucle while</TableCell>
                          <TableCell className="font-mono">while ...:</TableCell>
                          <TableCell className="font-mono bg-gray-50">while A &lt; 5:</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Condition if</TableCell>
                          <TableCell className="font-mono">if ...:</TableCell>
                          <TableCell className="font-mono bg-gray-50">if A == 3:</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Condition elif</TableCell>
                          <TableCell className="font-mono">elif ...:</TableCell>
                          <TableCell className="font-mono bg-gray-50">elif A &lt;= 6:</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Condition else</TableCell>
                          <TableCell className="font-mono">else:</TableCell>
                          <TableCell className="font-mono bg-gray-50">else:</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Inférieur</TableCell>
                          <TableCell className="font-mono">&lt;</TableCell>
                          <TableCell className="font-mono bg-gray-50">A &lt; B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Supérieur</TableCell>
                          <TableCell className="font-mono">&gt;</TableCell>
                          <TableCell className="font-mono bg-gray-50">A &gt; B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Inférieur ou égal</TableCell>
                          <TableCell className="font-mono">&lt;=</TableCell>
                          <TableCell className="font-mono bg-gray-50">A &lt;= B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Supérieur ou égal</TableCell>
                          <TableCell className="font-mono">&gt;=</TableCell>
                          <TableCell className="font-mono bg-gray-50">A &gt;= B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Égalité</TableCell>
                          <TableCell className="font-mono">==</TableCell>
                          <TableCell className="font-mono bg-gray-50">A == B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Différence</TableCell>
                          <TableCell className="font-mono">!=</TableCell>
                          <TableCell className="font-mono bg-gray-50">A != B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tester si pair</TableCell>
                          <TableCell className="font-mono">% 2 == 0</TableCell>
                          <TableCell className="font-mono bg-gray-50">A % 2 == 0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tester si impair</TableCell>
                          <TableCell className="font-mono">% 2 == 1</TableCell>
                          <TableCell className="font-mono bg-gray-50">A % 2 == 1</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

        </div>

        {/* Quiz Section */}
        <PythonModuleQuiz 
          title="🧠 Quiz Pratique - Module 0"
          questions={fundamentalsQuizQuestions}
          moduleColor="orange"
        />

        {/* Navigation vers les exercices */}
        <ModuleNavigationCards 
          currentModule={{
            id: 0,
            title: "Fondamentaux",
            slug: "fondamentaux",
            color: "orange"
          }}
          isExercisePage={false}
        />

    </PythonModuleLayout>
  );
};

export default PythonFundamentalsPage;

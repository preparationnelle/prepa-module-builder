
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, AlertCircle } from "lucide-react";

export const MethodGrammaireStructurePage = () => {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="mb-6">
        <Link to="/methodologie/allemand">
          <Button variant="outline" className="mb-4 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour à la méthodologie allemand
          </Button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-extrabold mb-8 text-[#ff9100] text-center">
        Structure de la Phrase Allemande
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Comprendre la syntaxe allemande</p>
          <p className="text-muted-foreground">
            Maîtriser l'ordre des mots en allemand : la clé pour construire des phrases correctes !
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Règle fondamentale */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              1. La règle des "3 positions"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Règle d'or</h4>
                <p className="text-red-700">
                  Dans une phrase principale allemande, le verbe conjugué occupe TOUJOURS la <strong>2ème position</strong>.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Schéma de base :</h4>
                <div className="grid grid-cols-5 gap-2 text-center text-sm font-medium">
                  <div className="bg-blue-200 p-2 rounded">Position 1</div>
                  <div className="bg-red-200 p-2 rounded">Position 2<br/>(VERBE)</div>
                  <div className="bg-green-200 p-2 rounded">Milieu</div>
                  <div className="bg-yellow-200 p-2 rounded">Fin<br/>(verbes)</div>
                  <div className="bg-purple-200 p-2 rounded">Post-champ</div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Exemples :</h5>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-5 gap-2">
                    <div className="bg-blue-100 p-1 rounded text-center"><strong>Ich</strong></div>
                    <div className="bg-red-100 p-1 rounded text-center"><strong>gehe</strong></div>
                    <div className="bg-green-100 p-1 rounded text-center">heute</div>
                    <div className="bg-yellow-100 p-1 rounded text-center">-</div>
                    <div className="bg-purple-100 p-1 rounded text-center">ins Kino</div>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="bg-blue-100 p-1 rounded text-center"><strong>Heute</strong></div>
                    <div className="bg-red-100 p-1 rounded text-center"><strong>gehe</strong></div>
                    <div className="bg-green-100 p-1 rounded text-center">ich</div>
                    <div className="bg-yellow-100 p-1 rounded text-center">-</div>
                    <div className="bg-purple-100 p-1 rounded text-center">ins Kino</div>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="bg-blue-100 p-1 rounded text-center"><strong>Ins Kino</strong></div>
                    <div className="bg-red-100 p-1 rounded text-center"><strong>gehe</strong></div>
                    <div className="bg-green-100 p-1 rounded text-center">ich</div>
                    <div className="bg-yellow-100 p-1 rounded text-center">-</div>
                    <div className="bg-purple-100 p-1 rounded text-center">heute</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verbes séparables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              2. Verbes à particule séparable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                La particule séparable va en fin de phrase (position finale).
              </p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Structure avec verbe séparable :</h4>
                <div className="grid grid-cols-4 gap-2 text-center text-sm font-medium mb-3">
                  <div className="bg-blue-200 p-2 rounded">Position 1</div>
                  <div className="bg-red-200 p-2 rounded">Verbe conjugué</div>
                  <div className="bg-green-200 p-2 rounded">Milieu</div>
                  <div className="bg-yellow-200 p-2 rounded">Particule</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-blue-100 p-2 rounded text-center"><strong>Ich</strong></div>
                    <div className="bg-red-100 p-2 rounded text-center"><strong>stehe</strong></div>
                    <div className="bg-green-100 p-2 rounded text-center">um 7 Uhr</div>
                    <div className="bg-yellow-100 p-2 rounded text-center"><strong>auf</strong></div>
                  </div>
                  <p className="text-muted-foreground text-center">(Je me lève à 7 heures.)</p>
                  
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-blue-100 p-2 rounded text-center"><strong>Der Zug</strong></div>
                    <div className="bg-red-100 p-2 rounded text-center"><strong>kommt</strong></div>
                    <div className="bg-green-100 p-2 rounded text-center">um 8 Uhr</div>
                    <div className="bg-yellow-100 p-2 rounded text-center"><strong>an</strong></div>
                  </div>
                  <p className="text-muted-foreground text-center">(Le train arrive à 8 heures.)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Temps composés */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              3. Temps composés (Parfait, Futur)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Structure avec auxiliaire :</h4>
                <div className="grid grid-cols-4 gap-2 text-center text-sm font-medium mb-3">
                  <div className="bg-blue-200 p-2 rounded">Position 1</div>
                  <div className="bg-red-200 p-2 rounded">Auxiliaire</div>
                  <div className="bg-green-200 p-2 rounded">Milieu</div>
                  <div className="bg-yellow-200 p-2 rounded">Participe/Infinitif</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-blue-100 p-2 rounded text-center"><strong>Ich</strong></div>
                    <div className="bg-red-100 p-2 rounded text-center"><strong>habe</strong></div>
                    <div className="bg-green-100 p-2 rounded text-center">gestern</div>
                    <div className="bg-yellow-100 p-2 rounded text-center"><strong>gelernt</strong></div>
                  </div>
                  <p className="text-muted-foreground text-center">(J'ai étudié hier.)</p>
                  
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-blue-100 p-2 rounded text-center"><strong>Wir</strong></div>
                    <div className="bg-red-100 p-2 rounded text-center"><strong>werden</strong></div>
                    <div className="bg-green-100 p-2 rounded text-center">morgen</div>
                    <div className="bg-yellow-100 p-2 rounded text-center"><strong>fahren</strong></div>
                  </div>
                  <p className="text-muted-foreground text-center">(Nous partirons demain.)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verbes de modalité */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <AlertCircle className="h-6 w-6" />
              4. Verbes de modalité
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                L'infinitif du verbe principal va en fin de phrase.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">Structure avec modal :</h4>
                <div className="grid grid-cols-4 gap-2 text-center text-sm font-medium mb-3">
                  <div className="bg-blue-200 p-2 rounded">Position 1</div>
                  <div className="bg-red-200 p-2 rounded">Modal</div>
                  <div className="bg-green-200 p-2 rounded">Milieu</div>
                  <div className="bg-yellow-200 p-2 rounded">Infinitif</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-blue-100 p-2 rounded text-center"><strong>Ich</strong></div>
                    <div className="bg-red-100 p-2 rounded text-center"><strong>kann</strong></div>
                    <div className="bg-green-100 p-2 rounded text-center">gut</div>
                    <div className="bg-yellow-100 p-2 rounded text-center"><strong>schwimmen</strong></div>
                  </div>
                  <p className="text-muted-foreground text-center">(Je sais bien nager.)</p>
                  
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-blue-100 p-2 rounded text-center"><strong>Du</strong></div>
                    <div className="bg-red-100 p-2 rounded text-center"><strong>musst</strong></div>
                    <div className="bg-green-100 p-2 rounded text-center">jetzt</div>
                    <div className="bg-yellow-100 p-2 rounded text-center"><strong>gehen</strong></div>
                  </div>
                  <p className="text-muted-foreground text-center">(Tu dois partir maintenant.)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subordonnées */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              5. Propositions subordonnées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Règle absolue</h4>
                <p className="text-red-700">
                  Dans une subordonnée, le verbe conjugué va TOUJOURS en fin de proposition !
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Structure de la subordonnée :</h4>
                <div className="grid grid-cols-4 gap-2 text-center text-sm font-medium mb-3">
                  <div className="bg-purple-200 p-2 rounded">Conjonction</div>
                  <div className="bg-green-200 p-2 rounded">Sujet</div>
                  <div className="bg-blue-200 p-2 rounded">Compléments</div>
                  <div className="bg-red-200 p-2 rounded">VERBE</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-purple-100 p-2 rounded text-center"><strong>dass</strong></div>
                    <div className="bg-green-100 p-2 rounded text-center">er</div>
                    <div className="bg-blue-100 p-2 rounded text-center">morgen</div>
                    <div className="bg-red-100 p-2 rounded text-center"><strong>kommt</strong></div>
                  </div>
                  <p className="text-muted-foreground text-center">Ich weiß, dass er morgen kommt. (Je sais qu'il vient demain.)</p>
                  
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-purple-100 p-2 rounded text-center"><strong>weil</strong></div>
                    <div className="bg-green-100 p-2 rounded text-center">es</div>
                    <div className="bg-blue-100 p-2 rounded text-center">heute</div>
                    <div className="bg-red-100 p-2 rounded text-center"><strong>regnet</strong></div>
                  </div>
                  <p className="text-muted-foreground text-center">Wir bleiben zu Hause, weil es heute regnet. (Nous restons à la maison parce qu'il pleut aujourd'hui.)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              6. Les questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Questions fermées (Ja/Nein)</h4>
                  <p className="text-green-700 mb-2">Le verbe en première position :</p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>Kommst</strong> du mit?</li>
                    <li>• <strong>Hast</strong> du Zeit?</li>
                    <li>• <strong>Ist</strong> das richtig?</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Questions ouvertes (W-Fragen)</h4>
                  <p className="text-blue-700 mb-2">Mot interrogatif + verbe en 2ème position :</p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Wann kommst</strong> du?</li>
                    <li>• <strong>Wo wohnst</strong> du?</li>
                    <li>• <strong>Was machst</strong> du?</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Mots interrogatifs courants :</h5>
                <div className="grid md:grid-cols-3 gap-2 text-sm">
                  <div>• <strong>wer</strong> (qui)</div>
                  <div>• <strong>was</strong> (quoi)</div>
                  <div>• <strong>wann</strong> (quand)</div>
                  <div>• <strong>wo</strong> (où)</div>
                  <div>• <strong>wie</strong> (comment)</div>
                  <div>• <strong>warum</strong> (pourquoi)</div>
                  <div>• <strong>welcher</strong> (quel)</div>
                  <div>• <strong>wieviel</strong> (combien)</div>
                  <div>• <strong>wohin</strong> (où - direction)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils pratiques */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💡 Méthode d'entraînement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Techniques efficaces</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Visualiser les "cases" de la phrase</li>
                    <li>• S'entraîner avec des phrases simples</li>
                    <li>• Identifier d'abord le verbe</li>
                    <li>• Pratiquer la transformation de phrases</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Erreurs fréquentes</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Oublier la 2ème position du verbe</li>
                    <li>• Mal placer les verbes en fin de phrase</li>
                    <li>• Confondre principale et subordonnée</li>
                    <li>• Négliger l'ordre des compléments</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">🎯 Exercice recommandé</h4>
                <p className="text-yellow-700 text-sm">
                  Transformez une phrase simple en changeant l'élément en première position. 
                  Exemple : "Ich gehe heute ins Kino" → "Heute gehe ich ins Kino" → "Ins Kino gehe ich heute"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Link to="/methodologie/allemand">
          <Button className="bg-[#ff9100] hover:bg-[#e8820e]">
            Retour à la méthodologie allemand
          </Button>
        </Link>
      </div>
    </div>
  );
};

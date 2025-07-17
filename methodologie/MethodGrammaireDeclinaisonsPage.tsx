
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, AlertCircle } from "lucide-react";

export const MethodGrammaireDeclinaisonsPage = () => {
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
        Déclinaisons de l'Adjectif Allemand
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Maîtriser les déclinaisons adjectivales</p>
          <p className="text-muted-foreground">
            Guide complet avec tableaux et exemples pratiques pour ne plus jamais se tromper !
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Règle générale */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              1. Principe général
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Règle d'or</h4>
                <p className="text-blue-700">
                  L'adjectif allemand se décline selon le <strong>genre</strong>, le <strong>nombre</strong> et le <strong>cas</strong> du nom qu'il qualifie.
                  Sa terminaison dépend aussi de l'article qui précède.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Les trois types de déclinaisons :</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-green-100 p-3 rounded">
                    <h5 className="font-medium text-green-800">Déclinaison faible</h5>
                    <p className="text-green-600">Après article défini (der, die, das)</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded">
                    <h5 className="font-medium text-yellow-800">Déclinaison forte</h5>
                    <p className="text-yellow-600">Sans article ou après mots invariables</p>
                  </div>
                  <div className="bg-red-100 p-3 rounded">
                    <h5 className="font-medium text-red-800">Déclinaison mixte</h5>
                    <p className="text-red-600">Après article indéfini (ein, eine, ein)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Déclinaison faible */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              2. Déclinaison faible (après der, die, das)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Utilisée après les articles définis : der, die, das, des, dem, den, etc.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Cas</th>
                      <th className="border border-gray-300 p-2 text-left">Masculin</th>
                      <th className="border border-gray-300 p-2 text-left">Féminin</th>
                      <th className="border border-gray-300 p-2 text-left">Neutre</th>
                      <th className="border border-gray-300 p-2 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Nominatif</td>
                      <td className="border border-gray-300 p-2">der gut<strong>e</strong> Mann</td>
                      <td className="border border-gray-300 p-2">die gut<strong>e</strong> Frau</td>
                      <td className="border border-gray-300 p-2">das gut<strong>e</strong> Kind</td>
                      <td className="border border-gray-300 p-2">die gut<strong>en</strong> Leute</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Accusatif</td>
                      <td className="border border-gray-300 p-2">den gut<strong>en</strong> Mann</td>
                      <td className="border border-gray-300 p-2">die gut<strong>e</strong> Frau</td>
                      <td className="border border-gray-300 p-2">das gut<strong>e</strong> Kind</td>
                      <td className="border border-gray-300 p-2">die gut<strong>en</strong> Leute</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Datif</td>
                      <td className="border border-gray-300 p-2">dem gut<strong>en</strong> Mann</td>
                      <td className="border border-gray-300 p-2">der gut<strong>en</strong> Frau</td>
                      <td className="border border-gray-300 p-2">dem gut<strong>en</strong> Kind</td>
                      <td className="border border-gray-300 p-2">den gut<strong>en</strong> Leuten</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Génitif</td>
                      <td className="border border-gray-300 p-2">des gut<strong>en</strong> Mannes</td>
                      <td className="border border-gray-300 p-2">der gut<strong>en</strong> Frau</td>
                      <td className="border border-gray-300 p-2">des gut<strong>en</strong> Kindes</td>
                      <td className="border border-gray-300 p-2">der gut<strong>en</strong> Leute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">💡 Règle simple</h4>
                <p className="text-green-700">
                  Déclinaison faible = <strong>-e</strong> au nominatif singulier, <strong>-en</strong> partout ailleurs !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Déclinaison forte */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <AlertCircle className="h-6 w-6" />
              3. Déclinaison forte (sans article)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Utilisée quand il n'y a pas d'article ou après des mots invariables (viel, wenig, etc.).
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Cas</th>
                      <th className="border border-gray-300 p-2 text-left">Masculin</th>
                      <th className="border border-gray-300 p-2 text-left">Féminin</th>
                      <th className="border border-gray-300 p-2 text-left">Neutre</th>
                      <th className="border border-gray-300 p-2 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Nominatif</td>
                      <td className="border border-gray-300 p-2">gut<strong>er</strong> Wein</td>
                      <td className="border border-gray-300 p-2">gut<strong>e</strong> Milch</td>
                      <td className="border border-gray-300 p-2">gut<strong>es</strong> Bier</td>
                      <td className="border border-gray-300 p-2">gut<strong>e</strong> Leute</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Accusatif</td>
                      <td className="border border-gray-300 p-2">gut<strong>en</strong> Wein</td>
                      <td className="border border-gray-300 p-2">gut<strong>e</strong> Milch</td>
                      <td className="border border-gray-300 p-2">gut<strong>es</strong> Bier</td>
                      <td className="border border-gray-300 p-2">gut<strong>e</strong> Leute</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Datif</td>
                      <td className="border border-gray-300 p-2">gut<strong>em</strong> Wein</td>
                      <td className="border border-gray-300 p-2">gut<strong>er</strong> Milch</td>
                      <td className="border border-gray-300 p-2">gut<strong>em</strong> Bier</td>
                      <td className="border border-gray-300 p-2">gut<strong>en</strong> Leuten</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Génitif</td>
                      <td className="border border-gray-300 p-2">gut<strong>en</strong> Weines</td>
                      <td className="border border-gray-300 p-2">gut<strong>er</strong> Milch</td>
                      <td className="border border-gray-300 p-2">gut<strong>en</strong> Bieres</td>
                      <td className="border border-gray-300 p-2">gut<strong>er</strong> Leute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">💡 Règle mnémotechnique</h4>
                <p className="text-yellow-700">
                  L'adjectif "reprend" les terminaisons de l'article défini : -er, -e, -es, -em, -en, etc.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Déclinaison mixte */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              4. Déclinaison mixte (après ein, eine, ein)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Utilisée après l'article indéfini (ein, eine, ein) et les possessifs (mein, dein, sein, etc.).
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Cas</th>
                      <th className="border border-gray-300 p-2 text-left">Masculin</th>
                      <th className="border border-gray-300 p-2 text-left">Féminin</th>
                      <th className="border border-gray-300 p-2 text-left">Neutre</th>
                      <th className="border border-gray-300 p-2 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Nominatif</td>
                      <td className="border border-gray-300 p-2">ein gut<strong>er</strong> Mann</td>
                      <td className="border border-gray-300 p-2">eine gut<strong>e</strong> Frau</td>
                      <td className="border border-gray-300 p-2">ein gut<strong>es</strong> Kind</td>
                      <td className="border border-gray-300 p-2">meine gut<strong>en</strong> Freunde</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Accusatif</td>
                      <td className="border border-gray-300 p-2">einen gut<strong>en</strong> Mann</td>
                      <td className="border border-gray-300 p-2">eine gut<strong>e</strong> Frau</td>
                      <td className="border border-gray-300 p-2">ein gut<strong>es</strong> Kind</td>
                      <td className="border border-gray-300 p-2">meine gut<strong>en</strong> Freunde</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Datif</td>
                      <td className="border border-gray-300 p-2">einem gut<strong>en</strong> Mann</td>
                      <td className="border border-gray-300 p-2">einer gut<strong>en</strong> Frau</td>
                      <td className="border border-gray-300 p-2">einem gut<strong>en</strong> Kind</td>
                      <td className="border border-gray-300 p-2">meinen gut<strong>en</strong> Freunden</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Génitif</td>
                      <td className="border border-gray-300 p-2">eines gut<strong>en</strong> Mannes</td>
                      <td className="border border-gray-300 p-2">einer gut<strong>en</strong> Frau</td>
                      <td className="border border-gray-300 p-2">eines gut<strong>en</strong> Kindes</td>
                      <td className="border border-gray-300 p-2">meiner gut<strong>en</strong> Freunde</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">💡 Règle simple</h4>
                <p className="text-red-700">
                  Déclinaison mixte = <strong>forte</strong> au nominatif/accusatif singulier (masculin/neutre), <strong>faible</strong> partout ailleurs !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cas particuliers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              5. Cas particuliers importants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Adjectifs substantivés</h4>
                <p className="text-blue-700 mb-2">
                  Les adjectifs utilisés comme noms se déclinent aussi !
                </p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• der <strong>Deutsche</strong> (l'Allemand) → den <strong>Deutschen</strong></li>
                  <li>• ein <strong>Deutscher</strong> (un Allemand) → einen <strong>Deutschen</strong></li>
                  <li>• das <strong>Gute</strong> (le bien) → dem <strong>Guten</strong></li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Plusieurs adjectifs</h4>
                <p className="text-green-700 mb-2">
                  Quand plusieurs adjectifs se suivent, ils prennent tous la même terminaison.
                </p>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• ein <strong>großer roter</strong> Ball</li>
                  <li>• mit <strong>gutem französischem</strong> Wein</li>
                  <li>• die <strong>alten deutschen</strong> Städte</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Adjectifs invariables</h4>
                <p className="text-yellow-700 mb-2">
                  Certains adjectifs ne se déclinent jamais :
                </p>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• Couleurs en -a : <strong>rosa</strong>, <strong>lila</strong></li>
                  <li>• Adjectifs de ville : <strong>Berliner</strong> Luft</li>
                  <li>• Participes courts : ein <strong>super</strong> Film</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Méthode d'apprentissage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <AlertCircle className="h-6 w-6" />
              6. Méthode d'apprentissage efficace
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Stratégie en 4 étapes :</h4>
                <ol className="list-decimal list-inside text-purple-700 space-y-2">
                  <li><strong>Identifier le nom</strong> (genre, nombre)</li>
                  <li><strong>Déterminer le cas</strong> (fonction dans la phrase)</li>
                  <li><strong>Repérer l'article</strong> (défini, indéfini, absence)</li>
                  <li><strong>Choisir la déclinaison</strong> (faible, forte, mixte)</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Conseils pratiques</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Apprendre par coeur les tableaux</li>
                    <li>• S'entraîner avec des phrases courtes</li>
                    <li>• Repérer les schémas récurrents</li>
                    <li>• Utiliser des couleurs pour mémoriser</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Erreurs courantes</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Confondre les trois déclinaisons</li>
                    <li>• Oublier l'accord en genre/nombre</li>
                    <li>• Négliger le cas du nom</li>
                    <li>• Mal identifier l'article</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📝 Exercice type</h4>
                <p className="text-sm text-muted-foreground">
                  <em>"Je vois un bon film allemand."</em><br />
                  → Ich sehe einen <strong>gut___</strong> <strong>deutsch___</strong> Film.<br />
                  → Film (masc., acc., avec "einen") → déclinaison mixte<br />
                  → Ich sehe einen <strong>guten</strong> <strong>deutschen</strong> Film.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tableau récapitulatif */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">📋 Tableau récapitulatif des terminaisons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Type</th>
                    <th className="border border-gray-300 p-2">Contexte</th>
                    <th className="border border-gray-300 p-2">Terminaisons principales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold text-green-700">Faible</td>
                    <td className="border border-gray-300 p-2">der, die, das</td>
                    <td className="border border-gray-300 p-2"><strong>-e</strong> (nom. sing.), <strong>-en</strong> (autres)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold text-yellow-700">Forte</td>
                    <td className="border border-gray-300 p-2">sans article</td>
                    <td className="border border-gray-300 p-2"><strong>-er, -e, -es, -em, -en</strong> (comme l'article)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold text-red-700">Mixte</td>
                    <td className="border border-gray-300 p-2">ein, mein, kein</td>
                    <td className="border border-gray-300 p-2">Forte si article = Ø, sinon faible</td>
                  </tr>
                </tbody>
              </table>
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

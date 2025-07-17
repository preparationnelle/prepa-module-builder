
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { List, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AllemandRecurrentsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Link to="/formation/allemand">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la formation allemand
        </Button>
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-amber-600 text-white">
            <List className="h-8 w-8" />
          </div>
          Points de Grammaire Récurrents
        </h1>
        <p className="text-xl text-muted-foreground">
          Règles de grammaire allemande récurrentes à maîtriser
        </p>
        <Badge className="mt-4 bg-amber-600">Liste Complète</Badge>
      </div>

      <div className="space-y-6">
        {/* Points 1-5 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800">Construction des phrases & Verbes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-3">1. CONSTRUCTION DES SUBORDONNÉES</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Règle principale :</strong> Le verbe conjugué se place en dernière position.</p>
                  <div className="space-y-1">
                    <p className="font-mono">dass (que) : Ich weiß, dass er kommt.</p>
                    <p className="font-mono">weil/da (parce que) : Da ich Zeit habe, komme ich.</p>
                    <p className="font-mono">wenn (si/quand) : Wenn du kommst, freue ich mich.</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded text-xs">
                    <p><strong>Erreurs :</strong></p>
                    <p>❌ Weil er kommt morgen → ✅ Weil er morgen kommt</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-3">2. PLACE DU VERBE (INVERSION)</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Règle :</strong> Quand un complément ouvre la phrase, le sujet passe après le verbe conjugué.</p>
                  <div className="space-y-1">
                    <p className="font-mono">Heute gehe ich ins Kino.</p>
                    <p className="font-mono">In Deutschland wohnen viele Ausländer.</p>
                    <p className="font-mono">Seit langem habe ich ihn nicht gesehen.</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded text-xs">
                    <p>❌ Heute ich gehe → ✅ Heute gehe ich</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-3">3. DÉCLINAISONS (CAS)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Déclinaisons des articles</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="border border-gray-300 p-1">Cas</th>
                          <th className="border border-gray-300 p-1">Masc.</th>
                          <th className="border border-gray-300 p-1">Neutre</th>
                          <th className="border border-gray-300 p-1">Fém.</th>
                          <th className="border border-gray-300 p-1">Plur.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-1 font-mono">Nom.</td>
                          <td className="border border-gray-300 p-1 font-mono">der/ein</td>
                          <td className="border border-gray-300 p-1 font-mono">das/ein</td>
                          <td className="border border-gray-300 p-1 font-mono">die/eine</td>
                          <td className="border border-gray-300 p-1 font-mono">die/-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-1 font-mono">Acc.</td>
                          <td className="border border-gray-300 p-1 font-mono bg-yellow-200">den/einen</td>
                          <td className="border border-gray-300 p-1 font-mono">das/ein</td>
                          <td className="border border-gray-300 p-1 font-mono">die/eine</td>
                          <td className="border border-gray-300 p-1 font-mono">die/-</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-1 font-mono">Dat.</td>
                          <td className="border border-gray-300 p-1 font-mono bg-yellow-200">dem/einem</td>
                          <td className="border border-gray-300 p-1 font-mono bg-yellow-200">dem/einem</td>
                          <td className="border border-gray-300 p-1 font-mono bg-yellow-200">der/einer</td>
                          <td className="border border-gray-300 p-1 font-mono bg-yellow-200">den/-n</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Verbes + Datif (fréquents)</h4>
                  <div className="space-y-1 text-sm">
                    <p className="font-mono">helfen : Ich helfe dem Mann</p>
                    <p className="font-mono">danken : Ich danke dir</p>
                    <p className="font-mono">gefallen : Das gefällt mir</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Points 6-12 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800">Prépositions & Temps verbaux</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">4. PRÉPOSITIONS ET CAS</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">+ Accusatif</p>
                    <p className="font-mono text-xs">für, gegen, ohne, um, durch</p>
                  </div>
                  <div>
                    <p className="font-medium">+ Datif</p>
                    <p className="font-mono text-xs">aus, bei, mit, nach, seit, von, zu</p>
                  </div>
                  <div>
                    <p className="font-medium">Mixtes (Acc./Dat.)</p>
                    <p className="font-mono text-xs">an, auf, in, über, unter...</p>
                    <p className="text-xs">Mouvement → Acc. / Position → Dat.</p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-800 mb-3">5. TEMPS VERBAUX</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Parfait vs Prétérit</p>
                    <p className="text-xs">Parfait (oral) : haben/sein + Part. II</p>
                    <p className="text-xs">Prétérit (écrit, récit)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-xs">Ich habe gearbeitet</p>
                    <p className="font-mono text-xs">Er war jung</p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                <h3 className="font-semibold text-pink-800 mb-3">6. INFINITIVES AVEC "ZU"</h3>
                <div className="space-y-2 text-sm">
                  <div className="space-y-1">
                    <p className="font-mono text-xs">versuchen zu : Ich versuche zu schlafen</p>
                    <p className="font-mono text-xs">um... zu : Ich komme, um zu helfen</p>
                    <p className="font-mono text-xs">ohne... zu : Er ging, ohne zu grüßen</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded text-xs">
                    <p><strong>Attention :</strong> Pas de zu avec les modaux !</p>
                    <p>✅ Ich kann schwimmen</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Points 13-20 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800">Structures avancées</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-3">13. VOIX PASSIVE</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Passif d'action (Vorgangspassiv)</p>
                    <p className="font-mono text-xs">werden + participe passé</p>
                    <p className="font-mono text-xs">Das Buch wird gelesen</p>
                  </div>
                  <div>
                    <p className="font-medium">Passif d'état (Zustandspassiv)</p>
                    <p className="font-mono text-xs">sein + participe passé</p>
                    <p className="font-mono text-xs">Die Tür ist geöffnet</p>
                  </div>
                  <div>
                    <p className="font-medium">Complément d'agent :</p>
                    <p className="font-mono text-xs">von + datif (agent) / durch + acc. (moyen)</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-3">14. ADJECTIFS ÉPITHÈTES</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Déclinaison selon l'article :</p>
                    <p className="text-xs">• Forte (sans article) : guter Mann</p>
                    <p className="text-xs">• Faible (avec der/die/das) : der gute Mann</p>
                    <p className="text-xs">• Mixte (avec ein/mein) : ein guter Mann</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">CONSTRUCTIONS IDIOMATIQUES RÉCURRENTES</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Constructions avec es</p>
                  <div className="space-y-1 text-xs">
                    <p className="font-mono">Es fällt mir schwer zu...</p>
                    <p className="font-mono">Es geht um...</p>
                    <p className="font-mono">Es handelt sich um...</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Constructions avec datif</p>
                  <div className="space-y-1 text-xs">
                    <p className="font-mono">Das gefällt mir sehr</p>
                    <p className="font-mono">Das passiert mir oft</p>
                    <p className="font-mono">Es tut mir leid</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Conjonctions doubles</p>
                  <div className="space-y-1 text-xs">
                    <p className="font-mono">nicht nur... sondern auch</p>
                    <p className="font-mono">entweder... oder</p>
                    <p className="font-mono">weder... noch</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs fréquentes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">ERREURS FRÉQUENTES À ÉVITER</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Erreurs de structure</h4>
                  <ul className="space-y-1 text-red-700">
                    <li>❌ Oubli de l'inversion après complément initial</li>
                    <li>❌ Verbe mal placé en subordonnée</li>
                    <li>❌ Particules séparables mal placées</li>
                    <li>❌ Ordre des mots dans les constructions complexes</li>
                    <li>❌ Double infinitif mal construit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Erreurs de cas et négation</h4>
                  <ul className="space-y-1 text-red-700">
                    <li>❌ Mauvais cas après prépositions ou verbes</li>
                    <li>❌ Négation (nicht vs kein)</li>
                    <li>❌ Pronoms relatifs mal déclinés</li>
                    <li>❌ Déclinaison des adjectifs épithètes</li>
                    <li>❌ Régimes verbaux (prépositions fixes)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded border border-red-300">
                <h4 className="font-semibold text-red-800 mb-2">Points cruciaux à retenir :</h4>
                <div className="grid md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="font-medium">Subordonnées :</p>
                    <p>Verbe conjugué en fin</p>
                  </div>
                  <div>
                    <p className="font-medium">Inversion :</p>
                    <p>Complément + verbe + sujet</p>
                  </div>
                  <div>
                    <p className="font-medium">Déclinaisons :</p>
                    <p>Masc. acc. = -en, Dat. plur. = -n</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Note finale */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <div className="flex items-start gap-3">
            <List className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Mémorisation efficace</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Cette liste couvre les 26 points grammaticaux les plus récurrents en allemand. 
                Pour une mémorisation efficace, concentrez-vous sur 2-3 points par semaine et pratiquez-les 
                régulièrement avec des exercices concrets. La régularité prime sur l'intensité !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllemandRecurrentsPage;

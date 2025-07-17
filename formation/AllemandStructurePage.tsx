
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AllemandStructurePage = () => {
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
          <div className="p-3 rounded-lg bg-indigo-600 text-white">
            <FileText className="h-8 w-8" />
          </div>
          Structure de la Phrase Allemande
        </h1>
        <p className="text-xl text-muted-foreground">
          Maîtrisez les règles fondamentales de l'ordre des mots en allemand
        </p>
        <Badge className="mt-4 bg-indigo-600">Guide Complet</Badge>
      </div>

      <div className="space-y-8">
        {/* Vue d'ensemble */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-800">Vue d'Ensemble : Les Trois Positions du Verbe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Position</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Contexte</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium text-red-700">1ère</td>
                    <td className="border border-gray-300 p-3">Questions fermées, Impératif</td>
                    <td className="border border-gray-300 p-3 font-mono">Kommst du mit?</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium text-blue-700">2ème</td>
                    <td className="border border-gray-300 p-3">Phrases déclaratives, Questions ouvertes</td>
                    <td className="border border-gray-300 p-3 font-mono">Ich komme morgen mit.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium text-green-700">Dernière</td>
                    <td className="border border-gray-300 p-3">Propositions subordonnées</td>
                    <td className="border border-gray-300 p-3 font-mono">Ich weiß, dass du mitkommst.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Position 1 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">Position 1 : Verbe en Première Position</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Questions fermées */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">Questions fermées (Ja/Nein-Fragen)</h3>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                <p className="font-mono text-red-800 mb-2">Structure : VERBE + SUJET + AUTRES ÉLÉMENTS + ?</p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-sm">• Studierst du Medizin an der Universität?</p>
                <p className="font-mono text-sm">• Haben Sie schon einmal Deutschland besucht?</p>
                <p className="font-mono text-sm">• Wird das Konzert heute Abend stattfinden?</p>
              </div>
            </div>

            {/* Mode impératif */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">Mode impératif</h3>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                <p className="font-mono text-red-800 mb-2">Structure : VERBE + COMPLÉMENTS + !</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Forme de politesse :</h4>
                  <div className="space-y-1 text-sm">
                    <p className="font-mono">• Kommen Sie bitte in mein Büro!</p>
                    <p className="font-mono">• Helfen Sie mir mit diesem Problem!</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Forme familière :</h4>
                  <div className="space-y-1 text-sm">
                    <p className="font-mono">• Mach deine Aufgaben sofort!</p>
                    <p className="font-mono">• Erzähl mir von deinem Wochenende!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conditionnelles sans wenn */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">Conditionnelles sans "wenn" (Style soutenu)</h3>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                <p className="font-mono text-red-800 mb-2">Structure : VERBE (Subjonctif) + SUJET + AUTRES + , + CONSÉQUENCE</p>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono text-sm mb-1">Wenn du fleißig lernst, wirst du Erfolg haben.</p>
                  <p className="text-center text-gray-500 text-sm">→</p>
                  <p className="font-mono text-sm text-green-600">Lernst du fleißig, wirst du Erfolg haben.</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono text-sm mb-1">Wenn ich reich wäre, würde ich um die Welt reisen.</p>
                  <p className="text-center text-gray-500 text-sm">→</p>
                  <p className="font-mono text-sm text-green-600">Wäre ich reich, würde ich um die Welt reisen.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Position 2 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">Position 2 : Verbe en Deuxième Position</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Phrases déclaratives */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Phrases déclaratives</h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                <p className="font-mono text-blue-800 mb-2">Structure : ÉLÉMENT 1 + VERBE + SUJET + AUTRES + PARTIE VERBALE NON CONJUGUÉE</p>
              </div>
              
              <h4 className="font-medium mb-3">Mécanisme de la "klammer" (parenthèse verbale) :</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-2">Élément 1</th>
                      <th className="border border-gray-300 p-2">Verbe conjugué</th>
                      <th className="border border-gray-300 p-2">Mittelfeld (champ médian)</th>
                      <th className="border border-gray-300 p-2">Fin verbale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-mono">Ich</td>
                      <td className="border border-gray-300 p-2 font-mono">habe</td>
                      <td className="border border-gray-300 p-2 font-mono">gestern meinem Bruder</td>
                      <td className="border border-gray-300 p-2 font-mono bg-yellow-200">geholfen</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-mono">Gestern</td>
                      <td className="border border-gray-300 p-2 font-mono">habe</td>
                      <td className="border border-gray-300 p-2 font-mono">ich meinem Bruder</td>
                      <td className="border border-gray-300 p-2 font-mono bg-yellow-200">geholfen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-mono">Meinem Bruder</td>
                      <td className="border border-gray-300 p-2 font-mono">habe</td>
                      <td className="border border-gray-300 p-2 font-mono">ich gestern</td>
                      <td className="border border-gray-300 p-2 font-mono bg-yellow-200">geholfen</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Questions ouvertes */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Questions ouvertes (W-Fragen)</h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                <p className="font-mono text-blue-800 mb-2">Structure : MOT INTERROGATIF + VERBE + SUJET + AUTRES + ?</p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-sm">• <span className="bg-yellow-200">Warum</span> gehst du nicht zur Schule?</p>
                <p className="font-mono text-sm">• <span className="bg-yellow-200">Wessen</span> Auto steht vor unserem Haus?</p>
                <p className="font-mono text-sm">• <span className="bg-yellow-200">Womit</span> beschäftigt sich dein Vater beruflich?</p>
              </div>
            </div>

            {/* Éléments verbaux non conjugués */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Éléments verbaux non conjugués en fin de phrase</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-3 text-left">Type</th>
                      <th className="border border-gray-300 p-3 text-left">Exemple</th>
                      <th className="border border-gray-300 p-3 text-left">Élément final</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Participe passé</td>
                      <td className="border border-gray-300 p-3 font-mono">Er hat das Buch gelesen</td>
                      <td className="border border-gray-300 p-3 font-mono bg-yellow-200">gelesen</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Infinitif</td>
                      <td className="border border-gray-300 p-3 font-mono">Wir wollen morgen schwimmen</td>
                      <td className="border border-gray-300 p-3 font-mono bg-yellow-200">schwimmen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Particule séparable</td>
                      <td className="border border-gray-300 p-3 font-mono">Sie macht das Fenster auf</td>
                      <td className="border border-gray-300 p-3 font-mono bg-yellow-200">auf</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Prédicat nominal</td>
                      <td className="border border-gray-300 p-3 font-mono">Er wird Arzt</td>
                      <td className="border border-gray-300 p-3 font-mono bg-yellow-200">Arzt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Position finale */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">Position Finale : Verbe en Dernière Position</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Propositions subordonnées</h3>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                <p className="font-mono text-green-800 mb-2">Structure : CONJONCTION + SUJET + COMPLÉMENTS + VERBE CONJUGUÉ</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-green-50">
                      <th className="border border-gray-300 p-3 text-left">Conjonction</th>
                      <th className="border border-gray-300 p-3 text-left">Sens</th>
                      <th className="border border-gray-300 p-3 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-mono">dass</td>
                      <td className="border border-gray-300 p-3">que</td>
                      <td className="border border-gray-300 p-3 font-mono">Ich denke, dass er heute <span className="bg-yellow-200">kommt</span>.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-mono">weil</td>
                      <td className="border border-gray-300 p-3">parce que</td>
                      <td className="border border-gray-300 p-3 font-mono">Er bleibt zu Hause, weil er krank <span className="bg-yellow-200">ist</span>.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-mono">obwohl</td>
                      <td className="border border-gray-300 p-3">bien que</td>
                      <td className="border border-gray-300 p-3 font-mono">Sie arbeitet, obwohl sie müde <span className="bg-yellow-200">ist</span>.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-mono">damit</td>
                      <td className="border border-gray-300 p-3">pour que</td>
                      <td className="border border-gray-300 p-3 font-mono">Ich rufe an, damit du Bescheid <span className="bg-yellow-200">weißt</span>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cas particuliers */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Cas particuliers dans les subordonnées</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">Double infinitif :</h4>
                  <p className="font-mono text-sm">...dass er hat kommen wollen. (et non : *dass er kommen wollen hat*)</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-medium text-orange-800 mb-2">Comparatifs :</h4>
                  <p className="font-mono text-sm">...dass sie größer ist als ich dachte. (verbe avant "als")</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-800 mb-2">Constructions avec "oder nicht" :</h4>
                  <p className="font-mono text-sm">...ob er kommt oder nicht. (verbe avant "oder nicht")</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ordre des éléments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-800">Ordre des Éléments : Principes Fondamentaux</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Principe 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Principe 1 : Mise en relief par la position initiale</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-indigo-50">
                      <th className="border border-gray-300 p-3 text-left">Élément initial</th>
                      <th className="border border-gray-300 p-3 text-left">Effet</th>
                      <th className="border border-gray-300 p-3 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Sujet</td>
                      <td className="border border-gray-300 p-3">Neutre</td>
                      <td className="border border-gray-300 p-3 font-mono">Der Student lernt fleißig.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Temps</td>
                      <td className="border border-gray-300 p-3">Cadre temporel</td>
                      <td className="border border-gray-300 p-3 font-mono">Heute lernt der Student fleißig.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">COD</td>
                      <td className="border border-gray-300 p-3">Emphase sur l'objet</td>
                      <td className="border border-gray-300 p-3 font-mono">Diese Sprache lernt der Student fleißig.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Manière</td>
                      <td className="border border-gray-300 p-3">Emphase sur la méthode</td>
                      <td className="border border-gray-300 p-3 font-mono">Fleißig lernt der Student diese Sprache.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Principe 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Principe 2 : Position du sujet après inversion</h3>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-4">
                <p className="text-indigo-800 mb-2"><strong>Règle :</strong> Quand un autre élément que le sujet occupe la première position, le sujet suit immédiatement le verbe.</p>
                <p className="font-mono text-indigo-800">Schéma : AUTRE ÉLÉMENT + VERBE + SUJET + RESTE</p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-sm">• Ich schreibe jeden Tag in mein Tagebuch. (ordre normal)</p>
                <p className="font-mono text-sm">• <span className="bg-yellow-200">Jeden Tag</span> schreibe <span className="bg-green-200">ich</span> in mein Tagebuch. (emphase temporelle)</p>
                <p className="font-mono text-sm">• <span className="bg-yellow-200">In mein Tagebuch</span> schreibe <span className="bg-green-200">ich</span> jeden Tag. (emphase sur l'objet)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Synthèse */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-800">Synthèse : Mécanismes Clés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-4">Les trois règles d'or</h4>
              <div className="space-y-3 text-indigo-700">
                <p><strong>1.</strong> Position du verbe = Type de phrase (déclarative, interrogative, subordonnée)</p>
                <p><strong>2.</strong> Première position = Mise en relief (emphase communicative)</p>
                <p><strong>3.</strong> Fin de phrase = Information centrale (noyau sémantique)</p>
              </div>
              
              <h4 className="font-semibold text-red-800 mb-4 mt-6">Erreurs fréquentes à éviter</h4>
              <div className="space-y-2 text-red-700 text-sm">
                <p>❌ Verbe conjugué mal placé dans les subordonnées</p>
                <p>❌ Séparation du noyau verbal par "nicht"</p>
                <p>❌ Virgules françaises dans les compléments circonstanciels</p>
                <p>❌ Mauvais ordre des pronoms personnels</p>
              </div>

              <h4 className="font-semibold text-green-800 mb-4 mt-6">Stratégies de mémorisation</h4>
              <div className="space-y-2 text-green-700 text-sm">
                <p>• Visualiser la "klammer" (parenthèse verbale)</p>
                <p>• Mémoriser T-L-M pour les circonstanciels</p>
                <p>• Pratiquer les transformations (normale → emphase)</p>
                <p>• Analyser le noyau verbal dans chaque phrase</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AllemandStructurePage;

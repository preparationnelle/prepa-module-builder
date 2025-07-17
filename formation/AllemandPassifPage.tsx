
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AllemandPassifPage = () => {
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
          <div className="p-3 rounded-lg bg-red-600 text-white">
            <FileText className="h-8 w-8" />
          </div>
          Le Passif en Allemand
        </h1>
        <p className="text-xl text-muted-foreground">
          Version enrichie, inspirée du « prompt modèle », corrigé inclus
        </p>
        <Badge className="mt-4 bg-red-600">Fiche de Grammaire</Badge>
      </div>

      <div className="space-y-8">
        {/* Section 1: Quand l'utiliser */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">1. Quand l'utiliser ?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-700">
              Le passif sert à mettre l'objet ou l'action au premier plan ; l'agent est secondaire, parfois absent.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-red-50">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Passif</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Construction</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Sens principal</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Fréquence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium text-blue-700">Action (Vorgangspassiv)</td>
                    <td className="border border-gray-300 p-3 font-mono">werden + Part. II</td>
                    <td className="border border-gray-300 p-3">L'action se déroule</td>
                    <td className="border border-gray-300 p-3 text-green-600">Très courant</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium text-purple-700">État (Zustandspassiv)</td>
                    <td className="border border-gray-300 p-3 font-mono">sein + Part. II</td>
                    <td className="border border-gray-300 p-3">Le résultat est atteint</td>
                    <td className="border border-gray-300 p-3 text-orange-600">Moins courant, impossible aux temps composés du passé</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium text-indigo-700">Modal-passif</td>
                    <td className="border border-gray-300 p-3 font-mono">Modal + Part. II + werden</td>
                    <td className="border border-gray-300 p-3">Ce qui doit/peut/devrait se faire</td>
                    <td className="border border-gray-300 p-3 text-green-600">Très fréquent à l'écrit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 p-4 rounded-lg mt-6 border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Vue d'ensemble rapide :</h4>
              <ul className="text-red-700 space-y-1">
                <li>• <span className="font-mono bg-white px-1">werden</span> = work in progress.</li>
                <li>• <span className="font-mono bg-white px-1">sein</span> = statut acquis.</li>
                <li>• <span className="font-mono bg-white px-1">Modal</span> = possibilité / nécessité de l'action.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Tableaux récapitulatifs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">2. Tableaux récapitulatifs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* 2a. Vorgangspassiv */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">2a. Vorgangspassiv (action) — modèle das Haus</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-3 text-left">Temps / Mode</th>
                      <th className="border border-gray-300 p-3 text-left">Forme à la 3ᵉ p. sg.</th>
                      <th className="border border-gray-300 p-3 text-left">Traduction possible</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Présent</td>
                      <td className="border border-gray-300 p-3 font-mono">Das Haus wird gebaut.</td>
                      <td className="border border-gray-300 p-3">La maison est en train d'être construite / on construit la maison.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Prétérit</td>
                      <td className="border border-gray-300 p-3 font-mono">Das Haus wurde gebaut.</td>
                      <td className="border border-gray-300 p-3">La maison fut / était construite.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Parfait</td>
                      <td className="border border-gray-300 p-3 font-mono">Das Haus ist gebaut <span className="bg-yellow-200">worden</span>.</td>
                      <td className="border border-gray-300 p-3">La maison a été construite.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Plus-que-parfait</td>
                      <td className="border border-gray-300 p-3 font-mono">Das Haus war gebaut <span className="bg-yellow-200">worden</span>.</td>
                      <td className="border border-gray-300 p-3">La maison avait été construite.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Futur I</td>
                      <td className="border border-gray-300 p-3 font-mono">Das Haus wird gebaut werden.</td>
                      <td className="border border-gray-300 p-3">La maison sera construite.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Infinitif présent</td>
                      <td className="border border-gray-300 p-3 font-mono">gebaut werden</td>
                      <td className="border border-gray-300 p-3">être construit(e)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Infinitif passé</td>
                      <td className="border border-gray-300 p-3 font-mono">gebaut worden sein</td>
                      <td className="border border-gray-300 p-3">avoir été construit(e)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
                <p className="text-blue-800 font-medium">Notice style :</p>
                <p className="text-blue-700 text-sm">au participe II de werden on écrit <span className="font-mono bg-yellow-200 px-1">worden</span> (sans ge-) après un autre participe II pour alléger : <span className="font-mono">ist gebaut worden</span>.</p>
              </div>
            </div>

            {/* 2b. Zustandspassiv */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">2b. Zustandspassiv (état) — même modèle</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-purple-50">
                      <th className="border border-gray-300 p-3 text-left">Temps</th>
                      <th className="border border-gray-300 p-3 text-left">Forme</th>
                      <th className="border border-gray-300 p-3 text-left">Idée</th>
                      <th className="border border-gray-300 p-3 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Présent</td>
                      <td className="border border-gray-300 p-3 font-mono">ist gebaut</td>
                      <td className="border border-gray-300 p-3">état actuel</td>
                      <td className="border border-gray-300 p-3 font-mono">Das Haus ist gebaut.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Prétérit</td>
                      <td className="border border-gray-300 p-3 font-mono">war gebaut</td>
                      <td className="border border-gray-300 p-3">état passé</td>
                      <td className="border border-gray-300 p-3 font-mono">Das Haus war gebaut.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Futur</td>
                      <td className="border border-gray-300 p-3 font-mono">wird gebaut sein</td>
                      <td className="border border-gray-300 p-3">état futur</td>
                      <td className="border border-gray-300 p-3 font-mono">Das Haus wird gebaut sein.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-purple-600 text-sm mt-2">(Pas de parfait / plus-que-parfait.)</p>
            </div>

            {/* 2c. Passif avec modal */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">2c. Passif avec modal</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-indigo-50">
                      <th className="border border-gray-300 p-3 text-left">Modal</th>
                      <th className="border border-gray-300 p-3 text-left">Forme</th>
                      <th className="border border-gray-300 p-3 text-left">Sens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">dürfen</td>
                      <td className="border border-gray-300 p-3 font-mono">Hier darf geraucht werden.</td>
                      <td className="border border-gray-300 p-3">Ici, il est permis de fumer.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">müssen</td>
                      <td className="border border-gray-300 p-3 font-mono">Der Antrag muss bearbeitet werden.</td>
                      <td className="border border-gray-300 p-3">La demande doit être traitée.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">wollen</td>
                      <td className="border border-gray-300 p-3 font-mono">Die Jugend will verstanden werden.</td>
                      <td className="border border-gray-300 p-3">La jeunesse veut être comprise.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Gérer l'agent ou le moyen */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">3. Gérer l'agent ou le moyen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-red-50">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Fonction</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Préposition</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Agent (humain ou personnifié)</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">von + Dat.</td>
                    <td className="border border-gray-300 p-3 font-mono">Der Text wird von den Studenten übersetzt.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Moyen / cause</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">durch + Acc.</td>
                    <td className="border border-gray-300 p-3 font-mono">Die Meldung wurde durch die Medien verbreitet.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-red-100 p-4 rounded-lg mt-4 border border-red-300">
              <p className="text-red-800 font-medium">⚠️ Jamais <span className="font-mono bg-white px-1">bei</span> ! (faux calque de l'anglais by).</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Règles clés & astuces */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">4. Règles clés & astuces</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Passif impersonnel :</h4>
              <p className="text-yellow-700 text-sm mb-2">verbe sans COD accusatif → sujet es factice :</p>
              <p className="font-mono text-sm">Es wurde viel gelacht. → « On a beaucoup ri. »</p>
              <p className="font-mono text-sm">es disparaît en subordonnée : ... dass viel gelacht wurde.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Choisir entre état et action :</h4>
              <p className="text-green-700 text-sm">si vous pouvez ajouter « déjà » en français → <span className="font-mono bg-white px-1">sein</span>.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Participe II sans ge- :</h4>
              <p className="text-blue-700 text-sm">verbes en -ieren (installieren → installiert) et verbes à préverbe inséparable (verkaufen → verkauft).</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Subjonctif I (discours indirect) :</h4>
                <p className="font-mono text-sm">Er sagte, das Haus werde gebaut.</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-2">Subjonctif II (irréel) :</h4>
                <p className="font-mono text-sm">Wenn Hilfe da wäre, würde das Problem schneller gelöst.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Exercices */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">5. Exercices d'application (corrigé immédiat)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Exercice A */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">A. Transformer à la voix passive-action</h3>
              <div className="space-y-3">
                {[
                  { num: 1, actif: "Man öffnet das Fenster.", passif: "Das Fenster wird geöffnet." },
                  { num: 2, actif: "Die Lehrer korrigierten die Klausuren.", passif: "Die Klausuren wurden korrigiert." },
                  { num: 3, actif: "Jemand hat den Fehler entdeckt.", passif: "Der Fehler ist entdeckt worden." },
                  { num: 4, actif: "Die Polizei wird den Verdächtigen verhaften.", passif: "Der Verdächtige wird verhaftet werden." }
                ].map((item) => (
                  <div key={item.num} className="bg-gray-50 p-4 rounded">
                    <p className="text-sm mb-2 font-mono"><strong>{item.num}. Phrase active :</strong> {item.actif}</p>
                    <p className="text-sm font-mono text-green-600"><strong>Corrigé :</strong> {item.passif}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercice B */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">B. Choisir werden ou sein</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm mb-3"><strong>Complétez :</strong></p>
                <p className="text-sm mb-1">1. Die Tür ___ geschlossen (résultat visible).</p>
                <p className="text-sm mb-3">2. Die Tür ___ gerade geschlossen (action).</p>
                <p className="text-sm text-green-600 font-mono"><strong>Solution :</strong></p>
                <p className="text-sm text-green-600 font-mono">1. ist 2. wird</p>
              </div>
            </div>

            {/* Exercice C */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">C. Modal + passif</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm mb-3"><strong>Traduisez :</strong> « Ces documents doivent être archivés immédiatement. »</p>
                <p className="text-sm text-green-600 font-mono"><strong>Solution :</strong></p>
                <p className="text-sm text-green-600 font-mono">Diese Dokumente müssen sofort archiviert werden.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Verdict */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">6. Verdict</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
              <div className="space-y-3 text-red-700">
                <p>• <span className="font-mono bg-white px-1">werden + Part. II</span> : action en cours ou prévue.</p>
                <p>• <span className="font-mono bg-white px-1">sein + Part. II</span> : état obtenu.</p>
                <p>• <span className="font-mono bg-white px-1">Modal + Part. II + werden</span> : obligation/possibilité au passif.</p>
                <p>• Agent → <span className="font-mono bg-white px-1">von</span>, moyen → <span className="font-mono bg-white px-1">durch</span>.</p>
                <p>• Maîtrisez le passif impersonnel pour traduire le <em>on</em> français.</p>
              </div>
              <div className="mt-4 p-4 bg-white rounded border border-red-200">
                <p className="text-red-800 font-medium mb-2">Entraînement rapide :</p>
                <p className="text-red-700 text-sm">
                  prenez 5 phrases actives de vos notes, convertissez-les en passif-action, puis dites-les à voix haute 
                  en ajoutant l'agent (von...) ou en l'omettant. Votre automatisme passera au niveau supérieur !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AllemandPassifPage;

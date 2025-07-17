
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AllemandDeclinaisonsPage = () => {
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
          <div className="p-3 rounded-lg bg-blue-600 text-white">
            <FileText className="h-8 w-8" />
          </div>
          Les Déclinaisons de l'Adjectif en Allemand
        </h1>
        <p className="text-xl text-muted-foreground">
          Version remaniée, ré-expliquée et 100% reformulée
        </p>
        <Badge className="mt-4 bg-blue-600">Fiche de Grammaire</Badge>
      </div>

      <div className="space-y-8">
        {/* Section 1: Types de déclinaison */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">1. Trois types de déclinaison : quand les utiliser ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Déterminant placé devant l'adjectif</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Idée clé pour choisir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium text-blue-700">Faible</td>
                    <td className="border border-gray-300 p-3">
                      Article défini <span className="font-mono bg-gray-100 px-1">der / die / das</span> ou proches : 
                      <span className="font-mono bg-gray-100 px-1 ml-1">dieser, jener, jeder, solcher, welcher</span>.<br/>
                      Au pluriel : <span className="font-mono bg-gray-100 px-1">alle, beide, sämtliche</span>
                    </td>
                    <td className="border border-gray-300 p-3">L'article porte déjà la marque du cas ; l'adjectif se contente de <span className="font-mono bg-yellow-100 px-1">-e</span> ou <span className="font-mono bg-yellow-100 px-1">-en</span>.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium text-purple-700">Mixte</td>
                    <td className="border border-gray-300 p-3">
                      Article indéfini <span className="font-mono bg-gray-100 px-1">ein/kein</span> ; adjectifs possessifs 
                      <span className="font-mono bg-gray-100 px-1 ml-1">mein, dein, sein, ihr, unser, euer, ihr</span>
                    </td>
                    <td className="border border-gray-300 p-3">Le déterminant indique le genre mais pas toujours le cas ; le premier adjectif "complète" l'information.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium text-red-700">Forte</td>
                    <td className="border border-gray-300 p-3">
                      Aucun déterminant (ou des quantifieurs comme <span className="font-mono bg-gray-100 px-1">viele, einige, ein paar</span>)
                    </td>
                    <td className="border border-gray-300 p-3">L'adjectif doit assumer seul la marque du genre et du cas.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Tableaux des terminaisons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">2. Tableaux des terminaisons</CardTitle>
            <p className="text-sm text-gray-600">
              Les exemples de noms changent pour varier : café (Kaffee m.), confiture (Marmelade f.), pain (Brot n.), boissons (Getränke pl.).
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Déclinaison faible */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">a) Déclinaison faible — der / die / das + adj. + nom</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 p-3 text-left">Cas</th>
                      <th className="border border-gray-300 p-3 text-left">Masculin</th>
                      <th className="border border-gray-300 p-3 text-left">Féminin</th>
                      <th className="border border-gray-300 p-3 text-left">Neutre</th>
                      <th className="border border-gray-300 p-3 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Nom.</td>
                      <td className="border border-gray-300 p-3 font-mono">der gut<span className="bg-yellow-200">e</span> Kaffee</td>
                      <td className="border border-gray-300 p-3 font-mono">die gut<span className="bg-yellow-200">e</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">das gut<span className="bg-yellow-200">e</span> Brot</td>
                      <td className="border border-gray-300 p-3 font-mono">die gut<span className="bg-yellow-200">en</span> Getränke</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Acc.</td>
                      <td className="border border-gray-300 p-3 font-mono">den gut<span className="bg-yellow-200">en</span> Kaffee</td>
                      <td className="border border-gray-300 p-3 font-mono">die gut<span className="bg-yellow-200">e</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">das gut<span className="bg-yellow-200">e</span> Brot</td>
                      <td className="border border-gray-300 p-3 font-mono">die gut<span className="bg-yellow-200">en</span> Getränke</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Dat.</td>
                      <td className="border border-gray-300 p-3 font-mono">dem gut<span className="bg-yellow-200">en</span> Kaffee</td>
                      <td className="border border-gray-300 p-3 font-mono">der gut<span className="bg-yellow-200">en</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">dem gut<span className="bg-yellow-200">en</span> Brot</td>
                      <td className="border border-gray-300 p-3 font-mono">den gut<span className="bg-yellow-200">en</span> Getränken</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Gén.</td>
                      <td className="border border-gray-300 p-3 font-mono">des gut<span className="bg-yellow-200">en</span> Kaffees</td>
                      <td className="border border-gray-300 p-3 font-mono">der gut<span className="bg-yellow-200">en</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">des gut<span className="bg-yellow-200">en</span> Brotes</td>
                      <td className="border border-gray-300 p-3 font-mono">der gut<span className="bg-yellow-200">en</span> Getränke</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-blue-800">À retenir :</p>
                <p className="text-blue-700">article = terminaison forte ; l'adjectif reste discret (-e/-en).</p>
              </div>
            </div>

            {/* Déclinaison mixte */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">b) Déclinaison mixte — ein/kein/possessif + adj. + nom</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-purple-50">
                      <th className="border border-gray-300 p-3 text-left">Cas</th>
                      <th className="border border-gray-300 p-3 text-left">Masculin</th>
                      <th className="border border-gray-300 p-3 text-left">Féminin</th>
                      <th className="border border-gray-300 p-3 text-left">Neutre</th>
                      <th className="border border-gray-300 p-3 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Nom.</td>
                      <td className="border border-gray-300 p-3 font-mono">ein gut<span className="bg-yellow-200">er</span> Kaffee</td>
                      <td className="border border-gray-300 p-3 font-mono">eine gut<span className="bg-yellow-200">e</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">ein gut<span className="bg-yellow-200">es</span> Brot</td>
                      <td className="border border-gray-300 p-3 font-mono">keine gut<span className="bg-yellow-200">en</span> Getränke</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Acc.</td>
                      <td className="border border-gray-300 p-3 font-mono">einen gut<span className="bg-yellow-200">en</span> Kaffee</td>
                      <td className="border border-gray-300 p-3 font-mono">eine gut<span className="bg-yellow-200">e</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">ein gut<span className="bg-yellow-200">es</span> Brot</td>
                      <td className="border border-gray-300 p-3 font-mono">keine gut<span className="bg-yellow-200">en</span> Getränke</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Dat.</td>
                      <td className="border border-gray-300 p-3 font-mono">einem gut<span className="bg-yellow-200">en</span> Kaffee</td>
                      <td className="border border-gray-300 p-3 font-mono">einer gut<span className="bg-yellow-200">en</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">einem gut<span className="bg-yellow-200">en</span> Brot</td>
                      <td className="border border-gray-300 p-3 font-mono">keinen gut<span className="bg-yellow-200">en</span> Getränken</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Gén.</td>
                      <td className="border border-gray-300 p-3 font-mono">eines gut<span className="bg-yellow-200">en</span> Kaffees</td>
                      <td className="border border-gray-300 p-3 font-mono">einer gut<span className="bg-yellow-200">en</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">eines gut<span className="bg-yellow-200">en</span> Brotes</td>
                      <td className="border border-gray-300 p-3 font-mono">keiner gut<span className="bg-yellow-200">en</span> Getränke</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-purple-800">Astuce :</p>
                <p className="text-purple-700">dès qu'un "ein-mot" n'indique pas clairement le cas (ex. : ein), l'adjectif revêt la finale qui manque.</p>
              </div>
            </div>

            {/* Déclinaison forte */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">c) Déclinaison forte — adj. + nom (aucun déterminant)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="border border-gray-300 p-3 text-left">Cas</th>
                      <th className="border border-gray-300 p-3 text-left">Masculin</th>
                      <th className="border border-gray-300 p-3 text-left">Féminin</th>
                      <th className="border border-gray-300 p-3 text-left">Neutre</th>
                      <th className="border border-gray-300 p-3 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Nom.</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">er</span> Kaffee</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">e</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">es</span> Brot</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">e</span> Getränke</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Acc.</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">en</span> Kaffee</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">e</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">es</span> Brot</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">e</span> Getränke</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Dat.</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">em</span> Kaffee</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">er</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">em</span> Brot</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">en</span> Getränken</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Gén.</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">en</span> Kaffees</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">er</span> Marmelade</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">en</span> Brotes</td>
                      <td className="border border-gray-300 p-3 font-mono">gut<span className="bg-yellow-200">er</span> Getränke</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-red-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-red-800">Multiples adjectifs :</p>
                <p className="text-red-700 font-mono">frischer süßer Bio-Kaffee</p>
                <p className="text-red-700">tous les adjectifs reçoivent la même désinence forte.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Règles et mémos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">3. Règles et mémos éclair</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">Repère du -s génitif :</h4>
                <p className="text-yellow-700 text-sm">dès que le nom masculin/neutre prend -s/es au génitif, l'adjectif adopte -en (mixte & forte) ou garde -en (faible).</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Pluriel datif :</h4>
                <p className="text-green-700 text-sm">toujours -n sur le nom s'il n'en possède pas déjà un (den guten Getränken).</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Hiérarchie visuelle</h4>
              <div className="space-y-2 text-blue-700">
                <p>• <strong>Article fort</strong> → Adjectif faible</p>
                <p>• <strong>Article "moyen"</strong> → Adjectif mixte</p>
                <p>• <strong>Pas d'article</strong> → Adjectif fort</p>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">Mémo mnémotechnique pour la forte :</h4>
              <div className="grid grid-cols-2 gap-4 text-purple-700 font-mono text-sm">
                <div>
                  <p><strong>NOM.</strong> : -er / -e / -es / -e</p>
                  <p><strong>ACC.</strong> : seul masculin change → -en</p>
                </div>
                <div>
                  <p><strong>DAT.</strong> : <em>m</em> (masc/neutre), <em>r</em> (fém), <em>n</em> (plur.)</p>
                  <p><strong>GEN.</strong> : -en / -er / -en / -er</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Exercices */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">4. Exercices conseillés (pour s'entraîner)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Transformez :</h4>
              <p className="text-sm">Ich trinke ___ (frisch, stark) Kaffee</p>
              <p className="text-sm text-green-600 font-mono">→ Ich trinke frischen starken Kaffee</p>
              <p className="text-xs text-gray-600">(forte, masculin accusatif)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Traduisez en allemand :</h4>
              <p className="text-sm">"Je n'achète pas de vieux vins."</p>
              <p className="text-sm text-green-600 font-mono">→ Ich kaufe keine alten Weine.</p>
              <p className="text-xs text-gray-600">(mixte, pluriel accusatif)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Remplissez le datif :</h4>
              <p className="text-sm">mit ___ (neu) Freunden</p>
              <p className="text-sm text-green-600 font-mono">→ mit neuen Freunden</p>
              <p className="text-xs text-gray-600">(faible, pluriel datif)</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Verdict */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">5. Verdict</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
              <p className="text-lg font-medium text-blue-800 mb-4">
                Si vous savez lire l'article, vous connaîtrez l'armure de l'adjectif :
              </p>
              <div className="space-y-2 text-blue-700">
                <p>• <strong>Article fort</strong> → adjectif léger.</p>
                <p>• <strong>Article léger</strong> → adjectif mixte.</p>
                <p>• <strong>Pas d'article</strong> → adjectif complet.</p>
              </div>
              <p className="mt-4 text-blue-600 italic">
                Entraînez-vous régulièrement : la régularité vaut mieux que les listes apprises par cœur !
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AllemandDeclinaisonsPage;

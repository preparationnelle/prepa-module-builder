
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AllemandRelativesPage = () => {
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
          <div className="p-3 rounded-lg bg-green-600 text-white">
            <FileText className="h-8 w-8" />
          </div>
          La Proposition Relative en Allemand
        </h1>
        <p className="text-xl text-muted-foreground">
          Niveau CPGE, version enrichie & corrigée
        </p>
        <Badge className="mt-4 bg-green-600">Fiche de Grammaire</Badge>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">1. Repères essentiels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Rappel</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Exemple</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Commentaire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Relatives = subordonnées</td>
                    <td className="border border-gray-300 p-3 font-mono">..., die Stadt, die ich besuche, ...</td>
                    <td className="border border-gray-300 p-3">Le verbe se place à la fin.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Ponctuation</td>
                    <td className="border border-gray-300 p-3 font-mono">Der Roman, den ich liebe, ist alt.</td>
                    <td className="border border-gray-300 p-3">Virgule avant et après la relative quand elle s'insère.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Antécédent à distance</td>
                    <td className="border border-gray-300 p-3 font-mono">Ich suche das Buch nicht, das du empfohlen hast.</td>
                    <td className="border border-gray-300 p-3">On termine la principale quand le GV serait coupé par une longue relative.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">2. Tableau des pronoms relatifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border border-gray-300 p-3 text-left">Cas \ Genre</th>
                    <th className="border border-gray-300 p-3 text-left">Masculin</th>
                    <th className="border border-gray-300 p-3 text-left">Féminin</th>
                    <th className="border border-gray-300 p-3 text-left">Neutre</th>
                    <th className="border border-gray-300 p-3 text-left">Pluriel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">N.</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">der</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">die</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">das</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">die</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">A.</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">den</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">die</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">das</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">die</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">D.</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">dem</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">der</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg">dem</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg bg-yellow-200">denen</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">G.</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg bg-yellow-200">dessen</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg bg-yellow-200">deren</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg bg-yellow-200">dessen</td>
                    <td className="border border-gray-300 p-3 font-mono text-lg bg-yellow-200">deren</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
              <p className="text-green-800 font-medium">À retenir :</p>
              <p className="text-green-700">Identiques à l'article défini der/die/das – sauf datif pluriel (denen) et génitif (dessen/deren).</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">3. Choisir le bon pronom</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Genre = celui de l'antécédent</h4>
                <p className="text-blue-700 font-mono text-sm">das Haus, das ich kaufe</p>
                <p className="text-blue-600 text-xs">(neutre → das)</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Cas = fonction dans la relative</h4>
                <p className="text-purple-700 text-sm">Sujet → nominatif ; COD → accusatif ; COI ou après prép. datif → datif ; complément du nom → génitif.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Génitif :</h4>
              <p className="text-yellow-700 text-sm">le substantif qui suit n'a pas d'article.</p>
              <p className="text-yellow-700 font-mono text-sm">Die Firma, deren Chef krank ist ...</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-3">Préposition + relatif :</h4>
              <p className="text-red-700 text-sm mb-2">la préposition précède le pronom.</p>
              <p className="text-red-700 font-mono text-sm">die Couch, auf der er liegt</p>
              <p className="text-red-600 text-xs mt-2">Pour les choses → on peut employer wo- + prép. (worauf).</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">4. Remplacer « dont »</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Valeur de « dont »</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Construction allemande</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Complément du nom</td>
                    <td className="border border-gray-300 p-3 font-mono">dessen / deren</td>
                    <td className="border border-gray-300 p-3 font-mono text-sm">Der Film, dessen Regisseur berühmt ist...</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">COI avec von</td>
                    <td className="border border-gray-300 p-3 font-mono">von dem / denen → wovon</td>
                    <td className="border border-gray-300 p-3 font-mono text-sm">Die Idee, von der ich spreche / wovon ich spreche...</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Complément avec prép. autre que von</td>
                    <td className="border border-gray-300 p-3 font-mono">prép. + relatif</td>
                    <td className="border border-gray-300 p-3 font-mono text-sm">Die Stadt, in der er wohnt...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">5. Relatives participiales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-green-800 mb-4">
                On remplace <span className="font-mono bg-white px-1">der/die/das ... wurde_hat_ist + Part. II</span> par un groupe adjectival devant le nom.
              </p>
              <p className="text-green-700 mb-4">
                Le participe ou l'adjectif se décline selon le groupe nominal.
              </p>
              <div className="bg-white p-4 rounded border">
                <p className="font-mono text-sm text-gray-700">Der Artikel, der im Mai veröffentlicht wurde</p>
                <p className="text-center text-gray-500 my-2">→</p>
                <p className="font-mono text-sm text-green-700">Der im Mai veröffentlichte Artikel</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">6. Exercices & corrigés</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">A. Complétez avec le pronom relatif approprié</h3>
              <div className="grid gap-3">
                {[
                  { num: 1, phrase: "Das Gesetz, ... der Bundestag im November verabschiedet hat, ...", reponse: "das" },
                  { num: 2, phrase: "Die Freundin, ... ich ein Buch geschenkt habe, ...", reponse: "der" },
                  { num: 3, phrase: "Die Kinder, ... ich bei den Hausaufgaben half, ...", reponse: "denen" },
                  { num: 4, phrase: "Der Lehrer, ... ich nach dem Problem fragte, ...", reponse: "den" },
                  { num: 5, phrase: "Das Praktikum, ... sie sich interessiert, ...", reponse: "für das (wofür possible)" }
                ].map((item) => (
                  <div key={item.num} className="bg-gray-50 p-3 rounded flex justify-between items-center">
                    <span className="font-mono text-sm">{item.num}. {item.phrase}</span>
                    <span className="font-mono text-green-600 font-medium">{item.reponse}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">B. Traduisez les phrases avec « dont »</h3>
              <div className="space-y-4">
                {[
                  { 
                    fr: "Ce livre, dont le titre est Au Bonheur des Dames, ...", 
                    de: "Dieses Buch, dessen Titel Au Bonheur des Dames ist, ..." 
                  },
                  { 
                    fr: "Les enfants dont je m'occupe, ...", 
                    de: "Die Kinder, um die ich mich kümmere, ..." 
                  },
                  { 
                    fr: "L'amie dont je te parle, ...", 
                    de: "Die Freundin, von der ich dir erzähle, ..." 
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded">
                    <p className="text-sm mb-2"><strong>Français :</strong> {item.fr}</p>
                    <p className="text-sm font-mono text-green-600"><strong>Allemand :</strong> {item.de}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">C. Transformez en relative participiale</h3>
              <div className="space-y-4">
                {[
                  { 
                    orig: "Der Roman, der von diesem Autor geschrieben wurde, ...", 
                    part: "Der von diesem Autor geschriebene Roman ..." 
                  },
                  { 
                    orig: "Die Vögel, die den ganzen Tag singen, ...", 
                    part: "Die den ganzen Tag singenden Vögel ..." 
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded">
                    <p className="text-sm mb-2 font-mono"><strong>Phrase originale :</strong> {item.orig}</p>
                    <p className="text-sm font-mono text-green-600"><strong>Version participiale :</strong> {item.part}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">7. Verdict</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
              <div className="space-y-3 text-green-700">
                <p>• <strong>Genre = antécédent, cas = fonction</strong> ; retenez surtout <span className="font-mono bg-yellow-200 px-1">dessen/deren</span> et <span className="font-mono bg-yellow-200 px-1">denen</span>.</p>
                <p>• <strong>« Dont »</strong> → génitif ou construction avec préposition.</p>
                <p>• <strong>Allégez vos phrases</strong> avec la relative participiale : participe + déclinaison devant le nom.</p>
              </div>
              <div className="mt-4 p-4 bg-white rounded border border-green-200">
                <p className="text-green-800 font-medium mb-2">Entraînement express :</p>
                <p className="text-green-700 text-sm">
                  prenez trois phrases françaises avec « dont », deux avec « sur lequel / à laquelle », une avec « où », 
                  et traduisez-les à l'oral ; vérifiez ensuite avec la grille ci-dessus. Bonne pratique !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AllemandRelativesPage;

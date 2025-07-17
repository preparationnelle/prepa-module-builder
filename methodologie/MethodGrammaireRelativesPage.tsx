import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
export const MethodGrammaireRelativesPage = () => {
  return <div className="container max-w-5xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            La Proposition Relative en Allemand
          </h1>
        </div>
        <p className="text-xl text-gray-600">
      </p>
      </div>

      <div className="space-y-8">
        {/* Repères essentiels */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">1. Repères essentiels</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-200">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 p-3 text-left font-semibold">Rappel</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Exemple</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Commentaire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-orange-200 p-3">Relatives = subordonnées</td>
                    <td className="border border-orange-200 p-3"><em>..., die Stadt, die ich besuche, ...</em></td>
                    <td className="border border-orange-200 p-3">Le verbe se place à la fin.</td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3">Ponctuation</td>
                    <td className="border border-orange-200 p-3"><em>Der Roman, den ich liebe, ist alt.</em></td>
                    <td className="border border-orange-200 p-3">Virgule avant et après la relative quand elle s'insère.</td>
                  </tr>
                  <tr>
                    <td className="border border-orange-200 p-3">Antécédent à distance</td>
                    <td className="border border-orange-200 p-3"><em>Ich suche das Buch nicht, das du empfohlen hast.</em></td>
                    <td className="border border-orange-200 p-3">On termine la principale quand le GV serait coupé par une longue relative.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Tableau des pronoms relatifs */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">2. Tableau des pronoms relatifs</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-200">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 p-3 text-left font-semibold">Cas \ Genre</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Masculin</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Féminin</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Neutre</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Pluriel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-orange-200 p-3 font-semibold">N.</td>
                    <td className="border border-orange-200 p-3"><em>der</em></td>
                    <td className="border border-orange-200 p-3"><em>die</em></td>
                    <td className="border border-orange-200 p-3"><em>das</em></td>
                    <td className="border border-orange-200 p-3"><em>die</em></td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3 font-semibold">A.</td>
                    <td className="border border-orange-200 p-3"><em>den</em></td>
                    <td className="border border-orange-200 p-3"><em>die</em></td>
                    <td className="border border-orange-200 p-3"><em>das</em></td>
                    <td className="border border-orange-200 p-3"><em>die</em></td>
                  </tr>
                  <tr>
                    <td className="border border-orange-200 p-3 font-semibold">D.</td>
                    <td className="border border-orange-200 p-3"><em>dem</em></td>
                    <td className="border border-orange-200 p-3"><em>der</em></td>
                    <td className="border border-orange-200 p-3"><em>dem</em></td>
                    <td className="border border-orange-200 p-3"><em>denen</em></td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3 font-semibold">G.</td>
                    <td className="border border-orange-200 p-3"><em>dessen</em></td>
                    <td className="border border-orange-200 p-3"><em>deren</em></td>
                    <td className="border border-orange-200 p-3"><em>dessen</em></td>
                    <td className="border border-orange-200 p-3"><em>deren</em></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg mt-3">
              <p className="text-gray-700">Identiques à l'article défini <em>der/die/das</em> – sauf datif pluriel (<em>denen</em>) et génitif (<em>dessen/deren</em>).</p>
            </div>
          </CardContent>
        </Card>

        {/* Choisir le bon pronom */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">3. Choisir le bon pronom</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Genre = celui de l'antécédent</p>
              <p className="text-gray-700"><em>das Haus, das ich kaufe</em> (neutre → das).</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Cas = fonction dans la relative</p>
              <p className="text-gray-700">Sujet → nominatif ; COD → accusatif ; COI ou après prép. datif → datif ; complément du nom → génitif.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Génitif : le substantif qui suit n'a pas d'article.</p>
              <p className="text-gray-700"><em>Die Firma, deren Chef krank ist ...</em></p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Préposition + relatif : la préposition précède le pronom.</p>
              <p className="text-gray-700"><em>die Couch, auf der er liegt</em></p>
              <p className="text-sm text-gray-600 mt-1">Pour les choses → on peut employer <em>wo- + prép.</em> (<em>worauf</em>).</p>
            </div>
          </CardContent>
        </Card>

        {/* Remplacer "dont" */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">4. Remplacer « dont »</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-200">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 p-3 text-left font-semibold">Valeur de « dont »</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Construction allemande</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-orange-200 p-3">Complément du nom</td>
                    <td className="border border-orange-200 p-3"><em>dessen / deren</em></td>
                    <td className="border border-orange-200 p-3"><em>Der Film, dessen Regisseur berühmt ist...</em></td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3">COI avec <em>von</em></td>
                    <td className="border border-orange-200 p-3"><em>von dem / denen → wovon</em></td>
                    <td className="border border-orange-200 p-3"><em>Die Idee, von der ich spreche / wovon ich spreche...</em></td>
                  </tr>
                  <tr>
                    <td className="border border-orange-200 p-3">Complément avec prép. autre que <em>von</em></td>
                    <td className="border border-orange-200 p-3">prép. + relatif</td>
                    <td className="border border-orange-200 p-3"><em>Die Stadt, in der er wohnt...</em></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Relatives participiales */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">5. Relatives participiales</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">On remplace <em>der/die/das ... wurde_hat_ist + Part. II</em> par un groupe adjectival devant le nom.</p>
            <p className="mb-4">Le participe ou l'adjectif se décline selon le groupe nominal.</p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <em>Der Artikel, der im Mai veröffentlicht wurde</em> → <em>Der im Mai veröffentlichte Artikel</em>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Exercices */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">6. Exercices & corrigés</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">A. Complétez avec le pronom relatif approprié</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200 text-sm">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">#</th>
                      <th className="border border-orange-200 p-2 text-left">Phrase</th>
                      <th className="border border-orange-200 p-2 text-left">Réponse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2">1</td>
                      <td className="border border-orange-200 p-2"><em>Das Gesetz, ... der Bundestag im November verabschiedet hat, ...</em></td>
                      <td className="border border-orange-200 p-2"><em>das</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">2</td>
                      <td className="border border-orange-200 p-2"><em>Die Freundin, ... ich ein Buch geschenkt habe, ...</em></td>
                      <td className="border border-orange-200 p-2"><em>der</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">3</td>
                      <td className="border border-orange-200 p-2"><em>Die Kinder, ... ich bei den Hausaufgaben half, ...</em></td>
                      <td className="border border-orange-200 p-2"><em>denen</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">4</td>
                      <td className="border border-orange-200 p-2"><em>Der Lehrer, ... ich nach dem Problem fragte, ...</em></td>
                      <td className="border border-orange-200 p-2"><em>den</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">5</td>
                      <td className="border border-orange-200 p-2"><em>Das Praktikum, ... sie sich interessiert, ...</em></td>
                      <td className="border border-orange-200 p-2"><em>für das</em><br /><span className="text-sm text-gray-600">(<em>wofür</em> possible)</span></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">6</td>
                      <td className="border border-orange-200 p-2"><em>Wer ist die Person, mit ... du gesprochen hast?</em></td>
                      <td className="border border-orange-200 p-2"><em>der</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">7</td>
                      <td className="border border-orange-200 p-2"><em>... Freund Max, ... in der Heinrich-Heine-Straße wohnt.</em></td>
                      <td className="border border-orange-200 p-2"><em>der</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">8</td>
                      <td className="border border-orange-200 p-2"><em>... Freund Max, ... ich die CD zurückbringen muss.</em></td>
                      <td className="border border-orange-200 p-2"><em>dem</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">9</td>
                      <td className="border border-orange-200 p-2"><em>... Freund Max, ... du doch auch kennst.</em></td>
                      <td className="border border-orange-200 p-2"><em>den</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">10</td>
                      <td className="border border-orange-200 p-2"><em>Gillian und David, ... Mutter krank ist, ...</em></td>
                      <td className="border border-orange-200 p-2"><em>deren</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">11</td>
                      <td className="border border-orange-200 p-2"><em>Die Stadt, ... ich hinfahren möchte, ...</em></td>
                      <td className="border border-orange-200 p-2"><em>in die</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">12</td>
                      <td className="border border-orange-200 p-2"><em>Ich habe einen Hund, ... Augen blau sind.</em></td>
                      <td className="border border-orange-200 p-2"><em>dessen</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">13</td>
                      <td className="border border-orange-200 p-2"><em>Neufundländer sind Hunde, ... Leute im Wasser retten.</em></td>
                      <td className="border border-orange-200 p-2"><em>die</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">14</td>
                      <td className="border border-orange-200 p-2"><em>Matthias, mit ... Bruder ich befreundet bin, ...</em></td>
                      <td className="border border-orange-200 p-2"><em>dessen</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">15</td>
                      <td className="border border-orange-200 p-2"><em>Der Erste Weltkrieg, ... wir 2014 gedenken, ...</em></td>
                      <td className="border border-orange-200 p-2"><em>dessen</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">B. Traduisez les phrases avec « dont »</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-3 text-left font-semibold">Français</th>
                      <th className="border border-orange-200 p-3 text-left font-semibold">Allemand</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-3">Ce livre, dont le titre est Au Bonheur des Dames, ...</td>
                      <td className="border border-orange-200 p-3"><em>Dieses Buch, dessen Titel „Au Bonheur des Dames" ist, ...</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-3">Les enfants dont je m'occupe, ...</td>
                      <td className="border border-orange-200 p-3"><em>Die Kinder, um die ich mich kümmere, ...</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-3">L'amie dont je te parle, ...</td>
                      <td className="border border-orange-200 p-3"><em>Die Freundin, von der ich dir erzähle, ...</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-3">L'amie dont j'ai pris le livre, ...</td>
                      <td className="border border-orange-200 p-3"><em>Die Freundin, deren Buch ich genommen habe, ...</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-3">L'événement dont je me souviens, ...</td>
                      <td className="border border-orange-200 p-3"><em>Das Ereignis, an das ich mich erinnere, ...</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">C. Transformez en relative participiale</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-3 text-left font-semibold">Phrase originale</th>
                      <th className="border border-orange-200 p-3 text-left font-semibold">Version participiale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-3"><em>Der Roman, der von diesem Autor geschrieben wurde, ...</em></td>
                      <td className="border border-orange-200 p-3"><em>Der von diesem Autor geschriebene Roman ...</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-3"><em>Die Vögel, die den ganzen Tag singen, ...</em></td>
                      <td className="border border-orange-200 p-3"><em>Die den ganzen Tag singenden Vögel ...</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verdict */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">7. Verdict</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• Genre = antécédent, cas = fonction ; retenez surtout <em>dessen/deren</em> et <em>denen</em>.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• « Dont » → génitif ou construction avec préposition.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• Allégez vos phrases avec la relative participiale : participe + déclinaison devant le nom.</p>
              </div>
            </div>
            <p className="mt-4 font-medium text-orange-800">
              Entraînement express : prenez trois phrases françaises avec « dont », deux avec « sur lequel / à laquelle », 
              une avec « où », et traduisez-les à l'oral ; vérifiez ensuite avec la grille ci-dessus. Bonne pratique !
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <Link to="/methodologie/grammaire">
          <Button variant="outline" className="border-[#ff9100] text-[#ff9100] hover:bg-[#ff9100] hover:text-white">
            ← Retour aux fiches de grammaire
          </Button>
        </Link>
      </div>
    </div>;
};
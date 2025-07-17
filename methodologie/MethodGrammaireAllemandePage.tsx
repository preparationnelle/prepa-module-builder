
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export const MethodGrammaireAllemandePage = () => {
  return (
    <div className="container max-w-5xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            Fiche de Grammaire Allemande - Conjugaison
          </h1>
        </div>
      </div>

      <div className="mb-8">
        <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-orange-800">Sommaire</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-orange-700">
              <li>• L'Indicatif</li>
              <li>• L'Impératif</li>
              <li>• Tableaux de Référence</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* L'INDICATIF */}
      <Card className="mb-8 border-2 border-orange-200">
        <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
          <CardTitle className="text-2xl text-orange-800">L'INDICATIF</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-8">
          
          {/* LE PRÉSENT */}
          <div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">1. LE PRÉSENT</h3>
            
            {/* Auxiliaires */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">Auxiliaires : SEIN, HABEN, WERDEN</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border border-orange-300 p-3 text-left">Pronom</th>
                      <th className="border border-orange-300 p-3 text-left">SEIN</th>
                      <th className="border border-orange-300 p-3 text-left">HABEN</th>
                      <th className="border border-orange-300 p-3 text-left">WERDEN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-orange-300 p-3">ich</td><td className="border border-orange-300 p-3">bin</td><td className="border border-orange-300 p-3">habe</td><td className="border border-orange-300 p-3">werde</td></tr>
                    <tr><td className="border border-orange-300 p-3">du</td><td className="border border-orange-300 p-3">bist</td><td className="border border-orange-300 p-3">hast</td><td className="border border-orange-300 p-3">wirst</td></tr>
                    <tr><td className="border border-orange-300 p-3">er/sie/es/man</td><td className="border border-orange-300 p-3">ist</td><td className="border border-orange-300 p-3">hat</td><td className="border border-orange-300 p-3">wird</td></tr>
                    <tr><td className="border border-orange-300 p-3">wir</td><td className="border border-orange-300 p-3">sind</td><td className="border border-orange-300 p-3">haben</td><td className="border border-orange-300 p-3">werden</td></tr>
                    <tr><td className="border border-orange-300 p-3">ihr</td><td className="border border-orange-300 p-3">seid</td><td className="border border-orange-300 p-3">habt</td><td className="border border-orange-300 p-3">werdet</td></tr>
                    <tr><td className="border border-orange-300 p-3">sie/Sie</td><td className="border border-orange-300 p-3">sind</td><td className="border border-orange-300 p-3">haben</td><td className="border border-orange-300 p-3">werden</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Verbes faibles */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">Verbes faibles (réguliers)</h4>
              <p className="mb-3"><strong>Formation :</strong> Radical + désinences (-e, -st, -t, -en, -t, -en)</p>
              <p className="mb-2"><strong>Exemple : arbeiten</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>ich arbeite</li>
                <li>du arbeitest</li>
                <li>er/sie/es arbeitet</li>
                <li>wir arbeiten</li>
                <li>ihr arbeitet</li>
                <li>sie/Sie arbeiten</li>
              </ul>
            </div>

            {/* Verbes de modalité */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">Verbes de modalité</h4>
              <p className="mb-3"><strong>Formation :</strong> Radical (± Umlaut) + désinences du prétérit (Ø, -st, Ø, -en, -t, -en)</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border border-orange-300 p-2 text-left">Pronom</th>
                      <th className="border border-orange-300 p-2 text-left">MÜSSEN</th>
                      <th className="border border-orange-300 p-2 text-left">SOLLEN</th>
                      <th className="border border-orange-300 p-2 text-left">KÖNNEN</th>
                      <th className="border border-orange-300 p-2 text-left">WOLLEN</th>
                      <th className="border border-orange-300 p-2 text-left">DÜRFEN</th>
                      <th className="border border-orange-300 p-2 text-left">MÖGEN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-orange-300 p-2">ich</td><td className="border border-orange-300 p-2">muss</td><td className="border border-orange-300 p-2">soll</td><td className="border border-orange-300 p-2">kann</td><td className="border border-orange-300 p-2">will</td><td className="border border-orange-300 p-2">darf</td><td className="border border-orange-300 p-2">mag</td></tr>
                    <tr><td className="border border-orange-300 p-2">du</td><td className="border border-orange-300 p-2">musst</td><td className="border border-orange-300 p-2">sollst</td><td className="border border-orange-300 p-2">kannst</td><td className="border border-orange-300 p-2">willst</td><td className="border border-orange-300 p-2">darfst</td><td className="border border-orange-300 p-2">magst</td></tr>
                    <tr><td className="border border-orange-300 p-2">er/sie/es</td><td className="border border-orange-300 p-2">muss</td><td className="border border-orange-300 p-2">soll</td><td className="border border-orange-300 p-2">kann</td><td className="border border-orange-300 p-2">will</td><td className="border border-orange-300 p-2">darf</td><td className="border border-orange-300 p-2">mag</td></tr>
                    <tr><td className="border border-orange-300 p-2">wir</td><td className="border border-orange-300 p-2">müssen</td><td className="border border-orange-300 p-2">sollen</td><td className="border border-orange-300 p-2">können</td><td className="border border-orange-300 p-2">wollen</td><td className="border border-orange-300 p-2">dürfen</td><td className="border border-orange-300 p-2">mögen</td></tr>
                    <tr><td className="border border-orange-300 p-2">ihr</td><td className="border border-orange-300 p-2">müsst</td><td className="border border-orange-300 p-2">sollt</td><td className="border border-orange-300 p-2">könnt</td><td className="border border-orange-300 p-2">wollt</td><td className="border border-orange-300 p-2">dürft</td><td className="border border-orange-300 p-2">mögt</td></tr>
                    <tr><td className="border border-orange-300 p-2">sie/Sie</td><td className="border border-orange-300 p-2">müssen</td><td className="border border-orange-300 p-2">sollen</td><td className="border border-orange-300 p-2">können</td><td className="border border-orange-300 p-2">wollen</td><td className="border border-orange-300 p-2">dürfen</td><td className="border border-orange-300 p-2">mögen</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Verbes forts */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">Verbes forts (irréguliers)</h4>
              <p className="mb-3"><strong>Formation :</strong> Radical (modifié ou non) + désinences (-e, -st, -t, -en, -t, -en)</p>
              <p className="mb-2"><strong>Exemples :</strong></p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border border-orange-300 p-2 text-left">Pronom</th>
                      <th className="border border-orange-300 p-2 text-left">LESEN</th>
                      <th className="border border-orange-300 p-2 text-left">SPRECHEN</th>
                      <th className="border border-orange-300 p-2 text-left">LAUFEN</th>
                      <th className="border border-orange-300 p-2 text-left">ESSEN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-orange-300 p-2">ich</td><td className="border border-orange-300 p-2">lese</td><td className="border border-orange-300 p-2">spreche</td><td className="border border-orange-300 p-2">laufe</td><td className="border border-orange-300 p-2">esse</td></tr>
                    <tr><td className="border border-orange-300 p-2">du</td><td className="border border-orange-300 p-2">liest</td><td className="border border-orange-300 p-2">sprichst</td><td className="border border-orange-300 p-2">läufst</td><td className="border border-orange-300 p-2">isst</td></tr>
                    <tr><td className="border border-orange-300 p-2">er/sie/es</td><td className="border border-orange-300 p-2">liest</td><td className="border border-orange-300 p-2">spricht</td><td className="border border-orange-300 p-2">läuft</td><td className="border border-orange-300 p-2">isst</td></tr>
                    <tr><td className="border border-orange-300 p-2">wir</td><td className="border border-orange-300 p-2">lesen</td><td className="border border-orange-300 p-2">sprechen</td><td className="border border-orange-300 p-2">laufen</td><td className="border border-orange-300 p-2">essen</td></tr>
                    <tr><td className="border border-orange-300 p-2">ihr</td><td className="border border-orange-300 p-2">lest</td><td className="border border-orange-300 p-2">sprecht</td><td className="border border-orange-300 p-2">lauft</td><td className="border border-orange-300 p-2">esst</td></tr>
                    <tr><td className="border border-orange-300 p-2">sie/Sie</td><td className="border border-orange-300 p-2">lesen</td><td className="border border-orange-300 p-2">sprechen</td><td className="border border-orange-300 p-2">laufen</td><td className="border border-orange-300 p-2">essen</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* LE FUTUR */}
          <div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">2. LE FUTUR</h3>
            <p className="mb-3"><strong>Formation :</strong> WERDEN (présent) + INFINITIF</p>
            <p className="mb-2"><strong>Exemples :</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Ich werde lernen. (Je vais apprendre)</li>
              <li>Du wirst reisen. (Tu vas voyager)</li>
              <li>Er wird studieren. (Il va étudier)</li>
            </ul>
          </div>

          {/* LE PRÉTÉRIT */}
          <div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">3. LE PRÉTÉRIT</h3>
            
            {/* Auxiliaires prétérit */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">Auxiliaires</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border border-orange-300 p-3 text-left">Pronom</th>
                      <th className="border border-orange-300 p-3 text-left">SEIN</th>
                      <th className="border border-orange-300 p-3 text-left">HABEN</th>
                      <th className="border border-orange-300 p-3 text-left">WERDEN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-orange-300 p-3">ich</td><td className="border border-orange-300 p-3">war</td><td className="border border-orange-300 p-3">hatte</td><td className="border border-orange-300 p-3">wurde</td></tr>
                    <tr><td className="border border-orange-300 p-3">du</td><td className="border border-orange-300 p-3">warst</td><td className="border border-orange-300 p-3">hattest</td><td className="border border-orange-300 p-3">wurdest</td></tr>
                    <tr><td className="border border-orange-300 p-3">er/sie/es</td><td className="border border-orange-300 p-3">war</td><td className="border border-orange-300 p-3">hatte</td><td className="border border-orange-300 p-3">wurde</td></tr>
                    <tr><td className="border border-orange-300 p-3">wir</td><td className="border border-orange-300 p-3">waren</td><td className="border border-orange-300 p-3">hatten</td><td className="border border-orange-300 p-3">wurden</td></tr>
                    <tr><td className="border border-orange-300 p-3">ihr</td><td className="border border-orange-300 p-3">wart</td><td className="border border-orange-300 p-3">hattet</td><td className="border border-orange-300 p-3">wurdet</td></tr>
                    <tr><td className="border border-orange-300 p-3">sie/Sie</td><td className="border border-orange-300 p-3">waren</td><td className="border border-orange-300 p-3">hatten</td><td className="border border-orange-300 p-3">wurden</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-orange-700">Verbes faibles</h4>
                <p><strong>Formation :</strong> Radical + -te + désinences (Ø, -st, Ø, -en, -t, -en)</p>
                <p><strong>Exemple :</strong> lernen → lernte</p>
                <p className="ml-4">ich lernte, du lerntest, er lernte, wir lernten, ihr lerntet, sie lernten</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-orange-700">Verbes de modalité</h4>
                <p><strong>Formation :</strong> Radical (sans Umlaut) + -te + désinences</p>
                <p><strong>Exemple :</strong> müssen → musste</p>
                <p className="ml-4">ich musste, du musstest, er musste, wir mussten, ihr musstet, sie mussten</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-orange-700">Verbes forts</h4>
                <p><strong>Formation :</strong> Radical modifié + désinences (Ø, -st, Ø, -en, -t, -en)</p>
                <p><strong>Exemples :</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>lesen → las : ich las, du last, er las, wir lasen, ihr last, sie lasen</li>
                  <li>sprechen → sprach : ich sprach, du sprachst, er sprach, wir sprachen, ihr spracht, sie sprachen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* LE PARFAIT */}
          <div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">4. LE PARFAIT</h3>
            <p className="mb-3"><strong>Formation :</strong> HABEN/SEIN (présent) + PARTICIPE II</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">Formation du Participe II</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border border-orange-300 p-3 text-left">Type de verbe</th>
                      <th className="border border-orange-300 p-3 text-left">Formation</th>
                      <th className="border border-orange-300 p-3 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-orange-300 p-3">Auxiliaires</td><td className="border border-orange-300 p-3">Formes spéciales</td><td className="border border-orange-300 p-3">sein → gewesen, haben → gehabt, werden → geworden</td></tr>
                    <tr><td className="border border-orange-300 p-3">Verbes faibles</td><td className="border border-orange-300 p-3">ge- + radical + -t</td><td className="border border-orange-300 p-3">lernen → gelernt</td></tr>
                    <tr><td className="border border-orange-300 p-3">Verbes de modalité</td><td className="border border-orange-300 p-3">ge- + radical (sans Umlaut) + -t</td><td className="border border-orange-300 p-3">müssen → gemusst</td></tr>
                    <tr><td className="border border-orange-300 p-3">Verbes forts</td><td className="border border-orange-300 p-3">ge- + radical modifié + -en</td><td className="border border-orange-300 p-3">lesen → gelesen</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">Cas particuliers du Participe II</h4>
              <div className="space-y-3">
                <div>
                  <strong>Verbes à particule séparable :</strong>
                  <p>Particule + ge- + radical + -t/-en</p>
                  <p>Exemples : aufmachen → aufgemacht, weggehen → weggegangen</p>
                </div>
                <div>
                  <strong>Verbes à particule inséparable :</strong>
                  <p>Pas de ge- avec : be-, ent-, er-, ge-, miss-, ver-, zer-</p>
                  <p>Exemples : besuchen → besucht, entdecken → entdeckt</p>
                </div>
                <div>
                  <strong>Verbes en -ieren :</strong>
                  <p>Pas de ge-</p>
                  <p>Exemple : studieren → studiert</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">Choix de l'auxiliaire : HABEN ou SEIN ?</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border border-orange-300 p-3 text-left">HABEN</th>
                      <th className="border border-orange-300 p-3 text-left">SEIN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-orange-300 p-3">Verbes transitifs</td><td className="border border-orange-300 p-3">Verbes de mouvement</td></tr>
                    <tr><td className="border border-orange-300 p-3">Verbes réfléchis</td><td className="border border-orange-300 p-3">Verbes de changement d'état</td></tr>
                    <tr><td className="border border-orange-300 p-3">Verbes en -ieren</td><td className="border border-orange-300 p-3">sein, bleiben, werden</td></tr>
                    <tr><td className="border border-orange-300 p-3">Verbes de position/durée</td><td className="border border-orange-300 p-3">passieren, geschehen</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3"><strong>Exemples :</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>HABEN :</strong> Ich habe gelernt, Er hat sich gewaschen</li>
                <li><strong>SEIN :</strong> Ich bin gelaufen, Er ist angekommen</li>
              </ul>
            </div>
          </div>

          {/* LE PLUS-QUE-PARFAIT */}
          <div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">5. LE PLUS-QUE-PARFAIT</h3>
            <p className="mb-3"><strong>Formation :</strong> HABEN/SEIN (prétérit) + PARTICIPE II</p>
            <p className="mb-2"><strong>Exemples :</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Ich hatte gelernt. (J'avais appris)</li>
              <li>Er war gelaufen. (Il avait couru)</li>
            </ul>
          </div>

          {/* VERBES FAIBLES IRRÉGULIERS */}
          <div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">6. VERBES FAIBLES IRRÉGULIERS</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-orange-300 p-3 text-left">Infinitif</th>
                    <th className="border border-orange-300 p-3 text-left">Prétérit</th>
                    <th className="border border-orange-300 p-3 text-left">Participe II</th>
                    <th className="border border-orange-300 p-3 text-left">Traduction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-orange-300 p-3">brennen</td><td className="border border-orange-300 p-3">brannte</td><td className="border border-orange-300 p-3">gebrannt</td><td className="border border-orange-300 p-3">brûler</td></tr>
                  <tr><td className="border border-orange-300 p-3">bringen</td><td className="border border-orange-300 p-3">brachte</td><td className="border border-orange-300 p-3">gebracht</td><td className="border border-orange-300 p-3">apporter</td></tr>
                  <tr><td className="border border-orange-300 p-3">denken</td><td className="border border-orange-300 p-3">dachte</td><td className="border border-orange-300 p-3">gedacht</td><td className="border border-orange-300 p-3">penser</td></tr>
                  <tr><td className="border border-orange-300 p-3">kennen</td><td className="border border-orange-300 p-3">kannte</td><td className="border border-orange-300 p-3">gekannt</td><td className="border border-orange-300 p-3">connaître</td></tr>
                  <tr><td className="border border-orange-300 p-3">nennen</td><td className="border border-orange-300 p-3">nannte</td><td className="border border-orange-300 p-3">genannt</td><td className="border border-orange-300 p-3">nommer</td></tr>
                  <tr><td className="border border-orange-300 p-3">rennen</td><td className="border border-orange-300 p-3">rannte</td><td className="border border-orange-300 p-3">gerannt</td><td className="border border-orange-300 p-3">courir</td></tr>
                  <tr><td className="border border-orange-300 p-3">senden</td><td className="border border-orange-300 p-3">sandte/sendete</td><td className="border border-orange-300 p-3">gesandt/gesendet</td><td className="border border-orange-300 p-3">envoyer</td></tr>
                  <tr><td className="border border-orange-300 p-3">wenden</td><td className="border border-orange-300 p-3">wandte/wendete</td><td className="border border-orange-300 p-3">gewandt/gewendet</td><td className="border border-orange-300 p-3">tourner</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CAS PARTICULIER : WISSEN */}
          <div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">7. CAS PARTICULIER : WISSEN</h3>
            <p className="mb-3"><strong>Conjugaison :</strong> Comme les verbes de modalité</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-orange-300 p-3 text-left">Pronom</th>
                    <th className="border border-orange-300 p-3 text-left">Présent</th>
                    <th className="border border-orange-300 p-3 text-left">Prétérit</th>
                    <th className="border border-orange-300 p-3 text-left">Participe II</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-orange-300 p-3">ich</td><td className="border border-orange-300 p-3">weiß</td><td className="border border-orange-300 p-3">wusste</td><td className="border border-orange-300 p-3">gewusst</td></tr>
                  <tr><td className="border border-orange-300 p-3">du</td><td className="border border-orange-300 p-3">weißt</td><td className="border border-orange-300 p-3">wusstest</td><td className="border border-orange-300 p-3"></td></tr>
                  <tr><td className="border border-orange-300 p-3">er/sie/es</td><td className="border border-orange-300 p-3">weiß</td><td className="border border-orange-300 p-3">wusste</td><td className="border border-orange-300 p-3"></td></tr>
                  <tr><td className="border border-orange-300 p-3">wir</td><td className="border border-orange-300 p-3">wissen</td><td className="border border-orange-300 p-3">wussten</td><td className="border border-orange-300 p-3"></td></tr>
                  <tr><td className="border border-orange-300 p-3">ihr</td><td className="border border-orange-300 p-3">wisst</td><td className="border border-orange-300 p-3">wusstet</td><td className="border border-orange-300 p-3"></td></tr>
                  <tr><td className="border border-orange-300 p-3">sie/Sie</td><td className="border border-orange-300 p-3">wissen</td><td className="border border-orange-300 p-3">wussten</td><td className="border border-orange-300 p-3"></td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
              <p className="text-amber-800"><strong>Attention :</strong> Pas de double infinitif avec WISSEN + ZU</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Présent : Er weiß die Aufgabe richtig zu lösen.</li>
                <li>Parfait : Er hat gewusst, die Aufgabe richtig zu lösen.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* L'IMPÉRATIF */}
      <Card className="mb-8 border-2 border-orange-200">
        <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
          <CardTitle className="text-2xl text-orange-800">L'IMPÉRATIF</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-orange-700 mb-3">Caractéristiques</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Uniquement au présent</li>
              <li>4 formes : du (singulier), wir (nous), ihr (vous familier), Sie (vous poli)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-700 mb-3">Formation</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-orange-300 p-3 text-left">Personne</th>
                    <th className="border border-orange-300 p-3 text-left">Formation</th>
                    <th className="border border-orange-300 p-3 text-left">Exemple (lernen)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-orange-300 p-3">du</td><td className="border border-orange-300 p-3">radical + (-e facultatif)</td><td className="border border-orange-300 p-3">lern(e)!</td></tr>
                  <tr><td className="border border-orange-300 p-3">wir</td><td className="border border-orange-300 p-3">radical + -en + wir</td><td className="border border-orange-300 p-3">lernen wir!</td></tr>
                  <tr><td className="border border-orange-300 p-3">ihr</td><td className="border border-orange-300 p-3">radical + -t</td><td className="border border-orange-300 p-3">lernt!</td></tr>
                  <tr><td className="border border-orange-300 p-3">Sie</td><td className="border border-orange-300 p-3">radical + -en + Sie</td><td className="border border-orange-300 p-3">lernen Sie!</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-700 mb-3">Cas particuliers</h4>
            <div className="space-y-3">
              <div>
                <strong>Verbes avec alternance e/i :</strong> Changement conservé, pas de -e final
                <ul className="list-disc list-inside ml-4">
                  <li>lesen → lies! (pas lese!)</li>
                  <li>sprechen → sprich!</li>
                </ul>
              </div>
              <div>
                <strong>Verbes faibles en -eln, -ern, -nen :</strong> -e obligatoire
                <ul className="list-disc list-inside ml-4">
                  <li>sammeln → sammle! (pas samml!)</li>
                  <li>ändern → ändere!</li>
                </ul>
              </div>
              <div>
                <strong>SEIN (être) :</strong> Formes irrégulières
                <ul className="list-disc list-inside ml-4">
                  <li>du : sei!</li>
                  <li>wir : seien wir!</li>
                  <li>ihr : seid!</li>
                  <li>Sie : seien Sie!</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* TABLEAUX DE RÉFÉRENCE */}
      <Card className="mb-8 border-2 border-orange-200">
        <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
          <CardTitle className="text-2xl text-orange-800">Tableaux de Référence</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-orange-700 mb-3">Désinences par temps</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-300 bg-white rounded-lg">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-orange-300 p-3 text-left">Temps</th>
                    <th className="border border-orange-300 p-3 text-left">ich</th>
                    <th className="border border-orange-300 p-3 text-left">du</th>
                    <th className="border border-orange-300 p-3 text-left">er/sie/es</th>
                    <th className="border border-orange-300 p-3 text-left">wir</th>
                    <th className="border border-orange-300 p-3 text-left">ihr</th>
                    <th className="border border-orange-300 p-3 text-left">sie/Sie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-orange-300 p-3">Présent</td><td className="border border-orange-300 p-3">-e</td><td className="border border-orange-300 p-3">-st</td><td className="border border-orange-300 p-3">-t</td><td className="border border-orange-300 p-3">-en</td><td className="border border-orange-300 p-3">-t</td><td className="border border-orange-300 p-3">-en</td></tr>
                  <tr><td className="border border-orange-300 p-3">Prétérit faible</td><td className="border border-orange-300 p-3">-te</td><td className="border border-orange-300 p-3">-test</td><td className="border border-orange-300 p-3">-te</td><td className="border border-orange-300 p-3">-ten</td><td className="border border-orange-300 p-3">-tet</td><td className="border border-orange-300 p-3">-ten</td></tr>
                  <tr><td className="border border-orange-300 p-3">Prétérit fort</td><td className="border border-orange-300 p-3">Ø</td><td className="border border-orange-300 p-3">-st</td><td className="border border-orange-300 p-3">Ø</td><td className="border border-orange-300 p-3">-en</td><td className="border border-orange-300 p-3">-t</td><td className="border border-orange-300 p-3">-en</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-700 mb-3">Particules inséparables (pas de ge-)</h4>
            <p className="mb-2">be-, ent-, er-, ge-, miss-, ver-, zer-</p>
            <p><strong>Exemples :</strong> besuchen → besucht, entdecken → entdeckt</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg border border-orange-200">
            <p className="text-orange-800 font-medium mb-2">Conseil : Apprenez les verbes forts par groupes selon leur changement vocalique !</p>
            <p className="text-orange-800 font-medium">À retenir : Les verbes de modalité ont toujours les mêmes désinences particulières.</p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-10 text-center">
        <Link to="/methodologie/grammaire">
          <Button variant="outline" className="border-[#ff9100] text-[#ff9100] hover:bg-[#ff9100] hover:text-white">
            ← Retour aux fiches de grammaire
          </Button>
        </Link>
      </div>
    </div>
  );
};

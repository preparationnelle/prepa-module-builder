
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export const MethodGrammaireReglesPage = () => {
  return (
    <div className="container max-w-5xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            Règles de Grammaire Allemande Récurrentes à Maîtriser
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          Les 26 règles essentielles pour maîtriser l'allemand
        </p>
      </div>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Guide complet des règles récurrentes</p>
          <p className="text-muted-foreground">
            Ces règles reviennent constamment dans les exercices et compositions. Une maîtrise parfaite est indispensable.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* 1. Construction des subordonnées */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">1. Construction des Subordonnées</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
              <h4 className="font-semibold text-red-800 mb-2">⚠️ Règle principale</h4>
              <p className="text-red-700">
                Le verbe conjugué se place en dernière position dans les propositions subordonnées.
              </p>
            </div>

            <h4 className="font-semibold text-orange-700 mb-3">Conjonctions de subordination courantes :</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <p><strong>dass</strong> (que) : <em>Ich weiß, dass er kommt.</em></p>
                <p><strong>weil/da</strong> (parce que) : <em>Da ich Zeit habe, komme ich.</em></p>
                <p><strong>wenn</strong> (si/quand) : <em>Wenn du kommst, freue ich mich.</em></p>
              </div>
              <div className="space-y-2">
                <p><strong>als</strong> (quand - passé) : <em>Als er jung war, spielte er Fußball.</em></p>
                <p><strong>obwohl</strong> (bien que) : <em>Obwohl es regnet, gehen wir spazieren.</em></p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-medium text-red-800 mb-2">❌ Erreurs fréquentes :</h5>
              <ul className="space-y-1 text-sm text-red-700">
                <li>❌ Weil er kommt morgen → ✅ Weil er morgen kommt</li>
                <li>❌ Als wir ihn angerufen haben → ✅ Als wir ihn anriefen</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 2. Place du verbe (inversion) */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">2. Place du Verbe (Inversion)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">Règle</h4>
              <p className="text-blue-700">
                Quand un complément ouvre la phrase, le sujet passe après le verbe conjugué.
              </p>
            </div>

            <h4 className="font-semibold text-orange-700 mb-3">Exemples :</h4>
            <ul className="space-y-1 mb-4">
              <li><em>Heute gehe ich ins Kino.</em></li>
              <li><em>In Deutschland wohnen viele Ausländer.</em></li>
              <li><em>Seit langem habe ich ihn nicht gesehen.</em></li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-medium text-red-800 mb-2">❌ Erreurs fréquentes :</h5>
              <p className="text-sm text-red-700">❌ Heute ich gehe → ✅ Heute gehe ich</p>
            </div>
          </CardContent>
        </Card>

        {/* 3. Déclinaisons (cas) */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">3. Déclinaisons (Cas)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Déclinaisons des articles</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-orange-200">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 p-3 text-left font-semibold">Cas</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Masculin</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Neutre</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Féminin</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Pluriel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-orange-200 p-3 font-semibold">Nominatif</td>
                    <td className="border border-orange-200 p-3">der/ein</td>
                    <td className="border border-orange-200 p-3">das/ein</td>
                    <td className="border border-orange-200 p-3">die/eine</td>
                    <td className="border border-orange-200 p-3">die/-</td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3 font-semibold">Accusatif</td>
                    <td className="border border-orange-200 p-3">den/einen</td>
                    <td className="border border-orange-200 p-3">das/ein</td>
                    <td className="border border-orange-200 p-3">die/eine</td>
                    <td className="border border-orange-200 p-3">die/-</td>
                  </tr>
                  <tr>
                    <td className="border border-orange-200 p-3 font-semibold">Datif</td>
                    <td className="border border-orange-200 p-3">dem/einem</td>
                    <td className="border border-orange-200 p-3">dem/einem</td>
                    <td className="border border-orange-200 p-3">der/einer</td>
                    <td className="border border-orange-200 p-3">den/-n</td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3 font-semibold">Génitif</td>
                    <td className="border border-orange-200 p-3">des/eines</td>
                    <td className="border border-orange-200 p-3">des/eines</td>
                    <td className="border border-orange-200 p-3">der/einer</td>
                    <td className="border border-orange-200 p-3">der/-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-semibold text-orange-700 mb-3">Verbes + Datif (fréquents) :</h4>
            <ul className="space-y-1 mb-4">
              <li><strong>helfen</strong> : <em>Ich helfe dem Mann</em></li>
              <li><strong>danken</strong> : <em>Ich danke dir</em></li>
              <li><strong>folgen</strong> : <em>Er folgt seinen Eltern</em></li>
              <li><strong>vertrauen</strong> : <em>Wir vertrauen den Politikern</em></li>
              <li><strong>gefallen</strong> : <em>Das gefällt mir</em></li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-medium text-red-800 mb-2">❌ Erreurs fréquentes :</h5>
              <ul className="space-y-1 text-sm text-red-700">
                <li>❌ Ich helfe den Mann → ✅ Ich helfe dem Mann</li>
                <li>❌ Das gefällt mich → ✅ Das gefällt mir</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 4. Prépositions et cas */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">4. Prépositions et Cas</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prépositions + Accusatif</h4>
                <p className="mb-2"><strong>für, gegen, ohne, um, durch</strong></p>
                <ul className="text-sm space-y-1">
                  <li><em>für den Vater</em></li>
                  <li><em>ohne mich</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prépositions + Datif</h4>
                <p className="mb-2"><strong>aus, bei, mit, nach, seit, von, zu</strong></p>
                <ul className="text-sm space-y-1">
                  <li><em>mit dem Auto</em></li>
                  <li><em>bei den Eltern</em></li>
                  <li><em>von einem Nachbarn</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prépositions mixtes</h4>
                <p className="mb-2"><strong>an, auf, hinter, in, neben, über, unter, vor, zwischen</strong></p>
                <ul className="text-sm space-y-1">
                  <li><strong>Mouvement</strong> → <em>Ich gehe in die Stadt</em></li>
                  <li><strong>Position</strong> → <em>Ich wohne in der Stadt</em></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. Temps verbaux */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">5. Temps Verbaux</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Parfait (langue parlée)</h4>
                <p className="mb-2"><strong>haben/sein + participe passé</strong></p>
                <ul className="text-sm space-y-1">
                  <li><em>Ich habe gearbeitet</em></li>
                  <li><em>Er ist gekommen</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prétérit (langue écrite)</h4>
                <ul className="text-sm space-y-1">
                  <li><em>Er war jung</em></li>
                  <li><em>Sie ging zur Schule</em></li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Concordance des temps</h4>
              <p className="text-yellow-700">Dans les subordonnées au passé :</p>
              <p className="text-sm"><em>Als wir ihn anriefen, wartete er noch auf die Ergebnisse</em></p>
            </div>
          </CardContent>
        </Card>

        {/* 6. Infinitives avec "zu" */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">6. Infinitives avec "ZU"</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Constructions courantes</h4>
            <ul className="space-y-2 mb-4">
              <li><strong>versuchen zu</strong> : <em>Ich versuche zu schlafen</em></li>
              <li><strong>beschließen zu</strong> : <em>Er beschloss zu bleiben</em></li>
              <li><strong>um... zu</strong> (pour) : <em>Ich komme, um zu helfen</em></li>
              <li><strong>ohne... zu</strong> (sans) : <em>Er ging weg, ohne zu grüßen</em></li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-medium text-red-800 mb-2">⚠️ Attention</h5>
              <p className="text-red-700">Pas de zu avec les modaux !</p>
              <p className="text-sm">✅ Ich kann schwimmen (pas zu schwimmen)</p>
            </div>
          </CardContent>
        </Card>

        {/* 7. Subjonctif II */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">7. Subjonctif II (Hypothèse, Politesse)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Formation</h4>
                <p className="mb-2"><strong>Würde + infinitif</strong> (forme courante) :</p>
                <ul className="text-sm space-y-1">
                  <li><em>Ich würde gern kommen</em></li>
                  <li><em>Wir würden das machen</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Formes courtes</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>sein → wäre</strong> : <em>Wenn ich reich wäre...</em></li>
                  <li><strong>haben → hätte</strong> : <em>Wenn ich Zeit hätte...</em></li>
                  <li><strong>können → könnte</strong> : <em>Du könntest kommen</em></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8. Verbes à particules */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">8. Verbes à Particules</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Particules séparables</h4>
            <div className="space-y-4">
              <div>
                <p><strong>Position</strong> : En fin de phrase principale</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li><em>Er steht um 7 Uhr auf</em></li>
                  <li><em>Sie gibt das Buch zurück</em></li>
                </ul>
              </div>

              <div>
                <p><strong>Au parfait</strong> : Particule + ge + verbe</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li><em>aufstehen → aufgestanden</em></li>
                  <li><em>zurückgeben → zurückgegeben</em></li>
                </ul>
              </div>

              <div>
                <p><strong>En subordonnée</strong> : Particule attachée</p>
                <p className="text-sm ml-4"><em>Ich weiß, dass er früh aufsteht</em></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 9. Pronoms relatifs */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">9. Pronoms Relatifs</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Déclinaison selon la fonction</h4>
            <ul className="space-y-2">
              <li><strong>Sujet</strong> : <em>der Mann, der dort steht</em></li>
              <li><strong>COD</strong> : <em>das Buch, das ich lese</em></li>
              <li><strong>COI</strong> : <em>die Frau, der ich helfe</em></li>
              <li><strong>Génitif</strong> : <em>der Mann, dessen Auto kaputt ist</em></li>
            </ul>
          </CardContent>
        </Card>

        {/* 10. Comparatifs et superlatifs */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">10. Comparatifs et Superlatifs</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Structures avec "je... desto"</h4>
            <p className="mb-2"><strong>Je + comparatif + verbe, desto + comparatif + verbe</strong></p>
            <ul className="space-y-2">
              <li><em>Je älter er wird, desto weiser wird er</em></li>
              <li><em>Je mehr ich lerne, desto besser werden meine Noten</em></li>
            </ul>
          </CardContent>
        </Card>

        {/* 11. Négation */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">11. Négation</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">"nicht" (négation générale)</h4>
                <p className="mb-2">Après COD défini</p>
                <p className="text-sm"><em>Ich kenne ihn nicht</em></p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">"kein" (négation nominale)</h4>
                <p className="mb-2">Devant noms indéfinis</p>
                <ul className="text-sm space-y-1">
                  <li><em>Ich habe keine Zeit</em></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 12. Constructions courantes à retenir */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">12. Constructions Courantes à Retenir</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Expressions de temps</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>seit + présent</strong> : <em>Seit drei Jahren lerne ich Deutsch</em></li>
                  <li><strong>vor + datif</strong> : <em>vor zwei Jahren</em></li>
                  <li><strong>in + datif (futur)</strong> : <em>in einem Jahr</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Verbes de modalité</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>müssen</strong> (falloir) : <em>Du musst kommen</em></li>
                  <li><strong>sollen</strong> (devoir moral) : <em>Du sollst das machen</em></li>
                  <li><strong>können</strong> (pouvoir) : <em>Ich kann schwimmen</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Constructions avec "es"</h4>
                <ul className="text-sm space-y-1">
                  <li><em>es fällt mir schwer</em> (j'ai du mal à)</li>
                  <li><em>es ist wichtig, dass...</em> (il est important que)</li>
                  <li><em>es gibt</em> (il y a)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 13. Voix passive */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">13. Voix Passive</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Passif d'action (Vorgangspassiv)</h4>
                <p className="mb-2"><strong>Formation :</strong> werden + participe passé</p>
                <ul className="text-sm space-y-1">
                  <li><strong>Présent :</strong> <em>Das Buch wird gelesen</em></li>
                  <li><strong>Parfait :</strong> <em>Das Buch ist gelesen worden</em></li>
                  <li><strong>Prétérit :</strong> <em>Das Buch wurde gelesen</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Passif d'état (Zustandspassiv)</h4>
                <p className="mb-2"><strong>Formation :</strong> sein + participe passé</p>
                <p className="text-sm"><em>Die Tür ist geöffnet</em> (état résultant)</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-700 mb-3">Complément d'agent :</h4>
              <ul className="text-sm space-y-1">
                <li><strong>von + datif</strong> (agent animé) : <em>von dem Lehrer</em></li>
                <li><strong>durch + accusatif</strong> (moyen) : <em>durch den Wind</em></li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 14. Adjectifs épithètes */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">14. Adjectifs Épithètes</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Déclinaison forte (sans article)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-orange-200">
                    <thead>
                      <tr className="bg-orange-50">
                        <th className="border border-orange-200 p-2 text-left">Cas</th>
                        <th className="border border-orange-200 p-2 text-left">Masc.</th>
                        <th className="border border-orange-200 p-2 text-left">Neutre</th>
                        <th className="border border-orange-200 p-2 text-left">Fém.</th>
                        <th className="border border-orange-200 p-2 text-left">Pluriel</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-orange-200 p-2">Nom.</td><td className="border border-orange-200 p-2">guter</td><td className="border border-orange-200 p-2">gutes</td><td className="border border-orange-200 p-2">gute</td><td className="border border-orange-200 p-2">gute</td></tr>
                      <tr><td className="border border-orange-200 p-2">Acc.</td><td className="border border-orange-200 p-2">guten</td><td className="border border-orange-200 p-2">gutes</td><td className="border border-orange-200 p-2">gute</td><td className="border border-orange-200 p-2">gute</td></tr>
                      <tr><td className="border border-orange-200 p-2">Dat.</td><td className="border border-orange-200 p-2">gutem</td><td className="border border-orange-200 p-2">gutem</td><td className="border border-orange-200 p-2">guter</td><td className="border border-orange-200 p-2">guten</td></tr>
                      <tr><td className="border border-orange-200 p-2">Gén.</td><td className="border border-orange-200 p-2">guten</td><td className="border border-orange-200 p-2">guten</td><td className="border border-orange-200 p-2">guter</td><td className="border border-orange-200 p-2">guter</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Déclinaison faible (avec article défini)</h4>
                <p className="text-sm"><em>der gute Mann, das gute Kind, die gute Frau</em></p>
                <p className="text-sm"><em>den guten Mann, dem guten Mann</em></p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Déclinaison mixte (avec ein, mein, etc.)</h4>
                <p className="text-sm"><em>ein guter Mann, eine gute Frau</em></p>
                <p className="text-sm"><em>meinem guten Freund</em></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 15. Propositions participiales */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">15. Propositions Participiales</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Participe présent</h4>
                <p className="mb-2"><strong>Formation :</strong> infinitif + -d</p>
                <ul className="text-sm space-y-1">
                  <li><em>der kommende Zug</em> (le train qui arrive)</li>
                  <li><em>die arbeitenden Menschen</em> (les gens qui travaillent)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Participe passé adjectivé</h4>
                <ul className="text-sm space-y-1">
                  <li><em>ein geschriebener Brief</em> (une lettre écrite)</li>
                  <li><em>die geschlossene Tür</em> (la porte fermée)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 16. Discours rapporté (Subjonctif I) */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">16. Discours Rapporté (Subjonctif I)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div>
              <h4 className="font-semibold text-orange-700 mb-3">Formation et usage</h4>
              <p className="mb-2"><strong>Subjonctif I :</strong> pour rapporter des paroles</p>
              <ul className="space-y-1 mb-4">
                <li><em>Er sagte, er habe keine Zeit</em></li>
                <li><em>Sie behauptete, sie sei krank</em></li>
              </ul>

              <p className="mb-2"><strong>Si forme identique à l'indicatif → Subjonctif II :</strong></p>
              <p className="text-sm"><em>Sie sagten, sie hätten keine Zeit</em> (au lieu de haben)</p>
            </div>
          </CardContent>
        </Card>

        {/* 17. Constructions avec double infinitif */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">17. Constructions avec Double Infinitif</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Verbes de modalité au parfait</h4>
                <p className="mb-2"><strong>Ordre :</strong> haben + infinitif + infinitif modal</p>
                <ul className="text-sm space-y-1">
                  <li><em>Ich habe kommen können</em> (j'ai pu venir)</li>
                  <li><em>Er hat arbeiten müssen</em> (il a dû travailler)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Verbes de perception</h4>
                <ul className="text-sm space-y-1">
                  <li><em>Ich habe ihn kommen sehen</em> (je l'ai vu venir)</li>
                  <li><em>Wir haben sie singen hören</em> (nous l'avons entendue chanter)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 18. Constructions avec "lassen" */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">18. Constructions avec "LASSEN"</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Sens causatif (faire faire)</h4>
                <ul className="text-sm space-y-1">
                  <li><em>Ich lasse das Auto reparieren</em> (je fais réparer la voiture)</li>
                  <li><em>Er lässt sich die Haare schneiden</em> (il se fait couper les cheveux)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Sens permissif (laisser)</h4>
                <p className="text-sm"><em>Die Mutter lässt das Kind spielen</em> (la mère laisse l'enfant jouer)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 19. Constructions avec "haben/sein + zu + infinitif" */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">19. Constructions avec "HABEN/SEIN + ZU + INFINITIF"</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Obligation/Possibilité</h4>
            <ul className="space-y-1">
              <li><em>Ich habe noch viel zu tun</em> (j'ai encore beaucoup à faire)</li>
              <li><em>Das ist nicht zu verstehen</em> (ce n'est pas à comprendre/compréhensible)</li>
            </ul>
          </CardContent>
        </Card>

        {/* 20. Gérondif et participe présent */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">20. Gérondif et Participe Présent</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Constructions avec beim, während</h4>
            <ul className="space-y-1">
              <li><em>Beim Lesen lernt man viel</em> (en lisant, on apprend beaucoup)</li>
              <li><em>Während des Essens sprechen wir nicht</em> (pendant que nous mangeons)</li>
            </ul>
          </CardContent>
        </Card>

        {/* 21. Propositions consécutives et comparatives */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">21. Propositions Consécutives et Comparatives</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">so... dass (si... que)</h4>
                <p className="text-sm"><em>Er ist so müde, dass er schläft</em></p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">als ob/als wenn (comme si)</h4>
                <ul className="text-sm space-y-1">
                  <li><em>Er tut, als ob er mich nicht kennen würde</em></li>
                  <li><em>Er tut, als würde er mich nicht kennen</em></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 22. Expressions idiomatiques récurrentes */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">22. Expressions Idiomatiques Récurrentes</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Constructions avec es</h4>
                <ul className="text-sm space-y-1">
                  <li><em>Es fällt mir schwer zu...</em> (j'ai du mal à...)</li>
                  <li><em>Es geht um...</em> (il s'agit de...)</li>
                  <li><em>Es handelt sich um...</em> (il s'agit de...)</li>
                  <li><em>Es kommt darauf an...</em> (cela dépend de...)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Constructions avec datif</h4>
                <ul className="text-sm space-y-1">
                  <li><em>Das gefällt mir sehr</em> (cela me plaît beaucoup)</li>
                  <li><em>Das passiert mir oft</em> (cela m'arrive souvent)</li>
                  <li><em>Es tut mir leid</em> (je suis désolé)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 23. Conjonctions et connecteurs logiques */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">23. Conjonctions et Connecteurs Logiques</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Conjonctions de coordination</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>aber</strong> (mais) : <em>Ich komme, aber ich bin müde</em></li>
                  <li><strong>denn</strong> (car) : <em>Ich bleibe, denn es regnet</em></li>
                  <li><strong>sondern</strong> (mais au contraire) : <em>Nicht heute, sondern morgen</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Conjonctions à double éléments</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>nicht nur... sondern auch</strong> (non seulement... mais aussi)</li>
                  <li><strong>entweder... oder</strong> (soit... soit)</li>
                  <li><strong>weder... noch</strong> (ni... ni)</li>
                  <li><strong>sowohl... als auch</strong> (aussi bien... que)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 24. Structures temporelles complexes */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">24. Structures Temporelles Complexes</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Antériorité avec nachdem</h4>
                <ul className="text-sm space-y-1">
                  <li><em>Nachdem er gegessen hatte, ging er spazieren</em></li>
                  <li><em>Nachdem sie angekommen ist, ruft sie an</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Simultanéité avec während</h4>
                <p className="text-sm"><em>Während ich arbeite, hört er Musik</em></p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Postériorité avec bevor/ehe</h4>
                <p className="text-sm"><em>Bevor du gehst, räum auf</em></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 25. Constructions avec prépositions complexes */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">25. Constructions avec Prépositions Complexes</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prépositions à sens figuré</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>trotz + génitif</strong> (malgré) : <em>trotz des Regens</em></li>
                  <li><strong>wegen + génitif</strong> (à cause de) : <em>wegen der Krise</em></li>
                  <li><strong>aufgrund + génitif</strong> (en raison de) : <em>aufgrund seiner Erfahrung</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prépositions + infinitif</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>um... zu</strong> (pour) : <em>um zu lernen</em></li>
                  <li><strong>ohne... zu</strong> (sans) : <em>ohne zu sprechen</em></li>
                  <li><strong>anstatt... zu</strong> (au lieu de) : <em>anstatt zu arbeiten</em></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 26. Régimes verbaux particuliers */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">26. Régimes Verbaux Particuliers</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Verbes + préposition fixe</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>denken an + acc.</strong> : <em>Ich denke an dich</em></li>
                  <li><strong>sich interessieren für + acc.</strong> : <em>Er interessiert sich für Sport</em></li>
                  <li><strong>sich beschäftigen mit + dat.</strong> : <em>Sie beschäftigt sich mit Musik</em></li>
                  <li><strong>bestehen aus + dat.</strong> : <em>Das Team besteht aus zehn Spielern</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Constructions réfléchies</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>sich freuen auf + acc.</strong> (se réjouir de - futur)</li>
                  <li><strong>sich freuen über + acc.</strong> (se réjouir de - présent)</li>
                  <li><strong>sich ärgern über + acc.</strong> (s'énerver contre)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs fréquentes à éviter */}
        <Card className="border-2 border-red-300 bg-red-50">
          <CardHeader className="bg-gradient-to-r from-red-100 to-red-200">
            <CardTitle className="text-2xl text-red-800">❌ ERREURS FRÉQUENTES À ÉVITER</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-red-700">
                <li>• Oubli de l'inversion après complément initial</li>
                <li>• Mauvais cas après prépositions ou verbes</li>
                <li>• Verbe mal placé en subordonnée</li>
                <li>• Confusion temps (parfait/prétérit)</li>
                <li>• Oubli du "zu" dans les infinitives</li>
                <li>• Mauvaise concordance des temps</li>
                <li>• Particules séparables mal placées</li>
                <li>• Négation (nicht vs kein)</li>
              </ul>
              <ul className="space-y-2 text-red-700">
                <li>• Pronoms relatifs mal déclinés</li>
                <li>• Ordre des mots dans les constructions complexes</li>
                <li>• Déclinaison des adjectifs épithètes</li>
                <li>• Régimes verbaux (prépositions fixes)</li>
                <li>• Confusion passif d'action/état</li>
                <li>• Double infinitif mal construit</li>
                <li>• Subjonctif I/II dans le discours rapporté</li>
                <li>• Constructions avec "lassen"</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Link to="/methodologie/grammaire">
          <Button variant="outline" className="border-[#ff9100] text-[#ff9100] hover:bg-[#ff9100] hover:text-white">
            ← Retour aux fiches de grammaire
          </Button>
        </Link>
      </div>
    </div>
  );
};

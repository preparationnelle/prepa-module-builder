
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, AlertCircle } from "lucide-react";

export const MethodGrammairePassifPage = () => {
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
        Le Passif Allemand
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Formation et utilisation du passif</p>
          <p className="text-muted-foreground">
            Guide complet pour maîtriser le passif d'action et le passif d'état en allemand.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Formation du passif */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              1. Formation du passif d'action (Vorgangspassiv)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Formule de base</h4>
                <p className="text-blue-700 text-lg">
                  <strong>werden + participe passé</strong>
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Transformation actif → passif</h4>
                <div className="space-y-3">
                  <div className="bg-green-100 p-3 rounded">
                    <p className="font-medium text-green-800">Actif :</p>
                    <p className="text-green-700">Der Lehrer erklärt die Lektion.</p>
                    <p className="text-sm text-green-600">(Le professeur explique la leçon.)</p>
                  </div>
                  <div className="text-center">↓</div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="font-medium text-blue-800">Passif :</p>
                    <p className="text-blue-700">Die Lektion wird (vom Lehrer) erklärt.</p>
                    <p className="text-sm text-blue-600">(La leçon est expliquée (par le professeur).)</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">🔄 Changements importants</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Le <strong>COD</strong> devient <strong>sujet</strong> (nominatif)</li>
                  <li>• Le <strong>sujet</strong> devient complément avec <strong>"von"</strong> (datif)</li>
                  <li>• Le <strong>verbe</strong> devient <strong>participe passé</strong></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conjugaison du passif */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              2. Conjugaison du passif aux différents temps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Présent passif</h4>
                <p className="text-blue-700 mb-2"><strong>werden + participe passé</strong></p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p><strong>ich werde</strong> gefragt</p>
                    <p><strong>du wirst</strong> gefragt</p>
                    <p><strong>er wird</strong> gefragt</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>wir werden</strong> gefragt</p>
                    <p><strong>ihr werdet</strong> gefragt</p>
                    <p><strong>sie werden</strong> gefragt</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Parfait passif</h4>
                <p className="text-green-700 mb-2"><strong>sein + participe passé + worden</strong></p>
                <div className="space-y-1 text-sm">
                  <p><strong>Das Haus ist</strong> gebaut <strong>worden</strong>.</p>
                  <p className="text-muted-foreground">(La maison a été construite.)</p>
                  <p><strong>Die Aufgabe ist</strong> gemacht <strong>worden</strong>.</p>
                  <p className="text-muted-foreground">(Le devoir a été fait.)</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">Prétérit passif</h4>
                <p className="text-yellow-700 mb-2"><strong>wurde + participe passé</strong></p>
                <div className="space-y-1 text-sm">
                  <p><strong>Das Buch wurde</strong> gelesen.</p>
                  <p className="text-muted-foreground">(Le livre était/fut lu.)</p>
                  <p><strong>Die Briefe wurden</strong> geschrieben.</p>
                  <p className="text-muted-foreground">(Les lettres étaient/furent écrites.)</p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Futur passif</h4>
                <p className="text-purple-700 mb-2"><strong>werden + participe passé + werden</strong></p>
                <div className="space-y-1 text-sm">
                  <p><strong>Das Problem wird</strong> gelöst <strong>werden</strong>.</p>
                  <p className="text-muted-foreground">(Le problème sera résolu.)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passif d'état */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <AlertCircle className="h-6 w-6" />
              3. Le passif d'état (Zustandspassiv)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-2">Formation</h4>
                <p className="text-red-700 text-lg">
                  <strong>sein + participe passé</strong>
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Différence action vs état</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-100 p-3 rounded">
                    <h5 className="font-medium text-blue-800">Passif d'action</h5>
                    <p className="text-blue-700 text-sm mb-1"><strong>Das Fenster wird geöffnet.</strong></p>
                    <p className="text-blue-600 text-xs">(La fenêtre est en train d'être ouverte.)</p>
                    <p className="text-blue-600 text-xs">→ Action en cours</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <h5 className="font-medium text-green-800">Passif d'état</h5>
                    <p className="text-green-700 text-sm mb-1"><strong>Das Fenster ist geöffnet.</strong></p>
                    <p className="text-green-600 text-xs">(La fenêtre est ouverte.)</p>
                    <p className="text-green-600 text-xs">→ État résultant</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Exemples courants</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• <strong>Die Tür ist geschlossen.</strong> (La porte est fermée.)</li>
                  <li>• <strong>Das Auto ist repariert.</strong> (La voiture est réparée.)</li>
                  <li>• <strong>Die Aufgabe ist erledigt.</strong> (Le devoir est terminé.)</li>
                  <li>• <strong>Das Problem ist gelöst.</strong> (Le problème est résolu.)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complément d'agent */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              4. Le complément d'agent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Pour exprimer "par qui" l'action est faite dans une phrase passive.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">VON + datif</h4>
                  <p className="text-blue-700 mb-2">Pour les <strong>personnes</strong> et <strong>êtres vivants</strong></p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Das Lied wird <strong>von der Sängerin</strong> gesungen.</li>
                    <li>• Der Brief wurde <strong>von meinem Bruder</strong> geschrieben.</li>
                    <li>• Das Haus ist <strong>von Arbeitern</strong> gebaut worden.</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">DURCH + accusatif</h4>
                  <p className="text-green-700 mb-2">Pour les <strong>moyens</strong> et <strong>causes</strong></p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Das Haus wurde <strong>durch ein Feuer</strong> zerstört.</li>
                    <li>• Die Nachricht wird <strong>durch das Radio</strong> verbreitet.</li>
                    <li>• Der Unfall wurde <strong>durch Nebel</strong> verursacht.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">MIT + datif</h4>
                <p className="text-yellow-700 mb-2">Pour les <strong>instruments</strong> et <strong>outils</strong></p>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• Der Baum wird <strong>mit einer Säge</strong> gefällt.</li>
                  <li>• Das Brot wird <strong>mit einem Messer</strong> geschnitten.</li>
                  <li>• Der Text wurde <strong>mit dem Computer</strong> geschrieben.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passif impersonnel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              5. Le passif impersonnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Utilisé avec des verbes intransitifs (sans COD) pour exprimer une action générale.
              </p>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Formation : Es wird + participe passé</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Es wird</strong> viel getanzt. <span className="text-muted-foreground">(On danse beaucoup.)</span></p>
                  <p><strong>Es wird</strong> hier gearbeitet. <span className="text-muted-foreground">(On travaille ici.)</span></p>
                  <p><strong>Es wird</strong> über Politik gesprochen. <span className="text-muted-foreground">(On parle de politique.)</span></p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Sans "es" en début de phrase</h4>
                <p className="text-blue-700 mb-2">Quand un autre élément commence la phrase, "es" disparaît :</p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• <strong>Hier wird</strong> viel gearbeitet.</li>
                  <li>• <strong>Gestern wurde</strong> bis spät getanzt.</li>
                  <li>• <strong>In der Schule wird</strong> Deutsch gelernt.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alternatives au passif */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <AlertCircle className="h-6 w-6" />
              6. Alternatives au passif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">sich lassen + infinitif</h4>
                <p className="text-green-700 mb-2">Exprime la possibilité passive</p>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• <strong>Das lässt sich machen.</strong> (Cela peut se faire.)</li>
                  <li>• <strong>Der Text lässt sich gut lesen.</strong> (Le texte se lit bien.)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">sein + zu + infinitif</h4>
                <p className="text-blue-700 mb-2">Exprime l'obligation ou la possibilité</p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• <strong>Die Aufgabe ist zu lösen.</strong> (Le devoir doit être résolu.)</li>
                  <li>• <strong>Das Problem ist nicht zu verstehen.</strong> (Le problème ne peut pas être compris.)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Forme réfléchie</h4>
                <p className="text-yellow-700 mb-2">Avec certains verbes</p>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• <strong>Das Buch verkauft sich gut.</strong> (Le livre se vend bien.)</li>
                  <li>• <strong>Die Tür öffnet sich automatisch.</strong> (La porte s'ouvre automatiquement.)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils pratiques */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💡 Conseils d'utilisation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Quand utiliser le passif</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• L'agent n'est pas important</li>
                    <li>• On veut mettre l'accent sur le résultat</li>
                    <li>• Dans les textes techniques/officiels</li>
                    <li>• Pour varier le style</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Erreurs courantes</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Confondre "werden" et "sein"</li>
                    <li>• Oublier "worden" au parfait</li>
                    <li>• Mal choisir von/durch/mit</li>
                    <li>• Abuser du passif (lourdeur)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🎯 Méthode de révision</h4>
                <ol className="list-decimal list-inside text-blue-700 text-sm space-y-1">
                  <li>Maîtriser la conjugaison de "werden"</li>
                  <li>S'entraîner aux transformations actif→passif</li>
                  <li>Distinguer passif d'action et passif d'état</li>
                  <li>Pratiquer les compléments d'agent</li>
                </ol>
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

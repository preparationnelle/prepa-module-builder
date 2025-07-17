import { Card, CardContent } from "@/components/ui/card";
import { Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PitchIntroMethodePage = () => (
  <div className="min-h-screen bg-background py-12 px-4">
    <div className="max-w-2xl mx-auto">
      {/* Header section, orange background */}
      <div className="flex items-center gap-4 rounded-t-lg px-6 py-5" style={{ background: "#FFFAF3" }}>
        <div className="bg-orange-100 rounded-full p-2 flex items-center justify-center">
          <Megaphone className="h-7 w-7 text-orange-600" />
        </div>
        <h1 className="text-3xl font-bold text-orange-700">
          Réussir son Pitch d’introduction
        </h1>
      </div>
      <Card className="-mt-2 shadow-lg">
        <CardContent className="p-8">
          {/* Pourquoi le pitch est crucial */}
          <section className="mb-7">
            <h2 className="text-xl font-semibold mb-2">Pourquoi le pitch est crucial</h2>
            <p>
              Le pitch d’introduction est le moment charnière de l’entretien de personnalité. Il donne la première impression et définit aussi le terrain de jeu : 
              <span className="font-semibold"> les éléments que tu choisis de mettre en avant seront ceux que le jury explorera ensuite.</span>
            </p>
            <p className="mt-2 font-bold">
              Le pitch n’est pas un résumé de CV, ni un simple “je me présente” scolaire.
            </p>
          </section>

          {/* Le but */}
          <section className="mb-7">
            <h3 className="text-lg font-semibold mb-1">Le but</h3>
            <p>
              Donner envie au jury de te découvrir. 
              <span className="block">Pas tout dire. Juste susciter des questions.</span>
            </p>
          </section>

          {/* Les erreurs à éviter */}
          <section className="mb-7">
            <h3 className="text-lg font-semibold mb-3">Les erreurs à éviter</h3>
            <ul className="space-y-1">
              <li className="flex items-center gap-2 text-red-600 font-medium">❌ Faire une chronologie scolaire (« J’ai fait une prépa ECG… »)</li>
              <li className="flex items-center gap-2 text-red-600 font-medium">❌ Réciter une lettre de motivation orale</li>
              <li className="flex items-center gap-2 text-red-600 font-medium">❌ Parler comme si tu écrivais un devoir</li>
              <li className="flex items-center gap-2 text-red-600 font-medium">❌ Tout dévoiler dès le départ</li>
              <li className="flex items-center gap-2 text-red-600 font-medium">❌ Être lisse et impersonnel</li>
            </ul>
          </section>

          {/* Les objectifs d’un bon pitch */}
          <section className="mb-7">
            <h3 className="text-lg font-semibold mb-2">Les 4 objectifs d’un bon pitch</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Captiver dès les premières secondes.</li>
              <li>Montrer qui tu es, pas ce que tu as fait.</li>
              <li>Faire sentir un moteur intérieur (passion, ambition, curiosité).</li>
              <li>Créer du mystère pour donner envie d’en savoir plus.</li>
            </ul>
          </section>

          {/* Structure du pitch */}
          <section className="mb-7">
            <h3 className="text-lg font-semibold mb-2">Structure simple et efficace</h3>
            <ol className="space-y-3 list-decimal pl-6">
              <li>
                <span className="font-bold">Une accroche personnelle</span><br />
                <span className="italic">
                  Commence par une phrase qui te situe humainement : anecdote, dualité, trait…
                </span>
                <div className="mt-1 text-muted-foreground">
                  Exemple : “Ce qui me définit, c’est ma curiosité constante pour les autres cultures…”
                </div>
              </li>
              <li>
                <span className="font-bold">Une expérience ou engagement fondateur</span><br /> 
                <span className="italic">Suggère une histoire que le jury pourra creuser.</span>
                <div className="mt-1 text-muted-foreground">
                  Exemple : “Pendant 6 ans, j’ai été bénévole dans un club de débat…”
                </div>
              </li>
              <li>
                <span className="font-bold">Une direction professionnelle</span><br /> 
                <span className="italic">Projette une intention, sans prétendre tout maîtriser.</span>
                <div className="mt-1 text-muted-foreground">
                  Exemple : “Je m’intéresse aujourd’hui à l’entrepreneuriat social…”
                </div>
              </li>
              <li>
                <span className="font-bold">Une connexion avec l’école</span><br />
                <span className="italic">Montre que ton profil résonne avec les valeurs de l’école.</span>
                <div className="mt-1 text-muted-foreground">
                  Exemple : “C’est pour cette raison que je me tourne vers l’ESCP…”
                </div>
              </li>
            </ol>
          </section>

          {/* Le ton à adopter */}
          <section className="mb-7">
            <h3 className="text-lg font-semibold mb-2">Le bon ton à adopter</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Naturel : tu parles, tu ne récites pas.</li>
              <li>Sincère, sobrement enthousiaste.</li>
              <li>Ouvert, tu invites au dialogue.</li>
            </ul>
          </section>

          {/* Bonus astuces */}
          <section className="mb-7">
            <h3 className="text-lg font-semibold mb-2">Bonus : astuces pour un pitch qui marque</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Laisse des silences pour créer du rythme</li>
              <li>Prépare une version courte (1 min) et une longue (2 min)</li>
              <li>Teste-le auprès de plusieurs personnes</li>
              <li>Enregistre-toi pour t’écouter</li>
              <li>Mémorise les idées, pas les phrases</li>
            </ul>
          </section>

          {/* En résumé */}
          <section>
            <h3 className="text-lg font-semibold mb-2">En résumé</h3>
            <div className="overflow-x-auto">
              <table className="w-full border text-sm text-left">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-2 border">Ce que ce n’est pas</th>
                    <th className="p-2 border">Ce que c’est</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Un CV récité</td>
                    <td className="p-2 border">Une histoire personnelle vivante</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Une lettre de motivation</td>
                    <td className="p-2 border">Une invitation à discuter</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Une chronologie scolaire</td>
                    <td className="p-2 border">Un miroir de tes valeurs</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Un discours fermé</td>
                    <td className="p-2 border">Un tremplin pour le dialogue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </CardContent>
      </Card>
      <div className="text-center mt-6">
        <Button asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default PitchIntroMethodePage;


import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { 
  BookOpen, 
  MoveUpRight, 
  BadgeCheck, 
  MessageCircle, 
  Heart, 
  Clock, 
  ListChecks 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const StorytellingMethodePage = () => {
  return (
    <div className="min-h-screen bg-accent">
      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <Link to="/methodes" className="text-primary hover:underline mb-4 flex items-center">
              <MoveUpRight className="h-4 w-4 mr-1" /> Retour aux méthodes
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Storytelling : transformer vos expériences passées en émotions convaincantes
            </h1>
            <p className="text-muted-foreground max-w-3xl mb-6">
              Guide pratique pour réussir l'entretien de personnalité en école de commerce
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          
          {/* Section 1 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <BadgeCheck className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">1. Pourquoi le storytelling est-il indispensable ?</h2>
            </div>
            <p className="mb-4">
              Lors d'un entretien, le jury ne se souviendra pas de la liste de vos stages mais des émotions qu'il aura ressenties : curiosité, admiration, complicité…
            </p>
            <p className="mb-2">Le storytelling sert à :</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Accrocher :</strong> une histoire vivante capte l'attention dès les 30 premières secondes.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Faire ressentir :</strong> la mémoire humaine retient 6× mieux un fait associé à une émotion.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Prouver sans se vanter :</strong> un récit montre vos qualités (leadership, résilience) plutôt que de les énoncer platement.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span><strong>Différencier :</strong> deux dossiers se ressemblent, deux histoires jamais.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <BookOpen className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">2. Les 5 briques d'un récit efficace (méthode C-C-A-R-E)</h2>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lettre</TableHead>
                    <TableHead>Rôle</TableHead>
                    <TableHead>Questions à se poser</TableHead>
                    <TableHead>Indice émotionnel</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Contexte</TableCell>
                    <TableCell>Situer le décor</TableCell>
                    <TableCell>Où ? Quand ? Qui ?</TableCell>
                    <TableCell>20 %</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Conflit</TableCell>
                    <TableCell>Créer la tension</TableCell>
                    <TableCell>Quel obstacle inattendu ?</TableCell>
                    <TableCell>30 %</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Actions</TableCell>
                    <TableCell>Montrer votre part</TableCell>
                    <TableCell>Qu'avez-vous tenté, décidé, créé ?</TableCell>
                    <TableCell>25 %</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Résultat</TableCell>
                    <TableCell>Prouver l'impact</TableCell>
                    <TableCell>Chiffres, reconnaissance, leçon ?</TableCell>
                    <TableCell>15 %</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Emotion</TableCell>
                    <TableCell>Humaniser</TableCell>
                    <TableCell>Comment vous vous sentiez ? Comment ont réagi les autres ?</TableCell>
                    <TableCell>10 %</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <ListChecks className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">3. Inventaire d'expériences à convertir en récits</h2>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="bg-primary/10 p-1 rounded-full mr-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Jobs d'été : vente, restauration, animation.</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-1 rounded-full mr-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Projets associatifs : BDE, humanitaire, événement sportif.</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-1 rounded-full mr-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Initiatives personnelles : micro-entreprise, blog, podcast.</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-1 rounded-full mr-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Échecs : compétition perdue, crowdfunding raté, bug en ligne.</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-1 rounded-full mr-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Moments charnières : déménagement, changement d'orientation, rencontre inspirante.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <MessageCircle className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">4. Exemple « top mais trop factuel » (à NE PAS reproduire)</h2>
            </div>
            <div className="bg-muted p-4 rounded-md mb-4">
              <p className="italic">
                « J'ai organisé une course solidaire qui a réuni 200 participants et rapporté 3 000 € à une association. 
                J'ai dirigé l'équipe logistique et communiqué sur Instagram. J'ai ainsi montré mon leadership et ma capacité à gérer un budget. »
              </p>
            </div>
            <p className="flex items-center text-green-600 mb-1">
              <BadgeCheck className="h-4 w-4 mr-1" /> Chiffres clairs.
            </p>
            <p className="flex items-center text-red-500">
              <span className="font-bold text-lg mr-1">✗</span> Aucun suspense ; émotions absentes ; on ne VOIT pas la scène.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <MessageCircle className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">5. Exemple de storytelling réussi (même expérience)</h2>
            </div>
            <Card className="mb-4 bg-accent/50 border-0">
              <div className="p-4">
                <p className="mb-2"><strong className="text-primary">Contexte</strong> – « Un vendredi de mars, la météo annonce des rafales de 70 km/h ; je suis devant le gymnase, 7 h du matin, carton de dossards sous le bras. Ma course solidaire, préparée depuis quatre mois, risque de s'envoler au sens propre… »</p>
                <p className="mb-2"><strong className="text-primary">Conflit</strong> – « À 8 h, le traiteur annule. Sans ravitaillement, 200 coureurs peuvent rentrer chez eux. Mes deux co-équipiers me regardent : "On fait quoi ?" »</p>
                <p className="mb-2"><strong className="text-primary">Actions</strong> – « Je dégoupille : je publie un SOS sur le groupe Facebook des "Mamans sportives" du quartier ; en dix minutes, cinq personnes proposent gâteaux et thermos. Je réaffecte le budget traiteur à la sécurité (doubler les bénévoles sur le parcours venteux). »</p>
                <p className="mb-2"><strong className="text-primary">Résultat</strong> – « À 10 h, le départ est donné ; sur la ligne d'arrivée, les gobelets de chocolat chaud font un tabac. Nous collectons 3 257 €, soit +8 % par rapport à l'objectif. L'association finance 130 kits scolaires supplémentaires. »</p>
                <p><strong className="text-primary">Émotion/Leçon</strong> – « Ce matin-là, j'ai compris que le leadership, c'est parfois juste accepter de demander de l'aide et de réécrire le plan en 15 minutes. »</p>
              </div>
            </Card>
            <p className="italic">Effet sur le jury : vous l'avez transporté dans la tempête et il se souvient de votre chocolat chaud !</p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <ListChecks className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">6. Construisez vos histoires : check-list pas à pas</h2>
            </div>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Choisissez l'émotion clé : fierté, surprise, détermination…</li>
              <li>Dessinez votre ligne de temps (5 points maxi).</li>
              <li>Insérez un dialogue ou une phrase entendue ce jour-là : instantanéité garantie.</li>
              <li>Mesurez l'impact : chiffre, prix, feed-back (« Merci » écrit, mail…).</li>
              <li>Formulez la leçon : elle doit servir votre projet en école (ex. : apprendre à pivoter, gérer le stress, inspirer une équipe internationale).</li>
            </ol>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <MessageCircle className="text-primary h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">7. Votre tour : questions pour aller plus loin</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Quelles expériences hors prépa vous viennent spontanément quand vous pensez « fierté » ou « frisson » ?</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Dans ces souvenirs, quel moment précis déclenche l'émotion ? (un regard, une phrase, un son ?)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Quel résultat mesurable pouvez-vous ressortir ? (même un tout petit nombre…)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Quelle compétence transférable vers la vie en école de commerce ressort de cette histoire ?</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Souhaitez-vous plutôt un coaching individuel ou un modèle de fiche à remplir pour chaque histoire ?</span>
              </li>
            </ul>
            <div className="mt-4 bg-accent p-4 rounded-md">
              <p className="italic">
                💬 Répondez-moi sur ces 5 points ; je pourrai vous proposer un canevas ultra-personnalisé ou des exercices pour muscler vos propres récits.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <div className="bg-primary/5 p-6 rounded-md">
            <h3 className="font-bold text-xl mb-2">À retenir</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <BadgeCheck className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                <span>Un bon storytelling = émotion + structure + preuve.</span>
              </li>
              <li className="flex items-center">
                <BadgeCheck className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                <span>Avec la méthode C-C-A-R-E, chaque expérience devient un film de 90 secondes qui marquera votre jury… et fera de vous le candidat dont on se rappelle.</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <Button size="lg" className="mr-4">
              Télécharger en PDF
            </Button>
            <Button variant="outline" size="lg">
              Partager
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StorytellingMethodePage;

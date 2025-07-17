import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Mail, FileText } from 'lucide-react';

const MathsEteControlePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Un été pour (re)prendre le contrôle en maths
          </h1>
          <p className="text-xl text-muted-foreground">
            Entre ECG1 et ECG2 : pas d'avance, mais de l'assurance
          </p>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-8">
            
            {/* Section 1 */}
            <section className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">1</span>
                Ce que tu cherches vraiment : être solide
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pas besoin d'ouvrir les chapitres de l'an prochain. À ce stade, ce qui compte, c'est de ne plus douter sur les bases. Comprendre vraiment ce que tu as vu cette année. Te débarrasser de ce sentiment diffus de "je crois que j'ai compris… mais je ne suis pas sûr".
                </p>
                <p>
                  Prends le temps de repasser sur tout : un chapitre tous les deux jours suffit. Pose-toi les bonnes questions. Est-ce que je comprends le sens du théorème ? Est-ce que je saurais le démontrer, ou l'expliquer simplement ? Est-ce que je retombe toujours sur les mêmes erreurs ?
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">2</span>
                Relire ne suffit pas : il faut produire
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tu peux relire ton cours autant que tu veux, ça ne remplacera jamais une rédaction. Quand tu penses avoir compris une méthode ou un résultat, force-toi à l'écrire. Pas juste dans ta tête. Noir sur blanc. Et vérifie que tout est exact.
                </p>
                <p>
                  Quand tu fais un exercice, ce n'est pas grave de te tromper. Ce qui compte, c'est de comprendre pourquoi tu t'es trompé. Et une fois le corrigé bien saisi, refais-le deux ou trois jours plus tard, sans aide.
                </p>
                <p>
                  C'est comme ça que tu construis des réflexes fiables. Pas juste en ayant "vu" les choses une fois.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">3</span>
                Un peu tous les jours vaut mieux qu'un marathon
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Oublie les grosses journées de six heures tous les dix jours. Deux heures par jour, au calme, concentré, sans téléphone, c'est suffisant.
                </p>
                <p>Alterne :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>des moments de cours actif (reformulation, cartes mentales, flashcards si tu aimes ça),</li>
                  <li>et des moments de pratique ciblée (petits exercices, ou gros problème si tu veux te challenger).</li>
                </ul>
                <p>L'important, c'est de faire les deux. Pas l'un sans l'autre.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">4</span>
                N'attends pas la rentrée pour identifier tes lacunes
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tu as du temps maintenant. Si un chapitre t'a toujours paru flou, c'est le moment. Pas de pression. Juste toi, un bon support (DUNO, cours, annales), et une démarche sincère de compréhension.
                </p>
                <p>
                  Évite de "sauter" un thème sous prétexte qu'il est "trop dur". C'est souvent ceux-là qui bloquent tout le reste.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">5</span>
                L'informatique ne s'oublie pas : garde un pied dedans
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Quelques bases à revoir :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>une fonction bien écrite, claire,</li>
                  <li>une boucle for propre, et une boucle while bien construite,</li>
                  <li>la méthode de la dichotomie : comprendre l'idée, savoir la coder sans bug.</li>
                </ul>
                <p>
                  Tu n'as pas besoin de faire des projets complexes. Juste quelques routines bien choisies. Dix minutes tous les deux jours, ça suffit.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">6</span>
                Et surtout…
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ne cherche pas à faire "plus". Cherche à faire mieux. Tu as déjà un programme chargé. L'objectif, ce n'est pas d'en rajouter, mais de renforcer. Tu veux te dire en septembre : "Ok, tout ce que j'ai vu l'an dernier, je le maîtrise."
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-primary/5 rounded-lg p-8 border border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Et si tu veux aller plus loin :</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">
                      Je peux t'envoyer ma fiche complète avec toutes mes méthodes pour progresser en maths.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium mb-3">
                      Et si tu veux organiser ton été avec moi, ou recevoir des conseils dans une autre matière (culture G, éco, langues…), écris-moi. Je répondrai avec plaisir.
                    </p>
                    <Button asChild>
                      <a href="/contact">
                        Me contacter
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MathsEteControlePage;
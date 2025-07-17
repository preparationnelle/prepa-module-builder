import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Clock, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';

const EntretienInverseGEMPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            L'entretien inversé à GEM
          </h1>
          <p className="text-xl text-muted-foreground">
            Guide complet pour réussir cette partie unique de l'oral de GEM
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-primary/5 rounded-lg p-6 border border-primary/20 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Comprendre le format de l'entretien inversé
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              L'entretien inversé à GEM dure 10 minutes et se décompose en 9 minutes d'interview avec un membre du jury de votre choix, suivi d'1 minute de synthèse. Cette partie constitue le cœur original de l'oral de GEM, où vous menez l'entretien en posant des questions sur le parcours professionnel du juré.
            </p>
            <p>
              Il est essentiel d'écouter attentivement les présentations des membres du jury au début pour choisir la personne que vous souhaitez interviewer.
            </p>
          </div>
        </section>

        {/* Questions Section */}
        <section className="space-y-8">
          
          {/* Parcours professionnel */}
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Questions sur le parcours professionnel et scolaire</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Parcours initial et orientation
                </h3>
                <ul className="space-y-2 text-muted-foreground pl-4">
                  <li>• Parlez-moi de vous et de votre parcours en quelques phrases</li>
                  <li>• Qu'est-ce qui a fait que vous avez choisi ce métier/cette voie ?</li>
                  <li>• Comment avez-vous découvert votre secteur d'activité ?</li>
                  <li>• Quel a été votre parcours scolaire et qu'est-ce qui vous a amené jusqu'ici ?</li>
                  <li>• Si vous n'aviez pas intégré telle école/entreprise, que vous manquerait-il aujourd'hui ?</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  Évolution professionnelle
                </h3>
                <ul className="space-y-2 text-muted-foreground pl-4">
                  <li>• Décrivez-moi les grandes étapes de votre carrière professionnelle</li>
                  <li>• Quelle a été votre première expérience professionnelle marquante ?</li>
                  <li>• Pourquoi avez-vous quitté tel poste ou effectué une reconversion ?</li>
                  <li>• De quoi êtes-vous le plus fier dans votre parcours professionnel ?</li>
                  <li>• Parlez-moi d'une expérience où vous avez atteint un objectif que vous pensiez inatteignable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Expérience actuelle */}
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Questions sur l'expérience actuelle</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Poste et responsabilités</h3>
                <ul className="space-y-2 text-muted-foreground pl-4">
                  <li>• Qu'avez-vous apprécié le plus dans votre dernier poste ?</li>
                  <li>• À quoi ressemble votre journée typique ?</li>
                  <li>• Quelles sont vos principales responsabilités actuellement ?</li>
                  <li>• Parlez-moi d'une situation où vous avez démontré vos capacités de leadership/management</li>
                  <li>• Comment un membre de votre équipe vous décrirait-il ?</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Compétences et défis</h3>
                <ul className="space-y-2 text-muted-foreground pl-4">
                  <li>• Quelles compétences font votre vraie valeur ajoutée ? Expliquez-moi concrètement</li>
                  <li>• Quelles ont été les principales difficultés rencontrées dans votre parcours ?</li>
                  <li>• Comment gérez-vous la pression et les défis dans votre métier ?</li>
                  <li>• De quelle négociation êtes-vous le plus fier ?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Questions de réflexion */}
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Questions de réflexion et projection</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Apprentissages et regrets</h3>
                <ul className="space-y-2 text-muted-foreground pl-4">
                  <li>• Si vous pouviez revenir dans le passé, que feriez-vous différemment ?</li>
                  <li>• Quelle est la leçon la plus importante que vous ayez apprise dans votre carrière ?</li>
                  <li>• Quel conseil donneriez-vous à votre moi de 20 ans ?</li>
                  <li>• Qu'est-ce qui vous manquait quand vous avez commencé votre carrière ?</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Vision du secteur et des jeunes diplômés</h3>
                <ul className="space-y-2 text-muted-foreground pl-4">
                  <li>• Qu'attendez-vous d'une personne qui a fait une école de commerce ?</li>
                  <li>• Selon vous, que manque-t-il aux jeunes diplômés aujourd'hui ?</li>
                  <li>• Comment voyez-vous l'évolution de votre secteur dans les prochaines années ?</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Questions personnelles et passions</h3>
                <ul className="space-y-2 text-muted-foreground pl-4">
                  <li>• Quelles sont vos passions et comment vous aident-elles dans votre vie professionnelle ?</li>
                  <li>• Comment maintenez-vous l'équilibre entre vie professionnelle et personnelle ?</li>
                  <li>• Qu'est-ce qui vous motive au quotidien dans votre travail ?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Questions spécifiques */}
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Questions spécifiques selon le profil du juré</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">Pour un entrepreneur</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Qu'est-ce qui vous a poussé à créer votre entreprise ?</li>
                  <li>• Quel a été le plus grand défi lors de la création ?</li>
                  <li>• Comment avez-vous financé votre projet au début ?</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">Pour un manager/dirigeant</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Comment organisez-vous votre équipe et vos projets ?</li>
                  <li>• Quelle est votre philosophie de management ?</li>
                  <li>• Comment motivez-vous vos collaborateurs ?</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">Pour un professionnel international</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Quelles différences avez-vous observées avec les entreprises à l'étranger ?</li>
                  <li>• Comment votre expérience internationale a-t-elle enrichi votre parcours ?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conseils */}
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              Conseils pour réussir l'entretien inversé
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Stratégie de questionnement</h3>
                <p className="text-muted-foreground">
                  Il ne faut pas arriver avec 20 questions préparées à l'avance et les poser une par une, mais au contraire rebondir et adapter les questions à ce que la personne vous dit. Posez des questions en entonnoir et structurées, par exemple sur le passé, puis sur le présent et enfin sur le futur. Prenez des notes brèves pendant l'interview pour faciliter la restitution finale.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Choix du juré</h3>
                <p className="text-muted-foreground">
                  Ne choisissez pas nécessairement la personne qui vous paraît la plus souriante car c'est celle que tous les autres candidats ont dû choisir, mais au contraire choisissez la personne qui paraît plus en retrait et qui a donc dû être moins interrogée. Le choix du juré à interroger est très important car il faut pouvoir tenir 9 minutes d'échange.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Synthèse finale</h3>
                <p className="text-muted-foreground">
                  La minute de synthèse est cruciale : elle doit retracer ce que vous avez compris de la personne interviewée et montrer votre capacité d'écoute active et de prise de recul. C'est l'occasion de démontrer votre finesse d'analyse et votre capacité de synthèse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="/contact">
              Obtenir un coaching personnalisé
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EntretienInverseGEMPage;
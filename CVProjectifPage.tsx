import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { FileText, User, Target, CheckCircle, Palette, Users, Globe } from 'lucide-react';

const CVProjectifPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Guide complet pour réaliser son CV projectif
          </h1>
          <p className="text-xl text-muted-foreground">
            Tout ce qu'il faut savoir pour créer un CV projectif convaincant pour SKEMA et autres écoles
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-primary/5 rounded-lg p-6 border border-primary/20 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Qu'est-ce qu'un CV projectif ?
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Le CV projectif est un exercice spécifique demandé par certaines écoles de commerce, notamment SKEMA, lors des entretiens d'admission. Contrairement au CV traditionnel qui présente votre parcours passé, le CV projectif vous invite à vous projeter dans l'avenir, généralement sur une période de 10 ans.
            </p>
            <p>
              Cet exercice permet au jury d'évaluer votre capacité à vous projeter professionnellement et à construire un parcours cohérent. L'objectif n'est pas de présenter un "CV idéal" ou utopique, mais plutôt une projection réaliste de votre parcours, qui reflète vos aspirations et votre personnalité.
            </p>
          </div>
        </section>

        {/* Structure et contenu */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Structure et contenu du CV projectif</h2>
          
          {/* Section 1 */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">1</span>
              Présentation et informations personnelles
            </h3>
            <p className="text-muted-foreground mb-3">En haut de votre CV, indiquez vos informations personnelles :</p>
            <ul className="space-y-2 text-muted-foreground pl-4">
              <li>• Nom et prénom</li>
              <li>• Âge (dans 10 ans)</li>
              <li>• Adresse (qui peut être projective si vous envisagez de vivre ailleurs)</li>
              <li>• Coordonnées</li>
              <li>• Photo professionnelle</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">2</span>
              Formation
            </h3>
            <p className="text-muted-foreground mb-3">Cette section doit inclure :</p>
            <ul className="space-y-2 text-muted-foreground pl-4">
              <li>• Votre parcours académique après le bac</li>
              <li>• Le diplôme du Programme Grande École de l'école visée</li>
              <li>• Les spécialisations ou MSc que vous envisagez de suivre</li>
              <li>• Les éventuels échanges universitaires ou doubles diplômes</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">3</span>
              Expériences professionnelles
            </h3>
            <p className="text-muted-foreground mb-3">Pour cette partie, imaginez les postes que vous occuperez après l'obtention de votre diplôme :</p>
            <ul className="space-y-2 text-muted-foreground pl-4">
              <li>• <strong>Première expérience :</strong> poste "junior" (1,5 à 2 ans)</li>
              <li>• <strong>Deuxième expérience :</strong> poste "senior" ou avec plus de responsabilités (2 à 3 ans)</li>
              <li>• <strong>Troisième expérience :</strong> poste de direction ou managérial (3 ans ou plus)</li>
            </ul>
            <p className="text-muted-foreground mt-3">Pour chaque expérience, précisez l'entreprise, le poste occupé, la durée et les principales missions.</p>
          </div>

          {/* Section 4 */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">4</span>
              Compétences et langues
            </h3>
            <p className="text-muted-foreground">
              Indiquez les compétences que vous aurez développées dans 10 ans : langues maîtrisées, compétences techniques et soft skills pertinents.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">5</span>
              Centres d'intérêt et engagements
            </h3>
            <p className="text-muted-foreground">
              Cette section permet de montrer votre personnalité : activités sportives, engagements associatifs, passions et hobbies.
            </p>
          </div>
        </section>

        {/* Conseils pour réussir */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Conseils pour réussir son CV projectif</h2>
          
          <div className="space-y-6">
            
            {/* Code couleur */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Palette className="h-6 w-6 text-primary" />
                Utiliser un code couleur
              </h3>
              <p className="text-muted-foreground mb-3">Pour les CV projectifs, notamment celui de SKEMA, il est fortement recommandé d'utiliser un code couleur :</p>
              <ul className="space-y-2 text-muted-foreground pl-4">
                <li>• <strong>Noir</strong> pour les informations actuelles/factuelles</li>
                <li>• <strong>Couleur</strong> (violet, rose, bleu) pour les éléments projectifs</li>
              </ul>
            </div>

            {/* Cohérence */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Être cohérent dans son parcours
              </h3>
              <p className="text-muted-foreground">
                La cohérence est la règle la plus importante. Montrez que votre engagement académique, associatif et professionnel sont liés et que vous savez comment atteindre vos objectifs grâce à l'école.
              </p>
            </div>

            {/* Réalisme */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                Rester réaliste et authentique
              </h3>
              <p className="text-muted-foreground">
                Évitez les projections trop ambitieuses. À 28-30 ans, vous ne serez probablement pas directeur général d'une entreprise du CAC 40. Renseignez-vous sur les parcours d'anciens diplômés.
              </p>
            </div>

            {/* Anecdotes */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                S'appuyer sur des anecdotes personnelles
              </h3>
              <p className="text-muted-foreground">
                Appuyez certains de vos choix de carrière sur des anecdotes ou expériences personnelles passées. Cela montrera que votre projection s'inscrit dans une continuité avec votre parcours actuel.
              </p>
            </div>

            {/* Connaissance de l'école */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                Connaître l'école et ses programmes
              </h3>
              <p className="text-muted-foreground">
                Renseignez-vous en profondeur sur l'école visée, ses spécialisations, ses campus internationaux et ses partenariats. Pour SKEMA, mettez en avant sa dimension internationale avec ses nombreux campus à l'étranger.
              </p>
            </div>

            {/* Alternatives */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Préparer des alternatives
              </h3>
              <p className="text-muted-foreground">
                Bien que votre CV ne présente qu'un seul parcours, préparez-vous à discuter d'alternatives lors de l'entretien. Cela montrera votre capacité à vous adapter et votre réflexion approfondie.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="/contact">
              Obtenir de l'aide pour mon CV projectif
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CVProjectifPage;
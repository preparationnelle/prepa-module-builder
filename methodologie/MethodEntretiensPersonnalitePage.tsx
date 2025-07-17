import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';
import { SchoolCard } from '@/components/SchoolCard';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { Bot, Users, GraduationCap, Puzzle, HelpCircle, BookOpen, Target, Brain, FileText, MessageSquare, School, Heart, CheckCircle, AlertTriangle, HandHeart, Presentation } from 'lucide-react';
const MethodEntretiensPersonnalitePage = () => {
  const {
    trackPageVisit
  } = useProgress();
  useEffect(() => {
    trackPageVisit('method');
  }, [trackPageVisit]);
  const schools = [{
    name: "ESSEC Business School",
    duration: "Entretien de 30-45 minutes, coefficient 10.",
    feature: "Format approfondi avec mise en situation initiale.",
    link: "/essec"
  }, {
    name: "ESCP Business School",
    duration: "Entretien de 30 minutes, coefficient 12.",
    feature: "Entretien structuré autour d'un questionnaire préalable.",
    link: "/escp"
  }, {
    name: "EDHEC Business School",
    duration: "Entretien de 1h30, coefficient 15.",
    feature: "Format tripartite avec présentation, travail de groupe et entretien.",
    link: "/edhec"
  }, {
    name: "EM Lyon Business School",
    duration: "Entretien de 25 minutes, coefficient 9.",
    feature: "Format ludique avec cartes thématiques et présentation en 1 minute.",
    link: "/emlyon"
  }, {
    name: "SKEMA Business School",
    duration: "Entretien de 25 minutes, coefficient 20.",
    feature: "CV fictif à 10 ans.",
    link: "/skema"
  }, {
    name: "Audencia Business School",
    duration: "Entretien de 30 minutes, coefficient 10.",
    feature: "Forte dimension responsabilité sociétale avec partie en anglais.",
    link: "/audencia"
  }, {
    name: "Grenoble École de Management",
    duration: "Entretien de 30 minutes, coefficient 10.",
    feature: "Format original avec entretien inversé.",
    link: "/gem"
  }, {
    name: "KEDGE Business School",
    duration: "Entretien de 30 minutes, coefficient 14.",
    feature: "Approche 'Grow by Doing' et questionnaire 'maison'.",
    link: "/kedge"
  }, {
    name: "NEOMA Business School",
    duration: "Entretien de 30 minutes, coefficient 12.",
    feature: "Format structuré autour de la 'réussite responsable'.",
    link: "/neoma"
  }];
  return <div className="min-h-screen bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">
            <span className="gradient-text">Entretiens de Personnalité</span>
          </h1>
          
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto text-lg">
            Toutes les ressources pour réussir vos entretiens de personnalité : méthodologie, outils de préparation, 
            et fiches écoles détaillées.
          </p>

          {/* Méthodologie Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <BookOpen className="h-7 w-7 text-primary" />
              Méthodologie Générale
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link to="/methodologie/storytelling" className="flex flex-col items-center gap-2 text-center">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    <span className="font-medium">Storytelling</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link to="/methodologie/motivation-ecole" className="flex flex-col items-center gap-2 text-center">
                    <School className="h-8 w-8 text-primary" />
                    <span className="font-medium">Motivation école</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link to="/methodologie/projet-professionnel" className="flex flex-col items-center gap-2 text-center">
                    <Target className="h-8 w-8 text-primary" />
                    <span className="font-medium">Projet professionnel</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link to="/methodologie/personnalite" className="flex flex-col items-center gap-2 text-center">
                    <Heart className="h-8 w-8 text-primary" />
                    <span className="font-medium">Questions personnalité</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link to="/methodologie/finir-entretien" className="flex flex-col items-center gap-2 text-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <span className="font-medium">Finir un entretien</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link to="/methodologie/erreur-entretien" className="flex flex-col items-center gap-2 text-center">
                    <AlertTriangle className="h-8 w-8 text-primary" />
                    <span className="font-medium">Erreurs à éviter</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link to="/methodologie/tendre-perches" className="flex flex-col items-center gap-2 text-center">
                    <HandHeart className="h-8 w-8 text-primary" />
                    <span className="font-medium">Tendre des perches</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Link to="/methodologie/pitch-intro" className="flex flex-col items-center gap-2 text-center">
                    <Presentation className="h-8 w-8 text-primary" />
                    <span className="font-medium">Pitch d'introduction</span>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Nouvelles sections spécialisées */}
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              Formats Spécialisés
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                    Entretien inversé GEM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Guide complet pour réussir cette partie unique de l'oral de GEM où vous menez l'entretien.
                  </p>
                  <Link to="/entretien-inverse-gem">
                    <Button variant="outline" className="w-full">Voir le guide</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                    CV Projectif
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Tout savoir pour créer un CV projectif convaincant pour SKEMA et autres écoles.
                  </p>
                  <Link to="/cv-projectif">
                    <Button variant="outline" className="w-full">Voir le guide</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Outils de Préparation */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Brain className="h-7 w-7 text-primary" />
              Outils de Préparation IA
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bot className="h-5 w-5" />
                    Générateur de Réponses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Générez des réponses structurées pour toutes vos questions d'entretien avec l'IA.
                  </p>
                  <Link to="/generator/answer">
                    <Button variant="outline" className="w-full">Utiliser le générateur</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5" />
                    Questions EM Lyon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Entraînez-vous avec des questions aléatoires format EM Lyon avec cartes thématiques.
                  </p>
                  <Link to="/generator/emlyon">
                    <Button variant="outline" className="w-full">Questions aléatoires</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Puzzle className="h-5 w-5" />
                    Mots EDHEC
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Générateur de mots aléatoires pour préparer votre présentation EDHEC.
                  </p>
                  <Link to="/generator/edhec">
                    <Button variant="outline" className="w-full">Mots aléatoires</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Fiches Écoles */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-primary" />
              Fiches Écoles
            </h2>
            
            <p className="text-gray-600 mb-8 text-center">
              Découvrez les spécificités de chaque école pour adapter votre préparation.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schools.map((school, index) => <SchoolCard key={index} name={school.name} duration={school.duration} feature={school.feature} link={school.link} />)}
            </div>
          </div>

          {/* Podcast Section */}
          <PodcastSection />

          {/* Testimonials Section - Moved after podcast */}
          <TestimonialsSection />

          {/* Navigation */}
          <div className="mt-16 flex justify-center gap-4">
            <Link to="/methodologie">
              
            </Link>
            <Link to="/nos-offres">
              <Button>Découvrir nos offres</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default MethodEntretiensPersonnalitePage;
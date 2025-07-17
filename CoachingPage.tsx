
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MessageSquare, Users } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

const CoachingPage = () => {
  const { trackPageVisit } = useProgress();
  
  // Suivre la visite de la page coaching
  useEffect(() => {
    trackPageVisit('coaching');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Coaching personnalisé</h1>
      
      <div className="mb-6 flex justify-center">
        <a href="https://calendly.com/prepa-rationnelle" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Afficher le calendrier en plein écran
          </Button>
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-primary" />
              Entretien individuel
            </CardTitle>
            <CardDescription>Préparez-vous efficacement</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Une session en tête-à-tête avec l'un de nos experts pour travailler sur votre technique d'entretien.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <Clock className="h-4 w-4 mr-2" />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-2" />
              <span>Coach expérimenté</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Flexible
            </CardTitle>
            <CardDescription>À votre rythme</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Choisissez parmi une large plage horaire pour trouver le moment qui vous convient le mieux.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <Clock className="h-4 w-4 mr-2" />
              <span>Disponibilité 7j/7</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-2" />
              <span>Planning adaptable</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-primary" />
              Analyse détaillée
            </CardTitle>
            <CardDescription>Progressez rapidement</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Recevez un feedback personnalisé et des conseils pratiques pour améliorer votre performance.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <Clock className="h-4 w-4 mr-2" />
              <span>Suivi post-session</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-2" />
              <span>Plan d'action</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Réserver une session de coaching</CardTitle>
            <CardDescription>
              Choisissez un créneau qui vous convient pour une session de 30 minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <a href="https://calendly.com/prepa-rationnelle" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="lg" className="w-full mb-4">
                Prendre rendez-vous
              </Button>
            </a>
            
            <p className="text-sm text-gray-500 mb-4 text-center">
              Le calendrier s'ouvrira dans un nouvel onglet pour une meilleure expérience.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 bg-accent rounded-lg p-6">
          <h2 className="font-semibold text-lg mb-4">
            Comment se déroule une session de coaching ?
          </h2>
          <ol className="space-y-4">
            <li className="flex">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">1</span>
              <span>Réservez un créneau qui vous convient via le calendrier</span>
            </li>
            <li className="flex">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">2</span>
              <span>Vous recevrez un email de confirmation avec les détails de connexion</span>
            </li>
            <li className="flex">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">3</span>
              <span>Pendant la session, nous simulerons un entretien puis analyserons vos réponses</span>
            </li>
            <li className="flex">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">4</span>
              <span>Après la session, vous recevrez une synthèse avec des recommandations personnalisées</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;

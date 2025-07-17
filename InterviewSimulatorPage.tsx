
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InterviewSimulator from '../components/interview/InterviewSimulator';
import { Footer } from '../components/Footer';
import { useProgress } from '@/context/ProgressContext';

const InterviewSimulatorPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const navigate = useNavigate();
  const { trackPageVisit } = useProgress();
  
  // Suivre la visite de la page simulateur d'entretien
  useEffect(() => {
    trackPageVisit('interview');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-accent">
      <div className="container mx-auto px-4 py-12">
        {!isStarted ? (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Simulateur d'Entretien Virtuel</CardTitle>
              <CardDescription className="text-center text-lg mt-2">
                Préparez-vous aux entretiens avec notre simulateur interactif qui vous donne du feedback en temps réel.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Comment ça fonctionne?</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>L'examinateur virtuel vous posera des questions de différentes catégories</li>
                  <li>Répondez à chaque question comme dans un véritable entretien</li>
                  <li>Recevez un feedback immédiat après chaque réponse</li>
                  <li>À la fin, obtenez une évaluation complète de votre performance</li>
                </ol>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Conseils pour réussir:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Prenez votre temps pour formuler des réponses complètes</li>
                  <li>Utilisez des exemples concrets pour illustrer vos propos</li>
                  <li>Soyez authentique tout en restant professionnel</li>
                  <li>L'entretien dure environ 15 minutes</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full text-lg py-6" 
                onClick={() => setIsStarted(true)}
              >
                Commencer la simulation d'entretien
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <InterviewSimulator onFinish={() => navigate('/methodologie/entretiens-personnalite')} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default InterviewSimulatorPage;

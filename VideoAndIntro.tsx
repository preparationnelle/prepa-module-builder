
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const VideoAndIntro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Video Section */}
      <div className="w-full">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.loom.com/embed/bb87a1911d4a494ba229aaca00ee88cb"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Formation Python - Prépa ECG"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Intro Text Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Formation Python - Prépa ECG
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Cette formation Python est spécialement conçue pour les étudiants de prépa ECG 
              qui souhaitent maîtriser la programmation Python dans le cadre de leurs études de mathématiques.
            </p>
            <p>
              Vous découvrirez toutes les commandes et fonctions essentielles au programme ECG, 
              avec des exemples pratiques et des exercices corrigés pour une progression optimale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">🐍 Python ECG</h3>
            <p className="text-sm text-muted-foreground">
              Toutes les commandes au programme officiel
            </p>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">📊 Numpy & Matplotlib</h3>
            <p className="text-sm text-muted-foreground">
              Manipulation de données et visualisation
            </p>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">🔢 Algèbre Linéaire</h3>
            <p className="text-sm text-muted-foreground">
              Calculs matriciels et résolution de systèmes
            </p>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">🎲 Variables Aléatoires</h3>
            <p className="text-sm text-muted-foreground">
              Simulation et lois de probabilité
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

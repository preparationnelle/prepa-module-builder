
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const MethodMathsPage = () => {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="mb-6">
        <Link to="/methodologie">
          <Button variant="outline" className="mb-4">← Retour à la méthodologie</Button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-extrabold mb-8 text-[#ff9100] text-center">
        Méthodologie Mathématiques ECG
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Module en préparation</p>
          <p className="text-muted-foreground">
            La méthodologie complète pour réussir en maths sera bientôt disponible ici !
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Algèbre et Analyse</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Maîtrisez les concepts fondamentaux :</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Suites et séries</li>
              <li>Fonctions de plusieurs variables</li>
              <li>Intégration et dérivation</li>
              <li>Équations différentielles</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Probabilités et Statistiques</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Points clés à retenir :</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Variables aléatoires discrètes et continues</li>
              <li>Lois de probabilité usuelles</li>
              <li>Convergence et théorèmes limites</li>
              <li>Estimation et tests</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conseils Méthodologiques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Organisation du travail</h4>
                <p className="text-sm text-muted-foreground">Planifiez vos révisions en alternant théorie et exercices pratiques.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Gestion du temps en DS</h4>
                <p className="text-sm text-muted-foreground">Lisez d'abord tout le sujet et commencez par les questions qui vous semblent les plus accessibles.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ressources complémentaires</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/methodologie/ete/maths-ecg1-ecg2">
                <Button variant="outline" className="w-full">
                  Programme Été ECG1-ECG2
                </Button>
              </Link>
              <Link to="/generator/math-tutor">
                <Button variant="outline" className="w-full">
                  Tuteur IA Mathématiques
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const MethodCulturePage = () => {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="mb-6">
        <Link to="/methodologie">
          <Button variant="outline" className="mb-4">← Retour à la méthodologie</Button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-extrabold mb-8 text-[#ff9100] text-center">
        Méthodologie Culture Générale
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Pourquoi les conseils classiques en Culture Générale sont inadaptés ?</p>
          <p className="text-muted-foreground">
            La plupart des cours de CG noient sous la masse d'informations... Cette méthode vise à te donner les clés pour trier et réussir !
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Comprendre l'esprit de l'épreuve</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>L'épreuve de culture générale ne teste pas vos connaissances encyclopédiques, mais votre capacité à :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Problématiser un sujet</li>
                <li>Construire une réflexion cohérente</li>
                <li>Mobiliser des références pertinentes</li>
                <li>Développer une argumentation structurée</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Méthode de dissertation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h4 className="font-semibold">Structure type :</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Introduction :</strong> Accroche, définition, problématique, annonce du plan</li>
                <li><strong>Développement :</strong> 2-3 parties équilibrées avec transitions</li>
                <li><strong>Conclusion :</strong> Synthèse et ouverture</li>
              </ul>
              
              <h4 className="font-semibold mt-4">Conseils pratiques :</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>Consacrez 1h à l'analyse du sujet et au plan</li>
                <li>Rédigez l'introduction au brouillon</li>
                <li>Variez vos références (littérature, philosophie, histoire, actualité)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Constitution de vos fiches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Au lieu d'accumuler des connaissances, organisez-les autour de :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Notions transversales :</strong> liberté, justice, progrès, nature/culture</li>
                <li><strong>Auteurs incontournables :</strong> Platon, Aristote, Rousseau, Kant, Nietzsche</li>
                <li><strong>Exemples concrets :</strong> événements historiques, œuvres artistiques</li>
                <li><strong>Actualité réfléchie :</strong> grands enjeux contemporains</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Entraînement régulier</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h4 className="font-semibold">Programme hebdomadaire :</h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>1 dissertation complète par semaine</li>
                <li>2-3 analyses de sujets (problématisation + plan)</li>
                <li>Lecture active d'œuvres au programme</li>
                <li>Révision des fiches de références</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Gestion du stress et du temps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Le jour J :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Prenez le temps de bien lire le sujet (15 minutes)</li>
                <li>Répartissez votre temps : 1h de préparation, 3h de rédaction</li>
                <li>Gardez 15 minutes pour la relecture</li>
                <li>Restez dans le sujet : chaque paragraphe doit répondre à la problématique</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

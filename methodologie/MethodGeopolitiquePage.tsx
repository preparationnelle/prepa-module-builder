
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const MethodGeopolitiquePage = () => {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="mb-6">
        <Link to="/methodologie">
          <Button variant="outline" className="mb-4">← Retour à la méthodologie</Button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-extrabold mb-8 text-[#ff9100] text-center">
        Méthodologie Géopolitique
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Module à venir</p>
          <p className="text-muted-foreground">
            Conseils méthodologiques, plans et astuces pour la géopolitique arriveront très bientôt !
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Comprendre l'épreuve</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>L'épreuve de géopolitique évalue votre capacité à :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Analyser les enjeux géopolitiques contemporains</li>
                <li>Mobiliser des connaissances historiques et géographiques</li>
                <li>Construire une réflexion structurée sur les relations internationales</li>
                <li>Maîtriser les concepts géopolitiques fondamentaux</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Thèmes essentiels à maîtriser</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">🌍 Espaces et frontières</h4>
                <ul className="text-sm space-y-1">
                  <li>• Territoires et souveraineté</li>
                  <li>• Frontières et migrations</li>
                  <li>• Mondialisation et régionalisation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">⚡ Puissances et conflits</h4>
                <ul className="text-sm space-y-1">
                  <li>• Relations de puissance</li>
                  <li>• Conflits et résolution</li>
                  <li>• Organisations internationales</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🏛️ Démocraties et régimes</h4>
                <ul className="text-sm space-y-1">
                  <li>• Démocratisation</li>
                  <li>• Autoritarisme</li>
                  <li>• Gouvernance mondiale</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💰 Économie et ressources</h4>
                <ul className="text-sm space-y-1">
                  <li>• Ressources naturelles</li>
                  <li>• Commerce international</li>
                  <li>• Développement durable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Méthodologie de dissertation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">🔍 Analyse du sujet (30 min)</h4>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>Définir les termes géographiques et géopolitiques</li>
                  <li>Délimiter l'espace et la période étudiés</li>
                  <li>Identifier les enjeux et problématiser</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">📝 Construction du plan</h4>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>Plan thématique ou chronologique selon le sujet</li>
                  <li>2-3 parties équilibrées avec sous-parties</li>
                  <li>Exemples concrets et chiffrés</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">🎯 Conseils pratiques</h4>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>Utilisez des cartes mentales pour organiser vos idées</li>
                  <li>Intégrez l'actualité récente avec du recul analytique</li>
                  <li>Variez les échelles d'analyse (locale, régionale, mondiale)</li>
                </ul>
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
              <Link to="/generator/geopolitics">
                <Button variant="outline" className="w-full">
                  Générateur de Questions
                </Button>
              </Link>
              <Link to="/generator/case-study">
                <Button variant="outline" className="w-full">
                  Études de Cas
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

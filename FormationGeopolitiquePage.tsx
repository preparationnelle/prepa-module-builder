
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Globe, MapPin, TrendingUp, FileText, Users } from 'lucide-react';

const FormationGeopolitiquePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-orange-500 text-white">
            <Globe className="h-8 w-8" />
          </div>
          Formation Géopolitique
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Maîtrisez les enjeux géopolitiques contemporains pour réussir vos concours
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">Avancé</Badge>
          <Badge variant="outline">10-12 heures</Badge>
          <Badge className="bg-orange-500">En développement</Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-orange-500" />
              Analyses Géopolitiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Approfondissez votre compréhension des grands enjeux mondiaux avec nos analyses détaillées.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Relations internationales
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Conflits contemporains
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Enjeux économiques mondiaux
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-orange-500" />
              Actualités Mondiales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Restez informé des événements marquants et de leur impact géopolitique.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Veille géopolitique
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Analyses d'actualité
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Cartes interactives
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-orange-500" />
            Méthodes de Dissertation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Apprenez à structurer vos dissertations géopolitiques et à développer une argumentation solide.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Phase 1: Analyse</h3>
              <p className="text-sm text-muted-foreground">Décrypter le sujet et identifier les enjeux clés</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Phase 2: Structure</h3>
              <p className="text-sm text-muted-foreground">Organiser ses idées et construire un plan cohérent</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Phase 3: Rédaction</h3>
              <p className="text-sm text-muted-foreground">Développer une argumentation claire et nuancée</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Outils Disponibles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link to="/generator/geopolitics" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold mb-2">Générateur Géopolitique</h3>
              <p className="text-sm text-muted-foreground">Créez des analyses géopolitiques personnalisées</p>
            </Link>
            <Link to="/methodologie/geopolitique" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold mb-2">Méthode Géopolitique</h3>
              <p className="text-sm text-muted-foreground">Guide complet de méthodologie</p>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-orange-500" />
              Formation en Développement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Cette formation est actuellement en cours de développement. Nous travaillons à vous proposer:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Cours interactifs complets
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Exercices pratiques
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Simulations d'épreuves
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                Bibliothèque de ressources
              </li>
            </ul>
            <Button className="mt-4 w-full" disabled>
              Bientôt disponible
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormationGeopolitiquePage;

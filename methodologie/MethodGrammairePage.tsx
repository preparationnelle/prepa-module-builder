
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const MethodGrammairePage = () => {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="mb-6">
        <Link to="/methodologie">
          <Button variant="outline" className="mb-4">← Retour à la méthodologie</Button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-extrabold mb-8 text-[#ff9100] text-center">
        Fiches de Grammaire
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Fiches de grammaire complètes</p>
          <p className="text-muted-foreground">
            Maîtrisez les points essentiels en langues : conjugaisons, règles récurrentes et tableaux de référence.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link to="/methodologie/grammaire/regles-recurrentes">
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Règles Récurrentes</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Les règles de grammaire les plus importantes à maîtriser absolument
              </p>
              <Button variant="outline" size="sm">Consulter →</Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/methodologie/grammaire/conjugaison-allemande">
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Conjugaison Allemande</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tableaux complets de conjugaison allemande avec verbes irréguliers
              </p>
              <Button variant="outline" size="sm">Consulter →</Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/methodologie/grammaire/structure-phrase-allemande">
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Structure de la Phrase</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comprendre et maîtriser la structure de la phrase allemande
              </p>
              <Button variant="outline" size="sm">Consulter →</Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/methodologie/grammaire/declinaisons-adjectif">
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Déclinaisons de l'Adjectif</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tableaux de déclinaisons avec exemples pratiques
              </p>
              <Button variant="outline" size="sm">Consulter →</Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/methodologie/grammaire/passif-allemand">
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Le Passif Allemand</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Formation et utilisation du passif en allemand
              </p>
              <Button variant="outline" size="sm">Consulter →</Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/methodologie/grammaire/relatives-allemand">
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-primary">Les Relatives</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Maîtriser les propositions relatives en allemand
              </p>
              <Button variant="outline" size="sm">Consulter →</Button>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Comment utiliser ces fiches ?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">📚 Révision systématique</h4>
              <p className="text-sm text-muted-foreground">Consultez une fiche par jour et testez-vous avec des exercices pratiques.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🎯 Ciblage des difficultés</h4>
              <p className="text-sm text-muted-foreground">Identifiez vos points faibles et concentrez-vous sur les fiches correspondantes.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">✍️ Application immédiate</h4>
              <p className="text-sm text-muted-foreground">Utilisez immédiatement les règles apprises dans vos exercices de thème et version.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

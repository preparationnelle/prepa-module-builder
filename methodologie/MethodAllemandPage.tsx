
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Target } from "lucide-react";
import ArticleAllemandEssaiIntroduction from './ArticleAllemandEssaiIntroduction';
import ArticleAllemandEssaiTeil1 from './ArticleAllemandEssaiTeil1';
import ArticleAllemandEssaiTeil2 from './ArticleAllemandEssaiTeil2';
import ArticleAllemandEssaiExemples from './ArticleAllemandEssaiExemples';
import ArticleAllemandEssaiKritik from './ArticleAllemandEssaiKritik';
import ArticleAllemandEssaiConclusion from './ArticleAllemandEssaiConclusion';
import ArticleAllemandAnalyseLexique from './ArticleAllemandAnalyseLexique';

export const MethodAllemandPage = () => {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="mb-6">
        <Link to="/methodologie">
          <Button variant="outline" className="mb-4">← Retour à la méthodologie</Button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-extrabold mb-8 text-[#ff9100] text-center">
        Méthodologie Allemand - Essai Parfait
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Structure complète de l'essai et de la synthèse « parfait » pour l'allemand ECG</p>
          <p className="text-muted-foreground">
            Retrouvez ici la structure complète avec accroche, plan, exemples et toutes les formulations prêtes à l'emploi !
          </p>
        </CardContent>
      </Card>

      {/* Section Ressources Grammaticales */}
      <Card className="mb-8 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <BookOpen className="h-6 w-6" />
            Ressources Grammaticales Allemandes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Accédez à toutes les fiches de grammaire allemande pour maîtriser les points essentiels
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/methodologie/grammaire/regles-recurrentes">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Règles Récurrentes</h4>
                      <p className="text-sm text-muted-foreground">Les règles de grammaire allemande les plus importantes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/methodologie/grammaire/conjugaison-allemande">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Conjugaison Allemande</h4>
                      <p className="text-sm text-muted-foreground">Tableaux complets avec verbes irréguliers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/methodologie/grammaire/structure-phrase-allemande">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Structure de la Phrase</h4>
                      <p className="text-sm text-muted-foreground">Comprendre la syntaxe allemande</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/methodologie/grammaire/declinaisons-adjectif">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Déclinaisons de l'Adjectif</h4>
                      <p className="text-sm text-muted-foreground">Tableaux avec exemples pratiques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/methodologie/grammaire/passif-allemand">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Le Passif Allemand</h4>
                      <p className="text-sm text-muted-foreground">Formation et utilisation du passif</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/methodologie/grammaire/relatives-allemand">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Les Relatives</h4>
                      <p className="text-sm text-muted-foreground">Maîtriser les propositions relatives</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">💡 Conseil d'utilisation</h4>
            <p className="text-sm text-orange-700">
              Consultez ces fiches avant de vous lancer dans les exercices de thème grammatical. 
              Chaque fiche contient les règles essentielles avec des exemples concrets.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiIntroduction />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiTeil1 />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiTeil2 />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiExemples />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiKritik />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandEssaiConclusion />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ArticleAllemandAnalyseLexique />
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-4">
        <Link to="/methodologie/allemand/essai">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">Méthodologie Essai</h3>
              <p className="text-sm text-muted-foreground">Guide complet pour l'essai en allemand</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/methodologie/allemand/synthese">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">Méthodologie Synthèse</h3>
              <p className="text-sm text-muted-foreground">Guide complet pour la synthèse en allemand</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

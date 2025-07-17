
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Target, CheckCircle, Users } from "lucide-react";

const PreparationCubePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Préparation "Cube"
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Aborde sereinement ta rentrée en prépa et bien démarrer ta "cube"
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              La deuxième année de prépa (cube) est cruciale. C'est l'année des concours ! 
              Notre accompagnement te prépare à aborder cette étape décisive avec confiance et méthode.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Objectifs de l'accompagnement
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consolider les acquis de première année</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Développer une stratégie de révision efficace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Préparer mentalement aux concours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Optimiser la gestion du stress</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Programme spécialisé
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Bilan des forces et faiblesses</li>
                  <li>• Planning de révision personnalisé</li>
                  <li>• Techniques de mémorisation avancées</li>
                  <li>• Préparation aux épreuves orales</li>
                  <li>• Gestion du stress et de la motivation</li>
                  <li>• Stratégies par école et par épreuve</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-2">
                Pourquoi choisir notre accompagnement ?
              </h4>
              <p className="text-blue-700">
                Nos coachs connaissent parfaitement les exigences des concours ECG. 
                Ils t'accompagnent avec des méthodes éprouvées et un suivi personnalisé 
                pour maximiser tes chances de réussite.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <a
            href="https://calendly.com/preparationnelle/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="px-8 py-4 text-lg">
              Réserver mon premier entretien
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreparationCubePage;

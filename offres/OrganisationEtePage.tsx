
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, BookOpen, Target, CheckCircle } from "lucide-react";

const OrganisationEtePage = () => {
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
          Organisation de l'été
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              Profite de l'été pour t'organiser au mieux
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              L'été est le moment idéal pour prendre de l'avance et bien préparer ta rentrée en prépa. 
              Notre accompagnement personnalisé t'aide à optimiser ces précieux mois de pause.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Ce que tu vas obtenir
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Planning personnalisé pour tes vacances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Méthodes d'organisation efficaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Préparation mentale pour la rentrée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Équilibre travail/détente optimisé</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Programme d'accompagnement
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Bilan personnalisé de tes objectifs</li>
                  <li>• Création d'un planning sur mesure</li>
                  <li>• Techniques de gestion du temps</li>
                  <li>• Préparation psychologique</li>
                  <li>• Suivi hebdomadaire personnalisé</li>
                </ul>
              </div>
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

export default OrganisationEtePage;


import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const MethodPythonPage = () => {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="mb-6">
        <Link to="/methodologie">
          <Button variant="outline" className="mb-4">← Retour à la méthodologie</Button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-extrabold mb-8 text-[#ff9100] text-center">
        Module Python (Bonus)
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Ce module bonus sur Python pour les prépas ECG</p>
          <p className="text-muted-foreground">
            Sera prochainement disponible ici ! En attendant, découvrez nos outils Python déjà disponibles.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🐍 Pourquoi Python en prépa ECG ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Python devient de plus en plus important dans le cursus ECG pour :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>L'analyse de données économiques et financières</li>
                <li>La modélisation mathématique</li>
                <li>L'automatisation de calculs statistiques</li>
                <li>La préparation aux écoles les plus innovantes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📚 Concepts fondamentaux</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">🔢 Bases du langage</h4>
                <ul className="text-sm space-y-1">
                  <li>• Variables et types de données</li>
                  <li>• Structures de contrôle</li>
                  <li>• Fonctions et modules</li>
                  <li>• Gestion des erreurs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📊 Bibliothèques utiles</h4>
                <ul className="text-sm space-y-1">
                  <li>• NumPy pour le calcul numérique</li>
                  <li>• Pandas pour l'analyse de données</li>
                  <li>• Matplotlib pour la visualisation</li>
                  <li>• SciPy pour les statistiques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>💡 Applications en prépa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">📈 En mathématiques</h4>
                <p className="text-sm text-muted-foreground">Résolution d'équations, calcul de probabilités, simulation de Monte Carlo</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💰 En économie</h4>
                <p className="text-sm text-muted-foreground">Analyse de séries temporelles, modélisation économétrique, calcul d'indicateurs</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🌍 En géopolitique</h4>
                <p className="text-sm text-muted-foreground">Traitement de données géographiques, création de cartes, analyse de flux</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🚀 Outils disponibles dès maintenant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/generator/python-tutor">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold mb-2">Tuteur Python IA</h4>
                    <p className="text-sm text-muted-foreground mb-3">Assistant personnel pour apprendre Python</p>
                    <Button size="sm" variant="outline">Essayer →</Button>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/generator/python-exercises">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold mb-2">Exercices Python</h4>
                    <p className="text-sm text-muted-foreground mb-3">Générateur d'exercices personnalisés</p>
                    <Button size="sm" variant="outline">Pratiquer →</Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📋 Programme de formation (à venir)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                <div>
                  <h4 className="font-semibold">Initiation et syntaxe de base</h4>
                  <p className="text-sm text-muted-foreground">Installation, premiers programmes, variables</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                <div>
                  <h4 className="font-semibold">Structures de données et algorithmes</h4>
                  <p className="text-sm text-muted-foreground">Listes, dictionnaires, boucles, fonctions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                <div>
                  <h4 className="font-semibold">Applications mathématiques</h4>
                  <p className="text-sm text-muted-foreground">NumPy, calculs scientifiques, graphiques</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                <div>
                  <h4 className="font-semibold">Projets appliqués à la prépa</h4>
                  <p className="text-sm text-muted-foreground">Études de cas concrètes, données réelles</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

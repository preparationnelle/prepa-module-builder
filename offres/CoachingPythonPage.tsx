
import React from "react";
import { Button } from "@/components/ui/button";

const CoachingPythonPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Coaching en Python
        </h1>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-2xl shadow-lg p-8 text-foreground">
          {/* Header section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              +4 en Maths : tu souhaites bénéficier d'un coaching en Python ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Approfondie Python avec un accompagnement personnalisé, avec les concepts qui tombent et retombent aux concours chaque année !
            </p>
          </div>

          {/* What you'll master section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Ce que tu vas maîtriser :
            </h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Syntaxe et concepts fondamentaux de Python</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Structures de données et algorithmes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Programmation orientée objet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Projets pratiques et applications concrètes</span>
              </li>
            </ul>
          </div>

          {/* Offer details section */}
          <div className="bg-white/90 rounded-xl border border-primary/30 p-6 mb-8">
            <h3 className="text-xl font-bold text-primary mb-6">
              Découvre notre offre :
            </h3>
            
            {/* Core product */}
            <div className="mb-6">
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <h4 className="font-semibold text-primary mb-2 text-lg">
                  Produit cœur
                </h4>
                <p className="text-base">
                  6 h de coaching individuel Python (extrais de sujets, algorithmes à connaître par cœur)
                </p>
              </div>
            </div>
            
            {/* Bonuses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Bonus 1</h4>
                <p className="text-sm">
                  Pack de 50 exercices à maîtriser pour les concours
                </p>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Bonus 2</h4>
                <p className="text-sm">
                  Guide PDF « Python Cheatsheet » avec les commandes à apprendre par cœur
                </p>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Bonus 3</h4>
                <p className="text-sm">
                  Accès privé à mon WhatsApp pendant 30 jours → questions illimitées
                </p>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Bonus 4</h4>
                <p className="text-sm">
                  Contenu vidéo (1h de programme)
                </p>
              </div>
            </div>
            
            {/* Guarantee */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <span>✅</span>
                Garantie
              </h4>
              <p className="text-sm text-green-600">
                100 % remboursé après la 1ʳᵉ heure si tu n'es pas convaincu·e
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="https://calendly.com/preparationnelle/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block"
            >
              <Button variant="default" size="lg" className="px-8 py-3 text-lg">
                Réserver mon premier cours
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingPythonPage;

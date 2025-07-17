
import React from "react";
import { Button } from "@/components/ui/button";

const NosOffresPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Nos offres</h1>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-2xl shadow-lg px-6 py-8 md:p-10 text-foreground">
          <div className="flex flex-col gap-10 text-base md:text-lg">
            {/* Offre 1 */}
            <div className="bg-white/90 rounded-xl border border-primary/20 shadow-md px-6 py-8">
              <div className="flex items-start gap-2 mb-1 font-bold text-lg md:text-xl">
                <span className="text-primary font-black text-2xl mr-1">1.</span>
                <span>Préparation aux entretiens de personnalité</span>
              </div>
              <div className="ml-7 mb-2 text-muted-foreground">
                Accompagnement sur mesure pour réussir les entretiens oraux des concours (écoles de commerce, Sciences Po, etc.).
              </div>
              <ul className="ml-10 list-disc text-sm md:text-base space-y-1 mb-3">
                <li>Structurer son discours</li>
                <li>Gagner en confiance</li>
                <li>Maîtriser les attentes des jurys</li>
                <li>S'entraîner en conditions réelles</li>
              </ul>
              <div className="ml-7">
                <a
                  href="https://calendly.com/preparationnelle/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="default" className="mt-2">
                    Réserve le premier cours dès maintenant
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Offre 2 */}
            <div className="bg-white/90 rounded-xl border border-primary/20 shadow-md px-6 py-8">
              <div className="flex items-start gap-2 mb-1 font-bold text-lg md:text-xl">
                <span className="text-primary font-black text-2xl mr-1">2.</span>
                <span>Prépa à la prépa</span>
              </div>
              <div className="ml-7 mb-2 text-muted-foreground">
                Un programme d'accompagnement dédié aux élèves de Terminale qui s'apprêtent à intégrer une classe préparatoire (CPGE).
              </div>
              <ul className="ml-10 list-disc text-sm md:text-base space-y-1 mb-3">
                <li>Prendre de l'avance sur les exigences de la prépa</li>
                <li>Adopter une méthode de travail efficace</li>
                <li>Gagner en sérénité pour bien démarrer l'année</li>
              </ul>
              <div className="ml-7">
                <a
                  href="https://calendly.com/preparationnelle/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="default" className="mt-2">
                    Réserve le premier cours dès maintenant
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Offre 3 */}
            <div className="bg-white/90 rounded-xl border border-primary/20 shadow-md px-6 py-8">
              <div className="flex items-start gap-2 mb-1 font-bold text-lg md:text-xl">
                <span className="text-primary font-black text-2xl mr-1">3.</span>
                <span>Réussir la transition entre la 1re et la 2e année de prépa</span>
              </div>
              <div className="ml-7 mb-2 text-muted-foreground">
                Un accompagnement pour aborder sereinement la deuxième année, la plus exigeante !
              </div>
              <ul className="ml-10 list-disc text-sm md:text-base space-y-1 mb-3">
                <li>Consolider les acquis de première année</li>
                <li>Gagner en efficacité méthodologique</li>
                <li>Se projeter dans la préparation des concours</li>
              </ul>
              <div className="ml-7">
                <a
                  href="https://calendly.com/preparationnelle/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="default" className="mt-2">
                    Réserve le premier cours dès maintenant
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosOffresPage;

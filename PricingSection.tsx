
import React from 'react';
import { PricingCard } from './PricingCard';
import { CheckCircle, Calendar } from 'lucide-react';

export const PricingSection = () => {
  const freeFeatures = [
    { text: "Générer des plans structurés pour vos réponses" },
    { text: "Accéder à la banque de questions d'entretien" },
    { text: "Consulter les méthodologies de présentation" },
    { text: "Suivre votre progression via le tableau de bord" },
    { text: "Explorer les fiches écoles détaillées" }
  ];

  return (
    <section id="pricing-section" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 text-foreground">
          Nos formules
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Tout simplement gratuit"
            price="0€"
            features={freeFeatures}
            ctaText="Commencer gratuitement"
            ctaLink="/register"
            recommended={true}
            subText="Accédez à toutes les fonctionnalités sans frais"
            variant="premium"
          />
          
          <div className="bg-card border border-border rounded-lg p-6 flex flex-col">
            <div className="mb-6">
              <h3 className="card-heading mb-2 text-center text-card-foreground">Besoin d'un accompagnement personnalisé?</h3>
              <p className="text-muted-foreground text-center mb-4">
                Discutez gratuitement avec un coach spécialisé pour identifier vos besoins réels en préparation d'entretien
              </p>
            </div>
            
            <div className="mt-auto">
              <a href="/calendar" className="block w-full">
                <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-card border border-primary text-primary rounded hover:bg-primary/5 transition-colors">
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous
                </button>
              </a>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Sans engagement - 30 minutes d'échange
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

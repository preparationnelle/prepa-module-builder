import React from "react";
import { Button } from "@/components/ui/button";
const CoachingMathsPage = () => {
  return <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Coaching en Mathématiques
        </h1>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-2xl shadow-lg p-8 text-foreground">
          {/* Header section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Convertis tes lacunes en atouts : maîtrise les chapitres incontournables et gagne des points décisifs avant la rentrée
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un accompagnement personnalisé en mathématiques pour transformer tes difficultés en forces et exceller dans cette matière fondamentale.
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
                <span>Algèbre linéaire et calcul matriciel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Analyse et fonctions de plusieurs variables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Probabilités et statistiques avancées</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Méthodes de résolution et stratégies d'épreuve</span>
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
                <p className="text-base">Heures de coaching individuel Maths (chapitres incontournables, méthodes qui rapportent des points)</p>
              </div>
            </div>
            
            {/* Bonuses */}
            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-primary text-lg mb-4">Les bonus inclus :</h4>
              
              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h5 className="font-semibold text-secondary mb-2">Bonus 1 : Pack "20 ans d&apos;annales corrigées"</h5>
                <p className="text-sm mb-2">200 exercices classés par thème + corrigés rédigés</p>
                <p className="text-xs text-muted-foreground italic">Tu identifies les questions récurrentes en un clin d&apos;œil</p>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h5 className="font-semibold text-secondary mb-2">Bonus 2 : Sélection "Exercices classiques qui tombent chaque année"</h5>
                <p className="text-sm mb-2">50 incontournables + corrigés détaillés</p>
                <p className="text-xs text-muted-foreground italic">Effet "déjà-vu" le jour J</p>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h5 className="font-semibold text-secondary mb-2">Bonus 3 : Guide "Méthodes de rédaction qui rapportent des points"</h5>
                <p className="text-sm mb-2">Techniques de mise en page, mots-clés, enchaînements logiques (PDF + vidéos)</p>
                <p className="text-xs text-muted-foreground italic">+2 à +4 points gagnés rien qu&apos;en améliorant la forme</p>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h5 className="font-semibold text-secondary mb-2">Bonus 4 : Masterclass "Stratégie d&apos;épreuve" – 1 h live</h5>
                <p className="text-sm mb-2">Gestion du temps, ordre optimal des questions, checkpoints minuteurs</p>
                <p className="text-xs text-muted-foreground italic">Tu finis l&apos;épreuve avec 10-15 min d&apos;avance</p>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                <h5 className="font-semibold text-secondary mb-2">Bonus 5 : Accès privé WhatsApp 30 jours</h5>
                <p className="text-sm mb-2">Questions illimitées entre les séances (réponse &lt; 24 h)</p>
                <p className="text-xs text-muted-foreground italic">Tu restes jamais bloqué·e</p>
              </div>
            </div>
            
            {/* Urgency and Guarantee */}
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                  <span>⏰</span>
                  Urgence
                </h4>
                <p className="text-sm text-orange-600">
                  Les créneaux partent vite : assure-toi d&apos;en avoir un avant la fermeture des inscriptions dimanche 23h59
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                  <span>✅</span>
                  Garantie
                </h4>
                <p className="text-sm text-green-600">
                  100 % remboursé après la 1ʳᵉ heure si tu n&apos;es pas convaincu·e, sans discussion
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <a href="https://calendly.com/preparationnelle/30min" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="default" size="lg" className="px-8 py-3 text-lg">
                Réserver mon premier cours
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default CoachingMathsPage;
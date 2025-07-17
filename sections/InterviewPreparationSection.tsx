
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SchoolCard } from '../SchoolCard';
import { 
  ChevronDown, 
  GraduationCap
} from 'lucide-react';

export const InterviewPreparationSection = () => {
  const [showAllSchools, setShowAllSchools] = useState(false);

  const schools = [
    {
      name: "ESSEC Business School",
      duration: "Entretien de 30-45 minutes, coefficient 10.",
      feature: "Format approfondi avec mise en situation initiale.",
      link: "/essec"
    },
    {
      name: "ESCP Business School",
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Entretien structuré autour d'un questionnaire préalable.",
      link: "/escp"
    },
    {
      name: "EDHEC Business School",
      duration: "Entretien de 1h30, coefficient 15.",
      feature: "Format tripartite avec présentation, travail de groupe et entretien.",
      link: "/edhec"
    },
    {
      name: "EM Lyon Business School",
      duration: "Entretien de 25 minutes, coefficient 9.",
      feature: "Format ludique avec cartes thématiques et présentation en 1 minute.",
      link: "/emlyon"
    },
    {
      name: "SKEMA Business School",
      duration: "Entretien de 25 minutes, coefficient 20.",
      feature: "CV fictif à 10 ans.",
      link: "/skema"
    },
    {
      name: "Audencia Business School",
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Forte dimension responsabilité sociétale avec partie en anglais.",
      link: "/audencia"
    },
    {
      name: "Grenoble École de Management",
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Format original avec entretien inversé.",
      link: "/gem"
    },
    {
      name: "KEDGE Business School",
      duration: "Entretien de 30 minutes, coefficient 14.",
      feature: "Approche 'Grow by Doing' et questionnaire 'maison'.",
      link: "/kedge"
    },
    {
      name: "NEOMA Business School",
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Format structuré autour de la 'réussite responsable'.",
      link: "/neoma"
    }
  ];

  const visibleSchools = showAllSchools ? schools : schools.slice(0, 3);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-4">
          Préparer ses <span className="gradient-text">entretiens</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Tout ce dont vous avez besoin pour réussir vos entretiens de personnalité : fiches écoles 
          détaillées pour une préparation complète et ciblée.
        </p>
        
        {/* Fiches écoles */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <GraduationCap className="inline-block h-8 w-8 text-primary mr-2" />
            Fiches écoles
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visibleSchools.map((school, index) => (
              <SchoolCard 
                key={index}
                name={school.name}
                duration={school.duration}
                feature={school.feature}
                link={school.link}
              />
            ))}
          </div>
          
          {!showAllSchools && (
            <div className="text-center mt-6">
              <Button 
                onClick={() => setShowAllSchools(true)} 
                variant="outline"
                className="flex items-center gap-2"
              >
                Voir toutes les écoles <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link to="/methodologie/entretiens-personnalite">
            <Button size="lg">
              Explorer tous les contenus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SchoolTemplate from '@/components/SchoolTemplate';
import { edhecData } from '@/data/schools/edhec';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';

const EDHECPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Utilisation du template d'école avec les données EDHEC */}
      <SchoolTemplate data={edhecData} />
      
      {/* Générateur de mots aléatoires */}
      <div className="mb-10 mt-12">
        <h2 className="text-2xl font-bold mb-6">Préparez votre entretien EDHEC</h2>
        <p className="text-muted-foreground mb-6">
          L'entretien EDHEC comporte une présentation avec un mot imposé. Entraînez-vous à intégrer 
          des mots aléatoires dans votre discours grâce à notre générateur ci-dessous.
        </p>
        <RandomWordGenerator type="word" />
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link to="/generator">Générer un plan d'entraînement</Link>
        </Button>
      </div>
    </div>
  );
};

export default EDHECPage;

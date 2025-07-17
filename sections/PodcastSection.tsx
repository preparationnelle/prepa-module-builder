
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export const PodcastSection = () => {
  const podcastUrl = "https://www.europe1.fr/emissions/la-france-bouge-academie/prepa-rationnelle-concue-pour-revolutionner-le-monde-la-preparation-pour-integrer-les-ecoles-de-commerce-667526";
  
  return (
    <section className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="section-heading mb-4">
              Découvrez notre interview sur <span className="gradient-text">Europe 1</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Écoutez notre fondateur présenter comment Prepa Rationnelle révolutionne la préparation aux oraux des écoles de commerce.
            </p>
            <a href={podcastUrl} target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2">
                Écouter le podcast
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
          
          <a 
            href={podcastUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 max-w-[250px] md:max-w-[300px]"
          >
            <img 
              src="/lovable-uploads/23001b24-efff-4e05-ae2f-21d3c3a84f30.png" 
              alt="Podcast Europe 1" 
              className="shadow-lg w-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

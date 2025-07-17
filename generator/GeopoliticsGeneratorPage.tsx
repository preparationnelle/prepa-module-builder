
import React, { useState } from 'react';
import { GeopoliticsGenerator } from '@/components/generator/GeopoliticsGenerator';

const GeopoliticsGeneratorPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
          Générateur de Géopolitique
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cours structurés, sujets de dissertation, actualités récentes et flashcards thématiques automatiquement générés
        </p>
      </div>

      <GeopoliticsGenerator language={language} />
    </div>
  );
};

export default GeopoliticsGeneratorPage;

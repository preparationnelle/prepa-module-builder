
import React, { useState } from 'react';
import { CaseStudyGenerator } from '@/components/generator/CaseStudyGenerator';

const CaseStudyGeneratorPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Générateur d'Études de Cas
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transformez vos articles d'actualité en études de cas géopolitiques avec chiffres clés et sujets de dissertation
        </p>
      </div>

      <CaseStudyGenerator language={language} />
    </div>
  );
};

export default CaseStudyGeneratorPage;

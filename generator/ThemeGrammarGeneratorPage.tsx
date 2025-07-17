
import React from 'react';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';

const ThemeGrammarGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Thème Grammatical
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Générateur et correcteur de thèmes de traduction : notation détaillée instantanée
        </p>

        {/* Vidéo Loom explicative */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              📺 Tutoriel vidéo : Comment utiliser le thème grammatical
            </h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.loom.com/embed/c35033e64c444cf29a516b673e039c11?sid=03d4d734-d00b-4ab6-8426-077b9a83b999"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                title="Tutoriel Thème Grammatical"
              />
            </div>
            <p className="text-purple-700 mt-4 text-sm">
              Regardez cette vidéo pour découvrir comment maximiser votre entraînement avec notre outil de thème grammatical.
            </p>
          </div>
        </div>
      </div>

      <ThemeGrammaticalGenerator />
    </div>
  );
};

export default ThemeGrammarGeneratorPage;

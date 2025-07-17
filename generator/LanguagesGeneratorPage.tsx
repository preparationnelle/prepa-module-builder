
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';

const LanguagesGeneratorPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Générateur de Paragraphes de Langues
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Générez des paragraphes argumentatifs de 150 mots en anglais, allemand ou espagnol avec vocabulaire clé
        </p>
      </div>

      {/* Video Section */}
      <div className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-red-600" />
              Tutoriel vidéo - Comment générer des paragraphes de langues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.loom.com/embed/b9e87aa5aedd4454ab68c8d7c820c485"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>

      <LanguageParagraphGenerator language={language} />
    </div>
  );
};

export default LanguagesGeneratorPage;

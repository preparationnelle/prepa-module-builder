
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube } from 'lucide-react';
import { PrepaChatbotGenerator } from '@/components/generator/PrepaChatbotGenerator';

const PrepaChatbotGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Chatbot Prépa
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conseils motivation, méthode & bien-être. Ton assistant IA inspiré par Major-Prépa & Mister Prépa
        </p>
      </div>

      {/* Video Section */}
      <div className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-red-600" />
              Tutoriel vidéo - Comment utiliser le Chatbot Prépa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.loom.com/embed/ee8a95eb3d7b475695baf56bf9f29c64"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>

      <PrepaChatbotGenerator />
    </div>
  );
};

export default PrepaChatbotGeneratorPage;


import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dices } from 'lucide-react';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { useProgress } from "@/context/ProgressContext";

const EDHECGeneratorPage = () => {
  const { trackPageVisit } = useProgress();
  
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Générateur de mots EDHEC
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Générateur de mots aléatoires pour votre présentation EDHEC.
        </p>
        
        {/* Usage Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r max-w-4xl mx-auto mb-8">
          <p className="text-sm text-blue-800 font-medium mb-2">💡 Comment l'utiliser :</p>
          <p className="text-sm text-blue-700">
            Générez un mot aléatoire et préparez une présentation de 3 minutes en suivant le format EDHEC : définition, exemples personnels, et ouverture sur votre projet.
          </p>
        </div>
      </div>

      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30">
        <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Dices className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">Générateur de mots EDHEC</div>
              <div className="text-rose-100 text-sm font-normal mt-1">
                Générateur de mots aléatoires pour votre présentation EDHEC
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <RandomWordGenerator type="word" />
        </CardContent>
      </Card>
    </div>
  );
};

export default EDHECGeneratorPage;

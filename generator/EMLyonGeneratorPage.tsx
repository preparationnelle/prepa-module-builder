
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { useProgress } from "@/context/ProgressContext";

const EMLyonGeneratorPage = () => {
  const { trackPageVisit } = useProgress();
  
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
          Questions EM Lyon
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Questions aléatoires pour l'entretien 'Flash' avec cartes thématiques.
        </p>
        
        {/* Usage Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r max-w-4xl mx-auto mb-8">
          <p className="text-sm text-blue-800 font-medium mb-2">💡 Comment l'utiliser :</p>
          <p className="text-sm text-blue-700">
            Cliquez sur 'Nouvelle question' pour obtenir une question aléatoire inspirée du format EM Lyon. Préparez votre réponse en 1 minute puis présentez-la comme à l'oral.
          </p>
        </div>
      </div>

      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/30">
        <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <HelpCircle className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">Questions d'entretien EM Lyon</div>
              <div className="text-yellow-100 text-sm font-normal mt-1">
                Questions aléatoires pour l'entretien "Flash" avec cartes thématiques
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <RandomWordGenerator type="emlyon" />
        </CardContent>
      </Card>
    </div>
  );
};

export default EMLyonGeneratorPage;

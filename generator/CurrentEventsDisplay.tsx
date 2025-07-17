
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, Calendar } from 'lucide-react';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';

interface CurrentEventsDisplayProps {
  currentEvents: string;
  language: 'fr' | 'en';
  onRegenerate?: () => void;
}

export const CurrentEventsDisplay = ({ currentEvents, language, onRegenerate }: CurrentEventsDisplayProps) => {
  const handleDownloadPDF = async () => {
    const timestamp = new Date().toISOString().split('T')[0];
    await downloadAsPDF(
      currentEvents, 
      `actualites-geopolitique-${timestamp}`, 
      language === 'fr' ? 'Actualités Géopolitiques' : 'Geopolitical Current Events'
    );
  };

  const handleDownloadText = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadAsText(currentEvents, `actualites-geopolitique-${timestamp}`);
  };

  const formatEvents = (content: string) => {
    const lines = content.split('\n').filter(line => line.trim());
    let eventNumber = 1;
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      // Détection d'un nouvel événement (ligne qui semble être un titre)
      if (trimmedLine.length > 20 && trimmedLine.length < 150 && !trimmedLine.includes('Source:') && !trimmedLine.includes('Date:')) {
        return (
          <div key={index} className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                {eventNumber++}
              </span>
              <h4 className="font-semibold text-orange-800">{trimmedLine}</h4>
            </div>
          </div>
        );
      }
      
      // Source ou date
      if (trimmedLine.includes('Source:') || trimmedLine.includes('Date:')) {
        return (
          <p key={index} className="text-sm text-gray-600 italic mb-2 ml-4">
            {trimmedLine}
          </p>
        );
      }
      
      // Contenu normal
      return (
        <p key={index} className="text-gray-700 mb-2 leading-relaxed ml-4">
          {trimmedLine}
        </p>
      );
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {language === 'fr' ? 'Actualités Récentes' : 'Recent Current Events'}
          </CardTitle>
          <div className="flex gap-2">
            {onRegenerate && (
              <Button onClick={onRegenerate} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                {language === 'fr' ? 'Régénérer' : 'Regenerate'}
              </Button>
            )}
            <Button onClick={handleDownloadText} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1" />
              TXT
            </Button>
            <Button onClick={handleDownloadPDF} size="sm">
              <Download className="h-4 w-4 mr-1" />
              PDF
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
            <p className="text-sm text-orange-800">
              {language === 'fr' 
                ? "Faits d'actualité récents en lien avec le cours, avec sources et dates."
                : "Recent current events related to the course, with sources and dates."
              }
            </p>
          </div>
          
          <div className="space-y-2">
            {formatEvents(currentEvents)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

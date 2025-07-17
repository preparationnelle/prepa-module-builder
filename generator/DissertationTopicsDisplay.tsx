
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, FileText } from 'lucide-react';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';

interface DissertationTopicsDisplayProps {
  dissertationTopics: string;
  language: 'fr' | 'en';
  onRegenerate?: () => void;
}

export const DissertationTopicsDisplay = ({ dissertationTopics, language, onRegenerate }: DissertationTopicsDisplayProps) => {
  const handleDownloadPDF = async () => {
    const timestamp = new Date().toISOString().split('T')[0];
    await downloadAsPDF(
      dissertationTopics, 
      `sujets-dissertation-${timestamp}`, 
      language === 'fr' ? 'Sujets de Dissertation - Géopolitique' : 'Dissertation Topics - Geopolitics'
    );
  };

  const handleDownloadText = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadAsText(dissertationTopics, `sujets-dissertation-${timestamp}`);
  };

  const formatTopics = (content: string) => {
    const sections = content.split(/\n\s*\n/);
    let topicNumber = 1;
    
    return sections.map((section, index) => {
      const trimmedSection = section.trim();
      if (!trimmedSection) return null;
      
      // Si la section contient "Sujet" au début, c'est un nouveau sujet
      if (trimmedSection.toLowerCase().includes('sujet') && trimmedSection.length < 200) {
        return (
          <div key={index} className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-bold text-blue-800 mb-2">
              {language === 'fr' ? `Sujet ${topicNumber++}` : `Topic ${topicNumber++}`}
            </h3>
            <p className="text-blue-700 font-medium">{trimmedSection}</p>
          </div>
        );
      }
      
      // Sinon, c'est du contenu normal
      return (
        <div key={index} className="mb-4">
          {trimmedSection.split('\n').map((line, lineIndex) => {
            const trimmedLine = line.trim();
            
            if (trimmedLine.match(/^[IVX]+\./)) {
              return (
                <h4 key={lineIndex} className="font-semibold text-gray-800 mt-3 mb-1">
                  {trimmedLine}
                </h4>
              );
            }
            
            if (trimmedLine.match(/^[A-Z]\./)) {
              return (
                <p key={lineIndex} className="ml-4 text-gray-700 mb-1">
                  {trimmedLine}
                </p>
              );
            }
            
            return (
              <p key={lineIndex} className="text-gray-600 mb-2 leading-relaxed">
                {trimmedLine}
              </p>
            );
          })}
        </div>
      );
    }).filter(Boolean);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {language === 'fr' ? 'Sujets de Dissertation' : 'Dissertation Topics'}
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
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
            <p className="text-sm text-green-800">
              {language === 'fr' 
                ? "Sujets d'entraînement adaptés aux exigences des concours ECG avec plans structurés."
                : "Training topics adapted to ECG competition requirements with structured plans."
              }
            </p>
          </div>
          
          <div className="space-y-4">
            {formatTopics(dissertationTopics)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

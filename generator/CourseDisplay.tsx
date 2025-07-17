
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, BookOpen } from 'lucide-react';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';

interface CourseDisplayProps {
  structuredCourse: string;
  language: 'fr' | 'en';
  onRegenerate?: () => void;
}

export const CourseDisplay = ({ structuredCourse, language, onRegenerate }: CourseDisplayProps) => {
  const handleDownloadPDF = async () => {
    const timestamp = new Date().toISOString().split('T')[0];
    await downloadAsPDF(
      structuredCourse, 
      `cours-geopolitique-${timestamp}`, 
      language === 'fr' ? 'Cours de Géopolitique Structuré' : 'Structured Geopolitics Course'
    );
  };

  const handleDownloadText = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadAsText(structuredCourse, `cours-geopolitique-${timestamp}`);
  };

  const formatCourseContent = (content: string) => {
    // Diviser le contenu en sections pour un meilleur affichage
    const lines = content.split('\n');
    const formattedLines = lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      // Titres principaux (I., II., III.)
      if (/^[IVX]+\.\s/.test(trimmedLine)) {
        return (
          <h2 key={index} className="text-xl font-bold text-blue-700 mt-6 mb-3 border-b border-blue-200 pb-2">
            {trimmedLine}
          </h2>
        );
      }
      
      // Sous-titres (A., B., C. ou 1., 2., 3.)
      if (/^[A-Z]\.\s/.test(trimmedLine) || /^\d+\.\s/.test(trimmedLine)) {
        return (
          <h3 key={index} className="text-lg font-semibold text-blue-600 mt-4 mb-2">
            {trimmedLine}
          </h3>
        );
      }
      
      // Définitions (lignes commençant par "Définition")
      if (trimmedLine.toLowerCase().includes('définition')) {
        return (
          <div key={index} className="bg-amber-50 border-l-4 border-amber-400 p-3 my-3 rounded-r">
            <p className="text-amber-800 font-medium">{trimmedLine}</p>
          </div>
        );
      }
      
      // Exemples
      if (trimmedLine.toLowerCase().includes('exemple')) {
        return (
          <div key={index} className="bg-green-50 border-l-4 border-green-400 p-3 my-3 rounded-r">
            <p className="text-green-800">{trimmedLine}</p>
          </div>
        );
      }
      
      // Lignes vides
      if (trimmedLine === '') {
        return <div key={index} className="h-2"></div>;
      }
      
      // Paragraphes normaux
      return (
        <p key={index} className="text-gray-700 mb-2 leading-relaxed">
          {trimmedLine}
        </p>
      );
    });

    return formattedLines;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            {language === 'fr' ? 'Fiche de Cours Structurée' : 'Structured Course Sheet'}
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
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="text-sm text-blue-800">
              {language === 'fr' 
                ? "Cours structuré avec plan hiérarchisé, points-clés et exemples. Idéal pour révision et compréhension."
                : "Structured course with hierarchical plan, key points and examples. Ideal for revision and understanding."
              }
            </p>
          </div>
          
          <div className="prose max-w-none bg-white p-6 rounded-lg border">
            {formatCourseContent(structuredCourse)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

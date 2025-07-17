
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Download, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { downloadAsText, downloadAsPDF } from '@/utils/downloadUtils';

interface CaseStudyDisplayProps {
  caseStudy: string;
  wordCount: number;
  language: 'fr' | 'en';
}

export const CaseStudyDisplay = ({ caseStudy, wordCount, language }: CaseStudyDisplayProps) => {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(caseStudy);
      toast({
        title: language === 'fr' ? "Copié !" : "Copied!",
        description: language === 'fr' ? "L'étude de cas a été copiée" : "Case study has been copied",
      });
    } catch (error) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Impossible de copier" : "Failed to copy",
        variant: "destructive",
      });
    }
  };

  const handleDownloadTxt = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = language === 'fr' ? `etude-cas-${timestamp}` : `case-study-${timestamp}`;
    downloadAsText(caseStudy, filename);
  };

  const handleDownloadPdf = async () => {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = language === 'fr' ? `etude-cas-${timestamp}` : `case-study-${timestamp}`;
    const title = language === 'fr' ? 'Étude de Cas Géopolitique' : 'Geopolitical Case Study';
    await downloadAsPDF(caseStudy, filename, title);
  };

  return (
    <Card className="mt-8 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">
                {language === 'fr' ? 'Étude de cas générée' : 'Generated case study'}
              </CardTitle>
              <div className="text-blue-100 text-sm font-normal mt-1">
                {wordCount} {language === 'fr' ? 'mots' : 'words'}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={copyToClipboard}
              variant="secondary"
              size="sm"
              className="bg-white/20 text-white hover:bg-white/30 border-white/20"
            >
              <Copy className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Copier' : 'Copy'}
            </Button>
            <Button
              onClick={handleDownloadTxt}
              variant="secondary"
              size="sm"
              className="bg-white/20 text-white hover:bg-white/30 border-white/20"
            >
              <Download className="h-4 w-4 mr-2" />
              TXT
            </Button>
            <Button
              onClick={handleDownloadPdf}
              variant="secondary"
              size="sm"
              className="bg-white/20 text-white hover:bg-white/30 border-white/20"
            >
              <Download className="h-4 w-4 mr-2" />
              PDF
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="prose max-w-none">
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {caseStudy}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

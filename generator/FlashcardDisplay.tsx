
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw } from 'lucide-react';
import { downloadAsCSV, downloadAsPDF } from '@/utils/downloadUtils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface FlashcardDisplayProps {
  flashcards: string;
  language: 'fr' | 'en';
  onRegenerate?: () => void;
}

export const FlashcardDisplay = ({ flashcards, language, onRegenerate }: FlashcardDisplayProps) => {
  const parseFlashcards = (csvContent: string) => {
    const lines = csvContent.trim().split('\n');
    if (lines.length === 0) return [];
    
    // Skip header if it exists
    const dataLines = lines[0].includes('|||') ? lines : lines.slice(1);
    
    return dataLines.map((line, index) => {
      const parts = line.split('|||');
      return {
        id: index,
        front: parts[0] || '',
        back: parts[1] || '',
        type: parts[2] || 'concept'
      };
    });
  };

  const flashcardData = parseFlashcards(flashcards);

  const handleDownloadCSV = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadAsCSV(flashcards, `flashcards-geopolitique-${timestamp}`);
  };

  const handleDownloadPDF = async () => {
    const timestamp = new Date().toISOString().split('T')[0];
    const formattedContent = flashcardData.map((card, index) => 
      `${index + 1}. ${card.front}\n   → ${card.back}\n   [${card.type}]\n`
    ).join('\n');
    
    await downloadAsPDF(
      formattedContent, 
      `flashcards-geopolitique-${timestamp}`, 
      language === 'fr' ? 'Flashcards de Géopolitique' : 'Geopolitics Flashcards'
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            📚 {language === 'fr' ? 'Flashcards (Format Anki)' : 'Flashcards (Anki Format)'}
            <span className="text-sm font-normal text-muted-foreground">
              ({flashcardData.length} {language === 'fr' ? 'cartes' : 'cards'})
            </span>
          </CardTitle>
          <div className="flex gap-2">
            {onRegenerate && (
              <Button onClick={onRegenerate} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                {language === 'fr' ? 'Régénérer' : 'Regenerate'}
              </Button>
            )}
            <Button onClick={handleDownloadCSV} size="sm">
              <Download className="h-4 w-4 mr-1" />
              CSV
            </Button>
            <Button onClick={handleDownloadPDF} variant="outline" size="sm">
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
                ? "Ces flashcards sont au format Anki. Vous pouvez importer le fichier CSV directement dans Anki ou utiliser le PDF pour réviser."
                : "These flashcards are in Anki format. You can import the CSV file directly into Anki or use the PDF for review."
              }
            </p>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead className="w-[40%]">
                  {language === 'fr' ? 'Question' : 'Question'}
                </TableHead>
                <TableHead className="w-[40%]">
                  {language === 'fr' ? 'Réponse' : 'Answer'}
                </TableHead>
                <TableHead className="w-[20%]">
                  {language === 'fr' ? 'Type' : 'Type'}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flashcardData.map((card, index) => (
                <TableRow key={card.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="font-medium">{card.front}</TableCell>
                  <TableCell>{card.back}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {card.type}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Save, Trash2, Download, FileText, FileSpreadsheet } from 'lucide-react';
import { downloadFlashcardsAsCSV, downloadFlashcardsAsPDF } from '@/utils/flashcardDownloadUtils';
import { downloadFlashcardsAsExcel } from '@/utils/flashcardExcelUtils';

interface FlashcardData {
  id?: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at?: string;
}

interface SavedFlashcardsListProps {
  language: 'fr' | 'en';
  savedFlashcards: FlashcardData[];
  onDelete: (id: string) => void;
}

export const SavedFlashcardsList = ({ 
  language, 
  savedFlashcards, 
  onDelete 
}: SavedFlashcardsListProps) => {
  if (savedFlashcards.length === 0) {
    return null;
  }

  const handleDownloadCSV = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadFlashcardsAsCSV(savedFlashcards, `flashcards-${timestamp}`);
  };

  const handleDownloadPDF = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadFlashcardsAsPDF(savedFlashcards, `flashcards-${timestamp}`);
  };

  const handleDownloadExcel = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadFlashcardsAsExcel(savedFlashcards, `flashcards-${timestamp}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Save className="h-5 w-5" />
            {language === 'fr' ? 'Flashcards sauvegardées' : 'Saved Flashcards'}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {savedFlashcards.length} {language === 'fr' ? 'éléments' : 'items'}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCSV}
              className="flex items-center gap-1"
            >
              <Download className="h-4 w-4" />
              CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadExcel}
              className="flex items-center gap-1 bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
            >
              <FileSpreadsheet className="h-4 w-4" />
              Excel
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadPDF}
              className="flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              PDF
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {savedFlashcards.map((flashcard) => (
            <div key={flashcard.id} className="border rounded-lg p-4 space-y-3 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-3">
                  {/* Words */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-blue-600">🇫🇷 Français</span>
                      </div>
                      <p className="font-semibold text-lg">{flashcard.word_fr}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-green-600">🇬🇧 English</span>
                      </div>
                      <p className="font-semibold text-lg">{flashcard.word_en}</p>
                    </div>
                  </div>
                  
                  {/* Sentences */}
                  <div className="grid grid-cols-1 gap-3 pt-2 border-t border-gray-200">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">Phrase française</p>
                      <p className="text-sm italic text-gray-700 bg-blue-50 p-2 rounded">"{flashcard.sentence_fr}"</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-green-600 uppercase tracking-wide">English sentence</p>
                      <p className="text-sm italic text-gray-700 bg-green-50 p-2 rounded">"{flashcard.sentence_en}"</p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(flashcard.id!)}
                  className="text-destructive hover:text-destructive ml-4"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

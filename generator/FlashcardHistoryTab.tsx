
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  History, 
  Search, 
  Download, 
  FileText, 
  Trash2, 
  Calendar,
  Filter,
  RefreshCw
} from 'lucide-react';
import { downloadFlashcardsAsCSV, downloadFlashcardsAsPDF } from '@/utils/flashcardDownloadUtils';
import { downloadFlashcardsAsExcel } from '@/utils/flashcardExcelUtils';

interface FlashcardData {
  id: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at: string;
}

interface FlashcardHistoryTabProps {
  language: 'fr' | 'en';
  flashcards: FlashcardData[];
  isLoading: boolean;
  onDelete: (id: string) => void;
}

export const FlashcardHistoryTab = ({ 
  language, 
  flashcards, 
  isLoading,
  onDelete 
}: FlashcardHistoryTabProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');

  const filteredFlashcards = flashcards.filter(card => {
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        card.word_fr.toLowerCase().includes(query) ||
        card.word_en.toLowerCase().includes(query) ||
        card.sentence_fr.toLowerCase().includes(query) ||
        card.sentence_en.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Date filter
    if (dateFilter !== 'all') {
      const cardDate = new Date(card.created_at);
      const now = new Date();
      
      switch (dateFilter) {
        case 'today':
          return cardDate.toDateString() === now.toDateString();
        case 'week':
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          return cardDate >= oneWeekAgo;
        case 'month':
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
          return cardDate >= oneMonthAgo;
        default:
          return true;
      }
    }

    return true;
  });

  const handleDownloadCSV = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadFlashcardsAsCSV(filteredFlashcards, `flashcards-historique-${timestamp}`);
  };

  const handleDownloadPDF = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadFlashcardsAsPDF(filteredFlashcards, `flashcards-historique-${timestamp}`);
  };

  const handleDownloadExcel = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    downloadFlashcardsAsExcel(filteredFlashcards, `flashcards-historique-${timestamp}`);
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            {language === 'fr' ? 'Chargement de l\'historique...' : 'Loading history...'}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (flashcards.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            {language === 'fr' ? 'Aucune flashcard dans l\'historique' : 'No flashcards in history'}
          </h3>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Créez votre première flashcard pour commencer'
              : 'Create your first flashcard to get started'
            }
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            {language === 'fr' ? 'Historique complet' : 'Complete History'}
            <Badge variant="secondary" className="ml-2">
              {filteredFlashcards.length} / {flashcards.length}
            </Badge>
          </CardTitle>
          
          <div className="flex flex-wrap items-center gap-2">
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
              <Download className="h-4 w-4" />
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
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Search and filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={language === 'fr' ? 'Rechercher dans les flashcards...' : 'Search flashcards...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            {(['all', 'today', 'week', 'month'] as const).map((filter) => (
              <Button
                key={filter}
                variant={dateFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setDateFilter(filter)}
                className="flex items-center gap-1"
              >
                <Calendar className="h-3 w-3" />
                {filter === 'all' && (language === 'fr' ? 'Tout' : 'All')}
                {filter === 'today' && (language === 'fr' ? 'Aujourd\'hui' : 'Today')}
                {filter === 'week' && (language === 'fr' ? 'Semaine' : 'Week')}
                {filter === 'month' && (language === 'fr' ? 'Mois' : 'Month')}
              </Button>
            ))}
          </div>
        </div>

        {/* Flashcards list */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredFlashcards.map((flashcard) => (
            <div key={flashcard.id} className="border rounded-lg p-4 space-y-3 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-3">
                  {/* Words section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          🇫🇷 Français
                        </span>
                      </div>
                      <p className="font-semibold text-lg text-blue-700">{flashcard.word_fr}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                          🇬🇧 English
                        </span>
                      </div>
                      <p className="font-semibold text-lg text-green-700">{flashcard.word_en}</p>
                    </div>
                  </div>
                  
                  {/* Sentences section */}
                  <div className="space-y-3 pt-2 border-t border-gray-200">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                        {language === 'fr' ? 'Phrase française' : 'French sentence'}
                      </p>
                      <p className="text-sm italic text-gray-700 bg-blue-50 p-3 rounded border-l-4 border-blue-200">
                        "{flashcard.sentence_fr}"
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-green-600 uppercase tracking-wide">
                        {language === 'fr' ? 'Phrase anglaise' : 'English sentence'}
                      </p>
                      <p className="text-sm italic text-gray-700 bg-green-50 p-3 rounded border-l-4 border-green-200">
                        "{flashcard.sentence_en}"
                      </p>
                    </div>
                  </div>

                  {/* Creation date */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {language === 'fr' ? 'Créée le' : 'Created on'} {new Date(flashcard.created_at).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(flashcard.id)}
                  className="text-destructive hover:text-destructive hover:bg-red-50 ml-4"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredFlashcards.length === 0 && searchQuery && (
          <div className="text-center py-8">
            <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">
              {language === 'fr' 
                ? `Aucun résultat pour "${searchQuery}"`
                : `No results for "${searchQuery}"`
              }
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

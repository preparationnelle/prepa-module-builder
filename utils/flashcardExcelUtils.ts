
import * as XLSX from 'xlsx';

interface FlashcardData {
  id?: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at?: string;
}

export const downloadFlashcardsAsExcel = (flashcards: FlashcardData[], filename: string = 'flashcards') => {
  // Prepare data for Excel
  const excelData = flashcards.map((card, index) => ({
    'N°': index + 1,
    'Mot Français': card.word_fr,
    'Mot Anglais': card.word_en,
    'Phrase Française': card.sentence_fr,
    'Phrase Anglaise': card.sentence_en,
    'Date de création': card.created_at ? new Date(card.created_at).toLocaleDateString('fr-FR') : ''
  }));

  // Create workbook and worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(excelData);

  // Set column widths
  const columnWidths = [
    { wch: 5 },   // N°
    { wch: 20 },  // Mot Français
    { wch: 20 },  // Mot Anglais
    { wch: 40 },  // Phrase Française
    { wch: 40 },  // Phrase Anglaise
    { wch: 15 },  // Date
  ];
  worksheet['!cols'] = columnWidths;

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Flashcards');

  // Generate and download file
  XLSX.writeFile(workbook, `${filename}.xlsx`);
};

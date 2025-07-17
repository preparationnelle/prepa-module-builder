
import jsPDF from 'jspdf';

interface FlashcardData {
  id?: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at?: string;
}

export const downloadFlashcardsAsCSV = (flashcards: FlashcardData[], filename: string = 'flashcards') => {
  const headers = ['French Word', 'English Word', 'French Sentence', 'English Sentence', 'Created At'];
  const csvContent = [
    headers.join(','),
    ...flashcards.map(card => [
      `"${card.word_fr}"`,
      `"${card.word_en}"`,
      `"${card.sentence_fr}"`,
      `"${card.sentence_en}"`,
      card.created_at ? new Date(card.created_at).toLocaleDateString() : ''
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadFlashcardsAsPDF = (flashcards: FlashcardData[], filename: string = 'flashcards') => {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(20);
  doc.text('Mes Flashcards', 20, 20);
  
  let yPosition = 40;
  const pageHeight = doc.internal.pageSize.height;
  
  flashcards.forEach((card, index) => {
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Card number
    doc.setFontSize(14);
    doc.text(`${index + 1}.`, 20, yPosition);
    
    // French content
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('🇫🇷 Français:', 30, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text(`${card.word_fr}`, 30, yPosition + 7);
    doc.setFontSize(10);
    doc.text(`"${card.sentence_fr}"`, 30, yPosition + 14);
    
    // English content
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('🇬🇧 English:', 30, yPosition + 25);
    doc.setFont(undefined, 'normal');
    doc.text(`${card.word_en}`, 30, yPosition + 32);
    doc.setFontSize(10);
    doc.text(`"${card.sentence_en}"`, 30, yPosition + 39);
    
    yPosition += 55;
  });
  
  doc.save(`${filename}.pdf`);
};

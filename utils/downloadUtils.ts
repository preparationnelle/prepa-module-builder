
export const downloadAsCSV = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const downloadAsPDF = async (content: string, filename: string, title: string) => {
  // Créer un HTML formaté pour le PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style>
        body {
          font-family: 'Times New Roman', serif;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
          margin-bottom: 30px;
        }
        h2 {
          color: #34495e;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        h3 {
          color: #7f8c8d;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        p {
          margin-bottom: 12px;
          text-align: justify;
        }
        .definition {
          background-color: #f8f9fa;
          border-left: 4px solid #3498db;
          padding: 10px 15px;
          margin: 15px 0;
        }
        pre {
          background-color: #f4f4f4;
          padding: 15px;
          border-radius: 5px;
          overflow-wrap: break-word;
          white-space: pre-wrap;
        }
      </style>
    </head>
    <body>
      <h1>${title}</h1>
      <div>${content.replace(/\n/g, '<br>')}</div>
    </body>
    </html>
  `;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const downloadAsText = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const downloadAll = async (
  structuredCourse: string,
  flashcards: string,
  dissertationTopics: string,
  currentEvents: string,
  language: 'fr' | 'en'
) => {
  const timestamp = new Date().toISOString().split('T')[0];
  const prefix = language === 'fr' ? 'geopolitique' : 'geopolitics';
  
  // Télécharger tous les fichiers
  await downloadAsPDF(structuredCourse, `${prefix}-cours-${timestamp}`, language === 'fr' ? 'Cours de Géopolitique' : 'Geopolitics Course');
  downloadAsCSV(flashcards, `${prefix}-flashcards-${timestamp}`);
  await downloadAsPDF(dissertationTopics, `${prefix}-sujets-${timestamp}`, language === 'fr' ? 'Sujets de Dissertation' : 'Dissertation Topics');
  await downloadAsPDF(currentEvents, `${prefix}-actualites-${timestamp}`, language === 'fr' ? 'Actualités' : 'Current Events');
};

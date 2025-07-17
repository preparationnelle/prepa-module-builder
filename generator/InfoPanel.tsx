
import React from 'react';

type InfoPanelProps = {
  language: 'fr' | 'en';
};

export const InfoPanel = ({ language }: InfoPanelProps) => {
  return (
    <div className="text-center py-12">
      <div className="bg-accent rounded-lg p-8 max-w-2xl mx-auto border border-border">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          {language === 'fr' ? 'Comment ça marche ?' : 'How does it work?'}
        </h2>
        <ol className="text-left space-y-4 mb-6">
          <li className="flex">
            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 text-sm font-semibold">1</span>
            <span className="text-foreground">
              {language === 'fr'
                ? "Entrez une question d'entretien classique comme \"Parlez-moi de vous\" ou \"Quels sont vos défauts ?\""
                : "Enter a classic interview question like \"Tell me about yourself\" or \"What are your weaknesses?\""}
            </span>
          </li>
          <li className="flex">
            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 text-sm font-semibold">2</span>
            <span className="text-foreground">
              {language === 'fr'
                ? "Ajoutez des informations sur votre profil pour personnaliser davantage votre réponse"
                : "Add information about your profile to personalize your answer further"}
            </span>
          </li>
          <li className="flex">
            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 text-sm font-semibold">3</span>
            <span className="text-foreground">
              {language === 'fr'
                ? "Notre système génère une réponse structurée avec storytelling, analyse critique et conseils d'entraînement"
                : "Our system generates a structured answer with storytelling, critical analysis and training advice"}
            </span>
          </li>
          <li className="flex">
            <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 text-sm font-semibold">4</span>
            <span className="text-foreground">
              {language === 'fr'
                ? "Utilisez cette réponse comme base pour développer votre propre réponse personnalisée"
                : "Use this answer as a foundation to develop your own personalized response"}
            </span>
          </li>
        </ol>
        <p className="text-sm text-muted-foreground italic">
          {language === 'fr'
            ? "Note: Toutes les anecdotes de storytelling seront mises en italique pour faciliter leur identification."
            : "Note: All storytelling anecdotes will be in italics for easy identification."}
        </p>
      </div>
    </div>
  );
};

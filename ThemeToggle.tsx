
import React from 'react';

interface ThemeToggleProps {
  variant?: 'default' | 'icon';
}

// Le composant ne rend plus rien car le mode sombre est désactivé
export const ThemeToggle = ({ variant = 'default' }: ThemeToggleProps) => {
  return null;
};

import React from 'react';
import { Instagram, Linkedin, Podcast } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-secondary text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Prepa Rationnelle</h3>
            <p className="text-gray-300 mb-4">
              Accompagnement pour les entretiens de personnalité des concours.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/dimitar-dimitrov-372348200/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/prepa_rationnelle/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="/apropos" className="text-gray-300 hover:text-white">
                  À propos
                </a>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              <li>
                <a 
                  href="https://www.europe1.fr/emissions/la-france-bouge-academie/prepa-rationnelle-concue-pour-revolutionner-le-monde-la-preparation-pour-integrer-les-ecoles-de-commerce-667526" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <Podcast className="h-4 w-4" />
                  <span>Podcast Europe 1</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Prepa Rationnelle. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

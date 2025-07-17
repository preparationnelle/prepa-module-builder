
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AuthOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-2">Accès réservé</h2>
        <p className="text-gray-600 mb-6">
          Cette fonctionnalité est réservée aux utilisateurs connectés.
          Connectez-vous ou inscrivez-vous pour accéder à tout le contenu.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default">
            <Link to="/login">Connexion</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/register">Inscription</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthOverlay;

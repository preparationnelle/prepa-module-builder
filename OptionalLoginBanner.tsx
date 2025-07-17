
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { User, History, X } from 'lucide-react';

const OptionalLoginBanner: React.FC = () => {
  const { currentUser } = useAuth();
  const [dismissed, setDismissed] = useState(false);

  // Don't show banner if user is already logged in or if dismissed
  if (currentUser || dismissed) {
    return null;
  }

  return (
    <Card className="mb-6 border-blue-200 bg-blue-50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <History className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900">
                Sauvegardez votre historique
              </h3>
              <p className="text-sm text-blue-700">
                Connectez-vous pour conserver l'historique de vos requêtes et actions sur le site
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100">
              <Link to="/login">
                <User className="h-4 w-4 mr-1" />
                Se connecter
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDismissed(true)}
              className="text-blue-600 hover:bg-blue-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OptionalLoginBanner;

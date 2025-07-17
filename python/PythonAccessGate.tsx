
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Lock, Check, CreditCard, Key, Mail, Eye } from 'lucide-react';
import { usePythonAccess } from '@/hooks/usePythonAccess';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';

interface PythonAccessGateProps {
  children: React.ReactNode;
}

export const PythonAccessGate: React.FC<PythonAccessGateProps> = ({ children }) => {
  const { hasAccess, loading, validateAccessCode, createCheckoutSession } = usePythonAccess();
  const { currentUser } = useAuth();
  const [code, setCode] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [error, setError] = useState('');
  const [validating, setValidating] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [showGuestEmailForm, setShowGuestEmailForm] = useState(false);

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setValidating(true);
    setError('');

    try {
      await validateAccessCode(code, guestEmail);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setValidating(false);
    }
  };

  const handlePurchase = async () => {
    // Si pas connecté, demander l'email pour l'achat invité
    if (!currentUser && !showGuestEmailForm) {
      setShowGuestEmailForm(true);
      return;
    }

    setPurchasing(true);
    setError('');

    try {
      await createCheckoutSession(guestEmail);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la création de la session de paiement');
    } finally {
      setPurchasing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Offre d'achat */}
      <Card className="bg-gradient-to-br from-orange-50 to-blue-50 border-orange-200">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CreditCard className="h-8 w-8 text-orange-600" />
            <CardTitle className="text-2xl text-orange-800">Formation Python ECG - Accès Complet</CardTitle>
          </div>
          <Badge variant="destructive" className="mb-4 bg-red-500">
            Offre limitée - 10 premiers inscrits
          </Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-4xl font-bold text-orange-600">99€</span>
              <span className="text-2xl text-gray-400 line-through">199€</span>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Accès illimité à tous les modules de formation Python pour prépa ECG
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              Ce que vous obtenez :
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Accès à tous les modules Python (Fondamentaux, Matrices, Analyse)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Vidéos de formation détaillées</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Référence complète des commandes Python ECG</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Exercices pratiques et corrigés</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Accès à vie - pas d'abonnement</span>
              </li>
            </ul>
          </div>

          {/* Formulaire email invité si nécessaire */}
          {!currentUser && showGuestEmailForm && (
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Votre email pour la facture</h4>
              </div>
              <Input
                type="email"
                placeholder="votre@email.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="mb-3"
              />
              <p className="text-sm text-blue-600">
                Cet email sera utilisé pour votre facture et pour recevoir votre code d'accès
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handlePurchase} 
              disabled={purchasing || (!currentUser && showGuestEmailForm && !guestEmail.trim())}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-lg py-6"
            >
              {purchasing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Redirection en cours...
                </>
              ) : (
                <>
                  <CreditCard className="h-5 w-5 mr-2" />
                  Obtenir l'accès maintenant - 99€
                </>
              )}
            </Button>

            <Link to="/pourquoi-python-prepa-ecg" className="flex-1">
              <Button variant="outline" className="w-full text-lg py-6 border-orange-300 text-orange-700 hover:bg-orange-50">
                <Eye className="h-5 w-5 mr-2" />
                Aperçu gratuit
              </Button>
            </Link>
          </div>

          {!currentUser && (
            <p className="text-center text-sm text-gray-600">
              Aucune inscription requise - Paiement sécurisé par Stripe
            </p>
          )}
        </CardContent>
      </Card>

      {/* Formulaire de code d'accès */}
      <Card>
        <CardHeader className="text-center">
          <Key className="h-8 w-8 mx-auto mb-4 text-blue-600" />
          <CardTitle>Vous avez déjà un code d'accès ?</CardTitle>
          <p className="text-muted-foreground">
            Saisissez le code qui vous a été fourni après votre achat
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Entrez votre code d'accès"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="text-center text-lg tracking-wider"
                maxLength={20}
              />
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              disabled={!code.trim() || validating}
              className="w-full"
            >
              {validating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Vérification...
                </>
              ) : (
                'Valider le code'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

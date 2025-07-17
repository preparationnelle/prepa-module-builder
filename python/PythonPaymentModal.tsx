
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Check, X, Loader2 } from 'lucide-react';
import { usePythonAccess } from '@/hooks/usePythonAccess';

interface PythonPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  exerciseTitle?: string;
}

export const PythonPaymentModal: React.FC<PythonPaymentModalProps> = ({
  isOpen,
  onClose,
  exerciseTitle
}) => {
  const { createCheckoutSession } = usePythonAccess();
  const [purchasing, setPurchasing] = React.useState(false);

  const handlePurchase = async () => {
    setPurchasing(true);
    try {
      await createCheckoutSession();
    } catch (error) {
      console.error('Erreur lors de l\'achat:', error);
    } finally {
      setPurchasing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-orange-800">
              Accès Premium Requis
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center">
            <Badge variant="destructive" className="mb-3 bg-red-500">
              Exercice Premium
            </Badge>
            <p className="text-gray-600">
              {exerciseTitle ? `L'exercice "${exerciseTitle}"` : 'Cet exercice'} fait partie 
              du contenu premium. Débloquez l'accès complet pour continuer.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-orange-50 to-blue-50 border-orange-200">
            <CardContent className="p-4">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <span className="text-3xl font-bold text-orange-600">99€</span>
                  <span className="text-xl text-gray-400 line-through">199€</span>
                </div>
                <p className="text-sm text-gray-600">
                  Accès illimité à tous les modules Python ECG
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Tous les modules de cours et exercices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Validation automatique des exercices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Référence complète Python ECG</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Accès à vie - pas d'abonnement</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button
              onClick={handlePurchase}
              disabled={purchasing}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
            >
              {purchasing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Redirection...
                </>
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Obtenir l'accès - 99€
                </>
              )}
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Plus tard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

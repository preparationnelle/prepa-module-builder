import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface FlashCard {
  id: number;
  question: string;
  answer: string;
  isBlock?: boolean;
}

const flashCards: FlashCard[] = [
  {
    id: 1,
    question: "Somme d'une suite constante c de m à n",
    answer: "\\sum_{i=m}^{n} c = (n-m+1)\\,c",
    isBlock: true
  },
  {
    id: 2,
    question: "Somme des premiers entiers de 1 à n",
    answer: "\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}",
    isBlock: true
  },
  {
    id: 3,
    question: "Somme des carrés des premiers entiers de 1 à n",
    answer: "\\sum_{i=1}^{n} i^{2} = \\frac{n(n+1)(2n+1)}{6}",
    isBlock: true
  },
  {
    id: 4,
    question: "Somme des cubes des premiers entiers de 1 à n",
    answer: "\\sum_{i=1}^{n} i^{3} = \\left[\\frac{n(n+1)}{2}\\right]^{2}",
    isBlock: true
  },
  {
    id: 5,
    question: "Somme géométrique de 0 à n quand q = 1",
    answer: "\\sum_{i=0}^{n} q^{i} = n+1",
    isBlock: true
  },
  {
    id: 6,
    question: "Somme géométrique de 0 à n quand q ≠ 1",
    answer: "\\sum_{i=0}^{n} q^{i} = \\frac{1-q^{n+1}}{1-q}",
    isBlock: true
  },
  {
    id: 7,
    question: "Formule générale d'une somme géométrique de m à n",
    answer: "\\sum_{i=m}^{n} q^{i} = q^{m}\\,\\frac{1-q^{n-m+1}}{1-q}",
    isBlock: true
  },
  {
    id: 8,
    question: "Somme télescopique",
    answer: "\\sum_{i=0}^{n} (u_{i+1}-u_i) = u_{n+1} - u_0",
    isBlock: true
  },
  {
    id: 9,
    question: "Factorielle de n",
    answer: "n! = \\prod_{i=1}^{n} i",
    isBlock: true
  },
  {
    id: 10,
    question: "Produit d'une suite constante λ",
    answer: "\\prod_{i=1}^{n} \\lambda = \\lambda^{n}",
    isBlock: true
  },
  {
    id: 11,
    question: "Produit télescopique",
    answer: "\\prod_{i=0}^{n} \\frac{z_{i+1}}{z_{i}} = \\frac{z_{n+1}}{z_{0}}",
    isBlock: true
  },
  {
    id: 12,
    question: "Développement du carré d'une somme",
    answer: "\\left(\\sum_{i=1}^{n} x_i\\right)^{2} = \\sum_{i=1}^{n} x_i^{2} + 2\\sum_{1\\le i<j\\le n} x_i x_j",
    isBlock: true
  }
];

export const FlashCardQuiz: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashCards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashCards.length) % flashCards.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const markAsKnown = () => {
    setKnownCards(prev => new Set([...prev, flashCards[currentCard].id]));
    setTimeout(nextCard, 500);
  };

  const resetProgress = () => {
    setKnownCards(new Set());
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const card = flashCards[currentCard];
  const isKnown = knownCards.has(card.id);
  const progress = (knownCards.size / flashCards.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-foreground">Quiz Sommes et Produits</h2>
          <Button variant="outline" onClick={resetProgress} size="sm">
            <RotateCcw className="w-4 h-4 mr-2" />
            Recommencer
          </Button>
        </div>
        
        <div className="flex items-center gap-4 mb-2">
          <span className="text-sm text-muted-foreground">
            Carte {currentCard + 1} sur {flashCards.length}
          </span>
          <span className="text-sm text-muted-foreground">
            Maîtrisées: {knownCards.size}/{flashCards.length}
          </span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-formation-green h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card 
        className={`min-h-80 cursor-pointer transition-all duration-300 border-2 ${
          isKnown ? 'border-formation-green bg-formation-green/5' : 'border-formation-orange/20'
        }`}
        onClick={flipCard}
      >
        <CardContent className="p-8 flex flex-col items-center justify-center min-h-80 relative">
          {isKnown && (
            <CheckCircle className="absolute top-4 right-4 w-6 h-6 text-formation-green" />
          )}
          
          <div className="text-center">
            {!isFlipped ? (
              <div>
                <div className="text-sm text-formation-orange font-medium mb-4">QUESTION</div>
                <p className="text-lg font-medium text-foreground">{card.question}</p>
                <p className="text-sm text-muted-foreground mt-4">Cliquez pour voir la réponse</p>
              </div>
            ) : (
              <div>
                <div className="text-sm text-formation-green font-medium mb-4">RÉPONSE</div>
                {card.isBlock ? (
                  <BlockMath math={card.answer} />
                ) : (
                  <InlineMath math={card.answer} />
                )}
                <p className="text-sm text-muted-foreground mt-4">Cliquez pour retourner la carte</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mt-6">
        <Button variant="outline" onClick={prevCard}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Précédente
        </Button>

        {isFlipped && !isKnown && (
          <Button onClick={markAsKnown} className="bg-formation-green hover:bg-formation-green/90">
            <CheckCircle className="w-4 h-4 mr-2" />
            Je maîtrise
          </Button>
        )}

        <Button variant="outline" onClick={nextCard}>
          Suivante
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {progress === 100 && (
        <Card className="mt-6 border-formation-green bg-formation-green/5">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-12 h-12 text-formation-green mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Félicitations !</h3>
            <p className="text-muted-foreground">Vous maîtrisez toutes les formules de ce chapitre.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
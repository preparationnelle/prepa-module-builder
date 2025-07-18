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

// Flashcards pour Applications linéaires
const applicationsLineairesCards: FlashCard[] = [
  {
    id: 1,
    question: "Définition d'une application linéaire f : E → F",
    answer: "f(x+y) = f(x) + f(y) \\text{ et } f(\\lambda x) = \\lambda f(x)",
    isBlock: true
  },
  {
    id: 2,
    question: "Qu'est-ce qu'une forme linéaire ?",
    answer: "\\text{Application de } E \\text{ dans } \\mathbb{R} \\text{, ensemble } \\mathcal{L}(E,\\mathbb{R})",
    isBlock: true
  },
  {
    id: 3,
    question: "Qu'est-ce qu'un endomorphisme ?",
    answer: "\\text{Application de } E \\text{ dans } E \\text{, espace } \\mathcal{L}(E)",
    isBlock: true
  },
  {
    id: 4,
    question: "Qu'est-ce qu'un isomorphisme ?",
    answer: "\\text{Application linéaire bijective de } E \\text{ vers } F",
    isBlock: true
  },
  {
    id: 5,
    question: "Image d'une combinaison linéaire par f",
    answer: "f\\left(\\sum_{i=1}^{p} \\alpha_i x_i\\right) = \\sum_{i=1}^{p} \\alpha_i f(x_i)",
    isBlock: true
  },
  {
    id: 6,
    question: "Condition d'égalité de deux applications linéaires",
    answer: "f = g \\Leftrightarrow \\forall i \\in \\{1,\\ldots,n\\}, f(e_i) = g(e_i)",
    isBlock: true
  },
  {
    id: 7,
    question: "Si f ∈ L(E,F) et g ∈ L(F,G), alors g∘f appartient à quel ensemble ?",
    answer: "g \\circ f \\in \\mathcal{L}(E,G)",
    isBlock: true
  },
  {
    id: 8,
    question: "Inverse de la composition (g∘f)⁻¹",
    answer: "(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}",
    isBlock: true
  },
  {
    id: 9,
    question: "Binôme de Newton fonctionnel (si u et v commutent)",
    answer: "(u+v)^p = \\sum_{k=0}^{p} \\binom{p}{k} u^{p-k} \\circ v^k",
    isBlock: true
  },
  {
    id: 10,
    question: "Définition de Q(u) pour un polynôme Q et un endomorphisme u",
    answer: "Q(u) = \\sum_{k=0}^{r} q_k u^k \\text{ si } Q(x) = \\sum_{k=0}^{r} q_k x^k",
    isBlock: true
  },
  {
    id: 11,
    question: "Qu'est-ce qu'un polynôme annulateur de u ?",
    answer: "\\text{Polynôme non nul } Q \\text{ tel que } Q(u) = 0",
    isBlock: true
  },
  {
    id: 12,
    question: "Définition du noyau de f",
    answer: "\\ker f = \\{x \\in E \\mid f(x) = 0_F\\}",
    isBlock: true
  },
  {
    id: 13,
    question: "Condition d'injectivité d'une application linéaire",
    answer: "f \\text{ est injectif} \\Leftrightarrow \\ker f = \\{0_E\\}",
    isBlock: true
  },
  {
    id: 14,
    question: "Définition de l'image de f",
    answer: "\\text{Im } f = \\{y \\in F \\mid \\exists x \\in E, y = f(x)\\}",
    isBlock: true
  },
  {
    id: 15,
    question: "Condition de surjectivité d'une application linéaire",
    answer: "f \\text{ est surjectif} \\Leftrightarrow \\text{Im } f = F",
    isBlock: true
  },
  {
    id: 16,
    question: "Qu'est-ce qu'un sous-espace stable par u ?",
    answer: "F \\text{ stable par } u \\Leftrightarrow u(F) \\subset F",
    isBlock: true
  },
  {
    id: 17,
    question: "Compatibilité linéaire des polynômes d'endomorphismes",
    answer: "(\\alpha Q + \\beta R)(u) = \\alpha Q(u) + \\beta R(u)",
    isBlock: true
  },
  {
    id: 18,
    question: "Compatibilité multiplicative des polynômes d'endomorphismes",
    answer: "(QR)(u) = Q(u) \\circ R(u)",
    isBlock: true
  }
];

interface FlashCardQuizProps {
  cards?: FlashCard[];
  title?: string;
}

export const FlashCardQuiz: React.FC<FlashCardQuizProps> = ({ 
  cards = applicationsLineairesCards, 
  title = "Quiz Applications linéaires" 
}) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const markAsKnown = () => {
    setKnownCards(prev => new Set([...prev, cards[currentCard].id]));
    setTimeout(nextCard, 500);
  };

  const resetProgress = () => {
    setKnownCards(new Set());
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const card = cards[currentCard];
  const isKnown = knownCards.has(card.id);
  const progress = (knownCards.size / cards.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <Button variant="outline" onClick={resetProgress} size="sm">
            <RotateCcw className="w-4 h-4 mr-2" />
            Recommencer
          </Button>
        </div>
        
        <div className="flex items-center gap-4 mb-2">
          <span className="text-sm text-muted-foreground">
            Carte {currentCard + 1} sur {cards.length}
          </span>
          <span className="text-sm text-muted-foreground">
            Maîtrisées: {knownCards.size}/{cards.length}
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
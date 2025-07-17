import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Home, ChevronRight, Brain, Target } from 'lucide-react';
import PythonFlashcardGenerator from '@/components/python/PythonFlashcardGenerator';


const PythonFlashcardsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </div>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <div className="hover:text-foreground transition-colors cursor-pointer">
              Formation
            </div>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="h-4 w-4" />
            Formation Python ECG
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Flashcards Python
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Maîtrisez les 54 commandes essentielles avec nos flashcards interactives !
          </p>
        </div>

        {/* Flashcard Generator */}
        <PythonFlashcardGenerator />

        {/* Stats Section */}
        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-gray-200 dark:to-gray-400">
            Pourquoi ces flashcards ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">54 Commandes</h3>
                <p className="text-sm text-muted-foreground">
                  Toutes les commandes Python au programme ECG, organisées par modules
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">4 Modules</h3>
                <p className="text-sm text-muted-foreground">
                  Fondamentaux, analyse, matrices et probabilités
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">+3 à 5 points</h3>
                <p className="text-sm text-muted-foreground">
                  Points sûrs aux concours avec une préparation optimale
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Prêt à aller plus loin ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Découvrez notre référence complète des commandes Python et notre coaching personnalisé
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50">
                <Code className="h-4 w-4" />
                Référence complète
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonFlashcardsPage;
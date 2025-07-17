import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Wand2, MessageSquare } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';
import { MethodAnglaisPage } from '@/pages/methodologie/MethodAnglaisPage';

const FormationAnglaisPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const generatorTools = [
    {
      id: 'paragraph',
      title: 'Générateur de Paragraphes',
      description: 'Créez des paragraphes argumentatifs en anglais basés sur des articles de presse',
      icon: MessageSquare,
      component: <LanguageParagraphGenerator language={language} />
    },
    {
      id: 'grammar',
      title: 'Générateur de Thèmes',
      description: 'Entraînez-vous aux thèmes grammaticaux avec correction automatique',
      icon: Wand2,
      component: <ThemeGrammaticalGenerator />
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-green-500 text-white">
            <BookOpen className="h-8 w-8" />
          </div>
          Formation Anglais ECG
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Formation complète pour maîtriser l'anglais aux concours des Grandes Écoles de Commerce
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">Tous niveaux</Badge>
          <Badge variant="outline">6-8 heures</Badge>
          <Badge className="bg-green-500">Complet</Badge>
        </div>
      </div>

      <Tabs defaultValue="methode" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="methode">Méthode</TabsTrigger>
          <TabsTrigger value="generateurs">Générateurs</TabsTrigger>
          <TabsTrigger value="vocabulaire">Vocabulaire</TabsTrigger>
          <TabsTrigger value="ressources">Ressources</TabsTrigger>
        </TabsList>

        <TabsContent value="methode">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Méthode Complète d'Anglais ECG</CardTitle>
            </CardHeader>
            <CardContent>
              <MethodAnglaisPage />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="generateurs">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Outils de Génération</h2>
              <p className="text-muted-foreground">
                Utilisez nos générateurs pour vous entraîner et améliorer votre niveau d'anglais
              </p>
            </div>

            {generatorTools.map((tool) => (
              <Card key={tool.id} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <tool.icon className="h-6 w-6 text-primary" />
                    {tool.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardHeader>
                <CardContent>
                  {tool.component}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vocabulaire">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Vocabulaire Essentiel</CardTitle>
              <p className="text-muted-foreground">
                Plus de 200 expressions et termes indispensables pour réussir vos concours
              </p>
            </CardHeader>
            <CardContent>
              <VocabularyFlashcards language={language} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ressources">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ressources Complémentaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/methodologie/anglais-colles" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Préparation aux Colles</h3>
                  <p className="text-sm text-muted-foreground">Stratégies et conseils pour réussir vos oraux d'anglais</p>
                </Link>
                <Link to="/methodologie/anglais-grammaire" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Grammaire Essentielle</h3>
                  <p className="text-sm text-muted-foreground">Points grammaticaux cruciaux pour les concours</p>
                </Link>
                <Link to="/methodologie/anglais-essais-syntheses" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Essais et Synthèses</h3>
                  <p className="text-sm text-muted-foreground">Techniques de rédaction pour les épreuves écrites</p>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outils d'Entraînement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/generator/languages" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Générateur de Langues</h3>
                  <p className="text-sm text-muted-foreground">Créez des exercices personnalisés en plusieurs langues</p>
                </Link>
                <Link to="/flashcards" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Flashcards Personnalisées</h3>
                  <p className="text-sm text-muted-foreground">Créez vos propres cartes de révision</p>
                </Link>
                <Link to="/theme-grammatical" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Thème Grammatical</h3>
                  <p className="text-sm text-muted-foreground">Entraînement intensif à la traduction</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormationAnglaisPage;

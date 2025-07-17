
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Puzzle, MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Listes de mots pour le générateur aléatoire
const words = [
  "Silence", "Couleur", "Horizon", "Lien", "Parfum", "Puzzle", "Sable", "Souvenir", "Geste", "Paradoxe", 
  "Nuage", "Boussole", "Écho", "Rythme", "Porte", "Aventure", "Secret", "Regard", "Chemin", "Énergie", 
  "Livre", "Peinture", "Musique", "Recette", "Cinéma", "Danse", "Etoile", "Fleur", "Design", "Entreprise", 
  "Valeur", "Sentiment", "Ami", "Proverbe", "Enfance", "Ville", "Paysage", "Histoire", "Mode", "Publicité", 
  "Crise", "Voyage", "Lumière", "Corruption", "Cause", "Argent", "Liberté", "Théâtre", "Richesse", "Poésie", 
  "Photographie"
];

// Questions EM Lyon par catégorie
const emlyonQuestions = {
  experience: [
    "Quelle est ta plus belle réussite collective ?",
    "Quelle est la chose la plus folle que vous ayez faite ?",
    "Racontez une expérience où vous avez été un early maker",
    "Racontez-nous un moment où vous avez le plus douté de vous-même",
    "Qu'avez-vous appris lors de votre dernier séjour loin de chez vous",
    "Quel a été le plus beau jour de votre vie ?",
    "Avez-vous déjà fait une erreur que vous regrettez ?",
    "Quelle est votre plus grande réussite ?",
    "Racontez-nous une expérience où vous avez innové",
    "Parlez-nous d'une fierté",
    "Quel a été votre plus gros échec et comment l'avez-vous surmonté ?",
    "Une expérience qui vous a fait progresser ?",
    "Comment gérez-vous un groupe de 8 enfants de moins de 10 ans ?",
    "Comment vous comportez-vous lorsque vous intégrez un groupe ?",
    "Parlez-moi d'une expérience peu valorisante"
  ],
  personnalite: [
    "Qu'est-ce qui vous révolte aujourd'hui ?",
    "Quel est le trait de caractère qui vous insupporte le plus chez autrui ?",
    "Si vous pouviez être quelqu'un d'autre, qui seriez-vous ?",
    "À quoi ressembleraient vos vacances idéales ?",
    "Quel personnage historique vous intrigue ?",
    "Aimez-vous ne rien faire ?",
    "Quelle est votre devise ?",
    "Quel est votre leitmotiv ?",
    "Plutôt argent ou plutôt pouvoir ?",
    "Êtes-vous plutôt maçon ou architecte dans l'esprit ?",
    "Si vous étiez un animal lequel seriez-vous ? Pour quelles caractéristiques ?",
    "Qu'est-ce qui vous agace le plus ?",
    "Quelles sont les valeurs qui vous tiennent le plus à cœur ?",
    "Quelle qualité aimeriez-vous avoir ?",
    "Comment prenez-vous des décisions ?"
  ],
  creativite: [
    "Réinvente un fast-food de A à Z",
    "Que vous inspire Neverland le pays de Peter Pan ?",
    "Que faites-vous si vous pouvez tout voir pendant 2 heures ?",
    "Quel fast-food recommanderiez-vous à un végétarien ?",
    "Vous venez d'une autre planète, comment décririez-vous votre civilisation ?",
    "Vous organisez une soirée déguisée notée, donnez les 3 critères de notation",
    "Surprenez-nous !",
    "Un produit ou service à inventer qu'il vous manque actuellement ?",
    "Faites-nous rire avec une anecdote personnelle",
    "Si vous aviez une baguette magique, que feriez-vous ?",
    "Expliquez Google à un enfant de 8 ans",
    "Si vous aviez une cape d'invisibilité pendant 1h, que feriez-vous ?",
    "Décrivez la couleur jaune à une personne aveugle",
    "Si vous deviez réinventer l'entretien de PGE de l'emlyon, comment ?",
    "Posez-nous une question iconoclaste"
  ],
  projet: [
    "Dans quelle entreprise n'aimerais-tu pas travailler et pourquoi ?",
    "Un entrepreneur que vous aimeriez rencontrer ?",
    "Où aimeriez-vous travailler pendant les 5 prochaines années, hors de France ?",
    "Vous avez 1 million d'euros. Dans quelle start-up investissez-vous ?",
    "L'entreprise idéale pour vous ?",
    "Vous êtes face à un dilemme entre travailler dans une banque ou une start-up, que choisissez-vous ?",
    "Vous êtes projeté nouveau dirigeant d'une start-up, que faites-vous ?",
    "Jeff Bezos vous donne 1 million d'euros pour lancer un projet, quel est-il ?",
    "Que pensez-vous des entreprises agiles ?",
    "Accepteriez-vous un job mal payé mais passionnant ?",
    "L'entreprise de vos rêves ?",
    "Qu'est-ce qui fait un entrepreneur ?",
    "Demain vous êtes propulsé dirigeant d'une start-up, que faites-vous ?",
    "Où vous voyez-vous en 2030 ?",
    "Quel serait votre rêve professionnel ?"
  ]
};

interface RandomWordGeneratorProps {
  type?: 'word' | 'emlyon' | 'both';
}

export const RandomWordGenerator: React.FC<RandomWordGeneratorProps> = ({ type = 'both' }) => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>(type === 'emlyon' ? "questions" : "word");
  
  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };
  
  const generateRandomQuestion = (category: string) => {
    const questions = emlyonQuestions[category as keyof typeof emlyonQuestions];
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };
  
  const startWordGeneration = () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    
    // Générer des mots rapidement pour créer l'effet d'animation
    const id = window.setInterval(() => {
      setCurrentWord(generateRandomWord());
    }, 100);
    
    setIntervalId(id);
    
    // Arrêter après 2 secondes et choisir un mot final
    setTimeout(() => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      setCurrentWord(generateRandomWord());
      setIsGenerating(false);
      setIntervalId(null);
    }, 2000);
  };
  
  const startQuestionGeneration = (category: string) => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    setCurrentCategory(category);
    
    // Générer des questions rapidement pour créer l'effet d'animation
    const id = window.setInterval(() => {
      setCurrentQuestion(generateRandomQuestion(category));
    }, 100);
    
    setIntervalId(id);
    
    // Arrêter après 2 secondes et choisir une question finale
    setTimeout(() => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      setCurrentQuestion(generateRandomQuestion(category));
      setIsGenerating(false);
      setIntervalId(null);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);
  
  const categoryTitles = {
    experience: "Expérience",
    personnalite: "Personnalité",
    creativite: "Créativité",
    projet: "Projet"
  };

  const categoryDescriptions = {
    experience: "Ta capacité à tirer des leçons d'un vécu : académique, associatif, sportif…",
    personnalite: "Tes valeurs, tes opinions, ton tempérament",
    creativite: "Ta réactivité, ton imagination, ton sens de l'innovation",
    projet: "La cohérence et l'ambition de ton avenir pro"
  };

  // Show only word generator for EDHEC, only questions for EM Lyon, or both depending on the type prop
  const showWordGenerator = type === 'word' || type === 'both';
  const showQuestions = type === 'emlyon' || type === 'both';

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {type === 'word' ? (
            <Puzzle className="h-5 w-5" />
          ) : type === 'emlyon' ? (
            <MessageSquare className="h-5 w-5" />
          ) : (
            activeTab === "word" ? <Puzzle className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />
          )}
          
          {type === 'word' ? (
            "Générateur de mot pour votre présentation"
          ) : type === 'emlyon' ? (
            "Questions d'entretien EM Lyon"
          ) : (
            activeTab === "word" ? "Générateur de mot pour votre présentation" : "Questions d'entretien EM Lyon"
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {type === 'both' ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="word">Mots aléatoires</TabsTrigger>
              <TabsTrigger value="questions">Questions EM Lyon</TabsTrigger>
            </TabsList>
            
            <TabsContent value="word" className="space-y-4">
              {showWordGenerator && (
                <>
                  <div className="bg-primary/10 px-6 py-8 rounded-lg mb-6 w-full text-center">
                    <p className={`text-2xl font-bold ${isGenerating ? 'animate-pulse' : ''}`}>
                      {currentWord || "Cliquez sur le bouton pour générer un mot"}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Utilisez ce mot aléatoire lors de votre présentation pour démontrer votre capacité d'adaptation et votre créativité.
                  </p>
                  
                  <div className="flex justify-center">
                    <Button 
                      onClick={startWordGeneration} 
                      disabled={isGenerating}
                      className="w-full md:w-auto"
                    >
                      {isGenerating ? "Génération en cours..." : "Générer un mot aléatoire"}
                    </Button>
                  </div>
                </>
              )}
            </TabsContent>
            
            <TabsContent value="questions" className="space-y-4">
              {showQuestions && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.keys(emlyonQuestions).map((category) => (
                      <Card key={category} className="bg-accent/50 hover:bg-accent/70 transition-colors cursor-pointer">
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">
                            {categoryTitles[category as keyof typeof categoryTitles]}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm text-muted-foreground mb-4">
                            {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                          </p>
                          <Button 
                            variant="outline" 
                            onClick={() => startQuestionGeneration(category)}
                            className="w-full"
                            disabled={isGenerating}
                          >
                            Générer une question
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {currentQuestion && (
                    <div className="bg-primary/10 px-6 py-8 rounded-lg mt-6 w-full">
                      <p className="text-sm text-primary font-semibold mb-1">
                        CATÉGORIE : {currentCategory && categoryTitles[currentCategory as keyof typeof categoryTitles]}
                      </p>
                      <p className={`text-xl font-semibold ${isGenerating ? 'animate-pulse' : ''}`}>
                        {currentQuestion}
                      </p>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
          </Tabs>
        ) : showWordGenerator ? (
          <>
            <div className="bg-primary/10 px-6 py-8 rounded-lg mb-6 w-full text-center">
              <p className={`text-2xl font-bold ${isGenerating ? 'animate-pulse' : ''}`}>
                {currentWord || "Cliquez sur le bouton pour générer un mot"}
              </p>
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Utilisez ce mot aléatoire lors de votre présentation pour démontrer votre capacité d'adaptation et votre créativité.
            </p>
            
            <div className="flex justify-center">
              <Button 
                onClick={startWordGeneration} 
                disabled={isGenerating}
                className="w-full md:w-auto"
              >
                {isGenerating ? "Génération en cours..." : "Générer un mot aléatoire"}
              </Button>
            </div>
          </>
        ) : showQuestions ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(emlyonQuestions).map((category) => (
                <Card key={category} className="bg-accent/50 hover:bg-accent/70 transition-colors cursor-pointer">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">
                      {categoryTitles[category as keyof typeof categoryTitles]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => startQuestionGeneration(category)}
                      className="w-full"
                      disabled={isGenerating}
                    >
                      Générer une question
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {currentQuestion && (
              <div className="bg-primary/10 px-6 py-8 rounded-lg mt-6 w-full">
                <p className="text-sm text-primary font-semibold mb-1">
                  CATÉGORIE : {currentCategory && categoryTitles[currentCategory as keyof typeof categoryTitles]}
                </p>
                <p className={`text-xl font-semibold ${isGenerating ? 'animate-pulse' : ''}`}>
                  {currentQuestion}
                </p>
              </div>
            )}
          </>
        ) : null}
      </CardContent>
    </Card>
  );
};

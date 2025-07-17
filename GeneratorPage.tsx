import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  MessageSquare, Zap, Languages, Globe, TrendingUp,
  HelpCircle, Dices, BookOpen, Calculator, Code, Heart, User
} from 'lucide-react';

// IMPORT refactored components for each automation section:
import { GeneratorCategorySection } from '@/components/generator/GeneratorCategorySection';
import { AnswerAutomation } from '@/components/generator/AnswerAutomation';
import { EMLyonAutomation } from '@/components/generator/EMLyonAutomation';
import { EDHECAutomation } from '@/components/generator/EDHECAutomation';
import OptionalLoginBanner from '@/components/OptionalLoginBanner';

// Import ALL generator components needed
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { GeopoliticsGenerator } from '@/components/generator/GeopoliticsGenerator';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { CaseStudyGenerator } from '@/components/generator/CaseStudyGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { SchoolProfileGenerator } from '@/components/generator/SchoolProfileGenerator';
import { PrepaChatbotGenerator } from '@/components/generator/PrepaChatbotGenerator';

import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { useProgress } from "@/context/ProgressContext";

import { Answer } from '@/components/generator/ResponseTabs';

// MiniCard type
type AutomationKey =
  | 'answer'
  | 'flashcards'
  | 'languages'
  | 'geopolitics'
  | 'case-study'
  | 'emlyon'
  | 'edhec'
  | 'theme-grammar'
  | 'school-profile'
  | 'prepa-chatbot';

interface Automation {
  key: AutomationKey;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  automations: Automation[];
  gradient: string;
}

const CATEGORIES: Category[] = [
  {
    title: "Outils pour les entretiens de personnalité",
    description: "Générateurs spécialisés pour réussir vos entretiens avec storytelling et préparation ciblée",
    icon: <User className="h-8 w-8 text-white" />,
    gradient: "bg-gradient-to-r from-orange-600 to-red-600",
    automations: [
      {
        key: 'answer',
        icon: <MessageSquare className="h-8 w-8 text-primary" />,
        title: "Réponse d'entretien",
        description: "Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté.",
        badge: "IA"
      },
      {
        key: 'emlyon',
        icon: <HelpCircle className="h-8 w-8 text-primary" />,
        title: "Questions EM Lyon",
        description: "Questions aléatoires pour l'entretien 'Flash' avec cartes thématiques.",
        badge: "Interactif"
      },
      {
        key: 'edhec',
        icon: <Dices className="h-8 w-8 text-primary" />,
        title: "Générateur de mots EDHEC",
        description: "Générateur de mots aléatoires pour votre présentation EDHEC.",
        badge: "Rapide"
      },
      {
        key: 'school-profile',
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        title: "Fiche école personnalisée",
        description: "Automatise la recherche des infos-clés pour ton entretien : valeurs, assos, doubles diplômes, actu, etc.",
        badge: "Nouveau"
      },
      {
        key: 'prepa-chatbot',
        icon: <span className="inline-block p-1 rounded bg-gradient-to-br from-[#67e8f9] to-[#f472b6]"><Heart className="h-6 w-6 text-pink-600" /></span>,
        title: "Chatbot prépa",
        description: "Conseils motivation, méthode & bien-être. Ton assistant IA inspiré par Major-Prépa & Mister Prépa.",
        badge: "IA Coach"
      },
    ]
  },
  {
    title: "Langues",
    description: "Outils pour améliorer vos compétences linguistiques et réussir les épreuves de langues",
    icon: <Languages className="h-8 w-8 text-white" />,
    gradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
    automations: [
      {
        key: 'flashcards',
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Flashcards intelligentes",
        description: "Créez automatiquement des flashcards optimisées pour la mémorisation avec révision espacée intégrée.",
        badge: "Auto"
      },
      {
        key: 'languages',
        icon: <Languages className="h-8 w-8 text-primary" />,
        title: "Paragraphes de langues",
        description: "Générez des paragraphes argumentatifs de 150 mots en anglais, allemand ou espagnol avec vocabulaire clé.",
        badge: "Nouveau"
      },
      {
        key: 'theme-grammar',
        icon: <Languages className="h-8 w-8 text-primary" />,
        title: "Thème Grammatical",
        description: "Générateur et correcteur de thèmes de traduction : notation détaillée instantanée.",
        badge: "Nouveau"
      },
    ]
  },
  {
    title: "Géopolitique",
    description: "Ressources complètes pour maîtriser la géopolitique et l'actualité internationale",
    icon: <Globe className="h-8 w-8 text-white" />,
    gradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
    automations: [
      {
        key: 'geopolitics',
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Contenu géopolitique complet",
        description: "Cours structurés, sujets de dissertation, actualités récentes et flashcards thématiques automatiquement générés.",
        badge: "Complet"
      },
      {
        key: 'case-study',
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Études de cas d'actualité",
        description: "Transformez vos articles d'actualité en études de cas géopolitiques avec chiffres clés et sujets de dissertation.",
        badge: "Nouveau"
      },
    ]
  },
];

// Props et states propres à chaque automatisation
const GeneratorPage = () => {
  // États locaux pour la réponse d'entretien
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [activeTab, setActiveTab] = useState('response');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const { currentUser } = useAuth();

  // Destructuration correcte du hook useGenerateAnswer - seulement les propriétés qui existent
  const {
    generating,
    generatingQuestions,
    wordCount,
    currentAnswer,
    contextualQuestions,
    showContextualQuestions,
    setCurrentAnswer,
    generateContextualQuestions,
    generateAnswer,
    resetFlow
  } = useGenerateAnswer(currentUser?.id);

  const handleGenerateQuestions = async () => {
    await generateContextualQuestions(question, language);
  };

  const handleGenerateAnswer = async (contextualAnswers: string[]) => {
    await generateAnswer(question, language, contextualAnswers);
  };

  const handleFlashcardCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const [selectedKey, setSelectedKey] = useState<AutomationKey | null>(null);

  // Pour garder le titre principal même quand on effectue un zoom sur une automation
  const renderAutomationContent = () => {
    switch (selectedKey) {
      case "answer":
        return (
          <AnswerAutomation
            question={question}
            setQuestion={setQuestion}
            language={language}
            setLanguage={setLanguage}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            generating={generating}
            generatingQuestions={generatingQuestions}
            currentAnswer={currentAnswer}
            setCurrentAnswer={setCurrentAnswer}
            wordCount={wordCount}
            contextualQuestions={contextualQuestions}
            showContextualQuestions={showContextualQuestions}
            onGenerateQuestions={handleGenerateQuestions}
            onGenerateAnswer={handleGenerateAnswer}
            onResetFlow={resetFlow}
          />
        );
      case "flashcards":
        return <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />;
      case "languages":
        return <LanguageParagraphGenerator language={language} />;
      case "geopolitics":
        return <GeopoliticsGenerator language={language} />;
      case "case-study":
        return <CaseStudyGenerator language={language} />;
      case "emlyon":
        return <EMLyonAutomation />;
      case "edhec":
        return <EDHECAutomation />;
      case "theme-grammar":
        return <ThemeGrammaticalGenerator />;
      case "school-profile":
        return <SchoolProfileGenerator />;
      case "prepa-chatbot":
        return <PrepaChatbotGenerator />;
      default:
        return null;
    }
  };

  const handleKeySelect = (key: string) => {
    setSelectedKey(key as AutomationKey);
  };

  const { trackPageVisit } = useProgress();
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Générateurs IA
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Préparez vos entretiens avec nos générateurs intelligents : réponses personnalisées, flashcards, langues et géopolitique
        </p>
      </div>
      
      <OptionalLoginBanner />
      
      {!selectedKey && (
        <>
          <GeneratorCategorySection
            categories={CATEGORIES}
            onSelect={handleKeySelect}
          />
          <div className="text-center mt-8 text-muted-foreground text-sm">
            Cliquez sur une automatisation pour commencer&nbsp;!
          </div>
        </>
      )}
      {selectedKey && (
        <div>
          <button
            onClick={() => setSelectedKey(null)}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
          >
            ← Retour aux automatisations
          </button>
          <div>
            {renderAutomationContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorPage;

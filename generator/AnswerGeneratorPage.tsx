
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { AnswerAutomation } from '@/components/generator/AnswerAutomation';
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { useProgress } from "@/context/ProgressContext";

const AnswerGeneratorPage = () => {
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [activeTab, setActiveTab] = useState('response');

  const { currentUser } = useAuth();

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

  const { trackPageVisit } = useProgress();
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          Réponse d'entretien
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec des questions contextuelles adaptées.
        </p>
        
        {/* Usage Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r max-w-4xl mx-auto mb-8">
          <p className="text-sm text-blue-800 font-medium mb-2">💡 Comment l'utiliser :</p>
          <p className="text-sm text-blue-700">
            Saisissez votre question d'entretien, puis répondez aux questions contextuelles générées par l'IA. Ces questions vous aideront à identifier vos expériences les plus pertinentes pour créer une réponse personnalisée.
          </p>
        </div>
      </div>

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
    </div>
  );
};

export default AnswerGeneratorPage;

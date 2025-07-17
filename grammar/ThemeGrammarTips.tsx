
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getGrammarExplanation } from "./grammarExplanations";

interface ThemeGrammarTipsProps {
  tips: string[];
}

/**
 * Affichage des conseils grammaticaux sans doublons, et dépliants (accordion).
 */
const ThemeGrammarTips: React.FC<ThemeGrammarTipsProps> = ({ tips }) => {
  if (!tips || tips.length === 0) return null;

  // Supprime les doublons
  const uniqueTips = Array.from(new Set(tips));

  return (
    <div className="mt-2 text-sm text-gray-600">
      <b>Conseils :</b>
      <Accordion type="multiple" className="w-full mt-2">
        {uniqueTips.map((tip, idx) => (
          <AccordionItem value={String(idx)} key={idx} className="border-none">
            <AccordionTrigger className="hover:underline px-2 rounded bg-blue-50 mb-1">
              {tip}
            </AccordionTrigger>
            <AccordionContent className="bg-white rounded border p-3 mt-0">
              <span
                dangerouslySetInnerHTML={{ __html: getGrammarExplanation(tip) }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ThemeGrammarTips;

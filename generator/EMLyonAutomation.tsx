
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { RandomWordGenerator } from '@/components/RandomWordGenerator';

export const EMLyonAutomation: React.FC = () => (
  <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/30">
    <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
      <CardTitle className="flex items-center gap-3 text-2xl">
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
          <HelpCircle className="h-6 w-6" />
        </div>
        <div>
          <div className="text-2xl font-bold">Questions d'entretien EM Lyon</div>
          <div className="text-yellow-100 text-sm font-normal mt-1">
            Questions aléatoires pour l'entretien "Flash" avec cartes thématiques
          </div>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-8">
      <RandomWordGenerator type="emlyon" />
    </CardContent>
  </Card>
);

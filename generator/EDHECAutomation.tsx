
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dices } from "lucide-react";
import { RandomWordGenerator } from '@/components/RandomWordGenerator';

export const EDHECAutomation: React.FC = () => (
  <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30">
    <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
      <CardTitle className="flex items-center gap-3 text-2xl">
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
          <Dices className="h-6 w-6" />
        </div>
        <div>
          <div className="text-2xl font-bold">Générateur de mots EDHEC</div>
          <div className="text-rose-100 text-sm font-normal mt-1">
            Générateur de mots aléatoires pour votre présentation EDHEC
          </div>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-8">
      <RandomWordGenerator type="word" />
    </CardContent>
  </Card>
);

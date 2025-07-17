
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExerciseSelector, exercises, Exercise } from "@/components/python/ExerciseSelector";
import { PythonExerciseValidator } from "@/components/python/PythonExerciseValidator";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft } from "lucide-react";

export const PythonExerciseGenerator: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const handleSelectExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise);
  };

  const handleBackToSelector = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <Card className="w-full max-w-6xl rounded-xl shadow-lg border-0 bg-gradient-to-br from-[#222c3b] via-[#2f3f5e] to-[#16655b] text-white">
        <CardHeader className="rounded-t-xl px-6 py-6 bg-gradient-to-r from-[#103454] via-[#274c7f] to-[#25b2ad] border-b-0">
          <CardTitle className="flex items-center gap-3 text-xl font-bold tracking-tight">
            <BookOpen className="h-6 w-6 text-white" /> 
            Exercices Python Interactifs
          </CardTitle>
          <CardDescription className="text-teal-100/90 mt-1 font-medium">
            Résolvez des exercices de programmation avec validation automatique et feedback intelligent
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-6">
          {!selectedExercise ? (
            <ExerciseSelector 
              onSelectExercise={handleSelectExercise}
              selectedExerciseId={selectedExercise?.id}
            />
          ) : (
            <div className="space-y-4">
              <Button
                variant="ghost"
                onClick={handleBackToSelector}
                className="text-teal-200 hover:text-white hover:bg-teal-700/50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux exercices
              </Button>
              
              <div className="bg-white rounded-lg p-1">
                <PythonExerciseValidator exercise={selectedExercise} />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

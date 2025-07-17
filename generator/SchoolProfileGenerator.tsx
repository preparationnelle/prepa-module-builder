
import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { Loader2, School, User, Target, Briefcase, Users } from 'lucide-react';
import SchoolProfileDisplay from './SchoolProfileDisplay';

interface ProfileData {
  professional_project?: string;
  target_association?: string;
  target_sectors?: string;
  personal_objectives?: string;
}

export const SchoolProfileGenerator = () => {
  const [schoolName, setSchoolName] = useState("");
  const [professionalProject, setProfessionalProject] = useState("");
  const [targetAssociation, setTargetAssociation] = useState("");
  const [targetSectors, setTargetSectors] = useState("");
  const [personalObjectives, setPersonalObjectives] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<{
    content: string;
    schoolName: string;
    profile?: ProfileData;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadExample = () => {
    setSchoolName("HEC Paris");
    setProfessionalProject("Créer une startup dans la fintech qui démocratise l'investissement pour les jeunes");
    setTargetAssociation("Junior Entreprise ou association entrepreneuriat");
    setTargetSectors("Fintech, conseil en stratégie, banque d'investissement");
    setPersonalObjectives("Développer mon réseau dans l'écosystème startup français et acquérir une expertise en finance digitale");
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setProfile(null);
    
    if (!schoolName.trim()) {
      setError("Veuillez renseigner le nom de l'école.");
      return;
    }
    
    setLoading(true);

    try {
      const user = supabase.auth.getUser
        ? (await supabase.auth.getUser()).data.user
        : null;
      const userId = user?.id || "anonymous";

      const { data, error: fnError } = await supabase.functions.invoke("generate-school-profile", {
        body: {
          school_name: schoolName,
          user_id: userId,
          professional_project: professionalProject,
          target_association: targetAssociation,
          target_sectors: targetSectors,
          personal_objectives: personalObjectives,
        },
      });

      if (fnError || data?.error) {
        setError(data?.error || "Une erreur est survenue");
        return;
      }

      const generatedData = data.data;
      setProfile({
        content: generatedData.html_content || generatedData.text || JSON.stringify(generatedData),
        schoolName: generatedData.school_name || schoolName,
        profile: generatedData.profile
      });
      
      toast.success("Fiche personnalisée générée avec succès !");
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  if (profile) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Votre fiche personnalisée</h2>
          <Button
            onClick={() => setProfile(null)}
            variant="outline"
            className="flex items-center gap-2"
          >
            ← Nouvelle fiche
          </Button>
        </div>
        <SchoolProfileDisplay
          content={profile.content}
          schoolName={profile.schoolName}
          profile={profile.profile}
        />
      </div>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <School className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">
              Générateur de fiche école personnalisée
            </CardTitle>
            <CardDescription className="text-blue-100 mt-2">
              Obtenez une analyse détaillée et personnalisée d'une école de commerce selon votre profil et vos objectifs
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleGenerate} className="space-y-6">
          {/* Nom de l'école */}
          <div className="space-y-2">
            <Label htmlFor="schoolName" className="text-base font-semibold flex items-center gap-2">
              <School className="h-4 w-4 text-blue-600" />
              École de commerce *
            </Label>
            <Input
              id="schoolName"
              placeholder="ex: HEC Paris, ESSEC, ESCP..."
              value={schoolName}
              onChange={e => setSchoolName(e.target.value)}
              disabled={loading}
              className="text-base"
            />
          </div>

          {/* Projet professionnel */}
          <div className="space-y-2">
            <Label htmlFor="professionalProject" className="text-base font-semibold flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-green-600" />
              Votre projet professionnel
            </Label>
            <Textarea
              id="professionalProject"
              placeholder="Décrivez votre projet professionnel, vos ambitions de carrière..."
              value={professionalProject}
              onChange={e => setProfessionalProject(e.target.value)}
              disabled={loading}
              className="min-h-[80px] text-base"
            />
          </div>

          {/* Association visée */}
          <div className="space-y-2">
            <Label htmlFor="targetAssociation" className="text-base font-semibold flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-600" />
              Association où vous vous projetez
            </Label>
            <Input
              id="targetAssociation"
              placeholder="ex: Junior Entreprise, Bureau des Arts, association humanitaire..."
              value={targetAssociation}
              onChange={e => setTargetAssociation(e.target.value)}
              disabled={loading}
              className="text-base"
            />
          </div>

          {/* Secteurs visés */}
          <div className="space-y-2">
            <Label htmlFor="targetSectors" className="text-base font-semibold flex items-center gap-2">
              <Target className="h-4 w-4 text-orange-600" />
              Secteurs où vous vous voyez évoluer
            </Label>
            <Input
              id="targetSectors"
              placeholder="ex: Conseil, Finance, Tech, Luxe, Startups..."
              value={targetSectors}
              onChange={e => setTargetSectors(e.target.value)}
              disabled={loading}
              className="text-base"
            />
          </div>

          {/* Objectifs personnels */}
          <div className="space-y-2">
            <Label htmlFor="personalObjectives" className="text-base font-semibold flex items-center gap-2">
              <User className="h-4 w-4 text-indigo-600" />
              Vos objectifs personnels
            </Label>
            <Textarea
              id="personalObjectives"
              placeholder="Développement personnel, réseau, compétences spécifiques..."
              value={personalObjectives}
              onChange={e => setPersonalObjectives(e.target.value)}
              disabled={loading}
              className="min-h-[80px] text-base"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              type="submit" 
              disabled={loading || !schoolName.trim()} 
              className="flex-1 h-12 text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Génération en cours...
                </>
              ) : (
                "Générer ma fiche personnalisée"
              )}
            </Button>
            
            <Button 
              type="button" 
              onClick={loadExample}
              variant="outline"
              disabled={loading}
              className="h-12"
            >
              Exemple
            </Button>
          </div>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">💡 Comment ça marche ?</h4>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Renseignez l'école qui vous intéresse</li>
            <li>• Partagez votre profil et vos objectifs</li>
            <li>• Obtenez une fiche personnalisée avec des sources vérifiables</li>
            <li>• Utilisez ces informations pour préparer vos entretiens</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

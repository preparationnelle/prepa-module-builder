
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, School, Target, Users, Briefcase } from 'lucide-react';

interface ProfileData {
  professional_project?: string;
  target_association?: string;
  target_sectors?: string;
  personal_objectives?: string;
}

interface SchoolProfileDisplayProps {
  content: string;
  schoolName: string;
  profile?: ProfileData;
}

const SchoolProfileDisplay: React.FC<SchoolProfileDisplayProps> = ({
  content,
  schoolName,
  profile
}) => {
  // Fonction pour transformer les liens en liens cliquables
  const formatContent = (text: string) => {
    return text.replace(
      /<a href="([^"]*)" target="_blank">([^<]*)<\/a>/g,
      '<a href="$1" target="_blank" class="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1">$2 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>'
    );
  };

  return (
    <div className="space-y-6">
      {/* En-tête avec le profil étudiant */}
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <School className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl text-blue-800">
                Fiche personnalisée - {schoolName}
              </CardTitle>
              <p className="text-blue-600 mt-1">
                Analyse adaptée à votre profil étudiant
              </p>
            </div>
          </div>
        </CardHeader>
        {profile && (
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.professional_project && (
                <div className="flex items-start gap-2">
                  <Briefcase className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-blue-800">Projet professionnel :</span>
                    <p className="text-blue-700 text-sm mt-1">{profile.professional_project}</p>
                  </div>
                </div>
              )}
              {profile.target_association && (
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-blue-800">Association visée :</span>
                    <p className="text-blue-700 text-sm mt-1">{profile.target_association}</p>
                  </div>
                </div>
              )}
              {profile.target_sectors && (
                <div className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-blue-800">Secteurs visés :</span>
                    <p className="text-blue-700 text-sm mt-1">{profile.target_sectors}</p>
                  </div>
                </div>
              )}
              {profile.personal_objectives && (
                <div className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-blue-800">Objectifs personnels :</span>
                    <p className="text-blue-700 text-sm mt-1">{profile.personal_objectives}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        )}
      </Card>

      {/* Contenu de la fiche */}
      <Card>
        <CardContent className="p-8">
          <div 
            className="prose prose-blue max-w-none
              prose-h3:text-xl prose-h3:font-bold prose-h3:text-blue-800 prose-h3:mb-4 prose-h3:mt-6
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-ul:space-y-2 prose-li:text-gray-700
              prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-a:no-underline prose-a:font-medium
              first:prose-h3:mt-0"
            dangerouslySetInnerHTML={{ 
              __html: formatContent(content)
            }} 
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolProfileDisplay;

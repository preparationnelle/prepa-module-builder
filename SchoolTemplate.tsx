
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Clock, Star, Award, FileText, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SchoolData } from '@/types/school';

interface SchoolTemplateProps {
  data: SchoolData;
}

const SchoolTemplate: React.FC<SchoolTemplateProps> = ({ data }) => {
  // Helper to select the appropriate icon based on section
  const getSectionIcon = (title: string) => {
    const title_lower = title.toLowerCase();
    if (title_lower.includes('style') || title_lower.includes('entretien')) return <FileText className="h-5 w-5" />;
    if (title_lower.includes('groupe')) return <Users className="h-5 w-5" />;
    if (title_lower.includes('livre') || title_lower.includes('méthode')) return <BookOpen className="h-5 w-5" />;
    if (title_lower.includes('prix') || title_lower.includes('récompense')) return <Award className="h-5 w-5" />;
    return <FileText className="h-5 w-5" />;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-muted-foreground">Fiche école - Entretien de personnalité</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Présentation de l'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data.presentation.content.map((paragraph, index) => (
              <p key={index} className={index < data.presentation.content.length - 1 ? "mb-4" : ""}>
                {index === 0 && <span className="font-semibold">{data.presentation.title} : </span>}
                {paragraph}
              </p>
            ))}

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              {data.presentation.values.title}
            </h3>
            {data.presentation.values.content.map((paragraph, index) => (
              <p key={index} className={index < data.presentation.values.content.length - 1 ? "mb-4" : ""}>
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Points clés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {data.keyPoints.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                    <span className="text-sm font-semibold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium">{point.title}</p>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getSectionIcon(data.interviewStyle.title)}
              {data.interviewStyle.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data.interviewStyle.content.map((paragraph, index) => (
              <p key={index} className={index < data.interviewStyle.content.length - 1 ? "mb-4" : ""}>
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien {data.name.split(' ')[0]}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {data.tips.map((tip, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{tip.title}</AccordionTrigger>
                  <AccordionContent>
                    {tip.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link to="/generator">Générer un plan d'entraînement</Link>
        </Button>
      </div>
    </div>
  );
};

export default SchoolTemplate;

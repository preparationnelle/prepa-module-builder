import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Clock, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';

const ESCPPage = () => {
  const { trackPageVisit } = useProgress();
  
  // Suivre la visite de la page
  useEffect(() => {
    trackPageVisit('school');
  }, [trackPageVisit]);
  
  return <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">ESCP Business School</h1>
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
            <p className="mb-4">
              <span className="font-semibold">Un entretien classique, format court :</span> À l'ESCP, 
              l'entretien de personnalité dure 30 minutes environ, coefficient 12 . 
              Il est très structuré et classique dans la forme.
            </p>
            <p className="mb-4">
              Comme à l'ESSEC, vous remplirez au préalable un questionnaire de personnalité que le jury lira 
              pendant ~5 minutes avant de vous faire entrer. Mais contrairement à l'ESSEC, ici tout l'entretien 
              s'articule autour du questionnaire : il sert de trame principale.
            </p>
            <p className="mb-4">
          </p>
            <p>
              Le jury est souvent composé de 2 à 3 personnes (prof + alumni).
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que l'ESCP valorise
            </h3>
            <p className="mb-4">
              L'ESCP, en tant qu'école multicampus européenne (Paris, Londres, Berlin, Turin, Madrid et Varsovie), valorise les profils ouverts sur le monde, 
              capables de s'adapter à des environnements variés. Ses valeurs mises en avant incluent l'excellence 
              académique, la créativité, la pluralité culturelle et l'humilité.
            </p>
            <p className="mb-4">
              Concrètement, à travers l'entretien, l'ESCP veut des candidats qui collent à ces valeurs d'ouverture 
              et de diversité. Ils apprécient particulièrement les candidats avec une expérience internationale 
              (séjours linguistiques, double culture…) et ceux qui font preuve d'originalité dans leur parcours 
              ou leurs passions (sans être farfelus).
            </p>
            <p>
              Mais attention, l'ESCP reste une "parisienne" sélective : elle attend aussi    
           beaucoup de motivation pour l'école (montrez-leur que 
              l'ESCP n'est pas un choix par défaut mais votre choix).
            </p>
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
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div>
                  <p className="font-medium">Durée : 30 minutes</p>
                  <p className="text-sm text-muted-foreground">Coefficient 12</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Questionnaire préalable</p>
                  <p className="text-sm text-muted-foreground">Sert de trame à l'entretien</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Jury </p>
                  <p className="text-sm text-muted-foreground">2-3 personnes (prof + alumni)</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Rythme rapide</p>
                  <p className="text-sm text-muted-foreground">30 minutes d'entretien </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Style de l'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
             Le jury est généralement composé de deux à trois personnes, incluant un professeur de l’école, un Alumni (ancien élève) et parfois un membre extérieur au corps professoral.
            </p>
            <p className="mb-4">
              Attendez-vous 
              à beaucoup de questions directes tirées du questionnaire : si vous avez écrit que vous pratiquez la voile, 
              on vous demandera sans doute d'en parler plus en détail ; si vous indiquez vouloir tel secteur, pourquoi 
              ce choix, etc.
            </p>
            <p className="mb-4">Le rythme est assez rapide (30 minutes passent vite), donc les jurés peuvent vous interrompre pour passer à une autre question, ne le prenez pas mal. Ils veulent simplement couvrir tout le nécessaire dans le temps imparti.</p>
            <p>
              Le format est globalement classique : motivations, parcours, projet, quelques questions "perso" et peut-être 
              une petite question d'actualité ou de culture générale pour voir votre curiosité. Pas de pièges exotiques 
              en principe. Le ton est professionnel mais cordial.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien ESCP</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Préparez votre questionnaire</AccordionTrigger>
                <AccordionContent>
                  Travaillez votre questionnaire très en amont. L'ESCP publie généralement son questionnaire type 
                  (6-7 questions) : par exemple, "Quels sont vos 3 centres d'intérêt majeurs ?", "Quel événement 
                  d'actualité récente vous a intéressé ?", etc. Remplissez-le en soignant le détail : pas de faute, 
                  chaque mot compte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Soyez cohérent</AccordionTrigger>
                <AccordionContent>
                  L'ESCP attache beaucoup d'importance à la cohérence de votre discours – ne vous contredisez pas. 
                  Si vous dites aimer le travail en équipe dans une réponse, ne dites plus tard préférer travailler seul.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Montrez votre dimension internationale</AccordionTrigger>
                <AccordionContent>
                  Mettez en avant votre dimension internationale si vous en avez une (cours en langue, voyages, 
                  curiosité pour d'autres cultures), car l'ESCP a des campus dans plusieurs pays.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Soyez concis et structuré</AccordionTrigger>
                <AccordionContent>
                  Vu le peu de temps, soyez concis dans vos réponses le jour J : entraînez-vous à répondre en allant 
                  à l'essentiel dès le début (technique du « front-loading » : annoncez tout de suite l'idée principale 
                  avant de détailler). Chaque réponse doit être bien structurée car ils n'hésiteront pas à vous couper 
                  au bout d'1-2 minutes pour passer à la suite.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Soignez la forme</AccordionTrigger>
                <AccordionContent>
                  Soyez impeccable sur la forme : questionnaire parfait, tenue professionnelle, etc., car l'attention 
                  aux détails compte dans une école prônant l'excellence.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link to="/generator">Générer un plan d'entraînement</Link>
        </Button>
      </div>
    </div>;
};

export default ESCPPage;


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
import { GraduationCap, Clock, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ESSECPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">ESSEC Business School</h1>
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
              <span className="font-semibold">L'entretien le plus long et approfondi :</span> L'ESSEC est réputée 
              pour son entretien de personnalité fleuve, durant 30 à 45 minutes, avec un coefficient élevé (coef. 10). 
              C'est un face-à-face individuel avec un jury généralement composé de 3 personnes (un professeur, un 
              diplômé, parfois un RH).
            </p>
            <p className="mb-4">
              Le passage obligé avant l'entretien est un questionnaire de personnalité à remplir juste avant d'entrer : 
              une fiche comportant des questions personnelles que le jury lira et utilisera durant l'oral. Particularité 
              ESSEC, le jury ne se contente pas du questionnaire : il creuse au-delà de ce qui est écrit, dans les 
              moindres détails.
            </p>
            <p className="mb-4">
              
            </p>
            <p>
              Au début de l'entretien, il y a souvent une mise en situation de 5 minutes : le jury vous expose un cas 
              d'entreprise ou un dilemme et vous pose quelques questions pour évaluer votre réflexion à chaud.
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que l'ESSEC valorise
            </h3>
            <p className="mb-4">
              Son credo étant "Enlighten.
Lead. Change", l'ESSEC cherche des étudiants à fort potentiel de croissance, 
              capables d'analyse poussée et dotés d'ouverture d'esprit.
            </p>
            <p className="mb-4">
              À travers son entretien exhaustif, l'ESSEC valorise la profondeur : profondeur dans la connaissance de soi 
              (le questionnaire vous pousse à l'introspection sur vos centres d'intérêt, vos valeurs, vos expériences), 
              profondeur dans vos réflexions (capacité à analyser une situation complexe en mise en situation), et 
              profondeur dans vos motivations (ils vont vérifier la sincérité et la solidité de votre projet).
            </p>
            <p className="mb-4">
              L'ESSEC attend aussi de voir de la créativité et de la souplesse d'esprit, car l'entretien peut partir 
              dans des directions inattendues. La composante internationale est un plus (beaucoup de questions du 
              questionnaire portent sur vos séjours à l'étranger, vos langues, etc., signe que l'ESSEC valorise ce vécu).
            </p>
            <p>
              Enfin, l'ESSEC aime les candidats engagés et polyvalents, qui pourront tirer parti de son parcours flexible.
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
                  <p className="font-medium">Durée : 30-45 minutes</p>
                  <p className="text-sm text-muted-foreground">Coefficient 10</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Questionnaire détaillé</p>
                  <p className="text-sm text-muted-foreground">Sert de base approfondie</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Mise en situation initiale</p>
                  <p className="text-sm text-muted-foreground">Cas d'entreprise ou dilemme</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Jury de 3 personnes</p>
                  <p className="text-sm text-muted-foreground">Configuration en carré</p>
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
              Attendez-vous à un entretien très complet et parfois déstabilisant par sa durée. Les jurys ESSEC sont 
              bienveillants mais exigeants : ils lisent attentivement votre questionnaire pendant quelques minutes au 
              début, puis démarrent l'échange.
            </p>
            <p className="mb-4">
              Ils vont rebondir sur le moindre détail que vous avez mentionné. Par exemple, si vous avez indiqué faire 
              du piano, préparez-vous à des questions du type « Quelles œuvres préférez-vous jouer ? »; si vous mentionnez 
              un échange à l'étranger, ils pourraient creuser sur la culture du pays, etc.
            </p>
            <p className="mb-4">
              Le but n'est pas de vous piéger, mais de vérifier la sincérité de ce que vous dites et de voir jusqu'où vous 
              pouvez réfléchir. Le format long permet aussi aux jurés de tester votre endurance et votre résistance au stress.
            </p>
            <p className="mb-4">
              Certains jurys peuvent adopter un ton un peu sec ou insister lourdement sur un point pour vous challenger – 
              tenez bon, restez poli et constant, c'est souvent un jeu de rôle de leur part.
            </p>
            <p>
              La mise en situation initiale, elle, donne le ton : un problème d'entreprise à résoudre, c'est un clin d'œil 
              à des exercices de cas, et ça permet de vous évaluer sur votre logique et votre sang-froid dès le début. 
              Globalement, l'entretien ESSEC est perçu comme le plus exigeant des écoles, mais aussi une chance de vraiment 
              vous exprimer : 40 minutes, c'est assez long pour montrer toute votre personnalité.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien ESSEC</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Soignez le questionnaire</AccordionTrigger>
                <AccordionContent>
                  Soignez le questionnaire ESSEC : c'est votre carte de visite. Il comporte des questions type « De quels 
                  sujets ne souhaiteriez-vous pas parler ? », « Quelle est la valeur à laquelle vous croyez le plus ? », 
                  « Avez-vous déjà travaillé ? ». Remplissez-le avec honnêteté et précision. Ne laissez pas de blancs, 
                  évitez les banalités, et relisez-vous pour éliminer toute faute.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Préparez-vous sur tout votre questionnaire</AccordionTrigger>
                <AccordionContent>
                  Pour l'oral en lui-même : entraînez-vous à parler de chaque élément de votre questionnaire. Si vous 
                  indiquez un hobby, soyez incollable dessus (histoire, actualité liée, etc.). Si vous citez une valeur 
                  importante pour vous, préparez un petit argumentaire qui la justifie. En somme, aucun mot de votre 
                  questionnaire ne doit vous prendre en défaut.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Structurez votre mise en situation</AccordionTrigger>
                <AccordionContent>
                  Pour la mise en situation, adoptez une méthode simple : écoutez bien l'énoncé du problème, n'hésitez 
                  pas à structurer votre réponse (par exemple "J'analyserais d'abord… puis je proposerais…") et prenez 
                  en compte tous les facteurs (montrez que vous réfléchissez posément : cible, contexte, enjeux, etc.). 
                  On vous teste sur la logique et la prise de recul plus que sur la solution exacte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Développez vos réponses en profondeur</AccordionTrigger>
                <AccordionContent>
                  Pendant l'entretien, soyez complet dans vos réponses : l'ESSEC aime la profondeur, donc n'hésitez pas 
                  à développer vos idées, à donner des exemples concrets. Regardez bien tous les jurés malgré la table en 
                  carré (tournez-vous vers chacun régulièrement).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Tenez la distance</AccordionTrigger>
                <AccordionContent>
                  Tenez la durée : ne montrez pas de signe de découragement ou de fatigue, restez enthousiaste jusqu'au 
                  bout (vous pouvez tout à fait continuer d'être souriant et dynamique à la 40e minute !). Si vous avez 
                  bien préparé du contenu et que vous êtes vous-même, l'entretien ESSEC peut même devenir un plaisir 
                  plus qu'une épreuve.
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
    </div>
  );
};

export default ESSECPage;

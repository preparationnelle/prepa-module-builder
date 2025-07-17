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
import { GraduationCap, Clock, Star, Award, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';

const EMLyonPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">EM Lyon Business School</h1>
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
              <span className="font-semibold">Entretien "Flash" et cartes surprises :</span> L'EM Lyon a opté pour un 
              format d'entretien assez atypique et ludique. Durée environ 25 minutes (coef. 9).
            </p>
            <p className="mb-4">
              Le déroulé est le suivant :
            </p>
            <ol className="list-decimal pl-5 space-y-2 mb-4">
              <li>Présentation personnelle en 1 minute chrono ! (oui, seulement 60 secondes pour vous présenter, c'est très court)</li>
              <li>Tirage de 4 cartes thématiques contenant chacune une question imprévue (une carte "expérience", une "projet", une "personnalité", une "créativité")</li>
              <li>Quelques minutes de réflexion, puis vous devez répondre aux questions des 4 cartes dans l'ordre que vous voulez</li>
              <li>Si du temps reste, l'entretien se poursuit de façon classique par quelques questions additionnelles du jury</li>
            </ol>
            <p>
              L'originalité vient donc des questions improbables des cartes, souvent déstabilisantes pour tester votre imagination. 
              Exemples réels de cartes EMLyon : « Si vous étiez une créature mythique, laquelle seriez-vous ? », « Quand avez-vous 
              dû faire preuve de créativité de manière inattendue pour résoudre un problème ? », « Si vous deviez construire une 
              maison avec des aliments, lesquels choisiriez-vous et quels dangers ? ». Attendez-vous à tout !
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que l'emlyon valorise
            </h3>
            <p className="mb-4">
              Fidèle à sa signature "early makers", emlyon business school valorise les profils créatifs, agiles et entreprenants. 
              Via cet entretien ludique, l'école veut voir chez vous de la créativité, de la spontanéité et une capacité à penser 
              autrement.
            </p>
            <p className="mb-4">
              Ils apprécient les candidats avec un certain grain de folie intellectuelle, capables de sortir des sentiers battus 
              tout en restant cohérents. Attention, l'EM Lyon reste une business school sérieuse : au-delà de l'originalité, ils 
              cherchent aussi de la cohérence dans le projet et de la motivation.
            </p>
            <p>
              L'entretien cartes permet de voir comment vous réfléchissez sous pression et comment vous vous adaptez à l'inattendu 
              – des qualités importantes pour un entrepreneur ou un "early maker". En résumé, l'EM Lyon valorise l'imagination 
              structurée : des idées nouvelles, mais qui ont du sens.
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
                  <p className="font-medium">Durée : 25 minutes</p>
                  <p className="text-sm text-muted-foreground">Coefficient 9</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Présentation en 1 minute</p>
                  <p className="text-sm text-muted-foreground">Extrêmement concise</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">4 cartes thématiques</p>
                  <p className="text-sm text-muted-foreground">Questions originales</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Format ludique</p>
                  <p className="text-sm text-muted-foreground">Test de créativité et spontanéité</p>
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
              <FileText className="h-5 w-5" />
              Style de l'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Clairement atypique et déstabilisant, mais bienveillant. Les jurys EMLyon (souvent un prof + un diplômé) mettent 
              les candidats assez à l'aise, car ils savent que cet exercice n'est pas conventionnel. Ils expliquent les règles, 
              tirent les cartes avec vous, etc.
            </p>
            <p className="mb-4">
              Le rythme est volontairement rapide (1 minute de présentation, ça file !) – l'idée est de vous sortir de votre 
              format prépa classique. Cela se rapproche presque d'un jeu. Les jurés observent autant votre réaction que le 
              fond de vos réponses.
            </p>
            <p className="mb-4">
              Ils peuvent sourire ou rire de vos idées (pas pour se moquer, mais parce que l'exercice s'y prête). C'est 
              généralement un entretien dynamique, pas du tout un interrogatoire figé.
            </p>
            <p>
              Cependant, ne sous-estimez pas la préparation : beaucoup de candidats se font surprendre et bafouillent sur les 
              cartes. Les jurés attendent que vous jouiez le jeu à fond, avec enthousiasme. Si vous êtes trop sérieux ou secoué, 
              ça peut vous pénaliser. L'ambiance est donc assez cool et stimulante, reflétant l'esprit entrepreneurial de l'école.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien EM Lyon</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Entraînez-vous aux questions inattendues</AccordionTrigger>
                <AccordionContent>
                  Entraînez-vous intensivement à répondre à l'imprévu. Vous pouvez trouver en ligne des listes de questions 
                  "originales" posées en entretien EML les années précédentes. Exercez-vous à y répondre en temps limité.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Structurez vos réponses farfelues</AccordionTrigger>
                <AccordionContent>
                  Apprenez à structurer vos réponses à une question farfelue : c'est la clé. Par exemple, pour « Si vous deviez 
                  faire visiter la Terre à un extraterrestre, que lui montreriez-vous ? », une réponse structurée pourrait être 
                  en trois parties cohérentes : un lieu naturel d'abord, puis un monument culturel, enfin un défi contemporain. 
                  Ne cherchez pas la perfection sur ces questions : mieux vaut une réponse simple mais claire que de longues 
                  hésitations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Priorisez l'ordre des cartes</AccordionTrigger>
                <AccordionContent>
                  Sur place, vous aurez quelques secondes/minutes de réflexion après avoir tiré les cartes : mettez-les à profit 
                  pour noter mentalement un plan pour chaque carte. Choisissez l'ordre de réponse judicieusement : par exemple, 
                  commencez par la carte où vous êtes le plus à l'aise pour vous mettre en confiance, et gardez la question la 
                  plus bizarre pour la fin, une fois que le jury vous connaîtra un peu mieux.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Présentez-vous en version "tweet"</AccordionTrigger>
                <AccordionContent>
                  Pour la présentation 1 minute : entraînez-vous avec un chronomètre ! 60 secondes, c'est extrêmement court pour 
                  se présenter sans parler à toute vitesse. Il faudra faire des choix sur ce que vous dites. Préparez une version 
                  "tweet" de votre présentation, qui tient en quelques phrases concises et percutantes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Montrez votre enthousiasme joueur</AccordionTrigger>
                <AccordionContent>
                  Montrez pendant tout l'entretien votre enthousiasme joueur : souriez quand vous découvrez une carte insolite, 
                  dites même « Ah, originale comme question ! » (sincèrement) avant de répondre. Le jury verra que vous ne perdez 
                  pas votre bonne humeur, ce qui est un excellent point. L'EM Lyon veut des makers positifs, qui voient les 
                  challenges comme des opportunités – montrez exactement cela.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Générateur de questions EM Lyon */}
      <div className="mb-10">
        <RandomWordGenerator type="emlyon" />
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link to="/generator">Générer un plan d'entraînement</Link>
        </Button>
      </div>
    </div>
  );
};

export default EMLyonPage;

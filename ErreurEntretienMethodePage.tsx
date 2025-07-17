
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';

const ErreurEntretienMethodePage = () => {
  const erreurs = [
    {
      title: "Se dévaloriser ou adopter une posture négative",
      description: "Ne pas croire en soi, mettre en avant uniquement ses défauts, ou s'excuser d'être là : voilà des signaux rouges pour un jury. Ce qu'il attend, ce n'est pas la perfection, mais la lucidité. Il veut voir quelqu'un qui connaît ses forces, accepte ses faiblesses, et avance avec confiance.",
      conseil: "Parle de toi avec honnêteté, sans exagérer ni te rabaisser. L'humilité, ce n'est pas se sous-estimer, c'est ne pas se surestimer."
    },
    {
      title: "Manquer de préparation",
      description: "Arriver sans connaître le nom de la formation, les valeurs de l'école ou ne pas avoir réfléchi à ton projet professionnel… c'est la meilleure façon de saboter ton entretien. Le jury y verra un manque de sérieux ou d'intérêt.",
      conseil: "Prépare tes réponses, lis le site de l'école, regarde des vidéos d'anciens élèves. Sois aligné avec ce que l'école cherche."
    },
    {
      title: "Être trop vague ou abstrait",
      description: "« J'aime le travail en équipe » ou « je suis passionné par l'innovation » ne veulent rien dire sans exemples précis. Des phrases creuses ne permettent pas de révéler ta personnalité.",
      conseil: "Chaque réponse doit être illustrée. Va chercher dans ton vécu : un projet, une anecdote, une situation vécue. C'est là que tu deviendras crédible."
    },
    {
      title: "Passer trop vite sur ses expériences",
      description: "Lister ses stages ou ses voyages ne suffit pas. Le jury attend que tu sois capable d'analyser ce que tu as vécu. Ce n'est pas le fait d'avoir fait un stage chez L'Oréal qui est important, mais ce que tu en as retiré.",
      conseil: "Pour chaque expérience, explique ce que tu as appris, ce que tu referais différemment, ce qui t'a marqué."
    },
    {
      title: "Rester bloqué sur un seul sujet",
      description: "Certains candidats parlent uniquement de leurs études, d'un seul projet ou d'un hobby. Résultat : l'entretien devient monotone et incomplet.",
      conseil: "Montre la richesse de ton parcours. Varie les angles : perso, pro, associatif, passions, engagements, lectures…"
    },
    {
      title: "Oublier de mettre en avant ses qualités et ses valeurs",
      description: "Tu as des forces, des principes, des moteurs. Si tu ne les expliques pas, le jury ne peut pas les deviner. Et réciter une liste de soft skills ne suffit pas.",
      conseil: "Parle de tes qualités à travers des situations concrètes. On ne dit pas « je suis persévérant », on montre une histoire où tu ne lâches rien."
    },
    {
      title: "Réciter des réponses toutes faites",
      description: "Le jury repère en quelques secondes un discours appris par cœur. C'est impersonnel, artificiel et ennuyeux. Tu perds tout l'intérêt de l'entretien : être toi-même.",
      conseil: "Prépare-toi, mais ne joue pas un rôle. Raconte ton histoire avec naturel, avec tes mots."
    },
    {
      title: "Négliger la communication non verbale",
      description: "Ton regard, ta posture, ton sourire, ton ton de voix… tout parle de toi. Un bon contenu mal porté peut être ruiné par une mauvaise forme.",
      conseil: "Entraîne-toi face à un miroir ou filme-toi. Sois présent, respire, regarde ton interlocuteur, souris. Tu dois transmettre de l'énergie calme et maîtrisée."
    },
    {
      title: "Monopoliser la parole ou manquer d'écoute",
      description: "Parler sans s'arrêter, couper la parole au jury ou vouloir absolument « tout placer » peut nuire à ta relation avec l'interlocuteur.",
      conseil: "L'entretien est un échange, pas un monologue. Apprends à écouter les questions jusqu'au bout, à rebondir, à créer une vraie conversation."
    },
    {
      title: "Rater son storytelling",
      description: "C'est l'erreur la plus fréquente. Beaucoup de candidats racontent leurs expériences de manière linéaire, factuelle, ou trop banale. Le problème, c'est que tout le monde a fait un stage, un voyage ou une activité associative. Ce n'est pas ce que tu as vécu qui compte, mais la façon dont tu le racontes.",
      conseil: "Utilise la méthode du storytelling en 3 temps : description globale, anecdote marquante, enseignement tiré."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
              10 erreurs à éviter en entretien de personnalité
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'entretien de personnalité est bien plus qu'un simple échange : c'est le moment où tu dois révéler qui tu es vraiment. Voici les 10 pièges les plus courants, et surtout, comment les contourner intelligemment.
            </p>
          </div>

          <div className="space-y-8">
            {erreurs.map((erreur, index) => (
              <Card key={index} className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-xl">
                      {index + 1}. {erreur.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {erreur.description}
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-500">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Conseil :</h4>
                        <p className="text-green-700">
                          {erreur.conseil}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                La méthode du storytelling en 3 temps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Description globale</h4>
                  <p className="text-sm text-gray-600">
                    « Pendant mon stage chez X, j'étais en charge de… »
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Anecdote marquante</h4>
                  <p className="text-sm text-gray-600">
                    « Un jour, j'ai eu un problème inattendu à gérer… »
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Enseignement</h4>
                  <p className="text-sm text-gray-600">
                    « Cette situation m'a appris à garder mon calme sous pression. »
                  </p>
                </div>
              </div>
              <p className="text-center text-gray-700 italic mt-6">
                En racontant une histoire bien construite, tu rends ton expérience vivante, mémorable et unique.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">En conclusion</h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                L'entretien de personnalité n'est pas une épreuve scolaire, c'est une rencontre humaine. 
                Ce que le jury cherche, ce n'est pas un CV ambulant, mais une personne authentique, 
                cohérente et réfléchie. Évite ces 10 erreurs, travaille ton storytelling, et tu feras la différence.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Link to="/generator">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Pratiquer avec nos outils IA
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErreurEntretienMethodePage;

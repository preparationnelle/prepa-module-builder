
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';

const FinirEntretienMethodePage = () => {
  const { trackPageVisit } = useProgress();
  
  // Suivre la visite de la page
  useEffect(() => {
    trackPageVisit('method');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">
            Méthode: <span className="gradient-text">Comment bien finir son entretien</span>
          </h1>
          
          <p className="text-gray-600 mb-8">
            La dernière minute d'un entretien d'école de commerce concentre souvent plus d'enjeu qu'on ne l'imagine. Deux configurations dominent : 
            soit le jury invite le candidat à poser une question (« Avez-vous quelque chose à nous demander ? »), soit il inverse la perspective 
            (« Y a-t-il un point de votre parcours que nous n'avons pas abordé ? »). Dans les deux cas, l'étudiant dispose d'un intervalle très 
            court pour sortir du rang : soit en orientant la curiosité du jury vers un sujet stratégique, soit en éclairant un angle mort de son 
            propre dossier. Bien préparer cette minute, c'est s'assurer que l'entretien se termine sur un échange authentique, mémorable et 
            cohérent avec la candidature.
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quand c'est vous qui posez la question</h2>
            <p className="text-gray-600 mb-4">
              Si le jury vous ouvre la porte d'une "question finale", l'erreur serait de la refermer par politesse ou d'interroger un détail 
              logistique déjà accessible sur le site de l'école. La clé réside dans l'écoute active : dès les premières secondes de l'oral, 
              notez mentalement ce que chaque juré révèle de lui-même en se présentant — spécialité, promotion, secteur, association. 
              Ces informations deviennent autant de perches potentielles. Saisir l'une de ces perches prouve votre attention, crée un lien 
              personnel et relance la discussion sur un terrain stratégique plutôt qu'anecdotique.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="text-gray-600 italic">
                Imaginons qu'une professeure mentionne qu'elle conduit la création d'un fonds d'impact piloté par les étudiants ; votre question 
                pourrait être : « Comment ce fonds compte-t-il articuler critères financiers et critères sociétaux ? J'aimerais comprendre la 
                place que les étudiants prennent vraiment dans la sélection, car je cherche à appliquer mes compétences de reporting d'impact 
                à un projet de terrain. » Vous montrez que vous avez écouté, que vous avez une expertise à apporter, et vous invitez le jury 
                à développer un sujet cher à l'école.
              </p>
            </div>
            
            <p className="text-gray-600">
              Si vous détectez un point commun personnel avec un juré — une ville, un sport, un domaine professionnel — vous pouvez également 
              l'activer ; mais veillez à rester sur un plan académique ou professionnel, jamais purement social. « Vous avez évoqué votre 
              expérience d'entrepreneur à Dakar ; quelles sont, selon vous, les barrières non financières majeures pour les start-up d'impact 
              là-bas ? » Cette formulation cultive la proximité sans sortir du cadre.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quand le jury vous demande ce qui manque</h2>
            <p className="text-gray-600 mb-4">
              La variante inverse consiste à entendre : « Y a-t-il un sujet que vous auriez aimé aborder et que nous n'avons pas eu le temps 
              de traiter ? ». Ne déplorez surtout pas la couverture de vos points forts : c'est à vous d'exploiter l'invitation. La bonne 
              démarche commence en amont, lors de la préparation de votre « road-map » personnelle : vous avez identifié six messages clés 
              (valeurs, succès, échec, engagement, singularité, projet pro) et imaginé les connexions possibles entre eux. Pendant l'entretien, 
              vous cochez mentalement les messages déjà abordés ; si l'un d'eux est resté dans l'ombre, vous le ressortez maintenant, mais 
              sous une forme concise et orientée vers l'école.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="text-gray-600 italic">
                Exemple : votre carrière de beatboxeur bénévole en EHPAD n'est pas sortie. Vous pourriez répondre : « Oui, un point bref : 
                j'anime depuis deux ans des ateliers de beatbox dans un EHPAD. Je l'évoque parce qu'il m'a appris à adapter un contenu complexe 
                à des publics très variés et à mesurer l'engagement en temps réel ; c'est une compétence que je souhaite réinvestir dans les 
                projets inter-générationnels de votre association Corps & Cœur, dont j'ai découvert l'existence en préparant l'oral. » 
                Vous complétez ainsi le tableau de votre profil, vous démontrez que vous connaissez l'écosystème de l'école et vous laissez 
                planer la perspective d'une contribution immédiate.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Construire la réponse ou la question en temps réel</h2>
            <p className="text-gray-600 mb-4">
              Dans les deux configurations, la réussite repose sur trois éléments : la pertinence, l'ouverture et la bienveillance.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>
                <span className="font-medium">Pertinence :</span> le sujet doit s'articuler clairement soit avec l'actualité de l'école, 
                soit avec votre projet.
              </li>
              <li>
                <span className="font-medium">Ouverture :</span> privilégiez les formulations qui invitent le jury à développer plutôt 
                qu'à répondre par oui ou non.
              </li>
              <li>
                <span className="font-medium">Bienveillance :</span> ne cherchez ni à piéger votre interlocuteur, ni à lancer un débat 
                polémique ; l'objectif est de créer une discussion courte, vivante, dont le ton reste constructif.
              </li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              La préparation est donc double :
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>
                Bien avant le jour J, vous repérez dans la documentation officielle trois ressources distinctives de l'école ; vous élaborez 
                pour chacune une question ouverte et, symétriquement, un point de votre parcours qui pourrait y faire écho.
              </li>
              <li>
                Le jour de l'entretien, vous écoutez attentivement la présentation des jurés et relevez ce qui pourrait croiser vos propres 
                sujets ; ce croisement improvisé prend souvent le pas sur vos questions prédéfinies, car il montre une écoute réelle.
              </li>
              <li>
                Enfin, si vous sentez que tout a déjà été dit, gardez en réserve un mini-récit inédit, prêt à être présenté en cinquante 
                secondes, pour répondre à l'invitation « quelque chose à ajouter ».
              </li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">L'impact sur la perception finale</h2>
            <p className="text-gray-600 mb-4">
              Bien conclure un entretien ne consiste pas à tout redire mais à laisser la sensation qu'une conversation de valeur pourrait 
              continuer si le temps ne manquait pas. Une question judicieuse ou un complément bien ciblé installe l'image d'un candidat qui 
              écoute, réfléchit et se projette déjà dans la vie de l'institution. À l'inverse, un simple « non, tout va bien » referme 
              brutalement l'échange et prive le jury de cette dernière impression positive.
            </p>
            
            <p className="text-gray-600">
              Pour valider votre stratégie de clôture dans des conditions réelles, il est fortement recommandé de passer par un entretien 
              blanc : vous testerez vos réflexes d'écoute, vos notes rapides sur la présentation des jurés et votre capacité à formuler en 
              quinze secondes soit une dernière question riche, soit un complément éclairant. Une heure d'entraînement suffit souvent à 
              transformer la fin de votre entretien en un avantage décisif.
            </p>
          </div>
          
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link to="/methodes/tendre-perches">
              <Button variant="outline">Tendre des "perches"</Button>
            </Link>
            <Link to="/methodes/storytelling">
              <Button variant="outline">Storytelling</Button>
            </Link>
            <Link to="/">
              <Button>Retour à l'accueil</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinirEntretienMethodePage;

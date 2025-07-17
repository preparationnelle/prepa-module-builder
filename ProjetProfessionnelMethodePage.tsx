
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjetProfessionnelMethodePage = () => {
  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">
            Méthode: <span className="gradient-text">Projet professionnel</span>
          </h1>
          
          <p className="text-gray-600 mb-8">
            Les questions sur le projet professionnel cherchent à comprendre quelles sont vos ambitions de carrière et 
            comment vous envisagez votre futur après l'école de commerce. Le jury veut évaluer la cohérence entre votre 
            parcours, vos aspirations et la formation visée. Il s'agit aussi de vérifier si vous vous êtes renseigné sur 
            le secteur qui vous intéresse et si vous avez une idée (même encore floue) de ce vers quoi vous aimeriez tendre.
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Méthodologie de réflexion pour le Projet professionnel</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Faites le point sur vos intérêts :</span> Identifiez les domaines qui vous attirent 
                (finance, marketing, entrepreneuriat, luxe, économie sociale et solidaire, etc.). Qu'est-ce qui vous passionne et pourquoi ? 
                Avez-vous eu des expositions concrètes (stage, projet scolaire, association) qui ont éveillé cet intérêt ?
              </li>
              <li>
                <span className="font-medium">Cohérence du parcours :</span> Réfléchissez à comment votre choix d'aller en école de 
                commerce s'articule avec ces intérêts. En quoi la formation en commerce vous aidera-t-elle à atteindre votre objectif ?
              </li>
              <li>
                <span className="font-medium">Renseignez-vous sur le secteur :</span> Si vous visez un secteur particulier, informez-vous 
                sur ses grandes tendances, les métiers phares, les compétences clés requises et même les challenges actuels du domaine. 
                Cette profondeur convaincra le jury de votre sérieux.
              </li>
              <li>
                <span className="font-medium">Plan à court, moyen, long terme :</span> Ayez une vision de ce que vous aimeriez faire juste 
                après l'école, 5 ans après et éventuellement 10 ans après. Cela montre votre capacité à vous projeter tout en restant flexible.
              </li>
              <li>
                <span className="font-medium">Restez humble et ouvert :</span> À 20 ans, il est normal de ne pas avoir un plan figé. 
                Montrez votre ambition tout en étant ouvert aux opportunités imprévues que l'école pourrait vous présenter.
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Structure type de réponse (Projet professionnel)</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Annonce du projet :</span> Commencez par exposer votre projet professionnel de manière concise. 
                Cela peut être un métier précis (« Je souhaite devenir analyste financier dans une banque d'investissement ») ou un domaine 
                (« Je m'oriente vers le marketing digital, avec un fort intérêt pour le secteur du luxe »).
              </li>
              <li>
                <span className="font-medium">Motivation personnelle :</span> Expliquez d'où vient cette envie. Est-ce un intérêt de longue date ? 
                Une passion découverte lors d'un stage ou d'un cours ? Évoquez ce qui vous attire dans ce métier ou secteur 
                (ex : goût des chiffres, créativité, impact social, etc.).
              </li>
              <li>
                <span className="font-medium">Lien avec l'école et la formation :</span> Montrez comment l'école de commerce et ses spécificités 
                (cours, spécialisations, associations, réseau) vont vous aider à réaliser ce projet. Parlez éventuellement d'un programme 
                particulier de l'école ou d'une rencontre avec des anciens qui vous a conforté dans votre choix.
              </li>
              <li>
                <span className="font-medium">Planification et connaissance du secteur :</span> Démontrez que vous avez une vision progressive. 
                Par exemple, mentionnez le type de poste que vous visez en sortie d'école, puis comment vous envisagez d'évoluer. 
                Glissez quelques éléments d'actualité du secteur ou de compétences requises pour souligner votre connaissance.
              </li>
              <li>
                <span className="font-medium">Flexibilité :</span> Concluez en montrant que vous restez ouvert d'esprit. Par exemple, 
                tout en ayant un projet en tête, vous êtes conscient que vous découvrirez peut-être de nouvelles passions en école. 
                Cela montre humilité et adaptabilité.
              </li>
            </ol>
          </div>
          
          <div className="mb-8 bg-accent/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Exemple de réponse rédigée</h2>
            <p className="font-medium mb-2">Question : « Quel est votre projet professionnel à long terme et comment l'école va-t-elle vous y aider ? »</p>
            <p className="italic mb-4">Réponse type :</p>
            <div className="text-gray-600">
              <p className="mb-4">« Mon projet professionnel à long terme est de travailler dans la finance verte, idéalement en tant que consultant aidant les entreprises à intégrer des critères de durabilité dans leurs investissements.</p>
              
              <p className="mb-4">
                <span className="font-medium">Origine de ce projet :</span> Cette vocation m'est venue progressivement. Au lycée, j'étais fasciné par 
                les chiffres et l'économie, ce qui m'a conduit en prépa ECG. En même temps, je suis très sensible aux enjeux environnementaux. 
                J'ai notamment animé un club lycéen sur le développement durable et suivi de près les accords internationaux comme la COP26 et la COP28. 
                En prépa, un de mes sujets d'oral portait sur la responsabilité sociale des entreprises, et ça a fait tilt : j'ai découvert qu'il existait un 
                domaine combinant finance et impact environnemental, la "finance verte". Ce qui m'attire, c'est la possibilité de concilier performance 
                économique et responsabilité écologique.
              </p>
              
              <p className="mb-4">
                <span className="font-medium">Lien avec l'école visée :</span> L'ESCP (école où je suis admissible) me semble être le tremplin idéal 
                pour ce projet. J'ai vu qu'elle propose une spécialisation en Finance durable en troisième année, avec des cours pointus sur l'Investissement 
                Socialement Responsable (ISR). De plus, l'école a un Institut du Développement Durable qui publie des recherches sur la finance verte. 
                Intégrer ces cours et peut-être participer à un projet de recherche étudiant au sein de cet institut m'armerait de compétences solides. 
                J'ai également noté la présence d'une association étudiante "Green Finance Society" qui organise des conférences avec des professionnels 
                du secteur – l'occasion rêvée de commencer à bâtir mon réseau dans ce domaine.
              </p>
              
              <p className="mb-4">
                <span className="font-medium">Planification & connaissances :</span> À court terme, juste après l'école, je me verrais bien analyste ESG 
                (Environnement, Social, Gouvernance) dans un fonds d'investissement ou une banque. C'est un poste junior classique pour comprendre comment 
                on évalue les entreprises selon des critères durables. À moyen terme, après quelques années d'expérience, j'aimerais évoluer vers le 
                conseil en stratégie spécialisé dans la transition écologique, ou vers un poste de responsable RSE (Responsabilité Sociétale des Entreprises) 
                dans une grande entreprise. Je sais que le secteur de la finance verte évolue vite – par exemple, l'Union Européenne a récemment renforcé 
                sa régulation sur la transparence des actifs verts, ce qui crée de nouveaux besoins d'expertise dans les sociétés de conseil. Je suis 
                cela de près, et c'est pourquoi je veux acquérir en école les bases financières classiques et la compréhension des enjeux climatiques.
              </p>
              
              <p className="mb-4">
                <span className="font-medium">Ouverture :</span> Bien sûr, je reste ouvert à affiner ce projet. Le monde de l'entreprise et de la 
                finance comporte beaucoup de métiers passionnants que je ne connais pas encore. Peut-être qu'un cours ou une rencontre en école 
                me fera découvrir une autre voie. Mais aujourd'hui, je suis motivé par ce projet alliant finance et développement durable, car j'ai 
                la conviction qu'il correspond à mes valeurs et qu'il y a un vrai besoin de jeunes diplômés formés à ces enjeux. »
              </p>
            </div>
            
            <div className="mt-6 bg-primary/5 p-4 rounded-md">
              <p className="font-medium mb-2">Pourquoi cette réponse fonctionne :</p>
              <p className="text-gray-600">
                Le candidat commence par annoncer clairement son projet (finance verte). Il explique d'où vient son intérêt (parcours académique, 
                sensibilité personnelle, expérience en club, sujet d'oral) – on voit la cohérence entre sa personnalité et son projet. Ensuite, 
                il établit un lien précis avec l'école ciblée, montrant qu'il s'est renseigné : spécialisation offerte, institut, association, 
                tout cela prouve sa motivation et son sérieux. Dans son plan, il démontre une bonne connaissance du secteur (termes ESG, ISR, 
                régulation européenne récente) sans noyer le jury d'acronymes, juste assez pour attester de son intérêt profond. Enfin, il 
                mentionne qu'il reste ouvert – ce qui est appréciable car un projet trop rigide pourrait sembler irréaliste à 100%. La réponse 
                est personnelle, détaillée et réaliste, ce qui la rend convaincante.
              </p>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/methodes/personnalite">
              <Button variant="outline">Méthode précédente</Button>
            </Link>
            <Link to="/methodes/motivation-ecole">
              <Button>Méthode suivante</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetProfessionnelMethodePage;

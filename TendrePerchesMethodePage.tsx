
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';

const TendrePerchesMethodePage = () => {
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
            Méthode: <span className="gradient-text">Tendre des "perches"</span>
          </h1>
          
          <p className="text-gray-600 mb-8">
            L'art de guider le jury pendant l'entretien de personnalité
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pourquoi la perche est capitale</h2>
            <p className="text-gray-600 mb-4">
              À ce niveau, tout bon candidat sait répondre. Celui qui décroche l'admission est celui qui oriente la curiosité du jury. 
              Une perche est une micro-phrase qui appelle naturellement la question suivante ; elle crée un fil que vous contrôlez.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Sans perche : le jury enchaîne ses propres thèmes, vous subissez.</li>
              <li>Avec perche : vous gardez la main, vous déroulez votre histoire dans votre ordre.</li>
            </ul>
            <p className="text-gray-600">
              <strong>Objectif :</strong> laisser en permanence « du grain à moudre » pour que le jury rebondisse – sans jamais avoir l'impression que vous concluez.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Deux leviers majeurs pour planter vos perches</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 mb-4">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Levier</th>
                    <th className="border border-gray-300 px-4 py-2">Fonction</th>
                    <th className="border border-gray-300 px-4 py-2">Astuce haut-niveau</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Questionnaire d'entrée (ESSEC, ESCP, NEOMA…)</td>
                    <td className="border border-gray-300 px-4 py-2">Premier document lu ; il fixe 50 % des questions.</td>
                    <td className="border border-gray-300 px-4 py-2">Glissez 2-3 éléments intrigants mais non expliqués (ex. : "Résilience lors d'un trekking hivernal" dans « Réalisation marquante »).</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Pitch initial (présentez-vous)</td>
                    <td className="border border-gray-300 px-4 py-2">Ouvre l'entretien, fabrique les premières perches orales.</td>
                    <td className="border border-gray-300 px-4 py-2">Terminez chaque phrase par une promesse : "C'est là que j'ai découvert la psychologie de la négociation… mais j'y reviendrai."</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Préparer votre Road-Map des connexions</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Listez vos 6 messages clés (valeurs, succès, échec, projet pro, engagement associatif, singularité).</li>
              <li>Dessinez un tableau 6 × 6 ; reliez chaque message à au moins deux autres (« Si je parle de X, je peux basculer sur Y ou Z »).</li>
              <li>Repérez des "mots pivot" pour amorcer la transition : "à l'époque", "cela m'a conduit à", "en parallèle".</li>
              <li>Placez les pivots dans vos réponses écrites (questionnaire + pitch).</li>
            </ol>
            <p className="text-gray-600 mt-2">
              <strong>Résultat :</strong> quelle que soit la question, vous savez sur quoi rebondir sans jamais clore.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Exemple fil rouge</h2>
            <p className="text-gray-600 mb-4">
              <strong>Contexte :</strong> Julie, 20 ans, admissible HEC/ESSEC. Experience phare : fondatrice d'un podcast mensuel sur les business models solidaires.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Questionnaire (extrait réel proposé)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 mb-6">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Question</th>
                    <th className="border border-gray-300 px-4 py-2">Réponse de Julie</th>
                    <th className="border border-gray-300 px-4 py-2">Perche "visible" pour le jury</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Réalisation dont vous êtes la plus fière</td>
                    <td className="border border-gray-300 px-4 py-2">« Lancement du podcast Impact Radar : 10 épisodes, 4 000 écoutes, partenariat Ashoka. »</td>
                    <td className="border border-gray-300 px-4 py-2 italic">Chiffre exact mais pas le pourquoi → « Pourquoi ce sujet ? »</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Valeur essentielle</td>
                    <td className="border border-gray-300 px-4 py-2">« L'obsession du résultat mesurable, héritée d'un stage en centrale d'achats où j'ai dû sauver 2 % de marge. »</td>
                    <td className="border border-gray-300 px-4 py-2 italic">Intrigue : stage surprise, marge : « Comment ? »</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Échec significatif</td>
                    <td className="border border-gray-300 px-4 py-2">« Campagne Ulule à 54 % – j'ai dû rembourser 200 contributeurs. »</td>
                    <td className="border border-gray-300 px-4 py-2 italic">L'échec n'est pas expliqué → « Pourquoi ça a raté ? »</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mb-6 italic">
              Note : Julie répond honnêtement mais laisse un angle mort ; le jury veut combler le vide → perche réussie.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Pitch 90 s devant le jury</h3>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <p className="text-gray-600 italic">
                « Je m'appelle Julie, passionnée d'impact mesurable. J'ai créé Impact Radar après un stage où chaque centime comptait ; en dix mois nous sommes passés de 0 à 4 000 écoutes sans budget média – ce qui m'a appris la psychologie de la négociation… mais j'y reviendrai. Entre deux interviews, j'ai aussi découvert l'échec : ma première campagne Ulule s'est soldée à 54 %. Cette claque a redéfini ma vision du risque. Aujourd'hui, je veux transformer cette expérience en expertise en rejoignant votre majeure Business & Sustainability. »
              </p>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Perches explicites :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>« …psychologie de la négociation, mais j'y reviendrai »</li>
              <li>« … cette claque a redéfini ma vision du risque »</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3">Une réponse en direct, sans fermer la porte</h3>
            <p className="text-gray-600 font-medium mb-2">Question du jury : « Comment avez-vous obtenu votre partenariat avec Ashoka ? »</p>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="text-gray-600 italic">
                « Tout est parti d'un mail cold qui n'a pas eu de réponse… pendant trois mois. J'ai réécouté notre dernier épisode, constaté qu'il manquait l'angle proof of concept. J'ai envoyé un second mail avec un mini-reporting d'impact (top 3 pays, taux de complétion 78 %). C'est là que la conversation a démarré ; en préparant notre "Impact Sheet", j'ai découvert qu'un indicateur mal choisi pouvait détruire une négociation – sujet passionnant pour moi, car il conditionne aussi la réussite ou l'échec d'un crowdfunding…mais je vous expliquerai comment j'ai revu ma stratégie Ulule si cela vous intéresse.»
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>On répond précisément ➜ crédibilité.</li>
              <li>On ouvre vers l'échec Ulule ➜ nouvelle perche.</li>
              <li>On n'a pas "conclu" : le jury garde la main.</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Trois règles d'or pour laisser le jury sur sa faim</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Phrase de transition intégrée :</span> « …mais c'est un autre sujet dont je pourrai parler. »
              </li>
              <li>
                <span className="font-medium">Suspense mesuré :</span> ne faites pas de teasing sur tout ; 2-3 perches actives suffisent.
              </li>
              <li>
                <span className="font-medium">Jamais de "Voilà, c'est tout." :</span> remplacez par : « …et ça m'a ouvert un deuxième chantier que j'ai adoré explorer. »
              </li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Mini-questionnaire (modèle à adapter)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 mb-4">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Rubrique</th>
                    <th className="border border-gray-300 px-4 py-2">Exemple de champ à remplir en 2 lignes</th>
                    <th className="border border-gray-300 px-4 py-2">Objectif-Perche</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Défi personnel</td>
                    <td className="border border-gray-300 px-4 py-2">« Vente de 1 000 tote-bags en coton recyclé – marge 22 % »</td>
                    <td className="border border-gray-300 px-4 py-2">Intriguer sur logistique + pricing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Inspiration</td>
                    <td className="border border-gray-300 px-4 py-2">« Barbara Belvisi, fondatrice d'Interstellar Lab »</td>
                    <td className="border border-gray-300 px-4 py-2">Demander pourquoi ce rôle-modèle</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Anecdote marquante</td>
                    <td className="border border-gray-300 px-4 py-2">« Négociation d'un contrat à 3 h du matin avec un fournisseur indien via WhatsApp »</td>
                    <td className="border border-gray-300 px-4 py-2">Question sur gestion du décalage culturel</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Talent méconnu</td>
                    <td className="border border-gray-300 px-4 py-2">« Beatbox depuis mes 12 ans – j'enseigne en EPHAD le week-end »</td>
                    <td className="border border-gray-300 px-4 py-2">Perche soft skills + engagement social</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 italic">
              Consigne : toujours laisser un détail concret + angle inexpliqué.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Plan d'entraînement</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Écrivez votre questionnaire avec 3 "zones d'ombre".</li>
              <li>Enregistrez votre pitch ; vérifiez qu'il inclut 2 promesses non développées.</li>
              <li>Simulez 20 questions ; pour chacune, notez → transition possible vers un message clé.</li>
              <li>Répétez jusqu'à ce que chaque réponse débouche naturellement sur un nouveau sujet.</li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conclusion & prochaine étape</h2>
            <p className="text-gray-600 mb-4">
              Maîtriser l'art de la perche, c'est guider sans dominer, intriguer sans manipuler. Vous offrez ainsi au jury un entretien fluide où il a systématiquement la prochaine question – et où vous déroulez votre meilleure histoire.
            </p>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="font-medium mb-2">🚀 Envie de tester votre stratégie de perches en conditions réelles ?</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                <li>Analyse instantanée de votre questionnaire.</li>
                <li>Débrief vidéo + feuille de route perches personnalisées.</li>
              </ul>
              <p className="text-gray-600">Transformez vos anecdotes en aimants à questions… et faites parler vos jurys !</p>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link to="/methodes/storytelling">
              <Button variant="outline">Storytelling</Button>
            </Link>
            <Link to="/methodes/finir-entretien">
              <Button>Comment bien finir son entretien</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TendrePerchesMethodePage;

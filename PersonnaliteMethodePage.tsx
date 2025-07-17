import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';

const PersonnaliteMethodePage = () => {
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
            Méthode: <span className="gradient-text">Personnalité</span>
          </h1>
          
          <p className="text-gray-600 mb-8">
            Les questions de personnalité visent à vous connaître en tant qu'individu. Elles sondent vos qualités, vos défauts, 
            vos traits marquants ou encore vos attitudes face à diverses situations. Le jury cherche ici à cerner votre caractère, 
            vos valeurs et la façon dont vous interagissez avec le monde qui vous entoure.
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Méthodologie de réflexion pour la Personnalité</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Introspection honnête :</span> Faites une liste de vos qualités et défauts avant l'entretien. 
                Soyez sincère et évitez les banalités du type « perfectionniste » sans explication. Demandez-vous comment ces traits se 
                manifestent concrètement dans votre vie.
              </li>
              <li>
                <span className="font-medium">Anecdotes à l'appui :</span> Préparez une anecdote ou un exemple concret pour chaque trait de 
                personnalité que vous mentionnez. Par exemple, si vous dites être persévérant, pensez à un moment où cette persévérance vous 
                a servi (un défi sportif ou scolaire par exemple).
              </li>
              <li>
                <span className="font-medium">Évitez l'arrogance :</span> Restez humble même en présentant vos qualités. Montrez que vous êtes 
                conscient de vos axes d'amélioration. L'humilité est souvent appréciée (« il me semble que ma principale qualité est… »).
              </li>
              <li>
                <span className="font-medium">Lien avec l'école de commerce :</span> Mettez en évidence comment vos traits de personnalité sont 
                des atouts pour la vie en école de commerce (travail d'équipe, adaptabilité, leadership, curiosité, etc.).
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Structure type de réponse (Personnalité)</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Annonce du trait :</span> Commencez par nommer la qualité ou le défaut que l'on vous demande, ou 
                par vous décrire en quelques mots si la question est générale (« Je me décrirais comme quelqu'un de… »).
              </li>
              <li>
                <span className="font-medium">Définition personnelle :</span> Expliquez ce que cela signifie pour vous. Par exemple, si vous 
                dites « je suis persévérant », précisez comment vous définissez la persévérance dans votre quotidien.
              </li>
              <li>
                <span className="font-medium">Exemple concret :</span> Illustrez avec une anecdote personnelle. C'est le cœur de la réponse : 
                racontez une situation vécue en lien avec ce trait. Veillez à décrire le contexte, votre action et le résultat ou l'apprentissage en découlant.
              </li>
              <li>
                <span className="font-medium">Impact et introspection :</span> Concluez en expliquant ce que cette qualité/défaut vous a apporté 
                et éventuellement comment vous travaillez dessus (particulièrement pour un défaut). Montrez que vous avez du recul sur vous-même et que vous évoluez.
              </li>
            </ol>
          </div>
          
          <div className="mb-8 bg-accent/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Exemple de réponse rédigée</h2>
            <p className="font-medium mb-2">Question : « Quelles sont vos trois principales qualités et comment les avez-vous démontrées ? »</p>
            <p className="italic mb-4">Réponse type :</p>
            <div className="text-gray-600">
              <p className="mb-4">« Mes trois principales qualités sont la persévérance, l'ouverture d'esprit et l'organisation.</p>
              
              <p className="mb-4">
                <span className="font-medium">Persévérance :</span> Je me considère persévérant, car je n'abandonne pas facilement face aux difficultés. 
                Par exemple, en terminale, j'ai eu du mal à suivre en mathématiques au début. Plutôt que de baisser les bras, j'ai instauré un rituel 
                de travail quotidien, revu mes bases et sollicité de l'aide auprès de mon professeur. À force de travail, mes notes se sont nettement 
                améliorées et j'ai fini parmi les premiers de ma classe en maths. Cette expérience m'a appris que la ténacité paye, et aujourd'hui 
                encore, en prépa, je ne renonce jamais devant un exercice difficile.
              </p>
              
              <p className="mb-4">
                <span className="font-medium">Ouverture d'esprit :</span> Je suis également ouvert d'esprit. J'adore découvrir de nouvelles cultures et 
                perspectives. Par exemple, j'ai participé à un programme d'échange durant l'été avant la prépa, où j'ai vécu un mois dans une famille 
                aux Pays-Bas. J'ai découvert un mode de vie différent, une autre manière de penser l'éducation et le travail d'équipe. Cette 
                expérience m'a non seulement permis d'améliorer mon anglais, mais aussi de comprendre l'importance de l'empathie et de la tolérance. 
                Depuis, je cherche régulièrement à rencontrer des personnes d'horizons variés, ce qui, je pense, est un atout précieux pour la vie 
                associative en école de commerce.
              </p>
              
              <p className="mb-4">
                <span className="font-medium">Organisation :</span> Enfin, l'organisation est un de mes points forts. En tant qu'étudiant en prépa, 
                j'ai dû apprendre à gérer un emploi du temps très chargé. J'utilise un bullet journal pour planifier mes révisions, mes devoirs sur 
                table et mes moments de repos. Par exemple, lors de la préparation des concours blancs, j'ai créé un planning sur deux mois, 
                équilibrant chaque matière. Cela m'a aidé à travailler de façon régulière sans procrastiner, et j'ai abordé les épreuves plus 
                sereinement. Cette capacité à planifier et prioriser me permet aussi de m'investir dans des projets extrascolaires sans compromettre mes études. »
              </p>
            </div>
            
            <div className="mt-6 bg-primary/5 p-4 rounded-md">
              <p className="font-medium mb-2">Pourquoi cette réponse fonctionne :</p>
              <p className="text-gray-600">
                Elle présente clairement trois qualités en les nommant dès le départ. Pour chaque qualité, le candidat explique ce que le terme 
                signifie concrètement pour lui, puis illustre avec une anecdote précise de sa vie. Cela donne de la crédibilité (on voit la qualité 
                en action) et rend la réponse personnelle et unique. Le candidat termine chaque exemple en reliant la qualité à un apprentissage ou 
                un bénéfice pour son parcours, démontrant ainsi une capacité de réflexion sur lui-même. Le ton reste humble (il mentionne qu'il a eu 
                des difficultés, qu'il a sollicité de l'aide, etc.), ce qui évite de tomber dans l'arrogance.
              </p>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/">
              <Button variant="outline">Retour à l'accueil</Button>
            </Link>
            <Link to="/methodes/projet-professionnel">
              <Button>Méthode suivante : Projet professionnel</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonnaliteMethodePage;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MotivationEcoleMethodePage = () => {
  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">
            Méthode: <span className="gradient-text">Motivation pour l'école</span>
          </h1>
          
          <p className="text-gray-600 mb-8">
            Ici, le jury évalue votre envie réelle d'intégrer LEUR école en particulier. Les questions de motivation pour l'école 
            cherchent à distinguer les candidats qui ont un projet cohérent avec ce que l'établissement offre et qui connaissent les 
            spécificités de l'école, de ceux qui donneraient une réponse générique valable pour n'importe quelle école de commerce. 
            Il s'agit de montrer que vous avez fait vos devoirs : vous vous êtes renseigné sur l'école, vous savez pourquoi elle 
            vous correspond et pourquoi vous pourriez y apporter quelque chose.
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Méthodologie de réflexion pour la Motivation d'intégrer l'école</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Renseignez-vous à fond :</span> Parcourez le site web de l'école, ses brochures, les programmes, 
                les doubles diplômes, la vie associative, les valeurs affichées, etc. Notez les points distinctifs (une pédagogie particulière, 
                un campus à l'international, une association unique, un incubateur réputé, etc.).
              </li>
              <li>
                <span className="font-medium">Identifiez 3 à 4 arguments clés :</span> Listez quelques raisons spécifiques qui vous attirent : 
                par exemple "le MSc en Finance quantitative de 3e année", ou "la forte dimension internationale avec 6 mois obligatoires à 
                l'étranger", ou "la réputation de l'école dans le secteur du luxe". Assurez-vous qu'au moins un de ces arguments correspond à 
                votre projet pro et un autre à votre personnalité ou vos valeurs.
              </li>
              <li>
                <span className="font-medium">Connaissez les valeurs et la devise :</span> Si l'école a une devise ou met en avant des valeurs 
                (innovation, excellence, diversité, etc.), réfléchissez à comment ces valeurs font écho en vous. Certains conseillent même de faire 
                référence à la devise dans la réponse.
              </li>
              <li>
                <span className="font-medium">Préparez un comparatif modéré :</span> On vous demande souvent « Pourquoi notre école et pas une autre ? ». 
                Vous n'avez pas à critiquer les autres écoles, mais montrez en quoi celle-ci offre quelque chose d'unique qui compte pour vous 
                (réseau d'alumni, taille de la promotion, localisation, etc.).
              </li>
              <li>
                <span className="font-medium">Soyez honnête :</span> Évitez les clichés creux du type "Parce que c'est la meilleure" ou "Parce que 
                je veux faire des rencontres et voyager". Concentrez-vous sur vous : pourquoi VOUS voulez y aller.
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Structure type de réponse (Motivation pour l'école)</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Introduction personnalisée :</span> Commencez par une phrase d'accroche montrant que vous avez 
                compris l'ADN de l'école. Par exemple : "Ce qui me séduit particulièrement à HEC, c'est son esprit d'entreprendre couplé à son exigence académique."
              </li>
              <li>
                <span className="font-medium">Argument 1 – Formation et projet pro :</span> Mettez en avant un aspect académique ou professionnel 
                clé que l'école propose et qui cadre avec votre projet. Ex : un programme spécifique, une filière, un double diplôme, 
                un incubateur pour entrepreneurs si vous voulez créer une entreprise, etc. Illustrez comment vous vous projetez dans cette offre.
              </li>
              <li>
                <span className="font-medium">Argument 2 – Vie associative et valeurs :</span> Parlez d'une association ou d'un projet étudiant 
                spécifique qui vous attire. Reliez-le à vos passions actuelles si possible. Ou mentionnez un club, un événement (gala, forum) qui 
                vous emballe. Profitez-en pour glisser les valeurs de l'école si pertinentes.
              </li>
              <li>
                <span className="font-medium">Argument 3 – Dimension personnelle :</span> Si possible, ajoutez un élément plus personnel : une rencontre, 
                un échange avec un étudiant ou un ancien, une journée portes ouvertes. Cela humanise votre réponse.
              </li>
              <li>
                <span className="font-medium">Conclusion – synthèse :</span> Terminez en réaffirmant que, pour toutes ces raisons conjuguées, 
                cette école est votre premier choix. Montrez votre enthousiasme à l'idée d'y étudier et éventuellement ce que vous comptez y apporter en retour.
              </li>
            </ol>
          </div>
          
          <div className="mb-8 bg-accent/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Exemple de réponse rédigée</h2>
            <p className="font-medium mb-2">Question : « Pourquoi avoir choisi notre école de commerce en particulier ? »</p>
            <p className="italic mb-4">Réponse type :</p>
            <div className="text-gray-600">
              <p className="mb-4">« J'ai choisi de présenter Audencia parce que plusieurs aspects de cette école correspondent étroitement à mon projet et à ma personnalité, ce qui la rend unique à mes yeux.</p>
              
              <p className="mb-4">
                <span className="font-medium">Excellence académique spécialisée :</span> Tout d'abord, Audencia est pionnière en management responsable, 
                un domaine qui m'importe. J'ai découvert que votre école propose le parcours "Management durable" en dernière année, en partenariat avec 
                des entreprises engagées. Voulant m'orienter vers la RSE (Responsabilité Sociétale des Entreprises), cette spécialisation m'a tout de 
                suite attiré. Je m'imagine très bien suivre le cours de "Business Ethics" dont j'ai lu la description sur votre site, et mener le projet 
                de fin d'études sur une problématique concrète en entreprise alignée sur le développement durable. Peu d'écoles offrent un programme 
                aussi structuré dans ce domaine, et c'est un critère décisif pour moi.
              </p>
              
              <p className="mb-4">
                <span className="font-medium">Vie associative et valeurs humanistes :</span> Ensuite, Audencia est connue pour son engagement humaniste, 
                ce qui se reflète dans la vie associative. L'association "Debating Society" m'a particulièrement tapé dans l'œil – j'ai pratiqué le 
                théâtre et l'éloquence en prépa, et je sais que rejoindre ce club me permettrait de continuer à développer mon aisance à l'oral en 
                abordant des sujets de société. J'ai aussi noté la présence du club "Solidar'Monde" qui organise des missions humanitaires : cela 
                rejoint mes valeurs personnelles de solidarité. Cette dimension d'ouverture aux autres et de service, très mise en avant dans les 
                valeurs d'Audencia, correspond à mon état d'esprit. À tel point que j'ai intégré dans ma propre liste de valeurs la notion de "bien 
                commun", qui me semble chère à l'école.
              </p>
              
              <p className="mb-4">
                <span className="font-medium">Dimension internationale :</span> Un autre point qui me motive est le rayonnement international de 
                votre école. Apprendre que tous les étudiants effectuent un semestre à l'étranger m'a enthousiasmé. J'ai adoré mes voyages linguistiques 
                au lycée et je parle anglais et espagnol. Audencia offrant notamment des échanges en Amérique latine (je pense à l'université partenaire 
                au Mexique), j'y vois l'occasion de renforcer ma maîtrise de l'espagnol et de découvrir une culture d'affaires différente. Cette perspective 
                multiculturelle est en ligne avec l'étudiant ouvert d'esprit que je m'efforce d'être. De plus, croiser des étudiants venant du monde 
                entier sur le campus de Nantes promet un enrichissement quotidien.
              </p>
              
              <p className="mb-4">
                <span className="font-medium">Affinités personnelles confirmées :</span> Enfin, mon choix s'est confirmé lors de la journée portes 
                ouvertes. J'ai eu l'opportunité de discuter avec deux étudiantes de deuxième année. Elles m'ont parlé de l'ambiance bienveillante qui 
                règne sur le campus, de l'accompagnement personnalisé par les professeurs et même d'un souvenir marquant : leur participation au défi 
                sportif Audencia Spring pour collecter des fonds caritatifs. En les écoutant, je me suis projeté avec d'autant plus de clarté dans votre 
                école. Je me suis dit : "C'est exactement cet environnement stimulant et solidaire que je recherche."
              </p>
              
              <p>
                En conclusion, Audencia m'attire pour la cohérence globale qu'elle présente par rapport à moi : une formation de haut niveau en 
                management responsable pour mon projet pro, une vie associative riche qui cadre avec mes passions et mes valeurs, un fort accent 
                international, et une atmosphère dans laquelle je me vois évoluer. Je suis véritablement motivé par Audencia – ce n'est pas juste 
                une école de commerce pour moi, c'est celle dans laquelle je souhaite m'épanouir et contribuer activement pendant mes études. »
              </p>
            </div>
            
            <div className="mt-6 bg-primary/5 p-4 rounded-md">
              <p className="font-medium mb-2">Pourquoi cette réponse fonctionne :</p>
              <p className="text-gray-600">
                Elle est riche en détails spécifiques à Audencia, ce qui la rend crédible et personnalisée (on ne pourrait pas la copier-coller 
                pour une autre école). Le candidat commence par l'argument majeur (management responsable) lié à son projet RSE – on voit qu'il a aligné 
                offre de l'école et ambition personnelle. Il poursuit avec un argument sur la vie associative, citant des clubs existants et reliant 
                à ses activités personnelles (théâtre, éloquence, solidarité), montrant ainsi qu'il s'est projeté dans la vie étudiante de l'école. 
                L'aspect international est aussi chiffré (tous les étudiants partent à l'étranger) et relié à son profil (langues parlées). La touche 
                finale est son expérience de JPO : cela humanise la réponse et prouve sa démarche proactive pour connaître l'école. Au final, il 
                réaffirme son choix en synthétisant comment l'école et lui partagent les mêmes valeurs et objectifs, ce qui donne un sentiment de forte 
                adéquation. Le jury sentira que ce candidat est sincèrement motivé par leur établissement, ce qui est exactement le but.
              </p>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/methodes/projet-professionnel">
              <Button variant="outline">Méthode précédente</Button>
            </Link>
            <Link to="/">
              <Button variant="secondary">Retour à l'accueil</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotivationEcoleMethodePage;

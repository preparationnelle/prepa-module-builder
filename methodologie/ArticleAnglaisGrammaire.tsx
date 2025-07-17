import React from "react";
export default function ArticleAnglaisGrammaire() {
  return <section>
      <h2 className="text-xl font-bold text-primary mb-5"> Traduction et Grammaire</h2>
      <p className="mb-4 font-semibold">
        Attention, ceci n’est pas une méthode pour apprendre l’anglais, c’est une méthode pour réussir les épreuves d’anglais en prépa HEC.
      </p>
      <div className="mb-2">
        <strong>Pourquoi est-ce crucial ?</strong>
        <p>
          La traduction est non seulement une épreuve des concours, c’est aussi un moyen efficace de maîtriser la grammaire anglaise !
        </p>
      </div>
      <div className="mb-2">
        <strong>Comment s’y prendre efficacement ?</strong>
        <p>
          Pratiquez régulièrement des phrases de thème, en utilisant les sujets vus en cours ou disponibles dans les annales des concours comme Ecricome LV2. Les corrigés sont détaillés et présentent souvent plein d’options de traduction.
        </p>
      </div>
      <h4 className="font-semibold mt-6 mb-2 text-primary">
        Exemple de thème grammatical ECRICOME 2008 LV2
      </h4>
      <div className="bg-accent/50 border-l-4 border-primary pl-4 py-3 rounded mb-4">
        <div className="grid md:grid-cols-2 gap-8">
          <ol className="mb-2 space-y-4 list-decimal ml-4">
            <li>Depuis le début des années 90, le Japon se bat contre la déflation et une croissance faible.</li>
            <li>Si la reprise économique n’avait pas été si timide, il n’y aurait pas eu tant de fermetures d’usines.</li>
            <li>Moins vous passerez de temps sur les réseaux sociaux, plus vous vous rapprocherez de vos vrais amis.</li>
            <li>Quand le Royaume-Uni ne fera plus partie de l’Union européenne, l’anglais ne sera peut-être pas aussi répandu qu’aujourd’hui.</li>
            <li>Vous n’auriez pas dû quitter le Pays de Galles avant d’avoir visité Cardiff et ses environs.</li>
            <li>À peine le patron avait-il annoncé des licenciements que certains salariés savaient qu’ils ne seraient pas épargnés.</li>
            <li>Les informations que j’ai reçues hier ne sont pas fiables : vérifions-les avant de les publier sur notre site.</li>
            <li>Non seulement elle lui suggéra de travailler plus, mais elle lui reprocha aussi d’arriver en retard tous les matins.</li>
            <li>Il sera d’autant plus heureux d’apprendre une aussi bonne nouvelle qu’il ne s’y attend pas du tout.</li>
          </ol>
          <ol className="mb-2 space-y-4 list-decimal ml-4">
            <li>Since the early 90s, Japan has been combatting deflation and sluggish growth.</li>
            <li>Had the economic recovery not been so modest, there would not have been so many factory closures.</li>
            <li>The less time you spend on social networks, the closer you will get to your true friends.</li>
            <li>When the United Kingdom is no longer a member of the European Union, English may not be as widespread as it is today.</li>
            <li>You shouldn’t have left Wales before visiting Cardiff and its surroundings.</li>
            <li>Hardly had the boss announced redundancies when some employees knew they wouldn’t be spared.</li>
            <li>The information I received yesterday is not reliable. Let us check it before posting it on our website.</li>
            <li>Not only did she suggest he / she should work harder, she also reproached him / her for arriving late every morning.</li>
            <li>He will be all the happier to hear such good news as he is not expecting it at all.</li>
          </ol>
        </div>
        <div className="mb-2 mt-4">
          <a href="https://www.ecricome.org/wp-content/uploads/2021/01/ANNALE-LV2-ANGLAISALLEMAND-ESPAGNOL-PRE%CC%81PA-2018.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">
            Lien vers le corrigé complet
          </a>
        </div>
      </div>
    </section>;
}
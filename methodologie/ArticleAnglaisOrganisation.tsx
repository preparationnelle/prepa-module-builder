import React from "react";
export default function ArticleAnglaisOrganisation() {
  return <section>
      <h2 className="text-xl font-bold text-primary mb-5">Temps de travail </h2>

      <div className="mb-6">
        <strong className="block mb-2">
          Combien de temps travailler l’anglais ? Pourquoi et comment le travailler tous les jours ?
        </strong>
        <p>
          Une langue est une compétence qui se construit avec la répétition. Travailler quotidiennement, même sur de petites tâches, permet de maintenir un rythme
          et de progresser régulièrement. Cela renforce la mémorisation.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-accent/50 rounded px-4 py-3">
            <span className="font-semibold">Intermédiaire :</span>{" "}
            <span>30-45 minutes par jour (1h le WE)</span>
          </div>
          <div className="bg-accent/50 rounded px-4 py-3">
            <span className="font-semibold">Avancé :</span>{" "}
            <span>15-30 minutes suffisent pour consolider vos acquis (1h30 le WE)</span>
          </div>
        </div>
        <p className="mt-3">
          Si vous manquez de temps, profitez de créneaux “perdus” comme les transports ou les moments avant de dormir pour revoir vos erreurs, apprendre du vocabulaire.
        </p>
      </div>

      <div className="mb-6">
        <span className="block text-lg font-semibold mb-2 text-primary">
          Routine Quotidienne d&apos;Apprentissage : activités pour maximiser vos progrès
        </span>
        <ol className="list-decimal ml-6 space-y-6">
          <li>
            <strong>Faire des phrases de traductions (thème)</strong>
            <div className="ml-2 mt-1 space-y-1">
              <span className="italic">Temps :</span> <b>30 minutes</b>
              <ul className="list-disc ml-6">
                <li>Traduisez 10 phrases</li>
                <li>Comparez votre traduction avec un corrigé (Ecricome, classe, mes ressources)</li>
                <li>Notez les structures et erreurs pour les réviser plus tard</li>
              </ul>
            </div>
          </li>

          <li>
            <strong>Écrire une synthèse</strong>
            <div className="ml-2 mt-1 space-y-1">
              <span className="italic">Temps :</span> <b>1 heure</b>{" "}
              <span className="italic">(en conditions concours à faire le WE)</span>
              <ul className="list-disc ml-6">
                <li>Lisez attentivement les deux textes et soulignez les idées principales.</li>
                <li>Rédigez un plan avec introduction, corps, conclusion.</li>
                <li>Rédigez la synthèse en respectant les mots-clés et en intégrant des transitions fluides.</li>
              </ul>
            </div>
          </li>

          <li>
            <strong>Rédiger un essai</strong>
            <div className="ml-2 mt-1 space-y-1">
              <span className="italic">Temps :</span> <b>1 heure (au début), 45 minutes avec la pratique</b>
              <ul className="list-disc ml-6">
                <li>Lisez l’énoncé et identifiez la problématique.</li>
                <li>Rédigez un plan détaillé (2-3 parties).</li>
                <li>Rédigez l’essai en utilisant des formules et exemples appris.</li>
                <li>Relisez et corrigez les fautes éventuelles.</li>
              </ul>
              <span className="text-sm">
                À faire le WE ou un jour en semaine quand vous avez le temps. Je me tiens dispo pour vous faire un retour et vous donner des sujets si besoin. Profitez-en !
              </span>
            </div>
          </li>

          <li>
            <strong>Revoir du vocabulaire/thème spécifique</strong>
            <div className="ml-2 mt-1">
              <span className="italic">Temps :</span> <b>1 à 20 minutes (flexible)</b>
              <p>Revoyez votre carnet de vocabulaire ou utilisez une app comme Anki.</p>
            </div>
          </li>

          <li>
            <strong>Lecture ou écoute en anglais</strong>
            <div className="ml-2 mt-1">
              <span className="italic">Temps :</span> <b>15 à 30 minutes</b> (dans les transports ou avant de dormir)
              <ul className="list-disc ml-6">
                <li>Lisez un article court de The Economist, The Guardian, ou écoutez un podcast (BBC Global News, The Daily).</li>
                <li>Notez une phrase intéressante ou une tournure stylée.</li>
                <li>Reformulez cette phrase dans votre carnet pour vous entraîner.</li>
              </ul>
            </div>
          </li>

          <li>
            <strong>Revoir vos erreurs avant les DS, avant de rédiger une copie d&apos;entraînement</strong>
            <div className="ml-2 mt-1">
              <span className="italic">Temps :</span> <b>10 minutes</b>
              <ul className="list-disc ml-6">
                <li>Relisez votre carnet d’erreurs ou vos corrections de la veille.</li>
                <li>Identifiez les points que vous devez revoir.</li>
                <li>Faites un exercice ou une phrase pour corriger cette faiblesse.</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>;
}
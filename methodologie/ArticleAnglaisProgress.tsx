import React from "react";
export default function ArticleAnglaisProgress() {
  return <section>
      <h2 className="text-xl font-bold text-primary mb-5"> Garder une trace de vos progrès : un point essentiel</h2>
      <div className="mb-4">
        <strong className="block mb-2">Pourquoi&nbsp;?</strong>
        <p>
          Prendre des notes structurées sur vos erreurs, vocabulaire et nouvelles structures rencontrées vous aide à progresser plus vite. Cela vous permet aussi de réviser efficacement sans repartir de zéro. Ceci est valable pour la traduction, et aussi pour les essais.
        </p>
      </div>
      <ol className="list-decimal ml-6 space-y-6">
        <li>
          <strong>Gérer vos erreurs en Trois Points</strong>
          <div className="mt-2 ml-2">
            <span>
              <b>Identifiez vos erreurs fréquentes :</b> par exemple un problème d’accord (<span className="italic">"The informations are not reliable"</span> au lieu de <span className="italic">"The information is not reliable"</span>).
            </span>
            <div className="mt-3">
              <span className="font-medium">Carnet d’erreurs&nbsp;:</span>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Notez l’erreur, sa correction, et pourquoi c’est faux.
                </li>
                <li>
                  <span className="italic">Erreur :</span> <span className="italic text-primary">"She suggested me to work harder."</span>
                </li>
                <li>
                  <span className="italic">Correction :</span> <span className="italic text-primary">"She suggested that I should work harder."</span>
                </li>
                <li>
                  <span className="italic">Explication :</span> Le verbe <span className="italic">suggest</span> ne prend pas d’objet direct.
                </li>
              </ul>
              <p className="mt-2">
                Répétez cette structure pour toutes les erreurs que vous faites et vous verrez vos progrès vont arriver très vite.
              </p>
            </div>
            <strong className="block mt-4">Révision ciblée&nbsp;:</strong>
            <p>
              Révisez régulièrement votre carnet pour éviter de refaire les mêmes fautes, vous pouvez avoir un carnet et les rentrer tous les WE sur Anki ou Quizlet.
            </p>
          </div>
        </li>
        <li>
          <strong>Vocabulaire</strong>
          <div className="ml-2 mt-2">
            <ul className="list-disc ml-6">
              <li>
                <b>Créer un carnet thématique :</b> Classez les mots par thèmes (environnement, économie, politique, société…).
              </li>
              <li>Ajoutez des synonymes et des exemples.</li>
              <li>
                <b>Exemple :</b> <span className="italic">"Sluggish growth"</span> → synonymes : <span className="italic">weak growth</span>
                <br />
                <b>Exemple phrase :</b> <span className="italic">"Japan has struggled with sluggish growth for decades."</span>
              </li>
              <li>
                <b>Focus sur l’orthographe :</b> Mettez un astérisque sur les mots souvent mal orthographiés et révisez-les régulièrement.
                <div className="ml-4 mt-1 italic">
                  Exemple : accommodation, environment, indispensable.
                </div>
              </li>
              <li>
                <b>Flashcards :</b> Utilisez une appli comme Anki pour mémoriser vos mots clés et leurs contextes.
              </li>
              <li>
                <b>Rationalisez votre vocabulaire :</b> Apprenez un ensemble limité mais stratégique de mots et expressions que vous maîtriserez parfaitement, y compris leur orthographe et leurs usages contextuels.
              </li>
            </ul>
          </div>
        </li>
      </ol>
      <div className="mt-6">
        <span className="block font-medium">
          Ce que je vous propose pour vous faire gagner du temps&nbsp;:
        </span>
        <span>
          Des sets de vocabulaire pour apprendre les expressions indispensables en anglais pour la colle, l’essai et la synthèse.
        </span>
      </div>
    </section>;
}
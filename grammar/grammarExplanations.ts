
/**
 * Contient la fonction pour récupérer l'explication détaillée d'un conseil grammatical.
 */
export function getGrammarExplanation(tip: string): string {
  const MAP: Record<string, string> = {
    "Faites attention à l'accord des pronoms relatifs avec le nom qu'ils remplacent.":
      "En français ou en allemand, le pronom relatif doit s'accorder en genre (masculin/féminin/neutre) et nombre (singulier/pluriel) avec le nom qu'il remplace. Par exemple : die Stadt, die... (féminin singulier).",
    "Rappelez-vous que dans une phrase principale, le verbe doit toujours être en deuxième position.":
      "En allemand, la règle de base impose que le verbe conjugué se place en deuxième position dans une proposition principale. Ex : Heute <b>gehe</b> ich ins Kino.",
    "Faites attention à la place du verbe dans les subordonnées.":
      "Dans les subordonnées allemandes, le verbe conjugué se place à la fin : ..., weil ich <b>ins Kino gehe</b>.",
  };
  if (MAP[tip]) return MAP[tip];
  return "Explication non disponible pour ce conseil.";
}

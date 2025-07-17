
export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  keywords: string[];
  content?: string;
}

export const searchData: SearchItem[] = [
  // Pages de méthodologie
  {
    id: "method-anglais",
    title: "Méthodologie Anglais",
    description: "Maîtriser l'anglais en prépa ECG : essais, synthèses, thèmes",
    category: "Méthodologie",
    url: "/methodologie/anglais",
    keywords: ["anglais", "essay", "synthese", "theme", "grammaire", "ecg"]
  },
  {
    id: "method-maths",
    title: "Méthodologie Mathématiques",
    description: "Stratégies et méthodes pour réussir les maths en prépa ECG",
    category: "Méthodologie",
    url: "/methodologie/maths",
    keywords: ["mathematiques", "maths", "calcul", "analyse", "algebre", "ecg"]
  },
  {
    id: "method-geopolitique",
    title: "Méthodologie Géopolitique",
    description: "Comment structurer ses dissertations de géopolitique",
    category: "Méthodologie",
    url: "/methodologie/geopolitique",
    keywords: ["geopolitique", "dissertation", "actualite", "monde", "relations"]
  },
  {
    id: "method-culture",
    title: "Méthodologie Culture Générale",
    description: "Approche méthodologique de la culture générale",
    category: "Méthodologie",
    url: "/methodologie/culture-generale",
    keywords: ["culture", "generale", "dissertation", "philosophie", "lettres"]
  },
  {
    id: "method-python",
    title: "Méthodologie Python",
    description: "Programmer en Python pour les mathématiques en prépa ECG",
    category: "Méthodologie",
    url: "/methodologie/python",
    keywords: ["python", "programmation", "numpy", "matplotlib", "algorithme"]
  },
  {
    id: "method-allemand",
    title: "Méthodologie Allemand",
    description: "Maîtriser l'allemand : essais, synthèses et grammaire",
    category: "Méthodologie",
    url: "/methodologie/allemand",
    keywords: ["allemand", "deutsch", "essai", "synthese", "grammaire"]
  },

  // Formation Python
  {
    id: "formation-python",
    title: "Formation Python ECG",
    description: "Formation complète Python pour prépa ECG avec quiz interactif",
    category: "Formation",
    url: "/formation",
    keywords: ["python", "formation", "ecg", "numpy", "matplotlib", "quiz"]
  },
  {
    id: "python-reference",
    title: "Référence Python ECG",
    description: "Toutes les commandes Python au programme de prépa ECG",
    category: "Formation",
    url: "/python-reference",
    keywords: ["python", "commandes", "numpy", "matplotlib", "reference", "ecg"]
  },

  // Écoles
  {
    id: "essec",
    title: "ESSEC Business School",
    description: "Tout savoir sur l'ESSEC : admissions, programmes, entretiens",
    category: "Écoles",
    url: "/essec",
    keywords: ["essec", "business", "school", "admission", "entretien", "commerce"]
  },
  {
    id: "escp",
    title: "ESCP Business School",
    description: "Guide complet pour intégrer l'ESCP",
    category: "Écoles",
    url: "/escp",
    keywords: ["escp", "business", "school", "admission", "entretien", "commerce"]
  },
  {
    id: "edhec",
    title: "EDHEC Business School",
    description: "Présentation de l'EDHEC et conseils d'admission",
    category: "Écoles",
    url: "/edhec",
    keywords: ["edhec", "business", "school", "admission", "entretien", "commerce"]
  },
  {
    id: "emlyon",
    title: "EM Lyon Business School",
    description: "Guide pour intégrer EM Lyon",
    category: "Écoles",
    url: "/emlyon",
    keywords: ["emlyon", "em", "lyon", "business", "school", "admission", "entretien"]
  },
  {
    id: "skema",
    title: "SKEMA Business School",
    description: "Tout sur SKEMA : programmes et admissions",
    category: "Écoles",
    url: "/skema",
    keywords: ["skema", "business", "school", "admission", "entretien", "commerce"]
  },
  {
    id: "audencia",
    title: "Audencia Business School",
    description: "Guide complet pour Audencia",
    category: "Écoles",
    url: "/audencia",
    keywords: ["audencia", "business", "school", "nantes", "admission", "entretien"]
  },
  {
    id: "gem",
    title: "Grenoble École de Management",
    description: "Présentation de GEM et conseils d'admission",
    category: "Écoles",
    url: "/gem",
    keywords: ["gem", "grenoble", "management", "admission", "entretien", "commerce"]
  },
  {
    id: "kedge",
    title: "KEDGE Business School",
    description: "Guide pour intégrer KEDGE",
    category: "Écoles",
    url: "/kedge",
    keywords: ["kedge", "business", "school", "marseille", "bordeaux", "admission"]
  },
  {
    id: "neoma",
    title: "NEOMA Business School",
    description: "Tout savoir sur NEOMA",
    category: "Écoles",
    url: "/neoma",
    keywords: ["neoma", "business", "school", "reims", "rouen", "admission"]
  },

  // Questions d'entretien
  {
    id: "questions-entretien",
    title: "Banque de Questions d'Entretien",
    description: "Large collection de questions d'entretien pour les écoles de commerce",
    category: "Questions",
    url: "/methodologie/entretiens-personnalite",
    keywords: ["questions", "entretien", "oral", "admission", "preparation", "commerce"]
  },
  {
    id: "questions-motivation",
    title: "Questions de Motivation",
    description: "Questions sur vos motivations et objectifs",
    category: "Questions",
    url: "/questions/motivation-objectives",
    keywords: ["motivation", "objectifs", "projet", "carriere", "entretien"]
  },
  {
    id: "questions-projection",
    title: "Questions de Projection",
    description: "Scénarios et questions de projection professionnelle",
    category: "Questions",
    url: "/questions/projection-scenarios",
    keywords: ["projection", "scenarios", "avenir", "carriere", "professionnel"]
  },
  {
    id: "questions-interpersonal",
    title: "Questions Interpersonnelles",
    description: "Questions sur le travail en équipe et relations",
    category: "Questions",
    url: "/questions/interpersonal-teamwork",
    keywords: ["interpersonnel", "equipe", "teamwork", "relations", "collaboration"]
  },
  {
    id: "cv-projectif",
    title: "CV Projectif",
    description: "Comment réussir l'exercice du CV projectif",
    category: "Questions",
    url: "/questions/cv-projectif",
    keywords: ["cv", "projectif", "exercice", "entretien", "carriere"]
  },
  {
    id: "entretien-inverse-gem",
    title: "Entretien Inverse GEM",
    description: "Spécificités de l'entretien inverse à GEM",
    category: "Questions",
    url: "/questions/entretien-inverse-gem",
    keywords: ["entretien", "inverse", "gem", "grenoble", "questions"]
  },

  // Méthodologie entretien
  {
    id: "method-personnalite",
    title: "Préparer son Entretien de Personnalité",
    description: "Guide complet pour réussir l'entretien de personnalité",
    category: "Méthodologie",
    url: "/methodes/personnalite",
    keywords: ["personnalite", "entretien", "preparation", "oral", "admission"]
  },

  // Générateurs
  {
    id: "generator-main",
    title: "Générateur Principal",
    description: "Accès à tous les générateurs d'aide à la préparation",
    category: "Générateurs",
    url: "/generator",
    keywords: ["generateur", "outils", "preparation", "automatisation"]
  },
  {
    id: "generator-answer",
    title: "Générateur de Réponses",
    description: "Génère des réponses personnalisées pour vos entretiens",
    category: "Générateurs",
    url: "/generator/answer",
    keywords: ["reponses", "entretien", "personnalise", "generateur"]
  },
  {
    id: "generator-flashcards",
    title: "Générateur de Flashcards",
    description: "Créez des flashcards pour réviser efficacement",
    category: "Générateurs",
    url: "/generator/flashcards",
    keywords: ["flashcards", "revision", "memorisation", "apprentissage"]
  },
  {
    id: "generator-languages",
    title: "Générateur de Langues",
    description: "Exercices et contenus pour les langues vivantes",
    category: "Générateurs",
    url: "/generator/languages",
    keywords: ["langues", "anglais", "allemand", "exercices", "themes"]
  },
  {
    id: "generator-geopolitics",
    title: "Générateur de Géopolitique",
    description: "Contenus et analyses géopolitiques actualisés",
    category: "Générateurs",
    url: "/generator/geopolitics",
    keywords: ["geopolitique", "actualite", "analyses", "monde", "international"]
  },
  {
    id: "generator-math-tutor",
    title: "Tuteur Mathématiques",
    description: "Assistant IA pour les mathématiques",
    category: "Générateurs",
    url: "/generator/math-tutor",
    keywords: ["mathematiques", "tuteur", "aide", "exercices", "corrections"]
  },
  {
    id: "generator-python-tutor",
    title: "Tuteur Python",
    description: "Assistant IA pour apprendre Python",
    category: "Générateurs",
    url: "/generator/python-tutor",
    keywords: ["python", "tuteur", "programmation", "apprentissage", "aide"]
  },
  {
    id: "generator-python-exercises",
    title: "Exercices Python",
    description: "Générateur d'exercices Python pour la prépa ECG",
    category: "Générateurs",
    url: "/generator/python-exercises",
    keywords: ["python", "exercices", "ecg", "programmation", "entrainement"]
  },

  // Coaching et offres
  {
    id: "coaching",
    title: "Coaching Individuel",
    description: "Accompagnement personnalisé pour votre préparation",
    category: "Services",
    url: "/coaching",
    keywords: ["coaching", "individuel", "accompagnement", "personnalise", "mentor"]
  },
  {
    id: "nos-offres",
    title: "Nos Offres",
    description: "Découvrez toutes nos offres de préparation",
    category: "Services",
    url: "/nos-offres",
    keywords: ["offres", "formules", "preparation", "services", "tarifs"]
  },

  // Pages informatives
  {
    id: "apropos",
    title: "À Propos",
    description: "Découvrez Prepa Rationnelle et notre mission",
    category: "Informations",
    url: "/apropos",
    keywords: ["apropos", "equipe", "mission", "prepa", "rationnelle"]
  },
  {
    id: "partners",
    title: "Partenaires",
    description: "Nos partenaires et collaborations",
    category: "Informations",
    url: "/partners",
    keywords: ["partenaires", "collaborations", "reseau", "entreprises"]
  },
  {
    id: "contact",
    title: "Contact",
    description: "Nous contacter pour toute question",
    category: "Informations",
    url: "/contact",
    keywords: ["contact", "aide", "support", "questions", "assistance"]
  }
];

export const searchCategories = [
  "Méthodologie",
  "Formation", 
  "Écoles",
  "Questions",
  "Générateurs",
  "Services",
  "Informations"
];

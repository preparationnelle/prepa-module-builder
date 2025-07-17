
export interface PythonQuestion {
  id: string;
  question: string;
  correctAnswer: string;
  category: string;
  explanation?: string;
}

export const pythonQuestions: PythonQuestion[] = [
  // Fonctions mathématiques de base
  {
    id: "1",
    question: "Quelle commande permet de calculer la valeur absolue ?",
    correctAnswer: "np.abs()",
    category: "Fonctions mathématiques",
    explanation: "np.abs() calcule la valeur absolue d'un nombre"
  },
  {
    id: "2",
    question: "Quelle commande permet de calculer le cosinus ?",
    correctAnswer: "np.cos()",
    category: "Fonctions mathématiques"
  },
  {
    id: "3",
    question: "Quelle commande permet de calculer le sinus ?",
    correctAnswer: "np.sin()",
    category: "Fonctions mathématiques"
  },
  {
    id: "4",
    question: "Quelle commande permet de calculer le logarithme népérien ?",
    correctAnswer: "np.log()",
    category: "Fonctions mathématiques"
  },
  {
    id: "5",
    question: "Quelle commande permet de calculer l'exponentielle ?",
    correctAnswer: "np.exp()",
    category: "Fonctions mathématiques"
  },
  {
    id: "6",
    question: "Quelle commande permet de calculer la racine carrée ?",
    correctAnswer: "np.sqrt()",
    category: "Fonctions mathématiques"
  },
  {
    id: "7",
    question: "Quelle commande permet de calculer la partie entière ?",
    correctAnswer: "np.floor()",
    category: "Fonctions mathématiques"
  },
  
  // Constantes
  {
    id: "8",
    question: "Quelle constante représente π (pi) ?",
    correctAnswer: "np.pi",
    category: "Constantes"
  },
  {
    id: "9",
    question: "Quelle constante représente le nombre d'Euler ?",
    correctAnswer: "np.e",
    category: "Constantes"
  },
  
  // Création de vecteurs
  {
    id: "10",
    question: "Quelle commande permet de créer un vecteur à partir d'une liste ?",
    correctAnswer: "np.array()",
    category: "Création de vecteurs"
  },
  {
    id: "11",
    question: "Quelle commande permet de créer une progression arithmétique ?",
    correctAnswer: "np.arange()",
    category: "Création de vecteurs"
  },
  {
    id: "12",
    question: "Quelle commande permet de créer n éléments équirépartis entre a et b ?",
    correctAnswer: "np.linspace()",
    category: "Création de vecteurs"
  },
  {
    id: "13",
    question: "Quelle commande permet de créer un vecteur de n éléments égaux à 1 ?",
    correctAnswer: "np.ones()",
    category: "Création de vecteurs"
  },
  {
    id: "14",
    question: "Quelle commande permet de créer un vecteur de n éléments égaux à 0 ?",
    correctAnswer: "np.zeros()",
    category: "Création de vecteurs"
  },
  
  // Matrices
  {
    id: "15",
    question: "Quelle commande permet de créer une matrice identité ?",
    correctAnswer: "np.eye()",
    category: "Création de matrices"
  },
  
  // Opérations sur matrices
  {
    id: "16",
    question: "Quelle commande permet d'obtenir les dimensions d'une matrice ?",
    correctAnswer: "np.shape()",
    category: "Opérations sur matrices"
  },
  {
    id: "17",
    question: "Quelle commande permet de calculer le produit matriciel ?",
    correctAnswer: "np.dot()",
    category: "Opérations sur matrices"
  },
  {
    id: "18",
    question: "Quelle commande permet de calculer la transposée ?",
    correctAnswer: "np.transpose()",
    category: "Opérations sur matrices"
  },
  {
    id: "19",
    question: "Quelle commande permet de calculer la somme de tous les éléments ?",
    correctAnswer: "np.sum()",
    category: "Opérations sur matrices"
  },
  {
    id: "20",
    question: "Quelle commande permet de calculer la moyenne ?",
    correctAnswer: "np.mean()",
    category: "Opérations sur matrices"
  },
  {
    id: "21",
    question: "Quelle commande permet de trouver le minimum ?",
    correctAnswer: "np.min()",
    category: "Opérations sur matrices"
  },
  {
    id: "22",
    question: "Quelle commande permet de trouver le maximum ?",
    correctAnswer: "np.max()",
    category: "Opérations sur matrices"
  },
  {
    id: "23",
    question: "Quelle commande permet de calculer les sommes cumulées ?",
    correctAnswer: "np.cumsum()",
    category: "Opérations sur matrices"
  },
  
  // Algèbre linéaire
  {
    id: "24",
    question: "Quelle commande permet de calculer l'inverse d'une matrice ?",
    correctAnswer: "al.inv()",
    category: "Algèbre linéaire"
  },
  {
    id: "25",
    question: "Quelle commande permet de calculer le rang d'une matrice ?",
    correctAnswer: "al.matrix_rank()",
    category: "Algèbre linéaire"
  },
  {
    id: "26",
    question: "Quelle commande permet de calculer la puissance d'une matrice ?",
    correctAnswer: "al.matrix_power()",
    category: "Algèbre linéaire"
  },
  {
    id: "27",
    question: "Quelle commande permet de résoudre un système linéaire Ax = b ?",
    correctAnswer: "al.solve()",
    category: "Algèbre linéaire"
  },
  {
    id: "28",
    question: "Quelle commande permet de calculer les valeurs propres ?",
    correctAnswer: "al.eig()",
    category: "Algèbre linéaire"
  },
  
  // Variables aléatoires
  {
    id: "29",
    question: "Quelle commande permet de générer une loi uniforme sur [a,b] ?",
    correctAnswer: "rd.uniform()",
    category: "Variables aléatoires"
  },
  {
    id: "30",
    question: "Quelle commande permet de générer un entier uniforme ?",
    correctAnswer: "rd.randint()",
    category: "Variables aléatoires"
  },
  {
    id: "31",
    question: "Quelle commande permet de générer une loi binomiale ?",
    correctAnswer: "rd.binomial()",
    category: "Variables aléatoires"
  },
  {
    id: "32",
    question: "Quelle commande permet de générer une loi géométrique ?",
    correctAnswer: "rd.geometric()",
    category: "Variables aléatoires"
  },
  {
    id: "33",
    question: "Quelle commande permet de générer une loi exponentielle ?",
    correctAnswer: "rd.exponential()",
    category: "Variables aléatoires"
  },
  {
    id: "34",
    question: "Quelle commande permet de générer une loi normale ?",
    correctAnswer: "rd.normal()",
    category: "Variables aléatoires"
  },
  {
    id: "35",
    question: "Quelle commande permet de générer une loi de Poisson ?",
    correctAnswer: "rd.poisson()",
    category: "Variables aléatoires"
  },
  {
    id: "36",
    question: "Quelle commande permet de générer une loi gamma ?",
    correctAnswer: "rd.gamma()",
    category: "Variables aléatoires"
  },
  
  // Graphiques
  {
    id: "37",
    question: "Quelle commande permet de tracer une courbe ?",
    correctAnswer: "plt.plot()",
    category: "Graphiques"
  },
  {
    id: "38",
    question: "Quelle commande permet d'afficher le graphique ?",
    correctAnswer: "plt.show()",
    category: "Graphiques"
  },
  {
    id: "39",
    question: "Quelle commande permet de créer une nouvelle figure ?",
    correctAnswer: "plt.figure()",
    category: "Graphiques"
  },
  {
    id: "40",
    question: "Quelle commande permet d'effacer le contenu ?",
    correctAnswer: "plt.clf()",
    category: "Graphiques"
  },
  {
    id: "41",
    question: "Quelle commande permet d'ajouter une grille ?",
    correctAnswer: "plt.grid()",
    category: "Graphiques"
  },
  {
    id: "42",
    question: "Quelle commande permet d'ajouter une légende à l'axe x ?",
    correctAnswer: "plt.xlabel()",
    category: "Graphiques"
  },
  {
    id: "43",
    question: "Quelle commande permet d'ajouter une légende à l'axe y ?",
    correctAnswer: "plt.ylabel()",
    category: "Graphiques"
  },
  {
    id: "44",
    question: "Quelle commande permet d'ajouter un titre ?",
    correctAnswer: "plt.title()",
    category: "Graphiques"
  }
];

export const pythonCategories = [
  "Fonctions mathématiques",
  "Constantes", 
  "Création de vecteurs",
  "Création de matrices",
  "Opérations sur matrices",
  "Algèbre linéaire",
  "Variables aléatoires",
  "Graphiques"
];

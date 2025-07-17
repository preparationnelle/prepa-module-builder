
export const pythonCommands = {
  imports: {
    title: "Importation des modules",
    commands: [
      { command: "import numpy as np", description: "NumPy principal pour le calcul mathématique" },
      { command: "import numpy.linalg as al", description: "Sous-module algèbre linéaire" },
      { command: "import numpy.random as rd", description: "Génération de nombres aléatoires" },
      { command: "import matplotlib.pyplot as plt", description: "Tracé de courbes et graphiques" }
    ]
  },
  functions: {
    title: "Fonctions mathématiques de base",
    commands: [
      { command: "np.abs()", description: "Valeur absolue" },
      { command: "np.cos()", description: "Cosinus" },
      { command: "np.sin()", description: "Sinus" },
      { command: "np.log()", description: "Logarithme népérien" },
      { command: "np.exp()", description: "Exponentielle" },
      { command: "np.sqrt()", description: "Racine carrée" },
      { command: "np.floor()", description: "Partie entière" }
    ]
  },
  constants: {
    title: "Constantes",
    commands: [
      { command: "np.pi", description: "π (pi)" },
      { command: "np.e", description: "e (nombre d'Euler)" }
    ]
  },
  vectors: {
    title: "Création de vecteurs",
    commands: [
      { command: "np.array([u1,...,un])", description: "Créer un vecteur-ligne" },
      { command: "np.arange(a,b,r)", description: "Progression arithmétique de raison r" },
      { command: "np.linspace(a,b,n)", description: "n éléments équirépartis de a à b" },
      { command: "np.ones(n)", description: "Vecteur de n éléments égaux à 1" },
      { command: "np.zeros(n)", description: "Vecteur de n éléments égaux à 0" }
    ]
  },
  matrices: {
    title: "Création de matrices",
    commands: [
      { command: "np.array([[a1,1,...,a1,p],...,[an,1,...,an,p]])", description: "Création d'une matrice" },
      { command: "np.ones((n,p))", description: "Matrice n×p de 1" },
      { command: "np.zeros((n,p))", description: "Matrice n×p de 0" },
      { command: "np.eye(n,p)", description: "Matrice avec 1 sur la diagonale" }
    ]
  },
  operations: {
    title: "Opérations sur matrices/vecteurs",
    commands: [
      { command: "np.shape(A)", description: "Dimensions de la matrice A" },
      { command: "np.dot(A,B)", description: "Produit matriciel" },
      { command: "np.transpose(A)", description: "Transposée de A" },
      { command: "np.sum(A)", description: "Somme de tous les éléments" },
      { command: "np.mean(A)", description: "Moyenne de tous les éléments" },
      { command: "np.min(A)", description: "Minimum des éléments" },
      { command: "np.max(A)", description: "Maximum des éléments" },
      { command: "np.cumsum(A)", description: "Sommes cumulées" }
    ]
  },
  linalg: {
    title: "Algèbre linéaire",
    commands: [
      { command: "al.inv(A)", description: "Inverse de la matrice A" },
      { command: "al.matrix_rank(A)", description: "Rang de la matrice A" },
      { command: "al.matrix_power(A,n)", description: "Puissance n-ième de A" },
      { command: "al.solve(A,b)", description: "Résolution du système Ax = b" },
      { command: "al.eig(A)", description: "Valeurs propres et vecteurs propres" }
    ]
  },
  random: {
    title: "Variables aléatoires",
    commands: [
      { command: "rd.uniform(a,b)", description: "Loi uniforme sur [a,b]" },
      { command: "rd.randint(a,b)", description: "Entier uniforme sur [a,b-1]" },
      { command: "rd.binomial(n,p)", description: "Loi binomiale B(n,p)" },
      { command: "rd.geometric(p)", description: "Loi géométrique de paramètre p" },
      { command: "rd.exponential(1/lambda)", description: "Loi exponentielle" },
      { command: "rd.normal(m,sigma)", description: "Loi normale N(m,σ²)" },
      { command: "rd.poisson(lambda)", description: "Loi de Poisson P(λ)" },
      { command: "rd.gamma(nu)", description: "Loi gamma de paramètre ν" }
    ]
  },
  graphics: {
    title: "Représentations graphiques",
    commands: [
      { command: "plt.plot(x,y)", description: "Tracer une courbe" },
      { command: "plt.plot(x,y,'x')", description: "Nuage de points avec des croix" },
      { command: "plt.show()", description: "Afficher le graphique" },
      { command: "plt.figure(n)", description: "Créer une nouvelle figure" },
      { command: "plt.clf()", description: "Effacer le contenu" },
      { command: "plt.axis('scaled')", description: "Repère orthonormé" },
      { command: "plt.grid()", description: "Ajouter une grille" },
      { command: "plt.xlabel('texte')", description: "Légende axe x" },
      { command: "plt.ylabel('texte')", description: "Légende axe y" },
      { command: "plt.title('texte')", description: "Titre du graphique" },
      { command: "plt.legend()", description: "Afficher la légende" }
    ]
  }
};

export type PythonCommand = {
  command: string;
  description: string;
};

export type PythonCommandSection = {
  title: string;
  commands: PythonCommand[];
};

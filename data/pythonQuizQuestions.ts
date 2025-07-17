
export const fundamentalsQuizQuestions = [
  {
    id: 1,
    question: "Comment afficher le type de la variable 'a' qui contient la valeur 17 ?",
    correctAnswers: ["print(type(a))", "print(type(17))", "type(a)"],
    hint: "Utilisez la fonction type() avec print()",
    explanation: "type() retourne le type d'une variable, print() l'affiche"
  },
  {
    id: 2,
    question: "Quelle commande calcule le reste de la division de 17 par 3 ?",
    correctAnswers: ["17 % 3", "print(17 % 3)"],
    hint: "Utilisez l'opérateur modulo %",
    explanation: "L'opérateur % donne le reste de la division euclidienne"
  },
  {
    id: 3,
    question: "Comment créer une boucle qui affiche les nombres de 0 à 4 ?",
    correctAnswers: ["for i in range(5): print(i)", "for i in range(5):\n    print(i)"],
    hint: "Utilisez range(5) avec une boucle for",
    explanation: "range(5) génère les nombres de 0 à 4"
  },
  {
    id: 4,
    question: "Comment ajouter l'élément 4 à la fin de la liste L = [1, 2, 3] ?",
    correctAnswers: ["L.append(4)", "L.append(4)"],
    hint: "Utilisez la méthode append()",
    explanation: "append() ajoute un élément à la fin d'une liste"
  },
  {
    id: 5,
    question: "Comment définir une fonction f qui retourne le carré de x ?",
    correctAnswers: ["def f(x): return x**2", "def f(x):\n    return x**2"],
    hint: "Utilisez def nom_fonction(paramètre): return ...",
    explanation: "def définit une fonction, return renvoie le résultat"
  }
];

export const matricesQuizQuestions = [
  {
    id: 1,
    question: "Comment importer NumPy avec l'alias 'np' ?",
    correctAnswers: ["import numpy as np"],
    hint: "Utilisez 'import ... as ...'",
    explanation: "Cette convention permet d'utiliser np.fonction() au lieu de numpy.fonction()"
  },
  {
    id: 2,
    question: "Comment créer la matrice [[1, 2], [3, 4]] avec NumPy ?",
    correctAnswers: ["np.array([[1, 2], [3, 4]])", "A = np.array([[1, 2], [3, 4]])"],
    hint: "Utilisez np.array() avec des listes imbriquées",
    explanation: "np.array() convertit une liste Python en array NumPy"
  },
  {
    id: 3,
    question: "Comment accéder à l'élément de la première ligne, deuxième colonne de la matrice A ?",
    correctAnswers: ["A[0, 1]", "A[0][1]"],
    hint: "Les indices commencent à 0",
    explanation: "A[ligne, colonne] ou A[ligne][colonne] pour accéder aux éléments"
  },
  {
    id: 4,
    question: "Comment calculer la somme de tous les éléments de la matrice A ?",
    correctAnswers: ["np.sum(A)", "A.sum()"],
    hint: "Utilisez np.sum() ou la méthode .sum()",
    explanation: "np.sum() calcule la somme de tous les éléments d'un array"
  },
  {
    id: 5,
    question: "Comment créer une matrice 2×3 remplie de zéros ?",
    correctAnswers: ["np.zeros([2, 3])", "np.zeros((2, 3))"],
    hint: "Utilisez np.zeros() avec les dimensions",
    explanation: "np.zeros([lignes, colonnes]) crée une matrice de zéros"
  }
];

export const analyseQuizQuestions = [
  {
    id: 1,
    question: "Comment calculer la somme des carrés de 1 à 5 avec une liste ?",
    correctAnswers: ["sum([k**2 for k in range(1, 6)])", "sum([k*k for k in range(1, 6)])"],
    hint: "Utilisez une liste en compréhension avec sum()",
    explanation: "La compréhension de liste génère [k**2 for k in range(1, 6)]"
  },
  {
    id: 2,
    question: "Comment calculer le produit des nombres de 1 à 4 avec une boucle ?",
    correctAnswers: ["P = 1\nfor k in range(1, 5): P *= k", "P = 1; for k in range(1, 5): P *= k"],
    hint: "Initialisez P à 1, puis multipliez dans une boucle",
    explanation: "Pour un produit, on initialise à 1 et on utilise *= dans la boucle"
  },
  {
    id: 3,
    question: "Comment appliquer la relation de récurrence u(n+1) = 5*u(n) + 3 starting from u = 2 ?",
    correctAnswers: ["u = 5*u + 3", "u = 5 * u + 3"],
    hint: "Remplacez u par la nouvelle valeur selon la formule",
    explanation: "On met à jour u selon la relation de récurrence"
  },
  {
    id: 4,
    question: "Comment calculer le cosinus de π avec NumPy ?",
    correctAnswers: ["np.cos(np.pi)", "np.cos(np.pi)"],
    hint: "Utilisez np.cos() avec la constante np.pi",
    explanation: "np.cos(np.pi) = -1 (cosinus de 180 degrés)"
  },
  {
    id: 5,
    question: "Comment définir une fonction qui calcule x³ - 2x ?",
    correctAnswers: ["def f(x): return x**3 - 2*x", "def f(x):\n    return x**3 - 2*x"],
    hint: "Utilisez def avec return et l'opérateur **",
    explanation: "** est l'opérateur de puissance en Python"
  }
];

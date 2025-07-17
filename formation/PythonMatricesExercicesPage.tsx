import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Play, CheckCircle, Eye, EyeOff } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
const PythonMatricesExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState<{
    [key: string]: boolean;
  }>({});
  const toggleSolution = (exerciseId: string) => {
    setShowSolution(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };
  const qcmQuestions = [{
    id: 1,
    question: "Que renvoie l'instruction np.array([[1,2],[3,4]])[1,0] ?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    answer: "C) 3"
  }, {
    id: 2,
    question: "Quelle est la différence fondamentale entre A * B et np.dot(A,B) ?",
    options: ["A) Aucune différence", "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel", "C) np.dot() est plus performant", "D) A * B ne fonctionne que pour les vecteurs"],
    answer: "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel"
  }, {
    id: 3,
    question: "Pour calculer la somme de chaque ligne d'une matrice A, on utilise :",
    options: ["A) np.sum(A, 0)", "B) np.sum(A, 1)", "C) np.sum(A)", "D) np.row_sum(A)"],
    answer: "B) np.sum(A, 1)"
  }, {
    id: 4,
    question: "L'instruction np.zeros([3,2]) crée une matrice de dimensions :",
    options: ["A) 2 lignes, 3 colonnes", "B) 3 lignes, 2 colonnes", "C) 6 éléments au total", "D) Dimensions variables"],
    answer: "B) 3 lignes, 2 colonnes"
  }, {
    id: 5,
    question: "Pour extraire la troisième colonne d'une matrice A :",
    options: ["A) A[3,:]", "B) A[:,3]", "C) A[:,2]", "D) A[2,:]"],
    answer: "C) A[:,2]"
  }];
  const exercises = [{
    id: 1,
    title: "QCM d'évaluation",
    difficulty: "Facile",
    description: "Questions à choix multiples pour évaluer vos connaissances de base.",
    color: "blue",
    type: "qcm"
  }, {
    id: 2,
    title: "Application directe (Niveau 1)",
    difficulty: "Facile",
    description: "Création de matrices et extraction d'éléments.",
    color: "green",
    type: "exercise"
  }, {
    id: 3,
    title: "Manipulation des données (Niveau 2)",
    difficulty: "Moyen",
    description: "Manipulation et calculs sur les matrices.",
    color: "orange",
    type: "exercise"
  }, {
    id: 4,
    title: "Opérations matricielles (Niveau 3)",
    difficulty: "Moyen",
    description: "Opérations complexes entre matrices.",
    color: "orange",
    type: "exercise"
  }, {
    id: 5,
    title: "Matrices nilpotentes",
    difficulty: "Avancé",
    description: "Étude des matrices nilpotentes et de leur indice.",
    color: "red",
    type: "exercise"
  }];
  const renderQCMContent = () => <div className="space-y-6">
      {qcmQuestions.map((q, index) => <Card key={q.id} className="border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4 text-lg">Question {q.id}</h3>
            <p className="mb-4">{q.question}</p>
            <div className="space-y-2 mb-4">
              {q.options.map((option, optIndex) => <div key={optIndex} className="p-2 bg-gray-50 rounded">
                  {option}
                </div>)}
            </div>
            <Button variant="outline" size="sm" onClick={() => toggleSolution(`qcm-${q.id}`)} className="flex items-center gap-2">
              {showSolution[`qcm-${q.id}`] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showSolution[`qcm-${q.id}`] ? 'Masquer' : 'Voir'} la réponse
            </Button>
            {showSolution[`qcm-${q.id}`] && <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                <div className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-semibold">Réponse correcte : {q.answer}</span>
                </div>
              </div>}
          </CardContent>
        </Card>)}
    </div>;
  const renderExerciseContent = () => {
    const exercise = exercises[selectedExercise! - 1];
    if (exercise.id === 2) {
      return <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Exercice 1.1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Créer une matrice 3×4 contenant uniquement des zéros, puis une matrice 2×3 contenant uniquement des uns.</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex1-1')} className="flex items-center gap-2 mb-4">
                {showSolution['ex1-1'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex1-1'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex1-1'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`import numpy as np

M1 = np.zeros((3, 4))   # matrice 3×4 de zéros
M2 = np.ones((2, 3))    # matrice 2×3 de uns
print(M1)
print(M2)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">M1 :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`[[0. 0. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]]`}
                    </pre>
                    <p className="font-semibold mt-2">M2 :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`[[1. 1. 1.]
 [1. 1. 1.]]`}
                    </pre>
                  </div>
                </div>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Exercice 1.2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Soit A = np.array([[1,2,3],[4,5,6]]). Extraire l'élément de la deuxième ligne et troisième colonne.</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex1-2')} className="flex items-center gap-2 mb-4">
                {showSolution['ex1-2'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex1-2'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex1-2'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`A = np.array([[1, 2, 3],
              [4, 5, 6]])
element = A[1, 2]       # deuxième ligne, troisième colonne
print(element)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">Affichage :</p>
                    <pre className="text-sm bg-white p-2 border rounded">6</pre>
                    <p className="mt-2">Donc l'élément demandé est <strong>6</strong>.</p>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>;
    }
    if (exercise.id === 3) {
      return <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-700">Exercice 2.1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Créer un vecteur contenant 10 valeurs uniformément réparties entre 0 et 1.</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex2-1')} className="flex items-center gap-2 mb-4">
                {showSolution['ex2-1'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex2-1'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex2-1'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`v = np.linspace(0, 1, 10)   # 10 valeurs uniformément réparties entre 0 et 1
print(v)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">Vecteur obtenu :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`[0.         0.11111111 0.22222222 0.33333333 0.44444444
 0.55555556 0.66666667 0.77777778 0.88888889 1.        ]`}
                    </pre>
                  </div>
                </div>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-orange-700">Exercice 2.2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Pour la matrice B = np.array([[10,20,30],[40,50,60]]), calculer la somme de chaque ligne et de chaque colonne.</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex2-2')} className="flex items-center gap-2 mb-4">
                {showSolution['ex2-2'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex2-2'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex2-2'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`B = np.array([[10, 20, 30],
              [40, 50, 60]])
row_sums = B.sum(axis=1)      # sommes par ligne
col_sums = B.sum(axis=0)      # sommes par colonne
print("Sommes des lignes :", row_sums)
print("Sommes des colonnes :", col_sums)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">Résultats :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`Sommes des lignes : [ 60 150]
Sommes des colonnes : [50 70 90]`}
                    </pre>
                    <ul className="mt-2 text-sm">
                      <li>• Somme ligne 1 : <strong>60</strong></li>
                      <li>• Somme ligne 2 : <strong>150</strong></li>
                      <li>• Sommes colonnes : <strong>50</strong>, <strong>70</strong>, <strong>90</strong></li>
                    </ul>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>;
    }
    if (exercise.id === 4) {
      return <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-700">Exercice 3.1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Soient A = np.array([[1,2],[3,4]]) et B = np.array([[2,1],[1,2]]). Calculer A + B, A * B et np.dot(A,B).</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex3-1')} className="flex items-center gap-2 mb-4">
                {showSolution['ex3-1'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex3-1'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex3-1'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`A = np.array([[1, 2],
              [3, 4]])
B = np.array([[2, 1],
              [1, 2]])

S = A + B          # addition
P_el = A * B       # produit terme à terme
P_mat = np.dot(A, B)  # produit matriciel

print("A + B =\\n", S)
print("A * B =\\n", P_el)
print("np.dot(A, B) =\\n", P_mat)`}
                  </pre>
                  <div className="mt-2 space-y-2">
                    <div>
                      <span className="font-semibold">A + B = </span>
                      <span className="font-mono">[[3 3][4 6]]</span>
                    </div>
                    <div>
                      <span className="font-semibold">A * B = </span>
                      <span className="font-mono">[[2 2][3 8]]</span>
                    </div>
                    <div>
                      <span className="font-semibold">np.dot(A,B) = </span>
                      <span className="font-mono">[[4 5][10 11]]</span>
                    </div>
                  </div>
                </div>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-orange-700">Exercice 3.2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Calculer la transposée de la matrice C = np.array([[1,2,3],[4,5,6],[7,8,9]]).</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex3-2')} className="flex items-center gap-2 mb-4">
                {showSolution['ex3-2'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex3-2'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex3-2'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`C = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])
C_T = C.T          # transposée
print(C_T)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">Transposée de C :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`[[1 4 7]
 [2 5 8]
 [3 6 9]]`}
                    </pre>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>;
    }
    if (exercise.id === 5) {
      return <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-700">Matrices nilpotentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-4">
                  On rappelle qu'une matrice A∈Mn(ℝ) est dite nilpotente s'il existe un entier p∈{'{'}1,…,n{'}'} tel que A^p = 0.
                  Le plus petit de ces entiers est appelé indice de nilpotence de A.
                </p>
                <p className="mb-4">Expliquer comment fonctionne le programme suivant. </p>
              </div>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex-nilp')} className="flex items-center gap-2 mb-4">
                {showSolution['ex-nilp'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex-nilp'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex-nilp'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono">
                {`import numpy as np

def Nilp(A):
    n = np.size(A, 0)
    B = np.copy(A)
    p = 1
    while np.sum(np.abs(B)) != 0 and p <= n:
        B = np.dot(B, A)
        p += 1
    if np.sum(np.abs(B)) == 0:
        print("La matrice est nilpotente d'indice", p)
    else:
        print("La matrice n'est pas nilpotente")`}
                  </pre>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Cette fonction teste si une matrice est nilpotente en calculant ses puissances successives jusqu'à obtenir la matrice nulle ou dépasser l'ordre n.
                    </p>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>;
    }
    return <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">Contenu de l'exercice à venir...</p>
        </CardContent>
      </Card>;
  };
  if (selectedExercise) {
    const exercise = exercises[selectedExercise - 1];
    return (
      <PythonModuleLayout>
        <div className="mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2 mb-6" 
            onClick={() => setSelectedExercise(null)}
          >
            ← Retour aux exercices
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              {exercise.title}
            </h1>
            <Badge 
              variant="secondary" 
              className={`${exercise.color === 'green' ? 'bg-green-100 text-green-700' : exercise.color === 'blue' ? 'bg-blue-100 text-blue-700' : exercise.color === 'red' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}`}
            >
              {exercise.difficulty}
            </Badge>
          </div>
        </div>

        {exercise.type === 'qcm' ? renderQCMContent() : renderExerciseContent()}
      </PythonModuleLayout>
    );
  }
  
  return (
    <PythonModuleLayout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Module 1 : Exercices - Matrices NumPy
        </h1>
        <p className="text-xl text-muted-foreground">
          Exercices pratiques sur les matrices et NumPy
        </p>
      </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-green-700">
              <Target className="h-6 w-6" />
              Objectifs des exercices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Création de matrices</Badge>
                <p className="text-sm text-muted-foreground">
                  Maîtriser les différentes méthodes de création
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Opérations matricielles</Badge>
                <p className="text-sm text-muted-foreground">
                  Effectuer des calculs sur les matrices
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Indexation</Badge>
                <p className="text-sm text-muted-foreground">
                  Accéder et modifier les éléments des matrices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map(exercise => <Card key={exercise.id} className={`hover:shadow-lg transition-shadow cursor-pointer ${exercise.color === 'green' ? 'border border-green-200' : exercise.color === 'blue' ? 'border border-blue-200' : exercise.color === 'red' ? 'border border-red-200' : 'border border-orange-200'}`} onClick={() => setSelectedExercise(exercise.id)}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calculator className={`h-6 w-6 ${exercise.color === 'green' ? 'text-green-600' : exercise.color === 'blue' ? 'text-blue-600' : exercise.color === 'red' ? 'text-red-600' : 'text-orange-600'}`} />
                  <div>
                    <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    <Badge variant="secondary" className={`mt-1 ${exercise.color === 'green' ? 'bg-green-100 text-green-700' : exercise.color === 'blue' ? 'bg-blue-100 text-blue-700' : exercise.color === 'red' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}`}>
                      {exercise.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {exercise.description}
                </p>
                <Button className={`w-full ${exercise.color === 'green' ? 'bg-green-600 hover:bg-green-700' : exercise.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : exercise.color === 'red' ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-600 hover:bg-orange-700'}`}>
                  <Play className="h-4 w-4 mr-2" />
                  Commencer l'exercice
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Navigation retour au cours */}
        <ModuleNavigationCards 
          currentModule={{
            id: 1,
            title: "Matrices",
            slug: "matrices",
            color: "green"
          }}
          isExercisePage={true}
        />
    </PythonModuleLayout>
  );
};
export default PythonMatricesExercicesPage;
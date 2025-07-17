import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Youtube,
  Target,
  TrendingUp,
  Brain,
  Code,
  Star,
  Users,
  Calendar,
  CheckCircle,
  BookOpen,
  Play,
  Home,
  ChevronRight
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';

const PourquoiPythonPrepaECGPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('python-article');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation" className="hover:text-foreground transition-colors">
              Formation
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Pourquoi travailler Python en prépa ECG</h1>
          <p className="text-xl text-muted-foreground mb-6">(et pourquoi mon coaching est ta meilleure option)</p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Vidéo Loom - L'importance de Python aux concours */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-blue-600" /> L'importance de Python aux concours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.loom.com/embed/bb87a1911d4a494ba229aaca00ee88cb"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Accès direct à la formation */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <BookOpen className="h-8 w-8 text-blue-600" /> Accédez directement à la formation Python ECG
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-blue-800 text-lg mb-6">
              Découvrez notre formation complète Python structurée en 4 modules progressifs avec exercices pratiques :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Module Links */}
              <Link to="/formation/python-fondamentaux" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">Module 1: Fondamentaux</h4>
                  <p className="text-blue-700 mb-3">Variables, boucles, conditions, fonctions</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <Play className="h-4 w-4 mr-2" /> <span className="font-medium">Commencer →</span>
                  </div>
                </div>
              </Link>
              <Link to="/formation/python-matrices" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">Module 2: Matrices & Numpy</h4>
                  <p className="text-blue-700 mb-3">Algèbre linéaire, résolution de systèmes</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <Play className="h-4 w-4 mr-2" /> <span className="font-medium">Commencer →</span>
                  </div>
                </div>
              </Link>
              <Link to="/formation/python-analyse" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">Module 3: Analyse & Graphiques</h4>
                  <p className="text-blue-700 mb-3">Matplotlib, tracer des fonctions, suites</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <Play className="h-4 w-4 mr-2" /> <span className="font-medium">Commencer →</span>
                  </div>
                </div>
              </Link>
              <Link to="/formation/python-probabilites" className="group">
                <div className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all group-hover:border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">Module 4: Probabilités</h4>
                  <p className="text-blue-700 mb-3">Simulations, lois, statistiques</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <Play className="h-4 w-4 mr-2" /> <span className="font-medium">Commencer →</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link to="/formation">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <BookOpen className="h-5 w-5 mr-2" /> Voir toute la formation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Témoignage en vedette */}
        <Card className="mb-8 bg-blue-50 border-l-4 border-blue-400">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-blue-800 mb-4">
              « Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à démystifier Python, qui était au départ un gros point faible. Grâce à lui, je suis plus confiante pour traiter les questions Python ! »
            </blockquote>
            <cite className="text-blue-600 font-semibold">— Léa, 2ᵉ année ECG</cite>
          </CardContent>
        </Card>

        {/* Section 1 - Le vrai poids de Python */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-6 w-6 text-orange-600" /> 1. Le vrai poids de Python aux concours : un gisement de points sous-estimé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Depuis la réforme, Python remplace Scilab dans les épreuves de mathématiques appliquées comme approfondies. Résultat :</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>10 à 20 %</strong> selon les écoles (BCE, Ecricome, EDHEC, EM Lyon, HEC, etc.)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Présence systématique à l'oral :</strong> impossible de poursuivre l'entretien HEC sans répondre correctement à la question Python
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Questions souvent "cadeaux" :</strong> analyser un script, compléter une fonction, traduire une somme ou un raisonnement en code
                </span>
              </li>
            </ul>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-orange-800">
                <strong>Moralité :</strong> même si tu n'es « pas fan d'info », ignorer Python revient à laisser jusqu'à 5 points sur la table. Dans une filière où chaque demi-point se paie d'heures de calcul intégral, c'est un luxe que tu ne peux pas te permettre.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Pourquoi la plupart passent à côté */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-red-600" /> 2. Pourquoi la plupart des préparationnaires passent à côté
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>{' '}
                <span>
                  <strong>Effet de mode inversé :</strong> « tout le monde dit que Python, c'est facile » → donc personne ne l'approfondit vraiment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>{' '}
                <span>
                  <strong>Absence de méthodo :</strong> on survole les commandes en TP, sans vraie feuille de route
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>{' '}
                <span>
                  <strong>Stress de l'install :</strong> certains n'ont jamais réussi à faire tourner Numpy sur leur PC ; d'autres découvrent Colab la veille du DS
                </span>
              </li>
            </ul>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-red-800">
                <strong>Résultat :</strong> le jour J, 80 % des candidats trébuchent sur trois erreurs classiques : indices hors liste, confusion entre print et return, boucle mal initialisée.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - La stratégie gagnante */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-green-600" /> 3. La stratégie gagnante : régularité + feedback immédiat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Pour engranger les +3 à +5 pts sûrs, il suffit de :</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">1</div>
                <p className="text-sm">
                  Mémoriser les <strong>54 commandes clés</strong> (import, boucles, Numpy, random, matplotlib)
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <p className="text-sm">
                  S'entraîner <strong>1 h par semaine</strong> sur des questions type-concours
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
                <p className="text-sm">
                  Recevoir un <strong>feedback instantané</strong> qui corrige tes erreurs
                </p>
              </div>
            </div>
            <p className="text-center font-semibold">
              C'est exactement ce que j'ai empaqueté dans mon coaching Python « premium mais pas trop cher ».
            </p>
          </CardContent>
        </Card>

        {/* Section 4 - Ce que tu vas maîtriser */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Code className="h-6 w-6 text-purple-600" /> 4. Ce que tu vas maîtriser (et comment)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Bloc</th>
                    <th className="border border-gray-300 p-3 text-left">Objectif concret</th>
                    <th className="border border-gray-300 p-3 text-left">Outil d'apprentissage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Bases Python</td>
                    <td className="border border-gray-300 p-3">Entrées/sorties, boucles, conditions, fonctions</td>
                    <td className="border border-gray-300 p-3">Vidéos « micro-concepts » + quiz « 54 commandes »</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Algèbre & Numpy</td>
                    <td className="border border-gray-300 p-3">Inverser une matrice, résoudre Ax = b</td>
                    <td className="border border-gray-300 p-3">TP guidé sur Colab</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Analyse</td>
                    <td className="border border-gray-300 p-3">Tracer f(x), suite (uₙ) et chercher une racine</td>
                    <td className="border border-gray-300 p-3">Notebook interactif + corrigé vidéo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Probas/Stats</td>
                    <td className="border border-gray-300 p-3">Simuler loi binomiale, moyenne, médiane</td>
                    <td className="border border-gray-300 p-3">20 exos progressifs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Exos concours</td>
                    <td className="border border-gray-300 p-3">50 questions récurrentes (BCE/Ecricome)</td>
                    <td className="border border-gray-300 p-3">Plateforme IA qui corrige ton code en direct</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-500">
              <p className="text-blue-800">
                <strong>USP :</strong> l'évaluation interactive. Tu colles ton script → l'IA lance les tests → elle t'indique exactement où ça bloque et te propose un indice. Tu corriges → tu relances → tu valides. Boucle <em>Lire → Coder → Tester → Corriger</em>, jusqu'à la réussite complète.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - L'offre en détail */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Star className="h-6 w-6 text-yellow-600" /> 5. L'offre en détail
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Produit cœur */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-lg text-orange-800 mb-3">Produit cœur</h4>
              <p className="text-orange-700 mb-2">
                <strong>6 h de coaching individuel</strong> (visioconf, colab partagé)
              </p>
              <ul className="text-orange-700 space-y-1">
                <li>– Analyse d'extraits de sujets 2021-2024</li>
                <li>– Algorithmes « à connaître par cœur » expliqués pas à pas</li>
              </ul>
            </div>
            {/* Bonus */}
            <div>
              <h4 className="font-bold text-lg mb-4">Bonus</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800">1. Pack 50 exercices</h5>
                  <p className="text-sm text-green-700">À maîtriser avant les concours (avec corrigés vidéo)</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800">2. Cheatsheet PDF</h5>
                  <p className="text-sm text-blue-700">La fiche « 54 commandes » à coller sur ton bureau</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-800">3. WhatsApp privé 30 jours</h5>
                  <p className="text-sm text-purple-700">Questions illimitées, réponse en –24 h</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800">4. 1 h de contenu vidéo</h5>
                  <p className="text-sm text-yellow-700">Optimisations & pièges classiques</p>
                </div>
              </div>
            </div>
            {/* Lead magnet */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">Lead magnet gratuit</h4>
              <p className="text-gray-700">
                Quiz interactif « Commandes Python essentielles » – 15 questions chronométrées pour évaluer ton niveau immédiatement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 6 - Prix */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">6. Combien ça coûte ?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border">
              <div className="text-3xl font-bold text-orange-600 mb-2">297 €</div>
              <p className="text-lg">Coaching 6 h + 4 bonus</p>
              <p className="text-sm text-gray-600">≈ 50 € l'heure, soit le tarif d'un cours particulier standard… avec tout le contenu numérique en prime.</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" /> <span>Paiement en 2 x sans frais disponible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />{' '}
                <span>
                  Pas de garantie ? Exact : tu payes si – et seulement si – tu veux ce résultat. (J'assume : mon taux de satisfaction est supérieur à 95 %, inutile de mettre un filet de sécurité artificiel.)
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 7 - Témoignage détaillé */}
        <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-600" /> 7. Témoignage éclair – Léa, 2ᵉ année ECG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-lg italic text-blue-800 mb-4">
              « Dimitar a démystifié Python ; je partais de zéro. Résultat : sur mon dernier DS, j'ai réussi toutes les questions Python. Je me sens enfin sereine pour le concours. »
            </blockquote>
            <p className="text-blue-700 font-semibold">Si Léa peut le faire en quelques semaines, tu le peux aussi.</p>
          </CardContent>
        </Card>

        {/* Section 8 - Appel à l'action */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-orange-500/10 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" /> 8. OK, mais comment passer à l'action ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <span>
                  <strong>Commence par la formation :</strong> accède directement aux modules de cours et d'exercices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <span>Pratique avec nos outils : flashcards et commandes de référence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <span>
                  <strong>Besoin d'un accompagnement personnalisé ?</strong> Réserve ton coaching individuel
                </span>
              </li>
            </ol>
            <div className="text-center mt-6 space-y-4">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/python-flashcards">
                  <Button variant="outline" size="lg" className="text-base px-6 py-3">
                    Flashcards Python
                  </Button>
                </Link>
                <Link to="/python-reference">
                  <Button variant="outline" size="lg" className="text-base px-6 py-3">
                    Toutes les commandes
                  </Button>
                </Link>
              </div>
              <Link to="/offre/coaching-python">
                <Button size="lg" className="text-lg px-8 py-4 bg-orange-600 hover:bg-orange-700">
                  Coaching personnalisé
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Section 9 - FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>9. FAQ express</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-blue-800">Q : Et si je n'ai jamais installé Python ?</p>
                <p className="text-blue-700">R : On travaillera directement sur Google Colab : aucune installation, juste un navigateur.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-800">Q : Je vise HEC, pas EM Lyon ; c'est assez pointu ?</p>
                <p className="text-green-700">R : Oui : on décortique les sujets HEC 2022-2024 et on pousse jusqu'aux pièges d'oraux.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-orange-800">Q : 297 € pour 6 h, c'est vraiment « premium mais pas trop cher » ؟</p>
                <p className="text-orange-700">
                  R : Regarde les prépas privées : 90 € l'heure, sans quiz, sans PDF, sans suivi WhatsApp. À toi de voir.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vidéo YouTube - Pourquoi Python est essentiel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-red-600" /> Pourquoi Python est essentiel en ECG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/cBG8EJsHkwA"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default PourquoiPythonPrepaECGPage;

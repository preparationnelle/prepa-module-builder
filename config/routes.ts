import { ComponentType, lazy } from 'react';

// Lazy load all pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const GeneratorPage = lazy(() => import('../pages/GeneratorPage'));
const PythonArticlePage = lazy(() => import('../pages/PythonArticlePage'));
const FormationPage = lazy(() => import('../pages/FormationPage'));
const PourquoiPythonPrepaECGPage = lazy(() => import('../pages/PourquoiPythonPrepaECGPage'));
const PythonReferencePage = lazy(() => import('../pages/PythonReferencePage'));
const PythonFlashcardsPage = lazy(() => import('../pages/PythonFlashcardsPage'));
const PythonExercicesPage = lazy(() => import('../pages/PythonExercicesPage'));
const FormationAnglaisPage = lazy(() => import('../pages/FormationAnglaisPage'));
const FormationAllemandPage = lazy(() => import('../pages/FormationAllemandPage'));
const FormationGeopolitiquePage = lazy(() => import('../pages/FormationGeopolitiquePage'));
const NosOffresPage = lazy(() => import('../pages/NosOffresPage'));
const AproposPage = lazy(() => import('../pages/AproposPage'));
const CoachingPage = lazy(() => import('../pages/CoachingPage'));
const PartnersPage = lazy(() => import('../pages/PartnersPage'));
const FormationOverviewPage = lazy(() => import('../pages/FormationOverviewPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Formation pages
const PythonFundamentalsPage = lazy(() => import('../pages/formation/PythonFundamentalsPage'));
const PythonMatricesPage = lazy(() => import('../pages/formation/PythonMatricesPage'));
const PythonAnalysePage = lazy(() => import('../pages/formation/PythonAnalysePage'));
const PythonProbabilitesPage = lazy(() => import('../pages/formation/PythonProbabilitesPage'));
const PythonFondamentauxExercicesPage = lazy(() => import('../pages/formation/PythonFondamentauxExercicesPage'));
const PythonMatricesExercicesPage = lazy(() => import('../pages/formation/PythonMatricesExercicesPage'));
const PythonAnalyseExercicesPage = lazy(() => import('../pages/formation/PythonAnalyseExercicesPage'));
const PythonProbabilitesExercicesPage = lazy(() => import('../pages/formation/PythonProbabilitesExercicesPage'));

// Offres pages
const CoachingPythonPage = lazy(() => import('../pages/offres/CoachingPythonPage'));
const CoachingMathsPage = lazy(() => import('../pages/offres/CoachingMathsPage'));
const OrganisationEtePage = lazy(() => import('../pages/offres/OrganisationEtePage'));
const PreparationCubePage = lazy(() => import('../pages/offres/PreparationCubePage'));

// Methodologie pages
const MethodEntretiensPersonnalitePage = lazy(() => import('../pages/methodologie/MethodEntretiensPersonnalitePage'));

// Articles pages
const MathsEteControlePage = lazy(() => import('../pages/articles/MathsEteControlePage'));
const EntretienInverseGEMPage = lazy(() => import('../pages/EntretienInverseGEMPage'));
const CVProjectifPage = lazy(() => import('../pages/CVProjectifPage'));

// School pages
const ESCPPage = lazy(() => import('../pages/ESCPPage'));
const ESSECPage = lazy(() => import('../pages/ESSECPage'));
const EDHECPage = lazy(() => import('../pages/EDHECPage'));
const EMLyonPage = lazy(() => import('../pages/EMLyonPage'));
const AudenciaPage = lazy(() => import('../pages/AudenciaPage'));
const GEMPage = lazy(() => import('../pages/GEMPage'));
const KEDGEPage = lazy(() => import('../pages/KEDGEPage'));
const NEOMAPage = lazy(() => import('../pages/NEOMAPage'));
const SKEMAPage = lazy(() => import('../pages/SKEMAPage'));

// Generator pages
const FlashcardsGeneratorPage = lazy(() => import('../pages/generator/FlashcardsGeneratorPage'));
const AnswerGeneratorPage = lazy(() => import('../pages/generator/AnswerGeneratorPage'));
const CaseStudyGeneratorPage = lazy(() => import('../pages/generator/CaseStudyGeneratorPage'));
const EDHECGeneratorPage = lazy(() => import('../pages/generator/EDHECGeneratorPage'));
const EMLyonGeneratorPage = lazy(() => import('../pages/generator/EMLyonGeneratorPage'));
const GeopoliticsGeneratorPage = lazy(() => import('../pages/generator/GeopoliticsGeneratorPage'));
const LanguagesGeneratorPage = lazy(() => import('../pages/generator/LanguagesGeneratorPage'));
const PrepaChatbotGeneratorPage = lazy(() => import('../pages/generator/PrepaChatbotGeneratorPage'));
const SchoolProfileGeneratorPage = lazy(() => import('../pages/generator/SchoolProfileGeneratorPage'));
const ThemeGrammarGeneratorPage = lazy(() => import('../pages/generator/ThemeGrammarGeneratorPage'));

// Teacher pages
const TeacherDashboardPage = lazy(() => import('../pages/teacher/TeacherDashboardPage'));
const TeacherCoursesPage = lazy(() => import('../pages/teacher/TeacherCoursesPage'));
const TeacherCourseDetailPage = lazy(() => import('../pages/teacher/TeacherCourseDetailPage'));
const TeacherCourseStudentsPage = lazy(() => import('../pages/teacher/TeacherCourseStudentsPage'));
const TeacherCourseGradesPage = lazy(() => import('../pages/teacher/TeacherCourseGradesPage'));
const TeacherCourseAssignmentPage = lazy(() => import('../pages/teacher/TeacherCourseAssignmentPage'));

export interface RouteConfig {
  path: string;
  component: ComponentType<any>;
  title?: string;
  description?: string;
  protected?: boolean;
  exact?: boolean;
}

export const routes: RouteConfig[] = [
  // Main pages
  { path: '/', component: HomePage, title: 'Accueil' },
  { path: '/login', component: LoginPage, title: 'Connexion' },
  { path: '/register', component: RegisterPage, title: 'Inscription' },
  { path: '/contact', component: ContactPage, title: 'Contact' },
  { path: '/generator', component: GeneratorPage, title: 'Générateurs IA' },
  { path: '/python-article', component: PythonArticlePage, title: 'Article Python' },
  { path: '/formation', component: FormationPage, title: 'Formations' },
  { path: '/pourquoi-python-prepa-ecg', component: PourquoiPythonPrepaECGPage, title: 'Pourquoi Python en Prépa ECG' },
  { path: '/python-reference', component: PythonReferencePage, title: 'Référence Python' },
  { path: '/python-flashcards', component: PythonFlashcardsPage, title: 'Flashcards Python' },
  { path: '/python-exercices', component: PythonExercicesPage, title: 'Exercices Python' },
  { path: '/nos-offres', component: NosOffresPage, title: 'Nos Offres' },
  { path: '/apropos', component: AproposPage, title: 'À propos' },
  { path: '/coaching', component: CoachingPage, title: 'Coaching individuel' },
  { path: '/partners', component: PartnersPage, title: 'Partenaires' },
  { path: '/methodes/personnalite', component: MethodEntretiensPersonnalitePage, title: 'Méthodes Personnalité' },
  
  // Protected pages
  { path: '/dashboard', component: DashboardPage, title: 'Tableau de bord', protected: true },
  
  // Teacher pages
  { path: '/prof', component: TeacherDashboardPage, title: 'Interface Professeur', protected: true },
  { path: '/prof/dashboard', component: TeacherDashboardPage, title: 'Dashboard Professeur', protected: true },
  { path: '/prof/courses', component: TeacherCoursesPage, title: 'Mes Cours', protected: true },
  { path: '/prof/courses/:courseId', component: TeacherCourseDetailPage, title: 'Détails du Cours', protected: true },
  { path: '/prof/courses/:courseId/students', component: TeacherCourseStudentsPage, title: 'Étudiants du Cours', protected: true },
  { path: '/prof/courses/:courseId/grades', component: TeacherCourseGradesPage, title: 'Notes du Cours', protected: true },
  { path: '/prof/courses/:courseId/assignment/:assignmentId', component: TeacherCourseAssignmentPage, title: 'Gestion Devoir', protected: true },
  
  // Formation pages
  { path: '/formation/anglais', component: FormationAnglaisPage, title: 'Formation Anglais' },
  { path: '/formation/allemand', component: FormationAllemandPage, title: 'Formation Allemand' },
  { path: '/formation/geopolitique', component: FormationGeopolitiquePage, title: 'Formation Géopolitique' },
  { path: '/formation/python-fondamentaux', component: PythonFundamentalsPage, title: 'Python Fondamentaux' },
  { path: '/formation/python-matrices', component: PythonMatricesPage, title: 'Python Matrices' },
  { path: '/formation/python-analyse', component: PythonAnalysePage, title: 'Python Analyse' },
  { path: '/formation/python-probabilites', component: PythonProbabilitesPage, title: 'Python Probabilités' },
  { path: '/formation/python-fondamentaux-exercices', component: PythonFondamentauxExercicesPage, title: 'Exercices Python Fondamentaux' },
  { path: '/formation/python-matrices-exercices', component: PythonMatricesExercicesPage, title: 'Exercices Python Matrices' },
  { path: '/formation/python-analyse-exercices', component: PythonAnalyseExercicesPage, title: 'Exercices Python Analyse' },
  { path: '/formation/python-probabilites-exercices', component: PythonProbabilitesExercicesPage, title: 'Exercices Python Probabilités' },
  
  // Offres pages
  { path: '/offre/coaching-python', component: CoachingPythonPage, title: 'Coaching Python' },
  { path: '/offre/coaching-maths', component: CoachingMathsPage, title: 'Coaching Maths' },
  { path: '/offre/organisation-ete', component: OrganisationEtePage, title: 'Organisation Été' },
  { path: '/offre/preparation-cube', component: PreparationCubePage, title: 'Préparation Cube' },
  
  // Methodologie pages
  { path: '/methodologie/entretiens-personnalite', component: MethodEntretiensPersonnalitePage, title: 'Méthodologie Entretiens Personnalité' },
  
  // Articles pages
  { path: '/articles/maths-ete-controle', component: MathsEteControlePage, title: 'Un été pour (re)prendre le contrôle en maths' },
  { path: '/entretien-inverse-gem', component: EntretienInverseGEMPage, title: 'L\'entretien inversé à GEM' },
  { path: '/cv-projectif', component: CVProjectifPage, title: 'Guide complet pour réaliser son CV projectif' },
  
  // School pages
  { path: '/escp', component: ESCPPage, title: 'ESCP Business School' },
  { path: '/essec', component: ESSECPage, title: 'ESSEC Business School' },
  { path: '/edhec', component: EDHECPage, title: 'EDHEC Business School' },
  { path: '/emlyon', component: EMLyonPage, title: 'EM Lyon Business School' },
  { path: '/audencia', component: AudenciaPage, title: 'Audencia Business School' },
  { path: '/gem', component: GEMPage, title: 'Grenoble École de Management' },
  { path: '/kedge', component: KEDGEPage, title: 'KEDGE Business School' },
  { path: '/neoma', component: NEOMAPage, title: 'NEOMA Business School' },
  { path: '/skema', component: SKEMAPage, title: 'SKEMA Business School' },
  
  // Generator pages
  { path: '/generator/flashcards', component: FlashcardsGeneratorPage, title: 'Générateur de Flashcards' },
  { path: '/generator/answer', component: AnswerGeneratorPage, title: 'Générateur de Réponses' },
  { path: '/generator/case-study', component: CaseStudyGeneratorPage, title: 'Générateur d\'Études de Cas' },
  { path: '/generator/edhec', component: EDHECGeneratorPage, title: 'Générateur EDHEC' },
  { path: '/generator/emlyon', component: EMLyonGeneratorPage, title: 'Générateur EM Lyon' },
  { path: '/generator/geopolitics', component: GeopoliticsGeneratorPage, title: 'Générateur Géopolitique' },
  { path: '/generator/languages', component: LanguagesGeneratorPage, title: 'Générateur de Langues' },
  { path: '/generator/prepa-chatbot', component: PrepaChatbotGeneratorPage, title: 'Chatbot Prépa' },
  { path: '/generator/school-profile', component: SchoolProfileGeneratorPage, title: 'Profil d\'École' },
  { path: '/generator/theme-grammar', component: ThemeGrammarGeneratorPage, title: 'Grammaire Thématique' },
  
  // 404 - Must be last
  { path: '*', component: NotFound, title: 'Page non trouvée' }
];

// Helper functions
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find(route => route.path === path);
};

export const getAllRoutePaths = (): string[] => {
  return routes.filter(route => route.path !== '*').map(route => route.path);
};

export const getProtectedRoutes = (): RouteConfig[] => {
  return routes.filter(route => route.protected);
};

export const getPublicRoutes = (): RouteConfig[] => {
  return routes.filter(route => !route.protected);
};
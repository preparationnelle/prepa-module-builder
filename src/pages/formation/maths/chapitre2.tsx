import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, ChevronRight } from 'lucide-react';
import Module02 from '../../components/modules/Module02';
import FlashCards from '@/components/FlashCards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Chapter02 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-4">
          <button onClick={() => navigate('/')} className="hover:underline flex items-center">
            Accueil
          </button>
          <ChevronRight className="mx-1 w-4 h-4" />
          <button onClick={() => navigate('/formation')} className="hover:underline flex items-center">
            Formation
          </button>
          <ChevronRight className="mx-1 w-4 h-4" />
          <span className="text-orange-600 font-medium">Coefficients binomiaux</span>
        </nav>

        {/* Progress Bar */}
        <div className="flex items-center mb-8">
          <span className="text-gray-700 font-semibold mr-4">Chapitre 2/3</span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-orange-500 h-2" style={{ width: '67%' }} />
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/formation')}
            className="flex items-center text-orange-600 hover:text-orange-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à la formation
          </button>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Coefficients binomiaux</h1>
                <p className="text-gray-600 mb-4">Permutations, factorielles et formule du binôme</p>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="mr-4">60 min</span>
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>Formation complète</span>
                </div>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Disponible
              </div>
            </div>
          </div>
        </div>

        {/* Content avec onglets */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Tabs defaultValue="cours" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto">
                <TabsTrigger 
                  value="cours" 
                  className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg py-6 px-8 rounded-none border-0 shadow-none data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                >
                  <BookOpen className="w-5 h-5 mr-3" />
                  Cours
                </TabsTrigger>
                <TabsTrigger 
                  value="flashcards" 
                  className="relative bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold text-lg py-6 px-8 rounded-none border-0 shadow-none data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white data-[state=active]:shadow-md hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Flashcards
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="cours" className="p-0">
                <div className="p-6">
                  <Module02 />
                </div>
              </TabsContent>
              
              <TabsContent value="flashcards" className="p-0">
                <div className="p-6">
                  <FlashCards moduleType="coefficients" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Section À retenir */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-md shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">À retenir</h2>
          <ul className="list-disc pl-5 text-blue-800 space-y-1">
            <li>Une permutation d'un ensemble de n éléments correspond à n! arrangements possibles.</li>
            <li>La factorielle (n!) est la base du calcul des permutations et combinaisons.</li>
            <li>Les coefficients binomiaux comptent le nombre de façons de choisir k éléments parmi n.</li>
            <li>Formule du binôme : (a + b)<sup>n</sup> = Σ<sub>k=0</sub><sup>n</sup> C(n, k)a<sup>k</sup>b<sup>n-k</sup></li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate('/chapter/1')}
              className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Chapitre précédent
            </button>
            
            <button
              onClick={() => navigate('/chapter/3')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Chapitre suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter02;
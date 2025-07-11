import { ModuleCard } from "@/components/formations/ModuleCard"
import { FormationButton } from "@/components/ui/formation-button"
import { ArrowLeft, Book, Calculator, TrendingUp, BarChart3, PieChart, FileText, Target } from "lucide-react"
import { useNavigate } from "react-router-dom"

const MathsFormation = () => {
  const navigate = useNavigate()

  const modules = [
    {
      moduleNumber: 0,
      title: "Les Fondamentaux",
      description: "Variables, fonctions, équations et structures de base. Les bases essentielles pour débuter en mathématiques ECG.",
      topics: [
        "Calcul algébrique et équations",
        "Fonctions et leurs propriétés", 
        "Systèmes d'équations",
        "Inégalités et intervalles"
      ],
      available: true,
      icon: <Calculator className="w-6 h-6" />
    },
    {
      moduleNumber: 1,
      title: "Analyse et Dérivation",
      description: "Maîtrise des dérivées, étude de fonctions et optimisation pour les problèmes économiques.",
      topics: [
        "Calcul de dérivées",
        "Étude de fonctions",
        "Optimisation libre",
        "Applications économiques"
      ],
      available: false,
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      moduleNumber: 2,
      title: "Probabilités",
      description: "Variables aléatoires, lois de probabilité et applications aux problèmes de gestion.",
      topics: [
        "Variables aléatoires discrètes",
        "Lois usuelles (binomiale, Poisson)",
        "Espérance et variance",
        "Applications en économie"
      ],
      available: false,
      icon: <PieChart className="w-6 h-6" />
    },
    {
      moduleNumber: 3,
      title: "Statistiques",
      description: "Analyse statistique descriptive et inférentielle pour l'interprétation de données économiques.",
      topics: [
        "Statistiques descriptives",
        "Corrélation et régression",
        "Tests d'hypothèses",
        "Intervalles de confiance"
      ],
      available: false,
      icon: <BarChart3 className="w-6 h-6" />
    }
  ]

  const handleModuleClick = (moduleNumber: number) => {
    if (moduleNumber === 0) {
      navigate("/formation/maths/module/0")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <FormationButton
            variant="outline"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </FormationButton>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-formation-blue/10 text-formation-blue rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Formation Maths ECG
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Formation de Mathématiques
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Formation complète en Mathématiques pour les concours des Grandes Écoles de Commerce
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                Débutant à avancé
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-formation-blue/10 text-formation-blue rounded-full text-sm font-medium">
                15-20 heures
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-formation-green/10 text-formation-green rounded-full text-sm font-medium">
                Complet
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Book className="w-6 h-6 text-formation-orange" />
            Cours
          </h2>
          
          <div className="space-y-6">
            {modules.map((module) => (
              <ModuleCard
                key={module.moduleNumber}
                moduleNumber={module.moduleNumber}
                title={module.title}
                description={module.description}
                topics={module.topics}
                available={module.available}
                icon={module.icon}
                onClick={() => handleModuleClick(module.moduleNumber)}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-formation-orange" />
            Exercices
          </h2>
          
          <div className="bg-card border border-formation-orange/20 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-formation-green rounded-lg flex items-center justify-center text-white">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">Module 1</h3>
                <h4 className="text-formation-orange font-medium mb-2">Les Applications</h4>
              </div>
              <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                Accès restreint
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MathsFormation
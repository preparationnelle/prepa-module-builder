import { ModuleCard } from "@/components/formations/ModuleCard"
import { FormationButton } from "@/components/ui/formation-button"
import {
  ArrowLeft,
  Book,
  Calculator,
  TrendingUp,
  BarChart3,
  PieChart,
  FileText,
  Target,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const MathsFormation = () => {
  const navigate = useNavigate()

  // Module 0
  const modules = [
    {
      moduleNumber: 0,
      title: "Les Fondamentaux",
      description:
        "Variables, fonctions, équations et structures de base. Les bases essentielles pour débuter en mathématiques ECG.",
      topics: [
        "Calcul algébrique et équations",
        "Fonctions et leurs propriétés",
        "Systèmes d'équations",
        "Inégalités et intervalles",
      ],
      available: true,
      icon: <Calculator className="w-6 h-6" />,
    },
  ]

  // Liste chapitres 1 à 20
  const chapitres = Array.from({ length: 20 }, (_, i) => ({
    num: i + 1,
    url: `/formation/maths/chapitre${i + 1}`,
    title: `Chapitre ${i + 1}`,
  }))

  // Clique sur Module 0
  const handleModuleClick = (moduleNumber: number) => {
    if (moduleNumber === 0) {
      navigate("/formation/maths/module/0")
    }
  }

  // Clique sur un chapitre
  const handleChapitreClick = (num: number) => {
    navigate(`/formation/maths/chapitre${num}`)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Bouton retour */}
        <div className="mb-8 text-left">
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

        {/* Bloc module 0 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Book className="w-6 h-6 text-formation-orange" />
            Module 0 : Les Fondamentaux
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

        {/* Section chapitres */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-formation-orange" />
            Chapitres du cours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {chapitres.map((chapitre) => (
              <div
                key={chapitre.num}
                className="bg-card border border-formation-orange/20 rounded-lg p-6 flex flex-col items-center cursor-pointer hover:bg-formation-orange/5 transition"
                onClick={() => handleChapitreClick(chapitre.num)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleChapitreClick(chapitre.num)
                  }
                }}
              >
                <div className="w-12 h-12 mb-4 bg-formation-orange/10 rounded-full flex items-center justify-center">
                  <Book className="w-6 h-6 text-formation-orange" />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {chapitre.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Accéder au chapitre
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc Exercices (conservé, mais facultatif) */}
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

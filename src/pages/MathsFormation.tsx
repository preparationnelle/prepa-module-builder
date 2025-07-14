import { ModuleCard } from "@/components/formations/ModuleCard"
import { FormationButton } from "@/components/ui/formation-button"
import { ArrowLeft, Book, Calculator, TrendingUp, BarChart3, PieChart, FileText, Target } from "lucide-react"
import { useNavigate } from "react-router-dom"

const MathsFormation = () => {
  const navigate = useNavigate()

  // Module 0 conservé
  const module0 = {
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
  }

  const handleModuleClick = (moduleNumber: number) => {
    if (moduleNumber === 0) {
      navigate("/formation/maths/module/0")
    }
  }

  // Liste des chapitres (1 à 20)
  const chapitres = Array.from({ length: 20 }, (_, i) => ({
    num: i + 1,
    url: `/formation/maths/chapitre${i + 1}`,
    title: `Chapitre ${i + 1}`
  }))

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

        {/* Module 0 affiché via ModuleCard */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Book className="w-6 h-6 text-formation-orange" />
            Module 0 : Les Fondamentaux
          </h2>
          <ModuleCard
            key={module0.moduleNumber}
            moduleNumber={module0.moduleNumber}
            title={module0.title}
            description={module0.description}
            topics={module0.topics}
            available={module0.available}
            icon={module0.icon}
            onClick={() => handleModuleClick(module0.moduleNumber)}
          />
        </div>

        {/* Liste des chapitres */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-formation-orange" />
            Chapitres du cours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapitres.map((chapitre) => (
              <button
                key={chapitre.num}
                onClick={() => navigate(chapitre.url)}
                className="w-full bg-card border border-muted rounded-lg p-4 hover:bg-accent transition flex flex-col items-center"
              >
                <span className="text-2xl font-bold mb-2">{chapitre.title}</span>
                <span className="text-muted-foreground">Accéder au chapitre</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MathsFormation

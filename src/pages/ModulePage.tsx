import { FormationButton } from "@/components/ui/formation-button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Lightbulb, Book } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

const ModulePage = () => {
  const navigate = useNavigate()
  const { moduleId } = useParams()

  const moduleData = {
    "0": {
      title: "Module 0 - Les Fondamentaux",
      subtitle: "Module 0",
      objectives: [
        "Comprendre pourquoi Python rapporte facilement des points au concours ECG.",
        "Maîtriser les bases du langage et les principales librairies utiles.",
        "Savoir écrire et structurer un script ou une fonction simple.",
        "Manipuler les listes et utiliser les boucles/conditions efficacement.",
        "Être capable de traiter tous les types d'exercices classiques en Python au concours."
      ],
      notions: [
        {
          title: "Notion 1 - Pourquoi miser sur Python est (très) rentable aux concours ECG",
          content: "Découvrir les avantages stratégiques de Python",
          expandable: true
        },
        {
          title: "Notion 2 - Les principales librairies Python (ECG)",
          content: "Découvrir les librairies incontournables",
          expandable: true
        }
      ]
    }
  }

  const currentModule = moduleData[moduleId as keyof typeof moduleData]

  if (!currentModule) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Module non trouvé</h1>
          <FormationButton onClick={() => navigate("/formation/maths")}>
            Retour à la formation
          </FormationButton>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <FormationButton
          variant="outline"
          onClick={() => navigate("/formation/maths")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la formation
        </FormationButton>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-formation-orange rounded-lg flex items-center justify-center text-white">
              <Book className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{currentModule.title}</h1>
              <span className="text-formation-orange font-medium">{currentModule.subtitle}</span>
            </div>
          </div>
        </div>

        <Card className="border border-formation-orange/20 mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-formation-orange" />
              Objectifs du module
            </h2>
            <ul className="space-y-3">
              {currentModule.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-formation-green mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {currentModule.notions.map((notion, index) => (
            <Card key={index} className="border border-formation-orange/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-formation-orange" />
                    <h3 className="text-lg font-semibold text-foreground">{notion.title}</h3>
                  </div>
                  {notion.expandable && (
                    <button className="text-formation-orange hover:text-formation-orange-dark transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">{notion.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <FormationButton size="lg">
            Commencer le module
          </FormationButton>
        </div>
      </div>
    </div>
  )
}

export default ModulePage
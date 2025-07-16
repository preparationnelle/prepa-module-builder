import { FormationCard } from "@/components/formations/FormationCard"
import { Calculator, TrendingUp } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Formation = () => {
  const navigate = useNavigate()

  const formations = [
    {
      id: "maths",
      title: "Formation de Maths",
      description: "Formation complète en Mathématiques pour les concours des Grandes Écoles de Commerce",
      duration: "15-20 heures",
      level: "Débutant à avancé",
      modules: 8,
      icon: <Calculator className="w-6 h-6" />,
      available: true
    },
 
  ]

  const handleFormationClick = (formationId: string) => {
    if (formationId === "maths") {
      navigate("/formation/maths")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-formation-orange-light rounded-full text-formation-orange text-sm font-medium mb-4">
            📚 Préparez votre entretien
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Formations ECG
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Étudiants en classe prépa ECG ? Maximisez vos chances d'intégrer les top 5 grâce à nos formations spécialisées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {formations.map((formation) => (
            <FormationCard
              key={formation.id}
              title={formation.title}
              description={formation.description}
              duration={formation.duration}
              level={formation.level}
              modules={formation.modules}
              icon={formation.icon}
              available={formation.available}
              onClick={() => handleFormationClick(formation.id)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card border border-formation-orange/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              💡 Managez votre matière
            </h3>
            <p className="text-muted-foreground text-sm">
              Organisez votre travail grâce à nos modules et explorez de façon structurée les concepts clés de vos épreuves.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formation
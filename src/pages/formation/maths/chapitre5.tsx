
import { BookOpen, Clock, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Chapitre5 = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        {/* En-tête */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/formation/maths")}
            className="text-formation-orange hover:underline flex items-center mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la formation
          </button>

          <h1 className="text-3xl font-bold text-foreground mb-2">
            Chapitre 5
          </h1>
          <p className="text-muted-foreground mb-4">
            Contenu du chapitre 5
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            Durée estimée : 60 min
          </div>
        </div>

        <Separator className="my-6" />

        {/* Contenu principal */}
        <Card className="mb-10 border border-muted">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Cours</h2>
            <p className="text-muted-foreground">Contenu du cours à venir...</p>
          </CardContent>
        </Card>

        {/* Bloc à retenir */}
        <Card className="mb-10 border-l-4 border-formation-blue/70">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-formation-blue">À retenir</h2>
            <Separator />
            <ul className="list-disc pl-5 space-y-2 text-foreground">
              <li>Point important 1</li>
              <li>Point important 2</li>
              <li>Point important 3</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Chapitre5

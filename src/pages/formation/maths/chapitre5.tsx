import { BookOpen, Clock, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Module02 from "@/components/modules/Module02"
import FlashCards from "@/components/FlashCards"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const PageChapitre2 = () => {
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
            Chapitre 2 – Coefficients binomiaux
          </h1>
          <p className="text-muted-foreground mb-4">
            Permutations, factorielles et formule du binôme
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            Durée estimée : 60 min
          </div>
        </div>

        <Separator className="my-6" />

        {/* Cours complet */}
        <Card className="mb-10 border border-muted">
          <CardContent className="p-6">
            <Module02 />
          </CardContent>
        </Card>

        {/* Flashcards */}
        <Card className="mb-10 border border-muted">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Flashcards</h2>
            <FlashCards moduleType="coefficients" />
          </CardContent>
        </Card>

        {/* Bloc à retenir */}
        <Card className="mb-10 border-l-4 border-formation-blue/70">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-formation-blue">À retenir</h2>
            <Separator />
            <ul className="list-disc pl-5 space-y-2 text-foreground">
              <li>Une permutation d’un ensemble de n éléments correspond à n ! arrangements possibles.</li>
              <li>La factorielle (n !) est la base du calcul des permutations et combinaisons.</li>
              <li>Les coefficients binomiaux comptent le nombre de façons de choisir k éléments parmi n.</li>
              <li>Formule du binôme : (a + b)<sup>n</sup> = Σ<sub>k=0</sub><sup>n</sup> C(n,k)a<sup>k</sup>b<sup>n−k</sup></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PageChapitre2

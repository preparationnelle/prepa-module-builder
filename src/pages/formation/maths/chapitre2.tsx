"use client"

import { useNavigate } from "react-router-dom"
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  BookOpen,
} from "lucide-react"
import Module02 from "@/components/modules/Module02"
import FlashCards from "@/components/FlashCards"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FormationButton } from "@/components/ui/formation-button"

const Chapter02 = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        {/* fil d’Ariane */}
        <nav className="flex items-center text-sm text-muted-foreground mb-6">
          <button onClick={() => navigate("/")} className="hover:underline flex items-center">
            Accueil
          </button>
          <ChevronRight className="mx-1 w-4 h-4" />
          <button onClick={() => navigate("/formation/maths")} className="hover:underline flex items-center">
            Formation Maths
          </button>
          <ChevronRight className="mx-1 w-4 h-4" />
          <span className="text-formation-orange font-medium">Coefficients binomiaux</span>
        </nav>

        {/* barre de progression */}
        <div className="flex items-center mb-10">
          <span className="text-foreground font-semibold mr-4">Chapitre&nbsp;2 / 3</span>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="bg-formation-orange h-2" style={{ width: "67%" }} />
          </div>
        </div>

        {/* entête + bouton retour */}
        <div className="mb-10">
          <FormationButton
            variant="outline"
            onClick={() => navigate("/formation/maths")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la formation
          </FormationButton>

          <Card className="border border-formation-orange/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Coefficients binomiaux
                  </h1>
                  <p className="text-muted-foreground mb-4">
                    Permutations, factorielles et formule du binôme
                  </p>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="mr-4">60&nbsp;min</span>
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>Formation complète</span>
                  </div>
                </div>

                <span className="bg-formation-green/10 text-formation-green px-4 py-1 rounded-full text-sm font-medium self-start md:self-auto">
                  Disponible
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* onglets Cours / Flashcards */}
        <Card className="mb-10 border border-muted">
          <Tabs defaultValue="cours" className="w-full">
            <TabsList className="grid grid-cols-2 rounded-t-lg overflow-hidden">
              <TabsTrigger value="cours">
                <BookOpen className="w-4 h-4 mr-2" />
                Cours
              </TabsTrigger>
              <TabsTrigger value="flashcards">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Flashcards
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cours">
              <div className="p-6">
                <Module02 />
              </div>
            </TabsContent>

            <TabsContent value="flashcards">
              <div className="p-6">
                <FlashCards moduleType="coefficients" />
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* À retenir */}
        <Card className="border-l-4 border-formation-blue/80 mb-10">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-formation-blue">À retenir</h2>
            <Separator />
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Une permutation d’un ensemble de n éléments correspond à n ! arrangements possibles.</li>
              <li>La factorielle (n !) est la base du calcul des permutations et combinaisons.</li>
              <li>Les coefficients binomiaux comptent le nombre de façons de choisir k éléments parmi n.</li>
              <li>
                Formule du binôme&nbsp;: 
                <InlineCode>(a + b)<sup>n</sup> = Σ<sub>k=0</sub><sup>n</sup> C(n,k)a<sup>k</sup>b<sup>n-k</sup></InlineCode>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* navigation chapitres */}
        <div className="flex justify-between">
          <FormationButton variant="ghost" onClick={() => navigate("/formation/maths/chapitre1")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Chapitre précédent
          </FormationButton>

          <FormationButton
            onClick={() => navigate("/formation/maths/chapitre3")}
            className="bg-formation-orange text-white hover:bg-formation-orange/90"
          >
            Chapitre suivant
          </FormationButton>
        </div>
      </div>
    </div>
  )
}

/* petit composant inline pour la formule du binôme */
const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-muted px-1 rounded text-sm">{children}</code>
)

export default Chapter02

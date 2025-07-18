import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Book, ArrowLeft, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { FormationButton } from "@/components/ui/formation-button"
import { FlashCardQuiz } from "@/components/formations/FlashCardQuiz"

interface MathSectionProps {
  title: string
  subsections: Array<{
    subtitle?: string
    content: React.ReactNode
  }>
}

const MathSection = ({ title, subsections }: MathSectionProps) => (
  <Card className="border border-formation-orange/20 mb-6">
    <CardContent className="p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">{title}</h2>
      {subsections.map((subsection, index) => (
        <div key={index} className="mb-6 last:mb-0">
          {subsection.subtitle && (
            <h3 className="text-lg font-medium text-foreground mb-3">{subsection.subtitle}</h3>
          )}
          <div className="text-foreground">{subsection.content}</div>
          {index < subsections.length - 1 && <Separator className="mt-6" />}
        </div>
      ))}
    </CardContent>
  </Card>
)

// Flashcards pour Projecteurs
const projecteursCards = [
  {
    id: 1,
    question: "Définition d'un projecteur sur F₁ parallèlement à F₂",
    answer: "p: E \\to F_1, \\quad x \\mapsto x_1 \\text{ où } x = x_1 + x_2 \\text{ avec } x_1 \\in F_1, x_2 \\in F_2",
    isBlock: true
  },
  {
    id: 2,
    question: "Condition préalable pour définir un projecteur",
    answer: "F_1 \\text{ et } F_2 \\text{ sont supplémentaires : } E = F_1 \\oplus F_2",
    isBlock: true
  },
  {
    id: 3,
    question: "Un projecteur est-il un endomorphisme ?",
    answer: "\\text{Oui, tout projecteur est un endomorphisme de } E",
    isBlock: true
  },
  {
    id: 4,
    question: "Image d'un projecteur p sur F₁ parallèlement à F₂",
    answer: "\\text{Im } p = F_1",
    isBlock: true
  },
  {
    id: 5,
    question: "Noyau d'un projecteur p sur F₁ parallèlement à F₂",
    answer: "\\ker p = F_2",
    isBlock: true
  },
  {
    id: 6,
    question: "Décomposition de E par un projecteur p",
    answer: "E = \\ker p \\oplus \\text{Im } p",
    isBlock: true
  },
  {
    id: 7,
    question: "Condition pour qu'un vecteur y soit le projété de x",
    answer: "y \\in F_1 \\text{ et } x - y \\in F_2",
    isBlock: true
  },
  {
    id: 8,
    question: "Caractérisation d'un projecteur par composition",
    answer: "f \\text{ est un projecteur} \\Leftrightarrow f \\circ f = f",
    isBlock: true
  },
  {
    id: 9,
    question: "Si f∘f = f, alors f est le projecteur sur quel sous-espace ?",
    answer: "f \\text{ est le projecteur sur } \\text{Im } f \\text{ parallèlement à } \\ker f",
    isBlock: true
  },
  {
    id: 10,
    question: "Version matricielle de la caractérisation d'un projecteur",
    answer: "f \\text{ est un projecteur} \\Leftrightarrow A^2 = A \\text{ où } A = \\text{Mat}_{\\mathcal{B}}(f)",
    isBlock: true
  },
  {
    id: 11,
    question: "Relation entre projecteurs associés p et q",
    answer: "p + q = \\text{Id}_E",
    isBlock: true
  },
  {
    id: 12,
    question: "Définition de projecteurs associés",
    answer: "p \\text{ projecteur sur } F_1 \\text{ parallèlement à } F_2 \\text{ et } q \\text{ projecteur sur } F_2 \\text{ parallèlement à } F_1",
    isBlock: true
  }
]

const Chapitre5Projecteurs = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Navigation */}
        <nav className="flex items-center text-sm text-muted-foreground mb-6">
          <button onClick={() => navigate("/")} className="hover:underline flex items-center">
            Accueil
          </button>
          <ChevronRight className="mx-1 w-4 h-4" />
          <button onClick={() => navigate("/formation/maths")} className="hover:underline flex items-center">
            Formation Maths
          </button>
          <ChevronRight className="mx-1 w-4 h-4" />
          <span className="text-formation-orange font-medium">Projecteurs</span>
        </nav>

        {/* Bouton retour */}
        <FormationButton
          variant="outline"
          onClick={() => navigate("/formation/maths")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la formation
        </FormationButton>

        {/* En-tête */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-formation-orange/10 rounded-full flex items-center justify-center">
            <Book className="w-6 h-6 text-formation-orange" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Chapitre 5 – Projecteurs
            </h1>
            <p className="text-muted-foreground">Mathématiques approfondies • Prépa ECG</p>
          </div>
        </div>

        {/* Contexte */}
        <Card className="border-l-4 border-formation-blue/80 mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-formation-blue mb-4">Contexte</h2>
            <p className="text-foreground">
              La lettre <InlineMath math="E" /> désigne un espace vectoriel réel de dimension quelconque.
            </p>
          </CardContent>
        </Card>

        {/* Définition générale */}
        <MathSection
          title="1. Définition générale"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Soient <InlineMath math="F_1" /> et <InlineMath math="F_2" /> deux sous-espaces <strong>supplémentaires</strong> de <InlineMath math="E" />, 
                    c'est-à-dire <InlineMath math="E=F_1\oplus F_2" />. Pour chaque <InlineMath math="x\in E" />, on note <InlineMath math="x=x_1+x_2" /> 
                    (décomposition unique) avec <InlineMath math="x_1\in F_1" /> et <InlineMath math="x_2\in F_2" />. L'application :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="p:E\longrightarrow F_1,\qquad x\longmapsto x_1" />
                  </div>
                  <p>
                    est appelée <strong>projecteur sur <InlineMath math="F_1" /> parallèlement à <InlineMath math="F_2" /></strong>. 
                    Le vecteur <InlineMath math="p(x)" /> est le <em>projété</em> de <InlineMath math="x" />.
                  </p>
                </div>
              )
            }
          ]}
        />

        {/* Structure du projecteur */}
        <MathSection
          title="2. Structure du projecteur"
          subsections={[
            {
              subtitle: "2.1 Endomorphisme",
              content: (
                <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                  <p className="text-formation-green font-medium">Tout projecteur est un endomorphisme de <InlineMath math="E" />.</p>
                </div>
              )
            },
            {
              subtitle: "2.2 Image et noyau",
              content: (
                <div className="space-y-4">
                  <p>Pour le projecteur <InlineMath math="p" /> défini ci-dessus :</p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <BlockMath math="\operatorname{Im}p = F_1" />
                    <BlockMath math="\ker p = F_2" />
                    <BlockMath math="E = \ker p \oplus \operatorname{Im}p" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Caractérisations usuelles */}
        <MathSection
          title="3. Caractérisations usuelles"
          subsections={[
            {
              subtitle: "3.1 Projeté",
              content: (
                <div className="space-y-4">
                  <p>
                    Un vecteur <InlineMath math="y" /> est le projété de <InlineMath math="x" /> <InlineMath math="\Leftrightarrow" /> 
                    <InlineMath math="y\in F_1" /> et <InlineMath math="x-y\in F_2" />.
                  </p>
                </div>
              )
            },
            {
              subtitle: "3.2 Projecteur comme endomorphisme",
              content: (
                <div className="space-y-4">
                  <p>Un endomorphisme <InlineMath math="f" /> de <InlineMath math="E" /> est un projecteur <InlineMath math="\Leftrightarrow" /> <InlineMath math="f\circ f = f" />.</p>
                  
                  <div className="bg-formation-blue/10 border border-formation-blue/20 rounded-lg p-4">
                    <p className="text-formation-blue font-medium mb-2">Plus précisément :</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Si <InlineMath math="f" /> est un projecteur, alors <InlineMath math="f\circ f=f" />.</li>
                      <li>
                        Réciproquement, si <InlineMath math="f" /> est un endomorphisme tel que <InlineMath math="f\circ f = f" />, 
                        alors <InlineMath math="f" /> est le projecteur sur <InlineMath math="\operatorname{Im}f" /> parallèlement à <InlineMath math="\ker f" />.
                      </li>
                    </ul>
                  </div>
                </div>
              )
            },
            {
              subtitle: "3.3 Version matricielle",
              content: (
                <div className="space-y-4">
                  <p>Dans une base <InlineMath math="\mathcal B" /> d'un espace de dimension finie :</p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="f \text{ est un projecteur } \Longleftrightarrow A^{2}=A,\quad A=\operatorname{Mat}_{\mathcal B}(f)" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Projecteurs associés */}
        <MathSection
          title="4. Projecteurs associés"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Soient <InlineMath math="F_1" /> et <InlineMath math="F_2" /> supplémentaires dans <InlineMath math="E" />. 
                    Le projecteur <InlineMath math="p" /> sur <InlineMath math="F_1" /> parallèlement à <InlineMath math="F_2" /> et 
                    le projecteur <InlineMath math="q" /> sur <InlineMath math="F_2" /> parallèlement à <InlineMath math="F_1" /> sont dits <strong>associés</strong>. 
                    Ils vérifient :
                  </p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="p+q = \operatorname{Id}_{E}" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* À retenir */}
        <Card className="border-l-4 border-formation-blue/80 mb-10">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-formation-blue">À retenir</h2>
            <Separator />
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li>Un projecteur nécessite des sous-espaces supplémentaires</li>
              <li>Caractérisation : f projecteur ⟺ f∘f = f</li>
              <li>Im p = F₁ et ker p = F₂ pour un projecteur sur F₁ parallèlement à F₂</li>
              <li>Version matricielle : A² = A</li>
              <li>Projecteurs associés : p + q = Id</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section Flashcards */}
        <Card className="border border-formation-orange/20 mb-10">
          <CardContent className="p-6">
            <FlashCardQuiz 
              cards={projecteursCards}
              title="Quiz Projecteurs"
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <FormationButton variant="outline" onClick={() => navigate("/formation/maths/chapitre4")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Chapitre précédent
          </FormationButton>

          <FormationButton
            onClick={() => navigate("/formation/maths/chapitre6")}
            className="bg-formation-orange text-white hover:bg-formation-orange/90"
          >
            Chapitre suivant
          </FormationButton>
        </div>
      </div>
    </div>
  )
}

export default Chapitre5Projecteurs
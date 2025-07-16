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

// Flashcards pour Sommes, sommes directes et sous-espaces supplémentaires
const sousEspacesCards = [
  {
    id: 1,
    question: "Définition de la somme F₁ + F₂ de deux sous-espaces",
    answer: "F_1 + F_2 = \\{x_1 + x_2 \\mid (x_1, x_2) \\in F_1 \\times F_2\\}",
    isBlock: true
  },
  {
    id: 2,
    question: "F₁ + F₂ est-il un sous-espace ?",
    answer: "\\text{Oui, } F_1 + F_2 \\text{ est encore un sous-espace de } E",
    isBlock: true
  },
  {
    id: 3,
    question: "Formule de Grassmann pour deux sous-espaces",
    answer: "\\dim(F_1 + F_2) = \\dim F_1 + \\dim F_2 - \\dim(F_1 \\cap F_2)",
    isBlock: true
  },
  {
    id: 4,
    question: "Condition pour que la somme F₁ + F₂ soit directe",
    answer: "F_1 \\cap F_2 = \\{0_E\\}, \\text{ notation : } F_1 \\oplus F_2",
    isBlock: true
  },
  {
    id: 5,
    question: "Définition de la somme de r sous-espaces",
    answer: "\\sum_{i=1}^{r} F_i = \\{x_1 + \\cdots + x_r \\mid (x_1, \\ldots, x_r) \\in F_1 \\times \\cdots \\times F_r\\}",
    isBlock: true
  },
  {
    id: 6,
    question: "Quand la somme de r sous-espaces est-elle directe ?",
    answer: "\\text{Si pour tout } x \\in F, \\text{ il existe un unique } r\\text{-uplet } (x_1, \\ldots, x_r) \\text{ tel que } x = x_1 + \\cdots + x_r",
    isBlock: true
  },
  {
    id: 7,
    question: "Critère dimensionnel pour une somme directe de r sous-espaces",
    answer: "\\text{Somme directe} \\Leftrightarrow \\dim F = \\sum_{i=1}^{r} \\dim F_i",
    isBlock: true
  },
  {
    id: 8,
    question: "Critère par bases pour une somme directe",
    answer: "\\text{La juxtaposition des bases } \\mathcal{B}_i \\text{ est une base de } F \\text{ ssi la somme est directe}",
    isBlock: true
  },
  {
    id: 9,
    question: "Définition de sous-espaces supplémentaires F₁ et F₂",
    answer: "E = F_1 \\oplus F_2",
    isBlock: true
  },
  {
    id: 10,
    question: "Conditions pour que F₁ et F₂ soient supplémentaires",
    answer: "F_1 \\cap F_2 = \\{0_E\\} \\text{ et } \\dim F_1 + \\dim F_2 = \\dim E",
    isBlock: true
  },
  {
    id: 11,
    question: "Système supplémentaire de r sous-espaces",
    answer: "E = \\bigoplus_{i=1}^{r} F_i \\text{ et } \\sum_{i=1}^{r} \\dim F_i = \\dim E",
    isBlock: true
  }
]

const Chapitre4SousEspaces = () => {
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
          <span className="text-formation-orange font-medium">Sous-espaces supplémentaires</span>
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
              Chapitre 4 – Sommes, sommes directes et sous-espaces supplémentaires
            </h1>
            <p className="text-muted-foreground">Mathématiques approfondies • Prépa ECG</p>
          </div>
        </div>

        {/* Contexte */}
        <Card className="border-l-4 border-formation-blue/80 mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-formation-blue mb-4">Contexte</h2>
            <p className="text-foreground">
              La lettre <InlineMath math="E" /> désigne un espace vectoriel réel.
            </p>
          </CardContent>
        </Card>

        {/* Somme de deux sous-espaces */}
        <MathSection
          title="1. Somme de deux sous-espaces"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Soient <InlineMath math="F_1" /> et <InlineMath math="F_2" /> des sous-espaces de <InlineMath math="E" />. 
                    Leur <strong>somme</strong> est :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="F_1+F_2=\bigl\{x_1+x_2 \mid (x_1,x_2)\in F_1\times F_2\bigr\}" />
                  </div>
                  <p>laquelle est encore un sous-espace de <InlineMath math="E" />.</p>
                </div>
              )
            },
            {
              subtitle: "1.1 Formule de Grassmann",
              content: (
                <div className="space-y-4">
                  <p>Si <InlineMath math="E" /> est de dimension finie :</p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="\dim(F_1+F_2)=\dim F_1+\dim F_2-\dim(F_1\cap F_2)" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Somme directe (deux) */}
        <MathSection
          title="2. Somme directe de deux sous-espaces"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>La somme <InlineMath math="F_1+F_2" /> est <strong>directe</strong> lorsque :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="F_1\cap F_2=\{0_E\}" />
                  </div>
                  <p className="text-center font-medium">et l'on écrit alors <InlineMath math="F_1\oplus F_2" />.</p>
                </div>
              )
            }
          ]}
        />

        {/* Somme de r sous-espaces */}
        <MathSection
          title="3. Somme de r sous-espaces"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Soient <InlineMath math="r\ge2" /> et <InlineMath math="F_1,\dots,F_r" /> des sous-espaces de <InlineMath math="E" />. On définit :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="F=\sum_{i=1}^{r}F_i =\bigl\{x_1+\dots+x_r \mid (x_1,\dots,x_r)\in F_1\times\dots\times F_r\bigr\}" />
                  </div>
                  <p>qui est encore un sous-espace.</p>
                </div>
              )
            },
            {
              subtitle: "3.1 Somme directe de r sous-espaces",
              content: (
                <div className="space-y-4">
                  <p>
                    La somme est <strong>directe</strong> si, pour tout <InlineMath math="x\in F" />, il existe un unique <InlineMath math="r" />-uplet
                    <InlineMath math="(x_1,\dots,x_r)" /> avec <InlineMath math="x_i\in F_i" /> tel que <InlineMath math="x=x_1+\dots+x_r" />. Dans ce cas :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="F=\bigoplus_{i=1}^{r}F_i" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "3.2 Critère dimensionnel",
              content: (
                <div className="space-y-4">
                  <p>
                    Si chaque <InlineMath math="F_i" /> est de dimension finie et possède une base <InlineMath math="\mathcal B_i" />, 
                    la somme est directe <em>iff</em> la famille obtenue par juxtaposition des <InlineMath math="\mathcal B_i" /> est une base de <InlineMath math="F" /> — auquel cas :
                  </p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="\dim F=\sum_{i=1}^{r}\dim F_i" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Sous-espaces supplémentaires */}
        <MathSection
          title="4. Sous-espaces supplémentaires"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Deux sous-espaces <InlineMath math="F_1" /> et <InlineMath math="F_2" /> sont <strong>supplémentaires</strong> dans <InlineMath math="E" /> lorsque :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="E=F_1\oplus F_2" />
                  </div>
                  <p>c'est-à-dire :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><InlineMath math="F_1\cap F_2=\{0_E\}" /></li>
                    <li>si <InlineMath math="E" /> est de dimension finie, alors <InlineMath math="\dim F_1+\dim F_2=\dim E" /></li>
                  </ul>
                </div>
              )
            },
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Plus généralement, des sous-espaces <InlineMath math="F_1,\dots,F_r" /> (<InlineMath math="r\ge2" />) sont dits
                    <strong> supplémentaires</strong> si :
                  </p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="E=\bigoplus_{i=1}^{r}F_i \quad\text{et}\quad \sum_{i=1}^{r}\dim F_i=\dim E" />
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
              <li>La somme de sous-espaces est toujours un sous-espace</li>
              <li>Formule de Grassmann pour deux sous-espaces</li>
              <li>Somme directe ⟺ intersection triviale</li>
              <li>Critère dimensionnel : somme directe ⟺ somme des dimensions</li>
              <li>Sous-espaces supplémentaires : décomposition directe de tout l'espace</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section Flashcards */}
        <Card className="border border-formation-orange/20 mb-10">
          <CardContent className="p-6">
            <FlashCardQuiz 
              cards={sousEspacesCards}
              title="Quiz Sous-espaces supplémentaires"
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <FormationButton variant="outline" onClick={() => navigate("/formation/maths/chapitre3")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Chapitre précédent
          </FormationButton>

          <FormationButton
            onClick={() => navigate("/formation/maths/chapitre5")}
            className="bg-formation-orange text-white hover:bg-formation-orange/90"
          >
            Chapitre suivant
          </FormationButton>
        </div>
      </div>
    </div>
  )
}

export default Chapitre4SousEspaces
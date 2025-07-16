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

// Flashcards pour Sommes et sommes directes
const sommesCards = [
  {
    id: 1,
    question: "Définition de la somme de deux sous-espaces F et G",
    answer: "F + G = \\{f + g \\mid f \\in F, g \\in G\\}",
    isBlock: true
  },
  {
    id: 2,
    question: "F + G est-il toujours un sous-espace ?",
    answer: "\\text{Oui, } F + G \\text{ est toujours un sous-espace de } \\mathcal{E}",
    isBlock: true
  },
  {
    id: 3,
    question: "Formule de Grassmann",
    answer: "\\dim(F + G) = \\dim F + \\dim G - \\dim(F \\cap G)",
    isBlock: true
  },
  {
    id: 4,
    question: "Quand la somme F + G est-elle directe ?",
    answer: "F \\cap G = \\{0_{\\mathcal{E}}\\}, \\text{ notation : } F \\oplus G",
    isBlock: true
  },
  {
    id: 5,
    question: "Définition de la somme de plusieurs sous-espaces",
    answer: "\\sum_{k=1}^{s} F_k = \\{f_1 + \\cdots + f_s \\mid (f_1, \\ldots, f_s) \\in F_1 \\times \\cdots \\times F_s\\}",
    isBlock: true
  },
  {
    id: 6,
    question: "Condition pour qu'une somme de plusieurs sous-espaces soit directe",
    answer: "f_1 + \\cdots + f_s = 0 \\Rightarrow f_1 = \\cdots = f_s = 0",
    isBlock: true
  },
  {
    id: 7,
    question: "Critère dimensionnel pour une somme directe (cas fini)",
    answer: "\\text{Somme directe} \\Leftrightarrow \\dim\\left(\\sum_{k=1}^{s} F_k\\right) = \\sum_{k=1}^{s} \\dim F_k",
    isBlock: true
  },
  {
    id: 8,
    question: "Critère par bases pour une somme directe",
    answer: "\\text{La concaténation des bases } (\\mathcal{B}_1, \\ldots, \\mathcal{B}_s) \\text{ est une base de } \\sum_k F_k \\text{ ssi la somme est directe}",
    isBlock: true
  },
  {
    id: 9,
    question: "Définition de sous-espaces complémentaires F et G",
    answer: "\\mathcal{E} = F \\oplus G",
    isBlock: true
  },
  {
    id: 10,
    question: "Caractérisation dimensionnelle de la complémentarité (dimension finie)",
    answer: "\\mathcal{E} = F \\oplus G \\Leftrightarrow \\begin{cases} F \\cap G = \\{0_{\\mathcal{E}}\\} \\\\ \\dim F + \\dim G = \\dim \\mathcal{E} \\end{cases}",
    isBlock: true
  },
  {
    id: 11,
    question: "Système complémentaire de plusieurs sous-espaces",
    answer: "\\mathcal{E} = \\bigoplus_{k=1}^{s} F_k",
    isBlock: true
  },
  {
    id: 12,
    question: "Conditions pour un système complémentaire",
    answer: "\\mathcal{E} = \\sum_{k=1}^{s} F_k \\text{ et cette somme est directe}",
    isBlock: true
  }
]

const Chapitre3Sommes = () => {
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
          <span className="text-formation-orange font-medium">Sommes et sommes directes</span>
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
              Chapitre 3 – Sommes, sommes directes et sous-espaces supplémentaires
            </h1>
            <p className="text-muted-foreground">Mathématiques approfondies • Prépa ECG</p>
          </div>
        </div>

        {/* Contexte */}
        <Card className="border-l-4 border-formation-blue/80 mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-formation-blue mb-4">Contexte</h2>
            <p className="text-foreground">
              Dans tout ce chapitre, <InlineMath math="\mathcal{E}" /> désigne un espace vectoriel 
              (pas nécessairement de dimension finie).
            </p>
          </CardContent>
        </Card>

        {/* Addition de deux sous-espaces */}
        <MathSection
          title="1. Addition de deux sous-espaces"
          subsections={[
            {
              subtitle: "Définition de la somme",
              content: (
                <div className="space-y-4">
                  <p>
                    Soient <InlineMath math="F" /> et <InlineMath math="G" /> deux sous-espaces de <InlineMath math="\mathcal{E}" />. 
                    La <strong>somme</strong> de <InlineMath math="F" /> et <InlineMath math="G" /> est l'ensemble :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="F+G=\{\,f+g\;|\;f\in F,\;g\in G\,\}" />
                  </div>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <p className="text-formation-green font-medium">Propriété</p>
                    <p><InlineMath math="F+G" /> est toujours un sous-espace de <InlineMath math="\mathcal{E}" />.</p>
                  </div>
                </div>
              )
            },
            {
              subtitle: "Formule de Grassmann",
              content: (
                <div className="space-y-4">
                  <p>Si <InlineMath math="\mathcal{E}" /> est de dimension finie, on a :</p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="\dim(F+G)=\dim F+\dim G-\dim(F\cap G)" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "Somme directe",
              content: (
                <div className="space-y-4">
                  <p>La somme est <strong>directe</strong> lorsque :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="F\cap G=\{0_{\mathcal{E}}\}" />
                  </div>
                  <p className="text-center font-medium">Notation : <InlineMath math="F\oplus G" /></p>
                </div>
              )
            }
          ]}
        />

        {/* Somme de plusieurs sous-espaces */}
        <MathSection
          title="2. Somme de plusieurs sous-espaces"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Soit <InlineMath math="s\ge 2" /> et <InlineMath math="(F_k)_{1\le k\le s}" /> une famille de sous-espaces de <InlineMath math="\mathcal{E}" />.
                  </p>
                </div>
              )
            },
            {
              subtitle: "Somme classique",
              content: (
                <div className="bg-muted/50 p-4 rounded-lg">
                  <BlockMath math="\sum_{k=1}^{s}F_k =\bigl\{\,f_1+\dots+f_s\;\bigl|\;(f_1,\dots,f_s)\in F_1\times\dots\times F_s\,\bigr\}" />
                </div>
              )
            },
            {
              subtitle: "Somme directe",
              content: (
                <div className="space-y-4">
                  <p>
                    La somme est <strong>directe</strong> (notation <InlineMath math="\bigoplus_{k=1}^{s}F_k" />) si la décomposition
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="x=f_1+\dots+f_s\quad(x\in\sum_kF_k)" />
                  </div>
                  <p>est unique, ou encore si :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="f_1+\dots+f_s=0\;\Longrightarrow\;f_1=\dots=f_s=0" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "Critère dimensionnel (cas fini)",
              content: (
                <div className="space-y-4">
                  <p>Lorsque chaque <InlineMath math="F_k" /> est de dimension finie, la somme est directe :</p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="\Longleftrightarrow\quad \dim\!\Bigl(\sum_{k=1}^{s}F_k\Bigr)=\sum_{k=1}^{s}\dim F_k" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "Critère par bases",
              content: (
                <div className="space-y-4">
                  <p>
                    Sous la même hypothèse, la concaténation des bases <InlineMath math="\bigl(\mathcal B_1,\dots,\mathcal B_s\bigr)" /> est une base de 
                    <InlineMath math="\sum_kF_k" /> si et seulement si la somme est directe.
                  </p>
                </div>
              )
            }
          ]}
        />

        {/* Sous-espaces complémentaires */}
        <MathSection
          title="3. Sous-espaces complémentaires"
          subsections={[
            {
              subtitle: "Complémentarité de deux sous-espaces",
              content: (
                <div className="space-y-4">
                  <p>
                    On dit que <InlineMath math="F" /> et <InlineMath math="G" /> sont <strong>complémentaires</strong> dans <InlineMath math="\mathcal{E}" /> si :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\mathcal{E} = F \oplus G" />
                  </div>
                  <p>
                    c'est-à-dire si tout <InlineMath math="x\in\mathcal{E}" /> s'écrit de façon unique <InlineMath math="x=f+g" /> avec 
                    <InlineMath math="f\in F" /> et <InlineMath math="g\in G" />.
                  </p>
                </div>
              )
            },
            {
              subtitle: "Caractérisation dimensionnelle (dimension finie)",
              content: (
                <div className="space-y-4">
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="\mathcal{E}=F\oplus G \;\Longleftrightarrow\; \begin{cases} F\cap G=\{0_{\mathcal{E}}\},\\[4pt] \dim F+\dim G=\dim\mathcal{E}. \end{cases}" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "Compléments multiples",
              content: (
                <div className="space-y-4">
                  <p>
                    Le système <InlineMath math="(F_k)_{1\le k\le s}" /> est <strong>complémentaire</strong> de <InlineMath math="\mathcal{E}" /> si :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\mathcal{E}=\bigoplus_{k=1}^{s}F_k" />
                  </div>
                  <p>c'est-à-dire lorsque :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><InlineMath math="\mathcal{E}=\sum_{k=1}^{s}F_k" /></li>
                    <li>cette somme est directe</li>
                  </ul>
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
              <li>Formule de Grassmann : dim(F+G) = dim F + dim G - dim(F∩G)</li>
              <li>Somme directe ⟺ intersection triviale</li>
              <li>Critère dimensionnel pour la somme directe</li>
              <li>Sous-espaces complémentaires : décomposition unique de tout vecteur</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section Flashcards */}
        <Card className="border border-formation-orange/20 mb-10">
          <CardContent className="p-6">
            <FlashCardQuiz 
              cards={sommesCards}
              title="Quiz Sommes et sommes directes"
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <FormationButton variant="outline" onClick={() => navigate("/formation/maths/chapitre2")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Chapitre précédent
          </FormationButton>

          <FormationButton
            onClick={() => navigate("/formation/maths/chapitre4")}
            className="bg-formation-orange text-white hover:bg-formation-orange/90"
          >
            Chapitre suivant
          </FormationButton>
        </div>
      </div>
    </div>
  )
}

export default Chapitre3Sommes
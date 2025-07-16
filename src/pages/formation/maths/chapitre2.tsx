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

// Flashcards pour Applications linéaires et matrices
const matricesCards = [
  {
    id: 1,
    question: "Comment note-t-on la matrice associée à u ∈ L(E,F) dans les bases B et B' ?",
    answer: "\\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(u) = A \\in \\mathcal{M}_{q,p}(\\mathbb{R})",
    isBlock: true
  },
  {
    id: 2,
    question: "Que contient la j-ième colonne de la matrice d'une application linéaire ?",
    answer: "\\text{Les coordonnées de } u(e_j) \\text{ dans la base } \\mathcal{B}'",
    isBlock: true
  },
  {
    id: 3,
    question: "Matrice de l'identité dans une base B",
    answer: "\\text{Mat}_{\\mathcal{B}}(\\text{Id}_E) = I_p",
    isBlock: true
  },
  {
    id: 4,
    question: "Dimension de L(E,F) quand E a dimension p et F dimension q",
    answer: "\\dim \\mathcal{L}(E,F) = pq = \\dim E \\times \\dim F",
    isBlock: true
  },
  {
    id: 5,
    question: "Application canonique associée à une matrice A ∈ M_{q,p}(ℝ)",
    answer: "f: \\mathbb{R}^p \\to \\mathbb{R}^q, \\quad (x_1,\\ldots,x_p) \\mapsto (y_1,\\ldots,y_q) \\text{ avec } y_i = \\sum_{k=1}^p a_{i,k}x_k",
    isBlock: true
  },
  {
    id: 6,
    question: "Compatibilité avec les sommes matricielles",
    answer: "\\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(u+v) = \\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(u) + \\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(v)",
    isBlock: true
  },
  {
    id: 7,
    question: "Compatibilité avec les homothéties matricielles",
    answer: "\\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(\\lambda u) = \\lambda \\cdot \\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(u)",
    isBlock: true
  },
  {
    id: 8,
    question: "Matrice de la composition v∘u",
    answer: "\\text{Mat}_{\\mathcal{B},\\mathcal{B}''}(v \\circ u) = \\text{Mat}_{\\mathcal{B}',\\mathcal{B}''}(v) \\cdot \\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(u)",
    isBlock: true
  },
  {
    id: 9,
    question: "Condition d'inversibilité d'une application linéaire u : E → F",
    answer: "u \\text{ bijective} \\Leftrightarrow \\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(u) \\text{ est inversible}",
    isBlock: true
  },
  {
    id: 10,
    question: "Matrice de l'inverse d'une application bijective",
    answer: "\\text{Mat}_{\\mathcal{B}',\\mathcal{B}}(u^{-1}) = \\left(\\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(u)\\right)^{-1}",
    isBlock: true
  },
  {
    id: 11,
    question: "Image d'un vecteur x par u en termes matriciels",
    answer: "y = u(x) \\Leftrightarrow Y = AX \\text{ où } A = \\text{Mat}_{\\mathcal{B},\\mathcal{B}'}(u)",
    isBlock: true
  },
  {
    id: 12,
    question: "Condition d'appartenance au noyau en termes matriciels",
    answer: "x \\in \\ker u \\Leftrightarrow AX = 0",
    isBlock: true
  },
  {
    id: 13,
    question: "Définition du rang d'une famille de vecteurs",
    answer: "\\text{rg}(v_1,\\ldots,v_n) = \\dim \\text{Vect}(v_1,\\ldots,v_n)",
    isBlock: true
  },
  {
    id: 14,
    question: "Propriété du rang de la transposée",
    answer: "\\text{rg}(A) = \\text{rg}(A^T)",
    isBlock: true
  },
  {
    id: 15,
    question: "Condition d'inversibilité d'une matrice carrée A ∈ M_n(ℝ)",
    answer: "A \\text{ inversible} \\Leftrightarrow \\text{rg}(A) = n",
    isBlock: true
  }
]

const Chapitre2Matrices = () => {
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
          <span className="text-formation-orange font-medium">Applications linéaires et matrices</span>
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
              Chapitre 2 – Applications linéaires et matrices
            </h1>
            <p className="text-muted-foreground">Mathématiques approfondies • Prépa ECG</p>
          </div>
        </div>

        {/* Matrice d'un morphisme */}
        <MathSection
          title="1. Matrice associée à une application linéaire"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Soit <InlineMath math="E" /> (dimension <InlineMath math="p" />) de base <InlineMath math="\mathcal B=(e_1,\dots,e_p)" /> et 
                    <InlineMath math="F" /> (dimension <InlineMath math="q" />) de base <InlineMath math="\mathcal B'=(f_1,\dots,f_q)" />. 
                    Pour <InlineMath math="u\in\mathcal{L}(E,F)" />, on note :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\operatorname{Mat}_{\mathcal B,\mathcal B'}(u)=A\in\mathcal{M}_{q,p}(\mathbb{R})" />
                  </div>
                  <p>
                    la matrice dont la <InlineMath math="j" />-ième colonne contient les coordonnées de <InlineMath math="u(e_j)" /> dans <InlineMath math="\mathcal B'" />.
                  </p>
                  <div className="bg-formation-blue/10 border border-formation-blue/20 rounded-lg p-4">
                    <p className="text-formation-blue font-medium">Note importante</p>
                    <p>Une <em>forme linéaire</em> (codomaine <InlineMath math="\mathbb{R}" />) est décrite par une matrice ligne.</p>
                  </div>
                </div>
              )
            },
            {
              subtitle: "1.1 Endomorphisme",
              content: (
                <div className="space-y-4">
                  <p>Pour <InlineMath math="u\in\mathcal{L}(E)" /> (dimension <InlineMath math="p" />), on écrit seulement :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\operatorname{Mat}_{\mathcal B}(u)\in\mathcal{M}_{p}(\mathbb{R})" />
                  </div>
                  <p>et <InlineMath math="\operatorname{Mat}_{\mathcal B}(\operatorname{Id}_{E})=I_{p}" /> quelle que soit la base <InlineMath math="\mathcal B" />.</p>
                </div>
              )
            },
            {
              subtitle: "1.2 Isomorphisme canonique",
              content: (
                <div className="space-y-4">
                  <p>L'application</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\Phi :\mathcal{L}(E,F)\longrightarrow\mathcal{M}_{q,p}(\mathbb{R}),\quad u\mapsto\operatorname{Mat}_{\mathcal B,\mathcal B'}(u)" />
                  </div>
                  <p>est un isomorphisme d'espaces vectoriels ; d'où :</p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="\dim\mathcal{L}(E,F)=pq=\dim E\times\dim F" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Application linéaire ↔ matrice */}
        <MathSection
          title="2. Application linéaire canoniquement associée à une matrice"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Donnons <InlineMath math="A=(a_{i,k})\in\mathcal{M}_{q,p}(\mathbb{R})" />. En fixant les bases canoniques de 
                    <InlineMath math="\mathbb{R}^{p}" /> et <InlineMath math="\mathbb{R}^{q}" />, on obtient l'endomorphisme :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="f:\mathbb{R}^{p}\to\mathbb{R}^{q},\quad (x_1,\dots,x_p)\mapsto(y_1,\dots,y_q)" />
                    <BlockMath math="\text{avec }y_i=\sum_{k=1}^{p} a_{i,k}x_k" />
                  </div>
                  <p>Ainsi <InlineMath math="\operatorname{Mat}_{\text{can}}(f)=A" />.</p>
                </div>
              )
            }
          ]}
        />

        {/* Opérations matricielles */}
        <MathSection
          title="3. Calculs sur les matrices associées"
          subsections={[
            {
              subtitle: "3.1 Compatibilité avec les sommes et homothéties",
              content: (
                <div className="space-y-4">
                  <p>Pour <InlineMath math="u,v\in\mathcal{L}(E,F)" /> et <InlineMath math="\lambda\in\mathbb{R}" /> :</p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <BlockMath math="\operatorname{Mat}_{\mathcal B,\mathcal B'}(u+v)=\operatorname{Mat}_{\mathcal B,\mathcal B'}(u)+\operatorname{Mat}_{\mathcal B,\mathcal B'}(v)" />
                    <BlockMath math="\operatorname{Mat}_{\mathcal B,\mathcal B'}(\lambda u)=\lambda\,\operatorname{Mat}_{\mathcal B,\mathcal B'}(u)" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "3.2 Composition",
              content: (
                <div className="space-y-4">
                  <p>
                    Étant donné <InlineMath math="E,F,G" /> de bases <InlineMath math="\mathcal B,\mathcal B',\mathcal B''" /> et 
                    <InlineMath math="u:E\to F" />, <InlineMath math="v:F\to G" /> :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\operatorname{Mat}_{\mathcal B,\mathcal B''}(v\circ u)=\operatorname{Mat}_{\mathcal B',\mathcal B''}(v) \;\operatorname{Mat}_{\mathcal B,\mathcal B'}(u)" />
                  </div>
                  <p>Pour un endomorphisme <InlineMath math="u" />, on a <InlineMath math="\operatorname{Mat}_{\mathcal B}(u^{k})=\bigl(\operatorname{Mat}_{\mathcal B}(u)\bigr)^{k}" />.</p>
                </div>
              )
            }
          ]}
        />

        {/* Inversibilité et bijection */}
        <MathSection
          title="4. Inversibilité et bijection"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Si <InlineMath math="E" /> et <InlineMath math="F" /> ont même dimension et <InlineMath math="u:E\to F" /> est linéaire, alors :
                  </p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="u\text{ bijective}\;\Longleftrightarrow\;\operatorname{Mat}_{\mathcal B,\mathcal B'}(u)\text{ est inversible}" />
                  </div>
                  <p>Lorsque <InlineMath math="u" /> est bijective :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\operatorname{Mat}_{\mathcal B',\mathcal B}(u^{-1})=\bigl(\operatorname{Mat}_{\mathcal B,\mathcal B'}(u)\bigr)^{-1}" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Action sur les vecteurs */}
        <MathSection
          title="5. Image d'un vecteur"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Pour <InlineMath math="u:E\to F" />, <InlineMath math="x\in E" /> de coordonnées <InlineMath math="X" /> dans <InlineMath math="\mathcal B" /> et 
                    <InlineMath math="Y" /> celles de <InlineMath math="y=u(x)" /> dans <InlineMath math="\mathcal B'" /> :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="y=u(x)\;\Longleftrightarrow\; Y=AX,\quad A=\operatorname{Mat}_{\mathcal B,\mathcal B'}(u)" />
                  </div>
                  <p>En particulier : <InlineMath math="x\in\ker u \Longleftrightarrow AX=0" />.</p>
                </div>
              )
            }
          ]}
        />

        {/* Rang revisité */}
        <MathSection
          title="6. Rang : familles et matrices"
          subsections={[
            {
              subtitle: "6.1 Famille de vecteurs",
              content: (
                <div className="space-y-4">
                  <p>Pour <InlineMath math="(v_1,\dots,v_n)\subset E" /> :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\operatorname{rg}(v_1,\dots,v_n)=\dim\operatorname{Vect}(v_1,\dots,v_n)" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "6.2 Rang d'une matrice",
              content: (
                <div className="space-y-4">
                  <p>
                    Le rang d'une matrice <InlineMath math="A\in\mathcal{M}_{n,p}(\mathbb{R})" /> est le rang de sa famille colonne : <InlineMath math="\operatorname{rg}(A)" />. On a :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <BlockMath math="\operatorname{rg}(A)=\operatorname{rg}(A^{\mathsf T})" />
                    <BlockMath math="\operatorname{rg}(A)=0\;\Longleftrightarrow\;A=0" />
                  </div>
                  <p>Pour <InlineMath math="A\in\mathcal{M}_{n}(\mathbb{R})" /> :</p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="A\text{ inversible}\;\Longleftrightarrow\;\operatorname{rg}(A)=n" />
                  </div>
                  <p>Enfin, si <InlineMath math="A=\operatorname{Mat}_{\mathcal B,\mathcal B'}(u)" /> :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\operatorname{rg}(u)=\operatorname{rg}(A)" />
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
              <li>La matrice d'une application contient les images des vecteurs de base en colonnes</li>
              <li>La composition correspond au produit matriciel</li>
              <li>Une application est bijective ssi sa matrice est inversible</li>
              <li>Le rang d'une application égale le rang de sa matrice</li>
              <li>L'image d'un vecteur s'obtient par multiplication matricielle</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section Flashcards */}
        <Card className="border border-formation-orange/20 mb-10">
          <CardContent className="p-6">
            <FlashCardQuiz 
              cards={matricesCards}
              title="Quiz Applications linéaires et matrices"
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <FormationButton variant="outline" onClick={() => navigate("/formation/maths/chapitre1")}>
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

export default Chapitre2Matrices
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

// Flashcards pour Applications linéaires
const applicationsLineairesCards = [
  {
    id: 1,
    question: "Définition d'une application linéaire f : E → F",
    answer: "f(x+y) = f(x) + f(y) \\text{ et } f(\\lambda x) = \\lambda f(x)",
    isBlock: true
  },
  {
    id: 2,
    question: "Qu'est-ce qu'une forme linéaire ?",
    answer: "\\text{Application de } E \\text{ dans } \\mathbb{R} \\text{, ensemble } \\mathcal{L}(E,\\mathbb{R})",
    isBlock: true
  },
  {
    id: 3,
    question: "Qu'est-ce qu'un endomorphisme ?",
    answer: "\\text{Application de } E \\text{ dans } E \\text{, espace } \\mathcal{L}(E)",
    isBlock: true
  },
  {
    id: 4,
    question: "Qu'est-ce qu'un isomorphisme ?",
    answer: "\\text{Application linéaire bijective de } E \\text{ vers } F",
    isBlock: true
  },
  {
    id: 5,
    question: "Image d'une combinaison linéaire par f",
    answer: "f\\left(\\sum_{i=1}^{p} \\alpha_i x_i\\right) = \\sum_{i=1}^{p} \\alpha_i f(x_i)",
    isBlock: true
  },
  {
    id: 6,
    question: "Condition d'égalité de deux applications linéaires",
    answer: "f = g \\Leftrightarrow \\forall i \\in \\{1,\\ldots,n\\}, f(e_i) = g(e_i)",
    isBlock: true
  },
  {
    id: 7,
    question: "Si f ∈ L(E,F) et g ∈ L(F,G), alors g∘f appartient à quel ensemble ?",
    answer: "g \\circ f \\in \\mathcal{L}(E,G)",
    isBlock: true
  },
  {
    id: 8,
    question: "Inverse de la composition (g∘f)⁻¹",
    answer: "(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}",
    isBlock: true
  },
  {
    id: 9,
    question: "Binôme de Newton fonctionnel (si u et v commutent)",
    answer: "(u+v)^p = \\sum_{k=0}^{p} \\binom{p}{k} u^{p-k} \\circ v^k",
    isBlock: true
  },
  {
    id: 10,
    question: "Définition de Q(u) pour un polynôme Q et un endomorphisme u",
    answer: "Q(u) = \\sum_{k=0}^{r} q_k u^k \\text{ si } Q(x) = \\sum_{k=0}^{r} q_k x^k",
    isBlock: true
  },
  {
    id: 11,
    question: "Qu'est-ce qu'un polynôme annulateur de u ?",
    answer: "\\text{Polynôme non nul } Q \\text{ tel que } Q(u) = 0",
    isBlock: true
  },
  {
    id: 12,
    question: "Définition du noyau de f",
    answer: "\\ker f = \\{x \\in E \\mid f(x) = 0_F\\}",
    isBlock: true
  },
  {
    id: 13,
    question: "Condition d'injectivité d'une application linéaire",
    answer: "f \\text{ est injectif} \\Leftrightarrow \\ker f = \\{0_E\\}",
    isBlock: true
  },
  {
    id: 14,
    question: "Définition de l'image de f",
    answer: "\\text{Im } f = \\{y \\in F \\mid \\exists x \\in E, y = f(x)\\}",
    isBlock: true
  },
  {
    id: 15,
    question: "Condition de surjectivité d'une application linéaire",
    answer: "f \\text{ est surjectif} \\Leftrightarrow \\text{Im } f = F",
    isBlock: true
  },
  {
    id: 16,
    question: "Qu'est-ce qu'un sous-espace stable par u ?",
    answer: "F \\text{ stable par } u \\Leftrightarrow u(F) \\subset F",
    isBlock: true
  }
];

const Chapitre20ApplicationsLineaires = () => {
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
          <span className="text-formation-orange font-medium">Applications linéaires</span>
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
              Chapitre 20 – Applications linéaires
            </h1>
            <p className="text-muted-foreground">Mathématiques approfondies • Prépa ECG</p>
          </div>
        </div>

        {/* Cadre général */}
        <Card className="border-l-4 border-formation-blue/80 mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-formation-blue mb-4">1. Cadre général</h2>
            <p className="text-foreground">
              Sauf mention contraire, <InlineMath math="E" />, <InlineMath math="F" /> et <InlineMath math="G" /> désignent des espaces vectoriels réels.
            </p>
          </CardContent>
        </Card>

        {/* Définitions essentielles */}
        <MathSection
          title="2. Définitions essentielles"
          subsections={[
            {
              subtitle: "2.1 Application linéaire",
              content: (
                <div className="space-y-4">
                  <p>
                    Une <strong>application linéaire</strong> est une fonction <InlineMath math="f:E\to F" /> satisfaisant, 
                    pour tous <InlineMath math="x,y\in E" /> et tout scalaire <InlineMath math="\lambda\in\mathbb{R}" /> :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="f\bigl(x+y\bigr)=f(x)+f(y), \qquad f(\lambda x)=\lambda\,f(x)" />
                  </div>
                  <p>
                    L'ensemble de ces applications est noté <InlineMath math="\mathcal L(E,F)" /> ; 
                    c'est lui-même un espace vectoriel.
                  </p>
                </div>
              )
            },
            {
              subtitle: "2.2 Vocabulaire particulier",
              content: (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-formation-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Forme linéaire :</strong> application de <InlineMath math="E" /> dans <InlineMath math="\mathbb{R}" /> ; 
                      ensemble <InlineMath math="\mathcal L(E,\mathbb{R})" />.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-formation-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Endomorphisme :</strong> application de <InlineMath math="E" /> dans <InlineMath math="E" /> ; 
                      espace <InlineMath math="\mathcal L(E)" />.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-formation-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Isomorphisme :</strong> application linéaire bijective de <InlineMath math="E" /> vers <InlineMath math="F" />.
                    </div>
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Propriétés élémentaires */}
        <MathSection
          title="3. Propriétés élémentaires"
          subsections={[
            {
              subtitle: "3.1 Image d'une combinaison linéaire",
              content: (
                <div className="space-y-4">
                  <p>
                    Pour <InlineMath math="f\in\mathcal L(E,F)" />, des vecteurs <InlineMath math="x_1,\dots,x_p\in E" /> et 
                    des scalaires <InlineMath math="\alpha_1,\dots,\alpha_p" /> :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="f\!\Bigl(\sum_{i=1}^{p} \alpha_i x_i\Bigr)=\sum_{i=1}^{p} \alpha_i f(x_i)" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "3.2 Égalité de deux applications",
              content: (
                <div className="space-y-4">
                  <p>
                    Si <InlineMath math="E" /> est de dimension finie et <InlineMath math="\mathcal B=(e_1,\dots,e_n)" /> une base, 
                    alors pour <InlineMath math="f,g\in\mathcal L(E,F)" /> :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="f=g \quad\Longleftrightarrow\quad \forall i\in\{1,\dots,n\},\; f(e_i)=g(e_i)" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Composition et isomorphie */}
        <MathSection
          title="4. Composition et isomorphie"
          subsections={[
            {
              subtitle: "4.1 Composition",
              content: (
                <div className="space-y-4">
                  <p>
                    Si <InlineMath math="f\in \mathcal L(E,F)" /> et <InlineMath math="g\in \mathcal L(F,G)" />, 
                    alors <InlineMath math="g\circ f\in \mathcal L(E,G)" />.
                  </p>
                  <p className="text-muted-foreground">
                    En particulier, la composition de deux endomorphismes est encore un endomorphisme.
                  </p>
                </div>
              )
            },
            {
              subtitle: "4.2 Isomorphismes",
              content: (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-formation-green rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      Si <InlineMath math="f" /> est un isomorphisme, son inverse <InlineMath math="f^{-1}" /> est 
                      un isomorphisme dans l'autre sens.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-formation-green rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      Si <InlineMath math="f" /> et <InlineMath math="g" /> sont des isomorphismes de <InlineMath math="E" /> dans 
                      lui-même, alors <InlineMath math="g\circ f" /> est un isomorphisme et
                      <div className="mt-2 bg-muted/50 p-3 rounded">
                        <BlockMath math="(g\circ f)^{-1}=f^{-1}\circ g^{-1}" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Binôme, polynômes et applications */}
        <MathSection
          title="5. Binôme, polynômes et applications"
          subsections={[
            {
              subtitle: "5.1 Binôme de Newton fonctionnel",
              content: (
                <div className="space-y-4">
                  <p>
                    Soit <InlineMath math="u" /> un endomorphisme et <InlineMath math="p\in\mathbb{N}" /> ; 
                    on fixe <InlineMath math="u^{0}=\operatorname{Id}_{E}" /> et <InlineMath math="u^{p}=u^{p-1}\circ u" /> pour <InlineMath math="p\ge1" />.
                  </p>
                  <p>
                    Si <InlineMath math="u" /> et <InlineMath math="v" /> commutent (<InlineMath math="uv=vu" />), alors :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="(u+v)^{p}=\sum_{k=0}^{p} \binom{p}{k}\,u^{p-k}\circ v^{k}" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "5.2 Polynôme d'un endomorphisme",
              content: (
                <div className="space-y-4">
                  <p>
                    Pour <InlineMath math="Q(x)=\sum_{k=0}^{r} q_k x^{k}\in\mathbb{R}[x]" /> et <InlineMath math="u\in\mathcal L(E)" />, 
                    on définit :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="Q(u)=\sum_{k=0}^{r} q_k u^{k}" />
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Compatibilité</h4>
                    <p className="mb-2">
                      Pour <InlineMath math="\alpha,\beta\in\mathbb{R}" /> et <InlineMath math="Q,R\in\mathbb{R}[x]" /> :
                    </p>
                    <div className="bg-muted/50 p-3 rounded">
                      <BlockMath math="(\alpha Q+\beta R)(u)=\alpha Q(u)+\beta R(u)" />
                      <BlockMath math="(QR)(u)=Q(u)\circ R(u)" />
                    </div>
                  </div>
                </div>
              )
            },
            {
              subtitle: "5.3 Polynôme annulateur",
              content: (
                <div className="space-y-4">
                  <p>
                    Un polynôme non nul <InlineMath math="Q" /> est <strong>annulateur</strong> de <InlineMath math="u" /> si <InlineMath math="Q(u)=0" />.
                  </p>
                  <div className="bg-formation-blue/10 border border-formation-blue/20 rounded-lg p-4">
                    <p className="text-formation-blue font-medium mb-2">Propriété importante</p>
                    <p>Tout endomorphisme d'un espace <em>de dimension finie</em> possède au moins un tel polynôme.</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Lien avec l'isomorphisme</h4>
                    <p className="mb-2">
                      Si <InlineMath math="Q(x)=a_{0}+\dots+a_{r}x^{r}" /> annule <InlineMath math="u" /> avec <InlineMath math="a_{0}\neq0" />, 
                      alors <InlineMath math="u" /> est bijectif et :
                    </p>
                    <div className="bg-muted/50 p-3 rounded">
                      <BlockMath math="u^{-1}=-\frac{1}{a_{0}}\bigl(a_{1}\,\operatorname{Id}_{E}+a_{2}u+\dots+a_{r}u^{r-1}\bigr)" />
                    </div>
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Sous-espaces associés */}
        <MathSection
          title="6. Sous-espaces associés"
          subsections={[
            {
              subtitle: "6.1 Noyau",
              content: (
                <div className="space-y-4">
                  <p>
                    Le <strong>noyau</strong> d'un morphisme <InlineMath math="f:E\to F" /> est :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\ker f = \{x\in E\mid f(x)=0_{F}\}" />
                  </div>
                  <p>
                    C'est un sous-espace vectoriel de <InlineMath math="E" />.
                  </p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <p className="text-formation-green font-medium">
                      <InlineMath math="f" /> est injectif <InlineMath math="\Longleftrightarrow" /> <InlineMath math="\ker f = \{0_E\}" />
                    </p>
                  </div>
                </div>
              )
            },
            {
              subtitle: "6.2 Image",
              content: (
                <div className="space-y-4">
                  <p>L'<strong>image</strong> est définie par :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\operatorname{Im} f = \{y\in F\mid \exists x\in E,\; y=f(x)\}" />
                  </div>
                  <p>
                    C'est un sous-espace de <InlineMath math="F" />.
                  </p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <p className="text-formation-green font-medium">
                      L'application est surjective <InlineMath math="\Longleftrightarrow" /> <InlineMath math="\operatorname{Im} f = F" />
                    </p>
                  </div>
                </div>
              )
            },
            {
              subtitle: "6.3 Sous-espaces stables",
              content: (
                <div className="space-y-4">
                  <p>
                    Pour <InlineMath math="u\in\mathcal L(E)" /> et <InlineMath math="F\subset E" />, 
                    on dit que <InlineMath math="F" /> est <strong>stable par <InlineMath math="u" /></strong> si <InlineMath math="u(F)\subset F" /> ; 
                    autrement dit :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\forall x\in F,\; u(x)\in F" />
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
              <li>Une application linéaire préserve les combinaisons linéaires</li>
              <li>Le noyau caractérise l'injectivité, l'image caractérise la surjectivité</li>
              <li>La composition d'applications linéaires est linéaire</li>
              <li>Les polynômes d'endomorphismes permettent des calculs fonctionnels</li>
              <li>Tout endomorphisme en dimension finie admet un polynôme annulateur</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section Flashcards */}
        <Card className="border border-formation-orange/20 mb-10">
          <CardContent className="p-6">
            <FlashCardQuiz 
              cards={applicationsLineairesCards}
              title="Quiz Applications linéaires"
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <FormationButton variant="outline" onClick={() => navigate("/formation/maths/chapitre19")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Chapitre précédent
          </FormationButton>

          <FormationButton
            onClick={() => navigate("/formation/maths")}
            className="bg-formation-orange text-white hover:bg-formation-orange/90"
          >
            Retour à la formation
          </FormationButton>
        </div>
      </div>
    </div>
  )
}

export default Chapitre20ApplicationsLineaires
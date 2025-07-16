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

// Flashcards pour Applications linéaires en dimension finie
const dimensionFinieCards = [
  {
    id: 1,
    question: "Quand deux espaces vectoriels E et F sont-ils isomorphes ?",
    answer: "E \\simeq F \\Leftrightarrow \\dim E = \\dim F",
    isBlock: true
  },
  {
    id: 2,
    question: "Si u : E → F est un isomorphisme et (e₁,...,eₙ) une base de E, que peut-on dire de (u(e₁),...,u(eₙ)) ?",
    answer: "\\text{C'est une base de } F",
    isBlock: true
  },
  {
    id: 3,
    question: "Comment générer l'image d'une application linéaire u ?",
    answer: "\\text{Im } u = \\text{Vect}(u(e_1), \\ldots, u(e_p)) \\text{ où } (e_1, \\ldots, e_p) \\text{ est une base de } E",
    isBlock: true
  },
  {
    id: 4,
    question: "Définition du rang d'une application linéaire",
    answer: "\\text{rg}(u) = \\dim \\text{Im } u",
    isBlock: true
  },
  {
    id: 5,
    question: "Quand le rang d'une application est-il nul ?",
    answer: "\\text{rg}(u) = 0 \\Leftrightarrow u = 0",
    isBlock: true
  },
  {
    id: 6,
    question: "Condition de bijectivité pour u : E → F de même dimension n",
    answer: "u \\text{ bijective} \\Leftrightarrow \\text{rg}(u) = n",
    isBlock: true
  },
  {
    id: 7,
    question: "Théorème du rang",
    answer: "\\dim E = \\text{rg}(u) + \\dim \\ker u",
    isBlock: true
  },
  {
    id: 8,
    question: "Pour un endomorphisme v d'un espace E fini, quand est-il un isomorphisme ?",
    answer: "v \\text{ isomorphisme} \\Leftrightarrow \\text{rg}(v) = \\dim E",
    isBlock: true
  },
  {
    id: 9,
    question: "Équivalence pour les applications linéaires entre espaces de même dimension finie",
    answer: "u \\text{ injective} \\Leftrightarrow u \\text{ surjective} \\Leftrightarrow u \\text{ bijective}",
    isBlock: true
  },
  {
    id: 10,
    question: "Caractérisation d'un hyperplan H dans un espace E de dimension n",
    answer: "H \\text{ hyperplan} (\\dim H = n-1) \\Leftrightarrow \\exists \\varphi \\in \\mathcal{L}(E,\\mathbb{R}) \\setminus \\{0\\}, H = \\ker \\varphi",
    isBlock: true
  }
]

const Chapitre1DimensionFinie = () => {
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
          <span className="text-formation-orange font-medium">Applications linéaires en dimension finie</span>
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
              Chapitre 1 – Applications linéaires en dimension finie
            </h1>
            <p className="text-muted-foreground">Mathématiques approfondies • Prépa ECG</p>
          </div>
        </div>

        {/* Espaces isomorphes */}
        <MathSection
          title="1. Espaces isomorphes"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Deux espaces vectoriels <InlineMath math="E" /> et <InlineMath math="F" /> de dimension finie sont dits 
                    <strong> isomorphes</strong> s'il existe une application linéaire bijective <InlineMath math="u:E\to F" />.
                  </p>
                  <div className="bg-formation-blue/10 border border-formation-blue/20 rounded-lg p-4">
                    <p className="text-formation-blue font-medium mb-2">Propriété fondamentale</p>
                    <p>Tout espace réel de dimension <InlineMath math="n" /> est isomorphe à <InlineMath math="\mathbb{R}^{n}" />.</p>
                  </div>
                </div>
              )
            },
            {
              subtitle: "1.1 Lien avec la dimension",
              content: (
                <div className="space-y-4">
                  <p>Si <InlineMath math="E" /> et <InlineMath math="F" /> sont de dimension finie, alors :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="E\simeq F \;\Longleftrightarrow\; \dim E = \dim F" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "1.2 Bases et isomorphismes",
              content: (
                <div className="space-y-4">
                  <p>
                    Si <InlineMath math="u:E\to F" /> est un isomorphisme et <InlineMath math="(e_1,\dots,e_n)" /> une base de <InlineMath math="E" />, 
                    alors la famille <InlineMath math="(u(e_1),\dots,u(e_n))" /> est une base de <InlineMath math="F" />.
                  </p>
                  <p>
                    Réciproquement, si l'image d'une base est encore une base, l'application est isomorphique.
                  </p>
                </div>
              )
            }
          ]}
        />

        {/* Génération de l'image */}
        <MathSection
          title="2. Famille génératrice de l'image"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Pour <InlineMath math="u\in\mathcal{L}(E,F)" /> et <InlineMath math="(e_1,\dots,e_p)" /> base de <InlineMath math="E" /> :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\operatorname{Im}u = \operatorname{Vect}\bigl(u(e_1),\dots,u(e_p)\bigr)" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "2.1 Rang de l'application",
              content: (
                <div className="space-y-4">
                  <p>Lorsque l'image est de dimension finie, on pose :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="\operatorname{rg}(u)=\dim\operatorname{Im}u" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Propriétés du rang */}
        <MathSection
          title="3. Résultats classiques sur le rang"
          subsections={[
            {
              subtitle: "3.1 Cas de l'application nulle",
              content: (
                <div className="bg-muted/50 p-4 rounded-lg">
                  <BlockMath math="\operatorname{rg}(u)=0 \;\Longleftrightarrow\; u=0" />
                </div>
              )
            },
            {
              subtitle: "3.2 Rang et bijectivité",
              content: (
                <div className="space-y-4">
                  <p>
                    Si <InlineMath math="u:E\to F" /> est linéaire entre deux espaces de <em>même dimension</em> <InlineMath math="n" /> :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="u \text{ bijective} \;\Longleftrightarrow\; \operatorname{rg}(u)=n" />
                  </div>
                  <p>
                    En particulier, un endomorphisme <InlineMath math="v" /> d'un espace <InlineMath math="E" /> fini est un isomorphisme 
                    <InlineMath math="\Leftrightarrow" /> <InlineMath math="\operatorname{rg}(v)=\dim E" />.
                  </p>
                </div>
              )
            },
            {
              subtitle: "3.3 Théorème du rang",
              content: (
                <div className="space-y-4">
                  <p>Pour <InlineMath math="u:E\to F" /> linéaire avec <InlineMath math="E" /> de dimension finie :</p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="\dim E = \operatorname{rg}(u)+\dim\ker u" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Caractérisations d'isomorphie */}
        <MathSection
          title="4. Critères d'isomorphisme"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Si <InlineMath math="u:E\to F" /> est linéaire et que <InlineMath math="E" /> et <InlineMath math="F" /> ont 
                    <em>même dimension finie</em>, alors :
                  </p>
                  <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                    <BlockMath math="u\text{ injective} \;\Longleftrightarrow\; u\text{ surjective} \;\Longleftrightarrow\; u\text{ bijective}" />
                  </div>
                </div>
              )
            },
            {
              subtitle: "4.1 Endomorphisme et bijection",
              content: (
                <div className="space-y-4">
                  <p>Pour un endomorphisme <InlineMath math="v" /> d'un espace de dimension finie :</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="v\text{ injective} \;\Longleftrightarrow\; v\text{ surjective} \;\Longleftrightarrow\; v\text{ bijective}" />
                  </div>
                </div>
              )
            }
          ]}
        />

        {/* Hyperplans */}
        <MathSection
          title="5. Hyperplans et formes linéaires"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Soit <InlineMath math="E" /> de dimension finie <InlineMath math="n" /> et <InlineMath math="H" /> un sous-espace.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <BlockMath math="H \text{ est un hyperplan } (\dim H=n-1) \;\Longleftrightarrow\; \exists\, \varphi\in\mathcal{L}(E,\mathbb{R})\setminus\{0\},\; H=\ker \varphi" />
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
              <li>Deux espaces sont isomorphes ssi ils ont même dimension</li>
              <li>Le théorème du rang : dim E = rg(u) + dim ker u</li>
              <li>En dimension finie : injectif ⟺ surjectif ⟺ bijectif</li>
              <li>Un hyperplan est le noyau d'une forme linéaire non nulle</li>
              <li>L'image d'une application est engendrée par l'image d'une base</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section Flashcards */}
        <Card className="border border-formation-orange/20 mb-10">
          <CardContent className="p-6">
            <FlashCardQuiz 
              cards={dimensionFinieCards}
              title="Quiz Applications linéaires en dimension finie"
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <FormationButton variant="outline" onClick={() => navigate("/formation/maths")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la formation
          </FormationButton>

          <FormationButton
            onClick={() => navigate("/formation/maths/chapitre2")}
            className="bg-formation-orange text-white hover:bg-formation-orange/90"
          >
            Chapitre suivant
          </FormationButton>
        </div>
      </div>
    </div>
  )
}

export default Chapitre1DimensionFinie
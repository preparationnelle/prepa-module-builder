import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

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

export const SommesEtProduitsContent = () => {
  return (
    <div className="space-y-6">
      <MathSection 
        title="1. Sommes et produits"
        subsections={[
          {
            subtitle: "Somme d'une suite constante",
            content: (
              <div>
                <p className="mb-3">Pour deux entiers <InlineMath math="m,n" /> tels que <InlineMath math="m \leq n" /> et toute constante réelle <InlineMath math="c" />, on a :</p>
                <BlockMath math="\sum_{i=m}^{n} c = (n-m+1) \cdot c" />
              </div>
            )
          },
          {
            subtitle: "Sommes des puissances des premiers entiers",
            content: (
              <div className="space-y-4">
                <BlockMath math="\sum_{i=1}^{n} i = \frac{n(n+1)}{2}" />
                <BlockMath math="\sum_{i=1}^{n} i^{2} = \frac{n(n+1)(2n+1)}{6}" />
                <BlockMath math="\sum_{i=1}^{n} i^{3} = \left[\frac{n(n+1)}{2}\right]^{2}" />
              </div>
            )
          },
          {
            subtitle: "Sommes géométriques",
            content: (
              <div className="space-y-4">
                <BlockMath math="\sum_{i=0}^{n} q^{i} = \begin{cases} n+1 & \text{si } q = 1\\ \frac{1-q^{n+1}}{1-q} & \text{si } q \neq 1 \end{cases}" />
                <p className="mt-4 mb-3">Plus généralement, pour <InlineMath math="q \neq 1" /> et <InlineMath math="n \geq m" /> :</p>
                <BlockMath math="\sum_{i=m}^{n} q^{i} = q^{m} \cdot \frac{1-q^{n-m+1}}{1-q}" />
              </div>
            )
          },
          {
            subtitle: "Propriétés algébriques de la somme",
            content: (
              <div className="space-y-4">
                <BlockMath math="\sum_{i=1}^{n} (x_i + y_i) = \sum_{i=1}^{n} x_i + \sum_{i=1}^{n} y_i" />
                <BlockMath math="\forall \lambda \in \mathbb{R}, \quad \sum_{i=1}^{n} \lambda x_i = \lambda \sum_{i=1}^{n} x_i" />
              </div>
            )
          }
        ]}
      />

      <MathSection 
        title="2. Techniques de manipulation"
        subsections={[
          {
            subtitle: "Changement d'indice",
            content: (
              <div className="space-y-4">
                <p className="mb-3">Soit <InlineMath math="r \in \mathbb{Z}" />. En posant <InlineMath math="j = i + r" /> :</p>
                <BlockMath math="\sum_{i=m}^{n} x_{i+r} = \sum_{j=m+r}^{n+r} x_{j}" />
                <p className="mt-4 mb-3">Lorsque <InlineMath math="r \geq n" /> et en définissant <InlineMath math="\ell = r - i" /> :</p>
                <BlockMath math="\sum_{i=m}^{n} x_{r-i} = \sum_{\ell=r-n}^{r-m} x_{\ell}" />
              </div>
            )
          },
          {
            subtitle: "Sommes télescopiques",
            content: (
              <div>
                <p className="mb-3">Pour toute suite <InlineMath math="(u_i)_{i \geq 0}" /> :</p>
                <BlockMath math="\sum_{i=0}^{n} (u_{i+1}-u_i) = u_{n+1} - u_0" />
              </div>
            )
          }
        ]}
      />

      <MathSection 
        title="3. Sommes doubles"
        subsections={[
          {
            subtitle: "Indices indépendants",
            content: (
              <BlockMath math="\sum_{i=1}^{n}\sum_{j=1}^{n} x_{i,j} = \sum_{j=1}^{n}\sum_{i=1}^{n} x_{i,j}" />
            )
          },
          {
            subtitle: "Indices dépendants",
            content: (
              <BlockMath math="\sum_{1 \leq i \leq j \leq n} x_{i,j} = \sum_{j=1}^{n} \sum_{i=1}^{j} x_{i,j}" />
            )
          }
        ]}
      />

      <MathSection 
        title="4. Lien entre somme simple et double"
        subsections={[
          {
            content: (
              <BlockMath math="\left(\sum_{i=1}^{n} x_i\right)^{2} = \sum_{i=1}^{n} x_i^{2} + 2\sum_{1 \leq i < j \leq n} x_i x_j" />
            )
          }
        ]}
      />

      <MathSection 
        title="5. Produits"
        subsections={[
          {
            subtitle: "Factorielle",
            content: (
              <div className="space-y-4">
                <BlockMath math="n! = \prod_{i=1}^{n} i" />
                <BlockMath math="0! = 1" />
                <BlockMath math="n! = n \cdot (n-1)! \quad (n \geq 1)" />
              </div>
            )
          },
          {
            subtitle: "Produit d'une suite constante",
            content: (
              <BlockMath math="\prod_{i=1}^{n} \lambda = \lambda^{n} \quad (n \geq 1, \lambda \in \mathbb{R})" />
            )
          },
          {
            subtitle: "Compatibilités algébriques du produit",
            content: (
              <div className="space-y-4">
                <BlockMath math="\prod_{i=1}^{n} (x_i \cdot y_i) = \left(\prod_{i=1}^{n} x_i\right)\left(\prod_{i=1}^{n} y_i\right)" />
                <p className="mt-4 mb-3">Si aucun <InlineMath math="y_i" /> n'est nul :</p>
                <BlockMath math="\prod_{i=1}^{n} \frac{x_i}{y_i} = \frac{\prod_{i=1}^{n} x_i}{\prod_{i=1}^{n} y_i}" />
              </div>
            )
          },
          {
            subtitle: "Produit télescopique",
            content: (
              <div>
                <p className="mb-3">Pour une suite <InlineMath math="(z_i)" /> de réels non nuls :</p>
                <BlockMath math="\prod_{i=0}^{n} \frac{z_{i+1}}{z_{i}} = \frac{z_{n+1}}{z_{0}}" />
              </div>
            )
          }
        ]}
      />
    </div>
  )
}
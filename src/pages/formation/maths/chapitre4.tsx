import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Book } from "lucide-react"

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

const valeursTable = (
  <div className="overflow-x-auto">
    <table className="w-full text-center border">
      <thead>
        <tr className="bg-muted font-semibold">
          <th className="border px-2 py-1"><InlineMath math="x" /></th>
          <th className="border px-2 py-1"><InlineMath math="0" /></th>
          <th className="border px-2 py-1"><InlineMath math="\pi/6" /></th>
          <th className="border px-2 py-1"><InlineMath math="\pi/4" /></th>
          <th className="border px-2 py-1"><InlineMath math="\pi/3" /></th>
          <th className="border px-2 py-1"><InlineMath math="\pi/2" /></th>
          <th className="border px-2 py-1"><InlineMath math="\pi" /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1"><InlineMath math="\sin x" /></td>
          <td className="border px-2 py-1">0</td>
          <td className="border px-2 py-1">1/2</td>
          <td className="border px-2 py-1">\sqrt{2}/2</td>
          <td className="border px-2 py-1">\sqrt{3}/2</td>
          <td className="border px-2 py-1">1</td>
          <td className="border px-2 py-1">0</td>
        </tr>
        <tr>
          <td className="border px-2 py-1"><InlineMath math="\cos x" /></td>
          <td className="border px-2 py-1">1</td>
          <td className="border px-2 py-1">\sqrt{3}/2</td>
          <td className="border px-2 py-1">\sqrt{2}/2</td>
          <td className="border px-2 py-1">1/2</td>
          <td className="border px-2 py-1">0</td>
          <td className="border px-2 py-1">-1</td>
        </tr>
        <tr>
          <td className="border px-2 py-1"><InlineMath math="\tan x" /></td>
          <td className="border px-2 py-1">0</td>
          <td className="border px-2 py-1">\sqrt{3}/3</td>
          <td className="border px-2 py-1">1</td>
          <td className="border px-2 py-1">\sqrt{3}</td>
          <td className="border px-2 py-1">—</td>
          <td className="border px-2 py-1">0</td>
        </tr>
      </tbody>
    </table>
  </div>
)

const Chapitre4Trigonometrie = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-formation-orange/10 rounded-full flex items-center justify-center">
            <Book className="w-6 h-6 text-formation-orange" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Chapitre 4 – Trigonométrie
          </h1>
        </div>

        <MathSection
          title="Formules d’addition"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Pour tous réels <InlineMath math="a,b" /> :
                  </p>
                  <BlockMath math="\cos(a+b)=\cos a\,\cos b-\sin a\,\sin b" />
                  <BlockMath math="\sin(a+b)=\sin a\,\cos b+\sin b\,\cos a" />
                  <p>En remplaçant <InlineMath math="b" /> par <InlineMath math="-b" /> :</p>
                  <BlockMath math="\cos(a-b)=\cos a\,\cos b+\sin a\,\sin b" />
                  <BlockMath math="\sin(a-b)=\sin a\,\cos b-\sin b\,\cos a" />
                </div>
              ),
            },
          ]}
        />

        <MathSection
          title="Formules de duplication"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <p>
                    Par spécialisation <InlineMath math="b=a" /> et grâce à <InlineMath math="\cos^2 a + \sin^2 a = 1" /> :
                  </p>
                  <BlockMath math="\cos(2a) = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a" />
                  <BlockMath math="\sin(2a) = 2\sin a\,\cos a" />
                </div>
              ),
            },
          ]}
        />

        <MathSection
          title="Formules de linéarisation"
          subsections={[
            {
              content: (
                <div className="space-y-4">
                  <BlockMath math="\cos^2 a = \frac{1+\cos(2a)}{2}" />
                  <BlockMath math="\sin^2 a = \frac{1-\cos(2a)}{2}" />
                </div>
              ),
            },
          ]}
        />

        <MathSection
          title="Valeurs trigonométriques remarquables"
          subsections={[
            {
              content: valeursTable,
            },
          ]}
        />
      </div>
    </div>
  )
}

export default Chapitre4Trigonometrie


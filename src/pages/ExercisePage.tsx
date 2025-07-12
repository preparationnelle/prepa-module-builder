import { FormationButton } from "@/components/ui/formation-button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Play, Calculator } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

const ExercisePage = () => {
  const navigate = useNavigate()
  const { moduleId } = useParams()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <FormationButton
          variant="outline"
          onClick={() => navigate(`/formation/maths/module/${moduleId}`)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au module
        </FormationButton>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-formation-green rounded-lg flex items-center justify-center text-white">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Exercices - Sommes et produits</h1>
              <span className="text-formation-orange font-medium">Module 0</span>
            </div>
          </div>
        </div>

        {/* Exercice 1.01 */}
        <Card className="border border-formation-orange/20 mb-6">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-formation-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <h2 className="text-xl font-semibold text-foreground">Exercice 1.01</h2>
                <Badge variant="secondary" className="bg-formation-green/10 text-formation-green border-formation-green/20">
                  Facile
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Énoncé */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Énoncé</h3>
                <div className="space-y-4 text-foreground">
                  <div>
                    <p className="mb-2"><strong>1°)</strong> Montrer que, pour tout <InlineMath math="n \in \mathbb{N}^{\ast}" />,</p>
                    <div className="my-4">
                      <BlockMath math="1^{2}+2^{2}+3^{2}+\dots+n^{2} = \frac{n(n+1)(2n+1)}{6}" />
                    </div>
                  </div>
                  
                  <div>
                    <p className="mb-2"><strong>2°)</strong> Calculer, en fonction de <InlineMath math="n" />,</p>
                    <div className="my-4 space-y-2">
                      <BlockMath math="S_n = \sum_{p=0}^{n}(2p)^2, \qquad T_n = \sum_{p=0}^{n}(2p+1)^2" />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>3°)</strong> Montrer que, pour tout <InlineMath math="n \in \mathbb{N}^{\ast}" />,</p>
                    <div className="my-4">
                      <BlockMath math="\sum_{p=1}^{n} p \cdot p! = (n+1)!-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Vidéo */}
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Play className="w-5 h-5 text-formation-orange" />
                  <h4 className="font-semibold text-foreground">Vidéo explicative</h4>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.loom.com/embed/bb87a1911d4a494ba229aaca00ee88cb?sid=ffa20ad1-4e4a-40dc-a446-58329f2cd95c"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Corrigé avec accordéon */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="solution" className="border border-formation-orange/20 rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-semibold text-formation-orange hover:text-formation-orange-dark">
                    Voir le corrigé détaillé
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      {/* Question 1 */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">1°) Somme des carrés</h4>
                        <div className="space-y-3 text-foreground">
                          <p><strong>Mise en place du raisonnement par récurrence.</strong></p>
                          <p>Posons <InlineMath math="P_n : 1^{2}+2^{2}+3^{2}+\dots+n^{2}=\frac{n(n+1)(2n+1)}{6}" /></p>
                          
                          <p><strong>Initialisation.</strong> Pour <InlineMath math="n=1" /> : <InlineMath math="1^{2}=1=\frac{1(1+1)(2\times1+1)}{6}" /> ; <InlineMath math="P_1" /> est vraie.</p>
                          
                          <p><strong>Hérédité.</strong> Supposons <InlineMath math="P_n" /> vraie pour un certain <InlineMath math="n\ge1" /> ; on a alors</p>
                          <BlockMath math="U_n = 1^{2}+2^{2}+\cdots+n^{2}=\frac{n(n+1)(2n+1)}{6}" />
                          
                          <p>En ajoutant <InlineMath math="(n+1)^{2}" /> des deux côtés :</p>
                          <div className="my-4">
                            <BlockMath math="\begin{align}
U_{n+1} &= U_n + (n+1)^2 \\
&= \frac{n(n+1)(2n+1)}{6} + (n+1)^2 \\
&= \frac{n(n+1)(2n+1) + 6(n+1)^2}{6} \\
&= \frac{(n+1)(n+2)(2n+3)}{6}
\end{align}" />
                          </div>
                          
                          <p>ce qui équivaut bien à <InlineMath math="P_{n+1}" />.</p>
                          
                          <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4 mt-4">
                            <BlockMath math="\boxed{\forall n\in\mathbb{N}^{\ast},\;1^{2}+2^{2}+\cdots+n^{2}=\frac{n(n+1)(2n+1)}{6}}" />
                          </div>
                        </div>
                      </div>

                      {/* Question 2 */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">2°) Sommes des carrés pairs et impairs</h4>
                        <div className="space-y-3 text-foreground">
                          <p><strong>Somme des carrés pairs.</strong></p>
                          <BlockMath math="S_n = \sum_{p=0}^{n}(2p)^2 = 4 \sum_{p=0}^{n} p^{2} = 4\cdot\frac{n(n+1)(2n+1)}{6}" />
                          <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                            <BlockMath math="\boxed{S_n = \frac{2n(n+1)(2n+1)}{3}}" />
                          </div>
                          
                          <p><strong>Somme des carrés impairs.</strong></p>
                          <p>Considérons la somme globale</p>
                          <BlockMath math="U_{2n+1}=\sum_{k=1}^{2n+1}k^{2} = \sum_{p=0}^{n}(2p)^2 + \sum_{p=0}^{n}(2p+1)^2 = S_n + T_n" />
                          
                          <p>Or, d'après la question 1 appliquée à <InlineMath math="2n+1" /> :</p>
                          <BlockMath math="U_{2n+1}=\frac{(2n+1)(2n+2)(4n+3)}{6} = \frac{(2n+1)(n+1)(4n+3)}{3}" />
                          
                          <p>Ainsi</p>
                          <BlockMath math="\begin{align}
T_n &= U_{2n+1}-S_n \\
&= \frac{(2n+1)(n+1)(4n+3)}{3} - \frac{2n(n+1)(2n+1)}{3} \\
&= \frac{(n+1)(2n+1)(4n+3-2n)}{3}
\end{align}" />
                          
                          <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                            <BlockMath math="\boxed{T_n = \frac{(n+1)(2n+1)(2n+3)}{3}}" />
                          </div>
                        </div>
                      </div>

                      {/* Question 3 */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">3°) Somme pondérée de factorielles</h4>
                        <div className="space-y-3 text-foreground">
                          <p><strong>Preuve par récurrence.</strong></p>
                          <p>Soit <InlineMath math="Q_n:\;\sum_{p=1}^{n} p\,p!=(n+1)!-1" /></p>
                          
                          <p><strong>Initialisation</strong> <InlineMath math="(n=1)" />. <InlineMath math="1\,1!=2!-1" /> : <InlineMath math="Q_1" /> est vraie.</p>
                          
                          <p><strong>Hérédité.</strong> Supposons <InlineMath math="Q_n" /> vraie pour un <InlineMath math="n\ge1" /> et ajoutons <InlineMath math="(n+1)(n+1)!" /> aux deux membres :</p>
                          <BlockMath math="\begin{align}
\sum_{p=1}^{n} p\,p! + (n+1)(n+1)! &= (n+1)!-1 + (n+1)(n+1)! \\
&= (n+2)(n+1)! - 1 \\
&= (n+2)! - 1
\end{align}" />
                          
                          <p>Le membre de gauche est exactement <InlineMath math="\sum_{p=1}^{n+1} p\,p!" />, donc <InlineMath math="Q_{n+1}" /> est vérifiée.</p>
                          
                          <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                            <BlockMath math="\boxed{\sum_{p=1}^{n} p\,p! = (n+1)!-1}" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        {/* Exercice 1.02 */}
        <Card className="border border-formation-orange/20 mb-6">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-formation-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <h2 className="text-xl font-semibold text-foreground">Exercice 1.02</h2>
                <Badge variant="secondary" className="bg-formation-green/10 text-formation-green border-formation-green/20">
                  Facile
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Énoncé */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Énoncé</h3>
                <div className="space-y-4 text-foreground">
                  <p>Déterminer <InlineMath math="\forall n\in \mathbb{N}^{\ast}" />,</p>
                  <div className="my-4">
                    <BlockMath math="A_n = \sum_{k=1}^{n} \frac{1}{k(k+1)}" />
                  </div>
                </div>
              </div>

              {/* Corrigé avec accordéon */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="solution-2" className="border border-formation-orange/20 rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-semibold text-formation-orange hover:text-formation-orange-dark">
                    Voir le corrigé détaillé
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Étape 1 — Mise en évidence d'une somme télescopique</h4>
                        <div className="space-y-3 text-foreground">
                          <p>Pour tout <InlineMath math="k\in \mathbb{N}^{\ast}" />, on remarque que</p>
                          <BlockMath math="\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Étape 2 — Application à la somme</h4>
                        <div className="space-y-3 text-foreground">
                          <p>Ainsi, pour tout <InlineMath math="n\ge1" /> :</p>
                          <BlockMath math="\begin{align}
A_n &= \sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n} \left(\frac{1}{k} - \frac{1}{k+1}\right) \\
&= \underbrace{\sum_{k=1}^{n} \frac{1}{k}}_{\text{série harmonique partielle}} - \underbrace{\sum_{k=1}^{n} \frac{1}{k+1}}_{\text{même somme décalée}}
\end{align}" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Étape 3 — Télescopage</h4>
                        <div className="space-y-3 text-foreground">
                          <p>En décalant l'indice dans la deuxième somme <InlineMath math="(i=k+1)" /> :</p>
                          <BlockMath math="\sum_{k=1}^{n} \frac{1}{k+1} = \sum_{i=2}^{n+1} \frac{1}{i}" />
                          
                          <p>On obtient donc</p>
                          <BlockMath math="\begin{align}
A_n &= \left(1 + \sum_{k=2}^{n} \frac{1}{k}\right) - \left(\sum_{i=2}^{n} \frac{1}{i} + \frac{1}{n+1}\right) \\
&= 1 - \frac{1}{n+1}
\end{align}" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Conclusion</h4>
                        <div className="space-y-3 text-foreground">
                          <p>On a finalement</p>
                          <div className="bg-formation-green/10 border border-formation-green/20 rounded-lg p-4">
                            <BlockMath math="\boxed{\forall n\in\mathbb{N}^{\ast},\; A_n = 1 - \frac{1}{n+1}}" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <FormationButton size="lg">
            Exercice suivant
          </FormationButton>
        </div>
      </div>
    </div>
  )
}

export default ExercisePage
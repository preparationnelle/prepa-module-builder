import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InlineMath, BlockMath } from "react-katex";
import { Card, CardContent } from "@/components/ui/card";

export const FormulasDropdown = () => {
  return (
    <Card className="border border-formation-orange/20 mb-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Formules de référence</h2>
        
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="suite-constante">
            <AccordionTrigger className="text-left">
              Somme d'une suite constante
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p className="text-foreground">
                  Pour deux entiers m, n tels que m ≤ n et toute constante réelle c, on a :
                </p>
                <BlockMath>
                  {`\\sum_{i=m}^{n} c = (n - m + 1) \\cdot c`}
                </BlockMath>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="puissances-entiers">
            <AccordionTrigger className="text-left">
              Sommes des puissances des premiers entiers
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground mb-2">Somme des premiers entiers :</p>
                  <BlockMath>
                    {`\\sum_{i=1}^{n} i = \\frac{n(n + 1)}{2}`}
                  </BlockMath>
                </div>
                
                <div>
                  <p className="text-foreground mb-2">Somme des carrés des premiers entiers :</p>
                  <BlockMath>
                    {`\\sum_{i=1}^{n} i^2 = \\frac{n(n + 1)(2n + 1)}{6}`}
                  </BlockMath>
                </div>
                
                <div>
                  <p className="text-foreground mb-2">Somme des cubes des premiers entiers :</p>
                  <BlockMath>
                    {`\\sum_{i=1}^{n} i^3 = \\left[\\frac{n(n + 1)}{2}\\right]^2`}
                  </BlockMath>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="geometriques">
            <AccordionTrigger className="text-left">
              Sommes géométriques
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground mb-2">Pour q ≠ 1 :</p>
                  <BlockMath>
                    {`\\sum_{k=0}^{n} q^k = \\frac{1 - q^{n+1}}{1 - q}`}
                  </BlockMath>
                </div>
                
                <div>
                  <p className="text-foreground mb-2">Pour q = 1 :</p>
                  <BlockMath>
                    {`\\sum_{k=0}^{n} q^k = n + 1`}
                  </BlockMath>
                </div>
                
                <div>
                  <p className="text-foreground mb-2">Somme géométrique infinie pour |q| &lt; 1 :</p>
                  <BlockMath>
                    {`\\sum_{k=0}^{\\infty} q^k = \\frac{1}{1 - q}`}
                  </BlockMath>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="telescopiques">
            <AccordionTrigger className="text-left">
              Sommes télescopiques
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground mb-2">Principe général :</p>
                  <BlockMath>
                    {`\\sum_{k=1}^{n} (u_{k+1} - u_k) = u_{n+1} - u_1`}
                  </BlockMath>
                </div>
                
                <div>
                  <p className="text-foreground mb-2">Exemple classique :</p>
                  <BlockMath>
                    {`\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = \\sum_{k=1}^{n} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = 1 - \\frac{1}{n+1}`}
                  </BlockMath>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
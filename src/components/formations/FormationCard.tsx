import { Card, CardContent } from "@/components/ui/card"
import { FormationButton } from "@/components/ui/formation-button"
import { Book, Clock, BarChart } from "lucide-react"

interface FormationCardProps {
  title: string
  description: string
  duration: string
  level: string
  modules: number
  icon: React.ReactNode
  onClick: () => void
  available?: boolean
}

export function FormationCard({
  title,
  description,
  duration,
  level,
  modules,
  icon,
  onClick,
  available = true
}: FormationCardProps) {
  return (
    <Card className="border border-formation-orange/20 hover:border-formation-orange/40 transition-all duration-200 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-formation-orange rounded-lg flex items-center justify-center text-white">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-secondary rounded-md text-xs font-medium">
            <Clock className="w-3 h-3" />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-formation-blue/10 text-formation-blue rounded-md text-xs font-medium">
            <BarChart className="w-3 h-3" />
            {level}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-formation-green/10 text-formation-green rounded-md text-xs font-medium">
            <Book className="w-3 h-3" />
            {modules} modules
          </span>
        </div>

        <FormationButton 
          onClick={onClick}
          disabled={!available}
          className="w-full"
        >
          {available ? "Commencer la formation" : "Bientôt disponible"}
        </FormationButton>
      </CardContent>
    </Card>
  )
}
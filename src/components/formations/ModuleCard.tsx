import { Card, CardContent } from "@/components/ui/card"
import { FormationButton } from "@/components/ui/formation-button"
import { Badge } from "@/components/ui/badge"
import { Play, Lock } from "lucide-react"

interface ModuleCardProps {
  moduleNumber: number
  title: string
  description: string
  topics: string[]
  available: boolean
  icon: React.ReactNode
  onClick: () => void
}

export function ModuleCard({
  moduleNumber,
  title,
  description,
  topics,
  available,
  icon,
  onClick
}: ModuleCardProps) {
  return (
    <Card className={`border transition-all duration-200 ${
      available 
        ? "border-formation-orange/20 hover:border-formation-orange/40 hover:shadow-lg" 
        : "border-muted/40 opacity-60"
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white ${
            available ? "bg-formation-orange" : "bg-muted"
          }`}>
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-foreground">Module {moduleNumber}</h3>
              <Badge variant={available ? "default" : "secondary"} className={available ? "bg-formation-green text-white" : ""}>
                {available ? "Disponible" : "Accès restreint"}
              </Badge>
            </div>
            <h4 className="text-formation-orange font-medium mb-2">{title}</h4>
            <p className="text-muted-foreground text-sm mb-4">{description}</p>
          </div>
        </div>

        <div className="mb-4">
          <ul className="space-y-1">
            {topics.map((topic, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 bg-formation-orange rounded-full"></span>
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <FormationButton 
          onClick={onClick}
          disabled={!available}
          className="w-full"
          variant={available ? "primary" : "outline"}
        >
          {available ? (
            <>
              <Play className="w-4 h-4 mr-2" />
              Commencer le module
            </>
          ) : (
            <>
              <Lock className="w-4 h-4 mr-2" />
              Accès restreint
            </>
          )}
        </FormationButton>
      </CardContent>
    </Card>
  )
}
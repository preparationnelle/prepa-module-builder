import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

interface FormationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "sm" | "lg"
}

const FormationButton = forwardRef<HTMLButtonElement, FormationButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary: "bg-formation-orange hover:bg-formation-orange-dark text-white",
      secondary: "bg-formation-orange-light hover:bg-formation-orange-light/80 text-formation-orange border border-formation-orange/20",
      outline: "border-2 border-formation-orange text-formation-orange hover:bg-formation-orange hover:text-white"
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8"
    }

    return (
      <Button
        className={cn(
          "font-medium rounded-lg transition-all duration-200",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
FormationButton.displayName = "FormationButton"

export { FormationButton }
import { FormationCard } from "@/components/formations/FormationCard"
import { Calculator, TrendingUp, Users, Award, BookOpen, Target, ArrowRight, CheckCircle, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { FormationButton } from "@/components/ui/formation-button"

const Formation = () => {
  const navigate = useNavigate()

  const formations = [
    {
      id: "maths",
      title: "Formation de Maths",
      description: "Formation complète en Mathématiques pour les concours des Grandes Écoles de Commerce",
      duration: "15-20 heures",
      level: "Débutant à avancé",
      modules: 8,
      icon: <Calculator className="w-6 h-6" />,
      available: true
    },
  ]

  const stats = [
    { number: "500+", label: "Étudiants formés", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Taux de réussite", icon: <Award className="w-6 h-6" /> },
    { number: "20+", label: "Chapitres de cours", icon: <BookOpen className="w-6 h-6" /> },
    { number: "100+", label: "Exercices corrigés", icon: <Target className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: "Marie L.",
      school: "HEC Paris",
      text: "Grâce à cette formation, j'ai pu combler mes lacunes en maths et intégrer HEC. Les explications sont claires et les exercices progressifs.",
      rating: 5
    },
    {
      name: "Thomas R.",
      school: "ESSEC",
      text: "Une formation exceptionnelle qui m'a permis de passer de 8/20 à 16/20 en mathématiques. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Sarah M.",
      school: "ESCP",
      text: "Les flashcards et les exercices corrigés m'ont énormément aidée pour réviser efficacement avant les concours.",
      rating: 5
    }
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Cours complets",
      description: "20 chapitres détaillés couvrant tout le programme ECG"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Exercices corrigés",
      description: "Plus de 100 exercices avec corrections détaillées"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Flashcards interactives",
      description: "Mémorisez les formules essentielles efficacement"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Suivi de progression",
      description: "Suivez vos progrès chapitre par chapitre"
    }
  ]

  const handleFormationClick = (formationId: string) => {
    if (formationId === "maths") {
      navigate("/formation/maths")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-formation-orange/5 via-background to-formation-blue/5 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-formation-orange-light rounded-full text-formation-orange text-sm font-medium mb-6">
              📚 Préparez votre entretien
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Formations <span className="text-formation-orange">ECG</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Étudiants en classe prépa ECG ? Maximisez vos chances d'intégrer les <strong>top 5</strong> grâce à nos formations spécialisées conçues par des experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FormationButton size="lg" onClick={() => navigate("/formation/maths")}>
                Commencer maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </FormationButton>
              <FormationButton variant="outline" size="lg">
                Découvrir les formations
              </FormationButton>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="border-formation-orange/20 hover:border-formation-orange/40 transition-all duration-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-formation-orange/10 rounded-full flex items-center justify-center text-formation-orange mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos formations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des formations complètes et structurées pour exceller aux concours
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {formations.map((formation) => (
              <FormationCard
                key={formation.id}
                title={formation.title}
                description={formation.description}
                duration={formation.duration}
                level={formation.level}
                modules={formation.modules}
                icon={formation.icon}
                available={formation.available}
                onClick={() => handleFormationClick(formation.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi choisir nos formations ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche pédagogique innovante pour maximiser vos résultats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-formation-orange/20 hover:border-formation-orange/40 transition-all duration-200 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-formation-orange/10 rounded-full flex items-center justify-center text-formation-orange mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ils ont réussi grâce à nos formations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les témoignages de nos étudiants admis dans les meilleures écoles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-formation-orange/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-formation-orange text-formation-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-formation-orange/10 rounded-full flex items-center justify-center text-formation-orange font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-formation-orange">{testimonial.school}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-formation-orange to-formation-orange-dark">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à transformer vos résultats ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines d'étudiants qui ont déjà amélioré leurs notes et intégré leurs écoles de rêve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FormationButton 
              variant="secondary" 
              size="lg"
              onClick={() => navigate("/formation/maths")}
            >
              Commencer la formation
              <ArrowRight className="w-5 h-5 ml-2" />
            </FormationButton>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Accès immédiat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Support inclus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Mises à jour gratuites</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Formation
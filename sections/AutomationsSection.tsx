
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Languages, 
  Code, 
  Zap
} from 'lucide-react';

export const AutomationsSection = () => {
  const automations = [
    {
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: "Thème grammatical",
      description: "Générateur et correcteur de thèmes de traduction avec notation détaillée instantanée pour perfectionner votre maîtrise linguistique.",
      link: "/generator/theme-grammar",
      badge: "IA"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Exercices Python",
      description: "Générez des exercices pratiques Python (matrice, algèbre…) et complétez vos fonctions avec un assistant intelligent.",
      link: "/generator/python-exercises",
      badge: "Nouveau"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-orange-50 to-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <h2 className="section-heading">
              Automatisations <span className="gradient-text">IA</span>
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-lg">
            Découvrez nos outils d'intelligence artificielle spécialisés qui automatisent votre préparation 
            et vous font gagner des heures de travail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {automations.map((automation, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    {automation.icon}
                  </div>
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {automation.badge}
                  </span>
                </div>
                <CardTitle className="text-xl">{automation.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {automation.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link to={automation.link}>
                  <Button className="w-full group">
                    Essayer maintenant
                    <Zap className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/generator">
            <Button size="lg" variant="outline" className="bg-gradient-to-r from-primary/10 to-orange-500/10 hover:from-primary/20 hover:to-orange-500/20">
              <Zap className="h-5 w-5 mr-2" />
              Découvrir tous les générateurs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

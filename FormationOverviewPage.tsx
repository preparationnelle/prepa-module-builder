import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Languages, Globe, Check, ArrowRight, Users } from 'lucide-react';

const FormationOverviewPage = () => {
  const formations = [
    {
      id: 'python',
      title: 'Python ECG',
      icon: Code,
      description: 'Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.',
      features: [
        '54 commandes essentielles',
        'Exercices type concours',
        '+3 à 5 points garantis'
      ],
      link: '/pourquoi-python-prepa-ecg',
      buttonText: 'Commencer le module',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      buttonColor: 'text-blue-600'
    },
    {
      id: 'anglais',
      title: 'Anglais ECG',
      icon: Languages,
      description: 'Perfectionnez votre anglais avec méthodes ciblées, grammaire avancée et préparation aux épreuves.',
      features: [
        'Grammaire systématique',
        'Thèmes et versions',
        'Essais et synthèses'
      ],
      link: '/formation/anglais',
      buttonText: 'Voir la formation',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      buttonColor: 'text-green-600'
    },
    {
      id: 'allemand',
      title: 'Allemand ECG',
      icon: Languages,
      description: 'Maîtrisez les déclinaisons, la grammaire complexe et les techniques d\'expression écrite et orale.',
      features: [
        'Déclinaisons et cas',
        'Structures complexes',
        'Essais méthodiques'
      ],
      link: '/formation/allemand',
      buttonText: 'Voir la formation',
      color: 'bg-red-100',
      iconColor: 'text-red-600',
      buttonColor: 'text-red-600'
    },
    {
      id: 'geopolitique',
      title: 'Géopolitique',
      icon: Globe,
      description: 'Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.',
      features: [
        'Enjeux contemporains',
        'Méthodes d\'analyse',
        'Actualité stratégique'
      ],
      link: '/formation/geopolitique',
      buttonText: 'Voir la formation',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      buttonColor: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">
            <span className="gradient-text">Vue d'ensemble des Formations</span>
          </h1>
          
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto text-lg">
            Découvrez toutes nos formations spécialisées pour maximiser vos chances aux concours des écoles de commerce.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {formations.map((formation) => {
              const IconComponent = formation.icon;
              return (
                <Card key={formation.id} className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <span className={`w-12 h-12 ${formation.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className={`h-6 w-6 ${formation.iconColor}`} />
                      </span>
                      {formation.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <p className="text-gray-600 mb-6 flex-grow">
                      {formation.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {formation.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className={`h-4 w-4 ${formation.iconColor}`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={formation.link} className="mt-auto">
                      <Button className="w-full flex items-center justify-center gap-2" variant="outline">
                        <span className={formation.buttonColor}>{formation.buttonText}</span>
                        <ArrowRight className={`h-4 w-4 ${formation.iconColor}`} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Section Entretiens de Personnalité */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Préparation aux Entretiens
            </h2>
            
            <Card className="hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl justify-center">
                  <span className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </span>
                  Entretiens de Personnalité
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Maîtrisez tous les aspects des entretiens de personnalité avec notre méthodologie complète et nos outils de préparation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                  <div className="flex items-center gap-2 justify-center">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Méthodologie complète</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Outils IA</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Fiches écoles</span>
                  </div>
                </div>
                
                <Link to="/methodologie/entretiens-personnalite">
                  <Button className="flex items-center justify-center gap-2" variant="outline">
                    <span className="text-orange-600">Voir la formation</span>
                    <ArrowRight className="h-4 w-4 text-orange-600" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Prêt à commencer votre préparation ?
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez des milliers d'étudiants qui maximisent leurs chances de réussite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationOverviewPage;

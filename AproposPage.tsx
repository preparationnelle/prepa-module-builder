import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const partners = [
  {
    name: "Mister Prépa",
    logo: "/lovable-uploads/0e2fccc2-ec73-424b-b6c6-bdf1212646fa.png",
    alt: "Logo Mister Prépa",
    url: "https://misterprepa.net"
  },
  {
    name: "Blue Factory x ESCP",
    logo: "/lovable-uploads/dbcafb26-e562-4250-b4c4-25fa9c1e4054.png",
    alt: "Logo Blue Factory x ESCP",
    url: "https://www.blue-factory.eu"
  },
  {
    name: "ESCP Business School",
    logo: "/lovable-uploads/c0bbdb09-51b9-4152-9846-68b665c90f83.png",
    alt: "Logo ESCP Business School",
    url: "https://escp.eu"
  },
  {
    name: "myPREPA",
    logo: "/lovable-uploads/3e5a4535-39d6-4d27-8faa-8b0514725dcb.png",
    alt: "Logo myPREPA",
    url: "https://myprepa.fr"
  },
  {
    name: "Maisons des Jeunes Talents",
    logo: "/lovable-uploads/8a218555-a2b6-4739-88e1-c64dff3c33ea.png",
    alt: "Logo Maisons des Jeunes Talents",
    url: "https://fondation.groupelbpam.com/en/maisons-des-jeunes-talents-about-us/"
  },
  {
    name: "Stéphane Preteseille",
    logo: "/lovable-uploads/d926b01a-e267-4195-955e-938ac3235351.png",
    alt: "Logo Stéphane Preteseille",
    url: "https://stephanepreteseille.com"
  }
];

const AproposPage = () => (
  <div className="min-h-screen bg-background py-12 px-4">
    <div className="container mx-auto max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center">
        Réussir la prépa autrement : la vision de Prépa Rationnelle
      </h1>
      <div className="space-y-8 text-lg text-foreground">
        <section>
          <p>
            <strong>Prépa Rationnelle</strong>, c'est bien plus qu'un nom accrocheur : c'est une réponse concrète à un problème que vivent des milliers d'étudiants chaque année. Celui de l'inefficacité, du surmenage et du manque de méthode dans les classes préparatoires.
            À l'origine du projet, un constat personnel : réussir un concours ne dépend pas uniquement de son intelligence ou de ses connaissances, mais de la capacité à travailler intelligemment. Et ça, peu de gens l'enseignent.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-4 text-primary">Nos partenaires</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-6">
            {partners.map((partner, i) => (
              <a
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-40 hover:shadow-lg transition-shadow"
                aria-label={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-16 w-auto object-contain mb-2"
                />
                <span className="text-base text-primary text-center">{partner.name}</span>
              </a>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">Un parcours personnel au service des autres</h2>
          <p>
            Je m'appelle Dimitar Dimitrov. Je suis étudiant à l'ESCP Business School, passé par trois années de classe préparatoire, avec tous les hauts et les bas que cela implique&nbsp;: l'épuisement, les remises en question, les échecs… et finalement la réussite.
          </p>
          <p>
            Issu d'un double parcours franco-bulgare, je suis aussi passé par des débuts très difficiles à mon arrivée en France, sans parler un mot de la langue. Mais c'est cette résilience que je transmets aujourd'hui dans ma pédagogie.<br />
            <br />
            Prépa Rationnelle est né de cette expérience. De cette conviction qu'un accompagnement efficace peut transformer une trajectoire. Pendant deux ans, j'ai donné plus de 500 heures de cours particuliers, accompagné plus de 20 étudiants, certains allant jusqu'à dépasser mes propres scores aux concours.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">Une pédagogie de l'efficacité</h2>
          <p>
            Notre approche est simple : enseigner les bonnes méthodes avant même les contenus. Fiches ciblées, répétition espacée, gestion du temps, sélection des exercices vraiment utiles pour les concours… Nous utilisons des outils digitaux, des tablettes interactives, des plateformes IA en cours de développement pour automatiser les corrections et centraliser les ressources.
          </p>
          <p>
            Car oui, le vrai problème n'est pas que les élèves ne travaillent pas. C'est qu'ils ne savent pas comment travailler.
          </p>
          <p>
            Notre objectif : leur faire gagner du temps. J'en ai moi-même perdu énormément pendant mes années de prépa à apprendre des choses inutiles ou à refaire des exercices sans stratégie.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">Une start-up engagée et soutenue</h2>
          <p>
            Aujourd'hui, Prépa Rationnelle est incubée à la Blue Factory de l'ESCP, un écosystème entrepreneurial stimulant qui m'aide à structurer ce projet, le faire grandir et lui donner l'impact qu'il mérite.
            En parallèle, nous développons une plateforme numérique avec mon cousin en Bulgarie, pour aller encore plus loin dans la personnalisation de l'apprentissage.
          </p>
          <p>
            Et nous ne nous arrêtons pas aux étudiants déjà en prépa : nous voulons rendre la prépa accessible, en particulier aux lycéens boursiers ou mal informés, pour qui ce parcours semble parfois hors de portée. Dans cette optique, nous travaillons également à un partenariat avec la Maison des Jeunes Talents.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">Un modèle scalable, humain et technologique</h2>
          <p>
            Le business model est clair : une offre low cost mais haut de gamme, des abonnements mensuels pour accéder à toutes les ressources, des cours particuliers premium bien rémunérés pour les enseignants, et des stages intensifs pendant les vacances.<br />
            Notre ambition est de scaler à l'échelle européenne, grâce à une méthode claire et duplicable. Avec une équipe d'étudiants motivés, des mentors issus des meilleures écoles, et un suivi de qualité.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">L&apos;entrepreneuriat comme moteur</h2>
          <p>
            Pourquoi avoir choisi l'entrepreneuriat&nbsp;? Parce que je voulais donner du sens à mes études. Parce que j'ai envie d'avoir un impact, tout de suite. Parce que j'ai découvert que j'adorais enseigner et transmettre. Et parce qu'il n'y a pas de plus grande satisfaction que de voir un élève en échec reprendre confiance, progresser, et finalement réussir.
          </p>
        </section>
      </div>
      <div className="mt-12 flex justify-center">
        <Link to="/">
          <Button variant="outline">Retour à l'accueil</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default AproposPage;

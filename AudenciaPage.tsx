
import React from 'react';
import SchoolTemplate from '@/components/SchoolTemplate';

// Create a dedicated data object for Audencia
const audenciaData = {
  name: "Audencia Business School",
  shortDescription: "École nantaise réputée pour son engagement en matière de responsabilité sociétale",
  presentation: {
    title: "L'entretien de motivation et le débat collectif",
    content: [
      "Audencia, école nantaise réputée pour son engagement en matière de responsabilité sociétale, propose un format d'oral innovant pour le Programme Grande École (PGE) composé de deux épreuves distinctes.",
      "La première épreuve est un débat collectif en regards croisés : 20 minutes de préparation suivies de 15 minutes d'épreuve. Le format est collectif, regroupant 8 candidats (2 équipes de 4) sur un sujet de culture générale. Une équipe défend la thèse \"pour\" tandis que l'autre argumente le \"contre\".",
      "S'en suit un entretien de motivation individuel de 15 minutes, sans préparation. Le jury est composé d'un président, obligatoirement professeur permanent ou représentant d'Audencia, et de professionnel(s) ou dirigeant(s) du monde des affaires et/ou de la culture.",
      "Le jury observe sans intervenir pendant le débat collectif, ce qui met l'accent sur le comportement non-verbal, la capacité à gérer le stress et la clarté du discours des candidats."
    ],
    values: {
      title: "Ce qu'Audencia valorise",
      content: [
        "Audencia met particulièrement l'accent sur la responsabilité sociétale, le développement durable et l'humanisme. L'école valorise les candidats capables de porter un regard critique mais constructif sur notre société et son évolution.",
        "Les jurés apprécient les étudiants conscients des enjeux économiques, sociaux et environnementaux actuels, et qui ont une réflexion personnelle sur ces sujets – plus que des réponses toutes faites. Ils cherchent des profils qui pourront incarner leur devise \"Never stop daring\" tout en étant responsables.",
        "Audencia attend également des candidats qu'ils montrent leur ouverture internationale, leur capacité à travailler dans des environnements multiculturels et leur intelligence émotionnelle. L'école met l'accent sur des valeurs d'équité, d'inclusion et de promotion de la diversité qu'elle espère retrouver chez ses futurs étudiants."
      ]
    }
  },
  keyPoints: [
    {
      title: "Débat collectif : 15 minutes",
      description: "Après 20 min de préparation"
    },
    {
      title: "Entretien individuel : 15 minutes",
      description: "Sans préparation préalable"
    },
    {
      title: "Format innovant",
      description: "Débat en équipe de 4 candidats"
    },
    {
      title: "Jury d'observation",
      description: "Composé de professeurs et professionnels"
    }
  ],
  interviewStyle: {
    title: "Style de l'entretien et du débat",
    content: [
      "Le format d'évaluation d'Audencia est unique et se divise en deux parties distinctes. D'abord, le débat collectif met en avant votre capacité à structurer rapidement vos idées, à présenter des arguments solides, et à interagir respectueusement avec les autres candidats. Les jurés observent particulièrement votre posture, votre écoute active et votre capacité à vous intégrer dans une dynamique de groupe.",
      "Pour la partie débat, les sujets portent généralement sur des thématiques de société contemporaines qui permettent d'évaluer votre culture générale et votre capacité à formuler une pensée critique. Des exemples récents incluent \"Le succès est-il une question de génie ou de chance ?\" où les candidats devaient défendre l'une ou l'autre des positions.",
      "L'entretien individuel qui suit est plus classique mais tout aussi important. Il permet au jury d'évaluer votre motivation pour l'école et votre projet professionnel. Les questions commencent généralement par du classique (parcours, activités extrascolaires), puis évoluent souvent vers des sujets de société ou d'actualité avec une dimension RSE.",
      "Une partie de l'entretien individuel peut être réalisée en anglais, pour évaluer votre aisance linguistique, Audencia étant une école à l'international développé. L'atmosphère reste professionnelle mais généralement bienveillante, dans l'esprit de l'école. Les jurés cherchent avant tout à voir si vous correspondez à l'esprit d'Audencia, qui mêle performance et valeurs humaines."
    ]
  },
  tips: [
    {
      title: "Maîtrisez l'art du débat",
      content: "Entraînez-vous à défendre une position, même si ce n'est pas votre opinion personnelle. Travaillez votre capacité à structurer un argument de façon concise et impactante. Pratiquez l'écoute active et apprenez à rebondir sur les arguments des autres sans être agressif. Attention à ne pas monopoliser la parole : montrez que vous savez vous intégrer dans une dynamique de groupe."
    },
    {
      title: "Développez votre sensibilité RSE",
      content: "Préparez-vous sur les thématiques RSE et développement durable. Sans tomber dans le discours convenu, informez-vous sur les grands enjeux actuels et réfléchissez à votre position personnelle. Connaître quelques exemples d'entreprises engagées dans une démarche RSE sérieuse peut être un plus (évitez les exemples de greenwashing)."
    },
    {
      title: "Pratiquez votre anglais",
      content: "Entraînez-vous à répondre à des questions basiques en anglais sur votre parcours, vos motivations et vos projets. La fluidité est plus importante que le vocabulaire technique. Préparez-vous aussi à parler d'un sujet d'actualité simple en anglais, comme le changement climatique ou la transformation digitale."
    },
    {
      title: "Connaissez Audencia",
      content: "Renseignez-vous précisément sur les spécificités d'Audencia : ses programmes (notamment ceux qui vous intéressent), ses partenariats internationaux, son engagement RSE (labels, chaires, etc.), ses associations étudiantes les plus actives. Montrez que votre choix d'Audencia est réfléchi et correspond à vos valeurs personnelles."
    },
    {
      title: "Travaillez votre culture générale",
      content: "Le format de débat nécessite de bonnes connaissances générales et une capacité à les mobiliser rapidement. Lisez régulièrement la presse (Le Monde, Les Échos, The Economist), suivez l'actualité et formez-vous une opinion sur les grands sujets contemporains. Préparez-vous à des sujets de société actuels comme l'intelligence artificielle, la transition écologique, les inégalités sociales, etc."
    }
  ]
};

const AudenciaPage = () => {
  return <SchoolTemplate data={audenciaData} />;
};

export default AudenciaPage;

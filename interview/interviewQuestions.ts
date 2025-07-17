export interface InterviewQuestion {
  id: string;
  text: string;
  optional?: boolean;
  exampleAnswer?: string;
  tips?: string;
}

export interface InterviewBlock {
  id: string;
  title: string;
  questions: InterviewQuestion[];
}

export const INTERVIEW_QUESTIONS: InterviewBlock[] = [
  {
    id: 'presentation',
    title: 'Présentation & parcours',
    questions: [
      {
        id: 'intro',
        text: "Peux-tu te présenter en deux minutes ?",
        exampleAnswer: "Je m'appelle Lucas Martin, j'ai 23 ans et je suis diplômé d'un Bachelor en marketing digital. Passionné par l'innovation et la communication, j'ai développé au cours de mes études des compétences en stratégie de contenu et analyse de données. Mon stage chez MediaPlus m'a permis de mettre en pratique ces compétences dans un contexte professionnel dynamique.",
        tips: "Structurez votre présentation en 3 parties : formation, expériences clés et centres d'intérêt. Restez concis et montrez votre personnalité."
      },
      {
        id: 'accomplishment',
        text: "Quel est, à ce jour, ton plus grand accomplissement académique ?",
        exampleAnswer: "Mon plus grand accomplissement académique a été la réalisation de mon mémoire sur l'impact des réseaux sociaux dans le comportement d'achat des 18-25 ans, qui a reçu les félicitations du jury. Ce travail m'a permis de combiner recherche académique et applications concrètes, tout en développant une méthodologie d'analyse que j'utilise aujourd'hui dans mes projets professionnels.",
        tips: "Choisissez un accomplissement qui démontre vos compétences techniques et transversales. Expliquez pourquoi il vous a marqué et ce que vous en avez tiré."
      },
      {
        id: 'skill',
        text: "Quelle compétence non technique as-tu le plus améliorée cette année, et comment ?",
        optional: true,
        exampleAnswer: "J'ai considérablement amélioré ma capacité à parler en public cette année en m'imposant régulièrement des présentations devant des groupes. J'ai rejoint un club de débat et sollicité des feedbacks systématiques, ce qui m'a permis de gagner en assurance et en clarté dans mes interventions.",
        tips: "Mettez en avant une compétence relationnelle ou organisationnelle valorisée en entreprise, avec des actions concrètes et mesurables que vous avez entreprises pour progresser."
      },
      {
        id: 'adjectives',
        text: "Si tes proches devaient te décrire en trois adjectifs, lesquels seraient-ils ?",
        optional: true,
        exampleAnswer: "Mes proches me décriraient comme persévérant, car je ne baisse jamais les bras face aux obstacles; créatif, car j'aime proposer des solutions originales; et fiable, car je tiens toujours mes engagements et on peut compter sur moi dans les moments importants.",
        tips: "Choisissez des adjectifs qui reflètent à la fois votre personnalité et des qualités professionnelles recherchées. Illustrez chaque adjectif par un exemple concret."
      },
      {
        id: 'personality',
        text: "Comment décririez-vous votre personnalité en trois mots ?",
        exampleAnswer: "Je me définirais comme analytique, adaptable et enthousiaste. Mon esprit analytique me permet d'aborder les problèmes méthodiquement, mon adaptabilité de m'intégrer rapidement dans de nouveaux environnements, et mon enthousiasme de maintenir une énergie positive même dans les situations difficiles.",
        tips: "Choisissez des traits qui montrent votre compatibilité avec le poste ou la formation visée. Évitez les qualités trop génériques comme 'travailleur' ou 'motivé'."
      },
      {
        id: 'strengths-weaknesses',
        text: "Quelles sont vos principales qualités et vos principaux défauts ?",
        exampleAnswer: "Ma principale qualité est ma capacité d'organisation, qui me permet de gérer efficacement plusieurs projets en parallèle. Mon principal défaut est mon perfectionnisme, qui peut parfois me faire perdre du temps sur des détails. J'ai appris à mieux prioriser et à accepter qu'il faut parfois avancer avec une solution satisfaisante plutôt que parfaite.",
        tips: "Pour les défauts, montrez toujours comment vous travaillez à les améliorer. Choisissez un défaut qui peut aussi être vu comme une qualité dans certains contextes."
      }
    ]
  },
  {
    id: 'motivation',
    title: 'Motivation & projet',
    questions: [
      {
        id: 'why-field',
        text: "Pourquoi as-tu choisi cette filière / ce métier ?",
        exampleAnswer: "J'ai choisi le domaine de l'intelligence artificielle car il représente pour moi le parfait équilibre entre défis techniques et impact concret sur la société. Mes projets universitaires m'ont permis de constater comment ces technologies peuvent transformer des secteurs entiers, et je souhaite contribuer à cette évolution tout en veillant à leur développement éthique.",
        tips: "Montrez la cohérence de votre parcours et l'authenticité de votre intérêt. Évitez les motivations purement financières ou prestigieuses."
      },
      {
        id: 'expectations',
        text: "Qu'attends-tu de cette formation/entreprise sur le plan personnel ?",
        exampleAnswer: "J'attends de cette formation qu'elle me permette de développer non seulement mon expertise technique, mais aussi mes compétences en leadership et en gestion de projet. Je souhaite être confronté à des défis qui me poussent à sortir de ma zone de confort et à développer ma résilience professionnelle.",
        tips: "Montrez que vous avez réfléchi à votre développement personnel au-delà de l'aspect purement professionnel. Soyez spécifique sur ce que vous espérez apprendre ou développer."
      },
      {
        id: 'value',
        text: "Quelle est la valeur la plus importante pour toi au travail, et pourquoi ?",
        optional: true,
        exampleAnswer: "La collaboration est pour moi la valeur la plus importante au travail, car elle permet de créer des solutions plus riches et plus innovantes que celles qu'on pourrait développer seul. J'ai constaté lors de mon stage que les projets les plus réussis étaient ceux où l'intelligence collective était pleinement exploitée.",
        tips: "Choisissez une valeur qui reflète votre philosophie de travail et qui s'accorde avec la culture de l'entreprise ou de l'école visée."
      },
      {
        id: 'feedback-change',
        text: "Raconte un moment où tu as changé d'avis après avoir reçu un feedback constructif.",
        optional: true,
        exampleAnswer: "Lors d'un projet de groupe, j'avais proposé une approche très ambitieuse mais complexe. Un membre de l'équipe m'a fait remarquer que nous risquions de ne pas tenir les délais et m'a suggéré une alternative plus simple mais efficace. Après réflexion, j'ai reconnu la pertinence de son feedback et nous avons opté pour cette solution, ce qui a effectivement assuré notre réussite.",
        tips: "Montrez votre capacité à recevoir des critiques et à évoluer. L'exemple doit illustrer votre humilité et votre intelligence émotionnelle."
      },
      {
        id: 'five-year-plan',
        text: "Où vous voyez-vous dans 5 ou 10 ans ?",
        exampleAnswer: "Dans 5 ans, je me vois occuper un poste de chef de projet, après avoir acquis une solide expérience technique dans mon domaine. Dans 10 ans, j'aimerais évoluer vers un rôle de direction stratégique, potentiellement à l'international, ou avoir créé ma propre entreprise dans un secteur innovant où je pourrais apporter une réelle valeur ajoutée.",
        tips: "Montrez votre ambition tout en restant réaliste. Votre projection doit s'inscrire dans une progression logique par rapport au poste ou à la formation visée."
      },
      {
        id: 'inspiration',
        text: "Quelles sont les personnes qui vous inspirent, et pourquoi ?",
        exampleAnswer: "Je suis particulièrement inspiré par Elon Musk, non pas seulement pour ses réussites entrepreneuriales, mais surtout pour sa capacité à remettre en question les paradigmes établis et à poursuivre des visions qui semblaient impossibles. Sa persévérance face aux échecs et sa volonté de résoudre des problèmes à impact global résonnent avec ma propre approche des défis.",
        tips: "Choisissez une personne dont les valeurs et le parcours reflètent vos propres aspirations. L'important est d'expliquer précisément ce qui vous inspire chez cette personne."
      }
    ]
  },
  {
    id: 'projet-professionnel',
    title: 'Projet professionnel',
    questions: [
      {
        id: 'projet-long-terme',
        text: "Quel est votre projet professionnel à long terme et comment l'école va-t-elle vous y aider ?",
        exampleAnswer: "Mon projet professionnel à long terme est de travailler dans la finance verte, idéalement en tant que consultant aidant les entreprises à intégrer des critères de durabilité dans leurs investissements. Cette vocation m'est venue progressivement. Au lycée, j'étais fasciné par les chiffres et l'économie, ce qui m'a conduit en prépa ECG. En même temps, je suis très sensible aux enjeux environnementaux. J'ai notamment animé un club lycéen sur le développement durable et suivi de près les accords internationaux comme la COP26 et la COP28. En prépa, un de mes sujets d'oral portait sur la responsabilité sociale des entreprises, et ça a fait tilt : j'ai découvert qu'il existait un domaine combinant finance et impact environnemental, la 'finance verte'. L'école que je vise me semble être le tremplin idéal pour ce projet avec sa spécialisation en Finance durable et son Institut du Développement Durable. À court terme, après l'école, je me verrais bien analyste ESG dans un fonds d'investissement. À moyen terme, j'aimerais évoluer vers le conseil en stratégie spécialisé dans la transition écologique. Bien sûr, je reste ouvert à affiner ce projet au fil de mes découvertes pendant ma scolarité.",
        tips: "Structurez votre réponse en 4 parties : annonce claire du projet, explications de vos motivations personnelles, lien avec l'école visée, et planification progressive (court/moyen/long terme). Montrez que vous connaissez le secteur tout en restant humble et flexible."
      },
      {
        id: 'secteur-interet',
        text: "Pourquoi ce secteur d'activité vous intéresse-t-il particulièrement ?",
        exampleAnswer: "Le secteur du conseil en stratégie m'intéresse particulièrement car il combine plusieurs aspects qui me correspondent : la résolution de problèmes complexes, la diversité des missions, et l'apprentissage constant. Ce qui m'attire spécifiquement, c'est l'opportunité d'avoir un impact tangible sur les entreprises tout en développant une vision transversale des enjeux économiques. Mon stage dans une PME m'a fait prendre conscience de l'importance d'un regard extérieur pour optimiser les processus et identifier les opportunités de croissance. J'ai également eu l'occasion d'échanger avec un ancien de votre école qui travaille chez BCG, et son témoignage sur la stimulation intellectuelle et la variété des projets a confirmé mon intérêt. Je suis conscient des exigences du métier en termes de rigueur analytique et de disponibilité, mais ces contraintes sont pour moi le prix à payer pour une carrière aussi enrichissante.",
        tips: "Démontrez une connaissance réelle du secteur au-delà des clichés. Établissez un lien entre vos expériences passées et votre intérêt pour ce domaine. Soyez honnête sur ce qui vous attire tout en montrant que vous êtes conscient des défis."
      },
      {
        id: 'competences-developpement',
        text: "Quelles compétences souhaitez-vous développer pour réaliser votre projet professionnel ?",
        exampleAnswer: "Pour réussir dans le marketing digital appliqué au luxe, je dois développer trois types de compétences. D'abord, des compétences techniques comme la maîtrise des outils d'analytics et du growth hacking, que je compte acquérir via la spécialisation Digital Marketing de votre école et des certifications complémentaires comme Google Analytics. Ensuite, des compétences stratégiques : comprendre les spécificités du marketing de luxe, notamment l'équilibre délicat entre exclusivité et présence digitale. J'ai commencé à me former en suivant des webinaires du Comité Colbert et en lisant des analyses sectorielles. Enfin, des soft skills essentielles comme la créativité et la sensibilité culturelle, que je développe à travers mon engagement dans l'association Arts et Culture de ma prépa et mes voyages. Je suis particulièrement attentif au développement de mon réseau dans ce secteur, raison pour laquelle l'association Luxury Business de votre école m'intéresse tant.",
        tips: "Identifiez 2-3 catégories de compétences précises plutôt qu'une liste vague. Pour chacune, mentionnez comment vous comptez la développer concrètement pendant votre scolarité (cours spécifiques, associations, projets). Montrez que vous avez déjà commencé ce processus de développement."
      },
      {
        id: 'evolution-carriere',
        text: "Comment envisagez-vous l'évolution de votre carrière sur les 10 prochaines années ?",
        exampleAnswer: "J'envisage mon évolution de carrière en trois phases. À court terme (2-3 ans après l'école), je souhaite intégrer une entreprise du CAC40 dans un programme graduate en finance d'entreprise pour acquérir des bases solides et comprendre les enjeux d'un grand groupe. À moyen terme (3-5 ans), mon objectif est d'évoluer vers un poste de responsabilité dans une scale-up ou une entreprise innovante du secteur des énergies renouvelables, idéalement en tant que responsable financier, pour contribuer à la croissance d'une structure plus agile tout en ayant un impact environnemental positif. À long terme (7-10 ans), j'ambitionne soit de créer ma propre entreprise dans le domaine de la transition énergétique, soit d'occuper un poste de direction financière dans une entreprise internationale alignée avec mes valeurs. Cette progression me permettrait de développer à la fois une expertise technique forte et une vision stratégique globale, tout en restant fidèle à mon engagement pour la transition écologique.",
        tips: "Présentez une trajectoire progressive et cohérente, mais pas trop linéaire. Montrez une ambition mesurée et réaliste. Expliquez pourquoi chaque étape est nécessaire pour la suivante et comment elle contribue à votre projet global."
      },
      {
        id: 'apport-ecole',
        text: "En quoi notre école peut-elle vous aider à réaliser votre projet professionnel ?",
        exampleAnswer: "Votre école peut m'aider à réaliser mon projet de carrière dans le conseil en transformation digitale de plusieurs façons complémentaires. Académiquement, la double spécialisation en systèmes d'information et stratégie que vous proposez correspond exactement à mon besoin de développer à la fois une expertise technique et une vision business. J'ai particulièrement repéré le cours 'Digital Disruption' du Professeur Martin qui traite des cas réels de transformation. Sur le plan pratique, votre partenariat avec 15 cabinets de conseil qui recrutent directement sur le campus représente une opportunité exceptionnelle, et le forum Conseil que vous organisez chaque novembre me permettra d'affiner mon projet. Quant à l'aspect réseau, votre communauté de 3000 alumni dans le conseil, dont 450 dans les cabinets que je vise spécifiquement, constitue une ressource inestimable pour obtenir des conseils et saisir des opportunités. Enfin, j'ai remarqué que votre incubateur a déjà lancé 5 startups dans le domaine de la transformation digitale, ce qui pourrait être une voie alternative si je décide de me tourner vers l'entrepreneuriat.",
        tips: "Personnalisez votre réponse avec des détails spécifiques sur l'école visée (cours particuliers, associations, partenariats). Montrez que vous avez fait des recherches approfondies et que votre choix est réfléchi. Liez chaque élément mentionné à une compétence ou opportunité nécessaire pour votre projet."
      },
      {
        id: 'metier-ideal',
        text: "Décrivez le métier idéal tel que vous l'imaginez.",
        optional: true,
        exampleAnswer: "Mon métier idéal combinerait trois dimensions essentielles pour moi. D'abord, un équilibre entre réflexion stratégique et mise en œuvre concrète : j'aime conceptualiser des solutions, mais j'ai besoin de voir leur application réelle. Ensuite, une dimension internationale, avec la possibilité de travailler dans différents contextes culturels, ce qui correspond à mon parcours multiculturel et mon goût pour les langues. Enfin, un impact positif mesurable, idéalement lié à l'innovation sociale ou environnementale. En termes d'environnement de travail, je m'épanouis dans les structures qui valorisent l'autonomie et l'initiative tout en offrant un cadre collaboratif stimulant. Concrètement, je vois le métier de consultant en innovation responsable comme correspondant à ces critères, avec la possibilité d'accompagner diverses organisations dans leur transformation durable tout en conservant une grande diversité de missions.",
        tips: "Décrivez les caractéristiques du métier plutôt que simplement son titre. Concentrez-vous sur l'environnement de travail, les valeurs, les missions et les compétences mobilisées. Évitez les clichés comme 'un métier passionnant et bien rémunéré' et préférez des aspects précis qui vous correspondent vraiment."
      }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Soft skills & équipe',
    questions: [
      {
        id: 'collaboration',
        text: "Donne un exemple concret de collaboration réussie.",
        exampleAnswer: "Lors de mon projet de fin d'études, notre équipe de 5 personnes devait développer une application mobile en seulement 6 semaines. J'ai proposé de mettre en place une méthode Scrum adaptée avec des sprints hebdomadaires et des rôles clairement définis. Malgré nos profils très différents, cette organisation nous a permis de livrer le projet dans les délais avec un feedback très positif du client.",
        tips: "Décrivez précisément votre rôle et votre contribution à cette réussite collective. Mettez en avant les méthodes et outils que vous avez utilisés pour faciliter la collaboration."
      },
      {
        id: 'conflict',
        text: "Comment réagis-tu aux conflits au sein d'un groupe ?",
        exampleAnswer: "Face à un conflit, j'essaie d'abord de comprendre les positions de chacun en pratiquant l'écoute active. Je privilégie ensuite un échange en privé avec les personnes concernées pour éviter l'escalade émotionnelle. Je cherche à identifier les intérêts communs qui peuvent servir de base à une résolution constructive, comme ce fut le cas lors d'un désaccord sur la répartition des tâches dans mon dernier projet d'équipe.",
        tips: "Démontrez votre maturité émotionnelle et votre capacité à transformer les tensions en opportunités d'amélioration. Évitez de montrer que vous fuyez les conflits ou au contraire que vous les recherchez."
      },
      {
        id: 'motivation',
        text: "Quelle stratégie utilises-tu pour rester motivé·e face à un objectif lointain ?",
        optional: true,
        exampleAnswer: "Pour maintenir ma motivation sur le long terme, je décompose les grands objectifs en étapes intermédiaires et je célèbre chaque avancée. Je m'entoure également de personnes qui partagent des ambitions similaires et avec qui je peux échanger régulièrement. Enfin, je garde visible la finalité du projet pour me rappeler pourquoi j'ai commencé et l'impact que j'espère avoir.",
        tips: "Montrez que vous avez une méthode réfléchie pour gérer votre motivation dans la durée. Votre réponse doit refléter votre autodiscipline et votre résilience."
      },
      {
        id: 'team-difficulty',
        text: "Quelle est la chose la plus difficile que tu aies apprise à faire en équipe ?",
        optional: true,
        exampleAnswer: "La chose la plus difficile que j'ai apprise en équipe est de déléguer des tâches importantes et de faire confiance aux autres pour les réaliser. Ayant tendance à vouloir tout contrôler, j'ai dû apprendre à lâcher prise et à valoriser les compétences de chacun. Cette évolution m'a permis de me concentrer sur ma valeur ajoutée et a renforcé la cohésion de l'équipe.",
        tips: "Choisissez une difficulté qui montre votre progression personnelle et votre capacité d'adaptation. Expliquez comment vous avez surmonté ce défi et ce que vous en avez appris."
      },
      {
        id: 'team-solo',
        text: "Préférez-vous travailler seul ou en équipe ?",
        exampleAnswer: "J'apprécie les deux modes de travail pour des raisons différentes. En équipe, j'aime la diversité des perspectives et l'émulation collective qui permet souvent d'atteindre des résultats plus innovants. Le travail individuel me permet quant à lui de me concentrer pleinement et d'avancer rapidement sur des tâches précises. L'idéal pour moi est d'alterner entre ces deux approches selon la nature du travail à accomplir.",
        tips: "Montrez votre flexibilité et votre conscience des avantages de chaque mode. Évitez de marquer une préférence trop nette qui pourrait sembler incompatible avec le poste visé."
      },
      {
        id: 'team-contribution',
        text: "Qu'apportez-vous à une équipe ?",
        exampleAnswer: "J'apporte à une équipe ma capacité à structurer les projets et à maintenir une vision d'ensemble tout en restant attentif aux détails. Je suis également reconnu pour mon rôle de facilitateur dans les discussions, permettant à chacun d'exprimer ses idées et de contribuer pleinement. Lors de mon dernier travail d'équipe, ces qualités ont permis de débloquer une situation complexe et de réorienter efficacement le projet.",
        tips: "Identifiez vos contributions spécifiques qui complètent celles des autres et créent de la valeur collective. Appuyez-vous sur des exemples concrets et des retours que vous avez reçus."
      }
    ]
  },
  {
    id: 'stress',
    title: 'Gestion du stress',
    questions: [
      {
        id: 'stressful-situation',
        text: "Décris une situation stressante récente et ta méthode pour la gérer.",
        exampleAnswer: "Lors de mon dernier stage, j'ai dû reprendre en urgence un projet crucial après le départ imprévu d'un collègue, une semaine avant la présentation au client. Face à cette pression, j'ai d'abord pris un moment pour évaluer précisément l'état du projet et établir un plan d'action réaliste. J'ai ensuite communiqué clairement avec mon manager sur les risques et les solutions envisagées, ce qui a permis de réajuster les attentes du client et de livrer finalement un travail de qualité.",
        tips: "Choisissez une situation professionnelle ou académique significative. Montrez votre méthode de gestion du stress et les résultats obtenus grâce à votre sang-froid."
      },
      {
        id: 'daily-ritual',
        text: "As-tu un rituel quotidien pour maintenir ton équilibre personnel ?",
        optional: true,
        exampleAnswer: "Chaque matin, je consacre 30 minutes à une routine qui combine méditation et activité physique légère, ce qui me permet de commencer la journée avec clarté d'esprit. Le soir, je prends le temps de noter trois réalisations positives de ma journée, quelle que soit leur importance. Ces rituels m'aident à maintenir mon équilibre mental et ma motivation, même pendant les périodes intensives.",
        tips: "Présentez des habitudes concrètes et réalistes qui démontrent votre conscience de l'importance de l'équilibre vie professionnelle-vie personnelle. Expliquez brièvement leur impact sur votre efficacité."
      },
      {
        id: 'urgency-importance',
        text: "Comment différencies-tu urgence et importance dans tes tâches ?",
        optional: true,
        exampleAnswer: "J'utilise la matrice d'Eisenhower pour classifier mes tâches. Je distingue ce qui est urgent (deadline proche) de ce qui est important (impact significatif sur les objectifs). Cette méthode me permet de prioriser les tâches importantes et urgentes, de planifier celles qui sont importantes mais non urgentes, et de déléguer ou simplifier les tâches urgentes mais moins importantes. Cela m'évite de tomber dans le piège de la tyrannie de l'urgence.",
        tips: "Montrez que vous utilisez une méthode structurée de priorisation. Votre réponse doit refléter votre capacité à faire des choix stratégiques et à ne pas vous laisser submerger."
      },
      {
        id: 'stress-management',
        text: "Comment gérez-vous le stress ou les situations de conflit ?",
        exampleAnswer: "Face au stress, j'applique une approche en trois temps : d'abord, j'identifie précisément la source du stress pour éviter de me disperser. Ensuite, je décompose la situation en éléments gérables et je me concentre sur les variables que je peux contrôler. Enfin, je m'assure de maintenir des habitudes saines comme l'activité physique et un sommeil suffisant, ce qui renforce ma résilience globale face au stress.",
        tips: "Montrez que vous avez une méthode réfléchie et éprouvée. Évitez de prétendre que vous ne ressentez jamais de stress, ce qui paraîtrait peu crédible."
      }
    ]
  },
  {
    id: 'projection',
    title: 'Projection & valeurs',
    questions: [
      {
        id: 'five-years',
        text: "Où te vois-tu dans cinq ans ?",
        exampleAnswer: "Dans cinq ans, je me vois avoir développé une expertise reconnue dans mon domaine, idéalement en ayant pris des responsabilités croissantes au sein d'une équipe innovante. J'aspire à contribuer significativement à des projets d'envergure qui ont un impact positif, tout en continuant à développer mes compétences en leadership pour potentiellement encadrer une petite équipe.",
        tips: "Présentez une vision ambitieuse mais réaliste, qui montre votre souhait d'évolution sans paraître présomptueux. Votre projection doit être cohérente avec votre parcours et le poste visé."
      },
      {
        id: 'social-cause',
        text: "Quelle cause ou action sociétale aimerais-tu soutenir ?",
        exampleAnswer: "Je suis particulièrement sensible à l'éducation numérique pour tous. J'aimerais contribuer à réduire la fracture numérique en participant à des initiatives qui permettent aux jeunes de milieux défavorisés d'accéder aux compétences technologiques essentielles aujourd'hui. J'ai d'ailleurs commencé à m'engager comme bénévole dans une association qui organise des ateliers d'initiation à la programmation dans des écoles prioritaires.",
        tips: "Choisissez une cause qui vous touche sincèrement et avec laquelle vous avez déjà un lien, même modeste. Montrez comment cette cause reflète vos valeurs personnelles."
      },
      {
        id: 'new-skill',
        text: "Si tu pouvais développer une seule nouvelle compétence cette année, laquelle choisirais-tu et pourquoi ?",
        optional: true,
        exampleAnswer: "Je choisirais de développer mes compétences en data visualization, car je suis convaincu que la capacité à présenter des données complexes de manière claire et convaincante devient essentielle dans tous les domaines professionnels. Cette compétence me permettrait d'améliorer la prise de décision dans mes projets et de mieux communiquer des insights stratégiques à différentes parties prenantes.",
        tips: "Sélectionnez une compétence qui apporte une réelle valeur ajoutée à votre profil et qui montre votre vision prospective. Expliquez précisément pourquoi cette compétence est stratégique pour vous."
      },
      {
        id: 'quote',
        text: "Quelle citation t'inspire le plus et comment se reflète-t-elle dans tes actions ?",
        optional: true,
        exampleAnswer: "La citation qui m'inspire le plus est celle de Gandhi : 'Sois le changement que tu veux voir dans le monde'. Elle me rappelle que les grandes transformations commencent par des actions individuelles concrètes. Dans mon quotidien, cela se traduit par mon engagement à incarner personnellement les valeurs d'intégrité et d'innovation que je souhaite voir dans mon environnement professionnel.",
        tips: "Choisissez une citation qui reflète authentiquement vos valeurs et votre philosophie de vie. L'important est d'expliquer comment elle influence concrètement vos décisions et actions."
      },
      {
        id: 'core-values',
        text: "Quelles sont les valeurs qui vous tiennent le plus à cœur ?",
        exampleAnswer: "L'intégrité, l'innovation et la bienveillance sont les valeurs qui me guident au quotidien. L'intégrité parce qu'elle est le fondement de relations professionnelles durables basées sur la confiance. L'innovation car je crois en l'amélioration continue et la remise en question constructive. La bienveillance enfin, car je suis convaincu que la performance collective repose sur un environnement où chacun peut s'épanouir et donner le meilleur de lui-même.",
        tips: "Limitez-vous à 2-3 valeurs essentielles que vous pouvez illustrer par des exemples concrets. Ces valeurs doivent être cohérentes avec votre parcours et vos choix passés."
      },
      {
        id: 'happiness',
        text: "Qu'est-ce qui vous rend heureux dans la vie ?",
        exampleAnswer: "Professionnellement, ce qui me rend heureux est le sentiment de progresser continuellement et de relever des défis stimulants. Sur le plan personnel, je trouve mon équilibre dans les moments de partage authentiques avec mes proches et dans la pratique régulière d'activités créatives comme la photographie, qui me permettent de développer un autre regard sur le monde qui m'entoure.",
        tips: "Équilibrez des éléments personnels et professionnels dans votre réponse. Montrez que vous avez une vision claire de ce qui vous épanouit, ce qui reflète une bonne connaissance de vous-même."
      }
    ]
  }
];

// Ajoutons aussi les questions supplémentaires du système, regroupées par catégorie
export const ADDITIONAL_QUESTIONS = {
  introspection: [
    'Comment décririez-vous votre personnalité en trois mots ?',
    'Quelles sont vos principales qualités et vos principaux défauts ?',
    'Quelle est votre plus grande force ?',
    'Quelle est votre plus grande faiblesse ?',
    'De quoi êtes-vous le plus fier dans votre parcours ?',
    'Quel échec vous a le plus appris ?',
    'Comment gérez-vous le stress ou les situations de conflit ?',
    'Quel animal vous représente le mieux, et pourquoi ?',
    'Quel est votre moteur au quotidien ?'
  ],
  motivation: [
    'Pourquoi avez-vous choisi cette voie ou ce projet ?',
    'Quelles sont vos aspirations professionnelles à court, moyen et long terme ?',
    'Où vous voyez-vous dans 5 ou 10 ans ?',
    'Quelles sont les personnes qui vous inspirent, et pourquoi ?',
    "Qu'est-ce qui vous motive à vous lever chaque matin ?",
    'Quel impact souhaitez-vous avoir dans votre domaine ou votre environnement ?'
  ],
  interpersonal: [
    'Préférez-vous travailler seul ou en équipe ?',
    'Comment réagissez-vous face à une critique constructive ?',
    'Comment vous assurez-vous de la réussite de vos collègues ?',
    'Comment décririez-vous votre capacité à communiquer avec les autres ?',
    "Qu'apportez-vous à une équipe ?",
    'Comment gérez-vous les conflits ou les tensions ?'
  ],
  creative: [
    'Si vous aviez une baguette magique, que feriez-vous ?',
    'Associez un animal à chaque membre de votre famille ou de votre équipe.',
    'Faites-nous rire avec une anecdote personnelle.',
    'Quel superpouvoir aimeriez-vous avoir, et pourquoi ?',
    'Si vous étiez un objet, lequel seriez-vous ?'
  ],
  values: [
    'Quelles sont les valeurs qui vous tiennent le plus à cœur ?',
    'Comment prenez-vous des décisions importantes ?',
    "Quel dilemme moral avez-vous déjà rencontré, et comment l'avez-vous résolu ?",
    "Comment réagissez-vous face à l'injustice ou à l'échec ?",
    "Qu'est-ce qui vous rend heureux dans la vie ?"
  ],
  projection: [
    "Parlez-moi d'une expérience où vous avez dû relever un défi.",
    'Comment réagiriez-vous si vous deviez travailler sur un projet qui ne vous passionne pas ?',
    "Comment vous adaptez-vous à un environnement ou à une culture d'entreprise différente ?",
    'Décrivez une situation où vous avez dû prendre une décision difficile.',
    'Comment gérez-vous les imprévus ou les changements de dernière minute ?'
  ]
};

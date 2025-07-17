
import React from 'react';
import { TestimonialCard } from '../TestimonialCard';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à demystifier python, qui était au départ, un gros point faible. Grâce à lui, je suis plus confiante pour traiter les questions python !",
      name: "Léa",
      role: "Etudiante deuxième année",
      initials: "LÉ"
    },
    {
      quote: "J'étais en difficulté en mathématiques. Mais grâce à l'accompagnement et aux explications bien adaptées, j'ai commencé à voir une vraie différence. Merci mille fois pour ton aide, Dimitar, et ta méthode de travail.",
      name: "Victoire",
      role: "Étudiante à ESCP",
      initials: "VI"
    },
    {
      quote: "L'un de mes (brillants) anciens élèves à l'époque où j'enseignais les maths en prépa HEC. Dans ma matière, ses méthodes de travail étaient très efficaces. Je pense qu'il peut être de très bon conseil !",
      name: "Frédéric Broassard",
      role: "Ancien professeur de mathématiques",
      initials: "FB"
    }
  ];

  return (
    <section className="py-16 px-4 bg-accent">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12">
          Ce que nos étudiants disent
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

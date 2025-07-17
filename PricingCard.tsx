
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: PricingFeature[];
  ctaText: string;
  ctaLink: string;
  recommended?: boolean;
  subText?: string;
  variant?: "default" | "premium";
  external?: boolean;
  isCalendly?: boolean;
}

export const PricingCard = ({
  title,
  price,
  period,
  features,
  ctaText,
  ctaLink,
  recommended = false,
  subText,
  variant = "default",
  external = false,
  isCalendly = false
}: PricingCardProps) => {
  const isPremium = variant === "premium";

  const CardAction = () => {
    if (isCalendly) {
      return (
        <Link to="/calendar" className="block w-full">
          <Button variant={isPremium ? "default" : "outline"} className="w-full">
            {ctaText}
          </Button>
        </Link>
      );
    } else if (external) {
      return (
        <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button variant={isPremium ? "default" : "outline"} className="w-full">
            {ctaText}
          </Button>
        </a>
      );
    }

    return (
      <Link to={ctaLink}>
        <Button variant={isPremium ? "default" : "outline"} className="w-full">
          {ctaText}
        </Button>
      </Link>
    );
  };

  return (
    <Card className={`${isPremium ? 'bg-primary/5 border-primary dark:bg-primary/10' : 'bg-card border-border'}`}>
      <CardContent className="p-6">
        {recommended && (
          <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-2 rounded inline-block mb-2">
            Recommandé
          </div>
        )}
        <h3 className="card-heading mb-2 text-center text-card-foreground">{title}</h3>
        <p className="text-2xl font-bold text-center mb-6 text-card-foreground">
          {price}
          {period && <span className="text-base font-normal text-muted-foreground">{period}</span>}
        </p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span className="text-card-foreground">{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <CardAction />
        
        {subText && <p className="text-center text-sm text-muted-foreground mt-2">{subText}</p>}
      </CardContent>
    </Card>
  );
};

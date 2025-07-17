
import React, { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="card-heading mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

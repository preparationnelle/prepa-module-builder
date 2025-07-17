
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const TestimonialCard = ({ quote, name, role, initials }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4 italic">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className="mr-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-700 font-semibold">{initials}</span>
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};


import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

// Define the Calendly interface for type safety
interface Calendly {
  initInlineWidget: (config: {
    url: string;
    parentElement: HTMLElement;
    prefill?: Record<string, unknown>;
    utm?: Record<string, unknown>;
    hideEventTypeDetails?: boolean;
    hideLandingPageDetails?: boolean;
    primaryColor?: string;
  }) => void;
  showPopupWidget: (url: string) => void;
}

interface CalendlyPopupOptions {
  url: string;
  prefill?: Record<string, unknown>;
  customData?: Record<string, unknown>;
  utm?: Record<string, unknown>;
  hideEventTypeDetails?: boolean;
  hideGdprBanner?: boolean;
  hideLandingPageDetails?: boolean;
  hideGuestFields?: boolean;
  parentElement?: HTMLElement;
  primaryColor?: string;
}

declare global {
  interface Window {
    Calendly?: Calendly & {
      initPopupWidget: (options: CalendlyPopupOptions) => void;
    };
  }
}

const FullCalendarPage = () => {
  const calendlyInlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Calendly script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly && calendlyInlineRef.current) {
        // Use initInlineWidget instead of initPopupWidget with hideGdprBanner
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/preparationnelle/30min',
          parentElement: calendlyInlineRef.current,
          prefill: {},
          utm: {},
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '#FF6A00',
        });
      }
    };

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Introduction Section with Vimeo Video */}
      <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-4">Coaching Personnalisé</h1>
          <p className="text-lg text-gray-700 mb-6">
            Transformez votre préparation avec un accompagnement sur-mesure qui répond à vos besoins spécifiques.
            Réservez votre session de coaching ci-dessous pour maximiser vos chances de réussite.
          </p>
          
          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
            <iframe 
              src="https://player.vimeo.com/video/1081049890" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              className="w-full h-[400px] rounded-lg shadow-md"
            ></iframe>
          </div>
          
          <div className="flex items-center justify-center bg-primary/5 p-4 rounded-lg mb-6">
            <GraduationCap className="text-primary mr-3 h-6 w-6" />
            <p className="font-medium">
              Les sessions de coaching sont conçues pour vous aider à maîtriser l'art de l'entretien de personnalité
            </p>
          </div>
        </div>
      </div>
      
      {/* Calendly Widget */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Réservez votre session</h2>
          <p className="text-gray-700 mb-6">
            Sélectionnez une date et un horaire qui vous conviennent pour votre session de coaching personnalisée.
          </p>
        </div>
        <div 
          ref={calendlyInlineRef}
          className="w-full"
          style={{ height: '700px' }}
        ></div>
      </div>
    </div>
  );
};

export default FullCalendarPage;

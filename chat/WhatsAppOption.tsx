
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const WhatsAppOption = () => {
  useEffect(() => {
    // Redirect to WhatsApp automatically
    window.open('https://wa.me/33609164668?text=Bonjour%2C+j%27ai+une+question+sur+les+oraux+Prépa+Rationnelle', '_blank');
  }, []);

  return (
    <div className="flex flex-col items-center p-4 text-center">
      <h3 className="text-xl font-medium mb-2">Redirection vers WhatsApp</h3>
      <p className="mb-4">Tu vas être redirigé vers WhatsApp pour discuter avec l'équipe Prépa Rationnelle.</p>
      <Button 
        onClick={() => window.open('https://wa.me/33609164668?text=Bonjour%2C+j%27ai+une+question+sur+les+oraux+Prépa+Rationnelle', '_blank')}
      >
        Ouvrir WhatsApp
      </Button>
    </div>
  );
};

export default WhatsAppOption;


import React from 'react';

export const CallToActionSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary to-orange-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à exceller en prépa ?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez des centaines d'étudiants qui ont amélioré leur performance de personnalité grâce à Prepa Rationnelle.
        </p>
        {/* Lien ancre vers la section contact */}
        <a href="/contact" /* ou simplement "#contact" si c'est sur la même page */>
          <button
            className="bg-white text-primary hover:bg-gray-100 hover:text-primary px-8 py-4 text-lg font-bold rounded-lg shadow transition"
            style={{ minWidth: 260 }}
          >
            Commencer maintenant
          </button>
        </a>
      </div>
    </section>
  );
};

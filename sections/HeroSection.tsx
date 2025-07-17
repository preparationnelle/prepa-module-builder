import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrendingUp, Zap } from 'lucide-react';
export const HeroSection = () => {
  return <section className="min-h-[78vh] w-full flex flex-col justify-center items-center bg-gradient-to-br from-[#fef7e1] to-[#F36C00]/10 py-14 px-2">
      <div className="w-full max-w-[1600px] flex flex-col items-center">
        {/* Top links, spread and larger */}
        <div className="mb-12 flex flex-col gap-4 items-center">
          <div className="flex items-center">
            <TrendingUp className="h-7 w-7 text-[#F36C00] mr-3" />
            <Link to="/methodologie/entretiens-personnalite" className="text-2xl md:text-2xl font-bold text-[#F36C00] uppercase tracking-widest hover:underline" style={{
            letterSpacing: 2
          }}>
              PRÉPAREZ VOTRE ENTRETIEN
            </Link>
          </div>
          <div className="flex items-center">
            <Zap className="h-7 w-7 text-[#F36C00] mr-3" />
            <Link to="/generator" className="text-2xl md:text-2xl font-bold text-[#F36C00] uppercase tracking-widest hover:underline" style={{
            letterSpacing: 2
          }}>
              PRÉPAREZ VOS ÉCRITS AVEC IA
            </Link>
          </div>
        </div>
        {/* Massive Heading */}
        <h1 className="text-[2.8rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[6vw] xl:text-[106px] font-extrabold text-[#F36C00] text-center mb-12 leading-[1.06] w-full" style={{
        wordBreak: 'keep-all',
        maxWidth: '100%'
      }}>
          Prepa Rationnelle
        </h1>
        {/* Large subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl max-w-[1000px] text-[#252523] text-center mb-14 font-normal leading-[1.35] w-full">
          Étudiants en classe prépa ECG ? Maximisez vos chances d'intégrer <span className="font-bold">le top 5</span> grâce à l'IA et aux{" "}
          <a href="https://calendly.com/preparationnelle/30min?month=2025-07" target="_blank" rel="noopener noreferrer" className="font-bold underline text-[#F36C00] hover:text-[#c95400] transition">
            cours particuliers sur‑mesure
          </a>.
        </p>
        {/* Buttons spaced out on all sizes */}
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-[1000px] mt-2">
          <Link to="/register" className="flex-1 md:flex-none">
            <Button size="lg" className="w-full md:w-auto px-8 py-6 bg-[#F36C00] text-white font-bold text-xl rounded-lg shadow-none hover:bg-[#e66200] transition border-0" style={{
            boxShadow: "0 2px 14px rgba(243,108,0,0.09)"
          }}>
              Commencer gratuitement
            </Button>
          </Link>
          <Link to="/login" className="flex-1 md:flex-none">
            <Button variant="outline" size="lg" className="w-full md:w-auto px-8 py-6 text-[#F36C00] border border-[#F8B96A] bg-white hover:bg-[#FFF4E7] hover:border-[#F36C00] hover:text-[#db5e00] font-bold text-xl rounded-lg shadow-none transition" style={{
            boxShadow: "0 2px 12px rgba(243,108,0,0.06)"
          }}>
              Se connecter
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
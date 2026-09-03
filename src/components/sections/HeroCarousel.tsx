"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/images/hero/imag1-hero.jpg",
  "/images/hero/imag-2-hero.jpg",
  "/images/hero/imag-3-hero.jpg",
  "/images/hero/imag-4-hero.jpg",
  "/images/hero/imag-5-hero.jpg",
  "/images/hero/imag-6-hero.jpg",
  "/images/hero/imag-7-hero.jpg",
  "/images/hero/imag-8-hero.jpg",
  "/images/hero/imag-9-hero.jpg",
  "/images/hero/imag-10-hero.jpg",
  "/images/hero/imag-11-hero.jpg",
  "/images/hero/imag-12-hero.jpg",
  "/images/hero/imag-13-hero.jpg",
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 flex items-center min-h-screen bg-black overflow-hidden w-full">
      {/* Carousel Images - next/image optimisé */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Image
            key={slide}
            src={slide}
            alt="Gestion Immobilière de l'Estrie"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out absolute inset-0 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-20"></div>
      </div>
      
      <div className="relative z-30 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <p className="font-label-md text-accent-gold-dark tracking-widest uppercase mb-4">
            Immeubles locatifs & copropriétés · Sherbrooke et toute l'Estrie
          </p>
          <h1 className="font-display-lg text-display-lg md:text-5xl text-white mb-6">
            La tranquillité d'esprit pour vos immeubles, à faible coût.
          </h1>
          <p className="font-body-lg text-body-lg text-inverse-on-surface mb-10 opacity-90 max-w-2xl">
            Une gestion humaine et personnalisée de vos immeubles locatifs et de
            vos syndicats de copropriété. Un centre d'appel situé au Québec
            assure la réponse en tout temps, 24 h sur 24.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              className="bg-accent-gold-dark hover:bg-[#B39748] text-white font-label-md text-label-md px-8 py-4 rounded-lg transition-colors text-center shadow-lg inline-flex items-center justify-center gap-2"
              href="#soumission"
            >
              Obtenir une soumission
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-label-md text-label-md px-8 py-4 rounded-lg transition-colors text-center inline-flex items-center justify-center"
              href="#services"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Dots — discrets, bas du hero */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-2 h-2 bg-white" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll Button */}
      <div className="absolute bottom-8 right-8 md:right-16 z-30">
        <a
          href="#services"
          className="relative flex items-center justify-center w-32 h-32 group"
          aria-label="Défiler vers les services"
        >
          {/* Animated circular text */}
          <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite] text-white opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
            <path
              id="textPath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="transparent"
            />
            <text className="text-[11px] font-bold fill-current tracking-[0.2em] uppercase">
              <textPath href="#textPath" startOffset="0%">
                Défilez pour explorer • Défilez pour explorer • 
              </textPath>
            </text>
          </svg>
          {/* Center Arrow */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:translate-y-1">
            <span className="material-symbols-outlined text-white text-3xl">arrow_downward</span>
          </div>
        </a>
      </div>
    </div>
  );
}

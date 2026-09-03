"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-slate-800/60 hover:bg-slate-700 backdrop-blur-sm border border-white/10 flex items-center justify-center group transition-all hover:scale-105 shadow-lg"
    >
      {/* Texte circulaire qui tourne — même structure que DÉFILEZ POUR EXPLORER */}
      <svg
        className="absolute w-full h-full animate-[spin_12s_linear_infinite] text-white/80 group-hover:text-white transition-colors"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path
          id="scrollTopPath"
          d="M 50, 50 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
          fill="transparent"
        />
        <text className="text-[6.5px] font-bold fill-current tracking-[0.16em] uppercase">
          <textPath href="#scrollTopPath" startOffset="0%">
            REMONTER • REMONTER • REMONTER • REMONTER •
          </textPath>
        </text>
      </svg>
      {/* Flèche fixe au centre — NE tourne PAS, pointe vers le haut */}
      <span className="material-symbols-outlined text-white text-[20px] leading-none">arrow_upward</span>
    </button>
  );
}

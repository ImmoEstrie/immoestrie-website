"use client";

import { useState, useEffect } from "react";

export default function WhyUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const reasons = [
    {
      num: "01",
      icon: "shield",
      title: "Réactivité 24h/24",
      desc: "Notre équipe est toujours prête à intervenir, jour et nuit, pour assurer la sécurité de vos locataires et la pérennité de vos immeubles.",
    },
    {
      num: "02",
      icon: "location_city",
      title: "Expertise locale (Estrie)",
      desc: "Profondément enracinés à Sherbrooke et dans toute l'Estrie, nous connaissons le marché local et ses spécificités sur le bout des doigts.",
    },
    {
      num: "03",
      icon: "payments",
      title: "Transparence financière",
      desc: "Recevez des rapports mensuels détaillés et clairs. Chaque dépense est justifiée, chaque revenu est tracé pour une tranquillité d'esprit totale.",
    },
  ];

  return (
    <div className="py-24 bg-surface w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-16">
          <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight uppercase">
            <span className="text-black">POURQUOI NOUS</span><br />
            <span className="text-primary">CHOISIR ?</span>
          </h2>
        </div>

        {/* DESKTOP : Accordion */}
        {!isMobile && (
          <div className="flex h-accordion shadow-[0_4px_20px_rgba(27,43,75,0.05)] rounded-2xl bg-surface-container-low p-2">
            {reasons.map((r, i) => (
              <div key={i} className="h-accordion-panel group min-w-[90px]">
                <div className="h-accordion-collapsed-content">
                  <span className="font-headline-md text-3xl text-primary font-bold mb-8 group-hover:text-white transition-colors">
                    {r.num}
                  </span>
                  <span className="font-headline-md text-2xl text-primary vertical-text tracking-wide group-hover:text-white transition-colors">
                    {r.title}
                  </span>
                </div>
                <div className="h-accordion-active-content relative overflow-hidden">
                  <span className="absolute right-[-20px] bottom-[-40px] font-display-lg text-[200px] text-white/5 leading-none select-none">
                    {r.num}
                  </span>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10">
                    <span className="material-symbols-outlined text-accent-dark text-[36px]">
                      {r.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-3xl text-white mb-6 relative z-10">
                    {r.title}
                  </h3>
                  <p className="font-body-lg text-body-lg text-inverse-on-surface/90 relative z-10 max-w-sm">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MOBILE : Cartes blanches */}
        {isMobile && (
          <div className="flex flex-col gap-8">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(27,43,75,0.05)] border border-surface-variant"
              >
                <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-accent-gold-dark text-[36px]">
                    {r.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-4">
                  {r.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Comment gérez-vous les urgences locatives ?",
      a: "Nous disposons d'une ligne d'urgence ouverte 24h/24 et 7j/7. En cas de bris majeur (dégât d'eau, panne de chauffage), notre équipe d'intervention rapide est déployée immédiatement.",
    },
    {
      q: "Quels sont vos frais de gestion ?",
      a: "Nos tarifs sont compétitifs et transparents. Ils varient selon le nombre d'unités et les services choisis. Contactez-nous pour une soumission gratuite et détaillée.",
    },
    {
      q: "Comment sélectionnez-vous les locataires ?",
      a: "Nous effectuons des enquêtes de crédit complètes, des vérifications d'antécédents criminels et consultons les références des anciens propriétaires et employeurs pour nous assurer de la fiabilité des locataires.",
    },
    {
      q: "Comment se passe la résiliation du contrat ?",
      a: "Nous croyons à la qualité de notre service. Nos contrats prévoient des modalités de résiliation claires avec un préavis raisonnable, sans frais cachés si vous décidez de reprendre la gestion.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 bg-surface-container-low w-full">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <h2 className="font-display-lg text-[3.5rem] md:text-[4.5rem] leading-[1.1] tracking-wide text-left">
            <span className="text-black">QUESTIONS</span><br />
            <span className="text-primary">FRÉQUENTES</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(27,43,75,0.05)] overflow-hidden border border-surface-variant"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-headline-md text-lg text-primary">
                  {faq.q}
                </span>
                <span className={`material-symbols-outlined text-on-surface-variant transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div
                className={`px-6 pb-4 pt-2 border-t border-surface-variant transition-all overflow-hidden ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent py-0"
                }`}
              >
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

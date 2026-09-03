"use client";

// StatsBar statique — deux bandes inclinées sans défilement (T2)
// Texte corrigé : "100+ PORTES GÉRÉES" (T6)
export default function StatsBar() {
  const topItems = (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-6 py-3 md:py-4">
      {[
        "PLUS DE 10 ANS D\u2019EXPÉRIENCE",
        "DISPONIBLE 24/7",
        "PLUS DE 10 ANS D\u2019EXPÉRIENCE",
        "DISPONIBLE 24/7",
      ].map((text, i) => (
        <span
          key={i}
          className="flex items-center shrink-0 text-white font-semibold text-xs md:text-sm tracking-widest uppercase"
        >
          {text}
          {i % 2 === 0 && <span className="mx-3 md:mx-4 opacity-70">→</span>}
        </span>
      ))}
    </div>
  );

  const bottomItems = (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-6 py-3 md:py-4">
      {[
        "500+ PORTES GÉRÉES",
        "100+ PORTES GÉRÉES",
        "500+ PORTES GÉRÉES",
        "100+ PORTES GÉRÉES",
      ].map((text, i) => (
        <span
          key={i}
          className="flex items-center shrink-0 text-white font-semibold text-xs md:text-sm tracking-widest uppercase"
        >
          {text}
          {i % 2 === 0 && <span className="mx-3 md:mx-4 opacity-70">→</span>}
        </span>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-16">
      <div className="relative w-full space-y-1 -rotate-[0.5deg]">
        {/* Bande dorée */}
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#e6c364] to-[#C9A84C] shadow-sm">
          {topItems}
        </div>

        {/* Bande bleue */}
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#091b3a] to-[#1B2B4B] shadow-sm">
          {bottomItems}
        </div>
      </div>
    </section>
  );
}
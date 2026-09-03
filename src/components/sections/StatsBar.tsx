"use client";

import { useEffect, useRef } from "react";

export default function StatsBar() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let direction = 1;
    let percentTop = 0;
    let percentBottom = -50;
    let reqId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      direction = currentScrollY < lastScrollY ? -1 : 1;
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const loop = () => {
      const speed = 0.015;
      percentTop -= speed * direction;
      percentBottom += speed * direction;

      if (percentTop <= -50) percentTop += 50;
      if (percentTop > 0) percentTop -= 50;

      if (percentBottom >= 0) percentBottom -= 50;
      if (percentBottom < -50) percentBottom += 50;

      if (topRef.current) topRef.current.style.transform = `translateX(${percentTop}%)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${percentBottom}%)`;

      reqId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(reqId);
    };
  }, []);

  const topItems = [...Array(8)].map((_, i) => (
    <span
      key={i}
      className="px-5 flex items-center shrink-0 text-white font-semibold text-xs md:text-sm tracking-widest uppercase"
    >
      PLUS DE 10 ANS D&apos;EXPÉRIENCE
      <span className="mx-2 opacity-70">→</span>
      DISPONIBLE 24/7
    </span>
  ));

  const bottomItems = [...Array(8)].map((_, i) => (
    <span
      key={i}
      className="px-5 flex items-center shrink-0 text-white font-semibold text-xs md:text-sm tracking-widest uppercase"
    >
      500+ PORTES GÉRÉES
      <span className="mx-2 opacity-70">→</span>
      98% DE CLIENTS SATISFAITS
    </span>
  ));

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-16">
      {/* Inclinaison quasi nulle : 0.5deg seulement, pas d'effet de croix */}
      <div className="relative w-full space-y-1 -rotate-[0.5deg]">
        {/* Bande dorée */}
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#e6c364] to-[#C9A84C] shadow-sm">
          <div className="py-3 md:py-4">
            <div ref={topRef} className="flex whitespace-nowrap will-change-transform w-max">
              <div className="flex">{topItems}</div>
              <div className="flex">{topItems}</div>
            </div>
          </div>
        </div>

        {/* Bande bleue */}
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#091b3a] to-[#1B2B4B] shadow-sm">
          <div className="py-3 md:py-4">
            <div ref={bottomRef} className="flex whitespace-nowrap will-change-transform w-max">
              <div className="flex">{bottomItems}</div>
              <div className="flex">{bottomItems}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
      // direction: 1 for normal (down), -1 for reverse (up)
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

  const topItems = [...Array(10)].map((_, i) => (
    <span key={i} className="px-6 flex items-center shrink-0 text-white font-bold text-sm md:text-xl tracking-wider uppercase">
      PLUS DE 10 ANS D'EXPÉRIENCE <span className="mx-3">→</span> DISPONIBLE 24/7
    </span>
  ));

  const bottomItems = [...Array(10)].map((_, i) => (
    <span key={i} className="px-6 flex items-center shrink-0 text-white font-bold text-sm md:text-xl tracking-wider uppercase">
      500+ PORTES GÉRÉES <span className="mx-3">→</span> 98% DE CLIENTS SATISFAITS
    </span>
  ));

  return (
    <div className="relative h-[200px] md:h-[250px] overflow-hidden bg-white flex items-center justify-center w-full mt-12 mb-8">
      <div className="absolute inset-0 flex items-center justify-center w-full">
        {/* Top Ribbon (Gold) */}
        <div className="absolute w-[120%] bg-gradient-to-r from-[#e6c364] to-[#C9A84C] -rotate-3 md:-rotate-6 transform shadow-lg z-20 flex items-center h-16 md:h-20 overflow-hidden">
          <div ref={topRef} className="flex whitespace-nowrap will-change-transform w-max">
            <div className="flex">{topItems}</div>
            <div className="flex">{topItems}</div>
          </div>
        </div>
        
        {/* Bottom Ribbon (Navy) */}
        <div className="absolute w-[120%] bg-gradient-to-r from-[#091b3a] to-[#1B2B4B] border-y-2 border-accent-gold-dark rotate-3 md:rotate-6 transform shadow-md z-10 flex items-center h-16 md:h-20 overflow-hidden">
          <div ref={bottomRef} className="flex whitespace-nowrap will-change-transform w-max">
            <div className="flex">{bottomItems}</div>
            <div className="flex">{bottomItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

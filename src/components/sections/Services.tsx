'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';

const services = [
  {
    badge: 'SERVICE 01',
    number: '01',
    icon: 'description',
    title: 'Gestion Administrative',
    desc: "Perception des loyers, traitement des demandes 24h/24, location des logements vacants, renouvellement des baux, négociation des augmentations, relevés 31, dossiers au TAL.",
  },
  {
    badge: 'SERVICE 02',
    number: '02',
    icon: 'payments',
    title: 'Gestion Financière',
    desc: "Relevés 31, paiement des fournisseurs, rapports financiers mensuels, documents pour les impôts.",
  },
  {
    badge: 'SERVICE 03',
    number: '03',
    icon: 'build',
    title: 'Entretien et Maintenance',
    desc: "Entretien bâtiment/terrain, tonte du gazon, négociation des soumissions, travaux mineurs et majeurs.",
  },
  {
    badge: 'SERVICE 04',
    number: '04',
    icon: 'trending_up',
    title: 'Optimisation Locative',
    desc: "Recommandations personnalisées (ex. ajout du Wi-Fi dans l'immeuble), mise en place des stratégies choisies.",
  },
];

const cardStyles = [
  {
    bg: 'bg-[#1a2744]',
    text: 'text-white',
    subtext: 'text-white/80',
    badge: 'bg-white/10 text-white border border-white/15',
    iconWrap: 'bg-white/10 text-white border border-white/10',
    number: 'text-white',
  },
  {
    bg: 'bg-[#fdfbf7]',
    text: 'text-[#1a2744]',
    subtext: 'text-[#1a2744]/60',
    badge: 'bg-[#1a2744]/5 text-[#1a2744] border border-[#1a2744]/10',
    iconWrap: 'bg-[#1a2744] text-white',
    number: 'text-[#1a2744]',
  },
  {
    bg: 'bg-primary',
    text: 'text-white',
    subtext: 'text-white/90',
    badge: 'bg-white/15 text-white border border-white/20',
    iconWrap: 'bg-white text-primary',
    number: 'text-white',
  },
  {
    bg: 'bg-accent-gold-dark',
    text: 'text-[#1a2744]',
    subtext: 'text-[#1a2744]/75',
    badge: 'bg-[#1a2744]/10 text-[#1a2744] border border-[#1a2744]/15',
    iconWrap: 'bg-[#1a2744] text-accent-gold-dark',
    number: 'text-[#1a2744]',
  },
];

function ServiceCard({
  service,
  style,
  index,
  total,
  progress,
}: {
  service: (typeof services)[number];
  style: (typeof cardStyles)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const inputStart = (index - 1) / total;
  const inputEnd = index / total;

  const y = useTransform(progress, [inputStart, inputEnd], ['100%', '0%']);

  const scaleStart = index / total;
  const scaleEnd = (index + 1) / total;
  const scale = useTransform(
    progress,
    [scaleStart, Math.min(scaleEnd, 1)],
    [1, 0.95]
  );

    return (
    <motion.div
      style={{
        y: index === 0 ? '0%' : y,
        scale: index === total - 1 ? 1 : scale,
        zIndex: index + 1,
        willChange: 'transform',
      }}
      className={`
        absolute inset-0
        overflow-hidden rounded-[2rem] p-7 lg:p-8
        flex flex-col
        shadow-[0_8px_40px_rgba(0,0,0,0.18)]
        ${style.bg}
      `}
    >
      <span
        aria-hidden="true"
        className={`
          absolute bottom-2 right-6
          font-extrabold text-[140px] leading-none
          select-none pointer-events-none
          ${style.number} opacity-[0.07]
        `}
      >
        {service.number}
      </span>

      {/* Badge + icône : restent en haut de la carte */}
      <div className="flex items-start justify-between gap-4 relative z-10">
        <span className={`
          inline-flex items-center px-3.5 py-1.5
          rounded-full text-[11px] font-bold tracking-[0.14em] uppercase
          ${style.badge}
        `}>
          {service.badge}
        </span>
        <div className={`
          w-13 h-13 rounded-full
          flex items-center justify-center shrink-0
          ${style.iconWrap}
        `}>
          <span className="material-symbols-outlined text-[26px]">
            {service.icon}
          </span>
        </div>
      </div>

      {/* Titre + description : centrés verticalement dans l'espace restant de la carte */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-3">
        <h3 className={`text-[2rem] leading-[1.15] font-bold tracking-tight ${style.text}`}>
          {service.title}
        </h3>
        <p className={`text-[15px] leading-relaxed max-w-[34ch] ${style.subtext}`}>
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

const FADE_BUFFER = 120;

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ top: 0, height: 0, wh: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setDimensions({
          top: rect.top + window.scrollY,
          height: sectionRef.current.offsetHeight,
          wh: window.innerHeight,
        });
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollY } = useScroll();

  const progress = useTransform(
    scrollY,
    [dimensions.top, dimensions.top + dimensions.height - dimensions.wh],
    [0, 1]
  );

  const opacity = useTransform(
    scrollY,
    [
      dimensions.top - FADE_BUFFER,
      dimensions.top,
      dimensions.top + dimensions.height - dimensions.wh,
      dimensions.top + dimensions.height - dimensions.wh + FADE_BUFFER,
    ],
    [0, 1, 1, 0]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const active =
      latest >= dimensions.top - FADE_BUFFER &&
      latest <= dimensions.top + dimensions.height - dimensions.wh + FADE_BUFFER;
    setIsActive(active);
  });

  return (
    <>
      {/* ═════ DESKTOP ═════ */}
      <div className="hidden lg:block">
        <div
          ref={sectionRef}
          className="relative w-full"
          style={{ height: `${services.length * 100}vh` }}
        />

        <motion.div
          style={{ opacity, pointerEvents: isActive ? 'auto' : 'none' }}
          className="fixed inset-0 z-50"
        >
          {isActive && (
            <div className="h-full flex items-center pointer-events-auto bg-white">
              <div className="max-w-7xl mx-auto px-8 w-full">
              <div className="grid grid-cols-2 gap-16 items-center">

                {/* Gauche */}
                <div>
                  {/* Même couleur que "ESPACE LOCATAIRES" (bleu marine foncé) */}
                  <p className="text-sm uppercase tracking-[0.18em] text-[#1a2744] font-bold mb-5">
                    NOS SERVICES
                  </p>
                  <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                    <span className="text-[#0d1117]">Une gestion complète,</span>
                    <br />
                    <span className="text-primary">du loyer à l&apos;entretien.</span>
                  </h2>
                  {/* Texte agrandi légèrement */}
                  <p className="text-[#0d1117]/60 mt-6 leading-relaxed max-w-[44ch] text-[17px] md:text-[18px]">
                    De la perception des loyers à l&apos;entretien de vos
                    bâtiments, nous prenons en charge chaque aspect de la
                    gestion de vos immeubles — pour que vous n&apos;ayez
                    plus qu&apos;à profiter des résultats.
                  </p>
                  <div className="w-14 h-[3px] bg-accent-gold-dark mt-8 rounded-full" />
                  <div className="mt-8">
                    <span className="text-4xl md:text-5xl font-bold text-primary">100+</span>
                    <p className="text-sm md:text-base text-on-surface-variant mt-1">
                      portes gérées
                    </p>
                  </div>
                </div>

                {/* Droite : stack de cartes */}
                <div
                  className="relative overflow-hidden rounded-[2rem]"
                  style={{ height: '68vh' }}
                >
                  {services.map((service, i) => (
                    <ServiceCard
                      key={service.badge}
                      service={service}
                      style={cardStyles[i]}
                      index={i}
                      total={services.length}
                      progress={progress}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}
        </motion.div>
      </div>

      {/* ═════ MOBILE (inchangé, sauf contenu centré + couleur label) ═════ */}
      <div className="lg:hidden w-full bg-surface-container-lowest px-margin-mobile py-16">
        <p className="text-sm uppercase tracking-[0.18em] text-[#1a2744] font-bold mb-4">
          NOS SERVICES
        </p>
        <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
          <span className="text-[#0d1117]">Une gestion complète,</span>
          <br />
          <span className="text-primary">du loyer à l&apos;entretien.</span>
        </h2>
        <p className="text-[#0d1117]/60 leading-relaxed text-[16px] md:text-[17px]">
          De la perception des loyers à l&apos;entretien de vos bâtiments, nous
          prenons en charge chaque aspect de la gestion de vos immeubles.
        </p>
        <div className="w-14 h-[3px] bg-accent-gold-dark mt-6 rounded-full" />
        <div className="mt-6 mb-10">
          <span className="text-4xl font-bold text-primary">100+</span>
          <p className="text-sm text-on-surface-variant mt-1">
            portes gérées
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {services.map((service, i) => {
            const s = cardStyles[i];
            return (
              <div
                key={service.badge}
                className={`relative overflow-hidden rounded-[1.5rem] p-7 flex flex-col gap-5 shadow-md ${s.bg}`}
              >
                <span aria-hidden="true" className={`absolute bottom-1 right-4 font-extrabold text-[96px] leading-none select-none pointer-events-none ${s.number} opacity-[0.07]`}>
                  {service.number}
                </span>
                <div className="flex items-start justify-between gap-3 relative z-10">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase ${s.badge}`}>
                    {service.badge}
                  </span>
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${s.iconWrap}`}>
                    <span className="material-symbols-outlined text-[22px]">{service.icon}</span>
                  </div>
                </div>
                <div className="relative z-10 flex-1 flex flex-col justify-center gap-2">
                  <h3 className={`text-[1.5rem] leading-[1.2] font-bold tracking-tight ${s.text}`}>
                    {service.title}
                  </h3>
                  <p className={`text-[14px] leading-relaxed ${s.subtext}`}>
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
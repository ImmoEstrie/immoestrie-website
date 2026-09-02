export default function Services() {
  const services = [
    {
      badge: "SERVICE 01",
      number: "01",
      icon: "description",
      title: "Gestion Administrative",
      desc: "Perception des loyers, traitement des demandes 24h/24, location des logements vacants, renouvellement des baux, négociation des augmentations, relevés 31, dossiers au TAL.",
    },
    {
      badge: "SERVICE 02",
      number: "02",
      icon: "payments",
      title: "Gestion Financière",
      desc: "Relevés 31, paiement des fournisseurs, rapports financiers mensuels, documents pour les impôts.",
    },
    {
      badge: "SERVICE 03",
      number: "03",
      icon: "build",
      title: "Entretien et Maintenance",
      desc: "Entretien bâtiment/terrain, tonte du gazon, négociation des soumissions, travaux mineurs et majeurs.",
    },
    {
      badge: "SERVICE 04",
      number: "04",
      icon: "trending_up",
      title: "Optimisation Locative",
      desc: "Recommandations personnalisées (ex. ajout du Wi-Fi dans l'immeuble), mise en place des stratégies choisies.",
    },
  ];

  const cardStyle = [
    {
      // Carte 1 : bleu foncé #1a2744, texte blanc
      bg: "bg-[#1a2744]",
      text: "text-white",
      subtext: "text-white/80",
      badge: "bg-white/10 text-white border border-white/15",
      iconWrap: "bg-white/10 text-white border border-white/10",
      number: "text-white",
      border: "border-[#1a2744]",
    },
    {
      // Carte 2 : clair/beige, texte foncé
      bg: "bg-[#fdfbf7]",
      text: "text-[#1a2744]",
      subtext: "text-on-surface-variant",
      badge: "bg-[#1a2744]/5 text-[#1a2744] border border-[#1a2744]/10",
      iconWrap: "bg-[#1a2744] text-white",
      number: "text-[#1a2744]",
      border: "border-[#e8e2d9]",
    },
    {
      // Carte 3 : bleu primaire #2563eb, texte blanc
      bg: "bg-primary",
      text: "text-white",
      subtext: "text-white/90",
      badge: "bg-white/15 text-white border border-white/20",
      iconWrap: "bg-white text-primary",
      number: "text-white",
      border: "border-primary",
    },
    {
      // Carte 4 : doré #d4b876, texte foncé — palette bleu/or
      bg: "bg-accent-gold-dark",
      text: "text-[#1a2744]",
      subtext: "text-[#1a2744]/75",
      badge: "bg-[#1a2744]/10 text-[#1a2744] border border-[#1a2744]/12",
      iconWrap: "bg-[#1a2744] text-accent-gold-dark",
      number: "text-[#1a2744]",
      border: "border-accent-gold-dark",
    },
  ];

  const stickyTops = [
    "lg:top-[112px]",
    "lg:top-[128px]",
    "lg:top-[144px]",
    "lg:top-[160px]",
  ];

  return (
    <div className="w-full bg-surface-container-lowest py-16 lg:py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* ── Colonne gauche : sticky, reste fixe pendant le scroll ── */}
          <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
            <p className="font-label-md text-label-md uppercase tracking-[0.18em] text-accent-dark font-bold mb-4">
              NOS SERVICES
            </p><br />

            <h2
              id="titre-services"
              className="font-display-lg text-[5.2rem] md:text-[5.8rem] lg:text-[5.6rem] xl:text-[5.1rem] leading-[1.08] tracking-tight font-bold"
            >
              <span className="text-black">Une gestion complète,</span>
              <br />
              <span className="text-primary">du loyer à</span>
              <br />
              <span className="text-primary">l&apos;entretien.</span>
            </h2>

            <p className="font-body-md lg:font-body-lg text-body-md lg:text-body-lg text-on-surface-variant mt-6 leading-relaxed max-w-[48ch]">
              De la perception des loyers à l'entretien de vos bâtiments, nous 
              prenons en charge chaque aspect de la gestion de vos immeubles — pour 
              que vous n'ayez plus qu'à profiter des résultats.
            </p>

            {/* Ligne de séparation */}
            <div className="w-16 h-[3px] bg-accent-gold-dark mt-8 rounded-full" />
          </div>

          {/* ── Colonne droite : 4 cartes empilées sticky — compactes ── */}
          <div className="flex flex-col gap-6 lg:gap-6 lg:pb-16">
            {services.map((s, i) => {
              const style = cardStyle[i];
              return (
                <div
                  key={s.title}
                  className={`relative overflow-hidden rounded-[2rem] p-7 lg:p-8 flex flex-col gap-6 border shadow-card lg:sticky ${stickyTops[i]} ${style.bg} ${style.border}`}
                >
                  {/* Filigrane numéro décoratif */}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 right-3 lg:bottom-2 lg:right-6 font-display-lg font-extrabold text-[96px] lg:text-[132px] leading-none select-none pointer-events-none ${style.number} opacity-[0.07]`}
                  >
                    {s.number}
                  </span>

                  {/* Header : badge + icône */}
                  <div className="flex items-start justify-between gap-4 relative z-10">
                    <span
                      className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase shrink-0 ${style.badge}`}
                    >
                      {s.badge}
                    </span>
                    <div
                      className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shrink-0 ${style.iconWrap}`}
                    >
                      <span className="material-symbols-outlined text-[24px] lg:text-[28px]">
                        {s.icon}
                      </span>
                    </div>
                  </div>

                  {/* Corps : titre + description — compact, s'adapte au contenu */}
                  <div className="relative z-10 flex flex-col gap-3 pt-1">
                    <h3
                      className={`font-display-lg text-[1.6rem] lg:text-[1.9rem] leading-[1.15] font-bold tracking-tight ${style.text}`}
                    >
                      {s.title}
                    </h3>
                    <p className={`font-body-md lg:text-[16px] leading-relaxed max-w-[36ch] ${style.subtext}`}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

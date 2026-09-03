import Image from "next/image";

export default function Locataires() {
  const panels = [
    {
      badge: "PORTAIL PLEXFLOW",
      title: "Demande de service en ligne",
      desc: "Soumettez votre demande (réparation, entretien, question) directement dans le portail Plexflow : elle est enregistrée et suivie jusqu'à sa résolution complète — vous savez toujours où en est votre demande.",
      cta: "Accéder au portail Plexflow",
      ctaIcon: "arrow_outward",
      href: "https://dashboard.plexflow.ca/app/en",
      image: "/images/image-bg-card-plexflow.jpg",
    },
    {
      badge: "CONTACT",
      title: "Par courriel",
      desc: "Pour toute question non urgente, écrivez-nous : nous vous répondons en moins de 24 heures.",
      cta: "info@immoestrie.ca",
      ctaIcon: "arrow_forward",
      href: "mailto:info@immoestrie.ca",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section id="locataires" className="py-24 bg-surface w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-6 max-w-3xl">
          <span className="font-label-md text-label-md uppercase tracking-[0.18em] text-accent-dark font-bold mb-4 inline-block">
            Espace Locataires
          </span>

          <div className="flex items-start justify-between gap-4">
            <h2 className="font-display-lg text-[2.8rem] md:text-[4rem] leading-[1.1] tracking-wide text-left">
              <span className="text-black">Vous êtes</span>{" "}
              <span className="text-primary whitespace-nowrap">locataire ?</span>
            </h2>

            {/* Flèche : grande, alignée avec le titre */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black shrink-0 mt-1 w-14 h-14 md:w-20 md:h-20"
              aria-hidden="true"
            >
              <line
                x1="80"
                y1="20"
                x2="25"
                y2="85"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <polyline
                points="60,85 25,85 25,50"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Une réparation à demander, une question sur votre logement ? Nous sommes là pour
            vous, en tout temps. Trois façons simples de nous joindre :
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex w-full gap-1 h-[560px] overflow-hidden">
        {panels.map((p, idx) => (
          <a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group relative flex-1 hover:flex-[1.7] transition-all duration-500 ease-in-out overflow-hidden flex flex-col justify-end cursor-pointer"
            style={{
              backgroundImage: `url(${p.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)",
              }}
            />
            {idx === 0 && (
              <div className="absolute top-6 left-6 z-10 w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                <Image
                  src="/images/logo-portail-plexflow.png"
                  alt="Logo Portail Plexflow"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-4">
              <span className="inline-flex w-fit px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-bold tracking-[0.14em] uppercase">
                {p.badge}
              </span>
              <h3 className="font-display-lg text-[1.9rem] lg:text-[2.2rem] leading-[1.1] font-bold text-white">
                {p.title}
              </h3>
              <p className="font-body-md text-body-md text-white/85 max-w-[42ch] leading-relaxed opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                {p.desc}
              </p>
              <span className="inline-flex items-center gap-3 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="font-label-md text-label-md font-semibold text-white">
                  {p.cta}
                </span>
                <span className="w-10 h-10 rounded-full border border-white/40 bg-transparent group-hover:bg-primary group-hover:border-primary flex items-center justify-center transition-colors duration-300">
                  <span className="material-symbols-outlined text-white text-[18px]">
                    {p.ctaIcon}
                  </span>
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-1 md:hidden w-full">
        {panels.map((p, idx) => (
          <a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="relative overflow-hidden flex flex-col justify-end h-[420px] p-7"
            style={{
              backgroundImage: `url(${p.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)",
              }}
            />
            {idx === 0 && (
              <div className="absolute top-5 left-5 z-10 w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-md">
                <Image
                  src="/images/logo-portail-plexflow.png"
                  alt="Logo Portail Plexflow"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="relative z-10 flex flex-col gap-4">
              <span className="inline-flex w-fit px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-bold tracking-[0.14em] uppercase">
                {p.badge}
              </span>
              <h3 className="font-display-lg text-[1.7rem] leading-[1.1] font-bold text-white">
                {p.title}
              </h3>
              <p className="font-body-md text-body-md text-white/85 leading-relaxed">
                {p.desc}
              </p>
              <span className="inline-flex items-center gap-3 mt-1">
                <span className="font-label-md text-label-md font-semibold text-white">
                  {p.cta}
                </span>
                <span className="w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[18px]">
                    {p.ctaIcon}
                  </span>
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
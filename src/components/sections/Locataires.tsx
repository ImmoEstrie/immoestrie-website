export default function Locataires() {
  const options = [
    {
      icon: "build",
      title: "Demande de service en ligne",
      desc: "Soumettez votre demande (réparation, entretien, question) directement dans le portail Plexflow : elle est enregistrée et suivie jusqu'à sa résolution complète — vous savez toujours où en est votre demande.",
      actionText: "Accéder au portail Plexflow",
      actionIcon: "arrow_outward",
      actionLink: "#portail",
    },
    {
      icon: "call",
      title: "Par téléphone, 24 h/24",
      desc: "Une urgence ou pas d'accès à Internet ? Un centre d'appel situé au Québec vous répond en tout temps, jour et nuit — jamais de boîte vocale.",
      actionText: "(819) 975-4599",
      actionIcon: "",
      actionLink: "tel:8199754599",
    },
    {
      icon: "mail",
      title: "Par courriel",
      desc: "Pour toute question non urgente, écrivez-nous : nous vous répondons en moins de 24 heures.",
      actionText: "info@immoestrie.ca",
      actionIcon: "",
      actionLink: "mailto:info@immoestrie.ca",
    },
  ];

  return (
    <section id="locataires" className="py-24 bg-surface w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 max-w-3xl">
            <span className="font-label-md text-label-md uppercase tracking-[0.18em] text-accent-dark font-bold mb-4">
              Espace Locataires
            </span><br /><br />
          <h2 className="font-display-lg text-[3rem] md:text-[4rem] leading-[1.1] tracking-wide text-left mb-6 flex items-center gap-1">
            <span className="text-black">Vous êtes</span> <span className="text-primary">locataire ?</span>
             {/* Arrow pointing right toward the form */}
              <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black shrink-0 mt-2 ml-2">
                <line x1="105" y1="15" x2="25" y2="95" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                <polyline points="70,95 25,95 25,50" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Une réparation à demander, une question sur votre logement ? Nous sommes là pour vous, en tout temps. Trois façons simples de nous joindre :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(27,43,75,0.05)] border border-surface-variant hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-accent-gold-dark text-[32px]">
                  {opt.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-xl text-primary mb-3">{opt.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                {opt.desc}
              </p>
              <a
                href={opt.actionLink}
                className={`font-label-md text-label-md inline-flex items-center gap-1 transition-colors mt-auto ${
                  opt.actionIcon ? "text-primary hover:text-accent-gold-dark" : "text-primary font-bold hover:text-primary-container"
                }`}
              >
                {opt.actionText}
                {opt.actionIcon && (
                  <span className="material-symbols-outlined text-[18px]">{opt.actionIcon}</span>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

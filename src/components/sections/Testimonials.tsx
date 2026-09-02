export default function Testimonials() {
  const testimonials = [
    {
      text: "Gestion impeccable depuis 3 ans. Ils ont trouvé d'excellents locataires et je n'ai plus à me soucier des appels nocturnes. Un vrai soulagement.",
      name: "Marc L.",
      role: "Propriétaire de Triplex",
      hideOnMobile: false,
    },
    {
      text: "Leurs rapports financiers sont d'une clarté exemplaire. La transparence est au rendez-vous et leur connaissance du marché m'a aidé à optimiser mes loyers.",
      name: "Sophie T.",
      role: "Investisseure Immobilier",
      hideOnMobile: false,
    },
    {
      text: "Service très professionnel. Lors d'un dégât d'eau, leur équipe est intervenue rapidement et a géré la situation de A à Z avec les assurances.",
      name: "Jean-François D.",
      role: "Propriétaire de Multiplex",
      hideOnMobile: true,
    },
  ];

  return (
    <div className="py-24 bg-surface-container-lowest w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-16">
          <h2 className="font-display-lg text-[3.5rem] md:text-[4.5rem] leading-[1.1] tracking-wide text-left">
            <span className="text-black">CE QUE DISENT</span><br />
            <span className="text-primary">NOS CLIENTS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-surface p-8 rounded-2xl border border-surface-variant ${
                t.hideOnMobile ? "hidden md:hidden lg:block" : ""
              }`}
            >
              <div className="flex items-center gap-1 mb-4 text-accent-gold-dark">
                {[...Array(5)].map((_, idx) => (
                  <span
                    key={idx}
                    className="material-symbols-outlined text-[20px]"
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-label-md text-label-md text-primary font-bold">
                  {t.name}
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Plan du site | Gestion Immobilière de l'Estrie",
  description:
    "Retrouvez l'ensemble des pages et sections du site de Gestion Immobilière de l'Estrie — navigation rapide vers nos services et informations.",
};

const sitemap = [
  {
    title: "Accueil",
    href: "/#accueil",
    desc: "Présentation, hero et accès rapide",
    links: [
      { label: "Haut de page", href: "/#accueil" },
      { label: "À propos", href: "/#a-propos" },
    ],
  },
  {
    title: "Services",
    href: "/#services",
    desc: "Nos 4 piliers de gestion",
    links: [
      { label: "Gestion Administrative", href: "/#services" },
      { label: "Gestion Financière", href: "/#services" },
      { label: "Entretien et Maintenance", href: "/#services" },
      { label: "Optimisation Locative", href: "/#services" },
    ],
  },
  {
    title: "Pourquoi nous choisir",
    href: "/#pourquoi-nous",
    desc: "Réactivité, expertise locale, transparence",
    links: [
      { label: "Nos avantages", href: "/#pourquoi-nous" },
      { label: "Témoignages clients", href: "/#temoignages" },
    ],
  },
  {
    title: "Espace Locataires",
    href: "/#locataires",
    desc: "2 accès simplifiés",
    links: [
      { label: "Portail Plexflow", href: "/#locataires" },
      { label: "Par courriel — info@immoestrie.ca", href: "mailto:info@immoestrie.ca" },
    ],
  },
  {
    title: "Support",
    href: "/#faq",
    desc: "Aide et contact",
    links: [
      { label: "Foire aux questions", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
      { label: "Obtenir une soumission", href: "/#soumission" },
    ],
  },
  {
    title: "Légal",
    href: "/politique-confidentialite",
    desc: "Informations juridiques",
    links: [
      { label: "Politique de confidentialité", href: "/politique-confidentialite" },
      { label: "Conditions d'utilisation", href: "/conditions-utilisation" },
      { label: "Plan du site", href: "/plan-du-site" },
    ],
  },
];

export default function PlanDuSitePage() {
  return (
    <>
      <TopBar />
      <header>
        <Navbar />
      </header>
      {/* Espace tampon sous la navbar (fixe/sticky) — agrandi pour que le titre H1 ne soit plus collé ni rogné */}
      <div className="h-20 md:h-24 w-full shrink-0" aria-hidden="true" />

      <main id="contenu-principal" className="bg-surface-container-lowest">
        {/* Hero */}
        <section className="bg-surface w-full border-b border-surface-variant/50">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="ml-1 font-display-lg text-[2.5rem] md:text-[3.5rem] leading-[1.15] tracking-tight font-bold text-[#1a2744] mb-4">
                Plan du <span className="text-primary">site</span>
              </h1>
              <p className="ml-10 font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
                Accédez rapidement à l&apos;ensemble des contenus — pensé comme une carte claire de notre site, à
                l&apos;image de notre gestion : structurée et transparente.
              </p>
            </div>
          </div>
        </section>

        {/* Grille sitemap */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sitemap.map((section) => (
                <div
                  key={section.title}
                  className="bg-white rounded-2xl border border-surface-variant p-6 md:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="font-display-lg text-xl font-bold tracking-tight text-[#1a2744] leading-tight">
                      {section.title}
                    </h2>
                    <span className="material-symbols-outlined text-primary/60 text-[22px] shrink-0 mt-1">
                      arrow_outward
                    </span>
                  </div>
                  <p className="font-body-md text-body-sm text-on-surface-variant mb-6">{section.desc}</p>
                  <div className="w-full h-px bg-outline-variant/30 mb-6" aria-hidden="true" />
                  <ul className="space-y-3 mt-auto">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="group inline-flex items-center gap-2 font-label-md text-label-sm font-semibold text-primary hover:text-accent-gold-dark transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold-dark group-hover:scale-125 transition-transform" aria-hidden="true" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={section.href}
                    className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-sm font-bold text-[#1a2744] hover:text-primary transition-colors"
                  >
                    Voir la section <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Raccourci contact */}
            <div className="mt-12 bg-[#1a2744] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-display-lg text-xl font-bold text-white">Vous ne trouvez pas ce que vous cherchez ?</h3>
                <p className="font-body-md text-body-sm text-white/70 mt-2">
                  Notre équipe vous répond en moins de 24h — ou 24h/24 via le portail pour les urgences.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="mailto:info@immoestrie.ca"
                  className="inline-flex items-center justify-center gap-2 bg-accent-gold-dark text-[#1a2744] px-6 py-3 rounded-lg font-label-md text-label-md font-bold hover:bg-[#c9a961] transition-colors"
                >
                  info@immoestrie.ca
                </a>
                <a
                  href="tel:+18199754599"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg font-label-md text-label-md font-semibold hover:bg-white/10 transition-colors"
                >
                  (819) 975-4599
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
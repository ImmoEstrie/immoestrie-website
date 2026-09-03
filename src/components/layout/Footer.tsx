"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: "700" });

export default function Footer() {
  return (
    <footer className="relative w-full pt-stack-lg pb-8 border-t border-white/10 overflow-hidden bg-[radial-gradient(ellipse_at_top,_#1e3a5f_0%,_#1a2744_35%,_#0f172a_65%,_#020617_100%)]">
      {/* Subtle diagonal sheen overlay for premium depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          background: "linear-gradient(135deg, rgba(37,99,235,0.18) 0%, transparent 45%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 mb-12">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Logo site — même que navbar, version blanche pour fond foncé */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Image
              src="/images/logo-immobilier.png"
              alt="Gestion Immobilière de l'Estrie"
              width={40}
              height={40}
              className="h-10 w-10 object-contain brightness-0 invert opacity-90 shrink-0"
            />
            <span className="font-headline-md text-headline-md font-bold text-white leading-tight">
              Gestion Immobilière de l&apos;Estrie
            </span>
          </div>
          <p className="font-body-md text-body-sm text-[#c5cad6]/80 mt-4 mb-4">
            Votre partenaire de confiance pour une gestion immobilière sereine et rentable en Estrie.
          </p>
          <p className="font-body-md text-label-sm text-[#c5cad6]/60 italic">
            Zones desservies: Sherbrooke (tous les quartiers), Magog, Ayer&apos;s Cliff, North Hatley, Coaticook,
            Windsor, East Angus, Cookshire-Eaton, Val-des-Sources, Richmond, Stanstead, Waterville — et partout
            ailleurs en Estrie.
          </p>
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-label-md text-label-md text-white mb-4 font-bold">Navigation</h4>
          <ul className="space-y-2 font-body-md text-body-sm flex flex-col items-center md:items-start">
            <li>
              <a className="link-underline text-[#c5cad6] hover:text-accent-gold-dark transition-colors" href="/#accueil">
                Accueil
              </a>
            </li>
            <li>
              <a className="link-underline text-[#c5cad6] hover:text-accent-gold-dark transition-colors" href="/#services">
                Services
              </a>
            </li>
            <li>
              <a className="link-underline text-[#c5cad6] hover:text-accent-gold-dark transition-colors" href="/#pourquoi-nous">
                Pourquoi nous
              </a>
            </li>
            <li>
              <a className="link-underline text-[#c5cad6] hover:text-accent-gold-dark transition-colors" href="/#faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-label-md text-label-md text-white mb-4 font-bold">Légal</h4>
          <ul className="space-y-2 font-body-md text-body-sm flex flex-col items-center md:items-start">
            <li>
              <a className="link-underline text-[#c5cad6] hover:text-accent-gold-dark transition-colors" href="/politique-confidentialite">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a className="link-underline text-[#c5cad6] hover:text-accent-gold-dark transition-colors" href="/conditions-utilisation">
                Conditions d&apos;utilisation
              </a>
            </li>
            <li>
              <a className="link-underline text-[#c5cad6] hover:text-accent-gold-dark transition-colors" href="/plan-du-site">
                Plan du site
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-label-md text-label-md text-white mb-4 font-bold">Portail Client</h4>
          <a
            className="inline-flex items-center gap-2 border border-accent-gold-dark text-accent-gold-dark hover:bg-accent-gold-dark hover:text-white font-label-md text-label-sm px-4 py-2 rounded transition-colors mb-4"
            href="https://dashboard.plexflow.ca/app/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accéder au portail Plexflow
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>

          {/* Réseaux sociaux — couleurs officielles */}
          <div className="flex items-center gap-3 mt-2">
            {/* Facebook */}
            <a
                href="https://www.facebook.com/profile.php?id=100095206657906"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden hover:scale-110 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="36" height="36">
                <rect width="48" height="48" rx="12" fill="#1877F2" />
                <path
                  fill="#fff"
                  d="M31.5 25.5l.9-5.6h-5.4v-3.6c0-1.5.75-3 3.15-3h2.44v-4.8s-2.2-.38-4.32-.38c-4.4 0-7.28 2.67-7.28 7.5v4.24H16v5.6h5.99V44c1.2.19 2.43.29 3.68.29s2.48-.1 3.68-.29V25.5h4.15Z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
             href="https://www.instagram.com/gestion_immo_estrie/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-15 h-15 rounded-full overflow-hidden hover:scale-110 transition-transform"
            >
              <Image
                src="/images/instagram-image.png"
                alt="Instagram"
                width={44}
                height={44}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop pt-8 border-t border-white/10">
        <p className="font-body-md text-label-sm text-[#c5cad6]/60 text-center mx-auto">
          © {new Date().getFullYear()} Gestion Immobilière de l&apos;Estrie. Tous droits réservés.
        </p>
      </div>

      {/* Bottom banner — watermark visible entièrement, centré, clamp responsive */}
      <div
        className="relative z-0 mt-12 pt-14 border-t border-white/[0.07] overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`${oswald.className} font-black tracking-tighter leading-none text-white whitespace-nowrap overflow-hidden text-center select-none pointer-events-none w-full px-4 mx-auto pb-10`}
          style={{ fontSize: "clamp(1.1rem, 5.5vw, 6.5rem)", color: "rgba(255,255,255,0.11)" }}
        >
          VOTRE PROPRIÉTÉ . NOTRE ENGAGEMENT
        </motion.p>
      </div>
    </footer>
  );
}
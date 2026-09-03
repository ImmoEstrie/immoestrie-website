"use client";

import { useState } from "react";
import Image from "next/image";

// T11 : Les ancres utilisent /#section (absolu) pour fonctionner depuis toutes les sous-pages
// T3  : Bouton portail renommé "Accéder au portail locataire"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-9 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b-0">
      <div className="relative flex justify-between items-center w-full px-4 md:px-8 xl:px-12 py-4 mx-auto">
        <a href="/" className="flex items-center gap-3 z-10 hover:opacity-80 transition-opacity">
          <Image
            alt="Logo Gestion Immobilière de l'Estrie"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
            src="/images/logo-immobilier.png"
            width={48}
            height={48}
          />
          <div className="flex flex-col font-bold hidden xl:flex leading-tight text-[1.1rem]">
            <span className="text-primary">Gestion immobilière</span>
            <span className="text-on-surface-variant">de l&apos;Estrie</span>
          </div>
        </a>

        {/* Centered Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-6 xl:gap-8 items-center z-10">
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="/#services">
            Services
          </a>
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="/#a-propos">
            À propos
          </a>
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="/#pourquoi-nous">
            Pourquoi nous
          </a>
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="/#locataires">
            Locataires
          </a>
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="/#contact">
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6 z-10">
          <a
            className="text-primary hover:text-accent-gold-dark font-label-md text-label-md transition-colors inline-flex items-center gap-1"
            href="https://dashboard.plexflow.ca/app/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portail Plexflow
            <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
          </a>
          <a
            className="bg-accent-gold-dark hover:bg-[#B39748] text-white font-label-md text-label-md px-5 py-2.5 rounded-lg transition-colors items-center gap-2 inline-flex"
            href="/#soumission"
          >
            Obtenir une soumission
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0 top-full">
          <a className="link-underline w-fit" href="/#services" onClick={() => setIsOpen(false)}>Services</a>
          <a className="link-underline w-fit" href="/#a-propos" onClick={() => setIsOpen(false)}>À propos</a>
          <a className="link-underline w-fit" href="/#pourquoi-nous" onClick={() => setIsOpen(false)}>Pourquoi nous</a>
          <a className="link-underline w-fit" href="/#locataires" onClick={() => setIsOpen(false)}>Locataires</a>
          <a className="link-underline w-fit" href="/#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a className="link-underline w-fit" href="/#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a
            href="https://dashboard.plexflow.ca/app/en"
            className="text-primary font-semibold inline-flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Accéder au portail locataire
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </a>
          <a href="/#soumission" className="text-accent-gold-dark font-bold" onClick={() => setIsOpen(false)}>Obtenir une soumission</a>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100095206657906"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center hover:scale-110 transition-transform shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="34" height="34">
                <rect width="50" height="50" rx="12" fill="#1877F2" />
                <path
                  fill="#fff"
                  d="M31.5 25.5l.9-5.6h-5.4v-3.6c0-1.5.75-3 3.15-3h2.44v-4.8s-2.2-.38-4.32-.38c-4.4 0-7.28 2.67-7.28 7.5v4.24H16v5.6h5.99V44c1.2.19 2.43.29 3.68.29s2.48-.1 3.68-.29V25.5h4.15Z"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/gestion_immo_estrie/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-11 h-11 rounded-full overflow-hidden hover:scale-110 transition-transform shrink-0"
            >
              <Image
                src="/images/instagram-image.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
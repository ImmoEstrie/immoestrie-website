"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-9 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b-0">
      <div className="relative flex justify-between items-center w-full px-4 md:px-8 xl:px-12 py-4 mx-auto">
        <a href="/#accueil" className="flex items-center gap-3 z-10 hover:opacity-80 transition-opacity">
          <Image
            alt="Logo Gestion Immobilière de l'Estrie"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
            src="/images/logo-immobilier.png"
            width={48}
            height={48}
          />
          <div className="flex flex-col font-bold hidden xl:flex leading-tight text-[1.1rem]">
            <span className="text-primary">Gestion immobilière</span>
            <span className="text-on-surface-variant">de l'Estrie</span>
          </div>
        </a>
        
        {/* Centered Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-6 xl:gap-8 items-center z-10">
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="#services">
            Services
          </a>
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="#a-propos">
            À propos
          </a>
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="#pourquoi-nous">
            Pourquoi nous
          </a>
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="#locataires">
            Locataires
          </a>
          <a className="link-underline text-on-surface-variant hover:text-accent-gold-dark transition-colors font-label-md text-label-md" href="#contact">
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
            Accéder au portail
            <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
          </a>
          <a
            className="bg-accent-gold-dark hover:bg-[#B39748] text-white font-label-md text-label-md px-5 py-2.5 rounded-lg transition-colors items-center gap-2 inline-flex"
            href="#soumission"
          >
            Obtenir une soumission
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      {/* Mobile Menu Content (Basic implementation) */}
      {isOpen && (
        <div className="md:hidden bg-surface p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0 top-full">
          <a className="link-underline w-fit" href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a className="link-underline w-fit" href="#pourquoi-nous" onClick={() => setIsOpen(false)}>Pourquoi nous</a>
          <a className="link-underline w-fit" href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a className="link-underline w-fit" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#soumission" className="text-accent-gold-dark font-bold" onClick={() => setIsOpen(false)}>Obtenir une soumission</a>
        </div>
      )}
    </header>
  );
}

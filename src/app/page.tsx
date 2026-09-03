// === PAGE PRINCIPALE ===
// Assemble toutes les sections du site dans l'ordre

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/sections/HeroCarousel";
import About from "@/components/sections/About";
import StatsBar from "@/components/sections/StatsBar";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Locataires from "@/components/sections/Locataires";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import ChatWidget from "@/components/ui/ChatWidget";

export default function HomePage() {
  return (
    <>
      {/* Barre de contact + navigation sticky */}
      <TopBar />
      <header>
        <Navbar />
      </header>
      {/* Spacer pour compenser les 2 barres fixed (36px + ~72px) */}
      <div className="h-9 w-full shrink-0" aria-hidden="true" />

      {/* Contenu principal */}
      <main id="contenu-principal">
        {/* 1. Hero carousel — 3 diapositives plein écran */}
        <section id="accueil" aria-label="Présentation de l'entreprise">
          <HeroCarousel />
        </section>

        {/* 2. À propos */}
        <About />

        {/* 3. Barre de statistiques */}
        <StatsBar />

        {/* 3. Services offerts */}
        <section id="services" aria-labelledby="titre-services">
          <Services />
        </section>

        {/* 4. Pourquoi nous choisir */}
        <section id="pourquoi-nous" aria-labelledby="titre-pourquoi">
          <WhyUs />
        </section>

        {/* 5. Espace Locataires */}
        <Locataires />

        {/* 6. Témoignages clients */}
        <section aria-label="Témoignages de nos clients">
          <Testimonials />
        </section>

        {/* 6. Foire aux questions */}
        <section id="faq" aria-labelledby="titre-faq">
          <FAQ />
        </section>

        {/* 7. Contact et formulaire */}
        <section id="contact" aria-labelledby="titre-contact">
          <Contact />
        </section>
      </main>

      {/* Pied de page */}
      <footer>
        <Footer />
      </footer>

      {/* Widget de chat flottant — lien WhatsApp */}
      <ChatWidget />
    </>
  );
}

import ContactForm from "@/components/ui/ContactForm";

export default function Contact() {
  return (
    <div className="py-24 bg-surface-container-lowest w-full" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info — centré sur mobile, aligné à gauche sur desktop */}
          <div className="pt-4 flex flex-col items-center text-center md:items-start md:text-left">
            {/* Title + Arrow side by side */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 w-full">
              <h2 className="font-display-lg text-[3.5rem] md:text-[4.5rem] leading-[1.1] tracking-wide text-center md:text-left flex-1">
                <span className="text-black">CONTACTEZ</span><br />
                <span className="text-primary">-NOUS</span>
              </h2>
              {/* Arrow — cachée sur mobile, visible desktop */}
              <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block text-black shrink-0 mt-2">
                <line x1="15" y1="15" x2="95" y2="95" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                <polyline points="50,95 95,95 95,50" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant mb-12 text-center md:text-left">
              Prêt à simplifier la gestion de vos immeubles ? Discutons de vos besoins et de la façon dont nous pouvons vous aider.
            </p>

            <div className="space-y-6 w-full">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="material-symbols-outlined text-accent-gold-dark">call</span>
                <a href="tel:8199754599" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">(819) 975-4599</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="material-symbols-outlined text-accent-gold-dark">mail</span>
                <a href="mailto:info@immoestrie.ca" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">info@immoestrie.ca</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="material-symbols-outlined text-accent-gold-dark">location_on</span>
                <span className="font-body-md text-on-surface-variant">Sherbrooke, QC</span>
              </div>
            </div>
          </div>
          {/* Form */}
          <div id="soumission">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

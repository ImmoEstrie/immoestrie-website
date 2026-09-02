export default function Contact() {
  return (
    <div className="py-24 bg-surface-container-lowest w-full" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="pt-4">
            {/* Title + Arrow side by side */}
            <div className="flex items-start gap-6 mb-8">
              <h2 className="font-display-lg text-[3.5rem] md:text-[4.5rem] leading-[1.1] tracking-wide text-left flex-1">
                <span className="text-black">CONTACTEZ</span><br />
                <span className="text-primary">-NOUS</span>
              </h2>
              {/* Arrow pointing right toward the form */}
              <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black shrink-0 mt-2">
                <line x1="15" y1="15" x2="95" y2="95" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                <polyline points="50,95 95,95 95,50" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant mb-12">
              Prêt à simplifier la gestion de vos immeubles ? Discutons de vos besoins et de la façon dont nous pouvons vous aider.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-accent-gold-dark">call</span>
                <a href="tel:8199754599" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">(819) 975-4599</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-accent-gold-dark">mail</span>
                <a href="mailto:info@immoestrie.ca" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">info@immoestrie.ca</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-accent-gold-dark">location_on</span>
                <span className="font-body-md text-on-surface-variant">Sherbrooke, QC</span>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-card border border-surface-variant" id="soumission">
            <form className="space-y-6">
              <div>
                <label className="block font-label-md text-label-sm text-primary mb-2">Nom complet</label>
                <input className="w-full bg-surface-bright border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 font-body-md text-on-surface outline-none" placeholder="Jean Tremblay" type="text" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-sm text-primary mb-2">Courriel</label>
                  <input className="w-full bg-surface-bright border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 font-body-md text-on-surface outline-none" placeholder="jean@exemple.com" type="email" />
                </div>
                <div>
                  <label className="block font-label-md text-label-sm text-primary mb-2">Téléphone</label>
                  <input className="w-full bg-surface-bright border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 font-body-md text-on-surface outline-none" placeholder="(819) 555-0123" type="tel" />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-sm text-primary mb-2">Type de propriété</label>
                <select className="w-full bg-surface-bright border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 font-body-md text-on-surface outline-none">
                  <option>Multiplex (2-5 portes)</option>
                  <option>Immeuble à revenus (6+ portes)</option>
                  <option>Commercial</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block font-label-md text-label-sm text-primary mb-2">Message</label>
                <textarea className="w-full bg-surface-bright border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 font-body-md text-on-surface resize-none outline-none" placeholder="Décrivez vos besoins..." rows={4} />
              </div>
              <button className="w-full bg-primary hover:bg-primary-container text-white font-label-md text-label-md py-4 rounded-lg transition-colors mt-4" type="button">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

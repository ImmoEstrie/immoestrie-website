export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full py-stack-lg border-t border-white/10">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
        <div className="md:col-span-1">
          <span className="font-headline-md text-headline-md font-bold text-on-primary mb-4 block">
            Gestion Immobilière de l'Estrie
          </span>
          <p className="font-body-md text-body-sm text-inverse-on-surface/80 mt-4 mb-4">
            Votre partenaire de confiance pour une gestion immobilière sereine et
            rentable en Estrie.
          </p>
          <p className="font-body-md text-label-sm text-inverse-on-surface/60 italic">
            Zones desservies: Sherbrooke (tous les quartiers), Magog, Ayer's
            Cliff, North Hatley, Coaticook, Windsor, East Angus,
            Cookshire-Eaton, Val-des-Sources, Richmond, Stanstead, Waterville —
            et partout ailleurs en Estrie.
          </p>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 font-body-md text-body-sm text-inverse-on-surface/80">
            <li>
              <a className="hover:text-accent-gold-dark transition-colors" href="#accueil">
                Accueil
              </a>
            </li>
            <li>
              <a className="hover:text-accent-gold-dark transition-colors" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-accent-gold-dark transition-colors" href="#pourquoi-nous">
                Pourquoi nous
              </a>
            </li>
            <li>
              <a className="hover:text-accent-gold-dark transition-colors" href="#faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-white mb-4">Légal</h4>
          <ul className="space-y-2 font-body-md text-body-sm text-inverse-on-surface/80">
            <li>
              <a className="hover:text-accent-gold-dark transition-colors" href="#">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a className="hover:text-accent-gold-dark transition-colors" href="#">
                Conditions d'utilisation
              </a>
            </li>
            <li>
              <a className="hover:text-accent-gold-dark transition-colors" href="#">
                Plan du site
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-white mb-4">
            Portail Client
          </h4>
          <a
            className="inline-flex items-center gap-2 border border-accent-gold-dark text-accent-gold-dark hover:bg-accent-gold-dark hover:text-white font-label-md text-label-sm px-4 py-2 rounded transition-colors mb-4"
            href="#portail"
          >
            Accéder au portail Plexflow
            <span className="material-symbols-outlined text-[16px]">
              open_in_new
            </span>
          </a>
          <div className="flex gap-4 mt-2">
            <a
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold-dark transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop pt-8 border-t border-white/10 text-center md:text-left">
        <p className="font-body-md text-label-sm text-inverse-on-surface/60">
          © {new Date().getFullYear()} Gestion Immobilière de l'Estrie. Tous
          droits réservés.
        </p>
      </div>
    </footer>
  );
}

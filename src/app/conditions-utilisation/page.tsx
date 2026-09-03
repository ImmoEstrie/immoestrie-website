import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Gestion Immobilière de l'Estrie",
  description:
    "Consultez les conditions d'utilisation du site de Gestion Immobilière de l'Estrie — règles d'usage, responsabilités et cadre légal.",
};

export default function ConditionsUtilisationPage() {
  return (
    <>
      <TopBar />
      <header>
        <Navbar />
      </header>
      <div className="h-20 md:h-24 w-full shrink-0" aria-hidden="true" />

      <main id="contenu-principal" className="bg-surface-container-lowest">
        {/* Hero */}
        <section className="bg-surface w-full border-b border-surface-variant/50">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display-lg text-[2.5rem] md:text-[3.5rem] leading-[1.15] tracking-tight font-bold text-[#1a2744] mb-4">
                Conditions <span className="text-primary">d&apos;utilisation</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
                En naviguant sur notre site et en utilisant nos services, vous acceptez les présentes conditions —
                conçues pour protéger à la fois vos intérêts et les nôtres, en toute clarté.
              </p>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="max-w-3xl mx-auto">
              <div className="bg-accent-gold-dark/10 border border-accent-gold-dark/20 rounded-2xl p-6 mb-10">
                <p className="font-body-md text-body-sm leading-relaxed text-[#1a2744]">
                  <span className="font-bold">Note importante :</span> Si vous n&apos;acceptez pas ces conditions, merci
                  de ne pas utiliser le site. Pour toute question, écrivez à{" "}
                  <a href="mailto:info@immoestrie.ca" className="text-primary underline hover:text-[#1e40af]">info@immoestrie.ca</a>.
                </p>
              </div>

              <article className="space-y-10 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                <section className="scroll-mt-28">
                  <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">1. Acceptation des conditions</h2>
                  <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                  <p>
                    L&apos;accès au site <span className="font-semibold text-[#1a2744]">immoestrie.ca</span> et
                    l&apos;utilisation de nos services (demande de soumission, portail Plexflow, formulaires) impliquent
                    votre adhésion sans réserve aux présentes conditions. Nous pouvons les mettre à jour à tout moment;
                    la version en ligne prévaut.
                  </p>
                </section>

                <section className="scroll-mt-28">
                  <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">2. Description des services</h2>
                  <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                  <p>
                    Gestion Immobilière de l&apos;Estrie offre des services de gestion locative et de copropriétés :
                    perception des loyers, entretien, gestion administrative et financière. Les informations du site
                    sont présentées à titre informatif et ne constituent pas un engagement ferme sans entente signée.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                    <li>Les soumissions sont personnalisées et valables 30 jours.</li>
                    <li>Les délais et disponibilités sont donnés à titre indicatif.</li>
                    <li>Tout mandat fait l&apos;objet d&apos;un contrat distinct.</li>
                  </ul>
                </section>

                <section className="scroll-mt-28">
                  <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">3. Vos obligations</h2>
                  <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                  <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                    <li>Fournir des informations exactes et à jour lors de vos demandes.</li>
                    <li>Ne pas tenter de contourner la sécurité du site ou d&apos;en extraire les données massivement.</li>
                    <li>Ne pas utiliser le site à des fins illicites, diffamatoires ou portant atteinte aux droits de tiers.</li>
                    <li>Respecter la confidentialité de vos accès au portail Plexflow.</li>
                  </ul>
                </section>

                <section className="scroll-mt-28">
                  <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">4. Propriété intellectuelle</h2>
                  <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                  <p>
                    Le contenu du site (textes, visuels, logo, design) est protégé. Toute reproduction, même partielle,
                    sans autorisation écrite est interdite. Vous pouvez partager un lien vers nos pages, sans en
                    altérer le contenu.
                  </p>
                </section>

                <section className="scroll-mt-28">
                  <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">5. Limitations et responsabilité</h2>
                  <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                  <p>
                    Nous mettons tout en œuvre pour l&apos;exactitude des informations, sans toutefois garantir l&apos;absence
                    d&apos;erreur ou d&apos;interruption. Dans les limites permises par la loi, notre responsabilité ne saurait
                    excéder le montant payé pour le service concerné.
                  </p>
                  <div className="bg-surface rounded-xl border border-surface-variant p-5 mt-6">
                    <p className="font-label-md text-label-sm font-semibold text-[#1a2744] mb-1">Liens externes</p>
                    <p className="text-body-sm">
                      Le site peut contenir des liens vers des tiers (ex. Plexflow). Nous n&apos;en contrôlons pas le
                      contenu et déclinons toute responsabilité à leur égard.
                    </p>
                  </div>
                </section>

                <section className="scroll-mt-28">
                  <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">6. Droit applicable</h2>
                  <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                  <p>
                    Les présentes conditions sont régies par les lois du Québec et du Canada. Tout litige relève des
                    tribunaux compétents du district de Saint-François. Pour nous joindre :
                  </p>
                  <div className="bg-[#1a2744] text-white rounded-2xl p-6 md:p-8 mt-6">
                    <p className="font-headline-md text-lg font-bold text-white">Gestion Immobilière de l&apos;Estrie</p>
                    <p className="font-body-md text-body-sm text-white/70 mt-2">
                      <a href="mailto:info@immoestrie.ca" className="text-accent-gold-dark hover:underline">info@immoestrie.ca</a>{" "}
                      •{" "}
                      <a href="tel:+18199754599" className="text-accent-gold-dark hover:underline">(819) 975-4599</a>
                    </p>
                  </div>
                </section>
              </article>
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
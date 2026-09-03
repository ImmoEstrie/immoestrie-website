import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Gestion Immobilière de l'Estrie",
  description:
    "Découvrez comment Gestion Immobilière de l'Estrie collecte, utilise et protège vos données personnelles conformément à la Loi 25 du Québec.",
};

export default function PolitiqueConfidentialitePage() {
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
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-16 md:pt-24 md:pb-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display-lg text-[2.5rem] md:text-[3.5rem] leading-[1.15] tracking-tight font-bold text-[#1a2744] mb-4">
                Politique de <span className="text-primary">confidentialité</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
                Votre vie privée est au cœur de notre engagement. Cette politique explique quelles données nous
                collectons, pourquoi, et comment nous les protégeons — en toute transparence, conformément à la
                Loi 25 du Québec.
              </p>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl border border-surface-variant p-6 md:p-8 mb-10 shadow-card">
                <h2 className="font-headline-md text-lg font-bold text-[#1a2744] mb-4">Sommaire</h2>
                <ol className="space-y-2 font-body-md text-body-sm text-on-surface-variant list-decimal list-inside">
                  <li><a href="#collecte" className="hover:text-primary transition-colors">Données collectées</a></li>
                  <li><a href="#utilisation" className="hover:text-primary transition-colors">Utilisation de vos données</a></li>
                  <li><a href="#partage" className="hover:text-primary transition-colors">Partage et conservation</a></li>
                  <li><a href="#cookies" className="hover:text-primary transition-colors">Témoins et suivi</a></li>
                  <li><a href="#droits" className="hover:text-primary transition-colors">Vos droits</a></li>
                  <li><a href="#securite" className="hover:text-primary transition-colors">Sécurité</a></li>
                </ol>
              </div>

              <article className="prose prose-neutral max-w-none">
                <div className="space-y-10 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  <section id="collecte" className="scroll-mt-28">
                    <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">1. Données que nous collectons</h2>
                    <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                    <p>
                      Nous collectons uniquement les informations nécessaires à la gestion de vos propriétés et à la
                      réponse à vos demandes. Cela inclut les données que vous nous fournissez directement et certaines
                      données techniques liées à votre navigation.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                      <li><span className="font-semibold text-[#1a2744]">Identité et contact :</span> nom, adresse courriel, téléphone, adresse postale.</li>
                      <li><span className="font-semibold text-[#1a2744]">Gestion locative :</span> informations sur le bail, l&apos;immeuble, les paiements, les demandes de service via Plexflow.</li>
                      <li><span className="font-semibold text-[#1a2744]">Navigation :</span> adresse IP, type d&apos;appareil, pages visitées, via témoins essentiels.</li>
                    </ul>
                  </section>

                  <section id="utilisation" className="scroll-mt-28">
                    <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">2. Pourquoi nous les utilisons</h2>
                    <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                    <p>Vos données servent exclusivement à exécuter nos services, à vous répondre et à améliorer votre expérience — jamais à des fins de revente.</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                      <li>Traiter vos demandes de soumission, de service ou d&apos;information.</li>
                      <li>Gérer les baux, la perception des loyers et l&apos;entretien via nos outils internes.</li>
                      <li>Vous envoyer des communications transactionnelles ou, avec votre consentement, des mises à jour.</li>
                      <li>Assurer la sécurité, prévenir la fraude et respecter nos obligations légales.</li>
                    </ul>
                  </section>

                  <section id="partage" className="scroll-mt-28">
                    <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">3. Partage et conservation</h2>
                    <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                    <p>
                      Nous ne vendons jamais vos données. Elles peuvent être partagées uniquement avec nos
                      prestataires de confiance (ex. Plexflow, hébergement, centre d&apos;appels au Québec) dans le cadre
                      de l&apos;exécution du service, ou si la loi l&apos;exige.
                    </p>
                    <div className="bg-surface rounded-xl border border-surface-variant p-5 mt-6">
                      <p className="font-label-md text-label-sm font-semibold text-[#1a2744] mb-1">Durée de conservation</p>
                      <p className="text-body-sm">
                        Données de gestion : durée du mandat + 7 ans (obligations comptables). Demandes ponctuelles :
                        2 ans après le dernier échange, sauf consentement prolongé.
                      </p>
                    </div>
                  </section>

                  <section id="cookies" className="scroll-mt-28">
                    <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">4. Témoins (cookies) et suivi</h2>
                    <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                    <p>
                      Nous utilisons uniquement des témoins essentiels au fonctionnement du site et, avec votre
                      consentement, des témoins de mesure d&apos;audience anonymisés. Vous pouvez les gérer depuis les
                      paramètres de votre navigateur.
                    </p>
                  </section>

                  <section id="droits" className="scroll-mt-28">
                    <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">5. Vos droits</h2>
                    <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                    <p>
                      Conformément à la Loi 25, vous disposez d&apos;un droit d&apos;accès, de rectification, de retrait de
                      votre consentement et de plainte auprès de la Commission d&apos;accès à l&apos;information.
                    </p>
                  </section>

                  <section id="securite" className="scroll-mt-28">
                    <h2 className="font-display-lg text-2xl md:text-[1.75rem] font-bold tracking-tight text-[#1a2744] mb-3">6. Sécurité et contact</h2>
                    <div className="w-12 h-[3px] bg-accent-gold-dark rounded-full mb-6" aria-hidden="true" />
                    <p>
                      Nous appliquons des mesures techniques et organisationnelles (chiffrement, accès restreint,
                      sauvegardes) pour protéger vos données. Pour toute question, contactez notre responsable de la
                      protection des renseignements personnels :
                    </p>
                    <div className="bg-[#1a2744] text-white rounded-2xl p-6 md:p-8 mt-6">
                      <p className="font-headline-md text-lg font-bold text-white">Gestion Immobilière de l&apos;Estrie</p>
                      <p className="font-body-md text-body-sm text-white/70 mt-2">
                        <a href="mailto:info@immoestrie.ca" className="text-accent-gold-dark hover:underline">info@immoestrie.ca</a>{" "}
                        •{" "}
                        <a href="tel:+18199754599" className="text-accent-gold-dark hover:underline">(819) 975-4599</a>
                      </p>
                    </div>
                    <p className="text-label-sm text-on-surface-variant/70 mt-8 pt-6 border-t border-outline-variant/30">
                      Nous pouvons mettre à jour cette politique pour refléter l&apos;évolution de nos pratiques. La date
                      en haut de page indique la dernière révision. Nous vous invitons à la consulter régulièrement.
                    </p>
                  </section>
                </div>
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
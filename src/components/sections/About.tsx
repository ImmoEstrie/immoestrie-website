import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-surface w-full" id="a-propos">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="flex flex-col">
            <h2 className="font-display-lg text-[3.5rem] md:text-[4.5rem] leading-[1.1] tracking-wide text-left mb-8">
              <span className="text-black">À propos</span> <span className="text-primary">de nous</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 text-justify">
              Gestion immobilière de l'Estrie accompagne les propriétaires d'immeubles locatifs et les syndicats de copropriété de Sherbrooke et de toute l'Estrie. Notre mission : vous offrir la tranquillité d'esprit en prenant en charge la gestion complète de vos propriétés, à faible coût.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant text-justify">
              Notre force, c'est la proximité. Nous connaissons tant nos clients que nos locataires, ce qui nous permet de nous adapter aux besoins de chacun et d'offrir une réponse rapide. Nous nous appuyons aussi sur des partenaires de confiance : le logiciel de gestion immobilière Plexflow et un centre d'appel situé au Québec, accessible 24 h sur 24, pour un suivi rigoureux et transparent.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
            <Image
              src="/images/a-propos-image.png"
              alt="Immeubles gérés par Gestion immobilière de l'Estrie"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  const jsonLd = Array.isArray(data) ? data : [data];
  return (
    <>
      {jsonLd.map((item, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

// Helpers pour générer les schemas — à utiliser dans generateMetadata / pages

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gestion Immobilière de l'Estrie",
    url: "https://gestionestrie.ca",
    logo: "https://gestionestrie.ca/images/logo-immobilier.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-819-975-4599",
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: ["fr-CA"],
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    name: "Gestion Immobilière de l'Estrie",
    image: "https://gestionestrie.ca/images/og-image.jpg",
    url: "https://gestionestrie.ca",
    telephone: "+1-819-975-4599",
    email: "info@immoestrie.ca",
    priceRange: "$$",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.401,
      longitude: -71.889,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Estrie",
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

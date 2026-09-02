import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// ─────────────────────────────────────────────
// CONFIGURATION DES POLICES GOOGLE
// ─────────────────────────────────────────────

/** Police sans-serif pour le corps de texte */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Évite le FOUT (Flash Of Unstyled Text)
});

/** Police serif élégante pour les titres */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

// ─────────────────────────────────────────────
// MÉTADONNÉES SEO & OPEN GRAPH
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  // Titre avec modèle pour les sous-pages
  title: {
    default: "Gestion Immobilière de l'Estrie | Sherbrooke, Québec",
    template: "%s | Gestion Immobilière de l'Estrie",
  },
  description:
    "Gestion professionnelle d'immeubles locatifs et de copropriétés à Sherbrooke et dans toute l'Estrie. Plus de 10 ans d'expérience, service 24/7, transparence garantie.",
  keywords: [
    "gestion immobilière Sherbrooke",
    "gestionnaire immeuble Estrie",
    "syndicat copropriété Québec",
    "gestion locative Sherbrooke",
    "administration immeuble Estrie",
    "gérant immeuble Sherbrooke",
  ],
  authors: [{ name: "Gestion Immobilière de l'Estrie" }],
  creator: "Gestion Immobilière de l'Estrie",
  // Empêche l'indexation des pages de maintenance si besoin
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // === OPEN GRAPH (partage réseaux sociaux) ===
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://gestionestrie.ca",
    siteName: "Gestion Immobilière de l'Estrie",
    title: "Gestion Immobilière de l'Estrie | Sherbrooke, Québec",
    description:
      "Gestion professionnelle d'immeubles locatifs et de copropriétés à Sherbrooke. Expérience, transparence et service 24/7.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gestion Immobilière de l'Estrie — Sherbrooke, Québec",
      },
    ],
  },
  // === TWITTER CARD ===
  twitter: {
    card: "summary_large_image",
    title: "Gestion Immobilière de l'Estrie",
    description:
      "Gestion professionnelle d'immeubles locatifs et de copropriétés en Estrie.",
  },
  // Langue et région
  alternates: {
    canonical: "https://gestionestrie.ca",
    languages: {
      "fr-CA": "https://gestionestrie.ca",
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

// ─────────────────────────────────────────────
// LAYOUT RACINE
// ─────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" // Langue française — important pour l'accessibilité et le SEO
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        {/* Lien d'évitement pour les utilisateurs de clavier/lecteurs d'écran */}
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold focus:text-navy focus:rounded-sm focus:font-semibold"
        >
          Aller au contenu principal
        </a>

        {/* Contenu de la page */}
        {children}
      </body>
    </html>
  );
}

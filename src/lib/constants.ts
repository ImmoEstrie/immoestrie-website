// === CONSTANTES & DONNÉES STATIQUES DU SITE ===
// Toutes les données sont centralisées ici pour faciliter la maintenance

import {
  Building2,
  Users,
  Wrench,
  Phone,
  Shield,
  Clock,
  TrendingUp,
  Star,
  type LucideIcon,
} from "lucide-react";

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

// ─────────────────────────────────────────────
// HERO CAROUSEL — 3 diapositives
// ─────────────────────────────────────────────
export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero/hero-1.svg",
    alt: "Immeuble résidentiel moderne géré par Gestion Immobilière de l'Estrie à Sherbrooke",
    title: "Votre patrimoine, notre priorité",
    description:
      "Nous gérons vos immeubles locatifs avec rigueur, transparence et un service personnalisé adapté au marché estrois.",
  },
  {
    id: 2,
    image: "/images/hero/hero-2.svg",
    alt: "Copropriété bien entretenue administrée à Sherbrooke, Estrie",
    title: "Expertise en copropriété",
    description:
      "Administration professionnelle de syndicats de copropriété : assemblées, finances, règlements et entretien.",
  },
  {
    id: 3,
    image: "/images/hero/hero-3.svg",
    alt: "Service de gestion immobilière 24h/7j en Estrie",
    title: "Service disponible 24h/7j",
    description:
      "Urgences, entretien et suivi en temps réel. Votre tranquillité d'esprit, c'est notre engagement quotidien.",
  },
];

// ─────────────────────────────────────────────
// STATISTIQUES
// ─────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const STATS: Stat[] = [
  { value: "100", label: "Portes gérées", suffix: "+" },
  { value: "500", label: "Portes gérées", suffix: "+" },
  { value: "10", label: "Ans d'expérience", suffix: "+" },
  { value: "24", label: "Disponibilité", suffix: "/7" },
];

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Building2,
    title: "Gestion locative",
    description:
      "Sélection rigoureuse des locataires, perception des loyers, baux et renouvellements — nous gérons tout pour vous.",
    features: [
      "Vérification de crédit et références",
      "Rédaction et renouvellement de baux",
      "Perception et dépôt des loyers",
      "Suivi des arrérages",
    ],
  },
  {
    icon: Users,
    title: "Syndicats de copropriété",
    description:
      "Administration complète de votre syndicat : assemblées annuelles, fond de prévoyance, règlements et litiges.",
    features: [
      "Organisation des assemblées (AGO/AGE)",
      "Gestion du fonds de prévoyance",
      "Application du règlement de l'immeuble",
      "Médiation entre copropriétaires",
    ],
  },
  {
    icon: Wrench,
    title: "Entretien & maintenance",
    description:
      "Réseau de fournisseurs qualifiés pour l'entretien préventif et correctif de vos bâtiments.",
    features: [
      "Inspection régulière des bâtiments",
      "Coordination des travaux",
      "Gestion des urgences 24/7",
      "Suivi des garanties",
    ],
  },
  {
    icon: Phone,
    title: "Service client 24/7",
    description:
      "Ligne d'urgence dédiée, portail en ligne pour locataires et propriétaires, rapports mensuels détaillés.",
    features: [
      "Ligne d'urgence 24h/7j",
      "Portail propriétaire en ligne",
      "Rapports financiers mensuels",
      "Communication transparente",
    ],
  },
];

// ─────────────────────────────────────────────
// POURQUOI NOUS — Points différenciateurs
// ─────────────────────────────────────────────
export interface WhyUsPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_US_POINTS: WhyUsPoint[] = [
  {
    icon: Shield,
    title: "Fiabilité & transparence",
    description:
      "Rapports financiers détaillés chaque mois. Zéro frais caché. Vous gardez le contrôle total de votre investissement.",
  },
  {
    icon: TrendingUp,
    title: "Maximisation de la valeur",
    description:
      "Notre approche proactive réduit les vacances locatives et augmente la valeur de votre actif immobilier à long terme.",
  },
  {
    icon: Clock,
    title: "Réactivité garantie",
    description:
      "Réponse en moins de 4h à toute demande. Urgences traitées immédiatement, 24h/24, 7j/7, 365 jours par an.",
  },
  {
    icon: Star,
    title: "Expertise locale",
    description:
      "Plus de 10 ans d'expérience dans le marché immobilier de Sherbrooke et de l'Estrie. Nous connaissons votre secteur.",
  },
];

// ─────────────────────────────────────────────
// TÉMOIGNAGES
// ─────────────────────────────────────────────
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marie-Josée Tremblay",
    role: "Propriétaire, 3 immeubles à Sherbrooke",
    content:
      "Depuis que j'ai confié la gestion de mes immeubles à l'équipe, je n'ai plus de stress. Les rapports sont clairs, les loyers arrivent toujours à temps et les locataires sont bien sélectionnés. Je recommande sans hésitation!",
    rating: 5,
    initials: "MT",
  },
  {
    name: "Jean-François Côté",
    role: "Président de syndicat, Copropriété Les Jardins",
    content:
      "Gestion professionnelle de notre syndicat depuis 3 ans. L'équipe maîtrise parfaitement la loi sur la copropriété et règle les problèmes avant qu'ils ne deviennent des conflits. Excellent service.",
    rating: 5,
    initials: "JC",
  },
  {
    name: "Sophie Beauchamp",
    role: "Investisseuse immobilière, Magog",
    content:
      "J'ai essayé deux autres gestionnaires avant de choisir Gestion Immobilière de l'Estrie. La différence est nette : transparence, proactivité et vraiment disponibles quand on a besoin d'eux. Bravo!",
    rating: 5,
    initials: "SB",
  },
];

// ─────────────────────────────────────────────
// FAQ — Questions fréquentes
// ─────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quels types de propriétés gérez-vous?",
    answer:
      "Nous gérons tous types d'immeubles résidentiels : appartements (duplex, triplex, plex, tour), maisons en copropriété (condos), ainsi que les syndicats de copropriété. Nous couvrons Sherbrooke et toute la région de l'Estrie.",
  },
  {
    question: "Quels sont vos honoraires de gestion?",
    answer:
      "Nos honoraires sont compétitifs et transparents, généralement entre 6% et 10% des revenus bruts selon la taille et le type d'immeuble. Contactez-nous pour une soumission personnalisée sans engagement — nous n'avons aucun frais caché.",
  },
  {
    question: "Comment se passe la sélection des locataires?",
    answer:
      "Notre processus de sélection inclut une vérification de crédit, des références d'anciens propriétaires, une vérification du dossier judiciaire et une évaluation de la stabilité financière. Nous respectons scrupuleusement la Charte des droits et libertés du Québec.",
  },
  {
    question: "Que se passe-t-il en cas d'urgence la nuit ou la fin de semaine?",
    answer:
      "Nous disposons d'une ligne d'urgence disponible 24h/7j, 365 jours par an. En cas de problème urgent (dégât d'eau, panne de chauffage, etc.), notre équipe intervient rapidement et coordonne les travaux d'urgence. Vous êtes informé en temps réel.",
  },
  {
    question: "Comment puis-je suivre la gestion de mon immeuble?",
    answer:
      "Nous vous donnons accès à un portail propriétaire en ligne où vous pouvez consulter les rapports financiers mensuels, le statut des loyers, les demandes de maintenance et toutes les communications. La transparence est au cœur de notre approche.",
  },
  {
    question: "Prenez-vous en charge les procédures auprès du Tribunal administratif du logement (TAL)?",
    answer:
      "Oui, nous accompagnons les propriétaires dans les démarches auprès du TAL (ex-Régie du logement) : dépôt de demandes, préparation des dossiers, représentation lors des audiences. Nous connaissons bien les procédures québécoises.",
  },
  {
    question: "Quelle est la durée minimale d'un contrat de gestion?",
    answer:
      "Nos contrats sont généralement d'une durée d'un an, renouvelables. Nous croyons en la qualité de notre service pour fidéliser nos clients — pas dans les clauses pénales difficiles à quitter. La résiliation avec préavis raisonnable est toujours possible.",
  },
];

// ─────────────────────────────────────────────
// COORDONNÉES
// ─────────────────────────────────────────────
export const COMPANY_INFO = {
  name: "Gestion Immobilière de l'Estrie",
  phone: "(819) 975-4599",
  phoneRaw: "8199754599",
  email: "info@immoestrie.ca",
  whatsapp: "18199754599",
  hours: "Lun–Ven : 8h30–17h | Urgences : 24/7",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44752.56!2d-71.90!3d45.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb7b36c2b45!2sSherbrooke%2C+QC!5e0!3m2!1sfr!2sca",
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
} as const;

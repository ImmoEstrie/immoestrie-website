// === COMPOSANT CHAT ICON ===
// Icône SVG personnalisée pour le widget de chat flottant
// Design: Fond cercle marine, bulle de dialogue blanche, maison dorée
// Basé sur le design "Fond marine" approuvé par le client

interface ChatIconProps {
  /** Taille en pixels (par défaut 60px) */
  size?: number;
}

/**
 * Icône SVG du chat widget.
 * Représente une maison dans une bulle de dialogue — suggère "nous parler de vos propriétés".
 * Conçue pour être lisible à petite taille (48×48px).
 */
export default function ChatIcon({ size = 60 }: ChatIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" // Masqué aux lecteurs d'écran (le bouton parent a un label)
      focusable="false"
    >
      {/* Fond cercle bleu marine */}
      <circle cx="90" cy="90" r="90" fill="#1a2744" />

      {/* Bulle de dialogue blanche */}
      <path
        d="M42 52 h96 a12 12 0 0 1 12 12 v52 a12 12 0 0 1 -12 12 h-52 l-22 22 v-22 h-22 a12 12 0 0 1 -12 -12 v-52 a12 12 0 0 1 12 -12 z"
        fill="#ffffff"
        // Légère ombre interne pour la profondeur
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
      />

      {/* Maison dorée — silhouette simplifiée */}
      {/* Toit triangulaire */}
      <path
        d="M90 72 l30 22 v30 h-18 v-18 h-24 v18 h-18 v-30 z"
        fill="#c9a961"
      />
      {/* Détail: porte de la maison */}
      <rect x="81" y="108" width="18" height="16" rx="2" fill="#1a2744" opacity="0.35" />
      {/* Faîtage du toit (ligne de pointe) */}
      <circle cx="90" cy="72" r="3" fill="#c9a961" />
    </svg>
  );
}

# 🏢 Gestion Immobilière de l'Estrie — Site Web

Site vitrine professionnel pour **Gestion Immobilière de l'Estrie**, entreprise québécoise de gestion d'immeubles locatifs et de copropriétés basée à Sherbrooke.

---

## 🚀 Installation & Démarrage

### Prérequis
- [Node.js](https://nodejs.org/) v18+ 
- npm v9+ (ou pnpm/yarn)

### Étapes

```bash
# 1. Entrer dans le dossier du projet
cd design

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm run start
```

---

## 📁 Structure du Projet

```
design/
├── public/
│   ├── images/
│   │   └── hero/           # Images SVG des diapositives hero
│   │       ├── hero-1.svg  # Immeuble nocturne
│   │       ├── hero-2.svg  # Coucher de soleil / copropriété
│   │       └── hero-3.svg  # Façade diurne résidentielle
│   └── logo/
│       └── logo.svg        # Logo SVG vectoriel
│
├── src/
│   ├── app/
│   │   ├── globals.css     # Styles globaux, variables CSS, Tailwind
│   │   ├── layout.tsx      # RootLayout: polices, metadata SEO, Open Graph
│   │   └── page.tsx        # Page principale (assemble toutes les sections)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx  # Navigation sticky, menu hamburger mobile
│   │   │   └── Footer.tsx  # Pied de page 4 colonnes
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroCarousel.tsx   # Carousel 3 slides, auto-play, ARIA
│   │   │   ├── StatsBar.tsx       # 4 statistiques animées (count-up)
│   │   │   ├── Services.tsx       # Cards des 4 services
│   │   │   ├── WhyUs.tsx          # Points différenciateurs
│   │   │   ├── Testimonials.tsx   # Slider témoignages clients
│   │   │   ├── FAQ.tsx            # Accordéon FAQ (Radix UI)
│   │   │   └── Contact.tsx        # Formulaire + coordonnées + carte
│   │   │
│   │   └── ui/
│   │       ├── ChatIcon.tsx  # Icône SVG du widget chat (maison + bulle)
│   │       └── ChatWidget.tsx # Bouton flottant WhatsApp (bas-droite)
│   │
│   └── lib/
│       ├── constants.ts    # Toutes les données statiques du site
│       └── utils.ts        # Helper cn() et utilitaires
│
├── tailwind.config.ts  # Configuration Tailwind (couleurs, fonts, breakpoints)
├── next.config.ts      # Configuration Next.js (images, optimisations)
├── tsconfig.json       # Configuration TypeScript
├── postcss.config.js   # Configuration PostCSS
└── package.json        # Dépendances et scripts
```

---

## 🎨 Palette de couleurs

| Variable     | Hex       | Usage                          |
|-------------|-----------|-------------------------------|
| `navy`      | `#1a2744` | Fond navbar, footer, titres   |
| `gold`      | `#c9a961` | Boutons CTA, accents, badges  |
| `white`     | `#ffffff` | Textes sur fond sombre, cards |
| `gray-light`| `#f5f5f5` | Backgrounds sections secondaires |

---

## 🛠️ Stack Technique

| Technologie        | Version | Usage                          |
|-------------------|---------|-------------------------------|
| Next.js           | 14.2.5  | Framework React (App Router)  |
| TypeScript        | 5.5     | Typage statique               |
| Tailwind CSS      | 3.4     | Styling utility-first         |
| Framer Motion     | 11.3    | Animations et transitions     |
| @radix-ui/react-accordion | 1.2 | FAQ accordéon (base shadcn/ui) |
| react-hook-form   | 7.52    | Gestion formulaire contact    |
| Zod               | 3.23    | Validation schéma formulaire  |
| Lucide React      | 0.414   | Icônes SVG                    |

---

## 📱 Responsive Breakpoints

| Breakpoint | Largeur   | Comportement                     |
|-----------|-----------|----------------------------------|
| `xs`      | 375px     | Mobile portrait                  |
| `sm`      | 640px     | Mobile paysage                   |
| `md`      | 768px     | Tablette                         |
| `lg`      | 1024px    | Desktop standard                 |
| `xl`      | 1280px    | Desktop large                    |
| `2xl`     | 1440px    | Desktop très large               |

---

## ♿ Accessibilité

- Contraste AA minimum respecté (navy sur blanc, or sur marine)
- Focus states visibles sur tous les éléments interactifs
- `alt` descriptif sur toutes les images
- ARIA roles complets sur le carousel hero (`region`, `tablist`, `tab`)
- ARIA roles sur le slider témoignages
- Lien "Aller au contenu principal" en haut de page
- Menu mobile avec `role="dialog"` et `aria-modal="true"`
- Formulaire avec `aria-invalid`, `aria-describedby` pour les erreurs
- `lang="fr"` sur l'élément HTML
- Support `prefers-reduced-motion` (animations désactivées si préféré)

---

## 🔧 Personnalisation

### Modifier les données du site
Toutes les données statiques (services, FAQ, témoignages, coordonnées) sont centralisées dans:
```
src/lib/constants.ts
```

### Remplacer les images hero
Remplacer les fichiers SVG par vos vraies photos JPG/WebP dans:
```
public/images/hero/hero-1.jpg (ou .webp)
public/images/hero/hero-2.jpg
public/images/hero/hero-3.jpg
```
Puis mettre à jour `image` dans `HERO_SLIDES` dans `constants.ts`.

### Configurer WhatsApp
Changer `whatsapp` dans `COMPANY_INFO` (constants.ts) avec votre vrai numéro international.

### Configurer le formulaire de contact
Dans `Contact.tsx`, remplacer la simulation `setTimeout` par un vrai appel API:
```typescript
// Route API: src/app/api/contact/route.ts
await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
```

---

## 📧 Contact Développement

Site créé avec ❤️ pour **Gestion Immobilière de l'Estrie**  
Sherbrooke, Québec, Canada
>>>>>>> 866392b (Initial commit)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // === OPTIMISATION DES IMAGES ===
  images: {
    // Formats modernes pour de meilleures performances
    formats: ["image/avif", "image/webp"],
    // Domaines autorisés pour les images externes (ex: maps, placeholders)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
    // Tailles de conteneurs pour le composant next/image
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // === OPTIONS EXPÉRIMENTALES ===
  experimental: {
    // Optimisation des packages serveur
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;

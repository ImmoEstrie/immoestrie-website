import { Phone } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";

// TopBar statique — coordonnées de contact centrées, sans défilement
export default function TopBar() {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_#1e3a5f_0%,_#1a2744_35%,_#0f172a_65%,_#020617_100%)] text-white h-9 flex items-center overflow-hidden fixed top-0 inset-x-0 z-[60]">
      <div className="flex items-center justify-center gap-9 w-full px-4 flex-wrap">
        <a
          href="tel:+18199754599"
          className="inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap hover:opacity-80 transition-opacity"
          aria-label="Appeler au +1 819 975 4599"
        >
          <ReactCountryFlag
            countryCode="CA"
            svg
            style={{ width: "1.2em", height: "1.2em" }}
            title="Canada"
            aria-label="Canada"
          />
          <Phone className="w-4 h-4 text-[#22c55e] shrink-0" aria-hidden="true" />
          <span>+1 (819) 975-4599</span>
        </a>
        {/* <span className="opacity-60 select-none" aria-hidden="true">•</span> */}
        <a
          href="mailto:info@immoestrie.ca"
          className="inline-flex items-center gap-1.5 text-sm whitespace-nowrap hover:opacity-80 transition-opacity"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt="Gmail"
            width={16}
            height={16}
            className="w-4 h-4 shrink-0"
            aria-hidden="true"
          />
          <span>info@immoestrie.ca</span>
        </a>
        {/* <span className="opacity-60 select-none hidden sm:inline" aria-hidden="true">•</span> */}
        <span className="hidden sm:inline-flex items-center gap-1.5 text-sm whitespace-nowrap">
          <ReactCountryFlag
            countryCode="CA"
            svg
            style={{ width: "1.2em", height: "1.2em" }}
            title="Canada"
            aria-label="Canada"
          />
          <span>Sherbrooke, QC</span>
        </span>
        {/* <span className="opacity-60 select-none hidden sm:inline" aria-hidden="true">•</span> */}
        <span className="hidden sm:inline text-sm whitespace-nowrap opacity-90">
          Disponible 24h/24
        </span>

        {/* Réseaux sociaux — couleurs officielles */}
        <span className="inline-flex items-center gap-2">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100095206657906"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex items-center justify-center hover:scale-110 transition-transform shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22" height="22">
              <rect width="50" height="50" rx="12" fill="#1877F2" />
              <path
                fill="#fff"
                d="M31.5 25.5l.9-5.6h-5.4v-3.6c0-1.5.75-3 3.15-3h2.44v-4.8s-2.2-.38-4.32-.38c-4.4 0-7.28 2.67-7.28 7.5v4.24H16v5.6h5.99V44c1.2.19 2.43.29 3.68.29s2.48-.1 3.68-.29V25.5h4.15Z"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
             href="https://www.instagram.com/gestion_immo_estrie/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-15 h-15 rounded-full overflow-hidden hover:scale-110 transition-transform"
            >
              <Image
                src="/images/instagram-image.png"
                alt="Instagram"
                width={30}
                height={30}
                className="object-contain"
              />
            </a>
        </span>
      </div>
    </div>
  );
}
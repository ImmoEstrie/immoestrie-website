import { Phone } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export default function TopBar() {
  const content = (
    <>
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
      <span className="opacity-60 select-none" aria-hidden="true">
        •
      </span>
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
      <span className="opacity-60 select-none hidden sm:inline" aria-hidden="true">
        •
      </span>
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
      <span className="opacity-60 select-none hidden sm:inline" aria-hidden="true">
        •
      </span>
      <span className="hidden sm:inline text-sm whitespace-nowrap opacity-90">
        Disponible 24h/24
      </span>
    </>
  );

  return (
    <div className="w-full bg-primary text-white h-9 flex items-center overflow-hidden fixed top-0 inset-x-0 z-[60]">
      {/* Marquee défilant - pause au survol */}
      <div className="marquee w-full">
        <div className="marquee-content items-center">
          <div className="flex items-center gap-8 shrink-0 pr-8">{content}</div>
          <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
            {content}
          </div>
          <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
            {content}
          </div>
          <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

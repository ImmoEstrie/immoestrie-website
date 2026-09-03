export default function Logo({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="100" cy="100" r="88" stroke="url(#logoBlue)" strokeWidth="18" filter="url(#logoGlow)" />
      <path d="M52 132 L100 52 L148 132" stroke="url(#logoBlue)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 132 L100 82 L148 132" stroke="url(#logoBlue)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="52" y="62" width="16" height="34" rx="3" fill="url(#logoBlue)" />
      <rect x="82" y="108" width="15" height="15" rx="2" fill="#1e293b" />
      <rect x="103" y="108" width="15" height="15" rx="2" fill="#1e293b" />
      <rect x="82" y="127" width="15" height="15" rx="2" fill="#1e293b" />
      <rect x="103" y="127" width="15" height="15" rx="2" fill="#1e293b" />
    </svg>
  );
}
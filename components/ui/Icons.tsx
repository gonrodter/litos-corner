/** Iconos inline (sin dependencias). Heredan color con currentColor. */
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const IconPhone = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const IconPin = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const IconMenu = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
    <path d="M4 5h16M4 12h16M4 19h10" />
  </svg>
);

export const IconClose = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconArrow = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconBurger = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
    <path d="M4 10a8 5 0 0 1 16 0zM3 14h18M4 17.5h16a0 0 0 0 1 0 0A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5z" />
  </svg>
);

export const IconClock = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconInstagram = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
  </svg>
);

export const IconTikTok = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M16.6 2h-3.3v13.2a2.9 2.9 0 1 1-2-2.8V9a6.3 6.3 0 1 0 5.3 6.2V8.6a8 8 0 0 0 4.4 1.3V6.6a4.6 4.6 0 0 1-4.4-4.6z" />
  </svg>
);

export const IconBag = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
    <path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

export const IconStar =({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z" />
  </svg>
);

export const IconPlay = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    {/* Centrado óptico: la caja va medio punto a la derecha del centro, donde el ojo ve el centro de un triángulo. */}
    <path d="M6 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 6 5.5z" />
  </svg>
);

/** Púa de guitarra. */
export const IconPick = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M12 2.5c4.6 0 8.5 1.6 8.5 4.8 0 4.8-5.7 14.2-8.5 14.2S3.5 12.1 3.5 7.3C3.5 4.1 7.4 2.5 12 2.5z" />
  </svg>
);

export const IconBolt = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
    <path d="M14 1.5 4.5 13.5H11L9.5 22.5 19.5 10H13z" />
  </svg>
);

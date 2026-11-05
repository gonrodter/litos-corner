/**
 * Cartel de carretera dibujado en SVG (chapa roja, banderola y flecha de
 * bombillas con neón). Sirve también de boceto para la
 * pieza IA equivalente.
 */
export default function RoadSign({ className = "" }: { className?: string }) {
  const arrowBulbs = Array.from({ length: 14 }, (_, i) => i);
  const frameBulbs = Array.from({ length: 11 }, (_, i) => i);
  const ink = "#1c0d0c";

  return (
    <svg viewBox="0 0 420 372" className={className} role="img" aria-label="Cartel retro de Lito’s: Burgers, Beer, Rock, Open late">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* En móvil el cartel va solo y centrado: se compensa el desvío del dibujo (unidades del viewBox). */}
      <g className="max-md:translate-x-[8px]">
      {/* panel principal */}
      <rect x="26" y="12" width="352" height="250" rx="22" fill="#8c1d22" stroke={ink} strokeWidth="5" />
      <rect x="40" y="26" width="324" height="222" rx="14" fill="none" stroke="#f3daa2" strokeWidth="2.5" />
      <rect x="47" y="33" width="310" height="208" rx="10" fill="none" stroke="#e28c22" strokeWidth="1.5" />
      <text x="202" y="132" textAnchor="middle" fill="#f3daa2" textLength="280" lengthAdjust="spacingAndGlyphs"
        style={{ fontFamily: "var(--font-ultra)", fontSize: 92 }}>
        LITO’S
      </text>
      <rect x="74" y="150" width="256" height="50" rx="4" fill="#e28c22" />
      <text x="202" y="186" textAnchor="middle" fill="#fff8ee"
        style={{ fontFamily: "var(--font-jost)", fontWeight: 700, fontStyle: "italic", fontSize: 34, letterSpacing: 6 }}>
        BURGERS
      </text>
      <text x="202" y="230" textAnchor="middle" fill="#f3daa2" style={{ fontFamily: "var(--font-damion)", fontSize: 28 }}>
        beer · rock · fries
      </text>

      {/* flecha con bombillas: en escritorio desplazada a la izquierda, apuntando al texto; en móvil, centrada bajo el panel */}
      <g className="max-md:translate-x-[21px]">
      <path d="M30 292 H292 L332 328 L292 364 H30 Z" fill={ink} stroke="#e28c22" strokeWidth="4" />
      {arrowBulbs.map((i) => (
        <circle key={i} className="bulb" style={{ animationDelay: `${i * 0.12}s` }} cx={46 + i * 18} cy="303" r="4.2" fill="#fff1c4" />
      ))}
      {arrowBulbs.map((i) => (
        <circle key={`b${i}`} className="bulb" style={{ animationDelay: `${(13 - i) * 0.12}s` }} cx={46 + i * 18} cy="353" r="4.2" fill="#fff1c4" />
      ))}
      <text x="168" y="342" textAnchor="middle" fill="#ffeae4" filter="url(#glow)" className="animate-flicker"
        style={{ fontFamily: "var(--font-damion)", fontSize: 42 }}>
        Open late
      </text>
      </g>

      {/* bombillas superiores */}
      {frameBulbs.map((i) => (
        <circle key={`f${i}`} className="bulb" style={{ animationDelay: `${i * 0.15}s` }} cx={52 + i * 30} cy="12" r="5" fill="#fff1c4" stroke={ink} strokeWidth="2" />
      ))}
      </g>
    </svg>
  );
}

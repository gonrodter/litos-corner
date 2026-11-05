/**
 * Separador ondulado con filete naranja, como los de la referencia.
 * `fill` es el color de la sección que viene; se coloca al pie de la anterior.
 */
export default function Wave({ fill, flip = false, className = "" }: { fill: string; flip?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={`block h-6 w-full md:h-10 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d="M0 22 C 240 4, 480 4, 720 22 S 1200 40, 1440 22 V48 H0 Z" fill={fill} />
      <path d="M0 22 C 240 4, 480 4, 720 22 S 1200 40, 1440 22" fill="none" stroke="#e28c22" strokeWidth="4" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/**
 * Fila de bombillas de marquesina que parpadean en ola. `count` bombillas
 * repartidas a lo largo; horizontal o vertical.
 */
export default function Bulbs({
  count = 20,
  vertical = false,
  className = "",
  color = "#fff1c4",
  style,
}: {
  count?: number;
  vertical?: boolean;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span aria-hidden style={style} className={`pointer-events-none flex justify-between ${vertical ? "flex-col" : ""} ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="bulb block size-[7px] shrink-0 rounded-full"
          style={{ background: color, boxShadow: `0 0 6px ${color}`, animationDelay: `${(i % 8) * 0.2}s` }}
        />
      ))}
    </span>
  );
}

/**
 * Marco completo de bombillas alrededor de un contenedor `relative`.
 * `inset` es la distancia (px) del borde a la línea de bombillas.
 * `edge` (longitud CSS, admite var()) coloca el centro de la línea de
 * bombillas a esa distancia del borde; tiene prioridad sobre `inset`.
 */
export function BulbFrame({ x = 22, y = 12, inset = 8, edge }: { x?: number; y?: number; inset?: number; edge?: string }) {
  const side = edge ? `calc(${edge} - 3.5px)` : inset / 2 - 3.5;
  const start = edge ? `calc(${edge} * 2)` : inset;
  return (
    <>
      <Bulbs count={x} className="absolute" style={{ left: start, right: start, top: side }} />
      <Bulbs count={x} className="absolute" style={{ left: start, right: start, bottom: side }} />
      <Bulbs count={y} vertical className="absolute" style={{ top: start, bottom: start, left: side }} />
      <Bulbs count={y} vertical className="absolute" style={{ top: start, bottom: start, right: side }} />
    </>
  );
}

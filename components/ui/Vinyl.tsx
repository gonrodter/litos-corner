/**
 * Disco de vinilo decorativo: surcos, etiqueta naranja y un brillo fijo que
 * no gira con el disco (así se nota que da vueltas).
 */
export default function Vinyl({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none aspect-square rounded-full ${className}`}>
      <div className="animate-vinyl absolute inset-0 rounded-full bg-[repeating-radial-gradient(circle,#0b0505_0_2px,#241210_2px_3px)] shadow-[0_0_0_2px_#ffffff10,0_30px_60px_-20px_#000]">
        <div className="absolute inset-[34%] grid place-items-center rounded-full bg-orange">
          <span className="font-script text-[1.1em] leading-none text-maroon">Lito’s</span>
          <span className="absolute size-[9%] rounded-full bg-night" />
        </div>
      </div>
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_20deg,transparent_0_10%,#ffffff14_16%,transparent_24%_60%,#ffffff10_66%,transparent_74%)]" />
    </div>
  );
}

import Image from "next/image";
import { IconStar } from "./Icons";

/**
 * Wordmark provisional (con `mark`, logo redondo a la izquierda): "Lito’s" en cursiva de rótulo con
 * "Corner" en mayúsculas y estrellas debajo. Sustituir por el logo vectorial.
 */
export default function Logo({ className = "", mark = false }: { className?: string; mark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-[0.6em] leading-none ${className}`}>
      {mark && <Image src="/images/logo-litos.png" alt="" width={128} height={128} loading="eager" unoptimized className="size-[3em] shrink-0 transition-transform duration-[1.4s] ease-smooth group-hover:rotate-[1turn]" />}
      <span className="inline-flex flex-col items-center">
        <span className="font-script text-[2.4em] leading-[0.8]">Lito’s</span>
        <span className="mt-[0.2em] flex items-center gap-[0.4em] text-[0.62em] font-bold tracking-[0.18em] uppercase">
          <IconStar className="size-[0.9em] text-orange" />
          Corner
          <IconStar className="size-[0.9em] text-orange" />
        </span>
      </span>
    </span>
  );
}

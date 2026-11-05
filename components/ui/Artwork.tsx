import Image from "next/image";
import type { ImageSlot } from "@/lib/content";

/**
 * Hueco de imagen. Con `src` pinta la foto; sin `src`, un placeholder sobrio
 * con el brief de la pieza para que quede claro qué va ahí.
 */
type Props = {
  slot: ImageSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "maroon" | "night" | "butter" | "orange";
};

const tones = {
  maroon: "bg-maroon-deep text-butter/70",
  night: "bg-night-2 text-butter/60",
  butter: "bg-butter-soft text-maroon/60",
  orange: "bg-orange-dark text-milk/80",
};

export default function Artwork({ slot, className = "", sizes = "100vw", priority, tone = "maroon" }: Props) {
  if (slot.src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover transition-[scale] duration-1000 ease-smooth group-hover:scale-105" />
      </div>
    );
  }

  return (
    <div role="img" aria-label={slot.alt} className={`relative flex flex-col items-center justify-center overflow-hidden p-6 text-center ${tones[tone]} ${className}`}>
      <span className="font-script text-2xl">{slot.kind === "artwork" ? "Artwork" : "Foto"}</span>
      <p className="mt-2 max-w-[30ch] text-sm leading-snug">{slot.brief}</p>
    </div>
  );
}

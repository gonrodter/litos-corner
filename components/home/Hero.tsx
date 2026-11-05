import Image from "next/image";
import Button from "../ui/Button";
import { BulbFrame } from "../ui/Bulbs";
import { IconBolt, IconStar } from "../ui/Icons";
import { Spotlights } from "./HeroRock";
import { OrderButton } from "../OrderDialog";
import { hasOrder, home, images } from "@/lib/content";

/**
 * Hero: tablero de menú iluminado como pieza central. Si llega el artwork IA
 * (images.heroSign) se pinta la imagen en su lugar con el mismo marco.
 */
function MenuBoard() {
  const b = home.board;
  return (
    <div className="relative rounded-md border-2 border-orange p-3.5 [--bulb-edge:7px] md:p-6 md:[--bulb-edge:12px]">
      <BulbFrame x={26} y={14} edge="var(--bulb-edge)" />
      <div className="border-2 border-orange p-1.5">
        <div className="bg-butter px-4 py-4 text-night md:px-12 md:py-9">
          <p className="text-center font-script text-[1.7rem] leading-none text-maroon md:text-4xl">{b.top}</p>
          <ul className="mt-2 space-y-2 md:mt-4 md:space-y-4">
            {b.items.map((it) => (
              <li key={it.name}>
                <span className="block font-script text-lg leading-none text-orange-dark md:text-2xl">{it.script}</span>
                <span className="flex items-end gap-2">
                  <span className="text-[clamp(1.2rem,5.4vw,3.1rem)] leading-none font-bold whitespace-nowrap uppercase italic">{it.name}</span>
                  <span aria-hidden className="mb-[0.45em] flex-1 border-b-[3px] border-dotted border-night/70" />
                  <IconStar className="mb-1 size-5 shrink-0 text-maroon md:size-7" />
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-center font-script text-xl text-maroon md:mt-6 md:text-4xl">~ {b.extra} ~</p>
        </div>
        <p className="flex items-center justify-center gap-2 bg-maroon pt-3 pb-2 font-sign text-[clamp(1.05rem,5vw,2.6rem)] text-butter uppercase [text-shadow:2px_2px_0_var(--color-orange-dark)] md:gap-5">
          {b.strip.map((w, i) => (
            <span key={w} className="flex items-center gap-2 md:gap-5">
              {i > 0 && (i === b.strip.length - 1 ? <IconBolt className="size-4 text-orange md:size-8" /> : <IconStar className="size-3 text-orange md:size-6" />)}
              {w}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pattern-diamond relative overflow-hidden text-butter">
      <Spotlights />
      <div className="relative mx-auto max-w-4xl px-4 pt-5 pb-8 md:px-8 md:pt-12 md:pb-14">
        <p className="intro mb-4 text-center [--intro-delay:150ms] md:mb-6">
          <span className="neon-text animate-flicker inline-block rounded-xl bg-night px-5 py-1 font-script text-2xl leading-none shadow-[inset_0_0_0_2px_#ff5a4555] md:text-3xl">Rock &amp; roll</span>
        </p>
        {/* Entrada al cargar (fuera) y alejamiento al hacer scroll (dentro): cada uno en su capa para no pisarse el transform. */}
        <div className="intro-pop">
        <div className="scroll-recede origin-top">
        {images.heroSign.src ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image src={images.heroSign.src} alt={images.heroSign.alt} fill priority sizes="(min-width:900px) 860px, 100vw" className="object-cover" />
          </div>
        ) : (
          <MenuBoard />
        )}
        </div>
        </div>

        <div className="mt-5 flex flex-col items-center text-center md:mt-10">
          <h1 className="intro title text-base tracking-[0.06em] [--intro-delay:350ms] sm:text-xl md:text-2xl">{home.h1}</h1>
          <div className="intro mt-4 grid [--intro-delay:500ms] w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:justify-center">
            <Button href="/carta" size="lg" className="max-sm:px-3 max-sm:text-[1.45rem]">Ver la carta</Button>
            {hasOrder ? (
              <OrderButton size="lg" variant="outline" className="max-sm:px-3 max-sm:text-[1.45rem]">Pide online</OrderButton>
            ) : (
              <Button href="/#locales" size="lg" variant="outline" className="max-sm:px-3 max-sm:text-[1.45rem]">Locales</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

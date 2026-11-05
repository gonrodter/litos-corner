import Artwork from "../ui/Artwork";
import Reveal from "../ui/Reveal";
import Vinyl from "../ui/Vinyl";
import { IconPick } from "../ui/Icons";
import { home, images } from "@/lib/content";

/** Bloque de noche: titular en neón y mosaico de fotos del local. */
const layout = ["col-span-2 row-span-2", "col-span-1", "col-span-1 row-span-2", "col-span-1"];
const tones = ["maroon", "night", "maroon", "orange"] as const;

export default function Ambience() {
  const c = home.ambience;
  return (
    <section id="ambiente" className="grain overflow-hidden bg-night text-butter">
      <div aria-hidden className="scroll-parallax pointer-events-none absolute -top-48 left-1/2 size-[760px] [--parallax:80px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#ff5a4530,transparent_65%)]" />
      <Vinyl className="scroll-parallax absolute top-10 -right-40 hidden w-[420px] text-4xl opacity-70 [--parallax:40px] lg:block xl:-right-28" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-28">
        <Reveal className="text-center">
          <p className="neon-text animate-flicker font-script text-[clamp(3rem,8vw,6rem)] leading-none">{c.neon}</p>
          <h2 className="title mt-6 text-[clamp(2rem,4.6vw,3.4rem)]">{c.title}</h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-lg leading-snug text-butter/80 md:text-xl">{c.body}</p>
          <ul className="mx-auto mt-7 grid max-w-sm grid-cols-2 gap-x-4 gap-y-3 text-left text-sm sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-8 sm:text-base">
            {c.points.map((p) => (
              <li key={p} className="flex items-center gap-2 font-semibold uppercase tracking-[0.04em]">
                <IconPick className="size-4 -rotate-12 text-orange" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 grid auto-rows-[130px] md:mt-14 grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4 lg:auto-rows-[220px]">
          {images.ambience.map((img, i) => (
            <Reveal key={i} delay={i * 80} variant="scale" className={layout[i]}>
              <Artwork slot={img} tone={tones[i]} className="scroll-zoom group size-full rounded-xl" sizes="(min-width:768px) 40vw, 90vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

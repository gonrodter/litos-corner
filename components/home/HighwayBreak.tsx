import Image from "next/image";
import Link from "next/link";
import { home, images, locations } from "@/lib/content";

/**
 * Separador panorámico. Con artwork IA (images.highwayArt) se pinta a sangre;
 * sin él, un cartel de autopista verde por local sobre un atardecer. Cada
 * cartel enlaza a la ficha de su local.
 */
export default function HighwayBreak() {
  const c = home.highway;
  const art = images.highwayArt;

  if (art.src) {
    return (
      <section aria-label={art.alt} className="relative aspect-[21/9] min-h-[260px]">
        <Image src={art.src} alt={art.alt} fill sizes="100vw" className="object-cover" />
      </section>
    );
  }

  return (
    <section aria-label={art.alt} className="relative overflow-hidden bg-[linear-gradient(180deg,#f0b24c_0%,#e07a35_45%,#8c1d22_82%,#1c0d0c_100%)] pt-14 md:pt-24">
      {/* sol a rayas */}
      <div aria-hidden className="scroll-parallax absolute top-[4%] left-1/2 size-[80vw] [--parallax:50px] max-h-[520px] max-w-[520px] -translate-x-1/2 rounded-full bg-[repeating-linear-gradient(180deg,#ffe08f_0_16px,transparent_16px_26px)] opacity-60 [mask-image:linear-gradient(180deg,#000_28%,transparent_46%)]" />
      {/* palmeras */}
      <svg aria-hidden viewBox="0 0 200 300" className="absolute bottom-0 left-[-6%] h-[60%] fill-night opacity-90 md:left-[2%] md:h-[70%]">
        <path d="M98 300 C 102 220, 96 150, 104 90 L 110 90 C 104 150, 110 220, 108 300 Z" />
        <path d="M106 92 C 70 60, 30 70, 4 100 C 40 80, 70 80, 106 92 Z M106 92 C 140 56, 178 62, 198 92 C 166 76, 140 76, 106 92 Z M106 90 C 92 50, 60 28, 26 30 C 62 40, 86 58, 106 90 Z M106 90 C 120 48, 150 26, 186 26 C 150 38, 126 56, 106 90 Z" />
      </svg>
      <svg aria-hidden viewBox="0 0 200 300" className="absolute right-[-4%] bottom-0 h-[46%] -scale-x-100 fill-night opacity-90 md:right-[3%] md:h-[54%]">
        <path d="M98 300 C 102 220, 96 150, 104 90 L 110 90 C 104 150, 110 220, 108 300 Z" />
        <path d="M106 92 C 70 60, 30 70, 4 100 C 40 80, 70 80, 106 92 Z M106 92 C 140 56, 178 62, 198 92 C 166 76, 140 76, 106 92 Z M106 90 C 92 50, 60 28, 26 30 C 62 40, 86 58, 106 90 Z M106 90 C 120 48, 150 26, 186 26 C 150 38, 126 56, 106 90 Z" />
      </svg>

      <ul className="relative mx-auto grid max-w-5xl gap-y-5 px-4 md:grid-cols-2 md:gap-x-10 md:px-8">
        {locations.map((l, i) => {
          // El cartel de la izquierda apunta a la izquierda y viceversa.
          const left = i % 2 === 0;
          return (
            <li key={l.slug}>
              <Link
                href={`/locales/${l.slug}`}
                className="lift group relative z-10 block rounded-2xl border-[5px] border-milk bg-highway p-1.5 shadow-[0_24px_50px_rgba(28,13,12,.45)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-milk"
              >
                <div className="rounded-xl border-2 border-milk/90 px-5 py-5 text-milk md:px-7 md:py-6">
                  <div className={`flex items-start justify-between gap-5 ${left ? "md:flex-row-reverse" : ""}`}>
                    <div className={`font-road ${left ? "md:text-right" : ""}`}>
                      <p className="text-[clamp(1.6rem,6.4vw,2.7rem)] leading-none font-extrabold whitespace-nowrap">{c.line1}</p>
                      <p className="mt-2 text-[clamp(1.05rem,3vw,1.5rem)] leading-none font-semibold opacity-90">{l.area}</p>
                      {l.area !== l.city && <p className="mt-1.5 text-sm leading-none font-semibold opacity-75 md:text-base">{l.city}</p>}
                    </div>
                    <svg viewBox="0 0 60 60" className={`size-10 shrink-0 rotate-45 transition-transform duration-500 ease-spring group-hover:scale-115 sm:size-14 ${left ? "md:-rotate-45" : ""}`} aria-hidden>
                      <path d="M30 6 L52 30 H38 V54 H22 V30 H8 Z" fill="#fff8ee" />
                    </svg>
                  </div>
                </div>
                <span className={`absolute -top-5 rounded-md border-[3px] border-milk bg-highway px-3 py-0.5 font-road text-sm font-extrabold tracking-[0.12em] text-milk uppercase md:text-base right-6 ${left ? "md:right-auto md:left-6" : ""}`}>
                  {i === 0 ? c.exit : `Exit ${i + 1}`}
                </span>
              </Link>
              {/* Los postes nacen por detrás del cartel: al levantarse con el hover, siguen unidos a él y al suelo. */}
              <div aria-hidden className="mx-auto -mt-8 flex max-w-xs justify-between px-12">
                <span className="h-18 w-3 bg-night md:h-36" />
                <span className="h-18 w-3 bg-night md:h-36" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

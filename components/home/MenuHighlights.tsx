import Link from "next/link";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { IconStar } from "../ui/Icons";
import { home } from "@/lib/content";

/** Destacados de carta: cuatro tablillas de menú sobre el granate. */
export default function MenuHighlights() {
  const c = home.menuIntro;
  return (
    <section id="carta" className="pattern-diamond text-butter">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-28">
        <Reveal className="text-center">
          <h2 className="title text-[clamp(2.2rem,5vw,3.6rem)]">{c.title}</h2>
          <p className="mt-2 font-script text-3xl text-orange">{c.body}</p>
        </Reveal>

        <ul className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {home.highlights.map((cat, i) => (
            <Reveal as="li" key={cat.id} delay={i * 90} variant="scale" className="h-auto w-[82%] shrink-0 snap-center sm:h-full sm:w-auto">
              <Link href="/carta" className="lift group block h-full rounded-md bg-butter p-1.5 text-maroon">
                <div className="flex h-full flex-col rounded-sm border-2 border-maroon px-5 pt-5 pb-6">
                  <p className="text-center font-script text-2xl leading-none text-orange-dark">{cat.kicker}</p>
                  <h3 className="mt-1 text-center font-sign text-4xl uppercase">{cat.title}</h3>
                  <p className="mt-2 text-center text-lg leading-snug text-maroon/80">{cat.blurb}</p>
                  <ul className="mt-5 space-y-2 border-t-2 border-dotted border-maroon/40 pt-4">
                    {cat.items.map((name) => (
                      <li key={name} className="flex items-end gap-2">
                        <span className="leading-tight font-bold uppercase italic">{name}</span>
                        <span aria-hidden className="mb-1 flex-1 border-b-2 border-dotted border-maroon/40" />
                        <IconStar className="mb-0.5 size-3.5 shrink-0 text-orange transition-transform duration-500 ease-spring group-hover:rotate-[72deg]" />
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-5 text-center font-script text-2xl text-maroon transition-colors duration-300 group-hover:text-orange-dark">
                    Ver {cat.title.toLowerCase()} <span aria-hidden className="inline-block transition-transform duration-500 ease-spring group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Button href="/carta" size="lg">La carta completa</Button>
        </div>
      </div>
    </section>
  );
}

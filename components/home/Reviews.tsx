import Reveal from "../ui/Reveal";
import { home, reviews } from "@/lib/content";

/** Reseñas de Google como tickets de comanda. */
export default function Reviews() {
  return (
    <section aria-labelledby="resenas" className="bg-butter">
      <div className="mx-auto max-w-6xl px-4 pb-14 md:px-8 md:pb-28">
        <Reveal className="text-center">
          <h2 id="resenas" className="title text-[clamp(1.8rem,4vw,2.8rem)]">{home.reviews.title}</h2>
        </Reveal>
        {/* El scroll horizontal recorta también en vertical: el padding deja sitio a la sombra y el margen negativo lo compensa. */}
        <ul className="-mx-4 mt-6 -mb-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-4 pb-10 md:mx-0 md:mt-10 md:mb-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pt-0 md:pb-0">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.author} delay={i * 100} className="w-[82%] shrink-0 snap-center md:w-auto">
              <figure className="lift group flex h-full flex-col rounded-md bg-milk p-1.5 shadow-[0_12px_30px_-18px_#4d0f14]">
                <div className="flex h-full flex-col rounded-sm border-2 border-dashed border-maroon/40 px-5 py-6">
                  <span aria-hidden className="-mb-3 block h-10 origin-bottom-left font-sign text-6xl leading-none text-orange transition-transform duration-700 ease-spring group-hover:-rotate-6 group-hover:scale-110">“</span>
                  <blockquote className="mt-3 flex-1 text-lg leading-snug">{r.text}</blockquote>
                  <figcaption className="mt-5 border-t-2 border-dotted border-maroon/40 pt-3">
                    <span className="font-bold uppercase">{r.author}</span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

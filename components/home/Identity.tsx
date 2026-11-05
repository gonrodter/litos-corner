import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Reveal from "../ui/Reveal";
import Plate from "../ui/Plate";
import RoadSign from "./RoadSign";
import { home } from "@/lib/content";

/** Logo grande + qué es Lito’s (cartel y texto) + tres placas esmaltadas. */
export default function Identity() {
  const c = home.identity;
  return (
    <section id="que-es-litos" className="bg-butter">
      <div className="mx-auto max-w-3xl px-4 pt-12 pb-2 text-center md:pt-24 md:pb-6">
        <Reveal>
          <Logo className="text-[26px] md:text-[40px]" />
          <p className="mx-auto mt-6 max-w-[40ch] text-xl leading-snug md:text-2xl">{home.lockup.text}</p>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:gap-16 md:px-8 md:py-20">
        <Reveal variant="left" className="mx-auto w-full max-w-[260px] md:max-w-[400px]">
          <RoadSign className="w-full transition-transform duration-700 ease-spring hover:-rotate-2 hover:scale-[1.03]" />
        </Reveal>
        <Reveal delay={120} variant="right" className="text-center md:text-left">
          <h2 className="title text-[clamp(2rem,4.4vw,3.1rem)]">{c.title}</h2>
          <div className="mt-5 space-y-4 text-lg leading-snug md:text-xl">
            {c.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Button href="/carta" className="mt-7">Ver la carta</Button>
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-14 md:px-8 md:pb-28">
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {c.plates.map((p, i) => (
            <Reveal as="li" key={p.code} delay={i * 100} className="w-[78%] shrink-0 snap-center md:w-auto">
              <Plate code={p.code} title={p.title} text={p.text} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

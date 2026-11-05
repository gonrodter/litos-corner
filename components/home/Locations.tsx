import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { LocationPlate } from "../LocationBlock";
import { home, locations } from "@/lib/content";

/** Home: una placa de motel por local, lado a lado. */
export default function Locations() {
  const c = home.location;
  return (
    <section id="locales" className="bg-butter">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-28">
        <Reveal className="text-center">
          <h2 className="title text-[clamp(2rem,4.6vw,3.4rem)]">{c.title}</h2>
          <p className="mt-2 font-script text-3xl text-orange-dark">{c.script}</p>
        </Reveal>

        <ul className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-2">
          {locations.map((l, i) => (
            <Reveal as="li" key={l.slug} delay={i * 120} variant={i % 2 ? "right" : "left"}>
              <LocationPlate location={l} title={l.area}>
                <Button href={`/locales/${l.slug}`} variant="outline" className="col-span-2">Ver el local</Button>
              </LocationPlate>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

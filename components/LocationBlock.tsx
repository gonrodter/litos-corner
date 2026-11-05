import type { ReactNode } from "react";
import Button from "./ui/Button";
import PlaceholderTag from "./ui/PlaceholderTag";
import MapFacade from "./MapFacade";
import Bulbs from "./ui/Bulbs";
import Reveal from "./ui/Reveal";
import { IconBag, IconClock, IconPhone, IconPin, IconStar } from "./ui/Icons";
import { mapsEmbedUrl, mapsUrl, type Location } from "@/lib/content";

export function placeLine(l: Location) {
  return l.area === l.city ? l.city : `${l.area}, ${l.city}`;
}

/**
 * Placa de motel con los datos de un local. `title` sustituye a la cabecera
 * genérica (en la home, el nombre de la zona; en la ficha, la marca).
 */
export function LocationPlate({ location: l, title, children }: { location: Location; title?: string; children?: ReactNode }) {
  return (
    <div className="h-full rounded-xl bg-maroon p-2 text-butter">
      <div className="relative flex h-full flex-col rounded-lg border-2 border-butter/80 px-4 pt-7 pb-6 sm:px-6 sm:pt-8 sm:pb-7">
        <Bulbs count={16} className="absolute inset-x-6 -top-[5px]" />
        <p className="flex items-center justify-center gap-2 text-center font-sign text-xl text-butter uppercase sm:gap-3 sm:text-2xl [text-shadow:2px_2px_0_var(--color-orange-dark)]">
          <IconStar className="size-4 shrink-0 text-orange" /> {title ?? "Lito’s Corner"} <IconStar className="size-4 shrink-0 text-orange" />
        </p>
        <p className="mt-4 text-center text-lg leading-snug text-butter/85">{l.intro}</p>

        <dl className="mt-7 space-y-5 text-lg">
          <div className="flex gap-4">
            <dt className="mt-0.5 text-orange"><IconPin /><span className="sr-only">Dirección</span></dt>
            <dd>
              <address className="not-italic">
                <span className="font-semibold">{l.street}</span>
                <PlaceholderTag show={l.addressPlaceholder} />
                <br />
                {l.postalCode} {placeLine(l)}
              </address>
            </dd>
          </div>
          <div className="flex gap-4">
            <dt className="mt-0.5 text-orange"><IconPhone /><span className="sr-only">Teléfono</span></dt>
            <dd>
              <a href={l.phone.href} className="link-draw text-xl font-bold tracking-wide hover:text-orange">{l.phone.display}</a>
              <PlaceholderTag show={l.phone.placeholder} />
            </dd>
          </div>
          <div className="flex gap-4">
            <dt className="mt-0.5 text-orange"><IconClock /><span className="sr-only">Horario</span></dt>
            <dd className="flex-1">
              <ul className="divide-y divide-dotted divide-butter/30">
                {l.hours.map((h) => (
                  <li key={h.days} className="flex flex-wrap justify-between gap-x-4 py-1.5">
                    <span className="font-semibold uppercase">{h.days}</span>
                    <span className="tabular-nums text-butter/85">{h.time}</span>
                  </li>
                ))}
              </ul>
              <PlaceholderTag show={l.hoursPlaceholder}>Horario por confirmar</PlaceholderTag>
            </dd>
          </div>
        </dl>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-8 sm:flex sm:flex-wrap">
          <Button href={mapsUrl(l)}>Cómo llegar</Button>
          <Button href={l.phone.href} variant="outline">Llamar</Button>
          {l.order.map((o) => (
            <Button key={o.platform} href={o.url} variant="butter" icon={<IconBag />} className="col-span-2">
              Pedir en {o.platform}
            </Button>
          ))}
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Bloque de ficha de local (/locales/[slug]): placa de motel con los datos
 * y mapa con fachada.
 */
export default function LocationBlock({
  location: l,
  title,
  headingLevel = "h2",
}: {
  location: Location;
  title?: string;
  headingLevel?: "h1" | "h2";
}) {
  const H = headingLevel;
  return (
    <section id="local" className="bg-butter">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-28">
        <Reveal>
          <H className="title text-center text-[clamp(2rem,4.6vw,3.4rem)]">{title ?? `Estamos en ${l.area}`}</H>
          <p className="mt-2 text-center font-script text-3xl text-orange-dark">{l.city}, {l.province}</p>
        </Reveal>

        <div className="mt-8 grid gap-8 md:mt-12 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-5">
            <LocationPlate location={l} />
          </Reveal>

          <Reveal variant="right" delay={120} className="flex flex-col gap-6 lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden rounded-xl lg:aspect-auto lg:flex-1">
              <MapFacade src={mapsEmbedUrl(l)} title={`Mapa de ${l.name}`} />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-script text-3xl text-maroon">Si estás por la zona</h3>
                <ul className="mt-2 space-y-1.5 text-lg">
                  {l.nearby.map((n) => (
                    <li key={n} className="flex gap-2"><IconStar className="mt-1 size-3.5 shrink-0 text-orange" />{n}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-script text-3xl text-maroon">Servicios</h3>
                <ul className="mt-2 space-y-1.5 text-lg">
                  {l.services.map((s) => (
                    <li key={s} className="flex gap-2"><IconStar className="mt-1 size-3.5 shrink-0 text-orange" />{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

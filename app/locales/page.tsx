import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PlaceholderTag from "@/components/ui/PlaceholderTag";
import Reveal from "@/components/ui/Reveal";
import Wave from "@/components/ui/Wave";
import { IconStar } from "@/components/ui/Icons";
import { locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Locales",
  description: "Encuentra tu Lito’s Corner más cercano: hamburguesería americana con ambiente de pub en Novo Sancti Petri (Chiclana) y San Fernando, Cádiz.",
  alternates: { canonical: "/locales" },
};

export default function LocalesPage() {
  return (
    <>
      <PageHeader script="Lito’s en Cádiz" title="Locales" intro="La misma plancha y el mismo ambiente en cada local" />
      <div className="pattern-diamond"><Wave fill="#f3daa2" /></div>
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((l, i) => (
            <Reveal as="li" key={l.slug} delay={i * 100} variant="scale">
              <Link href={`/locales/${l.slug}`} className="lift group block h-full rounded-xl bg-maroon p-2 text-butter">
                <div className="flex h-full flex-col items-center rounded-lg border-2 border-butter/80 px-6 py-8 text-center">
                  <p className="font-script text-2xl leading-none text-orange">{l.order.length ? "Sala y domicilio" : "Sala y para llevar"}</p>
                  <h2 className="mt-2 flex items-center gap-3 font-sign text-3xl uppercase [text-shadow:2px_2px_0_var(--color-orange-dark)]">
                    <IconStar className="size-4 text-orange" />{l.area}<IconStar className="size-4 text-orange" />
                  </h2>
                  <p className="mt-3 text-lg text-butter/85">{l.street}<PlaceholderTag show={l.addressPlaceholder} /><br />{l.city}</p>
                  <span className="mt-auto pt-6 font-script text-2xl transition-colors duration-300 group-hover:text-orange">
                    Ver local <span aria-hidden className="inline-block transition-transform duration-500 ease-spring group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <li className="grid place-items-center rounded-xl border-2 border-dashed border-maroon/30 p-10 text-center">
            <div>
              <p className="font-script text-3xl text-maroon/50">Próximamente</p>
              <p className="title mt-1 text-maroon/50">Nuevo Lito’s en camino</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-butter"><Wave fill="#68171c" /></div>
    </>
  );
}

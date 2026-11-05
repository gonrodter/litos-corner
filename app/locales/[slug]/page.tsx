import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import LocationBlock from "@/components/LocationBlock";
import MenuHighlights from "@/components/home/MenuHighlights";
import FinalCta from "@/components/home/FinalCta";
import Wave from "@/components/ui/Wave";
import { locations } from "@/lib/content";
import { JsonLdScript, restaurantJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/locales/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) return {};
  return {
    title: `Hamburguesería americana en ${l.area} (${l.city})`,
    description: `${l.name}: burgers, patatas cargadas, nachos y ambiente de pub americano en ${l.area}, ${l.city}. Horario, cómo llegar y teléfono.`,
    alternates: { canonical: `/locales/${l.slug}` },
  };
}

/** Plantilla de ficha de local: se genera una por cada entrada de `locations`. */
export default async function LocalPage({ params }: PageProps<"/locales/[slug]">) {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) notFound();

  return (
    <>
      <JsonLdScript data={restaurantJsonLd(l)} />
      <PageHeader script="Lito’s Corner" title={l.area} intro={l.intro} />
      <div className="pattern-diamond"><Wave fill="#f3daa2" /></div>
      <LocationBlock location={l} title={`Burgers en ${l.area}`} />
      <div className="bg-butter"><Wave fill="#68171c" /></div>
      <MenuHighlights />
      <div className="pattern-diamond"><Wave fill="#e28c22" /></div>
      <FinalCta />
      <div className="bg-orange"><Wave fill="#68171c" /></div>
    </>
  );
}

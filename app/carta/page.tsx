import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import MenuTabs from "@/components/MenuTabs";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Wave from "@/components/ui/Wave";
import { IconBag, IconStar } from "@/components/ui/Icons";
import { locations, mapsUrl, menuFor, type Location, type LocalMenu } from "@/lib/content";

export const metadata: Metadata = {
  title: "Carta: burgers de retinto, nachos, pizzas y brasa",
  description:
    "Carta de Lito’s Corner en Novo Sancti Petri (Chiclana) y San Fernando: hamburguesas de carne de retinto, smash burgers, nachos, pizzas, costillar y parrilla. También a domicilio.",
  alternates: { canonical: "/carta" },
};

function LocalMenuView({ location: l, menu }: { location: Location; menu: LocalMenu }) {
  return (
    <>
      <nav aria-label={`Categorías · ${l.area}`} className="sticky top-[calc(var(--header-h,64px)-1px)] z-30 mt-6 bg-butter/95 backdrop-blur">
        <ul className="mx-auto flex max-w-5xl gap-6 overflow-x-auto px-4 py-3 md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-1 md:overflow-visible">
          {menu.categories.map((c) => (
            <li key={c.id} className="shrink-0">
              <a href={`#${l.slug}-${c.id}`} className="link-draw title text-base hover:text-orange-dark sm:text-lg">{c.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-5xl space-y-12 px-4 pt-8 pb-20 md:space-y-16 md:px-8 md:pb-28">
        <ul className="mx-auto max-w-2xl space-y-1 text-center text-maroon/80">
          {menu.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        {menu.categories.map((cat) => (
          <Reveal key={cat.id}>
            <section id={`${l.slug}-${cat.id}`} className="scroll-mt-36 rounded-md bg-milk p-2 shadow-[0_12px_30px_-18px_#4d0f14]">
              <div className="rounded-sm border-2 border-maroon px-4 py-8 md:px-12 md:py-10">
                <header className="text-center">
                  <p className="font-script text-3xl leading-none text-orange-dark">{cat.kicker}</p>
                  <h2 className="mt-1 font-sign text-5xl uppercase md:text-6xl">{cat.title}</h2>
                  <p className="mt-2 text-lg text-maroon/75">{cat.blurb}</p>
                </header>
                <ul className="mt-10 grid gap-x-12 gap-y-9 md:grid-cols-2">
                  {cat.items.map((it) => (
                    // La etiqueta flota sobre el nombre (fuera del flujo) para que
                    // los nombres de ambas columnas queden a la misma altura.
                    <li key={it.name} className="relative">
                      {it.tag && <p className="absolute bottom-full left-0 mb-0.5 font-script text-xl leading-none text-orange-dark">{it.tag}</p>}
                      <div className="flex items-end gap-2">
                        <h3 className="text-xl leading-tight font-bold uppercase italic">{it.name}</h3>
                        <span aria-hidden className="mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-maroon/40" />
                        {it.price ? <span className="font-bold whitespace-nowrap tabular-nums">{it.price}</span> : <IconStar className="mb-1 size-4 shrink-0 text-orange" />}
                      </div>
                      {it.desc && <p className="mt-1 text-lg text-maroon/75">{it.desc}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Reveal>
        ))}

        <div className="text-center">
          <p className="title text-3xl">¿Ya lo tienes claro?</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {l.order.map((o) => (
              <Button key={o.platform} href={o.url} size="lg" icon={<IconBag />}>Pedir en {o.platform}</Button>
            ))}
            <Button href={mapsUrl(l)} size="lg" variant={l.order.length ? "outline-dark" : "orange"}>Cómo llegar</Button>
            <Button href={l.phone.href} size="lg" variant="outline-dark">Llamar</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CartaPage() {
  const withMenu = locations.flatMap((l) => {
    const menu = menuFor(l);
    return menu ? [{ l, menu }] : [];
  });

  return (
    <>
      <PageHeader script="Lito’s Corner" title="La carta" intro="Burgers de retinto, nachos para el centro de la mesa, pizzas y brasa. Cada local tiene su carta: elige el tuyo" />
      <div className="pattern-diamond"><Wave fill="#f3daa2" /></div>

      <div className="bg-butter">
        <MenuTabs tabs={withMenu.map(({ l }) => ({ id: l.slug, label: l.area, sub: l.order.length ? "También a domicilio" : l.city }))}>
          {withMenu.map(({ l, menu }) => (
            <LocalMenuView key={l.slug} location={l} menu={menu} />
          ))}
        </MenuTabs>
      </div>
      <div className="bg-butter"><Wave fill="#68171c" /></div>
    </>
  );
}

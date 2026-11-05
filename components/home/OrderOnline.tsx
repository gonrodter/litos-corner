import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { BulbFrame } from "../ui/Bulbs";
import { IconBag, IconStar } from "../ui/Icons";
import { OrderButton } from "../OrderDialog";
import { hasOrder, home, orderLocations } from "@/lib/content";

/**
 * Pedido a domicilio: cartel de neón "Delivery" y botón que abre el selector
 * de local. Si ningún local tiene `order`, la sección no se pinta.
 */
export default function OrderOnline() {
  const c = home.order;
  if (!hasOrder) return null;

  return (
    <section id="pedir" className="bg-butter">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <Reveal variant="left" className="mx-auto w-full max-w-md">
          <div className="relative -rotate-2 rounded-xl bg-night p-4 shadow-[0_24px_50px_-18px_#4d0f14] transition-transform duration-700 ease-spring hover:rotate-0 hover:scale-[1.02] [--bulb-edge:8px] md:p-6 md:[--bulb-edge:12px]">
            <BulbFrame x={14} y={8} edge="var(--bulb-edge)" />
            <div className="rounded-md border-2 border-orange px-6 py-8 text-center text-butter">
              <p className="neon-text animate-flicker font-script text-[clamp(3rem,10vw,4.6rem)] leading-none">{c.neon}</p>
              <p className="mt-6 font-sign text-xl text-orange uppercase">{c.favoritesTitle}</p>
              <ul className="mt-3 space-y-2 text-left">
                {c.favorites.map((f, i) => (
                  <li key={f} className="flex items-baseline gap-2">
                    <span className="w-7 shrink-0 font-sign text-lg leading-tight text-orange tabular-nums">#{i + 1}</span>
                    <span className="text-lg leading-tight font-bold uppercase italic">{f}</span>
                    {/* sin texto, su línea base es el borde inferior: los puntos quedan a ras del texto */}
                    <span aria-hidden className="min-w-4 flex-1 border-b-2 border-dotted border-butter/40" />
                    <IconStar className="size-3.5 shrink-0 self-center text-orange" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} variant="right" className="text-center md:text-left">
          <p className="font-script text-3xl text-orange-dark">Lito’s a domicilio</p>
          <h2 className="title mt-1 text-[clamp(2rem,4.6vw,3.4rem)]">{c.title}</h2>
          <p className="mt-4 text-lg leading-snug md:text-xl">{c.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <OrderButton size="lg" icon={<IconBag />}>Pedir a domicilio</OrderButton>
            <Button href="/carta" size="lg" variant="outline-dark">Ver la carta</Button>
          </div>
          <p className="mt-4 text-sm text-maroon/70">Reparto desde {orderLocations.map((l) => l.area).join(" y ")}</p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Button from "./ui/Button";
import { BulbFrame } from "./ui/Bulbs";
import { IconBag, IconClose, IconStar } from "./ui/Icons";
import { orderLocations } from "@/lib/content";

/**
 * Selector de pedido a domicilio: "¿desde qué local?". Un único <dialog>
 * montado en el layout; cualquier botón "Pide online" lo abre con
 * openOrder() (o con <OrderButton/> / <OrderTrigger/> desde componentes de servidor).
 */
const OPEN_EVENT = "litos:order";

export function openOrder() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/** <Button/> de marca que abre el selector. */
export function OrderButton(props: Omit<React.ComponentProps<typeof Button>, "href" | "onClick">) {
  return <Button {...props} onClick={openOrder} />;
}

/** Disparador sin estilo de marca (enlaces de pie, barra móvil...). */
export function OrderTrigger({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" onClick={openOrder} aria-haspopup="dialog" className={className}>
      {children}
    </button>
  );
}

export default function OrderDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const open = () => ref.current?.showModal();
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (orderLocations.length === 0) return null;
  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby="order-title"
      // Clic en el fondo (fuera de la tarjeta) cierra.
      onClick={(e) => e.target === e.currentTarget && close()}
      className="order-dialog m-auto w-[calc(100%-2rem)] max-w-2xl overflow-visible bg-transparent p-0 text-butter"
    >
      <div className="relative rounded-xl bg-night p-4 shadow-[0_30px_60px_-20px_#000] [--bulb-edge:8px] md:p-6 md:[--bulb-edge:12px]">
        <BulbFrame x={16} y={10} edge="var(--bulb-edge)" />
        <div className="rounded-md border-2 border-orange px-5 pt-8 pb-6 text-center md:px-8">
          <p className="neon-text animate-flicker font-script text-5xl leading-none md:text-6xl">Delivery</p>
          <h2 id="order-title" className="title mt-4 text-2xl md:text-3xl">¿Desde qué Lito’s te lo llevamos?</h2>
          <p className="mt-1 text-butter/75">Elige el local más cercano a ti</p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {orderLocations.map((l, i) => (
              <li
                key={l.slug}
                style={{ "--intro-delay": `${150 + i * 90}ms` } as React.CSSProperties}
                className="order-option flex flex-col items-center rounded-lg bg-butter p-1.5 text-maroon"
              >
                <div className="flex w-full flex-1 flex-col items-center rounded-md border-2 border-maroon px-3 pt-4 pb-4">
                  <p className="font-script text-xl leading-none text-orange-dark">{l.area === l.city ? "Lito’s Corner" : l.city}</p>
                  <p className="mt-1 flex items-center gap-2 font-sign text-2xl leading-tight uppercase">
                    <IconStar className="size-3.5 shrink-0 text-orange" />
                    {l.area}
                    <IconStar className="size-3.5 shrink-0 text-orange" />
                  </p>
                  <div className="mt-auto flex w-full flex-col gap-2 pt-4">
                    {l.order.map((o) => (
                      <Button key={o.platform} href={o.url} icon={<IconBag />} label={`Pedir en ${o.platform} a ${l.name}`} className="w-full px-3 whitespace-nowrap">
                        Pedir en {o.platform}
                      </Button>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute -top-3 -right-3 grid size-11 place-items-center rounded-full border-2 border-butter bg-maroon text-butter shadow-lg transition-[rotate,scale,background-color] duration-500 ease-spring hover:rotate-90 hover:bg-orange active:scale-90"
        >
          <IconClose className="size-5" />
        </button>
      </div>
    </dialog>
  );
}

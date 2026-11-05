"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { IconClose, IconMenu, IconInstagram, IconTikTok } from "./ui/Icons";
import { IconBag } from "./ui/Icons";
import { OrderButton, openOrder } from "./OrderDialog";
import { hasOrder, locations, social } from "@/lib/content";

const links = [
  { href: "/carta", label: "Carta" },
  ...locations.map((l) => ({ href: `/locales/${l.slug}`, label: l.area })),
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // En la home, el enlace a "/" no navega: subimos al hero a mano.
  const toTop = () => {
    if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Publica la altura real de la cabecera para que otros elementos sticky se peguen justo debajo.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Al bajar, la cabecera gana sombra para despegarse del contenido.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar con Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
    <header
      ref={ref}
      style={{ viewTransitionName: "site-header" }}
      className={`sticky top-0 z-50 bg-maroon text-butter transition-shadow duration-500 ease-smooth ${scrolled ? "shadow-[0_10px_30px_-12px_#1c0d0ccc]" : ""}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2.5 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" onClick={toTop} aria-label="Lito’s Corner, inicio" className="group justify-self-start text-[15px] transition-transform duration-500 ease-spring hover:-rotate-2 hover:scale-105 md:text-base">
          <Logo mark />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[17px] font-semibold uppercase tracking-[0.04em]">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className="link-draw hover:text-orange aria-[current=page]:text-orange">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden justify-self-end lg:block">
          {hasOrder ? (
            <OrderButton icon={<IconBag />}>Pide online</OrderButton>
          ) : (
            <Button href="/locales">Locales</Button>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid size-11 place-items-center rounded-lg bg-orange text-milk transition-transform duration-200 active:scale-90 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <IconMenu className="size-6" />
        </button>
      </div>

      {/* Barra de progreso de lectura (solo con soporte de scroll-driven animations). */}
      <span aria-hidden className="scroll-progress absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-orange" />
    </header>

    {/* Siempre montado para poder animar la entrada y la salida; `inert` lo saca del foco cerrado. */}
    <div
      className={`pattern-diamond fixed inset-0 z-[60] flex flex-col text-butter transition-[opacity,clip-path] duration-500 ease-smooth lg:hidden ${
        open ? "opacity-100 [clip-path:circle(150%_at_calc(100%_-_2.4rem)_2rem)]" : "pointer-events-none opacity-0 [clip-path:circle(0%_at_calc(100%_-_2.4rem)_2rem)]"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
      inert={!open}
    >
      <div className="flex items-center justify-between px-4 py-2.5">
        <Logo mark className="text-[15px]" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="grid size-11 place-items-center rounded-lg border-2 border-butter transition-transform duration-300 active:scale-90"
          aria-label="Cerrar menú"
        >
          <IconClose className={`size-6 transition-transform duration-500 ease-spring ${open ? "rotate-0" : "-rotate-90"}`} />
        </button>
      </div>
      <nav aria-label="Menú móvil" className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
        {[{ href: "/", label: "Inicio" }, ...links].map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => { setOpen(false); if (l.href === "/") toTop(); }}
            style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            className={`title py-2 text-4xl transition-[opacity,transform,color] duration-500 ease-smooth hover:text-orange ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            {l.label}
          </Link>
        ))}
        {hasOrder && (
          <div style={{ transitionDelay: open ? `${120 + (links.length + 1) * 60}ms` : "0ms" }} className={`mt-4 transition-[opacity,transform] duration-500 ease-smooth ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Button onClick={() => { setOpen(false); openOrder(); }} size="lg" icon={<IconBag />}>Pide online</Button>
          </div>
        )}
        <p className={`mt-6 font-script text-3xl text-orange transition-opacity delay-300 duration-700 ${open ? "opacity-100" : "opacity-0"}`}>Burgers · Beer · Rock</p>
      </nav>
      <div className="flex justify-center gap-3 pb-28">
        <a href={social.instagram.url} target="_blank" rel="noopener noreferrer" className="grid size-12 place-items-center rounded-full bg-butter text-maroon transition-transform duration-300 ease-spring active:scale-90" aria-label="Instagram">
          <IconInstagram />
        </a>
        <a href={social.tiktok.url} target="_blank" rel="noopener noreferrer" className="grid size-12 place-items-center rounded-full bg-butter text-maroon transition-transform duration-300 ease-spring active:scale-90" aria-label="TikTok">
          <IconTikTok />
        </a>
      </div>
    </div>
    </>
  );
}

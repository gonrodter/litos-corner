import Link from "next/link";
import { OrderTrigger } from "./OrderDialog";
import { hasOrder } from "@/lib/content";
import { IconBag, IconBurger, IconPin } from "./ui/Icons";

/**
 * Barra fija inferior solo en móvil: el tráfico de Instagram/TikTok llega aquí
 * y las tres acciones que importan quedan siempre a un pulgar. Con dos locales,
 * "Locales" lleva al bloque donde se elige y desde ahí se llama o se va.
 */
export default function MobileActionBar() {
  const items = [
    { href: "/carta", label: "Carta", icon: <IconBurger /> },
    // Sin href: abre el selector de local para pedir.
    ...(hasOrder ? [{ href: "", label: "Pide online", icon: <IconBag />, primary: true }] : []),
    { href: "/#locales", label: "Locales", icon: <IconPin />, primary: !hasOrder },
  ];

  return (
    <nav
      aria-label="Acciones rápidas"
      style={{ viewTransitionName: "action-bar" }}
      className={`fixed inset-x-0 bottom-0 z-40 grid border-t-2 border-orange bg-maroon pb-[env(safe-area-inset-bottom)] md:hidden ${items.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}
    >
      {items.map((it) => {
        const cls = `flex flex-col items-center gap-0.5 py-2 text-[13px] font-semibold uppercase tracking-[0.06em] transition-[scale,opacity] duration-150 active:scale-95 active:opacity-80 ${
          it.primary ? "bg-orange text-milk" : "text-butter"
        }`;
        return !it.href ? (
          <OrderTrigger key={it.label} className={cls}>
            {it.icon}
            {it.label}
          </OrderTrigger>
        ) : (
          <Link key={it.label} href={it.href} className={cls}>
            {it.icon}
            {it.label}
          </Link>
        );
      })}
    </nav>
  );
}

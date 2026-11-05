"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Selector de carta por local. Todas las cartas se pintan en el HTML (SEO) y
 * solo se oculta la inactiva. Un hash que empiece por el id de una pestaña
 * (p. ej. /carta#san-fernando o #san-fernando-pizzas) la abre al cargar.
 */
export default function MenuTabs({ tabs, children }: { tabs: { id: string; label: string; sub: string }[]; children: ReactNode[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      const i = tabs.findIndex((t) => hash === t.id || hash.startsWith(`${t.id}-`));
      if (i >= 0) setActive(i);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [tabs]);

  return (
    <>
      <div role="tablist" aria-label="Elige local" className="mx-auto grid max-w-xl grid-cols-2 gap-3 px-4 pt-8 md:pt-12">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={t.id}
            onClick={() => {
              setActive(i);
              history.replaceState(null, "", `#${t.id}`);
            }}
            className={`rounded-lg border-2 px-3 py-2.5 text-center transition-[color,background-color,border-color,box-shadow,scale] duration-300 ease-smooth active:scale-[0.97] ${
              active === i ? "border-maroon bg-maroon text-butter shadow-[0_12px_24px_-14px_#4d0f14]" : "border-maroon/40 text-maroon hover:border-maroon hover:bg-maroon/5"
            }`}
          >
            <span className="block font-sign text-xl leading-none uppercase sm:text-2xl">{t.label}</span>
            <span className={`mt-1 block font-script text-lg leading-none transition-colors duration-300 ${active === i ? "text-orange" : "text-orange-dark"}`}>{t.sub}</span>
          </button>
        ))}
      </div>
      {children.map((child, i) => (
        <div key={tabs[i].id} id={tabs[i].id} role="tabpanel" aria-labelledby={`tab-${tabs[i].id}`} hidden={active !== i}>
          {child}
        </div>
      ))}
    </>
  );
}

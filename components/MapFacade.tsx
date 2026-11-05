"use client";

import { useState } from "react";
import { IconPin } from "./ui/Icons";

/**
 * Mapa de Google con fachada: no carga el iframe (ni cookies de terceros)
 * hasta que el usuario lo pide. Mejor rendimiento y RGPD más sencillo.
 */
export default function MapFacade({ src, title }: { src: string; title: string }) {
  const [on, setOn] = useState(false);

  if (on) {
    return <iframe src={src} title={title} className="intro size-full min-h-[300px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />;
  }

  return (
    <button type="button" onClick={() => setOn(true)} className="group relative grid size-full min-h-[300px] place-items-center overflow-hidden bg-[#e9cf95]">
      <span
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(#f8e7c0 3px, transparent 3px), linear-gradient(90deg, #f8e7c0 3px, transparent 3px), linear-gradient(35deg, transparent 48%, #e28c22 48% 51%, transparent 51%)",
          backgroundSize: "64px 64px, 64px 64px, 100% 100%",
        }}
      />
      <span aria-hidden className="absolute inset-y-0 right-0 w-1/4 bg-[#9cc0bd]" />
      <span className="relative flex flex-col items-center gap-3">
        <span className="grid size-16 place-items-center rounded-full bg-maroon text-butter shadow-lg transition-[translate,scale] duration-500 ease-spring group-hover:-translate-y-2 group-hover:scale-110 group-active:scale-95">
          <IconPin className="size-8" />
        </span>
        <span className="rounded-lg bg-orange px-5 py-1.5 font-script text-2xl text-milk transition-colors duration-300 group-hover:bg-orange-dark">Ver mapa</span>
      </span>
    </button>
  );
}

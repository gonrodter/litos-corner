import { Fragment } from "react";
import { IconBolt, IconStar } from "../ui/Icons";
import { home } from "@/lib/content";

/**
 * Fila de insignias de rótulo, cada una con su forma (marco, banderola,
 * pastilla, pila, estrellas, neón). Desfila despacio como una cinta.
 */
type Badge = (typeof home.badges)[number];

function BadgeArt({ b }: { b: Badge }) {
  switch (b.kind) {
    case "frame":
      return (
        <div className="rounded-sm border-2 border-butter p-1">
          <div className="border border-butter/60 px-6 py-2 text-center">
            <p className="font-script text-xl leading-none text-orange">{b.script}</p>
            <p className="title mt-1 text-2xl">{b.main}</p>
          </div>
        </div>
      );
    case "banner":
      return (
        <div className="-rotate-3 border-y-2 border-butter px-4 py-2">
          <p className="font-sign text-3xl leading-none text-orange uppercase [text-shadow:2px_2px_0_var(--color-butter)]">{b.main}</p>
        </div>
      );
    case "lozenge":
      return (
        <div className="rounded-full border-2 border-butter p-1">
          <div className="rounded-full border border-dashed border-butter/60 px-8 py-2 text-center">
            <p className="font-script text-xl leading-none text-orange">{b.script}</p>
            <p className="font-sign text-3xl leading-none uppercase">{b.main}</p>
          </div>
        </div>
      );
    case "stack":
      return (
        <div className="border-2 border-butter px-5 py-2 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase">{b.top}</p>
          <p className="font-sign text-3xl leading-none text-orange uppercase">{b.main}</p>
          <p className="text-xs font-bold tracking-[0.2em] uppercase">{b.bottom}</p>
        </div>
      );
    case "stars":
      return (
        <div className="flex items-center gap-3 rounded-md border-2 border-dotted border-butter px-5 py-3">
          <IconStar className="size-5 text-orange" />
          <p className="font-sign text-3xl leading-none uppercase">{b.main}</p>
          <IconStar className="size-5 text-orange" />
        </div>
      );
    case "neon":
      return (
        <div className="rounded-xl border-2 border-night bg-night px-6 py-2 shadow-[inset_0_0_0_2px_#ff5a4555]">
          <p className="neon-text animate-flicker font-script text-4xl leading-none">{b.main}</p>
        </div>
      );
  }
}

export default function BadgeRow() {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14" aria-hidden={hidden}>
      {home.badges.map((b, i) => (
        <Fragment key={i}>
          <li className="shrink-0">
            <BadgeArt b={b} />
          </li>
          <li aria-hidden className="shrink-0 text-orange">
            <IconBolt className={`size-6 ${i % 2 ? "rotate-12" : "-rotate-12"}`} />
          </li>
        </Fragment>
      ))}
    </ul>
  );

  return (
    <div className="pattern-diamond overflow-hidden border-t-2 border-orange py-6 text-butter md:py-10">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}

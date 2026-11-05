import { BulbFrame } from "./ui/Bulbs";

/** Cabecera de página interior: placa iluminada sobre el granate. */
export default function PageHeader({ title, script, intro }: { title: string; script?: string; intro?: string }) {
  return (
    <header className="pattern-diamond text-butter">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center md:py-20">
        <div className="intro-pop relative inline-block rounded-md border-2 border-orange px-7 py-6 [--bulb-edge:7px] md:px-16 md:py-9 md:[--bulb-edge:9px]">
          <span aria-hidden className="pointer-events-none absolute inset-[calc(var(--bulb-edge)*2)] border-2 border-orange" />
          <BulbFrame x={14} y={5} edge="var(--bulb-edge)" />
          {script && <p className="font-script text-3xl leading-none text-orange md:text-4xl">{script}</p>}
          <h1 className="mt-1 font-sign text-[clamp(2.6rem,8vw,5rem)] leading-none uppercase [text-shadow:3px_3px_0_var(--color-orange-dark)]">{title}</h1>
        </div>
        {intro && <p className="intro mx-auto mt-6 [--intro-delay:250ms] max-w-[48ch] text-lg md:mt-8 md:text-xl leading-snug text-butter/85">{intro}</p>}
      </div>
    </header>
  );
}

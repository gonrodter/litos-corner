import { IconStar } from "./Icons";

/** Placa esmaltada: doble filete, remaches en las esquinas y estrellas. */
export default function Plate({ code, title, text }: { code: string; title: string; text: string }) {
  return (
    <div className="lift group relative h-full rounded-xl bg-maroon p-2 text-butter shadow-[0_10px_24px_-12px_#4d0f14]">
      {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos) => (
        <span key={pos} aria-hidden className={`absolute ${pos} size-2 rounded-full bg-butter/70 shadow-[inset_-1px_-1px_0_#0004]`} />
      ))}
      <div className="h-full rounded-lg border-2 border-butter/80 p-1">
        <div className="flex h-full flex-col items-center rounded-md border border-orange/70 px-5 py-6 text-center">
          <p className="flex items-center gap-3 font-sign text-4xl leading-none text-butter [text-shadow:2px_2px_0_var(--color-orange-dark)]">
            <IconStar className="size-4 text-orange transition-transform duration-700 ease-spring group-hover:-rotate-[144deg]" />
            {code}
            <IconStar className="size-4 text-orange transition-transform duration-700 ease-spring group-hover:rotate-[144deg]" />
          </p>
          <h3 className="title mt-4 text-xl">{title}</h3>
          <p className="mt-1 text-lg text-butter/80">{text}</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Botón de rótulo pintado: esquinas suaves y etiqueta en cursiva (Damion),
 * como los de la referencia. Si el href es externo o tel:, se pinta como <a>;
 * sin href (con onClick), como <button>.
 */
type Variant = "orange" | "butter" | "maroon" | "outline" | "outline-dark";

const variants: Record<Variant, string> = {
  orange: "bg-orange text-milk hover:bg-[#eb9a36] hover:shadow-[0_10px_22px_-10px_#e28c2299]",
  butter: "bg-butter text-maroon hover:bg-butter-soft hover:shadow-[0_10px_20px_-12px_#1c0d0c66]",
  maroon: "bg-maroon text-butter hover:bg-maroon-deep hover:shadow-[0_10px_20px_-12px_#1c0d0c66]",
  outline: "border-2 border-butter text-butter hover:bg-butter hover:text-maroon",
  "outline-dark": "border-2 border-maroon text-maroon hover:bg-maroon hover:text-butter",
};

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  size?: "md" | "lg";
  className?: string;
  label?: string;
};

export default function Button({ href, onClick, children, variant = "orange", icon, size = "md", className = "", label }: Props) {
  const sizes = size === "lg" ? "px-7 py-2.5 text-[1.7rem]" : "px-5 py-1.5 text-[1.4rem]";
  const cls = `group/btn inline-flex items-center justify-center gap-2 rounded-lg font-script leading-tight transition-[color,background-color,border-color,box-shadow,translate,scale] duration-300 ease-smooth hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-orange ${sizes} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {icon && <span className="transition-transform duration-500 ease-spring group-hover/btn:-rotate-8 group-hover/btn:scale-115 [&>svg]:size-[0.8em]">{icon}</span>}
      {children}
    </>
  );

  if (!href) {
    return (
      <button type="button" onClick={onClick} aria-label={label} className={cls}>
        {inner}
      </button>
    );
  }

  const external = /^(https?:|tel:|mailto:)/.test(href);

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} aria-label={label} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={label} className={cls}>
      {inner}
    </Link>
  );
}

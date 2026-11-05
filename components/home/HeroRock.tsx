/** Detalles rockeros del hero: focos de escenario. */

/** Dos focos que barren el fondo desde arriba, como en un escenario. */
export function Spotlights() {
  // El desenfoque va en el contenedor: si fuera junto al clip-path, este lo recortaría y el borde quedaría duro.
  const beam = "animate-sway absolute -top-24 h-[130%] w-[46vw] max-w-[560px] origin-top blur-2xl";
  const cone = "size-full bg-[linear-gradient(180deg,#fff1c45c,#fff1c41f_55%,transparent_85%)] [clip-path:polygon(44%_0,56%_0,100%_100%,0_100%)]";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen">
      <div className={`${beam} left-[2%] [--sway-from:-26deg] [--sway-to:-8deg]`}><div className={cone} /></div>
      <div className={`${beam} right-[2%] [--sway-from:26deg] [--sway-to:8deg] [animation-delay:-4s]`}><div className={cone} /></div>
    </div>
  );
}

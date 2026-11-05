/** Etiqueta visible para datos de ejemplo. Desaparece al poner el flag a false. */
export default function PlaceholderTag({ show, children = "Dato de ejemplo" }: { show: boolean; children?: string }) {
  if (!show) return null;
  return (
    <span className="ml-2 inline-block -translate-y-px border border-dashed border-current px-1.5 py-px align-middle text-[10px] font-bold uppercase tracking-[0.12em] not-italic opacity-70">
      {children}
    </span>
  );
}

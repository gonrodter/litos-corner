import PageHeader from "./PageHeader";
import Wave from "./ui/Wave";

/** Página legal provisional. Sustituir el cuerpo por el texto revisado. */
export default function LegalPlaceholder({ title }: { title: string }) {
  return (
    <>
      <PageHeader title={title} />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <p className="rounded-xl border-2 border-dashed border-maroon/40 p-6 text-lg">
          Texto legal pendiente: añadir titular, CIF, domicilio y condiciones revisadas.
        </p>
      </div>
      <div className="bg-butter"><Wave fill="#68171c" /></div>
    </>
  );
}

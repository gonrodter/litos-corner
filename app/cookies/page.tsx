import type { Metadata } from "next";
import LegalPlaceholder from "@/components/LegalPlaceholder";

export const metadata: Metadata = { title: "Política de cookies", robots: { index: false } };

export default function Page() {
  return <LegalPlaceholder title="Política de cookies" />;
}

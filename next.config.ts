import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Transiciones suaves entre páginas con <ViewTransition> (ver app/layout.tsx).
    viewTransition: true,
  },
};

export default nextConfig;

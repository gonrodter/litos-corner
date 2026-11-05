import { social, socialPosts } from "./content";

export type Network = "tiktok" | "instagram";

export type SocialCard = {
  url: string;
  network: Network;
  handle: string;
  /** Miniatura vertical; null si no hay (se pinta la tarjeta de respaldo). */
  thumb: string | null;
  title: string | null;
  /** true si la tarjeta lleva a un vídeo concreto y no al perfil. */
  isVideo: boolean;
};

const SLOTS = 4;
const REVALIDATE = 60 * 60 * 6;

const networkOf = (url: string): Network => (url.includes("tiktok.com") ? "tiktok" : "instagram");

/** Miniatura y título de un vídeo de TikTok vía oEmbed público. Si falla, null. */
async function tiktokPreview(url: string): Promise<{ thumb: string | null; title: string | null } | null> {
  try {
    const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { thumbnail_url?: string; title?: string };
    return { thumb: data.thumbnail_url ?? null, title: data.title?.trim() || null };
  } catch {
    return null;
  }
}

/** Las 4 tarjetas de la sección de redes: vídeos configurados y, si faltan, el perfil. */
export async function getSocialCards(): Promise<SocialCard[]> {
  const posts = await Promise.all(
    socialPosts.slice(0, SLOTS).map(async (p): Promise<SocialCard> => {
      const network = networkOf(p.url);
      const preview = network === "tiktok" ? await tiktokPreview(p.url) : null;
      return {
        url: p.url,
        network,
        handle: social[network].handle,
        thumb: p.cover ?? preview?.thumb ?? null,
        title: p.title ?? preview?.title ?? null,
        isVideo: true,
      };
    }),
  );

  const fill: Network[] = ["tiktok", "instagram"];
  for (let i = posts.length; i < SLOTS; i++) {
    const network = fill[i % 2];
    posts.push({ url: social[network].url, network, handle: social[network].handle, thumb: null, title: null, isVideo: false });
  }
  return posts;
}

import Image from "next/image";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Bulbs from "../ui/Bulbs";
import { IconInstagram, IconPlay, IconTikTok } from "../ui/Icons";
import { home, social } from "@/lib/content";
import { getSocialCards, type SocialCard } from "@/lib/social";

/**
 * Redes: tiras 9:16 (el formato de su contenido). Cada tarjeta enlaza a un
 * vídeo de `socialPosts` con su miniatura; si faltan, llevan al perfil.
 */
export default async function Social() {
  const c = home.social;
  const cards = await getSocialCards();

  return (
    <section id="redes" className="pattern-diamond text-butter">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-28">
        <Reveal className="text-center">
          <h2 className="title text-[clamp(2rem,4.6vw,3.4rem)]">{c.title}</h2>
          <p className="mx-auto mt-4 max-w-[50ch] text-lg leading-snug text-butter/85 md:text-xl">{c.body}</p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href={social.instagram.url} icon={<IconInstagram />}>{social.instagram.handle}</Button>
            <Button href={social.tiktok.url} variant="outline" icon={<IconTikTok />}>{social.tiktok.handle}</Button>
          </div>
        </Reveal>

        <ul className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {cards.map((card, i) => (
            <Reveal as="li" key={`${card.url}-${i}`} delay={i * 80} className="w-[64%] shrink-0 snap-start sm:w-[40%] md:w-auto">
              <VideoCard card={card} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function VideoCard({ card }: { card: SocialCard }) {
  const Icon = card.network === "tiktok" ? IconTikTok : IconInstagram;
  const netName = card.network === "tiktok" ? "TikTok" : "Instagram";
  const label = card.isVideo ? `Ver vídeo en ${netName}${card.title ? `: ${card.title}` : ""}` : `Ver ${card.handle} en ${netName}`;

  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="lift group relative block aspect-[9/16] overflow-hidden rounded-xl border-2 border-butter/20 bg-night-2 hover:border-orange focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-orange"
    >
      {card.thumb ? (
        <Image src={card.thumb} alt="" fill unoptimized sizes="(min-width:768px) 22vw, 64vw" className="object-cover transition-[scale] duration-1000 ease-smooth group-hover:scale-108" />
      ) : (
        <div aria-hidden className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_50%_40%,#68171c,#1c0d0c_70%)] px-4 text-center">
          <Bulbs count={9} className="absolute inset-x-5 top-3" />
          <span className="grid size-20 place-items-center rounded-full border-2 border-orange text-butter transition-[scale,background-color] duration-500 ease-spring group-hover:scale-110 group-hover:bg-orange/20">
            {card.isVideo ? <IconPlay className="size-9" /> : <Icon className="size-9" />}
          </span>
          <span className="font-script text-3xl leading-none text-butter">
            {card.isVideo ? "Ver el vídeo" : `Más en ${netName}`}
          </span>
        </div>
      )}

      {card.thumb && (
        <span aria-hidden className="absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-orange/90 text-milk shadow-[0_6px_20px_-4px_#1c0d0c] transition-[scale,background-color] duration-500 ease-spring group-hover:scale-120 group-hover:bg-orange">
          <IconPlay className="size-6" />
        </span>
      )}

      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night via-night/80 to-transparent px-4 pt-14 pb-3">
        {card.title && <span className="mb-2 line-clamp-2 block text-sm leading-snug text-butter/90">{card.title}</span>}
        <span className="flex items-center justify-between font-semibold text-butter">
          {card.handle}
          <Icon />
        </span>
      </span>
    </a>
  );
}

import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { BulbFrame } from "../ui/Bulbs";
import { IconBag, IconBolt, IconInstagram, IconStar, IconTikTok } from "../ui/Icons";
import { OrderButton } from "../OrderDialog";
import { hasOrder, home, social } from "@/lib/content";

/** Cierre: el gran rótulo iluminado con las acciones principales. */
export default function FinalCta() {
  const c = home.final;
  return (
    <section className="bg-orange px-4 py-12 md:px-8 md:py-28">
      <Reveal variant="scale" className="mx-auto max-w-4xl">
        <div className="grain rounded-xl bg-night p-4 shadow-[0_30px_60px_-20px_#4d0f14] [--bulb-edge:8px] md:p-7 md:[--bulb-edge:14px]">
          <BulbFrame x={24} y={12} edge="var(--bulb-edge)" />
          <div className="rounded-md border-2 border-orange p-1.5">
            <div className="rounded-sm border border-butter/40 px-4 py-10 text-center text-butter md:px-12 md:py-16">
              <p className="neon-text animate-flicker font-script text-6xl leading-none md:text-7xl">{c.neon}</p>
              <h2 className="mt-5 font-sign text-[clamp(2.6rem,9vw,6.2rem)] leading-[0.95] uppercase [text-shadow:4px_4px_0_var(--color-maroon)]">{c.title}</h2>
              <p className="mt-3 flex items-center justify-center gap-3 text-orange">
                <IconStar className="size-4" /><IconBolt className="size-6" /><IconStar className="size-4" />
              </p>
              <p className="mx-auto mt-4 max-w-[40ch] text-lg text-butter/85 md:text-xl">{c.body}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <Button href="/carta" size="lg">Ver la carta</Button>
                {hasOrder && <OrderButton size="lg" variant="butter" icon={<IconBag />}>Pide online</OrderButton>}
                <Button href="/#locales" size="lg" variant="outline">Locales</Button>
              </div>
              <div className="mt-6 flex justify-center gap-3">
                <a href={social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-11 place-items-center rounded-full bg-butter text-night transition-[color,background-color,scale,rotate] duration-500 ease-spring hover:-rotate-8 hover:scale-115 hover:bg-orange hover:text-milk"><IconInstagram /></a>
                <a href={social.tiktok.url} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid size-11 place-items-center rounded-full bg-butter text-night transition-[color,background-color,scale,rotate] duration-500 ease-spring hover:rotate-8 hover:scale-115 hover:bg-orange hover:text-milk"><IconTikTok /></a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

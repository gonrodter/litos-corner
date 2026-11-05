import Link from "next/link";
import Logo from "./ui/Logo";
import PlaceholderTag from "./ui/PlaceholderTag";
import { IconInstagram, IconTikTok } from "./ui/Icons";
import { OrderTrigger } from "./OrderDialog";
import { hasOrder, locations, mapsUrl, site, social } from "@/lib/content";

const legal = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const head = "title text-lg text-orange";

  return (
    <footer className="bg-maroon pb-20 text-butter md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-y-8 px-4 py-12 text-center text-[15px] md:grid-cols-4 md:px-8 md:py-16 md:text-base">
        <div className="flex flex-col items-center">
          <Logo className="text-xl" />
          <div className="mt-5 flex gap-2">
            <a href={social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full bg-butter text-maroon transition-[color,background-color,scale,rotate] duration-500 ease-spring hover:-rotate-8 hover:scale-115 hover:bg-orange hover:text-milk"><IconInstagram className="size-5" /></a>
            <a href={social.tiktok.url} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid size-10 place-items-center rounded-full bg-butter text-maroon transition-[color,background-color,scale,rotate] duration-500 ease-spring hover:rotate-8 hover:scale-115 hover:bg-orange hover:text-milk"><IconTikTok className="size-5" /></a>
          </div>
        </div>

        {locations.map((l) => (
          <div key={l.slug}>
            <h2 className={head}>{l.area}</h2>
            <address className="mt-3 space-y-0.5 not-italic">
              <p>{l.street}<PlaceholderTag show={l.addressPlaceholder} /></p>
              <p>{l.postalCode} {l.city}</p>
              <p><a href={l.phone.href} className="link-draw hover:text-orange">{l.phone.display}</a></p>
              <p><a href={mapsUrl(l)} target="_blank" rel="noopener noreferrer" className="underline decoration-orange underline-offset-4 transition-colors duration-300 hover:text-orange">Abrir en Google Maps</a></p>
            </address>
            <ul className="mt-3 space-y-1 text-butter/85">
              {l.hours.map((h) => (
                <li key={h.days}><span className="font-semibold uppercase">{h.days}</span><br />{h.time}</li>
              ))}
            </ul>
            <PlaceholderTag show={l.hoursPlaceholder}>Horario por confirmar</PlaceholderTag>
          </div>
        ))}

        <nav aria-label="Pie">
          <h2 className={head}>Lito’s</h2>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 uppercase md:block md:space-y-1">
            <li><Link href="/carta" className="link-draw hover:text-orange">Carta</Link></li>
            <li><Link href="/locales" className="link-draw hover:text-orange">Locales</Link></li>
            {hasOrder && <li><OrderTrigger className="link-draw cursor-pointer uppercase hover:text-orange">Pide online</OrderTrigger></li>}
            <li><a href={social.facebook.url} target="_blank" rel="noopener noreferrer" className="link-draw hover:text-orange">Facebook</a></li>
          </ul>
        </nav>
      </div>

      <div className="bg-maroon-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-5 text-sm sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 md:px-8">
          <p>© {year} {site.name}</p>
          <ul className="flex flex-wrap gap-4">
            {legal.map((x) => (
              <li key={x.href}><Link href={x.href} className="link-draw hover:text-orange">{x.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

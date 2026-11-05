import { site, social, type Location } from "./content";

/**
 * JSON-LD de restaurante por local (SEO local). Los datos marcados como
 * placeholder no se publican para no mandar información falsa a Google.
 */
export function restaurantJsonLd(l: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: l.name,
    url: `${site.url}/locales/${l.slug}`,
    servesCuisine: ["Hamburguesas", "Comida americana", "Pizzas", "Parrilla"],
    priceRange: "€€",
    sameAs: [social.instagram.url, social.tiktok.url, social.facebook.url],
    address: {
      "@type": "PostalAddress",
      ...(l.addressPlaceholder ? {} : { streetAddress: l.street, postalCode: l.postalCode }),
      addressLocality: l.city,
      addressRegion: l.province,
      addressCountry: "ES",
    },
    ...(l.phone.placeholder ? {} : { telephone: l.phone.href.replace("tel:", "") }),
    ...(l.geo ? { geo: { "@type": "GeoCoordinates", latitude: l.geo.lat, longitude: l.geo.lng } } : {}),
    hasMenu: `${site.url}/carta#${l.slug}`,
    ...(l.order.length ? { potentialAction: { "@type": "OrderAction", target: l.order.map((o) => o.url) } } : {}),
  };
}

export function JsonLdScript({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

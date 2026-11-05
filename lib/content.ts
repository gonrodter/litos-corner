/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO CENTRAL — Lito’s Corner / Lito’s Corner
 *  Textos, datos de negocio, locales, carta e imágenes se editan aquí.
 *  Los componentes no contienen datos del negocio.
 *
 *  Todo lo marcado `placeholder: true` (o con PLACEHOLDER en comentario)
 *  es contenido de ejemplo: hay que confirmarlo con el cliente.
 *  Mientras el flag siga en `true`, la web muestra una etiqueta discreta
 *  "dato de ejemplo" para que nadie lo publique sin revisar.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  url: "https://litosburger.es", // PLACEHOLDER: dominio definitivo
  name: "Lito’s Corner",
  shortName: "LITO’S",
  description:
    "Hamburguesería americana con ambiente de pub en Chiclana (Novo Sancti Petri) y San Fernando. Burgers de carne de retinto, nachos, pizzas, costillar y birra fría. También a domicilio.",
} as const;

export const social = {
  instagram: {
    handle: "@litoscornernovo",
    url: "https://www.instagram.com/litoscornernovo/",
  },
  tiktok: {
    handle: "@litos.corner.sanc",
    url: "https://www.tiktok.com/@litos.corner.sanc",
  },
  facebook: {
    handle: "LitosCorner",
    url: "https://www.facebook.com/LitosCorner/",
  },
} as const;

/* ───────────────────── Vídeos de la sección de redes ─────────────────────
 * Pega aquí la URL de cada vídeo (TikTok o Instagram), el primero el más
 * reciente. Se muestran los 4 primeros.
 *  - TikTok: la miniatura y el título salen solos (oEmbed, se refresca cada 6 h).
 *  - Instagram: no da miniatura sin token, así que pon `cover` con una imagen
 *    vertical en /public/images (p. ej. "/images/reel-nachos.webp").
 * `title` es opcional y sustituye al título automático.
 * Si faltan vídeos, los huecos se rellenan con tarjetas que llevan al perfil.
 */
export type SocialPost = { url: string; cover?: string; title?: string };

export const socialPosts: SocialPost[] = [
  { url: "https://www.instagram.com/reel/Dey2pG4OFvX/" }, // falta `cover`
  { url: "https://www.instagram.com/reel/Deg26rAO-l-/" }, // falta `cover`
  { url: "https://www.tiktok.com/@litos.corner.sanc/video/7667187392951880982" },
  { url: "https://www.tiktok.com/@litos.corner.sanc/video/7680148423508495618" },
];

/* ─────────────────────────── Imágenes ───────────────────────────
 * Cada hueco tiene `src: null` hasta que llegue la foto o la pieza IA.
 * Al poner una ruta (p. ej. "/images/hero-cartel.webp") el placeholder
 * desaparece solo. `brief` describe qué imagen generar/fotografiar.
 */
export type ImageSlot = {
  src: string | null;
  alt: string;
  brief: string;
  kind: "artwork" | "foto";
};

export const images = {
  heroSign: {
    src: null,
    kind: "artwork",
    alt: "Tablero de menú iluminado de Lito’s Corner con burgers, nachos y costillar",
    brief:
      "Tablero de menú de diner americano: panel mantequilla con marco granate y bombillas de marquesina, letras pintadas a mano (burgers, nachos, costillar), luz cálida de noche. Formato 4:3.",
  },
  heroBurger: {
    src: null,
    kind: "foto",
    alt: "Hamburguesa doble con cheddar fundido de Lito’s",
    brief: "Burger estrella en primer plano, queso goteando, fondo oscuro cálido. 1:1.",
  },
  identity: {
    src: null,
    kind: "foto",
    alt: "Barra de Lito’s Corner con neones",
    brief: "Barra del local con neones encendidos y grifos de cerveza, luz cálida. 4:5.",
  },
  highwayArt: {
    src: null,
    kind: "artwork",
    alt: "Carteles de carretera retro señalando a los locales de Lito’s Corner en Chiclana y San Fernando",
    brief:
      "Panorámica: dos rótulos de carretera retro junto a palmeras al atardecer, 'LITO’S CORNER · NOVO SANCTI PETRI' y 'LITO’S CORNER · SAN FERNANDO', carretera costera. 21:9.",
  },
  ambience: [
    {
      src: "/images/rock-litos.webp",
      kind: "foto",
      alt: "Concierto en directo en Lito’s Corner con el local lleno",
      brief: "Música en directo, local lleno de noche. Horizontal.",
    },
    {
      src: "/images/mesa-litos.webp",
      kind: "foto",
      alt: "Mesa pintada de rock and roll junto a la barra de Lito’s Corner",
      brief: "Detalle de mesa decorada y barra al fondo. Horizontal.",
    },
    {
      src: "/images/fachada-litos.webp",
      kind: "foto",
      alt: "Fachada de Lito’s Corner de noche, con terraza y luz de neón",
      brief: "Fachada y terraza de noche. Vertical 3:4.",
    },
    {
      src: "/images/burger-litos.jpg",
      kind: "foto",
      alt: "Burger de Lito’s con cheddar, cebolla caramelizada y crujiente de queso",
      brief: "Burger en primer plano. Vertical 3:4.",
    },
  ],
  finalCta: {
    src: null,
    kind: "artwork",
    alt: "Placa retro de Lito’s con flecha 'This way'",
    brief: "Placa esmaltada retro con 'EAT HERE' y flecha, fondo transparente o rojo. 1:1.",
  },
} satisfies Record<string, ImageSlot | ImageSlot[]>;

/* ─────────────────────────── Locales ─────────────────────────── */

export type Hours = { days: string; time: string };

export type OrderLink = { platform: string; url: string };

export type Location = {
  slug: string;
  name: string;
  area: string;
  city: string;
  province: string;
  postalCode: string;
  street: string;
  /** Coordenadas para JSON-LD / futuros mapas. PLACEHOLDER hasta confirmar. */
  geo?: { lat: number; lng: number };
  phone: { display: string; href: string; placeholder: boolean };
  hours: Hours[];
  hoursPlaceholder: boolean;
  addressPlaceholder: boolean;
  mapsQuery: string;
  featured: boolean;
  intro: string;
  nearby: string[];
  services: string[];
  /** Plataformas de pedido a domicilio. Vacío = solo en local. */
  order: OrderLink[];
};

export const locations: Location[] = [
  {
    slug: "novo-sancti-petri",
    name: "Lito’s Corner Novo Sancti Petri",
    area: "Novo Sancti Petri",
    city: "Chiclana de la Frontera",
    province: "Cádiz",
    postalCode: "11130",
    street: "C. Asdrúbal, s/n",
    addressPlaceholder: false,
    phone: { display: "956 49 45 33", href: "tel:+34956494533", placeholder: false },
    hours: [
      { days: "Lunes – Miércoles", time: "Cerrado" },
      { days: "Jueves", time: "20:30 – 23:30" },
      { days: "Viernes – Domingo", time: "13:30 – 16:30 · 20:30 – 23:30" },
    ],
    hoursPlaceholder: false,
    mapsQuery: "Lito's Corner Novo Sancti Petri",
    featured: true,
    intro:
      "Burgers de retinto, nachos para compartir, birra fría y el ambiente de pub americano que ves en redes. Si estás por Novo, pásate",
    nearby: [
      "A un paso de la playa de La Barrosa",
      "Zona de hoteles y apartamentos de Novo Sancti Petri",
      "Plan de después de playa, golf o paseo",
    ],
    services: ["Comer y cenar", "Terraza", "Para llevar", "A domicilio"], // PLACEHOLDER: confirmar servicios
    order: [
      {
        platform: "Glovo",
        url: "https://glovoapp.com/es/es/chiclana-de-la-frontera/stores/litos-corner-chiclana-de-la-frontera",
      },
    ],
  },
  {
    slug: "san-fernando",
    name: "Lito’s Corner San Fernando",
    area: "San Fernando",
    city: "San Fernando",
    province: "Cádiz",
    postalCode: "11100",
    street: "Av. Almirante León Herrero, 31",
    addressPlaceholder: false,
    phone: { display: "956 88 86 46", href: "tel:+34956888646", placeholder: false },
    // PLACEHOLDER: horario sacado de su web antigua (2022), confirmar
    hours: [
      { days: "Lunes", time: "Cerrado" },
      { days: "Martes – Domingo", time: "12:00 – 17:00 · 20:00 – 00:00" },
    ],
    hoursPlaceholder: true,
    mapsQuery: "Lito's Corner Av. Almirante León Herrero 31 San Fernando",
    featured: false,
    intro:
      "Burgers de retinto, costillar a baja temperatura, pizzas y parrilla en plena avenida de San Fernando. Y si no te apetece salir, te lo llevamos a casa",
    nearby: [
      "En la Avenida Almirante León Herrero",
      "Para comer, cenar o picar algo con la cuadrilla",
      "Pedidos a domicilio por toda La Isla",
    ],
    services: ["Comer y cenar", "Para llevar", "A domicilio"],
    order: [
      {
        platform: "Glovo",
        url: "https://glovoapp.com/es/es/san-fernando/stores/litos-corner-american-restaurant-cadiz",
      },
    ],
  },
  // Para añadir un local nuevo: copiar un objeto de arriba con otro `slug`.
  // La ficha /locales/<slug>, el sitemap y el JSON-LD se generan solos.
];

export const mainLocation = locations.find((l) => l.featured) ?? locations[0];

/** Locales con reparto: los botones "Pide online" abren un selector con ellos (<OrderDialog/>). */
export const orderLocations = locations.filter((l) => l.order.length > 0);
export const hasOrder = orderLocations.length > 0;

export function mapsUrl(l: Location) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.mapsQuery)}`;
}

export function mapsEmbedUrl(l: Location) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(l.mapsQuery)}&z=15&output=embed`;
}

/* ─────────────────────────── Carta ───────────────────────────
 * Una carta por local (no son iguales). Fuentes:
 *  - Novo Sancti Petri: su carta digital (litoscorner.cartaenweb.es).
 *  - San Fernando: su tienda de Uber Eats (precios de reparto, pueden
 *    no coincidir con los de sala). PLACEHOLDER: pedir carta de sala.
 * `price: null` oculta el precio. Burgers con dos precios: 200 g · 300 g.
 */
export type MenuItem = {
  name: string;
  desc: string;
  price: string | null;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  kicker: string;
  blurb: string;
  items: MenuItem[];
};

export type LocalMenu = {
  locationSlug: string;
  /** Aviso bajo la carta (alérgenos, origen de precios…). */
  notes: string[];
  categories: MenuCategory[];
};

export const menus: LocalMenu[] = [
  {
    locationSlug: "novo-sancti-petri",
    notes: [
      "Todas nuestras hamburguesas son de ternera de retinto 100%",
      "Opciones sin gluten: hamburguesas, espaguetis y nachos. Pregunta al encargado",
      "Precios con IVA incluido. Si tienes alguna alergia o intolerancia, avísanos",
    ],
    categories: [
      {
        id: "smash",
        title: "Smash burgers",
        kicker: "Doble disco",
        blurb: "Retinto aplastado en la plancha, bordes crujientes y doble de queso",
        items: [
          { name: "Ramones", desc: "Doble disco de 90 g de retinto, doble cheddar madurado, bacon crujiente, cebolla caramelizada, costilla a baja temperatura, 2 mozzarella sticks y salsa del chef.", price: "15,90 €", tag: "La más completa" },
          { name: "AC/DC", desc: "Doble disco de 90 g de retinto, doble cheddar americano, bacon crujiente, cebolla crujiente, pepinillos y salsa de la casa. Disco extra +2,50 €.", price: "14,90 €" },
        ],
      },
      {
        id: "burgers",
        title: "Burgers",
        kicker: "Carne de retinto · 200 g / 300 g",
        blurb: "Hamburguesas de autor y clásicas con nombre de leyenda del rock",
        items: [
          { name: "Queen XO", desc: "Dos carnes de 120 g, una con doble cheddar y otra con havarti, salsa de huevo macerada, crujiente de claras y salsa XO.", price: "15,90 €", tag: "Un espectáculo" },
          { name: "Guns N’ Roses", desc: "Huevo, bacon crujiente y cebolla caramelizada al Pedro Ximénez sobre queso parmesano.", price: "14,90 € · 17,50 €" },
          { name: "Lito’s Corner", desc: "Morcilla de Burgos con cheddar, bacon, huevo y cebolla crujiente.", price: "14,90 € · 17,50 €", tag: "La de la casa" },
          { name: "Elvis Presley", desc: "Cheddar, queso ahumado y queso rulo, mayonesa de trufa y cebolla caramelizada al Pedro Ximénez en pan brioche.", price: "15,90 € · 17,50 €", tag: "Nueva" },
          { name: "Red Hot Chili Peppers", desc: "Carne a la brasa, queso ahumado, mayonesa sriracha, mermelada de bacon con gochujang y crujiente de cheddar y parmesano en brioche.", price: "15,90 € · 17,50 €", tag: "Nueva" },
          { name: "John Lennon", desc: "Pollo crujiente con cheddar americano, bacon y mac’n cheese.", price: "15,90 €" },
          { name: "Jimi Hendrix", desc: "Lechuga, cebolla roja, tomate de la huerta, bacon crujiente, queso de cabra y guacamole.", price: "14,90 € · 17,50 €" },
          { name: "Angus Young", desc: "Rúcula, tomate, bacon, salsa Jack Daniel’s, cheddar y roquefort.", price: "14,90 € · 17,50 €" },
          { name: "Amy Winehouse", desc: "Cheddar, huevo, bacon crujiente y aros de cebolla.", price: "14,90 € · 17,50 €" },
          { name: "Slash", desc: "Costilla desmenuzada, lechugas gourmet, tomate, cebolla roja y salsa barbacoa casera.", price: "14,90 € · 17,50 €" },
          { name: "Slash cheese & bacon", desc: "Pulled pork de costillar, bacon, cheddar y salsa barbacoa casera.", price: "14,90 € · 17,50 €" },
          { name: "Police", desc: "Queso, huevo, bacon, tomate y salsa búfalo.", price: "15,90 € · 17,50 €" },
          { name: "The Boss", desc: "Tres ingredientes a elegir.", price: "15,90 € · 17,50 €" },
          { name: "Mc Lito’s", desc: "Pollo crujiente, lechuga, salsa ranchera, queso y bacon.", price: "13,90 €" },
          { name: "Hamburguesa vegana", desc: "Tres ingredientes a elegir.", price: "15,90 €" },
          { name: "Hamburguesa del mes", desc: "Pregunta por la de este mes.", price: "14,90 € · 17,50 €" },
          { name: "Hamburguesa niñ@s", desc: "120 g de carne con bacon o queso. Ingrediente extra 1 €.", price: "10,90 €" },
        ],
      },
      {
        id: "nachos",
        title: "Nachos",
        kicker: "Para compartir",
        blurb: "Tortitas de maíz crujientes y mezcla de cuatro quesos gratinados",
        items: [
          { name: "Nachos Lito’s Corner", desc: "Cuatro quesos con roquefort, chiles, carne picada, bacon crujiente, frijoles y salsa barbacoa.", price: "12,90 €", tag: "Los de la casa" },
          { name: "Nachos Red Hot Chili Peppers", desc: "Chile de carnes, jalapeños y cuatro quesos gratinados.", price: "11,90 €" },
          { name: "Nachos Bruce Springsteen", desc: "Cuatro quesos, carne de costillar y salsa barbacoa.", price: "12,90 €" },
          { name: "Nachos Zapata", desc: "Carne picada, queso y guacamole.", price: "11,90 €" },
          { name: "Nachos Circus", desc: "Quesos variados, bacon y cebolla frita crujiente.", price: "10,90 €" },
          { name: "Nachos con queso", desc: "Cuatro quesos gratinados.", price: "9,00 €" },
        ],
      },
      {
        id: "picar",
        title: "Para picar",
        kicker: "Entrantes",
        blurb: "Clásicos americanos para abrir boca",
        items: [
          { name: "Alitas fritas estilo thai", desc: "Rebozadas y aliñadas con soja, sésamo y kimchi, con salsa japo, cebollino y lima.", price: "11,90 €" },
          { name: "Alitas a la brasa", desc: "Con salsa honey o cajún.", price: "9,90 €" },
          { name: "Alitas fritas", desc: "", price: "9,90 €" },
          { name: "Tacolito", desc: "Cerdo macerado, pico de gallo, mayonesa de chipotle, lima, cilantro y guacamole.", price: "4,50 €" },
          { name: "Langostinos sweet chili", desc: "Rebozados en panko con salsa de mango y mahonesa japo.", price: "9,50 €" },
          { name: "Jalapeños", desc: "Rellenos de cheddar.", price: "11,50 €" },
          { name: "Fingers de mozzarella", desc: "", price: "11,90 €" },
          { name: "Fingers de pollo", desc: "", price: "11,90 €" },
          { name: "Aros de cebolla", desc: "", price: "9,00 €" },
          { name: "Combo", desc: "Alitas de pollo, aros de cebolla y fingers de queso.", price: "12,90 €" },
        ],
      },
      {
        id: "patatas",
        title: "Patatas",
        kicker: "Bien cargadas",
        blurb: "Fritas en el momento",
        items: [
          { name: "Patatas Rock & Roll", desc: "Cuatro quesos con roquefort, chiles, carne picada y salsa de tomate.", price: "12,90 €" },
          { name: "Bacon cheese fries con pulled pork", desc: "", price: "12,90 €" },
          { name: "Patatas bacon y queso", desc: "Julianas con salsa ranchera, bacon y queso.", price: "11,90 €" },
          { name: "Patatas fritas juliana o gajo", desc: "Salsa a elegir: alioli, barbacoa, mostaza y miel o brava.", price: "7,00 €" },
        ],
      },
      {
        id: "pizzas",
        title: "Pizzas",
        kicker: "Artesanas",
        blurb: "Masa fina y crujiente. Ingrediente extra desde 1 €",
        items: [
          { name: "Rock & Roll Circus", desc: "Tomate, mozzarella, costilla desmenuzada, bacon, huevo, parmesano y orégano.", price: "13,90 €" },
          { name: "Lito’s Corner", desc: "Tomate natural, mozzarella, berenjena, calabacín, parmesano, orégano y AOVE.", price: "14,90 €" },
          { name: "Pizza burger", desc: "Salsa burger, mozzarella, tomate natural, bacon, cheddar y carne de retinto.", price: "13,50 €" },
          { name: "Pizza hot-dog", desc: "Salsa burger, mozzarella, tomate natural, bacon, cheddar y salchichas.", price: "12,90 €" },
          { name: "Barbacoa", desc: "Ternera picada, bacon, cebolla y salsa barbacoa.", price: "13,50 €" },
          { name: "Zapata", desc: "Tomate, mozzarella, chile, carne y jalapeños.", price: "13,90 €" },
          { name: "Pepperoníssima", desc: "Tomate, mozzarella, pepperoni, aceitunas negras, cebolla, pimiento y orégano.", price: "13,90 €" },
          { name: "Arrabbiata", desc: "Tomate, mozzarella, carne, cebolla, aceitunas negras, pimiento morrón, guindilla y orégano.", price: "13,90 €" },
          { name: "Capricciosa", desc: "Tomate, mozzarella, jamón, champiñones, huevo y orégano.", price: "13,90 €" },
          { name: "Cuatro estaciones", desc: "Tomate, mozzarella, champiñones, york, espárragos, espinacas y orégano.", price: "13,90 €" },
          { name: "Cuatro quesos", desc: "Tomate, mozzarella, roquefort, emmental, parmesano y orégano.", price: "13,50 €" },
          { name: "Alle noci", desc: "Nata, mozzarella, mascarpone, roquefort, nueces y parmesano.", price: "13,50 €" },
          { name: "Campera", desc: "Tomate, mozzarella, pimiento, cebolla, emmental, champiñones, BBQ y orégano.", price: "13,50 €" },
          { name: "Blues", desc: "Tomate natural, bacon, mozzarella, emmental, champiñones y orégano.", price: "13,50 €" },
          { name: "Carbonara", desc: "Nata, mozzarella, bacon, huevo, parmesano y orégano.", price: "13,50 €" },
          { name: "Al salmón", desc: "Nata, mozzarella, queso de Burgos, salmón, parmesano y orégano.", price: "13,90 €" },
          { name: "Calzone", desc: "Tomate, mozzarella, pepperoni, anchoa, huevo, cebolla, parmesano y orégano.", price: "14,50 €" },
          { name: "Margarita", desc: "Tomate, mozzarella y orégano.", price: "10,00 €" },
        ],
      },
      {
        id: "brasa",
        title: "Brasa y cocina",
        kicker: "Auténtica parrilla",
        blurb: "Costillar a baja temperatura, carnes de retinto y guisos de la casa",
        items: [
          { name: "Baby ribs · costillar completo", desc: "Salsa a elegir: honey, barbacoa o cajún.", price: "21,90 €", tag: "El clásico" },
          { name: "Baby ribs · medio costillar", desc: "Salsa a elegir: honey, barbacoa o cajún.", price: "13,50 €" },
          { name: "Combo parrilla (2 pers.)", desc: "Chorizo criollo, chorizo de Salamanca, morcilla de Burgos, medio costillar y alitas a la brasa.", price: "22,90 €", tag: "Para dos" },
          { name: "Entrecot de retinto 350 g", desc: "Con patatas y verduras a la brasa.", price: "19,90 €" },
          { name: "Churrasco de ternera", desc: "A la brasa, con patatas.", price: "15,90 €" },
          { name: "Rabo de toro de retinto", desc: "Estofado al estilo cordobés.", price: "17,90 €" },
          { name: "Arroz de ibéricos", desc: "Arroz bomba con abanico y cabeza de ibérico, terminado en horno de leña.", price: "15,90 €" },
          { name: "Cochinillo asado (1/4)", desc: "", price: "28,00 €" },
          { name: "Chorizos criollos a la brasa", desc: "", price: "9,90 €" },
          { name: "Chorizos de la Sierra de Cádiz", desc: "A la brasa.", price: "9,50 €" },
          { name: "Morcilla de arroz de Burgos", desc: "", price: "9,90 €" },
        ],
      },
      {
        id: "ensaladas-pasta",
        title: "Ensaladas y pasta",
        kicker: "Para variar",
        blurb: "Pasta con salsa a elegir: boloñesa, carbonara, pesto o arrabbiata",
        items: [
          { name: "Ensalada César", desc: "Lechugas, nueces, bacon crujiente, parmesano, tiras de pollo, picatostes y salsa césar.", price: "13,90 €" },
          { name: "Ensalada Rock & Roll", desc: "Canónigos, espinacas, cebolla frita, cherry, queso de cabra y vinagreta de mostaza y miel.", price: "12,90 €" },
          { name: "Ensalada italiana", desc: "Mozzarella de búfala, tomate, orégano, rúcula, maíz y aceite de oliva.", price: "12,90 €" },
          { name: "Ensalada bonita", desc: "Lechugas, tomate, cebolla, atún, huevo y maíz.", price: "11,50 €" },
          { name: "Tortellini", desc: "Con salsa a elegir.", price: "12,90 €" },
          { name: "Espaguetis", desc: "Con salsa a elegir.", price: "12,90 €" },
        ],
      },
      {
        id: "postres",
        title: "Postres",
        kicker: "Para terminar",
        blurb: "Caseros y para compartir (o no)",
        items: [
          { name: "Tarta de queso Pantera Rosa", desc: "", price: "5,50 €" },
          { name: "Cheesecake Lotus", desc: "", price: "5,50 €" },
          { name: "Muerte por chocolate", desc: "", price: "5,50 €" },
          { name: "Brownie", desc: "", price: "5,50 €" },
          { name: "Carrot cake", desc: "", price: "5,50 €" },
          { name: "Crepe de Nutella", desc: "", price: "5,50 €" },
          { name: "Crepe de dulce de leche", desc: "", price: "5,50 €" },
          { name: "Bola de helado", desc: "", price: "3,00 €" },
        ],
      },
    ],
  },
  {
    locationSlug: "san-fernando",
    notes: [
      "Burgers de ternera retinta y vaca rubia gallega",
      "Precios de la carta a domicilio en Uber Eats; en sala pueden variar",
      "Si tienes alguna alergia o intolerancia, avísanos antes de pedir",
    ],
    categories: [
      {
        id: "burgers",
        title: "Burgers",
        kicker: "Smash y de autor",
        blurb: "Retinto, vaca rubia gallega y pollo crujiente, con nombre de leyenda del rock",
        items: [
          { name: "Madonna", desc: "Doble disco de retinto de 120 g, doble gouda, huevo, bacon crujiente, costillar deshilachado, mayokimchi y cebolla crujiente.", price: "15,30 €", tag: "La más pedida" },
          { name: "Freddie Mercury", desc: "Carne cántabra, gorgonzola, bacon, champiñones, cebolla caramelizada y mahonesa de trufa en brioche.", price: "14,20 €", tag: "Gran novedad" },
          { name: "Mick Jagger", desc: "200 g de vaca rubia gallega con jamón ibérico, huevo y queso viejo.", price: "14,20 €" },
          { name: "Queen", desc: "Doble disco de retinto de 120 g, doble cheddar, doble bacon crujiente y mayokimchi.", price: "14,20 €" },
          { name: "Guns N’ Roses", desc: "Huevo, bacon crujiente, cebolla caramelizada y salsa de mozzarella al PX sobre parmesano.", price: "13,75 €" },
          { name: "Tina Turner", desc: "Guacamole, rúcula, tomate, cebolla morada, cheddar, mahonesa de mostaza y nachos crujientes.", price: "13,10 €" },
          { name: "Miguel Ríos", desc: "Lechugas, queso manchego, bacon ahumado, cebolleta crujiente y salsa gaucha.", price: "13,10 €" },
          { name: "Amy Winehouse", desc: "Cheddar, huevo, bacon crujiente y aros de cebolla.", price: "12,65 €" },
          { name: "Boney M", desc: "Pollo rebozado en corn flakes, lechuga, mahonesa de bacon ahumado, tomate y edam en brioche.", price: "12,00 €", tag: "Nº 1 a domicilio" },
        ],
      },
      {
        id: "picar",
        title: "Para picar",
        kicker: "Entrantes",
        blurb: "Nachos, croquetas caseras y clásicos para el centro de la mesa",
        items: [
          { name: "Nachos Lito’s Corner", desc: "Cuatro quesos con roquefort, carne picada, bacon crujiente, frijoles y salsa barbacoa.", price: "14,20 €", tag: "Los de la casa" },
          { name: "Nachos Zapata", desc: "Carne picada, frijoles, queso y guacamole.", price: "13,10 €" },
          { name: "Nachos Red Hot Chili Peppers", desc: "Chile de carne, frijoles, jalapeños y cuatro quesos gratinados.", price: "12,65 €", tag: "Pica" },
          { name: "Nachos con queso", desc: "Cuatro quesos gratinados.", price: "9,35 €" },
          { name: "Albondiguitas de pollo al PX", desc: "En salsa mozárabe al Pedro Ximénez, con cebollitas caramelizadas y parmesano.", price: "14,20 €" },
          { name: "Patatas bacon y queso", desc: "Julianas con salsa ranchera, bacon crujiente y cuatro quesos fundidos.", price: "10,45 €" },
          { name: "Chicken fingers", desc: "Tiras de pollo crujientes con salsa barbacoa.", price: "9,80 €" },
          { name: "Ensaladilla de toda la vida", desc: "Cremosa, al estilo tradicional.", price: "8,70 €" },
          { name: "Alitas fritas con barbacoa", desc: "", price: "8,25 €" },
          { name: "Mix de croquetas caseras", desc: "Crujientes por fuera y cremosas por dentro.", price: "7,95 €" },
          { name: "Patatas fritas juliana o gajo", desc: "Con salsa brava o alioli.", price: "6,05 €" },
        ],
      },
      {
        id: "pizzas",
        title: "Pizzas",
        kicker: "Masa fina",
        blurb: "Finas, crujientes y bien cargadas",
        items: [
          { name: "Burrata", desc: "Tomate, nata, burrata, mortadela siciliana, pesto de albahaca y pistacho.", price: "15,30 €", tag: "Top a domicilio" },
          { name: "Costillar Lito’s Corner", desc: "Tomate, mozzarella, costillar, salsa barbacoa y cebolla crujiente.", price: "15,30 €" },
          { name: "Tokio", desc: "Salsa carbonara, rúcula fresca, mix de cuatro quesos, bacon y toque teriyaki.", price: "14,20 €" },
          { name: "Rock & Roll Circus", desc: "Tomate, mozzarella, pollo, bacon, huevo, parmesano y orégano.", price: "14,20 €" },
          { name: "Vegetariana", desc: "Champiñones, tomate seco, salsa de trufa, ricota, parmesano y albahaca.", price: "14,20 €" },
          { name: "Cuatro quesos", desc: "Tomate, mozzarella, roquefort, emmental, parmesano y orégano.", price: "13,75 €" },
          { name: "Barbacoa", desc: "Ternera picada, bacon, cebolla y salsa barbacoa.", price: "13,10 €" },
          { name: "Pepperoníssima", desc: "Tomate, mozzarella, pepperoni, aceitunas negras, cebolla, pimiento y orégano.", price: "13,10 €" },
          { name: "Arrabbiata", desc: "Tomate, mozzarella, carne, cebolla, aceitunas negras, pimiento morrón, guindilla y orégano.", price: "13,10 €" },
          { name: "Capricciosa", desc: "Tomate, mozzarella, jamón, champiñones, huevo y orégano.", price: "13,10 €" },
          { name: "Cuatro estaciones", desc: "Tomate, mozzarella, champiñones, york, espárragos, espinacas y orégano.", price: "13,10 €" },
          { name: "Margarita", desc: "Tomate, mozzarella y orégano.", price: "9,35 €" },
        ],
      },
      {
        id: "brasa",
        title: "Brasa",
        kicker: "Auténtica parrilla",
        blurb: "Costillar a baja temperatura y cortes nobles de retinto",
        items: [
          { name: "Solomillo de retinto", desc: "Corte noble y tierno.", price: "27,50 €" },
          { name: "Costillar completo", desc: "Salsa a elegir: honey, barbacoa o gaucha.", price: "25,20 €", tag: "El clásico" },
          { name: "Entrecot de retinto", desc: "Corte de sabor intenso.", price: "21,90 €" },
          { name: "Medio costillar", desc: "Salsa a elegir: honey, barbacoa o gaucha.", price: "16,40 €" },
        ],
      },
      {
        id: "ensaladas",
        title: "Ensaladas",
        kicker: "Para variar",
        blurb: "Frescas y para compartir",
        items: [
          { name: "Ensalada César", desc: "Lechugas, nueces, bacon crujiente, parmesano, pollo crujiente y salsa césar.", price: "9,35 €" },
          { name: "Ensalada bonita", desc: "Lechugas, tomate, cebolla, atún, huevo y maíz.", price: "8,25 €" },
        ],
      },
    ],
  },
];

export function menuFor(l: Location) {
  return menus.find((m) => m.locationSlug === l.slug);
}

/* ─────────────────────────── Reseñas ───────────────────────────
 * Reseñas de Google que ya publicaban en su web antigua (San Fernando).
 */
export type Review = { text: string; author: string; local: string };

export const reviews: Review[] = [
  {
    text: "Como rockera que soy, me pedí una hamburguesa Guns N’ Roses que estaba espectacular. Muy buen ambiente, el servicio muy bueno y rápido. Me encantó la decoración, muy rockera. Lugar para repetir sin duda 🤘",
    author: "Susana J.",
    local: "San Fernando",
  },
  {
    text: "Espectacular como de costumbre, da igual si es el costillar estrella, las hamburguesas, las empanadillas de costillar, las pizzas o los canelones de rabo de toro. ¡Manolo y su equipo son unos máquinas!",
    author: "Christian L.",
    local: "San Fernando",
  },
  {
    text: "Para los amantes de la comida americana, perfecto. Servicio muy atento y buena relación calidad-precio.",
    author: "Jesús A.",
    local: "San Fernando",
  },
];

/* ─────────────────────────── Copys home ───────────────────────────
 * Titulares de sección sin punto final. Las cursivas (script) son el guiño
 * de rótulo pintado; usarlas poco.
 */

export const home = {
  board: {
    // Tablero de menú del hero (hace de artwork hasta que llegue la pieza IA)
    top: "Lito’s Corner",
    items: [
      { script: "Burger de retinto", name: "Guns N’ Roses" },
      { script: "Para el centro", name: "Nachos Lito’s" },
      { script: "A baja temperatura", name: "Costillar BBQ" },
    ],
    extra: "y la birra bien fría",
    strip: ["Burgers", "Beer", "Rock"],
  },
  h1: "Hamburguesería americana en Chiclana y San Fernando",
  badges: [
    { kind: "frame", script: "100% auténtica", main: "Carne de retinto" },
    { kind: "banner", main: "Smash burgers" },
    { kind: "lozenge", script: "Para compartir", main: "Nachos" },
    { kind: "stack", top: "Siempre", main: "Birra fría", bottom: "de barril" },
    { kind: "stars", main: "Rock & roll" },
    { kind: "neon", main: "Pide online" },
    { kind: "frame", script: "A baja temperatura", main: "Costillar BBQ" },
  ],
  lockup: {
    text: "Burgers de retinto, birra fría y rock de fondo. En Novo Sancti Petri, en San Fernando y en tu casa",
  },
  identity: {
    title: "Hamburguesería americana con alma de pub",
    body: [
      "En Lito’s las burgers son de retinto 100%, el queso se funde de verdad y los nachos llegan al centro de la mesa para que meta mano todo el mundo.",
      "Neones, rock y cerveza fría. Cada burger lleva nombre de leyenda: de los Ramones a Amy Winehouse.",
    ],
    plates: [
      { code: "RTNT", title: "Carne de retinto", text: "100% auténtica, a la plancha o smash" },
      { code: "PUB", title: "Ambiente de pub", text: "Neones, barra y rock de fondo" },
      { code: "2 LOC", title: "Chiclana y San Fernando", text: "Para comer, cenar o pedir a casa" },
    ],
  },
  menuIntro: {
    title: "Lo que más se pide",
    body: "Un adelanto de lo que sale de la cocina",
  },
  // Destacados de la home: platos que están en las dos cartas
  highlights: [
    {
      id: "burgers",
      title: "Burgers",
      kicker: "Carne de retinto",
      blurb: "Smash y de autor, con nombre de leyenda del rock",
      items: ["Guns N’ Roses", "Amy Winehouse", "Queen"],
    },
    {
      id: "picar",
      title: "Nachos",
      kicker: "Para compartir",
      blurb: "Tortitas crujientes y cuatro quesos gratinados",
      items: ["Nachos Lito’s Corner", "Nachos Zapata", "Red Hot Chili Peppers"],
    },
    {
      id: "pizzas",
      title: "Pizzas",
      kicker: "Masa fina",
      blurb: "Finas, crujientes y bien cargadas",
      items: ["Rock & Roll Circus", "Cuatro quesos", "Barbacoa"],
    },
    {
      id: "brasa",
      title: "Brasa",
      kicker: "Auténtica parrilla",
      blurb: "Costillar a baja temperatura y entrecot de retinto",
      items: ["Costillar completo", "Medio costillar", "Entrecot de retinto"],
    },
  ],
  order: {
    neon: "Delivery",
    title: "¿No te apetece salir?",
    body: "Repartimos desde Chiclana y San Fernando con Glovo: burgers de retinto, pizzas, nachos y costillar sin moverte del sofá.",
    favoritesTitle: "Lo más pedido a domicilio",
    favorites: ["Burger Boney M", "Pizza Burrata", "Pizza Cuatro quesos"],
  },
  highway: {
    line1: "Lito’s Corner",
    exit: "Next exit",
  },
  ambience: {
    neon: "Good food, loud nights",
    title: "Ambiente de pub americano",
    body: "Luces de neón, rock and roll y mesas largas para venir con la cuadrilla. Lo que ves en nuestros vídeos es lo que te vas a encontrar.",
    points: ["Mesas para grupos", "Música y buen rollo", "Terraza en verano", "Abierto para cenar"],
  },
  location: {
    title: "Dos locales, la misma plancha",
    script: "Elige el tuyo",
  },
  reviews: {
    title: "Lo que dicen de Lito’s",
  },
  social: {
    title: "Síguenos en redes",
    body: "Burgers recién hechas, noches con el local lleno y lo que se nos vaya ocurriendo. Todo pasa antes por Instagram y TikTok.",
  },
  final: {
    neon: "¿Hambre?",
    title: "Ya sabes dónde",
    body: "Pásate por Novo Sancti Petri o San Fernando, o pídelo a casa. Nosotros ponemos la plancha, tú pones las ganas.",
  },
} as const;

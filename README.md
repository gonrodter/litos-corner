# Lito’s Corner / Lito’s Corner — web v1

Next.js 16 (App Router, estático) + Tailwind 4. Español, mobile first.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # todas las rutas se generan como estáticas
```

## Dirección creativa (v2): Small Cheval con alma de pub

Toma de [Small Cheval](https://smallcheval.com/) la paleta granate, mantequilla y naranja, el tablero de menú iluminado, la fila de insignias de rótulo, los separadores ondulados con filete naranja, los botones en cursiva de rótulo y los titulares en grotesca negrita en mayúsculas. Lito’s añade la noche de pub (neón y tinta), el cartel de carretera, las placas esmaltadas, las estrellas y las bombillas que parpadean.

- **Paleta**: granate `#68171c`, mantequilla `#f3daa2`, naranja `#e28c22`, noche `#1c0d0c` y neón `#ff5a45`.
- **Tipografías.** Small Cheval usa Brandon Grotesque (Adobe Fonts) y SignPainter HouseScript, las dos de pago. Aquí van sus equivalentes libres:
  - **Jost** ≈ Brandon Grotesque: titulares en mayúsculas y texto
  - **Damion** ≈ SignPainter: cursivas, botones y neón
  - **Ultra**: letras de placa y cartel, solo en signage
  - **Overpass** ≈ Highway Gothic: solo en el cartel de autopista
  - Si el cliente tiene licencia de las originales, se cambian en `app/layout.tsx` con `next/font/local` o con el kit de Adobe.
- **Reglas**: titulares de sección sin antetítulo y sin punto final. Las cursivas se usan como guiño de rótulo, no en párrafos.

## Estructura

| Ruta | Contenido |
|---|---|
| `/` | Tablero de menú iluminado, fila de insignias, logo y qué es Lito’s (cartel + placas), lo que más se pide, cartel de autopista, ambiente (neón), local Novo Sancti Petri, redes, rótulo final |
| `/carta` | Carta completa por categorías, con índice fijo |
| `/locales` | Listado de locales (escala como cadena) |
| `/locales/[slug]` | Ficha de local generada desde `lib/content.ts` (JSON-LD propio) |
| `/aviso-legal`, `/privacidad`, `/cookies` | Placeholders legales (noindex) |
| `/sitemap.xml`, `/robots.txt` | Automáticos |

En móvil hay una barra fija inferior con **Llamar · Cómo llegar · Carta**, pensada para el tráfico que llega de IG y TikTok.

## Editar contenido

**Todo está en `lib/content.ts`**: textos, local, horario, carta, redes e imágenes.

- Datos con `placeholder: true` muestran una etiqueta "Dato de ejemplo". Al confirmarlos, pon el flag a `false`.
- `menuIsPlaceholder = true` muestra el aviso de carta de ejemplo. Los precios en `null` no se pintan.
- Nuevo local: añade un objeto a `locations`. La ficha, el sitemap y el JSON-LD se crean solos.
- El JSON-LD **no publica** dirección ni teléfono mientras sean placeholder.

### Pendiente de confirmar con cliente
- [ ] Dirección exacta, CP y coordenadas de Novo Sancti Petri
- [ ] Teléfono
- [ ] Horario real
- [ ] Carta real (nombres, descripciones, precios, alérgenos)
- [ ] Servicios (terraza, para llevar, delivery, reservas)
- [ ] Otros locales de la cadena (en Gastroranking aparece un "Lito’s Corner" en San Fernando: verificar si es el mismo grupo)
- [ ] Dominio (`site.url`)
- [ ] Logo vectorial (ahora hay un wordmark tipográfico provisional en `components/ui/Logo.tsx`)
- [ ] Textos legales y titular/CIF

## Imágenes y assets

Cada hueco de `images` en `content.ts` lleva un `brief`. Mientras `src` sea `null` se ve un placeholder con ese brief. Al poner la ruta (p. ej. `/images/hero-cartel.webp` en `public/images/`) se sustituye solo.

### Piezas IA (signage), por prioridad
1. **`heroSign`, tablero hero (4:3)**. Es la pieza clave. Cuando falta, se dibuja el tablero de menú en HTML (`components/home/Hero.tsx`), que sirve como boceto de composición.
   > *Vintage American diner menu board, butter-yellow painted panel with maroon frame and a border of glowing marquee bulbs, hand-painted sign lettering listing burgers, fries and nachos, small burger illustrations, warm night light, photographic, 4:3*
   - Extra: el cartel de carretera de "Qué es Lito’s" (`RoadSign.tsx`) también se puede sustituir por una pieza IA en 4:5.
2. **`highwayArt`, separador panorámico (21:9)**. Con él, sustituye al cartel verde de autopista dibujado en CSS.
   > *1950s motel/diner roadside sign "LITO’S CORNER" with neon arrow, coastal road at sunset, palm trees, warm haze, cinematic wide shot, 21:9*
3. **`finalCta`, placa "EAT HERE" (1:1)**. Hueco reservado para una placa decorativa del cierre.
4. Extra opcional: placas o insignias sueltas (matrícula "NOVO", chapa "Est.") en PNG transparente para decorar secciones.

> Ojo con el texto en imágenes IA: suele salir deformado. Lo más seguro es generar el cartel sin letras y componer las letras encima, o retocar después.

### Fotos reales (mejor que IA para el producto)
- `heroBurger`: burger estrella con el queso fundido, fondo oscuro (1:1)
- `identity`: barra con neones y grifos (4:5)
- `ambience` ×5: mesa cenital, neón, decoración de pared (vertical), caña tirándose, terraza de noche (panorámica)
- `social` ×4: portadas de reels en 9:16. Siguiente paso: feed real con la API de Instagram o un widget tipo Behold.
- Imagen OG 1200×630 para compartir en WhatsApp y redes (falta)
- Favicon con el logo definitivo

## Componentes

- `components/ui/`: Button (placa), Artwork (imagen/placeholder), Kicker, Logo, Reveal, Icons, PlaceholderTag
- `components/home/`: secciones de la home
- `components/LocationBlock.tsx`: bloque de local reutilizable (home + fichas)
- `components/MapFacade.tsx`: Google Maps que carga solo al hacer clic (rendimiento + RGPD)

// data/smartImage.js

const FALLBACK_BY_TYPE = {
  "logística":
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1600",
  "transporte":
    "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&q=80&w=1600",
  "hotel":
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600",
  "paseo":
    "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1600",
  "walk":
    "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1600",
  "comida":
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600",
  "foodie":
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600",
  "visita":
    "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&q=80&w=1600",
  "museum":
    "https://images.unsplash.com/photo-1529429612779-c8e40ef2f36f?auto=format&fit=crop&q=80&w=1600",
  "museo":
    "https://images.unsplash.com/photo-1529429612779-c8e40ef2f36f?auto=format&fit=crop&q=80&w=1600",
  "pub":
    "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&q=80&w=1600",
  "mirador":
    "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&q=80&w=1600",
  "evento":
    "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80&w=1600",
  "base":
    "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&q=80&w=1600",
};

const DEFAULT_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0" stop-color="#111418"/>
        <stop offset="1" stop-color="#1c1f26"/>
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#g)"/>
    <text x="50%" y="52%" fill="#ffffff" opacity="0.55" font-size="46" font-family="Inter, Arial" text-anchor="middle">
      Imagen no disponible
    </text>
  </svg>
`);

const memCache = new Map();

function getFallback(type) {
  return (type && FALLBACK_BY_TYPE[type]) || DEFAULT_FALLBACK;
}

function isCommonsFilePath(url) {
  return typeof url === "string" && url.includes("commons.wikimedia.org/wiki/Special:FilePath/");
}

function extractCommonsFilename(url) {
  const marker = "Special:FilePath/";
  const idx = url.indexOf(marker);
  if (idx === -1) return null;
  const rest = url.slice(idx + marker.length);
  const filename = rest.split("?")[0];
  try {
    return decodeURIComponent(filename);
  } catch {
    return filename;
  }
}

function lsKey(filename, width) {
  return `wm:thumb:${width}:${filename}`;
}

async function fetchCommonsThumbUrl(filename, width = 1600) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", `File:${filename}`);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", String(width));
  api.searchParams.set("format", "json");
  api.searchParams.set("origin", "*");

  const res = await fetch(api.toString());
  if (!res.ok) throw new Error("Wikimedia API failed");
  const data = await res.json();

  const pages = data?.query?.pages;
  const page = pages ? pages[Object.keys(pages)[0]] : null;
  const info = page?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function resolveSmartUrl(src, width = 1600) {
  if (!src) return null;

  // Si no es Wikimedia, listo
  if (!isCommonsFilePath(src)) return src;

  const filename = extractCommonsFilename(src);
  if (!filename) return src;

  const key = lsKey(filename, width);

  // mem cache
  if (memCache.has(key)) return memCache.get(key);

  // localStorage cache
  const cached = localStorage.getItem(key);
  if (cached) {
    memCache.set(key, cached);
    return cached;
  }

  // fetch API
  try {
    const thumb = await fetchCommonsThumbUrl(filename, width);
    const finalUrl = thumb || src;
    memCache.set(key, finalUrl);
    if (thumb) localStorage.setItem(key, thumb);
    return finalUrl;
  } catch {
    return src; // que caiga al onerror si falla
  }
}

/**
 * Genera un <img> con data-attrs para que hydrateSmartImages lo resuelva.
 */
export function smartImgTag({
  src,
  alt = "",
  type,
  className = "",
  width = 1600,
  loading = "lazy",
  decoding = "async",
} = {}) {
  const fallback = getFallback(type);

  // Ponemos src inicial = src si existe, si no fallback.
  // Luego hydrate lo intenta “arreglar” si es Wikimedia.
  const initial = src || fallback;

  // Ojo: no meto el fallback inline con onerror para mantener HTML limpio.
  // El onerror lo setea hydrateSmartImages.
  return `
    <img
      data-smartimg="1"
      data-src="${escapeAttr(src || "")}"
      data-type="${escapeAttr(type || "")}"
      data-width="${String(width)}"
      src="${escapeAttr(initial)}"
      alt="${escapeAttr(alt)}"
      class="${escapeAttr(className)}"
      loading="${loading}"
      decoding="${decoding}"
    />
  `;
}

function escapeAttr(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/**
 * Corre después de cada render().
 * - Setea fallback onerror
 * - Resuelve Wikimedia -> CDN thumb
 */
export function hydrateSmartImages(root = document) {
  const imgs = root.querySelectorAll('img[data-smartimg="1"]');

  imgs.forEach((img) => {
    const type = img.getAttribute("data-type") || "";
    const fallback = getFallback(type);
    const rawSrc = img.getAttribute("data-src") || "";
    const width = Number(img.getAttribute("data-width") || 1600);

    // Fallback si falla
    img.onerror = () => {
      if (img.src !== fallback) img.src = fallback;
    };

    // Si no hay src real, ya está en fallback
    if (!rawSrc) return;

    // Resolver Wikimedia async
    if (isCommonsFilePath(rawSrc)) {
      resolveSmartUrl(rawSrc, width).then((finalUrl) => {
        // Solo cambia si sigue siendo el mismo “raw src” (evita glitches entre renders)
        const stillSame = img.getAttribute("data-src") === rawSrc;
        if (!stillSame) return;
        if (finalUrl && img.src !== finalUrl) img.src = finalUrl;
      });
    }
  });
}

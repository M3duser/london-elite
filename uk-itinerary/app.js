import { TRIP_DATA } from "./data/trip.js";
import { smartImgTag, hydrateSmartImages } from "./data/smartImage.js";


/* ---------------------------
   STATE
--------------------------- */
let activeBlockIdx = 0;
let activeDayId = TRIP_DATA.blocks[0].daysOrder[0];
let goalExpanded = false; // por default compacto
let activeEventIdx = null; // para modal de detalles


let openSheet = null;
let drawerOpen = false;
let compactMode = true;

const app = document.querySelector("#app");
if (!app) throw new Error("No existe el div #app. Revisa index.html");

/* ---------------------------
   HELPERS
--------------------------- */
function getCurrentBlock() {
  return TRIP_DATA.blocks[activeBlockIdx];
}

function getCurrentDay() {
  const block = getCurrentBlock();
  return block.days[activeDayId] || block.days[block.daysOrder[0]];
}

function icon(name, cls = "w-5 h-5") {
  return `<i data-lucide="${name}" class="${cls}"></i>`;
}

function safeRenderIcons() {
  if (window.lucide) lucide.createIcons();
}

function scrollToTopSmooth() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function parseTimeToMinutes(timeStr) {
  const parts = (timeStr || "").split(":");
  const hh = Number(parts[0] || 0);
  const mm = Number(parts[1] || 0);
  return hh * 60 + mm;
}

function bucketFromTime(timeStr) {
  const m = parseTimeToMinutes(timeStr);
  if (m < 12 * 60) return "MORNING";
  if (m < 17 * 60) return "AFTERNOON";
  return "EVENING";
}

function groupEventsByBucket(events = []) {
  const groups = { MORNING: [], AFTERNOON: [], EVENING: [] };
  events.forEach((e) => {
    const b = bucketFromTime(e.time);
    groups[b].push(e);
  });
  return groups;
}

function typeBadge(type) {
  const map = {
    logística: "bg-blue-500/10 text-blue-700 border-blue-500/15",
    visita: "bg-emerald-500/10 text-emerald-700 border-emerald-500/15",
    foodie: "bg-amber-500/10 text-amber-700 border-amber-500/15",
    base: "bg-slate-900/10 text-slate-900 border-slate-900/15",
    evento: "bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/15",
    default: "bg-black/5 text-black/50 border-black/10",
  };
  return map[type] || map.default;
}

function nodeIsDark(type) {
  return type === "evento" || type === "base";
}

/* ---------------------------
   ACTIONS
--------------------------- */
function setBlock(idx) {
  activeBlockIdx = idx;
  const block = getCurrentBlock();
  activeDayId = block.daysOrder[0];
  openSheet = null;
  drawerOpen = false;
  render();
  scrollToTopSmooth();
}

function setDay(dayId) {
  activeDayId = dayId;
  activeEventIdx = null;
  openSheet = null;
  render();
  scrollToTopSmooth();
}

function prevDay() {
  const block = getCurrentBlock();
  const idx = block.daysOrder.indexOf(activeDayId);
  if (idx > 0) setDay(block.daysOrder[idx - 1]);
}

function nextDay() {
  const block = getCurrentBlock();
  const idx = block.daysOrder.indexOf(activeDayId);
  if (idx < block.daysOrder.length - 1) setDay(block.daysOrder[idx + 1]);
}

function toggleCompact() {
  compactMode = !compactMode;
  render();
}

/* ---------------------------
   UI: TOP BAR (MINIMAL)
--------------------------- */
function renderTopBar() {
  const block = getCurrentBlock();
  const day = getCurrentDay();

  return `
    <div class="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-black/5 no-swipe">
      <div class="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between gap-3">
        
        <button
          data-action="openDrawer"
          class="w-11 h-11 rounded-2xl border border-black/10 bg-white/80 shadow-soft flex items-center justify-center active:scale-95 transition-all"
          title="Menu"
        >
          ${icon("menu", "w-6 h-6 text-black/70")}
        </button>

        <div class="flex-1 min-w-0 text-center">
          <div class="text-[10px] font-black tracking-[0.28em] uppercase text-black/35">
            ${block.name} · ${day.tag}
          </div>
          <div class="text-[13px] font-extrabold text-black/85 truncate">
            ${day.title}
          </div>
        </div>

        <button
          data-action="openSheet"
          data-sheet="transporte"
          class="w-11 h-11 rounded-2xl border border-black/10 bg-white/80 shadow-soft flex items-center justify-center active:scale-95 transition-all"
          title="Guía"
        >
          ${icon("info", "w-6 h-6 text-black/70")}
        </button>
      </div>
    </div>
  `;
}

/* ---------------------------
   HEADER (NO TOPNAV PILLS)
--------------------------- */
function renderHeader() {
  const block = getCurrentBlock();

  return `
    <div class="max-w-[1100px] mx-auto px-4 pt-5 pb-2">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-9 h-[3px] rounded-full" style="background:${block.color}"></div>
        <div class="text-[10px] font-black tracking-[0.35em] text-black/35">
          STAGE ${activeBlockIdx + 1}
        </div>
      </div>

      <!-- TITLE ROW -->
      <div class="flex items-end justify-between gap-3">
        <h1 class="font-serif font-black tracking-tight uppercase leading-[0.92]
                  text-[40px] sm:text-[52px] md:text-[60px]">
          ${block.name}
        </h1>

        <!-- small badge right -->
        <div class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-black/5 shadow-soft">
          ${icon("sparkles", "w-4 h-4 text-black/45")}
          <span class="text-[10px] font-black tracking-[0.25em] uppercase text-black/35">UK 2026</span>
        </div>
      </div>

      <!-- CHIPS (COMPACT) -->
      <div class="mt-3 flex flex-wrap gap-2">
        <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/85 border border-black/5 shadow-soft">
          ${icon("calendar", "w-4 h-4 text-black/45")}
          <span class="text-[12px] font-semibold text-black/60">${block.dates}</span>
        </div>

        <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/85 border border-black/5 shadow-soft min-w-0">
          ${icon("map-pin", "w-4 h-4 text-black/45")}
          <span class="text-[12px] font-semibold text-black/60 truncate">${block.hotel}</span>
        </div>
      </div>
    </div>
  `;
}


/* ---------------------------
   DAY RAIL (STAYS)
--------------------------- */
function renderDayRail() {
  const block = getCurrentBlock();

  return `
    <div class="max-w-[1100px] mx-auto px-4 pb-1 no-swipe">
      <div class="flex gap-3 overflow-x-auto no-scrollbar py-2 scroll-smooth">
        ${block.daysOrder
          .map((id) => {
            const isActive = id === activeDayId;
            const num = id.slice(-2);
            const mon = id.slice(0, 3).toUpperCase();

            return `
              <button
                data-action="setDay"
                data-day="${id}"
                class="flex-shrink-0 transition-all ${
                  isActive ? "scale-[1.05]" : "opacity-40 hover:opacity-70"
                }"
              >
                <div class="${
                  isActive
                    ? "bg-white border-ink shadow-soft"
                    : "bg-black/[0.03] border-transparent"
                } w-14 h-14 rounded-[22px] border-2 flex flex-col items-center justify-center">
                  <div class="text-[12px] font-black">${num}</div>
                  <div class="text-[9px] font-black tracking-[0.12em] text-black/55">${mon}</div>
                </div>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

/* ---------------------------
   GOAL CARD
--------------------------- */
function renderGoalCard() {
  const day = getCurrentDay();
  const block = getCurrentBlock();

  return `
    <div class="max-w-[1100px] mx-auto px-4 mt-2">
      <div class="goal-card ${goalExpanded ? "is-expanded" : "is-collapsed"}">
        
        <div class="goal-top">
          <span class="goal-tag">
            <span class="dot" style="background:${block.color}"></span>
            ${day.tag}
          </span>

          <button class="goal-toggle" id="goalToggleBtn" aria-label="Toggle goal">
            <span>${goalExpanded ? "OCULTAR" : "VER"}</span>
            ${icon(goalExpanded ? "chevron-up" : "chevron-down", "w-4 h-4")}
          </button>
        </div>

        <div class="goal-label">OBJETIVO</div>

        <p class="goal-text ${goalExpanded ? "" : "line-clamp-2"}">
          “${day.goal}”
        </p>

      </div>
    </div>
  `;
}



/* ---------------------------
   TIMELINE
--------------------------- */
function renderSectionHeader(label) {
  return `
    <div class="flex items-center gap-3 mt-8 mb-4">
      <div class="h-[1px] flex-1 bg-black/10"></div>
      <div class="text-[10px] font-black tracking-[0.35em] uppercase text-black/35">
        ${label}
      </div>
      <div class="h-[1px] flex-1 bg-black/10"></div>
    </div>
  `;
}

function renderEventCard(e, idx) {
  const dark = nodeIsDark(e.type);

  const coverHeight = compactMode ? "h-44" : "h-56 md:h-64";
  const bodyPad = compactMode ? "p-5 md:p-6" : "p-6 md:p-7";
  const descSize = compactMode ? "text-[14px]" : "text-[15px]";

  return `
    <div class="relative flex gap-4">
      <div class="${
        dark ? "bg-ink text-white" : "bg-white text-black/45"
      } w-14 h-14 rounded-full border-4 border-cream shadow-soft flex items-center justify-center flex-shrink-0">
        ${icon(e.icon, "w-5 h-5")}
      </div>

      <div class="flex-1 pt-1">
        <div class="flex items-center gap-2 mb-3">
          <div class="px-2.5 py-1 rounded-xl bg-black/[0.04] text-[12px] font-black">
            ${e.time}
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-black tracking-[0.22em] uppercase ${typeBadge(
            e.type
          )}">
            ${e.type}
          </div>
        </div>

        <div class="rounded-[36px] overflow-hidden bg-white/90 border border-black/5 shadow-soft transition-all hover:shadow-hard hover:-translate-y-[1px]">
          <div class="relative ${coverHeight} overflow-hidden">
            ${smartImgTag({
  src: e.img,
  alt: e.title,
  type: e.type,
  className: "w-full h-full object-cover",
  width: 1600,
})}

            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-6 flex items-end">
              <h3 class="font-serif text-white text-[22px] md:text-[28px] font-black leading-none tracking-tight">
                ${e.title}
              </h3>
            </div>
          </div>

          <div class="${bodyPad}">
            <p class="${descSize} leading-relaxed font-semibold text-black/55 mb-4">
              ${e.desc}
            </p>

            <!-- ✅ BOTÓN DETALLES -->
            <button
              data-action="openEvent"
              data-event-idx="${idx}"
              class="event-details-btn"
            >
              ${icon("info", "w-4 h-4")}
              DETALLES
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}


function renderTimeline() {
  const day = getCurrentDay();
  const grouped = groupEventsByBucket(day.events);

  const sections = [
    ["MORNING", grouped.MORNING],
    ["AFTERNOON", grouped.AFTERNOON],
    ["EVENING", grouped.EVENING],
  ];

  return `
    <div class="max-w-[1100px] mx-auto px-4 mt-4">

      <div class="relative">
        <div class="absolute left-[28px] top-0 bottom-0 w-[1px] bg-black/10"></div>

        <div class="space-y-6">
          ${sections
            .map(([label, items]) => {
              if (!items.length) return "";
              return `
                ${renderSectionHeader(label)}
                <div class="space-y-7">
                 ${items
  .map((ev) => {
    const originalIdx = day.events.indexOf(ev);
    return renderEventCard(ev, originalIdx);
  })
  .join("")}

                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   DOCK (MINIMAL + NOT OBSTRUCTIVE)
--------------------------- */
function renderDayDock() {
  const block = getCurrentBlock();
  const day = getCurrentDay();
  const idx = block.daysOrder.indexOf(activeDayId);

  const prevDisabled = idx <= 0;
  const nextDisabled = idx >= block.daysOrder.length - 1;

  return `
    <div class="fixed left-0 right-0 z-[60] bottom-4 pointer-events-none">
      <div class="max-w-[560px] mx-auto px-4">
        <div class="pointer-events-auto bg-white/70 backdrop-blur-xl border border-black/5 shadow-hard rounded-[22px] px-3 py-2.5">
          <div class="flex items-center justify-between gap-3">
            <button
              data-action="prevDay"
              class="w-10 h-10 rounded-2xl border border-black/10 bg-white/90 flex items-center justify-center active:scale-95 transition-all ${
                prevDisabled ? "opacity-25 cursor-not-allowed" : ""
              }"
              ${prevDisabled ? "disabled" : ""}
            >
              ${icon("chevron-left", "w-6 h-6")}
            </button>

            <div class="flex-1 min-w-0 text-center">
              <div class="text-[9px] font-black tracking-[0.28em] uppercase text-black/35">
                Day ${idx + 1}/${block.daysOrder.length}
              </div>
              <div class="text-[13px] font-extrabold text-black/80 truncate">
                ${day.title}
              </div>
            </div>

            <button
              data-action="nextDay"
              class="w-10 h-10 rounded-2xl border border-black/10 bg-white/90 flex items-center justify-center active:scale-95 transition-all ${
                nextDisabled ? "opacity-25 cursor-not-allowed" : ""
              }"
              ${nextDisabled ? "disabled" : ""}
            >
              ${icon("chevron-right", "w-6 h-6")}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   DRAWER (MENU SANDWICH)
--------------------------- */
function renderDrawer() {
  if (!drawerOpen) return "";

  const block = getCurrentBlock();
  const day = getCurrentDay();

  return `
    <div class="fixed inset-0 z-[90]">
      <div class="absolute inset-0 bg-black/55 backdrop-blur-md" data-action="closeDrawer"></div>

      <div class="absolute top-0 left-0 h-full w-[88%] max-w-[380px] bg-white shadow-hard p-6 animate-drawer">
        <div class="flex items-center justify-between mb-6">
          <div>
            <div class="text-[10px] font-black tracking-[0.30em] uppercase text-black/30">Menu</div>
            <div class="font-serif text-[28px] font-black tracking-tight">UK 2026</div>
          </div>
          <button
            data-action="closeDrawer"
            class="w-11 h-11 rounded-2xl border border-black/10 bg-black/[0.03] flex items-center justify-center active:scale-95"
          >
            ${icon("x", "w-6 h-6")}
          </button>
        </div>

        <!-- STAGES -->
        <div class="text-[10px] font-black tracking-[0.30em] uppercase text-black/30 mb-3">
          Destinos
        </div>

        <div class="grid gap-2">
          ${TRIP_DATA.blocks
            .map((b, idx) => {
              const isActive = idx === activeBlockIdx;
              return `
                <button
                  data-action="setBlock"
                  data-idx="${idx}"
                  class="w-full text-left px-4 py-3 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-ink text-white border-ink shadow-soft"
                      : "bg-white border-black/10 hover:bg-black/[0.03]"
                  }"
                >
                  <div class="text-[10px] font-black tracking-[0.22em] uppercase opacity-90">
                    Stage ${idx + 1}
                  </div>
                  <div class="font-extrabold text-[14px] truncate">${b.name}</div>
                  <div class="text-[12px] font-semibold opacity-70 truncate">${b.dates}</div>
                </button>
              `;
            })
            .join("")}
        </div>

        <!-- QUICK ACTIONS -->
        <div class="mt-6">
          <div class="text-[10px] font-black tracking-[0.30em] uppercase text-black/30 mb-3">
            Quick actions
          </div>

          <div class="grid gap-2">
            <button
              data-action="openSheet"
              data-sheet="recomendaciones"
              class="px-4 py-3 rounded-2xl bg-black/[0.03] border border-black/10 flex items-center justify-between active:scale-[0.99]"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-white border border-black/10 flex items-center justify-center">
                  ${icon("star", "w-5 h-5 text-black/70")}
                </div>
                <div>
                  <div class="font-extrabold text-[14px]">Gemas</div>
                  <div class="text-[12px] font-semibold text-black/55">Recomendaciones top</div>
                </div>
              </div>
              ${icon("chevron-right", "w-5 h-5 text-black/35")}
            </button>

            <button
              data-action="openSheet"
              data-sheet="transporte"
              class="px-4 py-3 rounded-2xl bg-black/[0.03] border border-black/10 flex items-center justify-between active:scale-[0.99]"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-white border border-black/10 flex items-center justify-center">
                  ${icon("info", "w-5 h-5 text-black/70")}
                </div>
                <div>
                  <div class="font-extrabold text-[14px]">Guía</div>
                  <div class="text-[12px] font-semibold text-black/55">Transporte, clima, pubs</div>
                </div>
              </div>
              ${icon("chevron-right", "w-5 h-5 text-black/35")}
            </button>
          </div>
        </div>

        <!-- VIEW MODE -->
        <div class="mt-6">
          <div class="text-[10px] font-black tracking-[0.30em] uppercase text-black/30 mb-3">
            View mode
          </div>

          <div class="flex gap-2">
            <button
              data-action="toggleCompact"
              class="flex-1 px-4 py-3 rounded-2xl border border-black/10 font-black tracking-[0.22em] uppercase text-[10px] ${
                compactMode ? "bg-ink text-white" : "bg-white text-black/55"
              }"
            >
              Compact
            </button>

            <button
              data-action="toggleCompact"
              class="flex-1 px-4 py-3 rounded-2xl border border-black/10 font-black tracking-[0.22em] uppercase text-[10px] ${
                !compactMode ? "bg-ink text-white" : "bg-white text-black/55"
              }"
            >
              Full
            </button>
          </div>
        </div>

        <!-- CURRENT -->
        <div class="mt-6 rounded-3xl bg-black/[0.03] border border-black/10 p-4">
          <div class="text-[10px] font-black tracking-[0.30em] uppercase text-black/30 mb-2">
            Now
          </div>
          <div class="font-extrabold text-[14px]">${block.name}</div>
          <div class="text-[12px] font-semibold text-black/60 truncate">${day.title}</div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   SHEET (GUIDE / GEMAS)
--------------------------- */
function renderSheet() {
  if (!openSheet) return "";

  const data = TRIP_DATA.sheets[openSheet];

  return `
    <div class="fixed inset-0 z-[80] flex items-end justify-center">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-md" data-action="closeSheet"></div>

      <div class="relative w-full max-w-3xl rounded-t-[44px] bg-white p-7 pb-10 shadow-hard animate-sheet">
        <div class="w-16 h-1.5 bg-black/10 rounded-full mx-auto mb-6"></div>

        <div class="flex items-center justify-between gap-4 mb-6">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-black/[0.03] border border-black/5 flex items-center justify-center">
              ${icon(data.icon, "w-6 h-6 text-ink")}
            </div>

            <div>
              <div class="text-[10px] font-black tracking-[0.28em] uppercase text-black/30">Quick guide</div>
              <h2 class="font-serif text-[28px] font-black tracking-tight">${data.title}</h2>
            </div>
          </div>

          <button
            class="w-11 h-11 rounded-full bg-black/[0.03] border border-black/5 flex items-center justify-center active:scale-95"
            data-action="closeSheet"
          >
            ${icon("x", "w-6 h-6")}
          </button>
        </div>

        <div class="space-y-3">
          ${data.content
            .map(
              (item) => `
              <div class="rounded-[28px] bg-black/[0.03] border border-black/5 p-5 hover:bg-white transition-all">
                <div class="text-[10px] font-black tracking-[0.22em] uppercase text-black/35 mb-2">${item.title}</div>
                <div class="text-[15px] leading-relaxed font-semibold text-black/65">${item.text}</div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderEventDetailsSheet() {
  if (activeEventIdx === null) return "";

  const day = getCurrentDay();
  const e = day.events[activeEventIdx];
  if (!e) return "";

    const gallery = Array.isArray(e.gallery) && e.gallery.length
    ? e.gallery.slice(0, 3)
    : (e.img ? [e.img] : []);


  const hasDetails =
    (e.details && e.details.length) ||
    (e.options && e.options.length) ||
    (e.tips && e.tips.length) ||
    e.notes ||
    e.subTitle;

  // Si no hay nada extra, igual abrimos modal (por consistencia)
  return `
    <div class="sheet-wrap">
      <div class="sheet-overlay" data-action="closeEvent"></div>

      <div class="sheet-panel">
        <div class="sheet-handle"></div>

        <div class="sheet-header">
          <div class="sheet-icon">
            ${icon(e.icon, "w-6 h-6 text-black/80")}
          </div>

          <div class="sheet-headings">
            <div class="sheet-meta">
              <span class="sheet-time">${e.time || ""}</span>
              <span class="sheet-type">${(e.type || "").toUpperCase()}</span>
            </div>

            <h3 class="sheet-title">${e.title}</h3>
            ${
              e.subTitle
                ? `<p class="text-[12px] font-semibold text-black/50 mt-1">${e.subTitle}</p>`
                : ""
            }
          </div>

          <button class="sheet-close" data-action="closeEvent" aria-label="Cerrar">
            ${icon("x", "w-6 h-6")}
          </button>
        </div>

        <div class="sheet-body">
                 ${
  gallery.length
    ? `
      <div class="sheet-gallery no-swipe" aria-label="Galería">
        ${gallery
          .map(
            (url) => `
              <div class="sheet-slide">
                <div class="sheet-hero">
                 ${smartImgTag({
  src: url,
  alt: e.title,
  type: e.type,
  className: "w-full h-full object-cover",
  width: 1600,
})}

                </div>
              </div>
            `
          )
          .join("")}
      </div>
    `
    : ""
}



          ${
            e.desc
              ? `
              <div class="sheet-card">
                <div class="sheet-card-label">DESCRIPCIÓN</div>
                <p class="sheet-desc">${e.desc}</p>
              </div>
            `
              : ""
          }

          ${
            e.details && e.details.length
              ? `
              <div class="sheet-card">
                <div class="sheet-card-label">DETALLES</div>
                <ul class="space-y-2 text-[13px] font-semibold text-black/65 leading-relaxed">
                  ${e.details
                    .map((d) => `<li class="flex gap-2">${icon("check", "w-4 h-4 text-black/30")}<span>${d}</span></li>`)
                    .join("")}
                </ul>
              </div>
            `
              : ""
          }

          ${
            e.options && e.options.length
              ? `
              <div class="sheet-card">
                <div class="sheet-card-label">OPCIONES</div>
                <div class="space-y-2">
                  ${e.options
                    .map(
                      (op) => `
                        <div class="rounded-2xl bg-white/70 border border-black/5 p-4">
                          <div class="text-[12px] font-extrabold text-black/80">${op.title}</div>
                          <div class="text-[13px] font-semibold text-black/60 mt-1 leading-relaxed">${op.text}</div>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `
              : ""
          }

          ${
            e.tips && e.tips.length
              ? `
              <div class="sheet-card">
                <div class="sheet-card-label">TIPS</div>
                <div class="sheet-tips">
                  ${e.tips
                    .map(
                      (t) => `
                      <span class="tip-pill">
                        ${icon("sparkles", "w-4 h-4 text-black/25")}
                        ${t}
                      </span>
                    `
                    )
                    .join("")}
                </div>
              </div>
            `
              : ""
          }

          ${
            e.notes
              ? `
              <div class="sheet-card">
                <div class="sheet-card-label">NOTA</div>
                <p class="sheet-desc">${e.notes}</p>
              </div>
            `
              : ""
          }

          ${
            !hasDetails
              ? `
              <div class="sheet-card">
                <div class="sheet-card-label">INFO</div>
                <p class="sheet-desc">Este evento no tiene detalles extra todavía, pero ya está listo para que los agregues.</p>
              </div>
            `
              : ""
          }
        </div>
      </div>
    </div>
  `;
}


/* ---------------------------
   MAIN RENDER
   IMPORTANT: padding-bottom so nothing gets covered by dock
--------------------------- */
function render() {
  app.innerHTML = `
    <div class="min-h-screen bg-cream pb-[120px]">
      ${renderTopBar()}
      ${renderHeader()}
      ${renderDayRail()}

      ${renderTimeline()}

      <!-- Spacer so dock NEVER blocks content -->
      <div class="h-[110px]"></div>

      ${renderDayDock()}
      ${renderSheet()}
      ${renderDrawer()}
      ${renderEventDetailsSheet()}
    </div>
  `;

  safeRenderIcons();
  hydrateSmartImages(app);
}

/* ---------------------------
   CLICK HANDLER
--------------------------- */
app.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const action = btn.getAttribute("data-action");

  if (action === "setBlock") return setBlock(Number(btn.getAttribute("data-idx")));
  if (action === "setDay") return setDay(btn.getAttribute("data-day"));

  if (action === "prevDay") return prevDay();
  if (action === "nextDay") return nextDay();

  if (action === "toggleCompact") return toggleCompact();

  if (action === "openSheet") {
    openSheet = btn.getAttribute("data-sheet");
    drawerOpen = false;
    render();
    return;
  }

  if (action === "closeSheet") {
    openSheet = null;
    render();
    return;
  }

  if (action === "openDrawer") {
    drawerOpen = true;
    openSheet = null;
    render();
    return;
  }

  if (action === "closeDrawer") {
    drawerOpen = false;
    render();
    return;
  }

    if (action === "openEvent") {
    activeEventIdx = Number(btn.getAttribute("data-event-idx"));
    render();
    return;
  }

  if (action === "closeEvent") {
    activeEventIdx = null;
    render();
    return;
  }

});

/* ---------------------------
   SWIPE SUPPORT (iPhone)
   - avoids conflict with horizontal scroll areas
--------------------------- */
let touchStartX = 0;
let touchStartY = 0;
let touchStartTarget = null;

window.addEventListener(
  "touchstart",
  (e) => {
    const t = e.touches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
    touchStartTarget = e.target;
  },
  { passive: true }
);

window.addEventListener(
  "touchend",
  (e) => {
    if (!touchStartTarget) return;

    const noSwipe = touchStartTarget.closest?.(".no-swipe");
    if (noSwipe) return;

   // If drawer/sheet/event modal open, ignore swipes
if (drawerOpen || openSheet || activeEventIdx !== null) return;


    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;

    if (Math.abs(dx) < 70) return;
    if (Math.abs(dy) > 70) return;

    if (dx < 0) nextDay();
    if (dx > 0) prevDay();
  },
  { passive: true }
);

/* ---------------------------
   KEYBOARD SUPPORT (desktop)
--------------------------- */
window.addEventListener("keydown", (e) => {
// If drawer/sheet/event modal open, ignore swipes
if (drawerOpen || openSheet || activeEventIdx !== null) return;

  if (e.key === "ArrowLeft") prevDay();
  if (e.key === "ArrowRight") nextDay();
});

/* ---------------------------
   INIT
--------------------------- */
render();

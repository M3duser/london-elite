/* app.js — UK 2026 (Luxury Concierge / NO IMAGES)
   - Luxury visual system (color + gradients + refined surfaces)
   - Top bar: DATE ONLY (no "Día 1", no title)
   - Timeline: compact essentials only
   - Details: sheet modal
   - iPhone-friendly: no oversized cards, safe areas, smooth interactions
*/

import { TRIP_DATA } from "./data/trip.js";

/* ---------------------------
   STATE
--------------------------- */
let activeBlockIdx = 0;
let activeDayId = TRIP_DATA.blocks[0].daysOrder[0];
let activeEventIdx = null;

let openSheet = null;
let drawerOpen = false;

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

function labelSection(label) {
  if (label === "MORNING") return "Mañana";
  if (label === "AFTERNOON") return "Tarde";
  return "Noche";
}

/* DATE LABELS */
function dateFromId(dayId) {
  // expected: mar31, abr01, abr02, etc.
  const mon = (dayId || "").slice(0, 3).toLowerCase();
  const dd = (dayId || "").slice(-2);
  const map = {
    ene: "ENE",
    feb: "FEB",
    mar: "MAR",
    abr: "ABR",
    may: "MAY",
    jun: "JUN",
    jul: "JUL",
    ago: "AGO",
    sep: "SEP",
    oct: "OCT",
    nov: "NOV",
    dic: "DIC",
  };
  const mm = map[mon] || mon.toUpperCase();
  return `${dd} ${mm}`;
}

function getDayDateLabel(dayId) {
  const day = getCurrentBlock().days[dayId];
  return (day?.shortDate ? day.shortDate : dateFromId(dayId)).toUpperCase();
}

function getTopDateLabel() {
  const day = getCurrentDay();
  return (day?.shortDate ? day.shortDate : dateFromId(activeDayId)).toUpperCase();
}

/* ACCENT + JEWEL BADGES */
function accentStyle(blockColor) {
  const c = blockColor || "#0f141a";
  return `--accent:${c};`;
}

function typeBadge(type) {
  const t = (type || "").toLowerCase();

  // Jewel tones (more premium than standard tailwind blues/greens)
  const map = {
    logística:
      "bg-[rgba(18,58,111,0.16)] text-[rgba(18,58,111,0.95)] border-[rgba(18,58,111,0.26)]",
    transporte:
      "bg-[rgba(15,20,26,0.06)] text-[rgba(15,20,26,0.75)] border-[rgba(15,20,26,0.14)]",
    visita:
      "bg-[rgba(11,59,46,0.16)] text-[rgba(11,59,46,0.95)] border-[rgba(11,59,46,0.26)]",
    foodie:
      "bg-[rgba(199,164,107,0.20)] text-[rgba(110,74,18,0.95)] border-[rgba(199,164,107,0.34)]",
    evento:
      "bg-[rgba(122,31,61,0.18)] text-[rgba(122,31,61,0.97)] border-[rgba(122,31,61,0.30)]",
    base:
      "bg-[rgba(74,42,120,0.16)] text-[rgba(74,42,120,0.97)] border-[rgba(74,42,120,0.28)]",
    default:
      "bg-[rgba(15,20,26,0.06)] text-[rgba(15,20,26,0.60)] border-[rgba(15,20,26,0.12)]",
  };

  return map[t] || map.default;
}

function nodeIsDark(type) {
  const t = (type || "").toLowerCase();
  return t === "evento" || t === "base";
}

/* ---------------------------
   ACTIONS
--------------------------- */
function setBlock(idx) {
  activeBlockIdx = idx;
  const block = getCurrentBlock();
  activeDayId = block.daysOrder[0];
  activeEventIdx = null;
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

/* ---------------------------
   UI: TOP BAR (DATE ONLY)
--------------------------- */
function renderTopBar() {
  const block = getCurrentBlock();
  const dateLabel = getTopDateLabel();

  return `
    <div class="sticky top-0 z-50 no-swipe">
      <div class="lux-topbar">
        <div class="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between gap-3">

          <button
            data-action="openDrawer"
            class="lux-iconbtn press"
            title="Menu"
          >
            ${icon("menu", "w-6 h-6")}
          </button>

          <div class="flex-1 min-w-0 text-center">
            <div class="lux-date">
              ${dateLabel}
            </div>
            <div class="lux-subtitle truncate">
              ${block.name}
            </div>
          </div>

          <button
            data-action="openSheet"
            data-sheet="transporte"
            class="lux-iconbtn press"
            title="Guía"
          >
            ${icon("info", "w-6 h-6")}
          </button>

        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   HEADER (More designed / color system)
--------------------------- */
function renderHeader() {
  const block = getCurrentBlock();
  const accent = block.color || "#0f141a";

  return `
    <div class="max-w-[1100px] mx-auto px-4 pt-5 pb-2">
      <div class="lux-hero" style="${accentStyle(accent)}">
        <div class="lux-hero-top">
          <div class="lux-kicker">
            <span class="lux-kicker-bar"></span>
            Itinerario
          </div>
          <div class="lux-hero-badge">
            <span class="lux-dot"></span>
            UK 2026
          </div>
        </div>

        <div class="lux-hero-title">
          <h1 class="font-serif lux-h1">${block.name}</h1>
        </div>

        <div class="lux-hero-meta">
          <span class="lux-chip">
            ${icon("calendar", "w-4 h-4")}
            <span>${block.dates}</span>
          </span>

          ${
            block.base
              ? `<span class="lux-chip lux-chip-muted">
                  ${icon("map-pin", "w-4 h-4")}
                  <span class="truncate max-w-[250px]">${block.base}</span>
                 </span>`
              : ""
          }
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   DAY RAIL (DATE ONLY pills, more color)
--------------------------- */
function renderDayRail() {
  const block = getCurrentBlock();

  return `
    <div class="max-w-[1100px] mx-auto px-4 pb-1 no-swipe">
      <div class="flex gap-3 overflow-x-auto no-scrollbar py-2 scroll-smooth">
        ${block.daysOrder
          .map((id) => {
            const d = block.days[id];
            const isActive = id === activeDayId;
            const date = getDayDateLabel(id);
            const tag = (d?.shortTag || d?.tag || "").toUpperCase();

            return `
              <button
                data-action="setDay"
                data-day="${id}"
                class="flex-shrink-0 transition ${isActive ? "scale-[1.02]" : "opacity-65 hover:opacity-90"}"
                title="${date}"
              >
                <div class="lux-daypill ${isActive ? "is-active" : ""}" style="${accentStyle(block.color)}">
                  <div class="lux-daypill-date">${date}</div>
                  <div class="lux-daypill-tag">${tag}</div>
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
   SECTION HEADER (designed divider)
--------------------------- */
function renderSectionHeader(label) {
  return `
    <div class="lux-section">
      <div class="lux-line"></div>
      <div class="lux-section-chip">${labelSection(label)}</div>
      <div class="lux-line"></div>
    </div>
  `;
}

/* ---------------------------
   EVENT ROW (NO IMAGE, premium layout)
--------------------------- */
function renderEventCard(e, idx) {
  const block = getCurrentBlock();
  const accent = block.color || "#0f141a";
  const dark = nodeIsDark(e.type);

  const hasTips = Array.isArray(e.tips) && e.tips.length;

  return `
    <div class="lux-row" style="${accentStyle(accent)}">
      <div class="lux-row-left ${dark ? "is-dark" : ""}">
        <div class="lux-iconring">
          ${icon(e.icon, "w-5 h-5")}
        </div>
      </div>

      <div class="lux-row-card">
        <div class="lux-row-accent"></div>

        <div class="lux-row-head">
          <div class="lux-time">
            <div class="lux-time-val">${e.time || ""}</div>
            <div class="lux-time-lbl">TIME</div>
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="lux-title truncate">${e.title}</div>
                ${
                  e.desc
                    ? `<div class="lux-desc line-clamp-1">${e.desc}</div>`
                    : `<div class="lux-desc opacity-60">—</div>`
                }
              </div>

              <button
                data-action="openEvent"
                data-event-idx="${idx}"
                class="lux-details press"
              >
                DETALLES
                ${icon("chevron-right", "w-4 h-4")}
              </button>
            </div>

            <div class="mt-3 flex items-center gap-2 flex-wrap">
              <span class="lux-badge ${typeBadge(e.type)}">
                <span class="lux-badge-dot"></span>
                ${(e.type || "INFO").toUpperCase()}
              </span>

              ${
                hasTips
                  ? `
                    <div class="flex flex-wrap gap-2">
                      ${e.tips
                        .slice(0, 2)
                        .map(
                          (t) => `
                          <span class="lux-tip">
                            ${icon("sparkles", "w-4 h-4")}
                            ${t}
                          </span>
                        `
                        )
                        .join("")}
                      ${
                        e.tips.length > 2
                          ? `<span class="lux-more">+${e.tips.length - 2}</span>`
                          : ""
                      }
                    </div>
                  `
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   TIMELINE
--------------------------- */
function renderTimeline() {
  const day = getCurrentDay();
  const grouped = groupEventsByBucket(day.events);

  const sections = [
    ["MORNING", grouped.MORNING],
    ["AFTERNOON", grouped.AFTERNOON],
    ["EVENING", grouped.EVENING],
  ];

  return `
    <div class="max-w-[1100px] mx-auto px-4 mt-3">
      <div class="space-y-6">
        ${sections
          .map(([label, items]) => {
            if (!items.length) return "";
            return `
              ${renderSectionHeader(label)}
              <div class="space-y-4">
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
  `;
}

/* ---------------------------
   DAY DOCK (more premium)
--------------------------- */
function renderDayDock() {
  const block = getCurrentBlock();
  const idx = block.daysOrder.indexOf(activeDayId);

  const prevDisabled = idx <= 0;
  const nextDisabled = idx >= block.daysOrder.length - 1;

  const dateLabel = getTopDateLabel();

  return `
    <div class="fixed left-0 right-0 z-[60] bottom-4 pointer-events-none">
      <div class="max-w-[560px] mx-auto px-4">
        <div class="lux-dock pointer-events-auto">
          <button
            data-action="prevDay"
            class="lux-dockbtn press ${prevDisabled ? "opacity-30 cursor-not-allowed" : ""}"
            ${prevDisabled ? "disabled" : ""}
            title="Anterior"
          >
            ${icon("chevron-left", "w-6 h-6")}
          </button>

          <div class="flex-1 min-w-0 text-center">
            <div class="lux-dockmeta">${dateLabel} · ${idx + 1}/${block.daysOrder.length}</div>
            <div class="lux-docktitle truncate">${block.name}</div>
          </div>

          <button
            data-action="nextDay"
            class="lux-dockbtn press ${nextDisabled ? "opacity-30 cursor-not-allowed" : ""}"
            ${nextDisabled ? "disabled" : ""}
            title="Siguiente"
          >
            ${icon("chevron-right", "w-6 h-6")}
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   DRAWER (Menu premium)
--------------------------- */
function renderDrawer() {
  if (!drawerOpen) return "";

  const block = getCurrentBlock();
  const day = getCurrentDay();
  const accent = block.color || "#0f141a";

  return `
    <div class="fixed inset-0 z-[90]">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-md" data-action="closeDrawer"></div>

      <div class="lux-drawer" style="${accentStyle(accent)}">
        <div class="lux-drawer-head">
          <div>
            <div class="lux-drawer-kicker">Menu</div>
            <div class="font-serif lux-drawer-title">UK 2026</div>
          </div>
          <button data-action="closeDrawer" class="lux-iconbtn press" title="Cerrar">
            ${icon("x", "w-6 h-6")}
          </button>
        </div>

        <div class="lux-drawer-sec">Destinos</div>

        <div class="grid gap-2">
          ${TRIP_DATA.blocks
            .map((b, i) => {
              const isActive = i === activeBlockIdx;
              return `
                <button
                  data-action="setBlock"
                  data-idx="${i}"
                  class="lux-drawer-item ${isActive ? "is-active" : ""}"
                  style="${accentStyle(b.color || "#0f141a")}"
                >
                  <div class="lux-drawer-item-accent"></div>
                  <div class="lux-drawer-item-body">
                    <div class="lux-drawer-item-title truncate">${b.name}</div>
                    <div class="lux-drawer-item-sub truncate">${b.dates}</div>
                  </div>
                </button>
              `;
            })
            .join("")}
        </div>

        <div class="mt-6">
          <div class="lux-drawer-sec">Quick actions</div>

          <div class="grid gap-2">
            <button data-action="openSheet" data-sheet="recomendaciones" class="lux-qa press">
              <div class="lux-qa-left">
                <div class="lux-qa-ico">${icon("star", "w-5 h-5")}</div>
                <div>
                  <div class="lux-qa-title">Gemas</div>
                  <div class="lux-qa-sub">Recomendaciones top</div>
                </div>
              </div>
              ${icon("chevron-right", "w-5 h-5")}
            </button>

            <button data-action="openSheet" data-sheet="transporte" class="lux-qa press">
              <div class="lux-qa-left">
                <div class="lux-qa-ico">${icon("info", "w-5 h-5")}</div>
                <div>
                  <div class="lux-qa-title">Guía</div>
                  <div class="lux-qa-sub">Transporte, clima, pubs</div>
                </div>
              </div>
              ${icon("chevron-right", "w-5 h-5")}
            </button>
          </div>
        </div>

        <div class="lux-now mt-6">
          <div class="lux-now-kicker">Now</div>
          <div class="lux-now-title">${block.name}</div>
          <div class="lux-now-sub truncate">${(day?.tag || "").toUpperCase()} · ${getTopDateLabel()}</div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   SHEET (Guide / Gemas) — premium, less white
--------------------------- */
function renderSheet() {
  if (!openSheet) return "";
  const data = TRIP_DATA.sheets[openSheet];

  return `
    <div class="fixed inset-0 z-[80] flex items-end justify-center">
      <div class="absolute inset-0 bg-black/65 backdrop-blur-md" data-action="closeSheet"></div>

      <div class="lux-sheet">
        <div class="lux-sheet-handle"></div>

        <div class="lux-sheet-head">
          <div class="lux-sheet-ico">
            ${icon(data.icon, "w-6 h-6")}
          </div>

          <div class="min-w-0">
            <div class="lux-sheet-kicker">Quick guide</div>
            <h2 class="font-serif lux-sheet-title truncate">${data.title}</h2>
          </div>

          <button class="lux-iconbtn press" data-action="closeSheet" aria-label="Cerrar">
            ${icon("x", "w-6 h-6")}
          </button>
        </div>

        <div class="lux-sheet-body">
          ${data.content
            .map(
              (item) => `
              <div class="lux-sheet-card">
                <div class="lux-sheet-card-kicker">${item.title}</div>
                <div class="lux-sheet-card-text">${item.text}</div>
              </div>
            `
            )
            .join("")}
        </div>

        <div style="height: calc(14px + env(safe-area-inset-bottom));"></div>
      </div>
    </div>
  `;
}

/* ---------------------------
   EVENT DETAILS SHEET (NO IMAGES)
--------------------------- */
function renderEventDetailsSheet() {
  if (activeEventIdx === null) return "";

  const day = getCurrentDay();
  const block = getCurrentBlock();
  const e = day.events[activeEventIdx];
  if (!e) return "";

  const accent = block.color || "#0f141a";

  const hasDetails =
    (e.details && e.details.length) ||
    (e.options && e.options.length) ||
    (e.tips && e.tips.length) ||
    e.notes ||
    e.subTitle;

  return `
    <div class="fixed inset-0 z-[95] flex items-end justify-center">
      <div class="absolute inset-0 bg-black/70 backdrop-blur-md" data-action="closeEvent"></div>

      <div class="lux-sheet" style="${accentStyle(accent)}">
        <div class="lux-sheet-handle"></div>

        <div class="lux-eventhead">
          <div class="lux-eventhead-accent"></div>

          <div class="flex items-start gap-3">
            <div class="lux-sheet-ico">
              ${icon(e.icon, "w-6 h-6")}
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                ${e.time ? `<span class="lux-pill">${e.time}</span>` : ""}
                <span class="lux-badge ${typeBadge(e.type)}">
                  <span class="lux-badge-dot"></span>
                  ${(e.type || "INFO").toUpperCase()}
                </span>
              </div>

              <h3 class="font-serif lux-eventtitle">${e.title}</h3>
              ${e.subTitle ? `<p class="lux-eventsub">${e.subTitle}</p>` : ""}
            </div>

            <button class="lux-iconbtn press" data-action="closeEvent" aria-label="Cerrar">
              ${icon("x", "w-6 h-6")}
            </button>
          </div>
        </div>

        <div class="lux-sheet-body">
          ${
            e.desc
              ? `
              <div class="lux-sheet-card">
                <div class="lux-sheet-card-kicker">DESCRIPCIÓN</div>
                <div class="lux-sheet-card-text">${e.desc}</div>
              </div>
            `
              : ""
          }

          ${
            e.details && e.details.length
              ? `
              <div class="lux-sheet-card">
                <div class="lux-sheet-card-kicker">DETALLES</div>
                <ul class="lux-list">
                  ${e.details
                    .map(
                      (d) => `<li class="lux-li">${icon("check", "w-4 h-4")}<span>${d}</span></li>`
                    )
                    .join("")}
                </ul>
              </div>
            `
              : ""
          }

          ${
            e.options && e.options.length
              ? `
              <div class="lux-sheet-card">
                <div class="lux-sheet-card-kicker">OPCIONES</div>
                <div class="space-y-2">
                  ${e.options
                    .map(
                      (op) => `
                      <div class="lux-option">
                        <div class="lux-option-title">${op.title}</div>
                        <div class="lux-option-text">${op.text}</div>
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
              <div class="lux-sheet-card">
                <div class="lux-sheet-card-kicker">TIPS</div>
                <div class="flex flex-wrap gap-2">
                  ${e.tips
                    .map(
                      (t) => `
                      <span class="lux-tip">
                        ${icon("sparkles", "w-4 h-4")}
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
              <div class="lux-sheet-card">
                <div class="lux-sheet-card-kicker">NOTA</div>
                <div class="lux-sheet-card-text">${e.notes}</div>
              </div>
            `
              : ""
          }

          ${
            !hasDetails
              ? `
              <div class="lux-sheet-card">
                <div class="lux-sheet-card-kicker">INFO</div>
                <div class="lux-sheet-card-text">Este evento no tiene detalles extra todavía, pero ya está listo para que los agregues.</div>
              </div>
            `
              : ""
          }

          <div style="height: calc(14px + env(safe-area-inset-bottom));"></div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   MAIN RENDER
--------------------------- */
function render() {
  const block = getCurrentBlock();

  app.innerHTML = `
    <div class="min-h-screen lux-bg pb-[120px]" style="${accentStyle(block.color)}">
      ${renderTopBar()}
      ${renderHeader()}
      ${renderDayRail()}
      ${renderTimeline()}

      <div class="h-[110px]"></div>

      ${renderDayDock()}
      ${renderSheet()}
      ${renderDrawer()}
      ${renderEventDetailsSheet()}
    </div>
  `;

  safeRenderIcons();
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
  if (drawerOpen || openSheet || activeEventIdx !== null) return;
  if (e.key === "ArrowLeft") prevDay();
  if (e.key === "ArrowRight") nextDay();
});

/* ---------------------------
   INIT
--------------------------- */
render();

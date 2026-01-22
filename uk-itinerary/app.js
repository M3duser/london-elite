/* app.js — UK 2026 (Editorial Luxury / NO IMAGES)
   - No timeline left
   - Stronger editorial hierarchy
   - More color (accent-driven), no blotchy gradients
   - Details button: right on md+, bottom on mobile
   - Sheets always light + NOT sticky headers
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

function icon(name, cls = "lux-ico") {
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

  events.forEach((e, idx) => {
    const b = bucketFromTime(e.time);
    groups[b].push({ ...e, __idx: idx });
  });

  Object.values(groups).forEach((arr) =>
    arr.sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time))
  );

  return groups;
}

function labelSection(label) {
  if (label === "MORNING") return "Mañana";
  if (label === "AFTERNOON") return "Tarde";
  return "Noche";
}

/* DATE LABELS */
function dateFromId(dayId) {
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

/* Accent utilities */
function hexToRgb(hex) {
  let h = (hex || "").replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  if (Number.isNaN(n) || h.length !== 6) return { r: 11, g: 17, b: 24 };
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function accentStyle(blockColor) {
  const c = blockColor || "#0b1118";
  const { r, g, b } = hexToRgb(c);
  return `
    --accent:${c};
    --accent-rgb:${r},${g},${b};
    --accent-soft: rgba(${r},${g},${b},0.06);
    --accent-soft2: rgba(${r},${g},${b},0.10);
    --accent-line: rgba(${r},${g},${b},0.18);
  `;
}

function typeBadge(type) {
  const t = (type || "").toLowerCase();
  const map = {
    "logística": "lux-badge lux-badge-blue",
    "transporte": "lux-badge lux-badge-ink",
    "visita": "lux-badge lux-badge-green",
    "foodie": "lux-badge lux-badge-gold",
    "evento": "lux-badge lux-badge-wine",
    "base": "lux-badge lux-badge-violet",
    "default": "lux-badge lux-badge-neutral",
  };
  return map[t] || map.default;
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
   TOP BAR (DATE ONLY vibe)
--------------------------- */
function renderTopBar() {
  const block = getCurrentBlock();
  const dateLabel = getTopDateLabel();

  return `
    <div class="lux-topbar-wrap no-swipe">
      <div class="lux-topbar">
        <div class="lux-wrap lux-topbar-inner">

          <button data-action="openDrawer" class="lux-iconbtn press" title="Menu">
            ${icon("menu")}
          </button>

          <div class="lux-topbar-center">
            <div class="lux-date">${dateLabel}</div>
            <div class="lux-subtitle">${block.name}</div>
          </div>

          <button data-action="openSheet" data-sheet="transporte" class="lux-iconbtn press" title="Guía">
            ${icon("info")}
          </button>

        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   HERO HEADER (Editorial)
--------------------------- */
function renderHeader() {
  const block = getCurrentBlock();
  const accent = block.color || "#0b1118";

  return `
    <div class="lux-wrap lux-space-top">
      <div class="lux-hero" style="${accentStyle(accent)}">
        <div class="lux-hero-bar"></div>

        <div class="lux-hero-grid">
          <div class="lux-hero-left">
            <div class="lux-kicker">
              <span class="lux-kicker-mark"></span>
              Itinerario
            </div>

            <h1 class="lux-h1 font-serif">${block.name}</h1>

            <div class="lux-hero-mini">
              <span class="lux-mini-pill">
                ${icon("sparkles", "lux-ico-sm")}
                UK 2026
              </span>
              <span class="lux-mini-pill lux-mini-pill-soft">
                ${icon("calendar", "lux-ico-sm")}
                ${block.dates}
              </span>
            </div>
          </div>

          <div class="lux-hero-right">
            <div class="lux-metaCard">
              <div class="lux-metaRow">
                <div class="lux-metaKey">Base</div>
                <div class="lux-metaVal">${block.base ? block.base : "—"}</div>
              </div>

              <div class="lux-metaRow">
                <div class="lux-metaKey">Hotel</div>
                <div class="lux-metaVal">${block.hotel ? block.hotel : "—"}</div>
              </div>

              <div class="lux-metaRow">
                <div class="lux-metaKey">Mood</div>
                <div class="lux-metaVal">Concierge · Fácil · Sin estrés</div>
              </div>
            </div>

            <div class="lux-hero-note">
              <div class="lux-hero-noteLine"></div>
              <div class="lux-hero-noteText">
                Diseño editorial para navegar rápido: días arriba, agenda abajo, detalles en un tap.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   DAY RAIL (Compact + Strong Active State)
--------------------------- */
function renderDayRail() {
  const block = getCurrentBlock();

  return `
    <div class="lux-wrap lux-rail no-swipe">
      <div class="lux-dayrail no-scrollbar">
        ${block.daysOrder
          .map((id) => {
            const d = block.days[id];
            const isActive = id === activeDayId;
            const date = getDayDateLabel(id);
            const tag = (d?.shortTag || d?.tag || "").toUpperCase();

            return `
              <button data-action="setDay" data-day="${id}" class="lux-daybtn press" aria-label="${date}">
                <div class="lux-daypill ${isActive ? "is-active" : ""}" style="${accentStyle(block.color)}">
                  <div class="lux-daypill-date">${date}</div>
                  <div class="lux-daypill-tag">${tag || "DÍA"}</div>
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
   DAY INTRO (Small, Not Heavy)
--------------------------- */
function renderDayIntro() {
  const block = getCurrentBlock();
  const day = getCurrentDay();

  const tag = (day?.tag || day?.shortTag || "").toUpperCase();
  const title = day?.title || "";
  const goal = day?.goal || "";

  return `
    <div class="lux-wrap">
      <div class="lux-dayintro" style="${accentStyle(block.color)}">
        <div class="lux-dayintro-top">
          <div class="lux-dayintro-tag">${tag || "HOY"}</div>
          <div class="lux-dayintro-date">${getTopDateLabel()}</div>
        </div>

        ${title ? `<div class="lux-dayintro-title line-clamp-2">${title}</div>` : ""}

        ${
          goal
            ? `<div class="lux-dayintro-goal line-clamp-2">${goal}</div>`
            : `<div class="lux-dayintro-goal lux-dim">Agenda lista. Agrega tus notas cuando quieras.</div>`
        }
      </div>
    </div>
  `;
}

/* ---------------------------
   SECTION HEADER
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
   EVENT CARD (NO LEFT TIMELINE)
--------------------------- */
function renderEventCard(e) {
  const block = getCurrentBlock();
  const hasTips = Array.isArray(e.tips) && e.tips.length;

  return `
    <article class="lux-ecard" style="${accentStyle(block.color)}">
      <div class="lux-ecard-stripe"></div>

      <div class="lux-ecard-top">
        <div class="lux-ecard-topLeft">
          <div class="lux-icobox">
            ${icon(e.icon || "sparkles")}
          </div>

          ${e.time ? `<span class="lux-timepill">${e.time}</span>` : ""}
          <span class="${typeBadge(e.type)}">
            <span class="lux-badge-dot"></span>
            ${(e.type || "INFO").toUpperCase()}
          </span>
        </div>

        <!-- Desktop/iPad: details on the right -->
        <button
          data-action="openEvent"
          data-event-idx="${e.__idx}"
          class="lux-details press lux-only-desktop"
        >
          DETALLES
          ${icon("chevron-right", "lux-ico-sm")}
        </button>
      </div>

      <div class="lux-ecard-body">
        <div class="lux-title">${e.title || "Evento"}</div>
        <div class="lux-desc ${e.desc ? "" : "lux-dim"} line-clamp-2">
          ${e.desc ? e.desc : "—"}
        </div>

        ${
          hasTips
            ? `
              <div class="lux-tips">
                ${e.tips
                  .slice(0, 3)
                  .map(
                    (t) => `
                      <span class="lux-tip">
                        ${icon("sparkles", "lux-ico-sm")}
                        ${t}
                      </span>
                    `
                  )
                  .join("")}
                ${e.tips.length > 3 ? `<span class="lux-more">+${e.tips.length - 3}</span>` : ""}
              </div>
            `
            : ""
        }

        <!-- Mobile: details full width below -->
        <button
          data-action="openEvent"
          data-event-idx="${e.__idx}"
          class="lux-details-mobile press lux-only-mobile"
        >
          VER DETALLES
          ${icon("chevron-right", "lux-ico-sm")}
        </button>
      </div>
    </article>
  `;
}

/* ---------------------------
   AGENDA (Grouped)
--------------------------- */
function renderTimeline() {
  const day = getCurrentDay();
  const grouped = groupEventsByBucket(day.events || []);

  const sections = [
    ["MORNING", grouped.MORNING],
    ["AFTERNOON", grouped.AFTERNOON],
    ["EVENING", grouped.EVENING],
  ];

  return `
    <div class="lux-wrap lux-agenda">
      ${sections
        .map(([label, items]) => {
          if (!items.length) return "";
          return `
            ${renderSectionHeader(label)}
            <div class="lux-ecardGrid">
              ${items.map((ev) => renderEventCard(ev)).join("")}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

/* ---------------------------
   DAY DOCK (Clean)
--------------------------- */
function renderDayDock() {
  const block = getCurrentBlock();
  const idx = block.daysOrder.indexOf(activeDayId);

  const prevDisabled = idx <= 0;
  const nextDisabled = idx >= block.daysOrder.length - 1;

  const dateLabel = getTopDateLabel();

  return `
    <div class="lux-dock-wrap">
      <div class="lux-wrap">
        <div class="lux-dock">
          <button
            data-action="prevDay"
            class="lux-dockbtn press ${prevDisabled ? "is-disabled" : ""}"
            ${prevDisabled ? "disabled" : ""}
            aria-label="Día anterior"
          >
            ${icon("chevron-left")}
          </button>

          <div class="lux-dockcenter">
            <div class="lux-dockmeta">${dateLabel} · ${idx + 1}/${block.daysOrder.length}</div>
            <div class="lux-docktitle">${block.name}</div>
          </div>

          <button
            data-action="nextDay"
            class="lux-dockbtn press ${nextDisabled ? "is-disabled" : ""}"
            ${nextDisabled ? "disabled" : ""}
            aria-label="Día siguiente"
          >
            ${icon("chevron-right")}
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   DRAWER (Light, Premium)
--------------------------- */
function renderDrawer() {
  if (!drawerOpen) return "";

  const block = getCurrentBlock();
  const day = getCurrentDay();

  return `
    <div class="lux-overlay">
      <div class="lux-backdrop" data-action="closeDrawer"></div>

      <div class="lux-drawer" style="${accentStyle(block.color)}">
        <div class="lux-drawer-head">
          <div>
            <div class="lux-drawer-kicker">Menu</div>
            <div class="font-serif lux-drawer-title">UK 2026</div>
          </div>

          <button data-action="closeDrawer" class="lux-iconbtn press" title="Cerrar">
            ${icon("x")}
          </button>
        </div>

        <div class="lux-drawer-sec">Destinos</div>

        <div class="lux-drawer-list">
          ${TRIP_DATA.blocks
            .map((b, i) => {
              const isActive = i === activeBlockIdx;
              return `
                <button
                  data-action="setBlock"
                  data-idx="${i}"
                  class="lux-drawer-item ${isActive ? "is-active" : ""}"
                  style="${accentStyle(b.color)}"
                >
                  <div class="lux-drawer-itemBar"></div>
                  <div class="lux-drawer-itemBody">
                    <div class="lux-drawer-itemTitle">${b.name}</div>
                    <div class="lux-drawer-itemSub">${b.dates}</div>
                  </div>
                </button>
              `;
            })
            .join("")}
        </div>

        <div class="lux-drawer-sec lux-mt-lg">Quick actions</div>

        <div class="lux-qa-list">
          <button data-action="openSheet" data-sheet="recomendaciones" class="lux-qa press">
            <div class="lux-qa-left">
              <div class="lux-qa-ico">${icon("star")}</div>
              <div>
                <div class="lux-qa-title">Gemas</div>
                <div class="lux-qa-sub">Recomendaciones top</div>
              </div>
            </div>
            ${icon("chevron-right", "lux-ico-sm")}
          </button>

          <button data-action="openSheet" data-sheet="transporte" class="lux-qa press">
            <div class="lux-qa-left">
              <div class="lux-qa-ico">${icon("info")}</div>
              <div>
                <div class="lux-qa-title">Guía</div>
                <div class="lux-qa-sub">Transporte, clima, pubs</div>
              </div>
            </div>
            ${icon("chevron-right", "lux-ico-sm")}
          </button>
        </div>

        <div class="lux-now lux-mt-lg">
          <div class="lux-now-kicker">Now</div>
          <div class="lux-now-title">${block.name}</div>
          <div class="lux-now-sub">${(day?.tag || "").toUpperCase()} · ${getTopDateLabel()}</div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------
   SHEET (Guide / Gemas) — ALWAYS LIGHT (NO STICKY HEADER)
--------------------------- */
function renderSheet() {
  if (!openSheet) return "";
  const data = TRIP_DATA.sheets[openSheet];
  const block = getCurrentBlock();

  return `
    <div class="lux-overlay lux-sheetOverlay">
      <div class="lux-backdrop" data-action="closeSheet"></div>

      <div class="lux-sheet" style="${accentStyle(block.color)}">
        <div class="lux-sheet-handle"></div>

        <div class="lux-sheet-head">
          <div class="lux-sheet-ico">${icon(data.icon)}</div>

          <div class="lux-sheet-headText">
            <div class="lux-sheet-kicker">Quick guide</div>
            <h2 class="font-serif lux-sheet-title">${data.title}</h2>
          </div>

          <button class="lux-iconbtn press" data-action="closeSheet" aria-label="Cerrar">
            ${icon("x")}
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

        <div class="lux-safeBottom"></div>
      </div>
    </div>
  `;
}

/* ---------------------------
   EVENT DETAILS SHEET — ALWAYS LIGHT + NO STICKY HEADER
--------------------------- */
function renderEventDetailsSheet() {
  if (activeEventIdx === null) return "";

  const day = getCurrentDay();
  const block = getCurrentBlock();
  const e = day.events[activeEventIdx];
  if (!e) return "";

  const hasDetails =
    (e.details && e.details.length) ||
    (e.options && e.options.length) ||
    (e.tips && e.tips.length) ||
    e.notes ||
    e.subTitle ||
    e.desc;

  return `
    <div class="lux-overlay lux-sheetOverlay">
      <div class="lux-backdrop" data-action="closeEvent"></div>

      <div class="lux-sheet" style="${accentStyle(block.color)}">
        <div class="lux-sheet-handle"></div>

        <div class="lux-eventhead">
          <div class="lux-eventhead-bar"></div>

          <div class="lux-eventhead-row">
            <div class="lux-sheet-ico">${icon(e.icon || "sparkles")}</div>

            <div class="lux-eventhead-text">
              <div class="lux-eventhead-meta">
                ${e.time ? `<span class="lux-pill">${e.time}</span>` : ""}
                <span class="${typeBadge(e.type)}">
                  <span class="lux-badge-dot"></span>
                  ${(e.type || "INFO").toUpperCase()}
                </span>
              </div>

              <h3 class="font-serif lux-eventtitle">${e.title}</h3>
              ${e.subTitle ? `<p class="lux-eventsub">${e.subTitle}</p>` : ""}
            </div>

            <button class="lux-iconbtn press" data-action="closeEvent" aria-label="Cerrar">
              ${icon("x")}
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
                        (d) =>
                          `<li class="lux-li">${icon("check", "lux-ico-sm")}<span>${d}</span></li>`
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
                  <div class="lux-optionList">
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
                  <div class="lux-tips">
                    ${e.tips
                      .map(
                        (t) => `
                          <span class="lux-tip">
                            ${icon("sparkles", "lux-ico-sm")}
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
                  <div class="lux-sheet-card-text">
                    Este evento no tiene detalles extra todavía, pero ya está listo para que los agregues.
                  </div>
                </div>
              `
              : ""
          }

          <div class="lux-safeBottom"></div>
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
    <div class="lux-app" style="${accentStyle(block.color)}">
      ${renderTopBar()}
      ${renderHeader()}
      ${renderDayRail()}
      ${renderDayIntro()}
      ${renderTimeline()}

      <div class="lux-spacer"></div>

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

/* app.js — UK 2026 (Editorial Redesign v2)
   Goals:
   - More elegant, less “whiteout”, smaller type scale
   - Sidebar drawer (slide-in) instead of centered lightbox card
   - Sheets: ALWAYS LIGHT + NO sticky headers
   - Keep iPhone-first, but looks good on iPad/desktop
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

function icon(name, cls = "i-20") {
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

function accentStyle(blockColor) {
  const c = blockColor || "#111418";
  return `--accent:${c};`;
}

/* Robust: picks an existing sheet key */
function pickSheetKey(preferredKeys = []) {
  const keys = Object.keys(TRIP_DATA.sheets || {});
  if (!keys.length) return null;
  for (const k of preferredKeys) {
    if (TRIP_DATA.sheets[k]) return k;
  }
  return keys[0];
}

function typeClass(type) {
  const t = (type || "").toLowerCase();
  const map = {
    logística: "t-logistica",
    transporte: "t-transporte",
    visita: "t-visita",
    foodie: "t-foodie",
    evento: "t-evento",
    base: "t-base",
  };
  return map[t] || "t-default";
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
  drawerOpen = false;
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
   TOP BAR
--------------------------- */
function renderTopBar() {
  const block = getCurrentBlock();
  const dateLabel = getTopDateLabel();
  const guideKey = pickSheetKey(["transporte", "guia", "info"]);

  return `
    <div class="topbar no-swipe" style="${accentStyle(block.color)}">
      <div class="wrap topbar__inner">
        <button data-action="openDrawer" class="iconbtn press" aria-label="Abrir menú">
          ${icon("menu")}
        </button>

        <div class="topbar__center">
          <div class="topbar__date">${dateLabel}</div>
          <div class="topbar__block">${block.name}</div>
        </div>

        <button data-action="openSheet" data-sheet="${guideKey}" class="iconbtn press" aria-label="Abrir guía">
          ${icon("info")}
        </button>
      </div>
    </div>
  `;
}

/* ---------------------------
   BANNER (smaller, more elegant)
--------------------------- */
function renderBanner() {
  const block = getCurrentBlock();
  const day = getCurrentDay();

  const tag = (day?.tag || day?.shortTag || "").toUpperCase();
  const dateRange = block.dates ? block.dates.toUpperCase() : "";

  return `
    <header class="wrap banner" style="${accentStyle(block.color)}">
      <div class="banner__meta">
        <span class="banner__dot"></span>
        <span class="banner__kicker">UK 2026</span>
        ${dateRange ? `<span class="banner__sep"></span><span class="banner__range">${dateRange}</span>` : ""}
      </div>

      <h1 class="banner__title">${block.name}</h1>

      <div class="banner__sub">
        ${tag ? `<span class="banner__pill">${tag}</span>` : ""}
        <span class="banner__line"></span>
      </div>
    </header>
  `;
}

/* ---------------------------
   DAY NAV
--------------------------- */
function renderDayNav() {
  const block = getCurrentBlock();

  return `
    <div class="wrap daynav no-swipe" style="${accentStyle(block.color)}">
      <div class="daynav__rail no-scrollbar">
        ${block.daysOrder
          .map((id) => {
            const d = block.days[id];
            const isActive = id === activeDayId;
            const date = getDayDateLabel(id);
            const tag = (d?.shortTag || d?.tag || "").toUpperCase();

            return `
              <button data-action="setDay" data-day="${id}" class="daynav__item ${isActive ? "is-active" : ""}">
                <div class="daynav__date">${date}</div>
                <div class="daynav__tag">${tag}</div>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

/* ---------------------------
   SECTION LABEL
--------------------------- */
function renderSectionLabel(label) {
  return `
    <div class="wrap section">
      <div class="section__line"></div>
      <div class="section__chip">${labelSection(label)}</div>
      <div class="section__line"></div>
    </div>
  `;
}

/* ---------------------------
   EVENT LIST ITEM
--------------------------- */
function renderEventItem(e, idx) {
  const hasTips = Array.isArray(e.tips) && e.tips.length;

  return `
    <article class="wrap event press" data-action="openEvent" data-event-idx="${idx}">
      <div class="event__row">
        <div class="event__time">
          <div class="event__timeVal">${e.time || ""}</div>
          <div class="event__timeLbl">TIME</div>
        </div>

        <div class="event__main">
          <div class="event__head">
            <div class="event__icon">${icon(e.icon, "i-18")}</div>
            <h3 class="event__title">${e.title}</h3>
          </div>

          <div class="event__meta">
            <span class="badge ${typeClass(e.type)}">
              <span class="badge__dot"></span>
              ${(e.type || "INFO").toUpperCase()}
            </span>

            ${e.desc ? `<p class="event__desc">${e.desc}</p>` : ""}
          </div>

          ${
            hasTips
              ? `
                <div class="event__chips">
                  ${e.tips
                    .slice(0, 2)
                    .map((t) => `<span class="chip">${icon("sparkles", "i-16")}<span>${t}</span></span>`)
                    .join("")}
                  ${
                    e.tips.length > 2
                      ? `<span class="chip chip--muted">+${e.tips.length - 2}</span>`
                      : ""
                  }
                </div>
              `
              : ""
          }
        </div>

        <div class="event__chev" aria-hidden="true">
          ${icon("chevron-right")}
        </div>
      </div>
      <div class="event__divider"></div>
    </article>
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
    <main class="timeline" style="${accentStyle(getCurrentBlock().color)}">
      ${sections
        .map(([label, items]) => {
          if (!items.length) return "";
          return `
            ${renderSectionLabel(label)}
            ${items.map((ev) => renderEventItem(ev, day.events.indexOf(ev))).join("")}
          `;
        })
        .join("")}
      <div class="spacer"></div>
    </main>
  `;
}

/* ---------------------------
   DAY DOCK
--------------------------- */
function renderDayDock() {
  const block = getCurrentBlock();
  const idx = block.daysOrder.indexOf(activeDayId);

  const prevDisabled = idx <= 0;
  const nextDisabled = idx >= block.daysOrder.length - 1;

  const dateLabel = getTopDateLabel();

  return `
    <div class="dock" style="${accentStyle(block.color)}">
      <div class="dock__inner">
        <button
          data-action="prevDay"
          class="dockbtn press ${prevDisabled ? "is-disabled" : ""}"
          ${prevDisabled ? "disabled" : ""}
          aria-label="Día anterior"
        >
          ${icon("chevron-left")}
        </button>

        <div class="dock__center">
          <div class="dock__meta">${dateLabel} · ${idx + 1}/${block.daysOrder.length}</div>
          <div class="dock__title">${block.name}</div>
        </div>

        <button
          data-action="nextDay"
          class="dockbtn press ${nextDisabled ? "is-disabled" : ""}"
          ${nextDisabled ? "disabled" : ""}
          aria-label="Siguiente día"
        >
          ${icon("chevron-right")}
        </button>
      </div>
    </div>
  `;
}

/* ---------------------------
   SIDEBAR DRAWER (slide-in)
--------------------------- */
function renderDrawer() {
  if (!drawerOpen) return "";

  const block = getCurrentBlock();
  const day = getCurrentDay();
  const sheetKeys = Object.keys(TRIP_DATA.sheets || {}).slice(0, 6);

  return `
    <div class="overlay overlay--drawer" style="${accentStyle(block.color)}">
      <div class="overlay__bg" data-action="closeDrawer"></div>

      <aside class="sidebar" role="dialog" aria-modal="true" aria-label="Menú">
        <div class="sidebar__top">
          <div class="sidebar__meta">
            <div class="sidebar__kicker">UK 2026</div>
            <div class="sidebar__title">Menú</div>
          </div>
          <button data-action="closeDrawer" class="iconbtn press" aria-label="Cerrar menú">
            ${icon("x")}
          </button>
        </div>

        <div class="sidebar__sec">Destinos</div>

        <div class="sideList">
          ${TRIP_DATA.blocks
            .map((b, i) => {
              const isActive = i === activeBlockIdx;
              return `
                <button
                  class="sideItem ${isActive ? "is-active" : ""}"
                  data-action="setBlock"
                  data-idx="${i}"
                  style="${accentStyle(b.color)}"
                >
                  <span class="sideItem__dot"></span>
                  <span class="sideItem__body">
                    <span class="sideItem__name">${b.name}</span>
                    <span class="sideItem__dates">${b.dates}</span>
                  </span>
                  <span class="sideItem__right">
                    ${isActive ? `<span class="sideItem__state">ACTIVO</span>` : icon("chevron-right")}
                  </span>
                </button>
              `;
            })
            .join("")}
        </div>

        ${
          sheetKeys.length
            ? `
              <div class="sidebar__sec">Guías</div>
              <div class="sideActions">
                ${sheetKeys
                  .map((k) => {
                    const s = TRIP_DATA.sheets[k];
                    return `
                      <button class="sideAction press" data-action="openSheet" data-sheet="${k}">
                        <span class="sideAction__ico">${icon(s.icon, "i-18")}</span>
                        <span class="sideAction__txt">${s.title}</span>
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            `
            : ""
        }

        <div class="sideNow">
          <div class="sideNow__k">Ahora</div>
          <div class="sideNow__title">${block.name}</div>
          <div class="sideNow__sub">${(day?.tag || "").toUpperCase()} · ${getTopDateLabel()}</div>
        </div>
      </aside>
    </div>
  `;
}

/* ---------------------------
   SHEET (Guide / Gemas) — LIGHT, NO sticky head
--------------------------- */
function renderSheet() {
  if (!openSheet) return "";
  const data = TRIP_DATA.sheets[openSheet];
  const block = getCurrentBlock();
  if (!data) return "";

  return `
    <div class="overlay overlay--sheet" style="${accentStyle(block.color)}">
      <div class="overlay__bg" data-action="closeSheet"></div>

      <section class="sheet">
        <div class="sheet__handle"></div>

        <div class="sheet__head">
          <div class="sheet__ico">${icon(data.icon)}</div>
          <div class="sheet__titles">
            <div class="sheet__kicker">Notas</div>
            <h2 class="sheet__title">${data.title}</h2>
          </div>
          <button class="iconbtn press" data-action="closeSheet" aria-label="Cerrar">
            ${icon("x")}
          </button>
        </div>

        <div class="sheet__body">
          ${data.content
            .map(
              (item) => `
              <div class="sheetBlock">
                <div class="sheetBlock__k">${item.title}</div>
                <div class="sheetBlock__t">${item.text}</div>
              </div>
            `
            )
            .join("")}
        </div>

        <div class="sheet__pad"></div>
      </section>
    </div>
  `;
}

/* ---------------------------
   EVENT DETAILS SHEET — LIGHT, NO sticky head
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
    <div class="overlay overlay--sheet" style="${accentStyle(block.color)}">
      <div class="overlay__bg" data-action="closeEvent"></div>

      <section class="sheet sheet--event">
        <div class="sheet__handle"></div>

        <div class="eventSheetHead">
          <div class="eventSheetHead__row">
            <div class="eventSheetHead__time">${e.time || ""}</div>
            <span class="badge ${typeClass(e.type)}">
              <span class="badge__dot"></span>
              ${(e.type || "INFO").toUpperCase()}
            </span>
          </div>

          <div class="eventSheetHead__titleRow">
            <div class="eventSheetHead__ico">${icon(e.icon)}</div>
            <div class="eventSheetHead__titles">
              <h3 class="eventSheetHead__title">${e.title}</h3>
              ${e.subTitle ? `<div class="eventSheetHead__sub">${e.subTitle}</div>` : ""}
            </div>

            <button class="iconbtn press" data-action="closeEvent" aria-label="Cerrar">
              ${icon("x")}
            </button>
          </div>
        </div>

        <div class="sheet__body">
          ${
            e.desc
              ? `
              <div class="sheetBlock">
                <div class="sheetBlock__k">Descripción</div>
                <div class="sheetBlock__t">${e.desc}</div>
              </div>
            `
              : ""
          }

          ${
            e.details && e.details.length
              ? `
              <div class="sheetBlock">
                <div class="sheetBlock__k">Detalles</div>
                <ul class="list">
                  ${e.details
                    .map((d) => `<li class="li">${icon("check", "i-16")}<span>${d}</span></li>`)
                    .join("")}
                </ul>
              </div>
            `
              : ""
          }

          ${
            e.options && e.options.length
              ? `
              <div class="sheetBlock">
                <div class="sheetBlock__k">Opciones</div>
                <div class="optGrid">
                  ${e.options
                    .map(
                      (op) => `
                      <div class="opt">
                        <div class="opt__t">${op.title}</div>
                        <div class="opt__d">${op.text}</div>
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
              <div class="sheetBlock">
                <div class="sheetBlock__k">Tips</div>
                <div class="chipRow">
                  ${e.tips
                    .map((t) => `<span class="chip">${icon("sparkles", "i-16")}<span>${t}</span></span>`)
                    .join("")}
                </div>
              </div>
            `
              : ""
          }

          ${
            e.notes
              ? `
              <div class="sheetBlock">
                <div class="sheetBlock__k">Nota</div>
                <div class="sheetBlock__t">${e.notes}</div>
              </div>
            `
              : ""
          }

          ${
            !hasDetails
              ? `
              <div class="sheetBlock">
                <div class="sheetBlock__k">Info</div>
                <div class="sheetBlock__t">
                  Este evento no tiene detalles extra todavía, pero ya está listo para que los agregues.
                </div>
              </div>
            `
              : ""
          }

          <div class="sheet__pad"></div>
        </div>
      </section>
    </div>
  `;
}

/* ---------------------------
   MAIN RENDER
--------------------------- */
function render() {
  const block = getCurrentBlock();

  app.innerHTML = `
    <div class="ui" style="${accentStyle(block.color)}">
      ${renderTopBar()}
      ${renderBanner()}
      ${renderDayNav()}
      ${renderTimeline()}

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
    activeEventIdx = null;
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
    activeEventIdx = null;
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
  if (e.key === "Escape") {
    if (drawerOpen) { drawerOpen = false; render(); }
    if (openSheet) { openSheet = null; render(); }
    if (activeEventIdx !== null) { activeEventIdx = null; render(); }
  }
  if (e.key === "ArrowLeft") prevDay();
  if (e.key === "ArrowRight") nextDay();
});

/* ---------------------------
   INIT
--------------------------- */
render();

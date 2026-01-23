import { TRIP_DATA } from "./data/trip.js";

/* ---------------------------
  STATE
--------------------------- */
let state = {
  blockIdx: 0,
  dayId: TRIP_DATA.blocks[0].daysOrder[0],
  drawerOpen: false,

  sheetOpen: false,
  sheetMode: null, // "event" | "guide"
  activeEventIdx: null,
  activeGuideKey: null,
};

const app = document.getElementById("app");
if (!app) throw new Error("No existe #app en index.html");

/* ---------------------------
  HELPERS
--------------------------- */
function getBlock() {
  return TRIP_DATA.blocks[state.blockIdx];
}
function getDay() {
  const b = getBlock();
  return b.days[state.dayId] || b.days[b.daysOrder[0]];
}

function icon(name, size = "icon") {
  return `<i data-lucide="${name}" class="${size}"></i>`;
}

function renderIcons() {
  if (window.lucide) lucide.createIcons();
}

const MONTH_MAP = {
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

function dayChipParts(dayObj, dayId) {
  // Prefer shortDate if it has a space: "31 MAR"
  const sd = (dayObj?.shortDate || "").trim();
  if (sd && sd.includes(" ")) {
    const [dd, mm] = sd.split(/\s+/);
    return { dd: dd || "", mm: (mm || "").toUpperCase() };
  }

  // Fallback for ids like "mar31", "abr01"
  const m = String(dayId || "").match(/^([a-zA-ZñÑ]{3})(\d{2})$/);
  if (m) {
    const mmKey = m[1].toLowerCase();
    return { dd: m[2], mm: MONTH_MAP[mmKey] || m[1].toUpperCase() };
  }

  // Last fallback: show id compact
  return { dd: String(dayId || "").slice(-2), mm: String(dayId || "").slice(0, 3).toUpperCase() };
}

function isFirstDay() {
  const b = getBlock();
  return b.daysOrder.indexOf(state.dayId) === 0;
}
function isLastDay() {
  const b = getBlock();
  return b.daysOrder.indexOf(state.dayId) === b.daysOrder.length - 1;
}

function dayProgressText() {
  const b = getBlock();
  const i = b.daysOrder.indexOf(state.dayId);

  const d = getDay();
  const sd = (d?.shortDate || "").trim();

  // 1) Si shortDate existe, úsalo.
  // 2) Si no, usa el mismo formato del chip (dd + mm).
  const label = sd
    ? sd.toUpperCase()
    : (() => {
        const { dd, mm } = dayChipParts(d, state.dayId);
        return `${dd} ${mm}`.toUpperCase();
      })();

  return `${label} · ${i + 1}/${b.daysOrder.length}`;
}


function setBlock(idx) {
  state.blockIdx = idx;
  state.dayId = TRIP_DATA.blocks[idx].daysOrder[0];
  state.drawerOpen = false;
  closeSheetImmediate();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setDay(dayId) {
  state.dayId = dayId;
  closeSheetImmediate();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextDay() {
  const b = getBlock();
  const i = b.daysOrder.indexOf(state.dayId);
  if (i < b.daysOrder.length - 1) setDay(b.daysOrder[i + 1]);
}
function prevDay() {
  const b = getBlock();
  const i = b.daysOrder.indexOf(state.dayId);
  if (i > 0) setDay(b.daysOrder[i - 1]);
}

function toggleDrawer(open) {
  state.drawerOpen = open;
  if (open) closeSheetImmediate();
  renderApp();
}

function openGuide(key) {
  state.sheetMode = "guide";
  state.activeGuideKey = key;
  state.activeEventIdx = null;
  state.sheetOpen = true;
  state.drawerOpen = false;
  renderApp();
}

function openEventSheet(eventIdx) {
  state.sheetMode = "event";
  state.activeEventIdx = eventIdx;
  state.activeGuideKey = null;
  state.sheetOpen = true;
  state.drawerOpen = false;
  renderApp();
}

function closeSheet() {
  state.sheetOpen = false;
  renderApp();
  setTimeout(() => {
    closeSheetImmediate();
    renderApp();
  }, 260);
}

function closeSheetImmediate() {
  state.sheetOpen = false;
  state.sheetMode = null;
  state.activeEventIdx = null;
  state.activeGuideKey = null;
}

function goldTip(t) {
  return /(priority|vip|fast|exclusive|upgrade|insider|best|reserva|entrada|ticket|private|centurion)/i.test(
    String(t || "")
  );
}

function typeToTag(type) {
  return (type || "").toString().toUpperCase();
}

function sectionLabelText() {
  const d = getDay();

  const sd = (d?.shortDate || "").trim();
  const dateLabel = sd
    ? sd.toUpperCase()
    : (() => {
        const { dd, mm } = dayChipParts(d, state.dayId);
        return `${dd} ${mm}`.toUpperCase();
      })();

  const tag = (d.tag || d.shortTag || "ITINERARY").toUpperCase();
  return `${dateLabel} · ${tag} ITINERARY`;
}


/* ---------------------------
  RENDER
--------------------------- */
function renderTopbar() {
  const block = getBlock();
  return `
    <header class="topbar">
      <button class="btn-icon press" data-action="openDrawer" aria-label="Open menu">
        ${icon("menu")}
      </button>

      <div class="topbar__center">
        <div class="topbar__eyebrow">UK 2026</div>
        <div class="topbar__title">${block.name}</div>
      </div>

      <button class="btn-icon press" data-action="openGuideDefault" aria-label="Open guide">
        ${icon("info")}
      </button>
    </header>
  `;
}

function renderBanner() {
  const block = getBlock();
  const kicker = block.dates ? block.dates.toUpperCase() : "";
  const metaText = block.hotel ? block.hotel : block.base ? block.base : "Platinum Concierge";

  return `
    <div class="banner container">
      <span class="banner__kicker">${kicker}</span>
      <h1 class="banner__title">${block.name}</h1>
      <div class="banner__meta">
        <span class="banner__dot"></span>
        <span>${metaText}</span>
      </div>
    </div>
  `;
}

function renderDayNav() {
  const block = getBlock();

  return `
    <div class="daynav-wrap">
      <div class="daynav container">
        ${block.daysOrder
          .map((dId) => {
            const d = block.days[dId];
            const isActive = dId === state.dayId;
            const { dd, mm } = dayChipParts(d, dId);

            return `
              <button class="day-chip ${isActive ? "active" : ""}" data-action="setDay" data-day="${dId}">
                <span class="day-chip__date">${dd}</span>
                <span class="day-chip__month">${mm}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderSectionDivider() {
  return `
    <div class="section-label container">
      <span>${sectionLabelText()}</span>
      <div class="section-line"></div>
    </div>
  `;
}

function renderEvents() {
  const day = getDay();
  const events = day.events || [];

  return `
    <div class="events container">
      ${events
        .map((evt, idx) => {
          return `
            <article class="event press" data-action="openEvent" data-idx="${idx}">
              <div class="event__grid">
                <div class="event__time">${evt.time || ""}</div>

                <div class="event__content">
                  <span class="event__tag">${typeToTag(evt.type)}</span>

                  <div class="event__header">
                    <h3 class="event__title">${evt.title || ""}</h3>
                    <div class="event__chev">${icon("chevron-right", "icon-sm")}</div>
                  </div>

                  ${evt.desc ? `<p class="event__desc">${evt.desc}</p>` : ""}

                  ${
                    evt.tips && evt.tips.length
                      ? `
                        <div class="tips-row">
                          ${evt.tips
                            .map((t) => `<span class="tip-pill ${goldTip(t) ? "gold" : ""}">${t}</span>`)
                            .join("")}
                        </div>
                      `
                      : ""
                  }
                </div>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderDock() {
  const block = getBlock();
  return `
    <div class="dock">
      <button class="dock-btn press" data-action="prevDay" ${isFirstDay() ? "disabled" : ""} aria-label="Previous day">
        ${icon("chevron-left")}
      </button>

      <div class="dock-info">
        <div class="dock-city">${block.name}</div>
        <div class="dock-date">${dayProgressText()}</div>
      </div>

      <button class="dock-btn press" data-action="nextDay" ${isLastDay() ? "disabled" : ""} aria-label="Next day">
        ${icon("chevron-right")}
      </button>
    </div>
  `;
}

function renderDrawer() {
  if (!state.drawerOpen) return "";

  const activeId = getBlock().id;
  const guideKeys = Object.keys(TRIP_DATA.sheets || {});

  return `
    <div class="overlay open" data-action="closeDrawer">
      <div class="drawer" data-stop>
        <div class="drawer__top">
         <div class="drawer__logo">
  UK 2026<br/>Itinerario
</div>

          <button class="btn-icon press" data-action="closeDrawer" aria-label="Close">
            ${icon("x")}
          </button>
        </div>

        <div class="drawer__sectionLabel">Destinations</div>

        <div class="drawer__menu">
          ${TRIP_DATA.blocks
            .map((b, idx) => {
              const active = b.id === activeId;
              return `
                <button class="menu-item ${active ? "active" : ""}" data-action="setBlock" data-block="${idx}">
                  <span>${b.name}</span>
                  ${active ? icon("check", "icon-sm") : icon("chevron-right", "icon-sm")}
                </button>
              `;
            })
            .join("")}
        </div>

        ${
          guideKeys.length
            ? `
              <div class="drawer__sectionLabel" style="margin-top:22px;">Guides</div>
              <div class="drawer__menu">
                ${guideKeys
                  .map((k) => {
                    const s = TRIP_DATA.sheets[k];
                    return `
                      <button class="menu-item" data-action="openGuide" data-guide="${k}">
                        <span>${s.title}</span>
                        ${icon("chevron-right", "icon-sm")}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            `
            : ""
        }

        <div class="drawer__footer">
          <div class="menu-item" style="border-bottom:none;">
            <span>Emergency: 999 / 112</span>
            ${icon("phone", "icon-sm")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSheet() {
  const isOpen = state.sheetOpen ? "open" : "";
  const mode = state.sheetMode;

  if (!mode) return `<div class="overlay ${isOpen}"></div>`;

  if (mode === "guide") {
    const key = state.activeGuideKey;
    const sheet = (TRIP_DATA.sheets || {})[key];
    if (!sheet) return `<div class="overlay ${isOpen}"></div>`;

    return `
      <div class="overlay ${isOpen}" data-action="closeSheet">
        <div class="sheet" data-stop>
          <div class="sheet__header">
            <div class="sheet__headLeft">
              <div class="sheet__iconWrap">${icon(sheet.icon || "info")}</div>
              <div>
                <div class="sheet__meta">GUIDE</div>
                <div class="sheet__title">${sheet.title}</div>
              </div>
            </div>
            <button class="btn-icon press" data-action="closeSheet" aria-label="Close">
              ${icon("x")}
            </button>
          </div>

          <div class="sheet__body">
            ${(sheet.content || [])
              .map(
                (it) => `
                  <div class="detail-block">
                    <span class="detail-label">${it.title}</span>
                    <p class="detail-text">${it.text}</p>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  const day = getDay();
  const evt = day.events?.[state.activeEventIdx];
  if (!evt) return `<div class="overlay ${isOpen}"></div>`;

  return `
    <div class="overlay ${isOpen}" data-action="closeSheet">
      <div class="sheet" data-stop>
        <div class="sheet__header">
          <div class="sheet__headLeft">
            <div class="sheet__iconWrap">${icon(evt.icon || "calendar")}</div>
            <div>
              <div class="sheet__meta">${evt.time || ""} · ${(evt.type || "").toUpperCase()}</div>
              <div class="sheet__title">${evt.title || ""}</div>
            </div>
          </div>
          <button class="btn-icon press" data-action="closeSheet" aria-label="Close">
            ${icon("x")}
          </button>
        </div>

        <div class="sheet__body">
          ${evt.desc ? `
            <div class="detail-block">
              <span class="detail-label">Description</span>
              <p class="detail-text">${evt.desc}</p>
            </div>` : ""}

          ${evt.details && evt.details.length ? `
            <div class="detail-block">
              <span class="detail-label">Concierge Notes</span>
              <ul class="detail-list">
                ${evt.details.map((d) => `<li>${icon("check-circle", "icon-sm")}<span>${d}</span></li>`).join("")}
              </ul>
            </div>` : ""}

          ${evt.options && evt.options.length ? `
            <div class="detail-block sheet-options">
              <span class="detail-label">Options</span>
              ${evt.options.map((op) => `
                <div class="opt">
                  <div class="opt-title">${op.title}</div>
                  <div class="opt-desc">${op.text}</div>
                </div>
              `).join("")}
            </div>` : ""}

          ${evt.tips && evt.tips.length ? `
            <div class="detail-block">
              <span class="detail-label">Tips</span>
              <div class="tips-row">
                ${evt.tips.map((t) => `<span class="tip-pill ${goldTip(t) ? "gold" : ""}">${t}</span>`).join("")}
              </div>
            </div>` : ""}

          ${evt.notes ? `
            <div class="detail-block insider">
              <span class="detail-label">Insider Tip</span>
              <p class="detail-text">${evt.notes}</p>
            </div>` : ""}

          <button class="cta press" data-action="closeSheet">Cerrar detalles</button>

        </div>
      </div>
    </div>
  `;
}

function renderApp() {
  app.innerHTML = `
    ${renderTopbar()}
    <main class="timeline">
      ${renderBanner()}
      ${renderDayNav()}
      ${renderSectionDivider()}
      ${renderEvents()}
    </main>
    ${renderDock()}
    ${renderDrawer()}
    ${renderSheet()}
  `;

  renderIcons();
}

/* ---------------------------
  EVENTS (FIX: drawer links now work)
--------------------------- */
app.addEventListener("click", (e) => {
  const actionEl = e.target.closest("[data-action]");
  const insideStop = !!e.target.closest("[data-stop]");

  // If click has an action, handle it (even inside drawer/sheet)
  if (actionEl) {
    const action = actionEl.getAttribute("data-action");

    // prevent overlay-close when clicking inside drawer/sheet

    if (action === "openDrawer") return toggleDrawer(true);
    if (action === "closeDrawer") return toggleDrawer(false);

    if (action === "setBlock") {
      const idx = Number(actionEl.getAttribute("data-block"));
      return setBlock(idx);
    }

    if (action === "setDay") {
      const d = actionEl.getAttribute("data-day");
      return setDay(d);
    }

    if (action === "prevDay") return prevDay();
    if (action === "nextDay") return nextDay();

    if (action === "openEvent") {
      const idx = Number(actionEl.getAttribute("data-idx"));
      return openEventSheet(idx);
    }

    if (action === "openGuide") {
      const key = actionEl.getAttribute("data-guide");
      return openGuide(key);
    }

    if (action === "openGuideDefault") {
      const keys = Object.keys(TRIP_DATA.sheets || {});
      const k = TRIP_DATA.sheets?.transporte ? "transporte" : keys[0];
      if (k) return openGuide(k);
      return;
    }

    if (action === "closeSheet") return closeSheet();
    return;
  }

  // If no action: clicking overlay background closes (but not inside drawer/sheet)
  const overlay = e.target.closest(".overlay.open");
  if (overlay && !insideStop) {
    if (state.drawerOpen) return toggleDrawer(false);
    if (state.sheetOpen) return closeSheet();
  }
});

/* Swipe day nav (only when no overlay) */
let sx = 0, sy = 0;
let swipeFromDayNav = false;

window.addEventListener(
  "touchstart",
  (e) => {
    const t = e.touches[0];
    sx = t.clientX;
    sy = t.clientY;

    // Si el gesto inicia dentro del carrusel de fechas, NO hacemos swipe de días
    swipeFromDayNav = !!e.target.closest(".daynav");
  },
  { passive: true }
);

window.addEventListener(
  "touchend",
  (e) => {
    if (state.drawerOpen || state.sheetOpen) return;
    if (swipeFromDayNav) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;

    if (Math.abs(dx) < 70) return;
    if (Math.abs(dy) > 70) return;

    if (dx < 0) nextDay();
    if (dx > 0) prevDay();
  },
  { passive: true }
);

renderApp();

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

  insiderFilter: "All",
  reservasLevel: "nivel1",

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
  const sd = (dayObj?.shortDate || "").trim();
  if (sd && sd.includes(" ")) {
    const [dd, mm] = sd.split(/\s+/);
    return { dd: dd || "", mm: (mm || "").toUpperCase() };
  }

  const m = String(dayId || "").match(/^([a-zA-ZñÑ]{3})(\d{2})$/);
  if (m) {
    const mmKey = m[1].toLowerCase();
    return { dd: m[2], mm: MONTH_MAP[mmKey] || m[1].toUpperCase() };
  }

  return {
    dd: String(dayId || "").slice(-2),
    mm: String(dayId || "").slice(0, 3).toUpperCase(),
  };
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
    if (key === "reservas") state.reservasLevel = "nivel1";


  // reset filter whenever opening insider
  if (key === "insider") state.insiderFilter = "All";

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

function normalizePlaceType(t) {
  return String(t || "").trim();
}

function isPlaceVisible(p) {
  const f = state.insiderFilter;
  if (!f || f === "All") return true;
  return normalizePlaceType(p.type) === f;
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

  // Define buckets (if a sheet key doesn't exist, it simply won't show)
  const planningKeys = ["guia", "reservas"].filter((k) => TRIP_DATA.sheets?.[k]);
  const insiderKeys = ["insider"].filter((k) => TRIP_DATA.sheets?.[k]);

  return `
  <div class="overlay open">
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
          planningKeys.length
            ? `
              <div class="drawer__sectionLabel" style="margin-top:22px;">Planificación</div>
              <div class="drawer__menu">
                ${planningKeys
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

        ${
          insiderKeys.length
            ? `
              <div class="drawer__sectionLabel" style="margin-top:22px;">Insider</div>
              <div class="drawer__menu">
                ${insiderKeys
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

function renderInsiderSheet(sheet) {
  const filters = sheet.filters || ["All"];
  const places = (sheet.places || []).filter(isPlaceVisible);

  return `
    <div class="sheet__body">
      <div class="insider-filters">
        ${filters
          .map((f) => {
            const active = state.insiderFilter === f;
            return `
              <button class="filter-chip ${active ? "active" : ""}"
                data-action="setInsiderFilter"
                data-filter="${f}">
                ${f}
              </button>
            `;
          })
          .join("")}
      </div>

      <div class="place-grid">
        ${places
          .map((p) => {
            const pr = p.priority === "gold" ? "gold" : "normal";
            return `
              <div class="place-card ${pr}">
                <div class="place-top">
                  <div class="place-name">${p.name}</div>
                  <div class="place-type">${p.type}</div>
                </div>
                <div class="place-city">${p.city}</div>
                <div class="place-note">${p.note || ""}</div>
              </div>
            `;
          })
          .join("")}
      </div>

      ${
        places.length === 0
          ? `<div class="insider-empty">No hay resultados con este filtro. Prueba otro.</div>`
          : ""
      }
    </div>
  `;
}

function renderReservasSheet(sheet) {
  const levels = sheet.levels || [];
  const active = levels.find((l) => l.key === state.reservasLevel) || levels[0];

  if (!active) return `<div class="sheet__body"></div>`;

  return `
    <div class="sheet__body">

      <div class="res-tabs">
        ${levels
          .map((l) => {
            const on = l.key === active.key;
            return `
              <button class="res-tab ${on ? "active" : ""}"
                data-action="setReservasLevel"
                data-level="${l.key}">
                <span class="res-tab__label">${l.label}</span>
                <span class="res-tab__sub">${l.subtitle}</span>
              </button>
            `;
          })
          .join("")}
      </div>

      <div class="res-wrap ${active.tone || ""}">
        ${(active.cities || [])
          .map((c, i) => {
            const items = c.items || [];
            return `
              <details class="res-city" ${i === 0 ? "open" : ""}>
                <summary class="res-city__sum">
                  <span class="res-city__name">${c.name}</span>
                  <span class="res-city__count">${items.length}</span>
                </summary>

                <div class="res-list">
                  ${items
                    .map(
                      (it) => `
                        <div class="res-card">
                          <div class="res-card__top">
                            <div class="res-card__title">${it.title || ""}</div>
                            <div class="res-pill">Cuándo: ${it.when || ""}</div>
                          </div>
                          <div class="res-card__why">${it.why || ""}</div>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </details>
            `;
          })
          .join("")}

        ${
          sheet.proTip
            ? `
              <div class="res-callout">
                <div class="res-callout__title">${sheet.proTip.title}</div>
                <div class="res-callout__text">${sheet.proTip.text}</div>
              </div>
            `
            : ""
        }
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
     <div class="overlay ${isOpen}">

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

                   ${
            sheet.kind === "insider"
              ? renderInsiderSheet(sheet)
              : sheet.kind === "reservas"
              ? renderReservasSheet(sheet)
              : `
                <div class="sheet__body">
                  ${(sheet.content || [])
                    .map(
                      (it) => `
                        <div class="detail-block">
                          <span class="detail-label">${it.title}</span>
                          <p class="detail-text">${String(it.text || "").replace(/\n/g, "<br/>")}</p>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              `
          }

        </div>
      </div>
    `;
  }

  const day = getDay();
  const evt = day.events?.[state.activeEventIdx];
  if (!evt) return `<div class="overlay ${isOpen}"></div>`;

  return `
    <div class="overlay ${isOpen}">

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
          ${
            evt.desc
              ? `
            <div class="detail-block">
              <span class="detail-label">Description</span>
              <p class="detail-text">${evt.desc}</p>
            </div>`
              : ""
          }

          ${
            evt.details && evt.details.length
              ? `
            <div class="detail-block">
              <span class="detail-label">Concierge Notes</span>
              <ul class="detail-list">
                ${evt.details.map((d) => `<li>${icon("check-circle", "icon-sm")}<span>${d}</span></li>`).join("")}
              </ul>
            </div>`
              : ""
          }

          ${
            evt.options && evt.options.length
              ? `
            <div class="detail-block sheet-options">
              <span class="detail-label">Options</span>
              ${evt.options
                .map(
                  (op) => `
                <div class="opt">
                  <div class="opt-title">${op.title}</div>
                  <div class="opt-desc">${op.text}</div>
                </div>
              `
                )
                .join("")}
            </div>`
              : ""
          }

          ${
            evt.tips && evt.tips.length
              ? `
            <div class="detail-block">
              <span class="detail-label">Tips</span>
              <div class="tips-row">
                ${evt.tips.map((t) => `<span class="tip-pill ${goldTip(t) ? "gold" : ""}">${t}</span>`).join("")}
              </div>
            </div>`
              : ""
          }

          ${
            evt.notes
              ? `
            <div class="detail-block insider">
              <span class="detail-label">Insider Tip</span>
              <p class="detail-text">${evt.notes}</p>
            </div>`
              : ""
          }

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
  EVENTS
--------------------------- */
app.addEventListener("click", (e) => {
  const actionEl = e.target.closest("[data-action]");
  const insideStop = !!e.target.closest("[data-stop]");

  // 1) Si hay acción, manejarla
  if (actionEl) {
    const action = actionEl.getAttribute("data-action");

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
      const prefer = TRIP_DATA.sheets?.guia
        ? "guia"
        : TRIP_DATA.sheets?.reservas
        ? "reservas"
        : keys[0];

      if (prefer) return openGuide(prefer);
      return;
    }

    // ✅ FIX: aquí va este handler (ya existe action y actionEl)
    if (action === "setReservasLevel") {
      const lv = actionEl.getAttribute("data-level") || "nivel1";
      state.reservasLevel = lv;
      return renderApp();
    }

    if (action === "setInsiderFilter") {
      const f = actionEl.getAttribute("data-filter") || "All";
      state.insiderFilter = f;
      return renderApp();
    }

    if (action === "closeSheet") return closeSheet();
    return;
  }

  // 2) Si NO hay acción: clic en overlay cierra (pero no si es dentro del sheet/drawer)
  const overlay = e.target.closest(".overlay.open");
  if (overlay && !insideStop) {
    if (state.drawerOpen) return toggleDrawer(false);
    if (state.sheetOpen) return closeSheet();
  }
});


/* Swipe day nav (only when no overlay) */
let sx = 0,
  sy = 0;
let swipeFromDayNav = false;

window.addEventListener(
  "touchstart",
  (e) => {
    const t = e.touches[0];
    sx = t.clientX;
    sy = t.clientY;
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

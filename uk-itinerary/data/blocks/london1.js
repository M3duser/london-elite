export const london1 = {
  id: "london1",
  name: "LONDRES I",
  color: "#111418",
  hotel: "Sheraton Grand London Park Lane",
  dates: "31 Mar - 04 Abr",
  base: "Mayfair / Green Park",
  daysOrder: ["mar31", "abr01", "abr02", "abr03", "abr04"],

  rules: {
    title: "EQUIPO + LÓGICA DEL BLOQUE",
    subtitle:
      "Londres I = La Avanzada (4 pax). Quemamos las cartas Fisha=1 / Osvaldo=2 para hacer historia y cultura sin prisas.",
    bullets: [
      "Integrantes (presentes): Jorge, Vanya, Fisha, Lucas (4 pax).",
      "Osvaldo ausente en este bloque.",
      "Estrategia: cerrar aquí Borough Market, British Museum, Tower of London, The George Inn.",
      "Guardamos cartas favoritas de Osvaldo (ej. Dishoom) para Londres II.",
      "Regla táctica: con 4 + maletas, Taxi/Uber Van suele ganar vs Tube.",
      "Buffer estándar pro-grupo: 45–60 min antes de trenes/estadios/momentos fijos.",
    ],
  },

  days: {
    // ------------------------------------------------------------
    // DÍA 1 — Mar 31 | Llegada + Wembley (ING vs JAP) — EVENTO FIJO
    // ------------------------------------------------------------
    mar31: {
      tag: "LLEGADA",
      title: "Día 1 | Llegada + Wembley",
      goal:
        "Aterrizaje suave, gestión de energía (4 pax viajando) y llegada a Wembley sin correr.",
      events: [
        {
          time: "12:10",
          type: "logística",
          title: "Llegada a LHR + migración + maletas",
          icon: "plane",
          desc:
            "Ventana realista: 12:10–14:15. Aquí se gana el día: ritmo constante y cero ansiedad.",
          subTitle: "Reagrupar + resolver lo mínimo",
          details: [
            "Checklist: pasaportes a la mano y reagruparse en ‘Arrivals’ justo después de equipaje.",
            "SIM/eSIM: si no traen, quiosco rápido solo si está vacío; si no, se resuelve en el centro para no perder tiempo.",
            "Tip vital: compren agua embotellada al salir. La hidratación cambia el humor del grupo.",
          ],
          options: [
            { title: "Modo pro-grupo", text: "Punto de encuentro fijo en Arrivals y nadie se separa." },
            { title: "Modo express", text: "Si hay fila: calma total. El objetivo es salir, no ‘ganar’ minutos." },
          ],
          tips: ["Punto de encuentro", "Agua inmediata", "No improvisar SIM", "Ritmo constante"],
          notes:
            "Osvaldo no se pierde turismo hoy: es llegada + partido fijo.",
        },

        {
          time: "14:15",
          type: "transporte",
          title: "Traslado Heathrow → Hotel (Taxi/Uber Van)",
          icon: "car",
          desc:
            "Decisión táctica: 4 personas + maletas → el Tube (Piccadilly Line) es un error (escaleras, calor, gente).",
          subTitle: "Puerta a puerta = energía guardada",
          details: [
            "Recomendación: Uber Van o Black Cab directo al Sheraton.",
            "Costo por persona suele quedar similar al express + conexiones, pero llegan frescos.",
            "Objetivo: llegar sin fricción, no ‘optimizar’ £10.",
          ],
          options: [
            { title: "Plan A (recomendado)", text: "Uber Van / Black Cab directo al hotel." },
            { title: "Plan B (solo si van ultra ligeros)", text: "Express + Tube, únicamente si el grupo trae energía y poco equipaje." },
          ],
          tips: ["Van con maletas", "Cero escalones", "Llegar frescos", "No complicar"],
          notes:
            "Este bloque se siente premium cuando la logística de llegada es suave.",
        },

        {
          time: "15:00",
          type: "hotel",
          title: "Check-in + reset (90 min)",
          icon: "hotel",
          desc:
            "Regla de oro: ducha rápida, cambio por capas (noche de estadio refresca), power banks conectados. CERO SIESTAS.",
          subTitle: "Jet lag controlado",
          details: [
            "Capas listas para la noche: abrigo ligero + algo que aguante viento.",
            "Power banks conectados desde ya (tickets + mapas + regreso).",
            "Si se duermen, el jet lag les pega mañana: hoy no se negocia.",
          ],
          options: [
            { title: "Modo pro", text: "Ducha + cambio + salir. Nada de acostarse." },
            { title: "Modo humano", text: "Si están reventados: 10 min sentados, pero sin cama." },
          ],
          tips: ["Capas", "Power bank", "No siesta", "Agua"],
          notes:
            "Hoy hay evento fijo: todo lo demás se ajusta a llegar con margen.",
        },

        {
          time: "16:30",
          type: "paseo",
          title: "Paseo suave por Mayfair",
          icon: "map",
          desc:
            "Objetivo: ‘creerse’ Londres sin caminar kilómetros. Textura y lujo sin cansarse.",
          subTitle: "Ruta corta y elegante",
          details: [
            "Ruta: Green Park → Piccadilly → Burlington Arcade.",
            "Mantenerlo corto: hoy es energía + Wembley.",
          ],
          options: [
            { title: "Ruta exacta", text: "Green Park → Piccadilly → Burlington Arcade → vuelta." },
            { title: "Si llueve", text: "Arcade + pasajes cubiertos, sin exposición al viento." },
          ],
          tips: ["Corto", "Sin kilómetros", "Fotos rápidas", "Guardar energía"],
          notes:
            "Este paseo ‘setea’ el mood del viaje.",
        },

        {
          time: "17:30",
          type: "comida",
          title: "Snack pre-partido (OBLIGATORIO)",
          icon: "utensils",
          desc:
            "Algo salado + carbohidrato por Green Park. La comida del estadio es cara y mala; llegar con hambre arruina el partido.",
          subTitle: "Energía estable",
          details: [
            "Meta: comer algo que no sea pesado pero sí ‘ancla’ (salado + carbs).",
            "Tip: compren también una botella extra de agua para el camino.",
          ],
          options: [
            { title: "Modo práctico", text: "Algo rápido para llevar y comen caminando hacia la estación." },
            { title: "Modo sentado (si hay tiempo)", text: "20–30 min máximo. No se convierta en cena." },
          ],
          tips: ["Salado + carbs", "Agua extra", "No comida pesada", "No saltárselo"],
          notes:
            "Este bloque evita el único drama común: hambre + multitudes.",
        },

        {
          time: "17:45",
          type: "transporte",
          title: "Traslado a Wembley con margen",
          icon: "train",
          desc:
            "Ruta: Green Park → Jubilee Line → Wembley Park. ~45 min + flujo de gente. Buffer manda.",
          subTitle: "Baños antes + cero carreras",
          details: [
            "Baño: antes de salir del hotel y antes de entrar al estadio.",
            "Traigan contactless listo: entrar/salir rápido reduce estrés.",
          ],
          options: [
            { title: "Plan A (recomendado)", text: "Tube directo siguiendo Jubilee Line." },
            { title: "Plan B (clima pesado)", text: "Taxi/Uber si hay lluvia/viento fuerte y el grupo va cansado." },
          ],
          tips: ["Baño antes", "Buffer", "Contactless", "No correr"],
          notes:
            "Llegar con calma cambia la experiencia del partido.",
        },

        {
          time: "19:45",
          type: "evento",
          title: "Partido: Inglaterra vs Japón (FIJO)",
          icon: "ticket",
          desc:
            "Evento inamovible. Disfruten sin pensar en logística: el regreso ya está definido.",
          subTitle: "Cero fricción",
          details: [
            "Salida: al terminar, la masa de gente es enorme. Paciencia.",
            "Plan: directo al Tube (lo más estable post-evento).",
          ],
          options: [
            { title: "Salida eficiente", text: "Caminen 10–15 min fuera del caos antes de decidir si piden Uber." },
            { title: "Salida simple", text: "Tube directo y listo. Menos decisiones = menos estrés." },
          ],
          tips: ["Paciencia", "Mantenerse juntos", "Tube directo", "Hidratación"],
          notes:
            "Hoy el objetivo es dormir. Mañana toca Londres real.",
        },

        {
          time: "22:00",
          type: "logística",
          title: "Regreso / cierre",
          icon: "home",
          desc:
            "Cena: algo rápido cerca del hotel o room service si llegan muertos. Prioridad: dormir.",
          subTitle: "Recuperación manda",
          details: [
            "Agua antes de dormir.",
            "Dejar listas capas/ropa para mañana (evita caos matutino).",
          ],
          options: [
            { title: "Modo cama", text: "Si llegaron cansados: room service y a dormir." },
            { title: "Modo snack", text: "Algo rápido cerca y directo al hotel." },
          ],
          tips: ["Dormir", "Agua", "No alargar", "Preparar mañana"],
          notes:
            "Mañana es día largo y fotogénico.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 2 — Mié 01 Abr | Westminster + South Bank + Borough + Tate + George Inn + Bancone
    // ------------------------------------------------------------
    abr01: {
      tag: "SOUTHBANK",
      title: "Día 2 | Westminster + Borough + Tate + pub histórico",
      goal:
        "Hacer iconos en modo ‘postal’, comer increíble en Borough (prioridad Fisha) y cerrar con pub histórico + pasta top.",
      events: [
        {
          time: "09:00",
          type: "desayuno",
          title: "Desayuno en Mayfair",
          icon: "coffee",
          desc:
            "Café bueno + pastry. No se tarden 2 horas: hoy el highlight es Borough + Tate + pub.",
          subTitle: "Arranque eficiente",
          details: [
            "Meta: 45–60 min máximo.",
            "Agua desde temprano. Londres caminable = hidratación constante.",
          ],
          options: [
            { title: "Modo smart", text: "Café + pastry y salen." },
            { title: "Modo suave", text: "Si el jet lag pega, 10 min extra, pero sin romper el horario." },
          ],
          tips: ["45–60 min", "Agua", "Salir a tiempo"],
          notes:
            "Hoy el ritmo es clave.",
        },

        {
          time: "10:00",
          type: "paseo",
          title: "Westminster ‘Postal Walk’ (sin entrar)",
          icon: "map",
          desc:
            "Ruta: Green Park → Buckingham Palace → St. James Park → Parliament Square → Big Ben. Iconos 1/1/1/1.",
          subTitle: "Exterior perfecto, sin colas",
          details: [
            "Tip foto: la mejor foto del Big Ben no es abajo; es cruzando el puente hacia el lado sur (cerca del túnel del Marriott County Hall).",
            "Osvaldo verá esto en Londres II también: hoy disfrútenlo con calma.",
          ],
          options: [
            { title: "Ruta exacta", text: "Green Park → Buckingham → St. James → Parliament Square → Big Ben." },
            { title: "Si hay viento", text: "Fotos rápidas y sigan hacia el río (menos exposición)." },
          ],
          tips: ["Fotos con calma", "No entrar", "Mantener flujo"],
          notes:
            "Hoy es ‘postales + flow’.",
        },

        {
          time: "12:00",
          type: "paseo",
          title: "South Bank Walk (pegados al río)",
          icon: "camera",
          desc:
            "Caminata pasando London Eye y National Theatre. Vibra total sin complicarse.",
          subTitle: "Río + skyline",
          details: [
            "Mantenerlo lineal: caminar en línea, no zigzags.",
            "1 foto de grupo buena y siguen.",
          ],
          options: [
            { title: "Modo continuo", text: "Caminar y elegir solo 2 paradas foto." },
            { title: "Modo lluvia", text: "Acortar y priorizar Borough (comida + interior)." },
          ],
          tips: ["2 paradas foto", "No zigzags", "Guardar energía"],
          notes:
            "Borough se disfruta más llegando con hambre.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Borough Market (PRIORIDAD FISHA: 1)",
          icon: "utensils",
          desc:
            "Estrategia pro-grupo (4 pax): NO hacer fila los 4 juntos para todo. Divídanse en parejas y luego comparten.",
          subTitle: "Parejas → share → río",
          details: [
            "Pareja A: paella/tacos. Pareja B: donuts/pasta.",
            "Punto de reunión: gradas de vidrio o zona del río para compartir.",
            "Must try: Bread Ahead (donuts), Padella (si fila corta), Applebee’s (pescado).",
          ],
          options: [
            { title: "Modo exploración", text: "Cada pareja hace 2 paradas y comparten todo." },
            { title: "Modo eficiente", text: "Definen 3 paradas top y listo (sin vueltas eternas)." },
          ],
          tips: ["Dividirse", "Compartir", "No fila eterna", "Agua"],
          notes:
            "Fisha=1 / Osvaldo=2: perfecto para quemarlo hoy con calma.",
        },

        {
          time: "15:30",
          type: "visita",
          title: "Tate Modern (Turbine Hall + colección) + Nivel 10 (vista gratis)",
          icon: "landmark",
          desc:
            "Entren sí o sí: Turbine Hall por arquitectura y suban al Nivel 10 (Blavatnik) para vista 360 gratis.",
          subTitle: "Cultura + mirador sin tickets",
          details: [
            "Plan: Turbine Hall primero, luego colección breve.",
            "Nivel 10: vista brutal gratis (si hay acceso).",
            "Si Osvaldo quiere ‘Tate’ en Londres II: repiten solo bar/vista, no museo completo.",
          ],
          options: [
            { title: "Modo smart", text: "Turbine + Nivel 10 + 1 ala (60–90 min)." },
            { title: "Modo completo", text: "Agregar 1 ala extra si van con energía (90–120 min)." },
          ],
          tips: ["Turbine primero", "Vista gratis", "No maratón"],
          notes:
            "Hoy el objetivo es ‘lo mejor’ sin agotarse.",
        },

        {
          time: "17:00",
          type: "pub",
          title: "Pub Session 1: The George Inn (PRIORIDAD FISHA: 1)",
          icon: "beer",
          desc:
            "El único galleried inn que queda en Londres. Patio increíble si no llueve.",
          subTitle: "Degustación inteligente",
          details: [
            "Tip: pidan Half Pints para probar una Ale tradicional y una Lager sin embriagarse rápido.",
            "1–2 rondas máximo: hoy todavía hay cena.",
          ],
          options: [
            { title: "Modo tasting", text: "2 half pints por persona (ale + lager)." },
            { title: "Modo clásico", text: "1 pinta tranquila y salida." },
          ],
          tips: ["Half pints", "Patio si clima", "No alargar"],
          notes:
            "Fisha=1 / Osvaldo=2: se disfruta hoy sin FOMO.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena: Bancone (Covent Garden o Golden Square) — NO Dishoom",
          icon: "utensils",
          desc:
            "Cambio táctico: Dishoom se guarda para Osvaldo. Hoy Bancone (pasta fresca) es perfecto para el grupo.",
          subTitle: "Reserva obligatoria",
          details: [
            "Plato estrella: ‘Silk Handkerchiefs’ (mantequilla de nuez).",
            "Reserva: ideal con semanas de antelación (OBLIGATORIA si quieren asegurar).",
          ],
          options: [
            { title: "Plan A", text: "Bancone con reserva." },
            { title: "Plan B", text: "Si no hay reserva: pasta casual cerca sin complicarse." },
          ],
          tips: ["No Dishoom hoy", "Reservar", "Cierre tranquilo"],
          notes:
            "Cierre redondo sin ‘quemar’ cartas de Osvaldo.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 3 — Jue 02 Abr | British Museum + Seven Dials + ABBA Voyage (FIJO)
    // ------------------------------------------------------------
    abr02: {
      tag: "HISTORIA",
      title: "Día 3 | British Museum + Seven Dials + ABBA Voyage",
      goal:
        "Museo a fondo (sin presión), paseo visual y logística perfecta para ABBA (cena temprana + batería).",
      events: [
        {
          time: "09:00",
          type: "desayuno",
          title: "Desayuno rápido (to-go)",
          icon: "coffee",
          desc:
            "Algo para llevar camino al museo. Hoy manda el bloque de historia.",
          subTitle: "Sin perder tiempo",
          details: [
            "Meta: estar llegando 10:00 sin carreras.",
            "Agua desde temprano.",
          ],
          options: [
            { title: "Modo pro", text: "To-go y directo al museo." },
          ],
          tips: ["To-go", "Agua", "Salir a tiempo"],
          notes:
            "Museo temprano = mejor experiencia.",
        },

        {
          time: "10:00",
          type: "visita",
          title: "British Museum (PRIORIDAD FISHA/Jorge/Vanya: 1)",
          icon: "landmark",
          desc:
            "Entrada por Great Russell Street. Reserven entrada gratuita con hora para evitar fila de walk-ins.",
          subTitle: "Ruta inteligente (2.5 horas)",
          details: [
            "1) Piedra Rosetta (Sala 4) — directo al entrar.",
            "2) Partenón/Grecia (Sala 18).",
            "3) Momias Egipcias (arriba, salas 62–63).",
            "Tip: si se cansan, Great Court (techo de cristal) es perfecto para sentarse y tomar aire.",
          ],
          options: [
            { title: "Modo full", text: "Ruta completa 2.5–3 h y salida limpia." },
            { title: "Modo light", text: "Rosetta + Grecia + Great Court (2 h) si el grupo está cansado." },
          ],
          tips: ["Reserva gratis", "3 highlights", "Pausa en Great Court", "No correr"],
          notes:
            "Osvaldo lo tenía como 2: hoy se disfruta sin prisas.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Lunch ligero en Bloomsbury",
          icon: "utensils",
          desc:
            "Zona llena de cafés estudiantiles. Algo rápido: hoy hay paseo + ABBA.",
          subTitle: "Ligero y eficiente",
          details: [
            "Meta: 45–60 min máximo.",
            "No se carguen: cena temprana es CRÍTICA antes de Stratford.",
          ],
          options: [
            { title: "Modo rápido", text: "Comen y siguen." },
          ],
          tips: ["Ligero", "Sin sobremesa", "Agua"],
          notes:
            "Hoy el timing vale oro.",
        },

        {
          time: "14:30",
          type: "paseo",
          title: "Neal’s Yard + Seven Dials",
          icon: "map",
          desc:
            "Vibe, tiendas bonitas y fotos fáciles. Neal’s Yard es pequeño: foto y salir a Seven Dials.",
          subTitle: "Paseo visual sin cansarse",
          details: [
            "Neal’s Yard: entrar, foto, y moverse.",
            "Seven Dials: caminar y escoger 1–2 tiendas máximo.",
          ],
          options: [
            { title: "Modo foto", text: "Neal’s Yard rápido y luego paseo en Seven Dials." },
            { title: "Modo clima", text: "Si llueve: acorten y prioricen café/recarga." },
          ],
          tips: ["Foto rápida", "No alargar", "Mantener flujo"],
          notes:
            "Bloque perfecto para antes del show.",
        },

        {
          time: "16:30",
          type: "logística",
          title: "Pausa + prep para ABBA (batería + tickets)",
          icon: "battery",
          desc:
            "Regreso rápido al hotel o café estático para cargar celulares. Vital para tickets y regreso.",
          subTitle: "Cargar + reorganizar",
          details: [
            "Power banks a full.",
            "Confirmar ruta a Stratford y regreso.",
          ],
          options: [
            { title: "Plan A", text: "Hotel rápido (cargar + baño) y salir." },
            { title: "Plan B", text: "Café tranquilo cerca (cargar + reset) si prefieren no regresar." },
          ],
          tips: ["Batería", "Tickets listos", "Baño antes", "No improvisar"],
          notes:
            "Este bloque evita dramas de última hora.",
        },

        {
          time: "17:00",
          type: "cena",
          title: "Cena temprana (CRÍTICO)",
          icon: "utensils",
          desc:
            "Tienen que cenar ANTES de irse a Stratford. Al salir del show todo estará cerrado o llenísimo.",
          subTitle: "Rápido en Soho",
          details: [
            "Sugerido: Flat Iron o ramen (algo directo y rápido).",
            "Meta: terminar y moverse con tiempo.",
          ],
          options: [
            { title: "Plan A", text: "Flat Iron (rápido y fácil)." },
            { title: "Plan B", text: "Ramen (caliente + eficiente)." },
          ],
          tips: ["Cenar antes", "No sobremesa", "Agua"],
          notes:
            "La cena temprana es la llave del día.",
        },

        {
          time: "18:00",
          type: "transporte",
          title: "Traslado a ABBA Arena (Stratford)",
          icon: "train",
          desc:
            "Ruta táctica: desde Tottenham Court Rd (zona Soho) tomar Elizabeth Line a Stratford (rápida) + DLR 1 estación a Pudding Mill Lane.",
          subTitle: "Contactless listo",
          details: [
            "Tip: tener tarjetas contactless listas para no perder tiempo.",
            "Llegar con margen: evita filas y estrés.",
          ],
          options: [
            { title: "Ruta recomendada", text: "Elizabeth Line → Stratford → DLR → Pudding Mill Lane." },
            { title: "Ruta alternativa", text: "Si hay lío en líneas: revisen Citymapper y ajusten en tiempo real." },
          ],
          tips: ["Contactless", "Buffer", "Tickets listos"],
          notes:
            "Llegar temprano = mejor experiencia dentro.",
        },

        {
          time: "19:45",
          type: "evento",
          title: "ABBA Voyage (FIJO)",
          icon: "ticket",
          desc:
            "Show corrido, sin intermedio. Baño antes de que empiece.",
          subTitle: "Dentro del Arena",
          details: [
            "Bebidas: precios altos, pero vasos coleccionables.",
            "Baño antes del inicio (sin intermedio).",
          ],
          options: [
            { title: "Modo pro", text: "Baño + bebidas antes de iniciar y se sientan sin moverse." },
          ],
          tips: ["Baño antes", "No intermedio", "Batería", "Disfrutar"],
          notes:
            "Evento inamovible para los 4.",
        },

        {
          time: "22:00",
          type: "logística",
          title: "Regreso directo",
          icon: "home",
          desc:
            "Misma ruta de regreso. Objetivo: cama y recuperación.",
          subTitle: "Cierre limpio",
          details: ["No alargar. Mañana es Tower of London (apertura)."],
          options: [{ title: "Modo cama", text: "Directo al hotel y dormir." }],
          tips: ["Directo", "Dormir", "Agua"],
          notes:
            "Mañana se gana llegando temprano a la Torre.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 4 — Vie 03 Abr | Tower of London + City Views + The Blackfriar
    // ------------------------------------------------------------
    abr03: {
      tag: "TORRE",
      title: "Día 4 | Tower of London + City Views + The Blackfriar",
      goal:
        "Visita histórica completa sin prisas: Crown Jewels primero, Tower Bridge a pie, mirador gratis y pub art-nouveau imperdible.",
      events: [
        {
          time: "08:45",
          type: "logística",
          title: "Llegada a Tower Hill",
          icon: "map",
          desc:
            "Llegar temprano es todo. Foto clásica antes de entrar y luego directo a Crown Jewels.",
          subTitle: "Foto + entrada sin estrés",
          details: [
            "Tip foto: Tower Bridge de fondo antes de entrar (mirador del reloj solar).",
            "Objetivo: estar listos para la apertura.",
          ],
          options: [
            { title: "Modo pro", text: "Foto rápida (5 min) y a la entrada." },
            { title: "Modo cero prisa", text: "Si llegaron antes, foto extra y listo. Pero sin perder apertura." },
          ],
          tips: ["Temprano", "Foto rápida", "Apertura manda"],
          notes:
            "Hoy se hace historia bien hecha.",
        },

        {
          time: "09:00",
          type: "visita",
          title: "Tower of London (apertura) — Crown Jewels primero",
          icon: "landmark",
          desc:
            "Estrategia Beefeater: ignoren todo y vayan directo a Crown Jewels. Es lo primero que se llena.",
          subTitle: "Joya → tour → White Tower",
          details: [
            "Paso 1: Crown Jewels primero (sin fila).",
            "Paso 2: regresar a la entrada y tomar tour Yeoman Warder (gratis, cada ~30 min) o explorar a su ritmo.",
            "Paso 3: White Tower (armaduras) si van con energía.",
          ],
          options: [
            { title: "Modo tour", text: "Crown Jewels → Yeoman tour → White Tower." },
            { title: "Modo libre", text: "Crown Jewels → recorrido propio con calma." },
          ],
          tips: ["Crown Jewels primero", "No perder tiempo al inicio", "Capas (viento)"],
          notes:
            "Fisha/Jorge/Vanya=1 / Osvaldo=2: perfecto hacerlo hoy completo.",
        },

        {
          time: "12:30",
          type: "paseo",
          title: "Tower Bridge (cruce a pie + fotos)",
          icon: "camera",
          desc:
            "Cruce caminando: vistas al río y fotos fáciles. Mantenerlo simple.",
          subTitle: "Postales sin complicar",
          details: [
            "Cruzan caminando, 10–15 min de fotos y siguen.",
          ],
          options: [
            { title: "Modo rápido", text: "Cruzar, 2 fotos y seguir a lunch." },
            { title: "Modo foto", text: "Agregar 5 min extra si el cielo está dramático." },
          ],
          tips: ["No alargar", "Fotos selectivas", "Mantener ritmo"],
          notes:
            "Este bloque se siente cinematográfico con poco esfuerzo.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Lunch: Fish Friday o carne",
          icon: "utensils",
          desc:
            "Punto medio perfecto: algo rico y directo para no perder la tarde.",
          subTitle: "Dos rutas tácticas",
          details: [
            "Opción A: Blacklock City (carne top, sotano increíble).",
            "Opción B: Fish & Chips en pub cercano (ej. The Hung, Drawn & Quartered).",
          ],
          options: [
            { title: "Opción A - Blacklock City", text: "Mejor si reservan. Carne excelente." },
            { title: "Opción B - Fish & Chips", text: "Más casual y rápido en zona Tower." },
          ],
          tips: ["Reservar si se puede", "No sobremesa", "Agua"],
          notes:
            "Comida bien elegida = tarde sin cansancio.",
        },

        {
          time: "15:30",
          type: "visita",
          title: "Mirador: The Garden at 120 (gratis)",
          icon: "view",
          desc:
            "Plan maestro: terraza abierta piso 15, gratis y sin las filas absurdas del Sky Garden.",
          subTitle: "Vistas brutales, cero drama",
          details: [
            "Vistas: Torre, Puente y ‘Gherkin’ perfecto.",
            "No requieren tickets: solo seguridad tipo aeropuerto.",
          ],
          options: [
            { title: "Modo pro", text: "Llegan, seguridad, 20–30 min de vistas y listo." },
            { title: "Modo clima", text: "Si hace mucho viento, acorten y bajen." },
          ],
          tips: ["Gratis", "Sin filas", "Seguridad tipo aeropuerto", "No alargar si viento"],
          notes:
            "Este mirador es el ‘hack’ del día.",
        },

        {
          time: "17:30",
          type: "pub",
          title: "Pub: The Blackfriar (PRIORIDAD 1.00)",
          icon: "beer",
          desc:
            "El mejor pub art-nouveau de Londres. Parece una iglesia por dentro. Imperdible aunque Osvaldo no esté.",
          subTitle: "Pinta + mosaicos",
          details: [
            "Ubicación: saliendo de Blackfriars Station (logística perfecta).",
            "Tip: pidan una pinta y tómense 10 min solo para mirar los mosaicos y la madera.",
          ],
          options: [
            { title: "Modo clásico", text: "Una pinta tranquila y cierre corto." },
            { title: "Modo tasting", text: "Half pint extra si quieren probar otra ale." },
          ],
          tips: ["Mirar detalles", "Una ronda", "No alargar"],
          notes:
            "Si algún día se repite, que sea una cerveza rápida; hoy háganlo bien.",
        },

        {
          time: "20:00",
          type: "cena",
          title: "Cena relajada (simple)",
          icon: "utensils",
          desc:
            "Día largo. Cena cerca del hotel o algo directo. Hoy no se complica nada.",
          subTitle: "Recuperación",
          details: [
            "Objetivo: cenar y empezar a dejar maletas medio listas para York.",
            "Mañana hay salida: entre más orden hoy, más suave mañana.",
          ],
          options: [
            { title: "Modo fácil", text: "Cerca del hotel / Mayfair sin logística." },
            { title: "Modo ultra fácil", text: "Room service si llegaron reventados." },
          ],
          tips: ["Simple", "No alargar", "Preparar maletas"],
          notes:
            "Este cierre protege el día de tren.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 5 — Sáb 04 Abr | Salida a York (tren LNER)
    // ------------------------------------------------------------
    abr04: {
      tag: "TREN",
      title: "Día 5 | Salida a York",
      goal:
        "Transición limpia: cero estrés en King’s Cross, snacks listos y boletos descargados para escaneo rápido.",
      events: [
        {
          time: "08:30",
          type: "hotel",
          title: "Desayuno final + check-out",
          icon: "coffee",
          desc:
            "Arranque sin prisa pero con objetivo claro: salir a tiempo y llegar a estación con buffer.",
          subTitle: "Orden primero",
          details: [
            "Tengan maletas listas antes de bajar.",
            "Agua y power banks listos desde temprano.",
          ],
          options: [
            { title: "Modo pro", text: "Desayuno corto y check-out sin carreras." },
          ],
          tips: ["Maletas listas", "Agua", "Batería"],
          notes:
            "El día se gana con orden.",
        },

        {
          time: "09:45",
          type: "transporte",
          title: "Traslado a King’s Cross (Taxi/Uber Van)",
          icon: "car",
          desc:
            "Con 4 + maletas: Taxi/Uber Van. King’s Cross es grande: el buffer manda.",
          subTitle: "Llegar con margen",
          details: [
            "King’s Cross es enorme y bonita: si quieren, foto rápida del techo.",
            "Andén 9 3/4: solo foto desde lejos. La fila es eterna y no vale el tiempo hoy.",
          ],
          options: [
            { title: "Modo pro", text: "Taxi directo, entrar, ubicar vagón y listo." },
            { title: "Modo foto", text: "1 foto rápida del hall/techo y a lo importante." },
          ],
          tips: ["Buffer", "No fila 9 3/4", "Ubicar vagón"],
          notes:
            "Lo premium es no correr.",
        },

        {
          time: "11:00",
          type: "logística",
          title: "Preparación de tren (snacks + agua)",
          icon: "shopping-bag",
          desc:
            "Compren snacks en Pret o M&S Food. La comida del tren es básica: lleguen preparados.",
          subTitle: "Comer bien en tránsito",
          details: [
            "Sándwiches/snacks + agua listos antes de abordar.",
            "Tip: algo dulce pequeño también sirve para el mood del tren.",
          ],
          options: [
            { title: "Plan A", text: "Pret a Manger (rápido y directo)." },
            { title: "Plan B", text: "M&S Food (mejor surtido, muy práctico)." },
          ],
          tips: ["Agua", "Snack listo", "No depender del tren"],
          notes:
            "Esto evita hambre y mantiene al grupo feliz.",
        },

        {
          time: "11:33",
          type: "tren",
          title: "Tren LNER King’s Cross → York (reservado)",
          icon: "ticket",
          desc:
            "Tip clave: boletos descargados en el wallet del celular de quien traiga todos (Jorge o Vanya) para escanear rápido en torniquetes.",
          subTitle: "Escaneo rápido + salida smooth",
          details: [
            "Boletos descargados (offline) antes de llegar a los torniquetes.",
            "Suben, acomodan maletas y listo: modo descanso.",
          ],
          options: [
            { title: "Modo descanso", text: "Audífonos + pausa. Llegan a York con energía." },
            { title: "Modo planeación", text: "Definen lunch y primera caminata medieval." },
          ],
          tips: ["Wallet offline", "Subir sin prisa", "Agua", "Descanso"],
          notes:
            "Transición limpia = York perfecto desde el minuto 1.",
        },
      ],
    },
  },
};

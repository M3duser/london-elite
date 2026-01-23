export const block3 = {
  meta: {
    title: "BLOQUE 3 - EDIMBURGO (AJUSTADO)",
    subtitle:
      "Castillo + Old Town curado + Arthur’s Seat (si el clima deja) + spa + cierres fotogénicos sin maratón",
    hotel: "Sheraton Grand Hotel & Spa Edinburgh",
    dates: "Dom 5 Abr – Vie 10 Abr",
    base: "West End / Princes Street (cómodo para moverse)",
    group: "Lucas + Fisha + Vanya + Jorge + Osvaldo (desde el 5)",
  },

  // Claves rápidas (para que se sienta premium)
  rules: {
    title: "CLAVES DE LOGÍSTICA",
    bullets: [
      "Con maletas / viento / lluvia: taxi (vale cada libra).",
      "En días fuertes: máximo 1 subida grande. Arthur’s Seat cuenta como subida grande.",
      "Pubs: 1 parada fuerte por noche. Mejor half pints y flights que maratón.",
    ],
  },

  defaultDayId: "abr05",
  daysOrder: ["abr05", "abr06", "abr07", "abr08", "abr09", "abr10"],

  days: {
    // ------------------------------------------------------------
    // DÍA 6 — DOM 5 ABR | Llegada desde York + check-in + primer vistazo
    // ------------------------------------------------------------
    abr05: {
      title: "Día 6 | Llegada + check-in + primer vistazo sin cansancio",
      shortDate: "05 ABR",
      shortTag: "LLEGADA",
      goal: "Aterrizar suave, comer bien y dormir para arrancar duro el 6–7.",
      events: [
        {
          time: "17:59",
          type: "llegada",
          title: "Llegada a Edinburgh Waverley",
          icon: "train",
          desc: "Llegan al centro. Objetivo: salir rápido y sin fricción.",
          tips: ["Baño rápido si lo necesitan", "Reagruparse antes de salir"],
        },
        {
          time: "18:10",
          type: "transporte",
          title: "Taxi a Sheraton + check-in",
          icon: "car",
          desc: "Con grupo y maletas, taxi/Uber gana. Si hay viento o lluvia, más todavía.",
          tips: ["Taxi directo", "No inventar con maletas", "Reset corto en el hotel"],
        },
        {
          time: "19:30",
          type: "cena",
          title: "Cena (según energía)",
          icon: "utensils",
          desc: "Hoy manda la logística. Cena rica, corta y a dormir.",
          options: [
            {
              title: "Plan A (cero fricción, cerca)",
              text: "Pub cómodo o brasserie cerca del hotel.",
            },
            {
              title: "Plan B (primer wow sin formalidad)",
              text: "Steak o cocina moderna si hay reserva.",
            },
            {
              title: "Plan C (si vienen rotos)",
              text: "Room service y a dormir.",
            },
          ],
          tips: ["Cerca del hotel", "No traslados", "Hidratación", "Dormir manda"],
        },
        {
          time: "21:00",
          type: "mirador",
          title: "Mirador corto (solo si el clima deja)",
          icon: "view",
          desc: "Primer vistazo sin convertirlo en caminata. Si hay viento fuerte, se salta sin culpa.",
          options: [
            {
              title: "Opción 1 (plano y fácil)",
              text: "Princes Street Gardens viewpoint.",
            },
            {
              title: "Opción 2 (mini Calton)",
              text: "Calton Hill versión mini, solo si no hay viento fuerte.",
            },
          ],
          tips: [
            "Arriba máximo 20–25 min",
            "Foto y bajar",
            "Capas (viento pega duro)",
          ],
          notes:
            "No se fuerza Arthur’s Seat hoy: llegan tarde y con viento puede volverse castigo.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 7 — LUN 6 ABR | Castillo + Old Town curado + Museo + Leith + cena top
    // ------------------------------------------------------------
    abr06: {
      title: "Día 7 | Core Edimburgo con todos: castillo + diseño + foodie/whisky",
      shortDate: "06 ABR",
      shortTag: "CASTILLO",
      goal:
        "Hacer el core con todos sin saturarse: castillo temprano, Old Town curado, museo perfecto si pega el viento, y Leith para beer/whisky + cena top.",
      events: [
        {
          time: "08:00",
          type: "desayuno",
          title: "Desayuno (rápido pero bueno)",
          icon: "coffee",
          desc: "Eficiente para llegar temprano al castillo y no regalar la mañana.",
          tips: ["No desayuno eterno", "Café + algo salado", "Capas por el viento"],
        },
        {
          time: "09:15",
          type: "transporte",
          title: "Llegar a la zona del castillo (walk o taxi según clima)",
          icon: "car",
          desc: "Si el clima castiga, taxi. Si está amable, caminata suave.",
          tips: ["Clima manda", "No llegar tarde", "Taxi si hay viento/lluvia"],
        },
        {
          time: "09:30",
          type: "visita",
          title: "Edinburgh Castle (bloque pesado)",
          icon: "landmark",
          desc:
            "Estrategia pro: highlights primero, luego lectura defensiva/topografía, vistas al final si el clima coopera.",
          tips: [
            "Meeting point interno (se separa gente fácil)",
            "Highlights primero",
            "Vistas hasta el final",
          ],
          details: [
            "1) Lo icónico primero (sin vueltas).",
            "2) Recorrido defensivo/topografía: cómo el castillo manda la ciudad.",
            "3) Vistas al final solo si el viento deja.",
          ],
        },
        {
          time: "12:15",
          type: "walk",
          title: "Royal Mile best bits (mini-walk)",
          icon: "camera",
          desc: "Solo lo más fotogénico + closes puntuales. No se alargan.",
          tips: ["Máximo 2–3 closes", "Fotos rápidas", "Mantener ritmo"],
        },
        {
          time: "13:15",
          type: "visita",
          title: "National Museum of Scotland",
          icon: "museum",
          desc:
            "Perfecto si llueve o si el viento pega duro. Ruta: Grand Gallery + 2 áreas.",
          tips: ["No intentar todo", "Grand Gallery + 2 áreas", "Ideal para reset"],
        },
        {
          time: "15:15",
          type: "café",
          title: "Coffee / reset / baño",
          icon: "coffee",
          desc: "Parada corta que hace que Leith se disfrute y no se sufra.",
          tips: ["15–45 min", "Baño", "Agua", "Decidir energía real del grupo"],
        },
        {
          time: "16:15",
          type: "transporte",
          title: "Taxi a Leith Shore",
          icon: "car",
          desc: "Taxi recomendado para llegar frescos al bloque beer/whisky.",
          tips: ["Taxi directo", "Guardar energía", "Llegar sin fricción"],
        },
        {
          time: "17:00",
          type: "pub",
          title: "Pub Session (beer + whisky): Teuchters Landing",
          icon: "beer",
          desc:
            "Walk-in y fácil para grupo. Degustación inteligente: half pints + 1 whisky por persona (o flight para compartir).",
          tips: ["Half pints", "1 whisky máximo", "Una sola parada fuerte"],
        },
        {
          time: "18:30",
          type: "cena",
          title: "Cena top (con todos)",
          icon: "utensils",
          desc: "Elijan según reserva y mood. La meta: cerrar alto sin logística pesada.",
          options: [
            { title: "Opción A", text: "The Little Chartroom (si logran reserva)." },
            { title: "Opción B", text: "The Kitchin (gran cena hoy, mañana más chill)." },
            { title: "Opción C", text: "Barry Fish (casual-top mariscos)." },
          ],
          tips: ["Reservas ayudan", "No cruzar la ciudad", "Cierre corto"],
        },
        {
          time: "20:45",
          type: "mirador",
          title: "Cierre fotogénico (solo si hay energía y poco viento)",
          icon: "view",
          desc: "Calton Hill o mirador urbano corto. Si el viento está duro: cocktail 1 parada cerca del hotel y ya.",
          tips: ["Arriba 20–25 min", "Foto y bajar", "Si viento fuerte: bar cerca"],
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 8 — MAR 7 ABR | Día fuerte con todos + Arthur’s Seat
    // ------------------------------------------------------------
    abr07: {
      title: "Día 8 | Arthur’s Seat + Holyrood + New Town/Stockbridge + cena/pubs",
      shortDate: "07 ABR",
      shortTag: "ARTHUR",
      goal:
        "Meter la gran subida con todos (Arthur’s Seat) temprano y balancear con barrios bonitos + cena buena sin maratón.",
      events: [
        {
          time: "07:00",
          type: "hike",
          title: "Arthur’s Seat (subida + vistas) - Plan A",
          icon: "mountain",
          desc:
            "Temprano para hacerlo amable. Ruta recomendada: la más amigable (sin trepadas técnicas).",
          tips: [
            "Capas + viento (guantes delgados ayudan muchísimo)",
            "Si arriba hay viento durísimo: foto rápida y bajar",
            "Esto cuenta como la subida grande del día",
          ],
          notes:
            "Ventana sugerida 07:00–09:15. Si el clima está imposible, se activa Plan B del día.",
        },
        {
          time: "09:45",
          type: "desayuno",
          title: "Desayuno fuerte post-hike",
          icon: "coffee",
          desc: "Aquí sí vale sentarse y comer rico. Recargan de verdad.",
          tips: ["Algo caliente", "Proteína", "No alargar demasiado"],
        },
        {
          time: "11:15",
          type: "walk",
          title: "Holyrood vibes (sin museo pesado)",
          icon: "landmark",
          desc:
            "Complemento perfecto después de Arthur’s Seat: cerca, vibe escocesa y cero traslados grandes.",
          tips: ["Paseo curado", "Fotos rápidas", "No convertirlo en tour eterno"],
        },
        {
          time: "12:45",
          type: "comida",
          title: "Lunch casual bueno (sin fila eterna)",
          icon: "utensils",
          desc: "Día fuerte: comer bien sin perder tiempo.",
          tips: ["Evitar filas", "Ligero-medio", "Agua"],
        },
        {
          time: "14:30",
          type: "paseo",
          title: "New Town / Stockbridge (suave, bonito, cafés/shops)",
          icon: "shopping-bag",
          desc:
            "Balance perfecto después de la mañana física. Buen diseño, vibes finas, sin desgaste.",
          tips: ["Paseo suave", "Café corto", "No cruzar media ciudad"],
        },
        {
          time: "17:00",
          type: "pub",
          title: "Pub Session 2 (con todos) - sin maratón",
          icon: "beer",
          desc:
            "Un pub con buena selección. Si quieren más local, busquen vibe de barrio y no ultra turístico.",
          tips: ["Half pints", "Flight compartido", "1 parada fuerte"],
        },
        {
          time: "19:30",
          type: "cena",
          title: "Cena (cierre con todos)",
          icon: "utensils",
          desc: "Si ayer fue un tipo de cena, hoy cambian la cara para variedad.",
          options: [
            { title: "Opción A", text: "The Kitchin (si no fue ayer)." },
            { title: "Opción B", text: "Barry Fish (más casual)." },
            {
              title: "Opción C",
              text: "Pub auténtico con comida sólida + buena lista de whisky.",
            },
          ],
          tips: ["No traslados largos", "Cierre corto", "Dormir manda"],
        },
        {
          time: "Plan B",
          type: "contingencia",
          title: "Si amanece horrible y Arthur’s Seat no se puede",
          icon: "cloud-rain",
          desc:
            "Cambiar Arthur’s Seat por Calton Hill (corto) y dejar Arthur’s Seat como ventana alternativa: 06:00–08:30 del 7, o atardecer del 6 si baja el viento (solo si el grupo trae ganas).",
          tips: ["Calton corto", "No pelear con el clima", "Ventana alternativa si hay motivación"],
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 9 — MIÉ 8 ABR | Osvaldo+Fisha = hike | Resto = Rosslyn + Spa + cena casual
    // ------------------------------------------------------------
    abr08: {
      title: "Día 9 | Split day: hike para ellos + día premium para el resto",
      shortDate: "08 ABR",
      shortTag: "SPLIT",
      goal:
        "Que Osvaldo + Fisha tengan naturaleza real, y el resto un día top (Rosslyn + spa + cena) sin sentirse incompletos.",
      events: [
        {
          time: "Temprano",
          type: "hike",
          title: "Hike Day (Osvaldo + Fisha)",
          icon: "leaf",
          desc:
            "Salida temprano con snacks + agua + impermeable. Ritmo constante y paradas cortas. Regla: no volver destruidos.",
          tips: ["Snacks + agua", "Capa impermeable", "Ritmo constante", "No volver destruidos"],
        },
        {
          time: "10:15",
          type: "visita",
          title: "Rosslyn Chapel (arquitectura brutal) - resto del grupo",
          icon: "landmark",
          desc:
            "Slot recomendado. Divídanse por enfoque (tallas/simbolismo/estructura) y luego comparten hallazgos.",
          tips: ["Reservar slot", "Detalles", "No correr", "Compartir hallazgos"],
        },
        {
          time: "13:30",
          type: "spa",
          title: "One Spa (Sheraton) - recovery total",
          icon: "sparkles",
          desc: "Steam/sauna/pool + lounge. Este bloque es parte del plan premium.",
          tips: ["Hidratación", "Sin prisa", "Si hay tratamiento: reservar"],
        },
        {
          time: "19:30",
          type: "cena",
          title: "Cena casual-top (cerca o Leith)",
          icon: "utensils",
          desc:
            "Algo rico sin presión de reserva, para no depender de horarios de regreso del hike.",
          tips: ["Sin presión", "Cerca", "Cierre corto", "Dormir manda"],
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 10 — JUE 9 ABR | Old Town fino + Victoria St + golden hour + noche escocesa
    // ------------------------------------------------------------
    abr09: {
      title: "Día 10 | Old Town fino + Victoria St + golden hour + última noche escocesa",
      shortDate: "09 ABR",
      shortTag: "OLD TOWN",
      goal:
        "Repetir Old Town pero curado y fotogénico (sin turismo pesado), cerrar con Calton en golden hour y una noche auténtica sin maratón.",
      events: [
        {
          time: "09:00",
          type: "desayuno",
          title: "Desayuno",
          icon: "coffee",
          desc: "Balanceado y sin filas largas. Hoy el premio es la luz de tarde.",
          tips: ["No alargar", "Café + algo salado", "Capas"],
        },
        {
          time: "10:15",
          type: "walk",
          title: "Old Town: closes + Victoria Street (curado)",
          icon: "camera",
          desc:
            "Closes puntuales y callecitas laterales con faroles/escaleras. Ahí salen las mejores fotos.",
          tips: ["2–3 closes máximo", "Buscar laterales", "Mantener ritmo"],
        },
        {
          time: "12:45",
          type: "comida",
          title: "Lunch rápido (street o pub lunch)",
          icon: "utensils",
          desc: "45–60 min máximo para no romper el día.",
          tips: ["Corto", "Cerca", "Agua"],
        },
        {
          time: "14:30",
          type: "tiempo-libre",
          title: "Tiempo libre (shops / cafés / mini galería)",
          icon: "shopping-bag",
          desc:
            "Bloque flexible porque aquí se nota el cansancio acumulado. Manténganlo ligero.",
          tips: ["Flexible", "No cruzar la ciudad", "Café corto"],
        },
        {
          time: "17:30",
          type: "mirador",
          title: "Calton Hill (golden hour)",
          icon: "view",
          desc: "Si hay viento duro: 20–25 min arriba y listo. Foto y bajar.",
          tips: ["Arriba 20–25 min", "Foto y bajar", "Capas"],
        },
        {
          time: "19:45",
          type: "cena",
          title: "Cena con música / pub auténtico (última noche escocesa)",
          icon: "music",
          desc: "Whisky sin maratón. Una sola parada fuerte y cierre bonito.",
          tips: ["1 parada fuerte", "Half pints/flights", "No trasnochar demasiado"],
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 11 — VIE 10 ABR | Check-out + estación + tren a Londres
    // ------------------------------------------------------------
    abr10: {
      title: "Día 11 | Check-out + tren a Londres (logística)",
      shortDate: "10 ABR",
      shortTag: "TREN",
      goal: "Cero fricción: salir con buffer, llegar a Londres con energía.",
      events: [
        {
          time: "08:00",
          type: "desayuno",
          title: "Desayuno simple + cerrar maletas",
          icon: "coffee",
          desc: "Corto y útil. Hoy manda la logística.",
          tips: ["No alargar", "Checklist rápido", "Cargar baterías"],
        },
        {
          time: "09:15",
          type: "transporte",
          title: "Taxi a Waverley + buffer",
          icon: "car",
          desc:
            "Taxi recomendado (maletas + grupo). Buffer para baños, agua y ubicar andén/vagón.",
          tips: ["Taxi", "Buffer real", "Agua/snacks", "Baño"],
        },
        {
          time: "11:00",
          type: "tren",
          title: "Tren a Londres (descanso)",
          icon: "ticket",
          desc: "Recovery block: 30–45 min de siesta y llegan humanos.",
          tips: ["Siesta corta", "Agua", "Audífonos", "No planear de más"],
        },
      ],
    },
  },
};

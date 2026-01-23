export const edinburgh = {
  id: "edinburgh",
  name: "EDIMBURGO",
  color: "#0b1f17",
  hotel: "Sheraton Grand Hotel & Spa Edinburgh",
  dates: "05 Abr - 10 Abr",
  base: "West End / Princes Street (muy cómodo)",
  daysOrder: ["abr05", "abr06", "abr07", "abr08", "abr09", "abr10"],

  rules: {
    title: "CLAVE DE LOGÍSTICA",
    subtitle: "Edimburgo premium = cero fricción con clima y maletas.",
    bullets: [
      "Con maletas / viento / lluvia: taxi (vale cada libra).",
      "En días fuertes: máximo 1 subida grande. Arthur’s Seat cuenta como subida grande.",
      "Pubs: 1 parada fuerte por noche. Mejor half pints y flights que maratón.",
      "Si el viento está duro: cambien colinas por miradores urbanos + museos + pubs.",
      "Reservas clave: Castillo (slot), cenas foodie (Kitchin / Little Chartroom), spa si quieren tratamiento.",
    ],
  },

  days: {
    // ------------------------------------------------------------
    // DÍA 6 — Dom 5 Abr | Llegada desde York + check-in + primer vistazo
    // ------------------------------------------------------------
    abr05: {
      tag: "LLEGADA",
      title: "Día 6 | Llegada a Edimburgo + check-in + primer vistazo",
      goal: "Aterrizar suave, comer bien y dormir para arrancar duro el 6–7.",
      events: [
        {
          time: "17:59",
          type: "llegada",
          title: "Llegada a Edinburgh Waverley",
          icon: "train",
          desc: "Llegan al centro. Objetivo: salir sin drama y reagrupar antes de moverse.",
          subTitle: "Reagrupar y salir rápido",
          details: [
            "Baño rápido si lo necesitan antes de salir.",
            "Reagrupar 2 min y confirmar que todos traen maletas y tickets a mano.",
          ],
          options: [
            { title: "Modo pro", text: "No inventar rutas con maletas. Taxi directo." },
            { title: "Modo clima", text: "Si hay viento/lluvia, más razón para taxi." },
          ],
          tips: ["Reagrupar", "Baño rápido", "Taxi directo"],
          notes: "Edimburgo se disfruta más cuando evitan fricción desde el minuto 1.",
        },
        {
          time: "18:10",
          type: "transporte",
          title: "Taxi a Sheraton + check-in",
          icon: "car",
          desc: "Con grupo y maletas, taxi/Uber gana por tiempo y cero fricción.",
          subTitle: "Puerta a puerta",
          details: [
            "Con viento o lluvia, el taxi vale cada libra.",
            "Llegar, dejar cosas y hacer reset corto (baño, capas, power bank).",
          ],
          options: [
            { title: "Opción A - Taxi/Uber", text: "Recomendado con grupo y equipaje." },
            { title: "Opción B - A pie", text: "Solo si van ligeros y el clima está perfecto." },
          ],
          tips: ["Taxi con maletas", "Reset corto", "Capas listas"],
          notes: "Decisión práctica = experiencia premium.",
        },
        {
          time: "19:30",
          type: "cena",
          title: "Cena (elige según energía)",
          icon: "utensils",
          desc: "Hoy la prioridad es comer bien sin logística. Cena corta y a dormir.",
          subTitle: "Cero fricción",
          details: [
            "Plan A: pub cómodo / brasserie cerca del hotel (la más eficiente).",
            "Plan B: steak o cocina moderna (primer wow sin formalidad) si hay reserva.",
            "Plan C: room service si vienen rotos (válido y smart).",
          ],
          options: [
            { title: "Plan A - Cerca", text: "Pub cómodo o brasserie cerca del hotel." },
            { title: "Plan B - Wow", text: "Steak/cocina moderna si hay reserva y energía." },
            { title: "Plan C - Room service", text: "Cierre premium cuando el cuerpo pide cama." },
          ],
          tips: ["Cerca del hotel", "No traslados", "Hidratación", "Dormir manda"],
          notes: "Mañana hay día fuerte: hoy es inversión en energía.",
        },
        {
          time: "21:00",
          type: "mirador",
          title: "Mirador corto (solo si el clima deja)",
          icon: "view",
          desc: "Primer vistazo sin convertirlo en caminata. Si hay viento fuerte: se salta sin culpa.",
          subTitle: "20–25 min arriba, foto y baja",
          details: [
            "Opción 1: Princes Street Gardens viewpoint (plano y fácil).",
            "Opción 2: Calton Hill versión mini (solo si no hay viento fuerte).",
            "Arriba máximo 20–25 min: foto y bajan antes de enfriarse.",
          ],
          options: [
            { title: "Opción 1 - Plano", text: "Princes Street Gardens viewpoint (fácil)." },
            { title: "Opción 2 - Mini Calton", text: "Solo si el viento coopera." },
          ],
          tips: ["Corto", "No enfriarse", "Capas", "Foto y bajar"],
          notes:
            "No se fuerza Arthur’s Seat hoy: llegan tarde y la subida con viento puede volverse castigo.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 7 — Lun 6 Abr | Castillo + Old Town curado + Museo + Leith + cena top
    // ------------------------------------------------------------
    abr06: {
      tag: "CASTILLO",
      title: "Día 7 | Castillo + Old Town curado + museo + Leith + cena top",
      goal: "El core de Edimburgo con todos: historia + diseño + foodie/whisky sin maratón.",
      events: [
        {
          time: "08:00",
          type: "desayuno",
          title: "Desayuno (rápido pero bueno)",
          icon: "coffee",
          desc: "Eficiente para llegar temprano al castillo. El viento desgasta: comer bien ayuda.",
          subTitle: "Sin filas",
          details: [
            "Prioridad: rápido y funcional para no regalar la mañana.",
            "Capas listas: arriba del castillo pega fuerte.",
          ],
          options: [
            { title: "Modo pro", text: "Café + algo salado + algo dulce (balance perfecto)." },
            { title: "Modo ultra eficiente", text: "To-go y directo al castillo." },
          ],
          tips: ["No alargar", "Agua", "Capas"],
          notes: "Buen desayuno = castillo disfrutado, no sufrido.",
        },
        {
          time: "09:15",
          type: "transporte",
          title: "Llegar a la zona del castillo (walk o taxi según clima)",
          icon: "car",
          desc: "Si llueve/viento: taxi sin dudar. Si está amable: caminata suave.",
          subTitle: "Clima manda",
          details: [
            "Plan A: caminata si el clima está amable.",
            "Plan B: taxi si hay viento/lluvia (se siente premium).",
          ],
          options: [
            { title: "Plan A - Caminata", text: "Suma vibes si el día coopera." },
            { title: "Plan B - Taxi", text: "Salva el día cuando el clima castiga." },
          ],
          tips: ["No sufrir el viento", "Llegar temprano", "Taxi si castiga"],
          notes: "Edimburgo premia decisiones prácticas.",
        },
        {
          time: "09:30",
          type: "visita",
          title: "Edinburgh Castle (bloque pesado)",
          icon: "landmark",
          desc:
            "Estrategia pro: highlights primero, luego lectura defensiva/topografía, vistas al final si el clima coopera.",
          subTitle: "Fortificación sobre roca",
          details: [
            "Entrar directo a lo icónico al inicio.",
            "Recorrido defensivo/topografía: cómo el castillo manda la ciudad.",
            "Vistas al final solo si el viento deja.",
            "Tip grupo: definan un meeting point interno (se separa gente fácil).",
          ],
          options: [
            { title: "Modo highlights", text: "Icónico + defensivo + salida con energía." },
            { title: "Modo arquitectos", text: "Menos salas, más lectura de terreno y muralla." },
          ],
          tips: ["Meeting point", "Vistas al final", "Capas"],
          notes: "Castillo bien hecho = Edimburgo entendido.",
        },
        {
          time: "12:15",
          type: "walk",
          title: "Royal Mile best bits (mini-walk)",
          icon: "camera",
          desc: "Solo lo más fotogénico + closes puntuales. No se alargan.",
          subTitle: "20–40 min máximo",
          details: [
            "Regla: máximo 2–3 closes (si no, se vuelve repetitivo).",
            "Fotos rápidas y seguir: hoy el segundo acto es museo + Leith.",
          ],
          options: [
            { title: "Modo eficiente", text: "2–3 spots, fotos y listo." },
            { title: "Modo cine", text: "Un close con faroles/escaleras para foto top." },
          ],
          tips: ["No alargar", "Mantener ritmo"],
          notes: "La curaduría aquí hace que el día se sienta premium.",
        },
        {
          time: "13:15",
          type: "visita",
          title: "National Museum of Scotland",
          icon: "museum",
          desc: "Perfecto si llueve o si el viento pega duro. Grand Gallery + 2 áreas.",
          subTitle: "Dosis perfecta",
          details: [
            "Ruta recomendada: Grand Gallery + 2 áreas (no intentar todo).",
            "Arquitectos: museografía/espacio. (Sin depender de ir con Osvaldo).",
          ],
          options: [
            { title: "Ruta A (rápida)", text: "Grand Gallery + 2 áreas y listo." },
            { title: "Ruta B (más diseño)", text: "Elegir 2 áreas de diseño/espacio y salir." },
          ],
          tips: ["No ver todo", "2 áreas", "Reset mental"],
          notes: "Museo dosificado = tarde con energía.",
        },
        {
          time: "15:15",
          type: "café",
          title: "Coffee / reset / baño",
          icon: "coffee",
          desc: "Parada corta que hace que Leith se disfrute, no se sufra.",
          subTitle: "15–45 min",
          details: [
            "Café rápido + baño.",
            "Decidir energía real: ¿cierre fotogénico o directo a hotel después de cena?",
          ],
          options: [
            { title: "Modo pro", text: "Corto y efectivo. No alargar." },
            { title: "Modo clima", text: "Si el viento está duro, recortar el cierre." },
          ],
          tips: ["Corto", "Baño", "Agua"],
          notes: "Esta mini pausa evita que el día se rompa.",
        },
        {
          time: "16:15",
          type: "transporte",
          title: "Taxi a Leith Shore",
          icon: "car",
          desc: "Taxi recomendado para llegar frescos al bloque beer/whisky.",
          subTitle: "Guardar energía",
          details: [
            "Con grupo, taxi suele ser lo más eficiente.",
            "Leith vale por comida/pubs: no lleguen fundidos.",
          ],
          options: [
            { title: "Opción A - Taxi", text: "Recomendado: cero fricción." },
            { title: "Opción B - Público", text: "Solo si el clima está perfecto y van con tiempo." },
          ],
          tips: ["Taxi", "Llegar con energía"],
          notes: "Leith es el acto foodie del día.",
        },
        {
          time: "17:00",
          type: "pub",
          title: "Pub Session: Teuchters Landing (walk-in)",
          icon: "beer",
          desc:
            "Beer + whisky sin formalidad. Half pints + 1 whisky por persona (o flight para compartir).",
          subTitle: "Degustación inteligente",
          details: [
            "Half pints para probar 2 estilos sin cansarse.",
            "Whisky: 1 dram por persona máximo, o flight para compartir.",
          ],
          options: [
            { title: "Modo beer", text: "Half pint cask + half pint stout/porter." },
            { title: "Modo whisky", text: "Flight compartido (smart)." },
          ],
          tips: ["Half pints", "1 whisky máximo", "1 parada fuerte"],
          notes: "Premium = calidad, no cantidad.",
        },
        {
          time: "18:30",
          type: "cena",
          title: "Cena top",
          icon: "utensils",
          desc: "Elijan según reserva y mood. La meta: cierre alto sin logística pesada.",
          subTitle: "Cerrar alto",
          details: [
            "Opción A: The Little Chartroom (si logran reserva).",
            "Opción B: The Kitchin (gran cena hoy y mañana más chill).",
            "Opción C: Barry Fish (casual-top mariscos).",
          ],
          options: [
            { title: "Opción A - Little Chartroom", text: "Cierre foodie relajado." },
            { title: "Opción B - Kitchin", text: "Gran cena elegante." },
            { title: "Opción C - Barry Fish", text: "Casual-top mariscos." },
          ],
          tips: ["Reservas ayudan", "Cierre corto"],
          notes: "Después del castillo, la cena debe sentirse fácil.",
        },
        {
          time: "20:45",
          type: "mirador",
          title: "Cierre fotogénico (solo si hay energía y poco viento)",
          icon: "view",
          desc: "Calton Hill o mirador urbano corto. Si hay viento fuerte: cocktail 1 parada cerca del hotel y ya.",
          subTitle: "Corto y smart",
          details: [
            "Calton: 20–25 min arriba y bajan.",
            "Si el viento está duro: cambien por bar bonito cerca del hotel.",
          ],
          options: [
            { title: "Plan A - Calton", text: "Subida corta, fotos, salida." },
            { title: "Plan B - Cocktail cerca", text: "Cierre bonito sin pelear con el clima." },
          ],
          tips: ["Viento manda", "Corto", "Capas"],
          notes: "La mejor foto es la que no les cuesta el día siguiente.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 8 — Mar 7 Abr | Arthur’s Seat + Holyrood + New Town/Stockbridge + cena/pubs
    // (Aquí todavía están todos. Al final del día, Fis + Osvaldo se van a su hike)
    // ------------------------------------------------------------
    abr07: {
      tag: "ARTHUR",
      title: "Día 8 | Arthur’s Seat + Holyrood + New Town/Stockbridge + cena/pubs",
      goal: "Meter la gran subida con todos temprano y cerrar bien antes de que Fisha + Osvaldo se vayan al hike.",
      events: [
        {
          time: "07:00",
          type: "hike",
          title: "Arthur’s Seat (temprano)",
          icon: "mountain",
          desc: "Subida + vistas. Ruta recomendada: la más amable (sin trepadas técnicas).",
          subTitle: "Subida grande del día",
          details: [
            "Ropa por capas + viento. Guantes delgados ayudan muchísimo.",
            "Regla: si arriba hay viento durísimo, foto rápida y bajar.",
          ],
          options: [
            { title: "Modo pro", text: "Temprano = menos gente y mejor luz." },
            { title: "Modo clima", text: "Cumbre rápida si el viento castiga." },
          ],
          tips: ["Capas", "Guantes", "Foto y bajar"],
          notes: "Arthur’s Seat cuenta como la subida grande del día.",
        },
        {
          time: "09:45",
          type: "desayuno",
          title: "Desayuno fuerte post-hike",
          icon: "coffee",
          desc: "Aquí sí vale sentarse y comer rico. Recuperación real.",
          subTitle: "Recargar",
          details: [
            "Algo caliente + proteína para recuperar piernas.",
            "No alargar demasiado: el día sigue.",
          ],
          options: [
            { title: "Modo completo", text: "Sentados y ricos, pero sin sobremesa eterna." },
            { title: "Modo eficiente", text: "Comer bien y seguir." },
          ],
          tips: ["Algo caliente", "Proteína", "Agua"],
          notes: "Post-hike bien hecho = tarde agradable.",
        },
        {
          time: "11:15",
          type: "walk",
          title: "Holyrood + entorno (sin museo pesado)",
          icon: "landmark",
          desc: "Complemento perfecto después de Arthur’s Seat: cero traslados y vibe escocesa.",
          subTitle: "Sin maratón",
          details: [
            "Paseo curado por el entorno.",
            "Fotos rápidas y seguir.",
          ],
          options: [
            { title: "Modo foto", text: "Fotos clave y listo." },
            { title: "Modo chill", text: "Paseo tranquilo y regreso." },
          ],
          tips: ["Corto", "Mantener ritmo"],
          notes: "Hoy ya fue físico: no se saturen.",
        },
        {
          time: "12:45",
          type: "comida",
          title: "Lunch casual bueno (sin fila eterna)",
          icon: "utensils",
          desc: "Día fuerte: comer bien sin perder tiempo.",
          subTitle: "Smart",
          details: ["Busquen algo sin fila eterna. Mantenerlo práctico."],
          options: [
            { title: "Plan A", text: "Pub moderno con comida sólida." },
            { title: "Plan B", text: "Casual bueno, rápido y cercano." },
          ],
          tips: ["Evitar filas", "Agua"],
          notes: "Lunch corto = tarde más rica.",
        },
        {
          time: "14:30",
          type: "paseo",
          title: "New Town / Stockbridge (suave, bonito, cafés/shops)",
          icon: "shopping-bag",
          desc: "Balance perfecto después de la mañana física.",
          subTitle: "Vibes finas",
          details: [
            "Compras/diseño sin desgaste.",
            "Café corto y seguir.",
          ],
          options: [
            { title: "Modo diseño", text: "Tiendas puntuales y listo." },
            { title: "Modo chill", text: "Café + paseo corto." },
          ],
          tips: ["Suave", "Café corto"],
          notes: "Aquí se nota el lujo de balancear.",
        },
        {
          time: "17:00",
          type: "pub",
          title: "Pub Session (corta) - sin maratón",
          icon: "beer",
          desc: "1 parada corta para cerrar el día sin reventarse.",
          subTitle: "Half pints / flight compartido",
          details: [
            "Half pints para probar más sin cansarse.",
            "Whisky: flight compartido si quieren.",
          ],
          options: [
            { title: "Modo cerveza", text: "1–2 half pints máximo." },
            { title: "Modo whisky", text: "1 flight compartido (smart)." },
          ],
          tips: ["Corto", "No maratón"],
          notes: "La meta es llegar bien a cena.",
        },
        {
          time: "19:30",
          type: "cena",
          title: "Cena (cierre con todos)",
          icon: "utensils",
          desc: "Cena rica sin logística pesada. Cierre temprano recomendado.",
          subTitle: "Fácil y buena",
          details: [
            "Hoy conviene cero complicación: cerca o Leith si ya están allá.",
            "Cierre temprano: mañana se separa el grupo.",
          ],
          options: [
            { title: "Opción A - Foodie", text: "Si hay reserva y ganas: cierre alto." },
            { title: "Opción B - Casual-top", text: "Rico y sin presión." },
          ],
          tips: ["Cerca", "Cierre corto", "Dormir manda"],
          notes: "Cierre smart para despedir el día fuerte.",
        },
        {
          time: "22:00",
          type: "logística",
          title: "Fis + Osvaldo se van al hike (desde mañana ya no están en Edimburgo)",
          icon: "backpack",
          desc: "A partir del 8 se separan y ustedes siguen Edimburgo en modo city + foto + pubs + descanso.",
          subTitle: "Cambio de grupo",
          details: [
            "Confirmar punto de salida/encuentro para el día 11.",
            "Ustedes: plan más urbano y flexible.",
          ],
          options: [
            { title: "Checklist", text: "Definir hora/lugar para volver a verse el día 11." },
            { title: "Modo pro", text: "Dormir temprano: mañana es Edimburgo sin hikes." },
          ],
          tips: ["Definir punto día 11", "Dormir temprano"],
          notes: "Perfecto: así el bloque se siente más ligero y curado.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 9 — Mié 8 Abr | Ustedes solos (Fisha + Osvaldo en hike)
    // ------------------------------------------------------------
    abr08: {
      tag: "RECOVERY",
      title: "Día 9 | Ustedes solos: Rosslyn + One Spa + cena fácil",
      goal: "Día premium sin presión: arquitectura brutal + spa + cena rica y sencilla.",
      events: [
        {
          time: "08:30",
          type: "desayuno",
          title: "Desayuno tranquilo (sin prisa)",
          icon: "coffee",
          desc: "Hoy no hay hike. Arranque suave pero sin perder el día.",
          subTitle: "Balance",
          details: ["Café + algo salado. Capas si el viento está raro."],
          options: [
            { title: "Modo balance", text: "Desayuno decente y a moverse." },
            { title: "Modo eficiente", text: "Rápido y directo a Rosslyn." },
          ],
          tips: ["Capas", "Agua", "No alargar demasiado"],
          notes: "Hoy el lujo es ritmo suave.",
        },
        {
          time: "09:45",
          type: "transporte",
          title: "Taxi a Rosslyn (recomendado)",
          icon: "car",
          desc: "Cero fricción. Llegan tranquilos y se disfruta más.",
          subTitle: "Puerta a puerta",
          details: ["Taxi recomendado para evitar cambios y esperas."],
          options: [
            { title: "Opción A - Taxi", text: "La opción práctica y premium." },
            { title: "Opción B - Público", text: "Solo si el clima está perfecto y con tiempo." },
          ],
          tips: ["Taxi", "Buffer", "Slot si reservan"],
          notes: "Rosslyn vale llegar con calma.",
        },
        {
          time: "10:15",
          type: "visita",
          title: "Rosslyn Chapel (slot recomendado)",
          icon: "landmark",
          desc: "Detalle brutal. Dividirse por temas y luego compartir hallazgos.",
          subTitle: "Arquitectura y simbología",
          details: [
            "Reservar slot evita esperas.",
            "Dividirse por enfoque: detalle / estructura / simbolismo.",
          ],
          options: [
            { title: "Modo detalle", text: "Texturas, tallas, patrones, luz." },
            { title: "Modo estructura", text: "Lectura espacial y constructiva." },
          ],
          tips: ["Slot", "No correr", "Fotos selectivas"],
          notes: "Este lugar se mira con calma.",
        },
        {
          time: "13:00",
          type: "comida",
          title: "Lunch ligero (ideal cerca del hotel)",
          icon: "utensils",
          desc: "Comer simple para entrar al spa sin fricción.",
          subTitle: "Ligero y práctico",
          details: ["Sándwich/ensalada/sopa y listo. Sin exceso."],
          options: [
            { title: "Modo práctico", text: "Ligero y rápido." },
            { title: "Modo pub light", text: "Algo salado sin pasarse." },
          ],
          tips: ["Ligero", "Agua", "Cerca"],
          notes: "Spa + comida pesada nunca gana.",
        },
        {
          time: "14:30",
          type: "spa",
          title: "One Spa (Sheraton) — recovery total",
          icon: "sparkles",
          desc: "Steam/sauna/pool + lounge. Parte del plan premium.",
          subTitle: "Recuperación real",
          details: [
            "Circuito sugerido: steam/sauna/pool + lounge.",
            "Si quieren tratamiento: reserven horario.",
          ],
          options: [
            { title: "Modo circuito", text: "Alternar steam/sauna + descanso." },
            { title: "Modo tratamiento", text: "Reservar y llegar con buffer." },
          ],
          tips: ["Hidratación", "No prisa", "Reservar si tratamiento"],
          notes: "Esto hace que el viaje no se sienta maratón.",
        },
        {
          time: "19:30",
          type: "cena",
          title: "Cena casual-top (cerca / Leith si les queda cómodo)",
          icon: "utensils",
          desc: "Sin presión de reserva. Rico, corto y a dormir.",
          subTitle: "Fácil",
          details: [
            "Mantenerlo cerca para no sumar traslados.",
            "Cierre corto: mañana Old Town + golden hour.",
          ],
          options: [
            { title: "Plan A - Cerca", text: "Casual-top cerca del Sheraton." },
            { title: "Plan B - Leith", text: "Solo si les queda cómodo y sin logística pesada." },
          ],
          tips: ["Cerca", "Cierre corto"],
          notes: "Edimburgo premium = logística fácil.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 10 — Jue 9 Abr | Ustedes solos: Old Town fino + golden hour + noche escocesa
    // ------------------------------------------------------------
    abr09: {
      tag: "OLD TOWN",
      title: "Día 10 | Ustedes solos: Old Town fino + Calton + noche escocesa",
      goal: "Old Town curado (fotogénico, no turístico pesado) + Calton en golden hour + cena auténtica sin maratón.",
      events: [
        {
          time: "09:00",
          type: "desayuno",
          title: "Desayuno",
          icon: "coffee",
          desc: "Balanceado y sin filas largas. Hoy manda la luz de tarde.",
          subTitle: "Arranque limpio",
          details: ["No sobremesa eterna. Capas listas."],
          options: [
            { title: "Modo balance", text: "Café + algo salado y listo." },
            { title: "Modo eficiente", text: "To-go si el clima está raro." },
          ],
          tips: ["No alargar", "Capas", "Agua"],
          notes: "El día se gana con ritmo.",
        },
        {
          time: "10:15",
          type: "walk",
          title: "Old Town curado: closes + Victoria Street",
          icon: "camera",
          desc: "Closes puntuales y callecitas laterales con faroles/escaleras (mejores fotos).",
          subTitle: "Curaduría",
          details: [
            "Regla: 2–3 closes máximo.",
            "Buscar laterales: ahí sale la foto cinema.",
          ],
          options: [
            { title: "Modo cine", text: "1 close con faroles + 1 con escaleras." },
            { title: "Modo eficiente", text: "Victoria Street primero si hay mucha gente." },
          ],
          tips: ["2–3 closes", "Buscar laterales"],
          notes: "Curaduría = premium.",
        },
        {
          time: "12:45",
          type: "comida",
          title: "Lunch rápido (street o pub lunch)",
          icon: "utensils",
          desc: "45–60 min máximo para no romper el día.",
          subTitle: "Corto",
          details: ["Cerca. Evitar cruzar media ciudad."],
          options: [
            { title: "Opción A - Pub lunch", text: "Cómodo y caliente." },
            { title: "Opción B - Street", text: "Ágil y mantiene ritmo." },
          ],
          tips: ["Corto", "Cerca"],
          notes: "Lunch inteligente = golden hour disfrutado.",
        },
        {
          time: "14:30",
          type: "tiempo-libre",
          title: "Tiempo libre (shops / cafés / mini galería)",
          icon: "shopping-bag",
          desc: "Bloque flexible para cansancio acumulado. Mantenerlo ligero.",
          subTitle: "Flexible",
          details: [
            "Paseo corto, café, tiendas puntuales.",
            "Si el clima se pone feo, priorizar interior y calidez.",
          ],
          options: [
            { title: "Modo chill", text: "Café + paseo corto." },
            { title: "Modo diseño", text: "Tiendas puntuales y listo." },
          ],
          tips: ["Flexible", "Café corto"],
          notes: "Este bloque es su amortiguador.",
        },
        {
          time: "17:30",
          type: "mirador",
          title: "Calton Hill (golden hour)",
          icon: "view",
          desc: "Si hay viento duro: 20–25 min arriba y listo. Foto y bajar.",
          subTitle: "Corto y efectivo",
          details: [
            "Subir, 20–25 min fotos, bajar antes de enfriarse.",
            "Capas: arriba pega fuerte.",
          ],
          options: [
            { title: "Modo pro", text: "Fotos rápidas y bajar." },
            { title: "Modo clima", text: "Si está imposible: mirador urbano + bar." },
          ],
          tips: ["Corto", "Capas", "Foto y bajar"],
          notes: "Postal final sin desgaste.",
        },
        {
          time: "19:45",
          type: "cena",
          title: "Cena con música / pub auténtico (última noche escocesa)",
          icon: "music",
          desc: "Whisky sin maratón. Una sola parada fuerte y cierre bonito.",
          subTitle: "Auténtico",
          details: [
            "Música en vivo o pub clásico con buena lista de whisky.",
            "Regla: una sola parada fuerte. No trasnochar demasiado.",
          ],
          options: [
            { title: "Opción A - Música", text: "Vibe local y memorable." },
            { title: "Opción B - Pub clásico", text: "Whisky + cena sin complicarse." },
            { title: "Opción C - Foodie", text: "Cierre elegante si se antoja." },
          ],
          tips: ["1 parada fuerte", "Half pints/flights", "Dormir temprano"],
          notes: "Mañana hay tren: cierre bonito, no tarde.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 11 — Vie 10 Abr | Check-out + estación + tren a Londres (logística)
    // (Fisha + Osvaldo siguen en hike; no los ven hasta el día 11)
    // ------------------------------------------------------------
    abr10: {
      tag: "TREN",
      title: "Día 11 | Check-out + estación + tren a Londres (logística)",
      goal: "Cero fricción: buffer real, taxi con maletas y tren como recovery block.",
      events: [
        {
          time: "08:00",
          type: "desayuno",
          title: "Desayuno simple + cerrar maletas",
          icon: "coffee",
          desc: "Corto y útil. Hoy manda la logística.",
          subTitle: "Checklist rápido",
          details: [
            "Café + algo salado.",
            "Cargar baterías y dejar souvenirs listos en bolsa pequeña.",
          ],
          options: [
            { title: "Modo pro", text: "Desayuno corto + checklist de salida." },
            { title: "Modo to-go", text: "Si quieren salir temprano, perfecto." },
          ],
          tips: ["No alargar", "Baterías", "Agua"],
          notes: "Mañana limpia = tren premium.",
        },
        {
          time: "09:15",
          type: "transporte",
          title: "Taxi a Waverley + buffer",
          icon: "car",
          desc: "Con maletas y grupo, taxi es lo más eficiente. Buffer para baños, agua y ubicar andén.",
          subTitle: "Cero estrés",
          details: [
            "Taxi recomendado (maletas + viento).",
            "Buffer recomendado para reagrupar y ubicar vagón/asientos.",
          ],
          options: [
            { title: "Plan A - Taxi", text: "La recomendación con maletas." },
            { title: "Plan B - Público", text: "Solo si van muy ligeros y con tiempo." },
          ],
          tips: ["Taxi", "Buffer", "No correr"],
          notes: "Edimburgo castiga improvisación, sobre todo con clima.",
        },
        {
          time: "11:00",
          type: "tren",
          title: "Tren a Londres (descanso)",
          icon: "ticket",
          desc: "Recovery block: duerman 30–45 min y llegan humanos.",
          subTitle: "Descanso primero",
          details: [
            "Siesta corta 30–45 min.",
            "Luego: planear llegada y cena en Londres 2.",
          ],
          options: [
            { title: "Modo recovery", text: "Siesta + audífonos + cero culpa." },
            { title: "Modo planeación ligera", text: "Solo logística esencial, no más." },
          ],
          tips: ["Siesta", "Agua", "Audífonos"],
          notes: "Llegar con energía cambia el resto del viaje.",
        },
      ],
    },
  },
};

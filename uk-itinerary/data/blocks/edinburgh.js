export const edinburgh = {
  id: "edinburgh",
  name: "EDIMBURGO",
  color: "#0b1f17",
  hotel: "Sheraton Grand Hotel & Spa Edinburgh",
  dates: "05 Abr - 10 Abr",
  base: "West End / Princes Street (muy cómodo)",
  daysOrder: ["abr05", "abr06", "abr07", "abr08", "abr09", "abr10"],

  // (Opcional) si tu app muestra “reglas del bloque” como módulo aparte:
  rules: {
    title: "CLAVE DE LOGÍSTICA",
    subtitle: "Edimburgo premium = cero fricción con clima y maletas.",
    bullets: [
      "Con maletas / viento / lluvia: taxi (vale cada libra).",
      "En días fuertes: máximo 1 subida grande. Arthur’s Seat cuenta como subida grande.",
      "Pubs: 1 parada fuerte por noche. Mejor half pints y flights que maratón.",
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
      title: "Día 7 | Castillo + Old Town curado + museo + Leith (beer/whisky) + cena top",
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
            "Para Osvaldo: ciencia/ingeniería. Para ustedes: museografía/espacio.",
          ],
          options: [
            { title: "Ruta A (técnica)", text: "Ciencia/ingeniería para Osvaldo." },
            { title: "Ruta B (diseño)", text: "Arquitectura interior y montaje." },
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
          subTitle: "Guardar energía para lo bueno",
          details: [
            "Con grupo, taxi suele ser lo más eficiente.",
            "Leith vale por comida/pubs: no lleguen fundidos.",
          ],
          options: [
            { title: "Opción A - Taxi", text: "Recomendado: cero fricción." },
            { title: "Opción B - Público", text: "Solo si el clima está perfecto y van con tiempo." },
          ],
          tips: ["Taxi", "No inventar", "Llegar con energía"],
          notes: "Leith es el acto foodie del día.",
        },
        {
          time: "17:00",
          type: "pub",
          title: "Pub Session: Teuchters Landing (walk-in)",
          icon: "beer",
          desc:
            "Beer + whisky sin formalidad. Degustación inteligente: half pints + 1 whisky por persona (o flight para compartir).",
          subTitle: "Half pints + flights",
          details: [
            "Half pints para probar 2 estilos sin cansarse.",
            "Whisky: 1 dram por persona máximo, o flight para compartir.",
          ],
          options: [
            { title: "Modo beer", text: "Half pint cask + half pint stout/porter." },
            { title: "Modo whisky", text: "Flight compartido (mejor que 2 whiskies)." },
          ],
          tips: ["Half pints", "1 whisky máximo", "1 parada fuerte"],
          notes: "Premium = calidad, no cantidad.",
        },
        {
          time: "18:30",
          type: "cena",
          title: "Cena top (con todos)",
          icon: "utensils",
          desc: "Elijan según reserva y mood. La meta: cierre alto sin logística pesada.",
          subTitle: "Cerrar alto",
          details: [
            "Opción A: The Little Chartroom (si logran reserva).",
            "Opción B: The Kitchin (gran cena hoy, mañana más chill).",
            "Opción C: Barry Fish (casual-top mariscos).",
          ],
          options: [
            { title: "Opción A - Little Chartroom", text: "Cierre foodie relajado." },
            { title: "Opción B - Kitchin", text: "Gran cena elegante." },
            { title: "Opción C - Barry Fish", text: "Casual-top mariscos." },
          ],
          tips: ["Reservas ayudan", "No cruzar la ciudad", "Cierre corto"],
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
    // ------------------------------------------------------------
    abr07: {
      tag: "ARTHUR",
      title: "Día 8 | Arthur’s Seat + Holyrood + New Town/Stockbridge + cena/pubs",
      goal: "La gran subida con todos temprano + cerrar con vibes y cena buena sin maratón.",
      events: [
        {
          time: "07:00",
          type: "hike",
          title: "Arthur’s Seat (Plan A: temprano)",
          icon: "mountain",
          desc: "Subida + vistas. Ruta recomendada: la más amable (sin trepadas técnicas).",
          subTitle: "Subida grande del día",
          details: [
            "Ropa por capas + viento. Guantes delgados ayudan muchísimo.",
            "Regla de oro: si arriba hay viento durísimo, foto rápida y bajar.",
            "Esto cuenta como la subida grande del día: no metan otra fuerte.",
          ],
          options: [
            { title: "Modo pro", text: "Llegar temprano = menos gente y mejor luz." },
            { title: "Modo clima", text: "Si el viento es brutal: cumbre rápida y bajan." },
          ],
          tips: ["Capas", "Guantes", "Foto y bajar", "No forzar"],
          notes: "Edimburgo arriba puede ser castigo si el viento se prende.",
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
            { title: "Modo completo", text: "Desayuno sentado, sin prisa, pero sin sobremesa eterna." },
            { title: "Modo eficiente", text: "Comer bien y seguir para Holyrood." },
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
            { title: "Modo foto", text: "10–20 fotos buenas y listo." },
            { title: "Modo chill", text: "Paseo tranquilo y regreso a comer." },
          ],
          tips: ["Corto", "Sin museo pesado", "Mantener ritmo"],
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
          tips: ["Evitar filas", "Ligero-medio", "Agua"],
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
          tips: ["Suave", "No cruzar media ciudad", "Café corto"],
          notes: "Aquí se nota el lujo de balancear.",
        },
        {
          time: "17:00",
          type: "pub",
          title: "Pub Session 2 (con todos) - sin maratón",
          icon: "beer",
          desc: "Un pub con buena selección. Si quieren más local: vibe de barrio, no ultra turístico.",
          subTitle: "1 parada fuerte",
          details: [
            "Half pints para probar más sin cansarse.",
            "Flight compartido si quieren whisky.",
          ],
          options: [
            { title: "Modo cerveza", text: "2 half pints máximo por persona." },
            { title: "Modo whisky", text: "Flight compartido (smart)." },
          ],
          tips: ["Half pints", "Flight", "No maratón"],
          notes: "El objetivo es llegar perfectos a cena.",
        },
        {
          time: "19:30",
          type: "cena",
          title: "Cena (cierre con todos)",
          icon: "utensils",
          desc: "Si ayer hicieron un estilo, hoy cambien la cara para variedad.",
          subTitle: "Cerrar alto sin estrés",
          details: [
            "Si ayer fue Little Chartroom, hoy otra cara.",
            "Si ayer no fue Kitchin, hoy puede ser el gran cierre.",
          ],
          options: [
            { title: "Opción A - The Kitchin", text: "Si no fue ayer: gran cena hoy." },
            { title: "Opción B - Barry Fish", text: "Más casual, igual top." },
            { title: "Opción C - Pub auténtico", text: "Comida sólida + buena lista de whisky." },
          ],
          tips: ["No traslados largos", "Cierre corto", "Dormir manda"],
          notes: "Después de Arthur’s Seat, la noche debe ser fácil.",
        },
        {
          time: "PLAN B",
          type: "contingencia",
          title: "Si amanece horrible y Arthur’s Seat no se puede",
          icon: "cloud-rain",
          desc:
            "Cambien Arthur’s Seat por Calton Hill (corto). Arthur’s Seat queda como ventana alternativa: 06:00–08:30 del 7 o atardecer del 6 si baja el viento (solo si el grupo trae ganas).",
          subTitle: "Clima manda",
          details: [
            "Calton Hill: corto, fotogénico y menos castigo.",
            "Arthur’s Seat solo si el viento baja y el grupo está con ganas.",
          ],
          options: [
            { title: "Plan B1 - Calton", text: "Subida corta y fotos." },
            { title: "Plan B2 - Ventana Arthur", text: "Solo si el clima se abre y el grupo quiere." },
          ],
          tips: ["No pelear con el clima", "Corto", "Foto y bajar"],
          notes: "Ganar el día > insistir en el hike.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 9 — Mié 8 Abr | Split: Osvaldo+Fisha hike / resto Rosslyn + One Spa + cena casual-top
    // ------------------------------------------------------------
    abr08: {
      tag: "SPLIT",
      title: "Día 9 | Hike para ellos + Rosslyn + One Spa para el resto",
      goal: "Osvaldo + Fisha con naturaleza real, y el resto un día premium (Rosslyn + spa + cena) sin fricción.",
      events: [
        {
          time: "Temprano",
          type: "hike",
          title: "Hike Day (Osvaldo + Fisha)",
          icon: "leaf",
          desc: "Naturaleza real sin volver destruidos: ritmo constante, paradas cortas, snacks + agua.",
          subTitle: "Ritmo constante",
          details: [
            "Salida temprano con snacks + agua + capa impermeable.",
            "Regla: no volver destruidos. Mantener ritmo y descansos cortos.",
          ],
          options: [
            { title: "Modo pro", text: "Ritmo constante + paradas cortas." },
            { title: "Modo clima", text: "Si el viento está duro, ruta más corta y smart." },
          ],
          tips: ["Snacks", "Agua", "Impermeable", "No volver destruidos"],
          notes: "Este día es para disfrutar naturaleza, no para sufrirla.",
        },
        {
          time: "10:15",
          type: "visita",
          title: "Rosslyn Chapel (arquitectura brutal) - resto del grupo",
          icon: "landmark",
          desc: "Slot recomendado. Dividirse por detalle/estructura/simbolismo y luego compartir hallazgos.",
          subTitle: "Bloque pesado (arquitectura)",
          details: [
            "Reservar slot para evitar esperas.",
            "Dividirse por enfoque y compartir hallazgos al final.",
          ],
          options: [
            { title: "Modo detalle", text: "Texturas, tallas, patrones, luz." },
            { title: "Modo estructura", text: "Lectura espacial y constructiva." },
          ],
          tips: ["Slot", "No correr", "Compartir hallazgos"],
          notes: "Rosslyn es de esos lugares que valen mirarse con calma.",
        },
        {
          time: "13:30",
          type: "spa",
          title: "One Spa (Sheraton) - recovery total",
          icon: "sparkles",
          desc: "Steam/sauna/pool + lounge. Parte del plan premium.",
          subTitle: "Recuperación real",
          details: [
            "Circuito: steam/sauna/pool + lounge.",
            "Si quieren tratamiento: reserven horario. Si no, acceso general basta.",
          ],
          options: [
            { title: "Modo circuito", text: "Alternar steam/sauna + descanso." },
            { title: "Modo tratamiento", text: "Reservar y llegar con buffer." },
          ],
          tips: ["Hidratación", "No prisa", "Reservar si tratamiento"],
          notes: "Este bloque hace que el resto del viaje se sienta ligero.",
        },
        {
          time: "19:30",
          type: "cena",
          title: "Cena casual-top (cerca o Leith)",
          icon: "utensils",
          desc: "Algo rico sin presión de reserva para no depender del regreso del hike.",
          subTitle: "Fácil y bueno",
          details: [
            "Cerca del hotel o en Leith, sin cruzar la ciudad.",
            "Cierre corto: mañana Old Town + golden hour.",
          ],
          options: [
            { title: "Plan A - Cerca", text: "Casual-top cerca del Sheraton." },
            { title: "Plan B - Leith", text: "Si les queda cómodo y sin logística pesada." },
          ],
          tips: ["Sin presión", "Cerca", "Cierre corto"],
          notes: "Hoy manda la flexibilidad.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 10 — Jue 9 Abr | Old Town fino + Victoria St/Grassmarket + golden hour + noche escocesa
    // ------------------------------------------------------------
    abr09: {
      tag: "OLD TOWN",
      title: "Día 10 | Old Town fino + Victoria St + Calton golden hour + noche escocesa",
      goal: "Old Town curado y fotogénico (no turístico pesado), cerrar con Calton en golden hour y una noche auténtica sin maratón.",
      events: [
        {
          time: "09:00",
          type: "desayuno",
          title: "Desayuno",
          icon: "coffee",
          desc: "Balanceado y sin filas largas. Hoy manda la luz de tarde.",
          subTitle: "Arranque limpio",
          details: [
            "No sobremesa eterna.",
            "Capas: el viento aparece cuando menos esperas.",
          ],
          options: [
            { title: "Modo balance", text: "Café + algo salado y listo." },
            { title: "Modo eficiente", text: "To-go si el clima está raro." },
          ],
          tips: ["No alargar", "Capas", "Agua"],
          notes: "El día se gana con ritmo, no con desayuno eterno.",
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
            { title: "Modo cine", text: "1 close con faroles + 1 con escaleras y listo." },
            { title: "Modo eficiente", text: "Victoria Street primero si hay mucha gente." },
          ],
          tips: ["2–3 closes", "Buscar laterales", "Mantener ritmo"],
          notes: "Menos = más. Old Town se siente premium con curaduría.",
        },
        {
          time: "12:45",
          type: "comida",
          title: "Lunch rápido (street o pub lunch)",
          icon: "utensils",
          desc: "45–60 min máximo para no romper el día.",
          subTitle: "Corto",
          details: [
            "Street o pub lunch cercano.",
            "Evitar cruzar media ciudad.",
          ],
          options: [
            { title: "Opción A - Pub lunch", text: "Cómodo y caliente." },
            { title: "Opción B - Street", text: "Más ágil y mantiene el ritmo." },
          ],
          tips: ["Corto", "Cerca", "Agua"],
          notes: "Lunch inteligente = golden hour disfrutado.",
        },
        {
          time: "14:30",
          type: "tiempo-libre",
          title: "Tiempo libre (shops / cafés / mini galería)",
          icon: "shopping-bag",
          desc: "Bloque flexible: aquí se nota el cansancio acumulado. Mantenerlo ligero.",
          subTitle: "Flexible",
          details: [
            "Paseo corto, café, tiendas puntuales.",
            "Si el clima se pone feo, prioricen interior y calidez.",
          ],
          options: [
            { title: "Modo chill", text: "Café + paseo corto." },
            { title: "Modo diseño", text: "Tiendas puntuales y listo." },
          ],
          tips: ["Flexible", "No cruzar la ciudad", "Café corto"],
          notes: "Este bloque es su amortiguador de cansancio.",
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
            { title: "Modo pro", text: "Llegar con tiempo y hacer fotos rápidas." },
            { title: "Modo clima", text: "Si está imposible: mirador urbano + bar." },
          ],
          tips: ["Corto", "Capas", "Foto y bajar"],
          notes: "Calton bien hecho = postal final sin desgaste.",
        },
        {
          time: "19:45",
          type: "cena",
          title: "Cena con música / pub auténtico (última noche escocesa)",
          icon: "music",
          desc: "Whisky sin maratón. Una sola parada fuerte y cierre bonito.",
          subTitle: "Auténtico",
          details: [
            "Ideal: música en vivo o pub clásico con buena lista de whisky.",
            "Regla: una sola parada fuerte. No trasnochar demasiado.",
          ],
          options: [
            { title: "Opción A - Música en vivo", text: "Vibe local y memorable." },
            { title: "Opción B - Pub clásico", text: "Whisky + cena sin complicarse." },
            { title: "Opción C - Foodie", text: "Cierre elegante si el grupo lo pide." },
          ],
          tips: ["1 parada fuerte", "Half pints/flights", "Dormir temprano"],
          notes: "Mañana hay tren: cierre bonito, no tarde.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 11 — Vie 10 Abr | Check-out + estación + tren a Londres (logística)
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

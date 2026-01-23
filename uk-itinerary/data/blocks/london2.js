export const london2 = {
  id: "london2",
  name: "LONDRES II",
  color: "#1c1917",
  hotel: "London Marriott Hotel County Hall",
  dates: "10 Abr - 14 Abr",
  base: "South Bank / Westminster (caminable, fotogénico, cero fricción)",
  daysOrder: ["abr10", "abr11", "abr12", "abr13", "abr14"],

  rules: {
    title: "PROTOCOLOS DE OPERACIÓN",
    subtitle: "Pequeñas reglas = Londres sin fricción.",
    bullets: [
      "Tube + contactless como default.",
      "Taxi/Uber cuando haya lluvia/viento, cansancio o prisa (vale la pena).",
      "En grupo 5–6: punto de encuentro fijo en mercados/estaciones (si alguien se pierde, nos vemos en X).",
      "Regla de energía: máximo 1 bloque pesado por día.",
    ],
  },

  days: {
    // ------------------------------------------------------------
    // DÍA 11 — Vie 10 Abr | Tren desde Edimburgo + check-in + South Bank welcome back
    // ------------------------------------------------------------
    abr10: {
      tag: "WELCOME BACK",
      title: "Día 11 | Llegada a Londres + South Bank Essentials + cena cerca",
      goal: "Llegar sin estrés, estirar piernas con postales brutales y cenar sin cruzar la ciudad.",
      events: [
        {
          time: "15:10",
          type: "llegada",
          title: "Llegada a London King’s Cross",
          icon: "train",
          desc: "Objetivo: salir rápido, reagrupar y escoger traslado sin fricción hacia County Hall.",
          subTitle: "Reagrupar antes de moverse",
          details: [
            "Punto de encuentro fijo: elijan 1 spot claro al salir (por si alguien se separa).",
            "Baño/agua rápido si lo necesitan antes del traslado.",
          ],
          options: [
            { title: "Opción A - Taxi/Uber", text: "La más fácil para grupo y maletas (cero fricción)." },
            { title: "Opción B - Tube", text: "Solo si van con energía y el clima está amable." },
          ],
          tips: ["Reagrupar", "Punto fijo", "Taxi si llueve/viento"],
          notes: "Con cansancio post-tren, taxi suele ser la mejor compra del día.",
        },

        {
          time: "15:10",
          type: "transporte",
          title: "Traslado a County Hall + check-in",
          icon: "car",
          desc: "Llegar, dejar cosas y hacer reset rápido. South Bank es caminable y súper fotogénico.",
          subTitle: "Cero fricción",
          details: [
            "Opción A: Taxi/Uber directo (recomendado para grupo).",
            "Opción B: Tube y caminar (solo si están frescos).",
          ],
          options: [
            { title: "Plan A - Taxi directo", text: "Más simple y rápido para grupo." },
            { title: "Plan B - Tube", text: "Funciona, pero suma fricción si van con maletas." },
          ],
          tips: ["Taxi con maletas", "No inventar transbordos", "Llegar y resetear"],
          notes: "La base South Bank / Westminster se disfruta más cuando llegan ligeros.",
        },

        {
          time: "16:15",
          type: "hotel",
          title: "Reset en hotel",
          icon: "home",
          desc: "Baño, cambio y recarga rápida. Si tienen lounge/beneficios, aprovechen para agua/café.",
          subTitle: "15–45 min",
          details: [
            "Baño y cambio rápido (capas según clima).",
            "Power bank / baterías listas.",
          ],
          options: [
            { title: "Modo rápido", text: "15–25 min y salen." },
            { title: "Modo lounge", text: "Agua/café y a caminar con energía." },
          ],
          tips: ["Baterías", "Capas", "No alargar"],
          notes: "Este reset hace que el walk se sienta delicioso, no pesado.",
        },

        {
          time: "17:15",
          type: "walk",
          title: "South Bank Essentials (walk suave, máximo payoff)",
          icon: "camera",
          desc: "Ruta caminable perfecta: County Hall → London Eye → Jubilee Gardens → Westminster Bridge viewpoint (Big Ben).",
          subTitle: "Cero esfuerzo, postales brutales",
          details: [
            "Tip foto: al atardecer el río da reflejos muy buenos.",
            "Hidden gem opcional (15 min): Leake Street Tunnel (graffiti) y vuelven.",
          ],
          options: [
            { title: "Ruta base", text: "South Bank postales + Big Ben viewpoint." },
            { title: "Extra urbano", text: "Leake Street Tunnel (corto) si quieren algo distinto." },
          ],
          tips: ["Golden hour", "No alargar", "Corto y top"],
          notes: "Este paseo reengancha el mood Londres sin cansarlos.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena cerca (sin cruzar la ciudad)",
          icon: "utensils",
          desc: "Cena rica y cercana. La regla: logística cero.",
          subTitle: "Cerrar bonito",
          details: [
            "Opción A: Skylon (vistas + mood perfecto).",
            "Opción B: Sea Containers (moderno, bar bonito).",
            "Opción C: algo simple en South Bank si están cansados.",
          ],
          options: [
            { title: "Opción A - Skylon", text: "Vistas y cierre perfecto." },
            { title: "Opción B - Sea Containers", text: "Moderno, bar bonito, vibra cool." },
            { title: "Opción C - Simple", text: "Cerca y a dormir." },
          ],
          tips: ["Cerca", "Reservar si pueden", "No traslados"],
          notes: "Mañana hay show largo: hoy conviene dormir bien.",
        },

        {
          time: "21:30",
          type: "bar",
          title: "Cierre corto (1 drink máximo)",
          icon: "beer",
          desc: "Una sola parada corta o directo al hotel. Mañana el teatro manda.",
          subTitle: "Sin maratón",
          details: ["Si ya están cansados: directo a dormir sin culpa."],
          options: [
            { title: "Modo drink", text: "1 cocktail y salida." },
            { title: "Modo cama", text: "Directo. Recovery real." },
          ],
          tips: ["1 drink", "Dormir manda"],
          notes: "La energía de mañana vale más que otra ronda hoy.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 12 — Sáb 11 Abr | Harry Potter and the Cursed Child (Parte 1 + Parte 2)
    // ------------------------------------------------------------
    abr11: {
      tag: "SHOW",
      title: "Día 12 | Cursed Child (Parte 1 + Parte 2) — logística quirúrgica",
      goal: "Llegar con buffer, comer perfecto entre funciones y cero fatiga.",
      events: [
        {
          time: "09:00",
          type: "desayuno",
          title: "Desayuno cerca del hotel (ligero)",
          icon: "coffee",
          desc: "Hoy es teatro largo. No se vayan pesados.",
          subTitle: "Ligero y funcional",
          details: ["Café + algo pequeño. Guardar hambre para la comida entre partes."],
          options: [
            { title: "Modo ligero", text: "Café + pastry y listo." },
            { title: "Modo balance", text: "Algo salado pequeño para aguantar." },
          ],
          tips: ["No pesado", "Agua", "Capas"],
          notes: "Hoy gana el que llega con energía estable.",
        },

        {
          time: "10:30",
          type: "paseo",
          title: "Paseo corto pre-teatro (elige 1 zona)",
          icon: "map",
          desc: "Todo caminable/Tube fácil. Elijan solo 1 zona para no cansarse.",
          subTitle: "Una sola zona",
          details: [
            "Opción A: Covent Garden + Seven Dials (tiendas + vibra).",
            "Opción B: Soho (calles, discos, cafés).",
            "Opción C (si llueve): Somerset House (vibes) + café.",
          ],
          options: [
            { title: "Opción A - Covent/Seven Dials", text: "Vibe bonita, muy caminable." },
            { title: "Opción B - Soho", text: "Más urbano, discos y cafés." },
            { title: "Opción C - Somerset (lluvia)", text: "Plan interior-ish con café." },
          ],
          tips: ["Una zona", "No maratón", "Guardar energía"],
          notes: "Si hacen 2 zonas, el show se siente eterno.",
        },

        {
          time: "12:45",
          type: "logística",
          title: "Llegada al área del teatro (buffer)",
          icon: "ticket",
          desc: "Meta: llegar 35–45 min antes para baños + entrar sin correr.",
          subTitle: "Buffer pro",
          details: ["Ubicar entradas, baños y punto de encuentro del grupo."],
          options: [
            { title: "Plan A", text: "Llegar 45 min antes (ideal)." },
            { title: "Plan B", text: "Mínimo 35 min antes (no menos)." },
          ],
          tips: ["Baños", "Punto de encuentro", "No correr"],
          notes: "Este buffer evita el único drama del día.",
        },

        {
          time: "14:00",
          type: "evento",
          title: "Cursed Child — Parte 1 (fijo)",
          icon: "sparkles",
          desc: "Show. Disfruten y no piensen en nada más.",
          subTitle: "Evento fijo",
          details: ["Modo pro: baño antes de entrar y listo."],
          options: [
            { title: "Tip", text: "Silenciar notificaciones y go." },
            { title: "Tip 2", text: "Si se separan: punto fijo al salir." },
          ],
          tips: ["Baño antes", "Punto fijo"],
          notes: "Entre partes: cena rápida manda.",
        },

        {
          time: "16:50",
          type: "cena",
          title: "Cena temprana entre partes (5–12 min del Palace Theatre)",
          icon: "utensils",
          desc: "Reservable, servicio rápido y no muy pesada. Hoy la cena es táctica.",
          subTitle: "Quick but good",
          details: [
            "Opción A: Bancone (pasta top).",
            "Opción B: Flat Iron (carne eficiente).",
            "Opción C: quick but good cerca (si no hay reserva).",
            "Tip: pidan platos que salen rápido, eviten menú largo 3 tiempos.",
          ],
          options: [
            { title: "Opción A - Bancone", text: "Pasta top, buen ritmo." },
            { title: "Opción B - Flat Iron", text: "Eficiente y rico." },
            { title: "Opción C - Cercano", text: "Lo importante es velocidad + calidad." },
          ],
          tips: ["Servicio rápido", "No pesado", "Reservar si pueden"],
          notes: "Comer pesado aquí arruina la Parte 2.",
        },

        {
          time: "19:00",
          type: "evento",
          title: "Cursed Child — Parte 2 (fijo)",
          icon: "sparkles",
          desc: "Show. Mantener energía estable y disfrutar.",
          subTitle: "Evento fijo",
          details: ["Si están somnolientos: agua y café antes de entrar."],
          options: [
            { title: "Tip", text: "Café/agua antes de entrar si hace falta." },
            { title: "Tip 2", text: "Punto fijo al salir para reagrupar." },
          ],
          tips: ["Agua", "Punto fijo"],
          notes: "Post show: corto o cama.",
        },

        {
          time: "21:45",
          type: "bar",
          title: "Post show (corto)",
          icon: "moon",
          desc: "1 cocktail o postre breve y al hotel. Si están reventados: directo a dormir.",
          subTitle: "Cierre corto",
          details: ["Regla: mañana hay sports bar, no conviene trasnochar."],
          options: [
            { title: "Modo cocktail", text: "1 ronda y salida." },
            { title: "Modo cama", text: "Directo. Mañana lo agradecen." },
          ],
          tips: ["Corto", "Dormir manda"],
          notes: "El lujo hoy es terminar con energía.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 13 — Dom 12 Abr | Mercado foodie + Sports bar fútbol + cena sólida
    // ------------------------------------------------------------
    abr12: {
      tag: "DOMINGO",
      title: "Día 13 | Mercado foodie + sports bar fútbol + cena en grupo",
      goal: "Domingo perfecto: mercado con vibe real + partido con ambiente y cena sin drama.",
      events: [
        {
          time: "09:30",
          type: "desayuno",
          title: "Desayuno ligero",
          icon: "coffee",
          desc: "Para llegar con hambre al mercado. Hoy la comida fuerte es en Maltby.",
          subTitle: "Ligero",
          details: ["Café + algo pequeño. No se llenen."],
          options: [
            { title: "Modo ligero", text: "Café + pastry y listo." },
            { title: "Modo balance", text: "Algo salado pequeño." },
          ],
          tips: ["Llegar con hambre", "Agua"],
          notes: "El mercado se disfruta más cuando prueban de todo.",
        },

        {
          time: "11:00",
          type: "mercado",
          title: "Maltby Street Market (Bermondsey)",
          icon: "shop",
          desc: "Compacto bajo arcos ferroviarios, muy buen London vibe.",
          subTitle: "Estrategia pro-grupo: parejas + compartir",
          details: [
            "Se dividen en parejas: cada pareja compra 1 cosa y se juntan para compartir.",
            "Qué probar: 1 salado contundente + 1 comfort (frito/ahumado) + 1 dulce + café bueno.",
          ],
          options: [
            { title: "Modo pro", text: "Parejas compran y luego comparten todo." },
            { title: "Modo simple", text: "Cada quien compra 1 cosa y se arma picnic corto." },
          ],
          tips: ["Parejas", "Compartir", "No empacharse"],
          notes: "Esto se siente súper London sin el caos de mercados enormes.",
        },

        {
          time: "13:00",
          type: "walk",
          title: "Regreso suave hacia el hotel / río",
          icon: "map",
          desc: "Bajar ritmo, caminar bonito. Si llueve: taxi.",
          subTitle: "Reset",
          details: ["Si el clima castiga, taxi vale la pena."],
          options: [
            { title: "Plan A - Walk", text: "Si está lindo, suma vibes." },
            { title: "Plan B - Taxi", text: "Si llueve/viento, cero fricción." },
          ],
          tips: ["Taxi si llueve", "No mojarse"],
          notes: "Llegar al sports bar con energía.",
        },

        {
          time: "15:00",
          type: "sports",
          title: "SPORTS BAR (ambiente máximo)",
          icon: "tv",
          desc:
            "Recomendación principal: The Famous Three Kings. Muchas pantallas y vibra de partido real.",
          subTitle: "Llegar 60–75 min antes del kickoff",
          details: [
            "Timing: llegar 60–75 min antes del partido que quieran ver para asegurar mesa buena.",
            "Plan B si está a reventar: llegar temprano igual y quedarse, o moverse a otro sports bar grande.",
            "Qué pedir: 1 pint lager/Guinness + 1 pint ale si les late + pub food para compartir.",
            "Whisky: 1 ronda pequeña máximo (no maratón).",
          ],
          options: [
            { title: "Plan A - Famous Three Kings", text: "Ambiente top, muchas pantallas." },
            { title: "Plan B - Alterno grande", text: "Si está lleno, moverse temprano a otro." },
          ],
          tips: ["Llegar temprano", "Mesa buena", "Pub food para compartir", "1 ronda whisky máximo"],
          notes: "El truco es timing. Llegar tarde = estar parados o sin vista.",
        },

        {
          time: "20:00",
          type: "cena",
          title: "Cena (reservar recomendado)",
          icon: "utensils",
          desc: "Cierre sólido en grupo. Elegir según energía y logística.",
          subTitle: "Cierre rico",
          details: [
            "Opción A: Blacklock (perfecto para grupo).",
            "Opción B: Bancone (si no lo hicieron el 11).",
            "Opción C: cerca del hotel si ya vienen cansados.",
          ],
          options: [
            { title: "Opción A - Blacklock", text: "Grupo feliz, cierre redondo." },
            { title: "Opción B - Bancone", text: "Pasta top si faltó." },
            { title: "Opción C - Cerca", text: "Cero logística y a dormir." },
          ],
          tips: ["Reservar", "Cerca si están cansados"],
          notes: "Mañana toca Studios: hoy conviene dormir decente.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 14 — Lun 13 Abr | Warner Bros Studio Tour (entrada 12:00)
    // ------------------------------------------------------------
    abr13: {
      tag: "STUDIOS",
      title: "Día 14 | Warner Bros Studio Tour (12:00) + regreso sin estrés",
      goal: "Llegar con margen al slot, disfrutar completo, tienda al final y regresar fácil.",
      events: [
        {
          time: "08:30",
          type: "desayuno",
          title: "Desayuno simple (no pesado)",
          icon: "coffee",
          desc: "Hoy el tour es largo. Mejor arrancar ligero.",
          subTitle: "Ligero",
          details: ["Café + algo pequeño. Snack extra para el camino."],
          options: [
            { title: "Modo ligero", text: "Café + pastry." },
            { title: "Modo balance", text: "Algo salado pequeño." },
          ],
          tips: ["No pesado", "Snack", "Agua"],
          notes: "Eviten llegar con hambre al tour.",
        },

        {
          time: "09:45",
          type: "salida",
          title: "Salida del hotel (buffer inteligente)",
          icon: "map",
          desc: "Ruta recomendada: County Hall → Waterloo → Northern line → Euston.",
          subTitle: "Mantenerse juntos",
          details: [
            "En grupo: estaciones separan fácil. Punto fijo si alguien se pierde.",
            "Objetivo: llegar a Euston con margen real.",
          ],
          options: [
            { title: "Plan A", text: "Ruta recomendada y buffer." },
            { title: "Plan B", text: "Si llueve fuerte: taxi a estación clave y simplificar." },
          ],
          tips: ["Punto fijo", "Buffer", "Contactless"],
          notes: "Hoy la logística manda. No improvisen.",
        },

        {
          time: "10:45",
          type: "tren",
          title: "Tren Euston → Watford Junction (~20 min)",
          icon: "ticket",
          desc: "Tramo rápido. Mantenerse juntos.",
          subTitle: "Sin separarse",
          details: ["Confirmar andén y vagón con tiempo. Baño antes si hace falta."],
          options: [
            { title: "Modo pro", text: "Andén y vagón listos antes del anuncio final." },
            { title: "Modo grupo", text: "Subir juntos y sentarse cerca si se puede." },
          ],
          tips: ["No separarse", "Tickets listos", "Agua"],
          notes: "Estación + grupo = punto de encuentro fijo siempre.",
        },

        {
          time: "11:15",
          type: "shuttle",
          title: "Shuttle del parque / traslado final a Studios",
          icon: "bus",
          desc: "Meta: estar en la entrada 11:45 para entrar sin prisas.",
          subTitle: "Llegar 11:45",
          details: ["Si se separan: punto fijo: entrada principal 11:45."],
          options: [
            { title: "Plan A", text: "Shuttle y directo." },
            { title: "Plan B", text: "Taxi local si algo sale raro (solo si hace falta)." },
          ],
          tips: ["11:45 en entrada", "Punto fijo"],
          notes: "Entrar sin prisa cambia el tour.",
        },

        {
          time: "12:00",
          type: "evento",
          title: "Studio Tour (12:00–16:30+)",
          icon: "sparkles",
          desc: "No corran. Mejor saborearlo. Coman algo dentro cuando les pegue hambre.",
          subTitle: "Disfrutar completo",
          details: [
            "Comer dentro cuando se necesite: si aguantan hambre, se cae la energía.",
            "Tienda al final: definan presupuesto rápido para no eternizarse.",
          ],
          options: [
            { title: "Modo disfrute", text: "Sin prisa. Vale más que ‘ver todo rápido’." },
            { title: "Modo presupuesto", text: "Definir tope antes de entrar a tienda." },
          ],
          tips: ["No correr", "Snack dentro", "Presupuesto tienda"],
          notes: "Este día se arruina si lo hacen con prisa.",
        },

        {
          time: "17:00",
          type: "regreso",
          title: "Regreso a Londres + hotel",
          icon: "train",
          desc: "Volver sin estrés y resetear antes de cenar.",
          subTitle: "Recovery",
          details: ["Si llueve o están cansados: taxi al final vale la pena."],
          options: [
            { title: "Plan A", text: "Regreso normal y reset." },
            { title: "Plan B", text: "Taxi si vienen rotos." },
          ],
          tips: ["Taxi si cansancio", "Reset"],
          notes: "Cenar cerca hoy es lo más smart.",
        },

        {
          time: "20:00",
          type: "cena",
          title: "Cena tranquila cerca del hotel",
          icon: "utensils",
          desc: "Skylon (seguro, bonito) o algo pegado para cero logística.",
          subTitle: "Cero fricción",
          details: [
            "Mantenerla cerca: hoy ya fue largo.",
            "Cierre corto y a dormir.",
          ],
          options: [
            { title: "Opción A - Skylon", text: "Seguro y bonito." },
            { title: "Opción B - Pegado", text: "Cero traslados y listo." },
          ],
          tips: ["Cerca", "Cierre corto"],
          notes: "Mañana es día final + LHR: dormir ayuda.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 15 — Mar 14 Abr | Primavera + fotos + compras + LHR (vuelo 22:30)
    // ------------------------------------------------------------
    abr14: {
      tag: "LHR",
      title: "Día 15 | Día final + fotos + compras + Heathrow sin estrés",
      goal: "Día top sin cargar maletas y salida a Heathrow con margen premium.",
      events: [
        {
          time: "09:30",
          type: "desayuno",
          title: "Desayuno final (bonito)",
          icon: "coffee",
          desc: "Algo clásico y tranquilo. Hoy se trata de cerrar bien.",
          subTitle: "Último desayuno",
          details: ["Ideal sin filas enormes. Mantenerlo agradable pero no eterno."],
          options: [
            { title: "Modo bonito", text: "Sentarse y cerrar el viaje con calma." },
            { title: "Modo eficiente", text: "Desayuno corto si quieren maximizar la mañana." },
          ],
          tips: ["No eterno", "Capas"],
          notes: "Hoy la logística de maletas manda.",
        },

        {
          time: "11:00",
          type: "hotel",
          title: "Check-out + maletas a concierge (crítico)",
          icon: "home",
          desc: "Dejar maletas guardadas para que el día fluya sin cargar nada.",
          subTitle: "Clave del día",
          details: ["Confirmar con concierge y listo. Cero peso, cero fricción."],
          options: [
            { title: "Checklist", text: "Pasaportes, cargadores, compras y souvenirs ordenados." },
            { title: "Tip pro", text: "Dejar una bolsa pequeña para el día." },
          ],
          tips: ["Maletas guardadas", "Bolsa pequeña"],
          notes: "Esto hace el día 10x mejor.",
        },

        {
          time: "11:30",
          type: "zona",
          title: "Plan de día (elige 1 zona estrella)",
          icon: "map",
          desc: "Una sola zona para que se sienta premium. Dividirse y reagrupar funciona perfecto.",
          subTitle: "1 zona = 0 fricción",
          details: [
            "Opción A (más recomendable): Notting Hill + Portobello (fachadas, calles bonitas, compras ligeras).",
            "Opción B (distinto y calmado): Greenwich (day trip light).",
            "Opción C (botánica top): Kew Gardens (más lejos, solo si aman jardines).",
          ],
          options: [
            { title: "Opción A - Notting Hill/Portobello", text: "Fotos + vibe + compras fáciles." },
            { title: "Opción B - Greenwich", text: "Se siente distinto al centro." },
            { title: "Opción C - Kew Gardens", text: "Jardines top, pero más lejos." },
          ],
          tips: ["Una sola zona", "Reagrupar en punto fijo", "No maratón"],
          notes: "Dividirse y juntarse en X hace que el grupo fluya.",
        },

        {
          time: "15:30",
          type: "reset",
          title: "Regreso al hotel + reset",
          icon: "home",
          desc: "Recoger maletas, baño/cambio si hace falta y snack antes de salir (muy recomendado).",
          subTitle: "Preparación LHR",
          details: [
            "Recoger maletas.",
            "Baño/cambio rápido.",
            "Snack para no llegar con hambre al aeropuerto.",
          ],
          options: [
            { title: "Modo pro", text: "Snack + agua listos para el camino." },
            { title: "Modo rápido", text: "Cambio rápido y salida." },
          ],
          tips: ["Snack", "Agua", "Baterías"],
          notes: "Este reset es lo que evita estrés en LHR.",
        },

        {
          time: "18:00",
          type: "aeropuerto",
          title: "Salida a Heathrow (recomendado 18:00)",
          icon: "plane",
          desc: "Meta: llegar 19:00–19:30 para margen premium (tráfico, terminal, seguridad, imprevistos).",
          subTitle: "Margen real",
          details: [
            "Opción 1: Taxi/Uber directo (más fácil en grupo, cero transbordos).",
            "Opción 2: Tube a Paddington + Heathrow Express (rápida y confiable).",
            "Opción 3: Tube hasta Heathrow (más lenta y más fricción con maletas).",
          ],
          options: [
            { title: "Opción 1 - Taxi directo", text: "Cero transbordos con maletas." },
            { title: "Opción 2 - Heathrow Express", text: "Menos dependencia de tráfico." },
            { title: "Opción 3 - Tube", text: "Más fricción, pero funciona." },
          ],
          tips: ["Salir 18:00", "Llegar 19:00–19:30", "No improvisar"],
          notes: "Con vuelo 22:30, este margen les da un cierre sin estrés.",
        },
      ],
    },
  },
};

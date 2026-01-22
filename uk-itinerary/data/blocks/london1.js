export const london1 = {
  id: "london1",
  name: "LONDRES I",
  color: "#111418",
  hotel: "Sheraton Grand London Park Lane",
  dates: "31 Mar - 04 Abr",
  base: "Mayfair / Green Park",
  daysOrder: ["mar31", "abr01", "abr02", "abr03", "abr04"],

  days: {
    // ------------------------------------------------------------
    // DÍA 1 — Mar 31 | Llegada + Wembley
    // ------------------------------------------------------------
    mar31: {
      tag: "LLEGADA",
      title: "Día 1 | Llegada + Wembley",
      goal: "Aterrizar sin estrés, reset rápido, llegar a Wembley con margen y volver sin drama.",
      events: [
        {
          time: "12:10",
          type: "logística",
          title: "Llegada a LHR + migración + maletas + salida",
          icon: "plane",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20glimpse%20of%20Terminal%205%2C%20Heathrow%2C%20Sept.%202010%20-%20Flickr%20-%20PhillipC.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/423H5.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Airside%20at%20Heathrow%20T5%20-%20geograph.org.uk%20-%202364399.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Heathrow%20Terminal%205%20station%20geograph-2554324-by-Ben-Brooksbank.jpg?width=1600",
          ],
          desc: "Salida eficiente del aeropuerto sin dispersarse.",
          subTitle: "Checklist + punto de encuentro + snack inteligente",
          details: [
            "Ventana estimada: 12:10–14:15 (según filas y equipaje).",
            "Antes de bajar del avión: pasaporte + contactless + batería + ticket del partido.",
            "Punto de encuentro si se separan: Arrivals / salida de baggage claim.",
            "eSIM/SIM: mejor hacerlo después o ya en el hotel para no atorarse.",
          ],
          options: [
            {
              title: "Snack inteligente (si hace falta)",
              text: "Algo salado + agua. Les salva el humor antes del Tube.",
            },
            {
              title: "Modo anti-caos (grupo 4–6)",
              text: "Definan el punto de reunión ANTES de entrar a migración.",
            },
          ],
          tips: ["Batería arriba", "Contactless listo", "No se dispersen", "Agua primero"],
          notes:
            "El día 1 se gana con logística. Si salen fluidos de LHR, el resto del día se siente fácil.",
        },

        {
          time: "14:15",
          type: "transporte",
          title: "Heathrow → Hotel (elige según energía y equipaje)",
          icon: "train",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/London%20Underground%20sign%20-%20geograph.org.uk%20-%201720911.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/London%20Underground%20roundel%20at%20Green%20Park%20station%20-%20geograph.org.uk%20-%201425617.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Park%20London%20%28287692870%29.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Taxi%20rank%20in%20London%20-%20geograph.org.uk%20-%201676828.jpg?width=1600",
          ],
          desc: "Llegar sin sufrir. Lo importante es conservar energía.",
          subTitle: "Tube vs Elizabeth Line vs Taxi/Uber",
          details: [
            "Ventana sugerida: 14:15–15:00.",
            "Opción A (más simple): Piccadilly Line → Green Park (ojo escaleras/estaciones llenas).",
            "Opción B (más cómoda): Elizabeth Line + cambio (según ruta final).",
            "Opción C (cero fricción): Taxi/Uber puerta a puerta (ideal si llueve o van cargados).",
          ],
          options: [
            { title: "Opción A — Tube", text: "Directo y costo eficiente. Puede haber escaleras y crowd." },
            { title: "Opción B — Elizabeth Line", text: "Más suave/rápida en tramos. Requiere cambio según ruta." },
            { title: "Opción C — Taxi/Uber", text: "Puerta a puerta. Perfecto con maletas grandes y cansancio." },
          ],
          tips: ["Con maletas grandes: Taxi gana", "Contactless en Tube", "No se claven en mapas"],
          notes:
            "Tip clave: si el grupo viene cansado, pagar comodidad hoy evita que el día se rompa.",
        },

        {
          time: "15:00",
          type: "hotel",
          title: "Check-in + reset de 90 minutos",
          icon: "hotel",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sheraton%20Grand%20London%20Park%20Lane%20-%20geograph.org.uk%20-%201617594.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Park%20Lane%20London%20-%20geograph.org.uk%20-%201423812.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Park%20%28London%29%20-%20geograph.org.uk%20-%20660743.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mayfair%20London%20street%20-%20geograph.org.uk%20-%201487884.jpg?width=1600",
          ],
          desc: "Ducha rápida + capas + power bank + snack. Salen con energía.",
          subTitle: "Rutina express para no perder el día",
          details: [
            "Ventana sugerida: 15:00–16:30.",
            "Dejar maletas + baño + ducha rápida (máx 10–12 min).",
            "Cambio de ropa match-ready (capas).",
            "Power bank + agua + snack pequeño. Lounge si aplica.",
          ],
          options: [
            { title: "Modo eficiente", text: "Nada de acostarse. Solo reset y salida." },
            { title: "Modo lounge (si hay)", text: "Snack + bebida sin salir, y listo." },
          ],
          tips: ["Capas", "Power bank", "Agua en mochila", "No se acuesten mucho"],
          notes:
            "Este reset define el ritmo del viaje. 90 min bien usados = día salvado.",
        },

        {
          time: "16:30",
          type: "paseo",
          title: "Paseo suave por Mayfair (sin caminar demasiado)",
          icon: "map",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Burlington%20Arcade%2C%20London%2C%20UK%20-%20Diliff.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Piccadilly%2C%20London%20-%20geograph.org.uk%20-%201132972.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mayfair%20London%20street%20-%20geograph.org.uk%20-%201487884.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Park%20%28London%29%20-%20geograph.org.uk%20-%20660743.jpg?width=1600",
          ],
          desc: "Primer Londres bonito sin desgaste.",
          subTitle: "Green Park → Piccadilly → Burlington Arcade → regreso",
          details: [
            "Ventana sugerida: 16:30–17:30.",
            "Ruta corta, elegante y cero desgaste.",
            "Hidden gems: callecitas de Mayfair (fachadas/puertas/vitrinas).",
            "Plan B lluvia: arcades + interiores y regreso temprano.",
          ],
          options: [
            { title: "Opción A — Ruta corta exacta", text: "Green Park → Piccadilly → Burlington Arcade → regreso." },
            { title: "Opción B — 15 min extra", text: "Callecitas tranquilas de Mayfair + café rápido." },
          ],
          tips: ["Fotos rápidas", "No alargar sin querer", "Si llueve: arcades"],
          notes:
            "Este paseo es perfecto para ‘reset mental’ y fotos top sin cansarse.",
        },

        {
          time: "17:30",
          type: "comida",
          title: "Pre-match snack (muy recomendado)",
          icon: "utensils",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mayfair%20London%20street%20-%20geograph.org.uk%20-%201487884.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Piccadilly%2C%20London%20-%20geograph.org.uk%20-%201132972.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Park%20London%20%28287692870%29.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Park%20Lane%20London%20-%20geograph.org.uk%20-%201423812.jpg?width=1600",
          ],
          desc: "Entrar al estadio sin hambre y sin depender de filas.",
          subTitle: "Salado + carbo (día largo)",
          details: [
            "Ventana sugerida: 17:30–18:10.",
            "Opción pub light: 1 pinta + pie/fishcake/sándwich.",
            "Opción rápida: sándwich + papas + café/tea.",
            "Opción nice pero rápida: brasserie casual (reservar si se sientan).",
          ],
          options: [
            { title: "Opción A — Pub light", text: "1 pinta + algo salado (sin llenarse de más)." },
            { title: "Opción B — Rápido", text: "Sándwich + papas + té/café y listo." },
            { title: "Opción C — Brasserie", text: "Algo rico pero rápido, sin traslados largos." },
          ],
          tips: ["Eviten comida pesada", "Agua", "No llegar con hambre al estadio"],
          notes:
            "Si comen algo aquí, Wembley se disfruta más y hay menos fricción de grupo.",
        },

        {
          time: "17:45",
          type: "transporte",
          title: "Traslado a Wembley (con margen)",
          icon: "train",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Main%20entrance%20to%20Wembley%20Park%20tube%20station%20-%20geograph.org.uk%20-%202880275.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Wembley%20Park%20station%20entrance%20-%20geograph.org.uk%20-%201422046.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Wembley%20Stadium%20panorama.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/London%20Underground%20sign%20-%20geograph.org.uk%20-%201720911.jpg?width=1600",
          ],
          desc: "Llegar a zona estadio 18:45–19:00 para pasar seguridad sin correr.",
          subTitle: "Green Park → Jubilee → Wembley Park",
          details: [
            "Ventana sugerida: 17:45–19:00 (con buffer).",
            "Regla Wembley: estar en la zona 18:45–19:00.",
            "Antes de entrar: baño + agua.",
            "Foto rápida afuera y listo (no se claven).",
          ],
          options: [
            { title: "Plan A — Tube (recomendado)", text: "La ruta típica funciona perfecto con buffer." },
            { title: "Plan B — Taxi (si algo sale raro)", text: "Si hay tema con líneas/crowd, taxi salva." },
          ],
          tips: ["Buffer manda", "Baño antes", "Agua antes", "Foto rápida"],
          notes:
            "Lo que mata Wembley es correr. Con buffer, todo es disfrute.",
        },

        {
          time: "19:45",
          type: "evento",
          title: "Inglaterra vs Japón (EVENTO FIJO)",
          icon: "ticket",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Wembley%20Stadium%20panorama.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Wembley%20Stadium%20from%20Olympic%20Way%20-%20geograph.org.uk%20-%201646380.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Wembley%20Stadium%20close%20up%20-%20geograph.org.uk%20-%201190702.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Wembley%20Stadium%20panorama.jpg?width=1600",
          ],
          desc: "Partido + ambiente. A disfrutar sin complicar la salida.",
          subTitle: "Post-match definido ANTES de que termine",
          details: [
            "Ventana estimada: 19:45–21:45.",
            "Decidan antes: Plan A directo al hotel (recomendado).",
            "Plan B: 1 drink cerca del hotel (máx 45 min).",
            "La diferencia entre gran viaje y viaje pesado: dormir bien el día 1.",
          ],
          options: [
            { title: "Plan A — Directo al hotel", text: "Cierre perfecto para llegar enteros al día 2." },
            { title: "Plan B — 1 drink cerca", text: "Solo si hay energía real. Una ronda y fin." },
          ],
          tips: ["No improvisar post-match", "Agua", "Salida calmada"],
          notes:
            "Hoy es ‘día largo’. Ganen el viaje con un cierre inteligente.",
        },

        {
          time: "22:00",
          type: "transporte",
          title: "Regreso al hotel (cierre corto opcional)",
          icon: "home",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Park%20Lane%20London%20-%20geograph.org.uk%20-%201423812.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Park%20London%20%28287692870%29.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Piccadilly%2C%20London%20-%20geograph.org.uk%20-%201132972.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Burlington%20Arcade%2C%20London%2C%20UK%20-%20Diliff.jpg?width=1600",
          ],
          desc: "Cierre suave: pub cercano (1 ronda) o té/café y a dormir.",
          subTitle: "Nada de maratón hoy",
          details: [
            "Ventana sugerida: 22:00–23:15.",
            "Si hay energía: 1 pub cerca con vibe clásica (una sola ronda).",
            "Si no: té/café + algo dulce y dormir.",
          ],
          options: [
            { title: "Opción A — 1 ronda", text: "Máx 45 min. Solo para cerrar bonito." },
            { title: "Opción B — Directo a dormir", text: "El día 2 lo agradece." },
          ],
          tips: ["Una ronda y fin", "Hidratación", "Sueño manda"],
          notes:
            "Si el día 1 termina bien, el viaje arranca con momentum real.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 2 — Abr 1 | Westminster + South Bank + Borough + Pub histórico
    // ------------------------------------------------------------
    abr01: {
      tag: "CLÁSICOS",
      title: "Día 2 | Westminster + South Bank + Borough + Pub histórico",
      goal: "Clásicos caminables + street food + pub con historia real. Mantener ritmo sin saturar.",
      events: [
        {
          time: "08:45",
          type: "desayuno",
          title: "Desayuno (elige modo)",
          icon: "coffee",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mayfair%20London%20street%20-%20geograph.org.uk%20-%201487884.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Piccadilly%2C%20London%20-%20geograph.org.uk%20-%201132972.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Park%20%28London%29%20-%20geograph.org.uk%20-%20660743.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Burlington%20Arcade%2C%20London%2C%20UK%20-%20Diliff.jpg?width=1600",
          ],
          desc: "Hoy conviene desayunar bien: Abbey + caminata + mercado suma.",
          subTitle: "Rápido y eficiente vs sentado clásico",
          details: [
            "Ventana sugerida: 08:45–09:30.",
            "Opción A: café + pastry + fruta (salida rápida).",
            "Opción B: desayuno sentado cerca de Mayfair/Piccadilly.",
          ],
          options: [
            { title: "Opción A — Rápido", text: "Café + pastry + fruta. Cero fricción." },
            { title: "Opción B — Sentado", text: "Si el grupo amaneció bien, vale la pena." },
          ],
          tips: ["Hoy sí conviene comer bien", "No alargar desayuno"],
          notes: "Regla: desayuno práctico para que Abbey no se vuelva carrera.",
        },

        {
          time: "09:45",
          type: "visita",
          title: "Westminster Abbey (ancla del día)",
          icon: "landmark",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Westminster%20Abbey%20-%20West%20front%20%28geograph%202225737%29.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Westminster%20Abbey%20nave%20-%20geograph.org.uk%20-%201091737.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Westminster%20Abbey%20%28London%29%20-%20geograph.org.uk%20-%201242834.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Westminster%20Abbey%20-%20West%20front%20%28geograph%202225737%29.jpg?width=1600",
          ],
          desc: "Entrar temprano, ver 2–3 puntos wow y no intentar verlo TODO.",
          subTitle: "Arquitectura + luz + bóvedas (micro-misión)",
          details: [
            "Ventana sugerida: 09:45–12:00.",
            "Entren con 2–3 puntos wow (sin querer ‘ver todo’).",
            "Ir temprano reduce filas y riesgo de cierres por servicios.",
            "Micro-misión: luz, bóvedas, proporción y control del recorrido.",
          ],
          options: [
            { title: "Modo highlights", text: "2–3 puntos wow + salir con energía." },
            { title: "Modo arquitectura", text: "Menos salas, más observación de luz/volumen." },
          ],
          tips: ["Llegar temprano", "No sobrecargar", "Fotos selectivas"],
          notes: "Abbey bien hecha = día elegante y sin cansancio mental.",
        },

        {
          time: "12:15",
          type: "walk",
          title: "Walk postal + fotos (sin desviarse)",
          icon: "camera",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Westminster%20Bridge%20and%20Big%20Ben%20-%20geograph.org.uk%20-%201422521.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Palace%20of%20Westminster%20-%20geograph.org.uk%20-%20244960.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Westminster%20Bridge%20and%20Big%20Ben%20-%20geograph.org.uk%20-%201422521.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/South%20Bank%20London%20-%20geograph.org.uk%20-%201396057.jpg?width=1600",
          ],
          desc: "Fotos rápidas y buenas aquí. Luego South Bank se alarga solo.",
          subTitle: "Abbey → Parliament/Big Ben → Westminster Bridge → South Bank",
          details: [
            "Ventana sugerida: 12:15–13:15.",
            "Puntos foto: en el puente + orilla South Bank (perspectiva larga del Thames).",
            "Eviten desviarse: hoy el flujo importa.",
          ],
          options: [
            { title: "Modo eficiente", text: "10–15 min por spot y seguir." },
            { title: "Modo skyline", text: "Prioricen puente + orilla (2 spots top)." },
          ],
          tips: ["No se claven en fotos", "Mantener ritmo", "South Bank después"],
          notes: "Este walk es postal sin esfuerzo si lo mantienen corto.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Borough Market (street food pro-grupo)",
          icon: "shopping-bag",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Borough%20Market%20%2820117650382%29.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Borough%20Market%20London%20%28geograph%202256905%29.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Borough%20Market%20%2820117650382%29.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Borough%20Market%20%28geograph%202256922%29.jpg?width=1600",
          ],
          desc: "Street food sin caos: dividirse, comprar en paralelo y compartir.",
          subTitle: "2 parejas → 2 cosas cada una → compartir",
          details: [
            "Ventana sugerida: 13:30–15:00.",
            "Estrategia: 2 parejas, cada una compra 2 cosas (1 salado + 1 snack raro).",
            "Ideas: marino (ostras/scallops) + sándwich caliente + dulce + café.",
            "Plan B si está imposible: comer en South Bank y volver otro día solo a caminar.",
          ],
          options: [
            { title: "Modo compartir", text: "Se prueba más y se tarda menos." },
            { title: "Modo sin filas", text: "Si se pone denso: Plan B South Bank." },
          ],
          tips: ["Borough se llena", "No se separen sin punto", "Café ayuda"],
          notes: "Aquí se gana el mood del día si lo hacen con estrategia.",
        },

        {
          time: "15:15",
          type: "visita",
          title: "Churchill War Rooms (Plan A) o Tate Modern (Plan B)",
          icon: "museum",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tate%20Modern%20from%20the%20Millennium%20Bridge%20-%20geograph.org.uk%20-%20642907.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tate%20Modern%20-%20geograph.org.uk%20-%201476188.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Imperial%20War%20Museum%20-%20Churchill%20War%20Rooms%20entrance%20-%20geograph.org.uk%20-%202089530.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tate%20Modern%20from%20the%20Millennium%20Bridge%20-%20geograph.org.uk%20-%20642907.jpg?width=1600",
          ],
          desc: "Elegir según energía y clima: historia inmersiva vs arte flexible.",
          subTitle: "Indoor potente vs highlights rápidos",
          details: [
            "Ventana sugerida: 15:15–16:30.",
            "Plan A: War Rooms (perfecto si llueve o quieren inmersión real).",
            "Plan B: Tate Modern highlights 60–90 min (sin museo pesado).",
          ],
          options: [
            { title: "Plan A — War Rooms", text: "Dense tiempo real. No es visita de 20 min." },
            { title: "Plan B — Tate Modern", text: "Entrar 60–90 min y salir sin culpa." },
          ],
          tips: ["No forzar museo pesado", "Si llueve: War Rooms"],
          notes: "Aquí se ajusta el día sin perder calidad.",
        },

        {
          time: "16:45",
          type: "pub",
          title: "Pub Session 1: The George Inn (Southwark)",
          icon: "beer",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20George%20Inn%2C%20Southwark%2C%20London%20-%20geograph.org.uk%20-%201405290.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20George%20Inn%20courtyard%20-%20geograph.org.uk%20-%201405286.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20George%20Inn%2C%20Southwark%2C%20London%20-%20geograph.org.uk%20-%201405290.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20George%20Inn%20sign%20-%20geograph.org.uk%20-%201405295.jpg?width=1600",
          ],
          desc: "Histórico de verdad. Patio y arquitectura valen la ida.",
          subTitle: "2 rondas máximo (half pints)",
          details: [
            "Ventana sugerida: 16:45–18:30.",
            "Ronda 1: cask ale (half pint) + comparar con lager.",
            "Ronda 2: stout/porter si hay. Snack simple.",
            "Regla: máximo 2 rondas si quieren llegar bien a la cena.",
          ],
          options: [
            { title: "Modo tasting", text: "Half pints para probar más estilos." },
            { title: "Modo ligero", text: "1 ronda + snack y moverse." },
          ],
          tips: ["Half pints", "2 rondas max", "Snack simple"],
          notes: "Este pub es experiencia, no maratón.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena (Covent/Soho) — opciones reales",
          icon: "utensils",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Soho%2C%20London%20-%20geograph.org.uk%20-%201386164.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Covent%20Garden%20Market%20-%20geograph.org.uk%20-%202408629.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Soho%2C%20London%20-%20geograph.org.uk%20-%201386164.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Neal%27s%20Yard%20-%20geograph.org.uk%20-%201560116.jpg?width=1600",
          ],
          desc: "Cena sin traslados innecesarios. Reservar salva tiempo.",
          subTitle: "Dishoom / steakhouse / comfort",
          details: [
            "Ventana sugerida: 19:30–21:00.",
            "Opción A: Dishoom (grupo-friendly).",
            "Opción B: steakhouse sólido (cena wow).",
            "Opción C: pasta/comfort (rápido y rico).",
            "Tip: reservar 19:00–20:00 evita 30–60 min de cola.",
          ],
          options: [
            { title: "Opción A — Dishoom", text: "Black Daal + panes + 1–2 platos al centro." },
            { title: "Opción B — Steakhouse", text: "Wow sin inventar. Ideal para viernes vibes (aunque hoy sea mié)." },
            { title: "Opción C — Comfort", text: "Rápido, rico, cero drama." },
          ],
          tips: ["Reservar", "No cruzar media ciudad", "Mantener energía"],
          notes: "Cierren bonito pero sin alargar: mañana hay museo grande.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 3 — Abr 2 | British Museum + Covent/Soho + Pubs + Hoppers vibes
    // ------------------------------------------------------------
    abr02: {
      tag: "MUSEO",
      title: "Día 3 | British Museum + Soho pubs + cena distinta",
      goal: "Museo pesado bien hecho + tarde caminable + pubs icónicos + cena diferente.",
      events: [
        {
          time: "08:30",
          type: "desayuno",
          title: "Desayuno rápido (modo museo)",
          icon: "coffee",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/British%20Museum%20%2853530296789%29.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/British%20Museum%20%2853530296789%29.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20British%20Museum%20Great%20Court%20-%20geograph.org.uk%20-%20730783.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Bloomsbury%20London%20street%20-%20geograph.org.uk%20-%20966956.jpg?width=1600",
          ],
          desc: "Conviene salir temprano para entrar al museo con calma.",
          subTitle: "Café + algo simple y listo",
          details: ["Ventana sugerida: 08:30–09:15.", "Hoy sí: rápido para estar 10:00 dentro."],
          options: [
            { title: "Opción A — Rápido", text: "Café + pastry + fruta." },
            { title: "Opción B — Algo más", text: "Si amanecen con hambre: sándwich/huevos rápidos." },
          ],
          tips: ["No alargar", "Agua", "Entrar temprano"],
          notes: "La magia hoy es ritmo estable, no perfección.",
        },

        {
          time: "10:00",
          type: "visita",
          title: "British Museum (bloque grande)",
          icon: "museum",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20British%20Museum%20Great%20Court%20-%20geograph.org.uk%20-%20730783.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/British%20Museum%20%2853530296789%29.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20British%20Museum%20Great%20Court%20-%20geograph.org.uk%20-%20730783.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/British%20Museum%20Reading%20Room%20-%20geograph.org.uk%20-%201455133.jpg?width=1600",
          ],
          desc: "Museo pesado bien hecho sin matarse: highlights + Great Court + 1 sección libre.",
          subTitle: "Highlights → Great Court → sección a elección",
          details: [
            "Ventana sugerida: 10:00–13:30.",
            "10:00–11:30: Highlights (Egipto/Grecia/‘lo obligatorio’).",
            "11:30–12:15: Great Court + arquitectura + fotos.",
            "12:15–13:15: cada quien elige 1 sección (sin intentar todo).",
            "Exhibición ‘Samurai’: dejar como ‘si está en cartelera’ (se confirma más cerca).",
          ],
          options: [
            { title: "Almuerzo A", text: "Comer dentro/adyacente para no romper flujo." },
            { title: "Almuerzo B", text: "Salir a algo rápido cercano y volver (si quieren aire)." },
          ],
          tips: ["No intentar ver todo", "1 sección por persona", "Fotos selectivas"],
          notes: "El museo se disfruta más cuando sales todavía con energía.",
        },

        {
          time: "14:30",
          type: "paseo",
          title: "Neal’s Yard + Seven Dials (diseño + fotos)",
          icon: "map",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Neal%27s%20Yard%20-%20geograph.org.uk%20-%201560116.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Neal%27s%20Yard%20%28London%29%20-%20geograph.org.uk%20-%202254922.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Seven%20Dials%2C%20London%20-%20geograph.org.uk%20-%201569650.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Covent%20Garden%20Market%20-%20geograph.org.uk%20-%202408629.jpg?width=1600",
          ],
          desc: "Zona perfecta para vibe + diseño + fotos, incluso con lluvia.",
          subTitle: "Covent Garden → Neal’s Yard → Seven Dials",
          details: [
            "Ventana sugerida: 14:30–16:30.",
            "Hidden gems: patios interiores, pasajes, librerías pequeñas, cafés discretos.",
            "Plan B lluvia: funciona perfecto (mucho interior/tiendas).",
          ],
          options: [
            { title: "Opción A — Ruta directa", text: "Neal’s Yard 15–20 min + Seven Dials + tiendas puntuales." },
            { title: "Opción B — Café", text: "Un café discreto para resetear energía." },
          ],
          tips: ["No alargar", "Fotos aquí sí valen", "Plan B lluvia fácil"],
          notes: "Esta zona da ‘Londres’ sin esfuerzo.",
        },

        {
          time: "17:30",
          type: "pub",
          title: "Pub Session 2: Soho (2 stops)",
          icon: "beer",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20French%20House%20pub%2C%20Soho%2C%20London%20-%20geograph.org.uk%20-%202125047.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20French%20House%20pub%2C%20Soho%2C%20London%20-%20geograph.org.uk%20-%202125047.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Coach%20and%20Horses%2C%20Greek%20Street%2C%20Soho%20-%20geograph.org.uk%20-%202104173.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Soho%2C%20London%20-%20geograph.org.uk%20-%201386164.jpg?width=1600",
          ],
          desc: "Pubs icónicos con regla simple: half-pints y sin maratón.",
          subTitle: "Stop 1 French House → Stop 2 Coach & Horses",
          details: [
            "Ventana sugerida: 17:30–19:30.",
            "Stop 1: The French House.",
            "Stop 2: The Coach & Horses.",
            "Tip: half-pints para probar más estilos.",
            "Extra opcional: 3er stop solo si van bien (se decide por crowd).",
          ],
          options: [
            { title: "Modo tasting", text: "Half pints + 2 pubs máximo." },
            { title: "Modo chill", text: "1 pub + caminar + cena." },
          ],
          tips: ["Half pints", "2 stops max", "No improvisar 5 pubs"],
          notes: "Mejor calidad que cantidad: así se siente premium.",
        },

        {
          time: "20:00",
          type: "cena",
          title: "Cena: ‘Hoppers vibes’ (Sri Lanka) o alternativa en Soho",
          icon: "utensils",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Soho%2C%20London%20-%20geograph.org.uk%20-%201386164.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Soho%20London%20-%20geograph.org.uk%20-%201264302.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Soho%2C%20London%20-%20geograph.org.uk%20-%201386164.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Carnaby%20Street%20London%20-%20geograph.org.uk%20-%201975483.jpg?width=1600",
          ],
          desc: "Cena distinta para variar. Pedir al centro y mantenerlo simple.",
          subTitle: "1–2 spicy + 1–2 comfort + 1 side",
          details: [
            "Ventana sugerida: 20:00–21:30.",
            "Para grupo: 1–2 spicy + 1–2 comfort + 1 side para compartir.",
            "Opcional postre/cóctel: 1 lugar, 1 drink, 45–60 min.",
          ],
          options: [
            { title: "Opción A — Sri Lanka vibes", text: "Pidan al centro. Mantenerlo divertido, no complicado." },
            { title: "Opción B — Alternativa Soho", text: "Cualquier lugar bueno cercano (prioridad logística)." },
          ],
          tips: ["No cruzar Londres", "1 drink máximo si salen", "Dormir bien"],
          notes: "Hoy ya hubo museo grande: cierre rico, no largo.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 4 — Abr 3 | Tower + Fish Friday + Mirador + Blackfriar
    // ------------------------------------------------------------
    abr03: {
      tag: "CITY",
      title: "Día 4 | Tower + Fish Friday + Mirador + Blackfriar",
      goal: "Tower temprano (colas), comer pescado bien, golden hour con vistas, cerrar con pub interior espectacular.",
      events: [
        {
          time: "08:45",
          type: "transporte",
          title: "Salida temprana hacia Tower Hill",
          icon: "train",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20Hill%20station%20entrance%20-%20geograph.org.uk%20-%201345558.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20Hill%20station%20-%20geograph.org.uk%20-%201345564.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20Hill%20station%20entrance%20-%20geograph.org.uk%20-%201345558.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/London%20Underground%20sign%20-%20geograph.org.uk%20-%201720911.jpg?width=1600",
          ],
          desc: "Hoy hay más gente por Semana Santa. Salir temprano paga.",
          subTitle: "Objetivo: estar listos para entrar sin filas enormes",
          details: ["Ventana sugerida: 08:45–09:30.", "Buffer mental: hoy es día largo."],
          options: [
            { title: "Modo temprano", text: "Llegar y entrar sin perder 40 min en cola." },
            { title: "Modo foto rápida", text: "Una foto y adentro. La magia está dentro." },
          ],
          tips: ["Salir temprano", "No improvisar", "Agua"],
          notes: "Tower se disfruta mucho más cuando le ganas a la primera ola de gente.",
        },

        {
          time: "09:30",
          type: "visita",
          title: "Tower of London (ancla) + Crown Jewels",
          icon: "landmark",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20of%20London%20-%20geograph.org.uk%20-%201024315.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20of%20London%20-%20geograph.org.uk%20-%201024315.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20White%20Tower%2C%20Tower%20of%20London%20-%20geograph.org.uk%20-%201024331.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20of%20London%20from%20Tower%20Bridge%20-%20geograph.org.uk%20-%201486898.jpg?width=1600",
          ],
          desc: "Hacerlo perfecto: Crown Jewels primero, luego murallas y puntos clave.",
          subTitle: "Crown Jewels al abrir = menos cola",
          details: [
            "Ventana sugerida: 09:30–12:30.",
            "Primer objetivo: Crown Jewels al abrir (colas crecen rápido).",
            "Luego: exteriores + murallas + puntos clave (sin obsesionarse con TODO).",
          ],
          options: [
            { title: "Modo eficiente", text: "Jewels → murallas → 2–3 puntos clave." },
            { title: "Modo foto", text: "Priorizar exteriores + muralla + vistas." },
          ],
          tips: ["Jewels primero", "No intentar todo", "Buffer mental"],
          notes: "Tower se siente épica si controlan el orden.",
        },

        {
          time: "12:40",
          type: "walk",
          title: "Tower Bridge exterior + mini-walk",
          icon: "camera",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20Bridge%20%28geograph%202770314%29.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20Bridge%20-%20geograph.org.uk%20-%201306214.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20Bridge%20%28geograph%202770314%29.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20Bridge%20and%20the%20Thames%20-%20geograph.org.uk%20-%201487318.jpg?width=1600",
          ],
          desc: "20–30 min de fotos quedan perfectos. No hace falta entrar.",
          subTitle: "Si hay 15 min extra: St Katharine Docks",
          details: [
            "Ventana sugerida: 12:40–13:10.",
            "Fotos rápidas y buenas, sin desviarse.",
            "Hidden gem 15 min extra: St Katharine Docks si el clima está lindo.",
          ],
          options: [
            { title: "Opción A — Solo puente", text: "20–30 min y seguir." },
            { title: "Opción B — Docks", text: "15 min extra para fotos tranquilas." },
          ],
          tips: ["Fotos rápidas", "No entrar si no es prioridad"],
          notes: "Este mini-walk es el ‘postre’ visual después de Tower.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Fish Friday (según ubicación y energía)",
          icon: "utensils",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20and%20chips%20-%20geograph.org.uk%20-%201744386.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20and%20chips%20-%20geograph.org.uk%20-%201744386.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20and%20chips%20shop%20-%20geograph.org.uk%20-%201251315.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20and%20chips%20-%20geograph.org.uk%20-%201702597.jpg?width=1600",
          ],
          desc: "Comer eficiente para que el mirador valga el atardecer.",
          subTitle: "Prioridad: logística (no cruzar Londres por comer)",
          details: [
            "Ventana sugerida: 13:30–14:30.",
            "Opción A: fish & chips famoso (si queda cerca).",
            "Opción B: mariscos clásico (si ya están por West End).",
            "Opción C: plan práctico cerca de donde estén.",
          ],
          options: [
            { title: "Opción A — ‘Famoso’", text: "Solo si queda razonable por ruta." },
            { title: "Opción B — Clásico", text: "Si ya van rumbo West End." },
            { title: "Opción C — Práctico", text: "Cerca y bueno. Prioridad: no perder tiempo." },
          ],
          tips: ["No cruzar media ciudad", "Comer eficiente", "Agua"],
          notes: "Hoy el premio es golden hour desde arriba.",
        },

        {
          time: "15:30",
          type: "mirador",
          title: "Mirador atardecer (A/B/C)",
          icon: "view",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sky%20Garden%20London%20-%20geograph.org.uk%20-%203149283.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sky%20Garden%20London%20-%20geograph.org.uk%20-%203149283.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Garden%20at%20120%20-%20geograph.org.uk%20-%203619176.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/City%20of%20London%20skyline%20-%20geograph.org.uk%20-%201723061.jpg?width=1600",
          ],
          desc: "Golden hour con vistas. Llegar 30–45 min antes para buen spot.",
          subTitle: "Plan A Sky Garden · Plan B Garden at 120 · Plan C el que esté disponible",
          details: [
            "Ventana sugerida: 15:30–18:30.",
            "Plan A: Sky Garden (con reserva).",
            "Plan B: The Garden at 120 (salvavidas).",
            "Tip foto: llegar 30–45 min antes del golden hour real.",
          ],
          options: [
            { title: "Plan A — Sky Garden", text: "Si hay reserva, es el mejor flow." },
            { title: "Plan B — Garden at 120", text: "Salvavidas top cuando Sky Garden no se puede." },
            { title: "Plan C — Otro mirador", text: "El disponible ese día (sin obsesión)." },
          ],
          tips: ["Llegar antes", "No llegar a la hora exacta", "Fotos aquí sí"],
          notes: "Este bloque es el ‘wow’ visual del día.",
        },

        {
          time: "19:30",
          type: "pub",
          title: "Pub Session 3: The Blackfriar (imperdible)",
          icon: "beer",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Blackfriar%2C%20Queen%20Victoria%20Street%20-%20geograph.org.uk%20-%201437626.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Blackfriar%2C%20Queen%20Victoria%20Street%20-%20geograph.org.uk%20-%201437626.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Blackfriars%20Bridge%20and%20St%20Paul%27s%20-%20geograph.org.uk%20-%201486902.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/City%20of%20London%20street%20-%20geograph.org.uk%20-%201272703.jpg?width=1600",
          ],
          desc: "Interior Arts & Crafts. Se siente Londres clásico sin ser ‘tourist trap’.",
          subTitle: "2 rondas + whisky opcional (1 dram max)",
          details: [
            "Ventana sugerida: 19:30–20:30.",
            "Ronda 1: cask ale/bitter (half pint).",
            "Ronda 2: stout/porter si hay.",
            "Whisky: flight si existe, si no 1 dram por persona máximo.",
          ],
          options: [
            { title: "Modo beer tasting", text: "Half pints y comparar estilos." },
            { title: "Modo whisky light", text: "1 dram por persona y listo." },
          ],
          tips: ["Half pints", "No maratón", "Snack ligero"],
          notes: "Cierra perfecto este día largo: wow interior + vibe clásica.",
        },

        {
          time: "20:45",
          type: "cena",
          title: "Cena cerca (sin traslados innecesarios)",
          icon: "utensils",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/City%20of%20London%20street%20-%20geograph.org.uk%20-%201272703.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20London%20-%20geograph.org.uk%20-%201531087.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/City%20of%20London%20street%20-%20geograph.org.uk%20-%201272703.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Soho%2C%20London%20-%20geograph.org.uk%20-%201386164.jpg?width=1600",
          ],
          desc: "Hoy no vale cruzar Londres por un restaurante. Prioridad: descanso.",
          subTitle: "City/Temple/Soho según dónde terminen",
          details: [
            "Ventana sugerida: 20:45–22:15.",
            "Opción A: cenar cerca (City/Temple) y listo.",
            "Opción B: regresar West End solo si el grupo está perfecto.",
          ],
          options: [
            { title: "Opción A — Cerca", text: "Cero fricción. Día ganado." },
            { title: "Opción B — West End", text: "Solo si están enteros y sin maletas mentales." },
          ],
          tips: ["No cruzar media ciudad", "Dormir manda", "Agua"],
          notes: "Día 4 se gana con cierre inteligente.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 5 — Abr 4 | Salida a York
    // ------------------------------------------------------------
    abr04: {
      tag: "YORK",
      title: "Día 5 | Salida a York (logística perfecta)",
      goal: "Desayuno rápido, traslado sin estrés, tren sin carreras.",
      events: [
        {
          time: "08:00",
          type: "desayuno",
          title: "Desayuno rápido y útil",
          icon: "coffee",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/King%27s%20Cross%20station%20concourse%20-%20geograph.org.uk%20-%202489430.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Park%20Lane%20London%20-%20geograph.org.uk%20-%201423812.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Park%20%28London%29%20-%20geograph.org.uk%20-%20660743.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/King%27s%20Cross%20station%20concourse%20-%20geograph.org.uk%20-%202489430.jpg?width=1600",
          ],
          desc: "Hoy el objetivo no es brunch, es logística.",
          subTitle: "Café + pastry/fruta o sándwich",
          details: ["Ventana sugerida: 08:00–09:00.", "Algo fácil, sin alargar."],
          options: [
            { title: "Opción A — Muy rápido", text: "Café + pastry + fruta." },
            { title: "Opción B — Sándwich", text: "Si quieren ir más seguros de hambre." },
          ],
          tips: ["No alargar", "Agua", "Batería"],
          notes: "La mañana de tren se gana con simpleza.",
        },

        {
          time: "09:45",
          type: "logística",
          title: "Check-out + salida a King’s Cross",
          icon: "train",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/King%27s%20Cross%20station%20-%20geograph.org.uk%20-%201026025.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/King%27s%20Cross%20station%20-%20geograph.org.uk%20-%201026025.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/King%27s%20Cross%20station%20concourse%20-%20geograph.org.uk%20-%202489430.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Taxi%20rank%20in%20London%20-%20geograph.org.uk%20-%201676828.jpg?width=1600",
          ],
          desc: "Con maletas, Taxi/Uber suele ser mejor. Llegar 45–60 min antes.",
          subTitle: "Menos escaleras, menos cambios, menos estrés",
          details: [
            "Ventana sugerida: 09:45–10:15 salida.",
            "Taxi/Uber recomendado con equipaje.",
            "Buffer: llegar 45–60 min antes a la estación.",
          ],
          options: [
            { title: "Opción A — Taxi/Uber (recomendado)", text: "Puerta a puerta con maletas. Cero drama." },
            { title: "Opción B — Tube", text: "Solo si van ligeros y el grupo está con energía." },
          ],
          tips: ["Buffer 60 min", "Agua/snacks", "No correr en estación"],
          notes: "King’s Cross con calma = viaje premium.",
        },

        {
          time: "11:33",
          type: "tren",
          title: "Tren a York (ya reservado)",
          icon: "ticket",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/King%27s%20Cross%20station%20concourse%20-%20geograph.org.uk%20-%202489430.jpg?width=1600",
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/King%27s%20Cross%20station%20-%20geograph.org.uk%20-%201026025.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/InterCity%20125%20at%20Kings%20Cross%20-%20geograph.org.uk%20-%201610619.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/York%20railway%20station%20-%20geograph.org.uk%20-%201486673.jpg?width=1600",
          ],
          desc: "Agua/snacks antes de abordar. Foto rápida y descanso.",
          subTitle: "11:33–13:27 (ya listo)",
          details: [
            "Compren agua/snacks antes de subir.",
            "Foto rápida ‘train moment’ y luego descanso.",
            "Si alguien quiere paisaje: lo clave es ir juntos y cómodos.",
          ],
          options: [
            { title: "Modo chill", text: "Audífonos + descanso. Llegar a York con energía." },
            { title: "Modo snack", text: "Algo ligero y agua. No llegar con hambre." },
          ],
          tips: ["Agua", "Snacks", "Batería"],
          notes: "Este tren es transición: descansen para York.",
        },
      ],
    },
  },
};

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
      goal:
        "Aterrizar con calma, reset rápido en el hotel, y llegar a Wembley con margen. Hoy se trata de flujo, no de exprimir la ciudad.",

      events: [
        {
          time: "12:10",
          type: "logística",
          title: "Llegada a LHR + migración + maletas + salida",
          icon: "plane",
          desc: "Salida eficiente del aeropuerto sin dispersarse.",
          subTitle: "Checklist rápido y punto de encuentro claro",
          details: [
            "Ventana estimada: 12:10–14:15 (depende de filas y equipaje).",
            "Antes de bajar del avión: pasaporte a mano, contactless listo, batería cargada.",
            "Punto de encuentro si se separan: Arrivals, justo después de baggage claim.",
            "SIM/eSIM: si no es inmediato, mejor resolverlo ya en el hotel.",
          ],
          options: [
            {
              title: "Snack inteligente (si hace falta)",
              text: "Algo salado + agua. Les salva el humor antes del Tube.",
            },
            {
              title: "Modo anti-caos (grupo 4–6)",
              text: "Definan punto de reunión antes de entrar a migración. Cero drama.",
            },
          ],
          tips: ["Batería arriba", "Contactless listo", "No separarse", "Agua primero"],
          notes:
            "Si salen fluidos de LHR, el resto del día se siente sorprendentemente fácil.",
        },

        {
          time: "14:15",
          type: "transporte",
          title: "Heathrow → Hotel (elige según energía y equipaje)",
          icon: "train",
          desc: "Llegar sin sufrir. La prioridad es conservar energía para Wembley.",
          subTitle: "Tube vs Elizabeth Line vs Taxi",
          details: [
            "Ventana sugerida: 14:15–15:00.",
            "Opción A (directo): Piccadilly Line → Green Park (ojo con escaleras y hora pico).",
            "Opción B (más suave): Elizabeth Line + cambio (según ruta final).",
            "Opción C (cero fricción): Taxi/Uber puerta a puerta (ideal con maletas o lluvia).",
          ],
          options: [
            {
              title: "Opción A - Tube",
              text: "Eficiente en costo y directo. Puede haber escalera y gente.",
            },
            {
              title: "Opción B - Elizabeth Line",
              text: "Suele ser más cómoda. Requiere cambio, pero es buena opción.",
            },
            {
              title: "Opción C - Taxi/Uber",
              text: "Puerta a puerta. Con maletas grandes, normalmente es la mejor decisión.",
            },
          ],
          tips: ["Con maletas: Taxi suele ganar", "Contactless en Tube", "No se enreden con el mapa"],
          notes:
            "Hoy vale pagar comodidad si eso evita que el grupo se desgaste desde el minuto uno.",
        },

        {
          time: "15:00",
          type: "hotel",
          title: "Check-in + reset de 90 minutos",
          icon: "hotel",
          desc: "Ducha rápida, capas, power bank, agua. Salen listos y con buena energía.",
          subTitle: "Rutina express para no perder el día",
          details: [
            "Ventana sugerida: 15:00–16:30.",
            "Dejar maletas, baño y ducha rápida (10–12 min máximo).",
            "Cambio de ropa para clima variable (capas).",
            "Power bank, agua y snack pequeño. Lounge si aplica.",
          ],
          options: [
            {
              title: "Modo eficiente",
              text: "Nada de acostarse. Reset y salida.",
            },
            {
              title: "Modo lounge (si hay)",
              text: "Snack y bebida sin salir, y listo.",
            },
          ],
          tips: ["Capas", "Power bank", "Agua en la mochila", "No se tiren a dormir"],
          notes:
            "Este bloque define el ritmo del viaje. Si aquí lo hacen bien, Londres se siente ligero.",
        },

        {
          time: "16:30",
          type: "paseo",
          title: "Paseo suave por Mayfair (sin caminar de más)",
          icon: "map",
          desc: "Primer vistazo bonito de Londres sin desgaste.",
          subTitle: "Green Park → Piccadilly → Burlington Arcade → regreso",
          details: [
            "Ventana sugerida: 16:30–17:30.",
            "Ruta corta, elegante y cero estrés.",
            "Bonus: callecitas de Mayfair para fachadas, puertas y vitrinas.",
            "Plan B si llueve: arcades e interiores, y regresan temprano.",
          ],
          options: [
            {
              title: "Opción A - Ruta corta exacta",
              text: "Green Park → Piccadilly → Burlington Arcade → regreso.",
            },
            {
              title: "Opción B - 15 min extra",
              text: "Un mini desvío por calles tranquilas de Mayfair + café rápido.",
            },
          ],
          tips: ["Fotos rápidas", "No alargar sin querer", "Si llueve: arcades"],
          notes:
            "Este paseo es perfecto para aterrizar mentalmente. Queda premium y no cansa.",
        },

        {
          time: "17:30",
          type: "comida",
          title: "Snack pre-partido (recomendadísimo)",
          icon: "utensils",
          desc: "Llegar a Wembley sin hambre y sin depender de filas.",
          subTitle: "Algo salado + algo de carbo (día largo)",
          details: [
            "Ventana sugerida: 17:30–18:10.",
            "Opción pub light: 1 pinta + pie o sándwich.",
            "Opción rápida: sándwich, papas y té/café.",
            "Opción “rico pero ágil”: brasserie casual, solo si no los sienta 40 min.",
          ],
          options: [
            {
              title: "Opción A - Pub light",
              text: "Una pinta y algo salado. Quedan listos sin pesadez.",
            },
            {
              title: "Opción B - Rápido",
              text: "Sándwich + papas + té/café. Cero fricción.",
            },
            {
              title: "Opción C - Brasserie",
              text: "Algo rico pero rápido. Sin cruzar la ciudad.",
            },
          ],
          tips: ["Eviten comida pesada", "Tomen agua", "No llegar con hambre al estadio"],
          notes:
            "Este snack suele ser la diferencia entre ‘qué día tan largo’ y ‘qué buen plan’.",
        },

        {
          time: "17:45",
          type: "transporte",
          title: "Traslado a Wembley (con margen)",
          icon: "train",
          desc: "Meta: estar en zona estadio 18:45–19:00 para seguridad sin correr.",
          subTitle: "Green Park → Jubilee → Wembley Park",
          details: [
            "Ventana sugerida: 17:45–19:00 (con buffer).",
            "Regla Wembley: llegar a zona 18:45–19:00.",
            "Antes de entrar: baño y agua.",
            "Foto rápida afuera y a su asiento. No se quemen la energía en lo de afuera.",
          ],
          options: [
            {
              title: "Plan A - Tube (recomendado)",
              text: "La ruta típica funciona perfecto con buffer.",
            },
            {
              title: "Plan B - Taxi",
              text: "Si hay lío de líneas o crowd, taxi salva el bloque.",
            },
          ],
          tips: ["Buffer manda", "Baño antes", "Agua antes", "Foto rápida y listo"],
          notes:
            "Lo que daña Wembley es correr. Con margen, todo se disfruta.",
        },

        {
          time: "19:45",
          type: "evento",
          title: "Inglaterra vs Japón (evento fijo)",
          icon: "ticket",
          desc: "Partido y ambiente. Disfruten, pero con salida pensada desde antes.",
          subTitle: "Decidir post-match antes de que acabe",
          details: [
            "Ventana estimada: 19:45–21:45.",
            "Definan desde antes: Plan A directo al hotel (recomendado).",
            "Plan B: 1 drink cerca del hotel (máximo 45 min).",
            "Dormir bien hoy hace que el día 2 arranque fino.",
          ],
          options: [
            {
              title: "Plan A - Directo al hotel",
              text: "Cierre perfecto para llegar enteros al día 2.",
            },
            {
              title: "Plan B - 1 drink cerca",
              text: "Solo si hay energía real. Una ronda y se acaba.",
            },
          ],
          tips: ["No improvisar post-match", "Agua", "Salida calmada"],
          notes:
            "Hoy es día largo. Un cierre inteligente se siente como lujo.",
        },

        {
          time: "22:00",
          type: "transporte",
          title: "Regreso al hotel (cierre corto opcional)",
          icon: "home",
          desc: "Cierre suave: una ronda cerca o té/café y a dormir.",
          subTitle: "Nada de maratón hoy",
          details: [
            "Ventana sugerida: 22:00–23:15.",
            "Si hay energía: 1 pub cerca, una sola ronda.",
            "Si no: té/café + algo dulce y a descansar.",
          ],
          options: [
            {
              title: "Opción A - 1 ronda",
              text: "Máximo 45 min. Solo para cerrar bonito.",
            },
            {
              title: "Opción B - Directo a dormir",
              text: "Mañana se los agradece el cuerpo.",
            },
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
      goal:
        "Clásicos caminables, buen mercado sin caos y un pub con historia de verdad. Ritmo constante, sin saturar.",

      events: [
        {
          time: "08:45",
          type: "desayuno",
          title: "Desayuno (elige modo)",
          icon: "coffee",
          desc: "Hoy conviene desayunar bien. Abbey + caminata + mercado suman.",
          subTitle: "Rápido y eficiente vs sentado clásico",
          details: [
            "Ventana sugerida: 08:45–09:30.",
            "Opción A: café + pastry + fruta (salida rápida).",
            "Opción B: desayuno sentado cerca de Mayfair/Piccadilly.",
          ],
          options: [
            { title: "Opción A - Rápido", text: "Café + pastry + fruta. Cero fricción." },
            { title: "Opción B - Sentado", text: "Si amanecieron bien, vale la pena." },
          ],
          tips: ["Hoy sí conviene comer bien", "No alargar desayuno"],
          notes:
            "Un desayuno práctico hace que el resto del día se sienta elegante.",
        },

        {
          time: "09:45",
          type: "visita",
          title: "Westminster Abbey (ancla del día)",
          icon: "landmark",
          desc: "Entrar temprano, ver lo mejor y salir con energía. No intentar verlo todo.",
          subTitle: "Arquitectura, luz y bóvedas (micro-misión)",
          details: [
            "Ventana sugerida: 09:45–12:00.",
            "Elijan 2–3 puntos wow y listo. Mejor eso que irse saturados.",
            "Ir temprano reduce filas y el riesgo de cierres por servicios.",
            "Micro-misión: luz, proporción, detalles y una foto buena por persona.",
          ],
          options: [
            { title: "Modo highlights", text: "2–3 puntos wow y salir con energía." },
            { title: "Modo arquitectura", text: "Menos salas, más observación de volumen y luz." },
          ],
          tips: ["Llegar temprano", "No sobrecargar", "Fotos selectivas"],
          notes:
            "La Abbey bien hecha deja el día con una vibra muy Londres.",
        },

        {
          time: "12:15",
          type: "walk",
          title: "Walk postal + fotos (sin desviarse)",
          icon: "camera",
          desc: "Aquí salen las fotos clásicas. Luego el South Bank se disfruta solo.",
          subTitle: "Abbey → Parliament/Big Ben → Westminster Bridge → South Bank",
          details: [
            "Ventana sugerida: 12:15–13:15.",
            "Puntos foto: en el puente y en la orilla del South Bank con perspectiva larga del Thames.",
            "Mantengan el flujo. Hoy el orden hace todo.",
          ],
          options: [
            { title: "Modo eficiente", text: "10–15 min por spot y seguir." },
            { title: "Modo skyline", text: "Puente + orilla. Dos spots top y ya." },
          ],
          tips: ["No clavarse en fotos", "Mantener ritmo", "South Bank después"],
          notes:
            "Postal sin esfuerzo si lo mantienen corto y con intención.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Borough Market (street food pro-grupo)",
          icon: "shopping-bag",
          desc: "Street food sin caos: dividirse, comprar en paralelo y compartir.",
          subTitle: "2 parejas → 2 cosas cada una → compartir",
          details: [
            "Ventana sugerida: 13:30–15:00.",
            "Estrategia: 2 parejas, cada una compra 2 cosas (1 salado + 1 snack) y luego comparten.",
            "Ideas: marino (ostras o scallops), sándwich caliente, dulce y café.",
            "Plan B si está imposible: comer en South Bank y volver otro día solo a caminar.",
          ],
          options: [
            { title: "Modo compartir", text: "Prueban más y tardan menos." },
            { title: "Modo sin filas", text: "Si está demasiado lleno, Plan B South Bank." },
          ],
          tips: ["Borough se llena", "No separarse sin punto fijo", "Café ayuda"],
          notes:
            "Borough con estrategia se siente premium. Sin estrategia, se siente fila.",
        },

        {
          time: "15:15",
          type: "visita",
          title: "Churchill War Rooms (Plan A) o Tate Modern (Plan B)",
          icon: "museum",
          desc: "Elijan según energía y clima: historia inmersiva vs arte flexible.",
          subTitle: "Indoor potente vs highlights rápidos",
          details: [
            "Ventana sugerida: 15:15–16:30.",
            "Plan A: War Rooms (perfecto si llueve o quieren inmersión real).",
            "Plan B: Tate Modern highlights 60–90 min (sin museo pesado).",
          ],
          options: [
            { title: "Plan A - War Rooms", text: "Dense tiempo. No es visita de 20 min." },
            { title: "Plan B - Tate Modern", text: "Entrar 60–90 min y salir sin culpa." },
          ],
          tips: ["No forzar museo pesado", "Si llueve: War Rooms"],
          notes:
            "Este bloque es el ajuste fino del día. Se decide con honestidad: energía real.",
        },

        {
          time: "16:45",
          type: "pub",
          title: "Pub Session 1: The George Inn (Southwark)",
          icon: "beer",
          desc: "Histórico de verdad. Patio y arquitectura valen la ida.",
          subTitle: "Máximo 2 rondas (ideal en half pints)",
          details: [
            "Ventana sugerida: 16:45–18:30.",
            "Ronda 1: cask ale (half pint) para probar bien.",
            "Ronda 2: stout/porter si hay. Snack simple.",
            "Regla: máximo 2 rondas si quieren llegar bien a la cena.",
          ],
          options: [
            { title: "Modo tasting", text: "Half pints para probar más estilos." },
            { title: "Modo ligero", text: "1 ronda + snack y se mueven." },
          ],
          tips: ["Half pints", "2 rondas max", "Snack simple"],
          notes:
            "Mejor calidad que cantidad. Así se disfruta de verdad.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena (Covent/Soho) - opciones prácticas",
          icon: "utensils",
          desc: "Cena sin traslados innecesarios. Reservar les ahorra tiempo y mal humor.",
          subTitle: "Dishoom / steakhouse / comfort",
          details: [
            "Ventana sugerida: 19:30–21:00.",
            "Opción A: Dishoom (grupo-friendly).",
            "Opción B: steakhouse sólido (cena wow sin inventar).",
            "Opción C: pasta o comfort (rápido y rico).",
            "Tip: reservar entre 19:00–20:00 evita colas de 30–60 min.",
          ],
          options: [
            { title: "Opción A - Dishoom", text: "Black Daal + panes + platos al centro." },
            { title: "Opción B - Steakhouse", text: "Wow simple. Perfecto para cerrar el día." },
            { title: "Opción C - Comfort", text: "Rápido, rico, cero drama." },
          ],
          tips: ["Reservar", "No cruzar media ciudad", "Mantener energía"],
          notes:
            "Cierre bonito, pero sin alargar. Mañana es museo grande.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 3 — Abr 2 | British Museum + Soho pubs + cena distinta
    // ------------------------------------------------------------
    abr02: {
      tag: "MUSEO",
      title: "Día 3 | British Museum + Soho pubs + cena distinta",
      goal:
        "Museo bien hecho (sin matarse), tarde caminable, pubs icónicos y una cena diferente. Mantenerlo redondo.",

      events: [
        {
          time: "08:30",
          type: "desayuno",
          title: "Desayuno rápido (modo museo)",
          icon: "coffee",
          desc: "Salir temprano para entrar al museo con calma y sin filas largas.",
          subTitle: "Café + algo simple y listo",
          details: [
            "Ventana sugerida: 08:30–09:15.",
            "Hoy conviene ser ágiles para estar 10:00 adentro.",
          ],
          options: [
            { title: "Opción A - Rápido", text: "Café + pastry + fruta." },
            { title: "Opción B - Un poco más", text: "Si hay hambre real: algo con proteína rápido." },
          ],
          tips: ["No alargar", "Agua", "Entrar temprano"],
          notes:
            "Hoy gana el que mantiene ritmo estable. No se trata de perfección.",
        },

        {
          time: "10:00",
          type: "visita",
          title: "British Museum (bloque grande)",
          icon: "museum",
          desc: "Museo grande, plan claro. Highlights, Great Court y una sección libre.",
          subTitle: "Highlights → Great Court → sección a elección",
          details: [
            "Ventana sugerida: 10:00–13:30.",
            "10:00–11:30: Highlights (Egipto, Grecia y lo esencial).",
            "11:30–12:15: Great Court (arquitectura y fotos).",
            "12:15–13:15: cada quien elige 1 sección (sin intentar todo).",
            "Exhibición ‘Samurai’: dejar como opcional si está en cartelera (se revisa más cerca).",
          ],
          options: [
            { title: "Almuerzo A", text: "Comer cerca o dentro para no romper el flujo." },
            { title: "Almuerzo B", text: "Salir a algo rápido y volver si quieren aire." },
          ],
          tips: ["No intentar ver todo", "1 sección por persona", "Fotos selectivas"],
          notes:
            "La mejor visita es la que termina con energía para la tarde.",
        },

        {
          time: "14:30",
          type: "paseo",
          title: "Neal’s Yard + Seven Dials (diseño + fotos)",
          icon: "map",
          desc: "Zona perfecta para vibe, diseño y fotos, incluso con lluvia.",
          subTitle: "Covent Garden → Neal’s Yard → Seven Dials",
          details: [
            "Ventana sugerida: 14:30–16:30.",
            "Bonus: patios interiores, pasajes, librerías y cafés discretos.",
            "Plan B lluvia: funciona perfecto (mucho interior).",
          ],
          options: [
            { title: "Opción A - Ruta directa", text: "Neal’s Yard 15–20 min + Seven Dials y tiendas puntuales." },
            { title: "Opción B - Café", text: "Un café corto para recargar energía y seguir." },
          ],
          tips: ["No alargar", "Fotos aquí sí valen", "Plan B lluvia fácil"],
          notes:
            "Este bloque da ‘Londres’ sin esfuerzo, pero se disfruta más si no lo hacen eterno.",
        },

        {
          time: "17:30",
          type: "pub",
          title: "Pub Session 2: Soho (2 stops)",
          icon: "beer",
          desc: "Pubs icónicos con regla simple: half pints y máximo dos paradas.",
          subTitle: "Stop 1 French House → Stop 2 Coach & Horses",
          details: [
            "Ventana sugerida: 17:30–19:30.",
            "Stop 1: The French House.",
            "Stop 2: The Coach & Horses.",
            "Extra opcional: un tercer stop solo si van muy bien y hay poco crowd.",
          ],
          options: [
            { title: "Modo tasting", text: "Half pints + 2 pubs máximo." },
            { title: "Modo chill", text: "1 pub + caminar + cena." },
          ],
          tips: ["Half pints", "2 stops max", "No improvisar 5 pubs"],
          notes:
            "Mejor dos lugares buenos que cinco regulares. Eso es estilo concierge.",
        },

        {
          time: "20:00",
          type: "cena",
          title: "Cena: Sri Lanka vibes o alternativa en Soho",
          icon: "utensils",
          desc: "Cena distinta para variar. Pedir al centro y mantenerlo simple.",
          subTitle: "1–2 spicy + 1–2 comfort + 1 side",
          details: [
            "Ventana sugerida: 20:00–21:30.",
            "Para grupo: 1–2 platos spicy, 1–2 comfort y 1 side para compartir.",
            "Si se animan a postre o cóctel: 1 lugar, 1 drink, 45–60 min máximo.",
          ],
          options: [
            { title: "Opción A - Sri Lanka vibes", text: "Pidan al centro. Divertido, sin complicarse." },
            { title: "Opción B - Alternativa Soho", text: "Cualquier lugar bueno cercano. Prioridad logística." },
          ],
          tips: ["No cruzar Londres", "1 drink máximo si salen", "Dormir bien"],
          notes:
            "Hoy ya hubo museo grande. Cierre rico, no largo.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 4 — Abr 3 | Tower + Fish Friday + Mirador + Blackfriar
    // ------------------------------------------------------------
    abr03: {
      tag: "CITY",
      title: "Día 4 | Tower + Fish Friday + Mirador + Blackfriar",
      goal:
        "Tower temprano para ganarle a las colas, buen fish and chips, vistas en golden hour y cierre en un pub espectacular por dentro.",

      events: [
        {
          time: "08:45",
          type: "transporte",
          title: "Salida temprana hacia Tower Hill",
          icon: "train",
          desc: "Hay más gente por temporada. Salir temprano paga.",
          subTitle: "Objetivo: entrar sin comerse una fila eterna",
          details: [
            "Ventana sugerida: 08:45–09:30.",
            "Hoy es día largo. Vamos con mentalidad de ritmo, no de carrera.",
          ],
          options: [
            { title: "Modo temprano", text: "Llegar y entrar sin perder 40 min en cola." },
            { title: "Modo foto rápida", text: "Una foto y adentro. Lo mejor está dentro." },
          ],
          tips: ["Salir temprano", "No improvisar", "Agua"],
          notes:
            "Tower se disfruta el doble cuando le ganan a la primera ola de gente.",
        },

        {
          time: "09:30",
          type: "visita",
          title: "Tower of London (ancla) + Crown Jewels",
          icon: "landmark",
          desc: "Orden correcto: Crown Jewels primero, luego murallas y puntos clave.",
          subTitle: "Crown Jewels al abrir = menos cola",
          details: [
            "Ventana sugerida: 09:30–12:30.",
            "Primer objetivo: Crown Jewels al abrir (las colas crecen rápido).",
            "Luego: exteriores, murallas y 2–3 puntos clave.",
          ],
          options: [
            { title: "Modo eficiente", text: "Jewels → murallas → puntos clave." },
            { title: "Modo foto", text: "Exteriores y muralla primero, sin obsesionarse." },
          ],
          tips: ["Jewels primero", "No intentar todo", "Respirar"],
          notes:
            "Si controlan el orden, Tower se siente épica y cero agotadora.",
        },

        {
          time: "12:40",
          type: "walk",
          title: "Tower Bridge exterior + mini-walk",
          icon: "camera",
          desc: "20–30 min de fotos y queda perfecto. No hace falta entrar.",
          subTitle: "Si hay 15 min extra: St Katharine Docks",
          details: [
            "Ventana sugerida: 12:40–13:10.",
            "Fotos rápidas y buenas, sin desviarse.",
            "Bonus 15 min: St Katharine Docks si el clima está lindo.",
          ],
          options: [
            { title: "Opción A - Solo puente", text: "20–30 min y seguir." },
            { title: "Opción B - Docks", text: "15 min extra para fotos tranquilas." },
          ],
          tips: ["Fotos rápidas", "No entrar si no es prioridad"],
          notes:
            "Es el postre visual perfecto después de Tower.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Fish Friday (según ubicación y energía)",
          icon: "utensils",
          desc: "Comer eficiente para que el mirador valga la tarde.",
          subTitle: "Prioridad: logística (no cruzar Londres solo por comer)",
          details: [
            "Ventana sugerida: 13:30–14:30.",
            "Opción A: fish and chips conocido, solo si queda bien por ruta.",
            "Opción B: mariscos clásico si ya van rumbo West End.",
            "Opción C: plan práctico cerca. Mejor bueno y cerca que perfecto y lejos.",
          ],
          options: [
            { title: "Opción A - ‘Famoso’", text: "Solo si queda razonable en la ruta." },
            { title: "Opción B - Clásico", text: "Si ya van moviéndose hacia el centro." },
            { title: "Opción C - Práctico", text: "Cerca y rico. Cero pérdida de tiempo." },
          ],
          tips: ["No cruzar media ciudad", "Comer ágil", "Agua"],
          notes:
            "El premio del día es el golden hour desde arriba, no el traslado al restaurante.",
        },

        {
          time: "15:30",
          type: "mirador",
          title: "Mirador para golden hour (A/B/C)",
          icon: "view",
          desc: "Vistas con luz bonita. Lleguen 30–45 min antes para buen spot.",
          subTitle: "Plan A Sky Garden · Plan B Garden at 120 · Plan C el disponible",
          details: [
            "Ventana sugerida: 15:30–18:30.",
            "Plan A: Sky Garden (con reserva).",
            "Plan B: The Garden at 120 (salvavidas top).",
            "Tip foto: llegar antes es la clave. A la hora exacta ya está lleno.",
          ],
          options: [
            { title: "Plan A - Sky Garden", text: "Si hay reserva, el flow es el mejor." },
            { title: "Plan B - Garden at 120", text: "Funciona excelente si Sky Garden no se puede." },
            { title: "Plan C - Otro mirador", text: "El que esté disponible ese día. Sin obsesión." },
          ],
          tips: ["Llegar antes", "No llegar a la hora exacta", "Aquí sí valen las fotos"],
          notes:
            "Este bloque es el wow visual del día. Háganlo con tiempo.",
        },

        {
          time: "19:30",
          type: "pub",
          title: "Pub Session 3: The Blackfriar (imperdible)",
          icon: "beer",
          desc: "Interior Arts & Crafts. Se siente Londres clásico sin caer en tourist trap.",
          subTitle: "2 rondas + whisky opcional (1 dram max)",
          details: [
            "Ventana sugerida: 19:30–20:30.",
            "Ronda 1: cask ale o bitter (half pint).",
            "Ronda 2: stout/porter si hay.",
            "Whisky: si les provoca, 1 dram por persona máximo.",
          ],
          options: [
            { title: "Modo beer tasting", text: "Half pints y comparar estilos." },
            { title: "Modo whisky light", text: "Un dram por persona y listo." },
          ],
          tips: ["Half pints", "No maratón", "Snack ligero"],
          notes:
            "Cierra perfecto: interior wow, vibe clásica y sin sobrecomplicarse.",
        },

        {
          time: "20:45",
          type: "cena",
          title: "Cena cerca (sin traslados innecesarios)",
          icon: "utensils",
          desc: "Hoy no vale cruzar Londres por un restaurante. Prioridad: descanso.",
          subTitle: "City/Temple/Soho según dónde terminen",
          details: [
            "Ventana sugerida: 20:45–22:15.",
            "Opción A: cenar cerca (City/Temple) y listo.",
            "Opción B: volver al West End solo si el grupo está entero.",
          ],
          options: [
            { title: "Opción A - Cerca", text: "Cero fricción. Día ganado." },
            { title: "Opción B - West End", text: "Solo si están con energía y cero cansancio mental." },
          ],
          tips: ["No cruzar media ciudad", "Dormir manda", "Agua"],
          notes:
            "Día 4 se gana con un cierre inteligente, no con kilómetros extra.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 5 — Abr 4 | Salida a York
    // ------------------------------------------------------------
    abr04: {
      tag: "YORK",
      title: "Día 5 | Salida a York (logística perfecta)",
      goal:
        "Desayuno simple, salida sin estrés y tren sin carreras. Llegar a York con energía.",

      events: [
        {
          time: "08:00",
          type: "desayuno",
          title: "Desayuno rápido y útil",
          icon: "coffee",
          desc: "Hoy no buscamos brunch. Buscamos eficiencia.",
          subTitle: "Café + pastry/fruta o sándwich",
          details: ["Ventana sugerida: 08:00–09:00.", "Algo fácil, sin alargar."],
          options: [
            { title: "Opción A - Muy rápido", text: "Café + pastry + fruta." },
            { title: "Opción B - Sándwich", text: "Para ir más seguros y no llegar con hambre." },
          ],
          tips: ["No alargar", "Agua", "Batería"],
          notes:
            "La mañana de tren se siente premium cuando todo está simple y claro.",
        },

        {
          time: "09:45",
          type: "logística",
          title: "Check-out + salida a King’s Cross",
          icon: "train",
          desc: "Con maletas, Taxi/Uber suele ser la mejor jugada. Lleguen con margen.",
          subTitle: "Menos escaleras, menos cambios, menos estrés",
          details: [
            "Ventana sugerida: 09:45–10:15 salida.",
            "Taxi/Uber recomendado con equipaje.",
            "Buffer: llegar 45–60 min antes a la estación.",
          ],
          options: [
            { title: "Opción A - Taxi/Uber (recomendado)", text: "Puerta a puerta con maletas. Cero drama." },
            { title: "Opción B - Tube", text: "Solo si van ligeros y el grupo está con energía." },
          ],
          tips: ["Buffer 60 min", "Agua y snacks", "Nada de correr en estación"],
          notes:
            "King’s Cross con calma es otra cosa. Mejor llegar sobrado que llegar sudando.",
        },

        {
          time: "11:33",
          type: "tren",
          title: "Tren a York (ya reservado)",
          icon: "ticket",
          desc: "Agua y snacks antes de abordar. Luego audífonos y descanso.",
          subTitle: "11:33–13:27",
          details: [
            "Compren agua y snacks antes de subir.",
            "Momento foto rápido y luego descanso.",
            "Clave: ir juntos y cómodos para llegar bien a York.",
          ],
          options: [
            { title: "Modo chill", text: "Audífonos y descanso. Llegar a York con energía." },
            { title: "Modo snack", text: "Algo ligero y agua. No llegar con hambre." },
          ],
          tips: ["Agua", "Snacks", "Batería"],
          notes:
            "Este tren es transición. La idea es llegar a York frescos, no reventados.",
        },
      ],
    },
  },
};

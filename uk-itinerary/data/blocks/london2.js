export const london2 = {
  id: "london2",
  name: "LONDRES II",
  color: "#1c1917",
  hotel: "London Marriott Hotel County Hall",
  dates: "10 Abr - 14 Abr",
  base: "South Bank / Westminster (cero esfuerzo, máximo impacto)",
  daysOrder: ["abr10", "abr11", "abr12", "abr13", "abr14"],

  rules: {
    title: "ESTRATEGIA DEL BLOQUE",
    subtitle: "Reencuentro total + grandes eventos sin fricción.",
    bullets: [
      "Grupo completo (5 pax): Jorge, Vanya, Lucas, Fisha, Osvaldo.",
      "Osvaldo regresa: ahora toca Londres visual/experiencial (HP, estadio, WB Tour) y no museos pesados.",
      "County Hall es ventaja brutal: Big Ben / Parliament / London Eye se tachan caminando.",
      "Pendientes 1/1/1/1: Kew Gardens + Dishoom. Dishoom se ‘guarda’ para cierre si no cae el viernes.",
      "Logística 5 pax: Uber Van/2 taxis. Reservas (teatro + roasts + cenas) = obligatorias.",
    ],
  },

  days: {
    // ------------------------------------------------------------
    // DÍA 11 — Vie 10 Abr | Reagrupación + Vistas de Postal + Cena
    // ------------------------------------------------------------
    abr10: {
      tag: "REENCUTRO",
      title: "Día 11 | Reagrupación + vistas de postal + cena relajada",
      goal:
        "Unir al grupo sin estrés: llegada desde Edimburgo + recibimiento de Fisha/Osvaldo + golden hour caminable.",
      events: [
        {
          time: "15:10",
          type: "tren",
          title: "Llegada a King’s Cross (Jorge/Vanya/Lucas)",
          icon: "train",
          desc:
            "Vienen con maletas y de viaje: aquí se compra comodidad, no heroicidad en el Tube.",
          subTitle: "Taxi/Uber directo al hotel",
          details: [
            "Recomendación: Taxi/Uber directo al Marriott County Hall (puerta a puerta).",
            "Costo-beneficio: dividido entre 3, vale totalmente la pena.",
            "Checklist express: tickets/IDs listos, agua, baño si hace falta antes de salir.",
          ],
          options: [
            { title: "Modo cero fricción", text: "Taxi directo y check-in sin vueltas." },
            { title: "Modo práctico", text: "Si hay tráfico, igual taxi: menos cambios, menos estrés." },
          ],
          tips: ["Taxi con maletas", "Agua", "No Tube con equipaje"],
          notes:
            "County Hall se disfruta más si llegan frescos, no sudados.",
        },

        {
          time: "16:00",
          type: "hotel",
          title: "Check-in @ Marriott County Hall + reencuentro",
          icon: "hotel",
          desc:
            "Edificio histórico frente al Parlamento. Lobby y biblioteca = fotos top sin salir.",
          subTitle: "Reset 45 min",
          details: [
            "Reset: ducha rápida, cambio de ropa, power bank.",
            "Fisha/Osvaldo: llegan por su cuenta y se ven aquí.",
            "Regla: 45 min y afuera. Hoy la magia está caminando el río.",
          ],
          options: [
            { title: "Modo express", text: "Reset rápido y salida al golden hour." },
            { title: "Modo comfy", text: "Si vienen muy cansados, bajen el ritmo, pero no se encueven." },
          ],
          tips: ["Power bank", "Capas", "Salir a golden hour"],
          notes:
            "Este hotel es un ‘cheat code’ de Londres.",
        },

        {
          time: "17:15",
          type: "paseo",
          title: "South Bank Golden Hour Walk (cero esfuerzo, máximo impacto)",
          icon: "view",
          desc:
            "La caminata que hace que Osvaldo ‘sienta’ Londres de inmediato: Big Ben, Parlamento, London Eye en una sola secuencia.",
          subTitle: "Ruta corta + postales",
          details: [
            "Ruta: Hotel → Jubilee Gardens (abajo del London Eye) → Westminster Bridge.",
            "Tachan: Big Ben + Parliament + London Eye (prioridad 1/1/1/1).",
            "Tip foto: esquina del puente con el león de piedra + Big Ben de fondo.",
          ],
          options: [
            { title: "Modo foto pro", text: "15–20 min de fotos + caminar suave y regreso." },
            { title: "Modo chill", text: "Solo caminar y 2 fotos clave, sin detenerse mucho." },
          ],
          tips: ["Fotos en el puente", "No alargar", "Capas (viento)"],
          notes:
            "Esto es la ‘postal obligatoria’ sin transporte.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena de bienvenida (logística cero)",
          icon: "utensils",
          desc:
            "Tres opciones perfectas según energía. La idea: comer rico sin perder el grupo.",
          subTitle: "A/B/C según cansancio",
          details: [
            "Opción A (segura): Skylon (Royal Festival Hall) — vistas al río, moderno, 5 min caminando.",
            "Opción B (favorito Osvaldo): Dishoom Covent Garden — si hay energía (si no, se guarda para el lunes).",
            "Opción C (cansancio): Gillray’s Steakhouse (dentro del Marriott) — gran carne sin salir del hotel.",
          ],
          options: [
            { title: "Opción A - Skylon", text: "La más redonda para hoy (caminable + vistas)." },
            { title: "Opción B - Dishoom", text: "Si el grupo está con gasolina y quieren ‘banquete’." },
            { title: "Opción C - Gillray’s", text: "Si vienen fundidos: cero traslados." },
          ],
          tips: ["Elegir por energía", "No complicarse", "Reserva si se puede"],
          notes:
            "Hoy gana la logística. Mañana es teatro largo.",
        },

        {
          time: "21:30",
          type: "logística",
          title: "Cierre corto",
          icon: "moon",
          desc:
            "A dormir. Mañana es maratón de teatro y necesitan cabeza clara.",
          subTitle: "Regla: descanso > after",
          details: [
            "Si cenaron cerca: regreso caminando.",
            "Si cenaron lejos: Uber directo al hotel.",
          ],
          options: [
            { title: "Modo pro", text: "Hotel y a dormir. Sin negociación." },
          ],
          tips: ["Dormir", "Hidratación", "No alargar"],
          notes:
            "El sábado se gana con sueño.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 12 — Sáb 11 Abr | Harry Potter and the Cursed Child (FIJO)
    // ------------------------------------------------------------
    abr11: {
      tag: "TEATRO",
      title: "Día 12 | Harry Potter and the Cursed Child (día fijo)",
      goal:
        "Sobrevivir al teatro (doble función) con comida táctica y sin dormirse en la segunda parte.",
      events: [
        {
          time: "09:00",
          type: "desayuno",
          title: "Desayuno ligero",
          icon: "coffee",
          desc:
            "Café + algo pequeño. No se claven: hoy hay lunch temprano y cena en intermedio.",
          subTitle: "Ligero y eficiente",
          details: [
            "Objetivo: salir 10:30 hacia Covent/Soho sin prisa.",
          ],
          options: [
            { title: "Modo rápido", text: "Café + pastry y listo." },
            { title: "Modo hotel", text: "Si el hotel conviene, 30–40 min máximo." },
          ],
          tips: ["Ligero", "No desayuno eterno", "Agua"],
          notes:
            "Guardar energía para el día largo.",
        },

        {
          time: "10:30",
          type: "paseo",
          title: "Pre-teatro: Covent Garden (vibe visual)",
          icon: "map",
          desc:
            "Buskers + Apple Market. Perfecto para Osvaldo: ambiente visual sin museo.",
          subTitle: "Calentamiento del día",
          details: [
            "Zona cerca del teatro (Shaftesbury Ave / Covent).",
            "No se extiendan: hoy la agenda es fija.",
          ],
          options: [
            { title: "Modo buskers", text: "Ver 1–2 actos y seguir." },
            { title: "Modo shopping", text: "Apple Market rápido (20–30 min)." },
          ],
          tips: ["No perder tiempo", "Fotos", "Mantener ritmo"],
          notes:
            "Esto pone mood sin cansar.",
        },

        {
          time: "12:45",
          type: "logística",
          title: "Llegada al Palace Theatre + buffer",
          icon: "ticket",
          desc:
            "Entradas digitales + seguridad toman tiempo. Llegar con margen evita el único drama del día.",
          subTitle: "Punto de encuentro claro",
          details: [
            "Tener tickets en Wallet y baterías cargadas.",
            "Punto si alguien se pierde: ‘afuera del pub cruzando la calle’.",
          ],
          options: [
            { title: "Modo pro", text: "Todos juntos antes de entrar." },
          ],
          tips: ["Tickets listos", "Batería", "Buffer real"],
          notes:
            "Teatro se disfruta cuando no corren.",
        },

        {
          time: "14:00",
          type: "evento",
          title: "Show Parte 1 (fijo)",
          icon: "sparkles",
          desc:
            "Disfruten la magia. Nada que optimizar aquí: solo gozar.",
          subTitle: "Parte 1",
          details: ["Entren hidratados y con snack ligero si lo necesitan."],
          options: [{ title: "Tip", text: "Baño antes de empezar." }],
          tips: ["Baño antes", "Agua"],
          notes:
            "El intermedio es el verdadero reto logístico.",
        },

        {
          time: "16:50",
          type: "cena",
          title: "Cena táctica del intermedio (RESERVAR YA)",
          icon: "utensils",
          desc:
            "Tienen ~2 horas y Soho se llena. Sin reserva, pierden el bloque. Aquí se juega pro.",
          subTitle: "Platos directos, servicio rápido",
          details: [
            "Opción A: Flat Iron Denmark Street (carne rápida, rica, eficiente).",
            "Opción B: Bancone (si no fueron / o si quieren repetir) — pasta rápida.",
            "Regla: nada de menús largos. Entrar, comer, salir.",
          ],
          options: [
            { title: "Opción A - Flat Iron", text: "La opción más eficiente para intermedio." },
            { title: "Opción B - Bancone", text: "Pasta rápida, cero falla si hay reserva." },
          ],
          tips: ["Reservar", "Platos directos", "No sobremesa", "Pedir rápido"],
          notes:
            "Este bloque decide si la Parte 2 se disfruta o se sufre.",
        },

        {
          time: "19:00",
          type: "evento",
          title: "Show Parte 2 (fijo)",
          icon: "sparkles",
          desc:
            "Con cena táctica, llegan felices y despiertos. Eso es todo.",
          subTitle: "Parte 2",
          details: ["Regreso al teatro con 15–20 min de margen."],
          options: [{ title: "Tip", text: "Baño rápido antes de sentarse." }],
          tips: ["Llegar con margen", "No correr"],
          notes:
            "Termina tarde. Cierre corto.",
        },

        {
          time: "21:45",
          type: "bar",
          title: "Salida + drink rápido (opcional)",
          icon: "glass",
          desc:
            "Si hay energía: un cocktail corto en Soho. Si no: Uber al hotel sin culpa.",
          subTitle: "Decisión por energía",
          details: [
            "Opciones: Swift o Bar Termini (1 drink y listo).",
            "Si están cansados: directo al hotel.",
          ],
          options: [
            { title: "Plan A", text: "1 cocktail rápido." },
            { title: "Plan B", text: "Uber directo y dormir." },
          ],
          tips: ["Corto", "No alargar", "Dormir manda"],
          notes:
            "Mañana es domingo británico clásico.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 13 — Dom 12 Abr | Mercado foodie + Fútbol + Sunday Roast
    // ------------------------------------------------------------
    abr12: {
      tag: "DOMINGO",
      title: "Día 13 | Mercado foodie + fútbol + Sunday Roast",
      goal:
        "Domingo británico perfecto: mercado, deporte y carne. Mantenerlo fluido para 5 pax.",
      events: [
        {
          time: "09:30",
          type: "desayuno",
          title: "Desayuno muy ligero",
          icon: "coffee",
          desc:
            "Solo café (o algo mínimo). Guardan espacio para el mercado.",
          subTitle: "Ligero",
          details: ["Objetivo: llegar 11:00 al mercado con hambre real."],
          options: [{ title: "Tip", text: "Agua + café y listo." }],
          tips: ["Ligero", "No alargar"],
          notes:
            "Hoy se come en bloques.",
        },

        {
          time: "11:00",
          type: "comida",
          title: "Maltby Street Market (Bermondsey)",
          icon: "utensils",
          desc:
            "Callejón estrecho (‘Rope Walk’). Para Osvaldo (3), se vuelve fácil si le damos ‘asiento’ mientras otros hacen fila.",
          subTitle: "Dividir y conquistar (5 pax)",
          details: [
            "Estrategia: dividirse en parejas y luego compartir.",
            "Must eat: sándwich de The Beef Steaks, gyoza, brownies.",
            "Tip Osvaldo: bar de ginebra al inicio / vinos al final para sentarse mientras otros hacen fila.",
            "Duración: 60–90 min máximo (no agobiar).",
          ],
          options: [
            { title: "Modo pro", text: "Parejas: 2 filas en paralelo + share." },
            { title: "Modo Osvaldo feliz", text: "Osvaldo se sienta con drink, otros hacen fila." },
          ],
          tips: ["Dividirse", "Share", "No pasar 90 min", "Asiento para descanso"],
          notes:
            "Mercado se disfruta cuando no se vuelve maratón.",
        },

        {
          time: "13:00",
          type: "logística",
          title: "Regreso / pausa antes del partido",
          icon: "home",
          desc:
            "Pequeño reset según dónde vean el partido. Hoy el timing del pub es todo.",
          subTitle: "Buffer pre-pub",
          details: [
            "Si van lejos (Kensington): salgan con tiempo.",
            "Objetivo: estar 60–75 min antes para agarrar mesa.",
          ],
          options: [
            { title: "Modo pro", text: "Salir temprano y asegurar mesa." },
            { title: "Modo chill", text: "Si ya están cerca, igual llegar con margen." },
          ],
          tips: ["Buffer real", "No llegar al kickoff"],
          notes:
            "Los pubs de deportes se llenan brutal en domingo.",
        },

        {
          time: "15:00",
          type: "evento",
          title: "PARTIDO en sports pub (The Famous Three Kings - Kensington)",
          icon: "tv",
          desc:
            "El mejor para ver varios deportes. La clave: llegar antes y asegurar visión.",
          subTitle: "Mesa + visión + pub food",
          details: [
            "Llegar 60–75 min antes para mesa buena.",
            "Consumo: alitas/nachos + pintas.",
            "Tip: definan punto de encuentro adentro (barra principal).",
          ],
          options: [
            { title: "Modo pro", text: "Mesa con vista directa y orden temprano." },
            { title: "Modo flexible", text: "Si está imposible, plan B: pub cercano al hotel." },
          ],
          tips: ["Llegar temprano", "Mesa buena", "Ordenar rápido"],
          notes:
            "Este bloque es para Osvaldo: experiencia, no museo.",
        },

        {
          time: "20:00",
          type: "cena",
          title: "Sunday Roast en Blacklock (Soho o City) — RESERVA OBLIGATORIA",
          icon: "utensils",
          desc:
            "Uno de los mejores roasts de Londres. Vibe ruidosa, divertida y perfecta para 5.",
          subTitle: "Carne top",
          details: [
            "Si queda roast: perfecto. Si no: sus chops son el plan.",
            "Reservar sí o sí (domingo se llena).",
          ],
          options: [
            { title: "Plan A", text: "Blacklock Soho." },
            { title: "Plan B", text: "Blacklock City." },
          ],
          tips: ["Reservar", "No llegar tarde", "Disfrutar sin prisa"],
          notes:
            "Cierre perfecto de domingo.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 14 — Lun 13 Abr | Warner Bros. Studio Tour (Harry Potter)
    // ------------------------------------------------------------
    abr13: {
      tag: "HARRY",
      title: "Día 14 | Warner Bros. Studio Tour (Harry Potter)",
      goal:
        "Logística de tren impecable + tour sin prisas + cena final en Dishoom si no cayó el viernes.",
      events: [
        {
          time: "09:45",
          type: "transporte",
          title: "Salida del Marriott → London Euston (táctica pro-grupo)",
          icon: "car",
          desc:
            "Para 5 pax en hora pico, taxi a Euston suele ser más fácil que Tube con cambios y escaleras.",
          subTitle: "Evitar hora pico con maletas/mochilas",
          details: [
            "Recomendación: 1 Uber Van si aparece, o 2 taxis.",
            "Objetivo: llegar con margen y comprar snacks para trayecto.",
          ],
          options: [
            { title: "Plan A", text: "Uber Van." },
            { title: "Plan B", text: "2 taxis y se ven en la entrada principal de Euston." },
          ],
          tips: ["Taxi > Tube", "Punto de encuentro fijo", "Buffer"],
          notes:
            "Este traslado define el tono del día.",
        },

        {
          time: "10:45",
          type: "tren",
          title: "Tren Euston → Watford Junction (contactless)",
          icon: "train",
          desc:
            "Tren rápido (~20 min). Eviten el stopping service que tarda ~50 min.",
          subTitle: "Elegir tren rápido",
          details: [
            "Pagar con Oyster/Contactless.",
            "Tip: revisen pantallas y eviten el servicio con muchas paradas.",
          ],
          options: [
            { title: "Modo pro", text: "Solo tren rápido. Cero ‘stopping’." },
            { title: "Modo backup", text: "Si solo hay stopping, igual: pero ajusten tiempo." },
          ],
          tips: ["Tren rápido", "Contactless listo", "No perder el tren"],
          notes:
            "Con 5 pax, el error típico es perder 20–30 min aquí.",
        },

        {
          time: "11:15",
          type: "transporte",
          title: "Shuttle bus Harry Potter (Watford Junction → Studios)",
          icon: "bus",
          desc:
            "Bus brandeado afuera de la estación. Aproximado £3. Paguen rápido y suban juntos.",
          subTitle: "Puerta a puerta",
          details: [
            "Tip: tengan contactless listo (o efectivo si lo piden).",
            "Punto de encuentro: justo donde forma la fila del bus.",
          ],
          options: [
            { title: "Modo pro", text: "Subir juntos para no descoordinarse." },
          ],
          tips: ["Contactless listo", "Punto fijo", "No separarse"],
          notes:
            "Esto evita que el grupo se ‘rompa’.",
        },

        {
          time: "12:00",
          type: "evento",
          title: "WB Studio Tour: The Making of Harry Potter (entrada fija)",
          icon: "sparkles",
          desc:
            "Tómense su tiempo. Gran Comedor sin prisa. Butterbeer a mitad del tour (zona exterior).",
          subTitle: "Ritmo sin carreras",
          details: [
            "Gran Comedor: ver bien detalles y fotos con calma.",
            "Butterbeer: mejor a mitad del tour para descanso y ‘reset’.",
            "Osvaldo/Lucas/Fisha: sets + tecnología = su zona feliz.",
          ],
          options: [
            { title: "Modo completo", text: "Hacerlo con calma y sin intentar ‘ganarle’ al tour." },
            { title: "Modo fotos", text: "Fotos selectivas (no 200) para no saturarse." },
          ],
          tips: ["Sin prisa", "Butterbeer mid-tour", "Batería", "Fotos selectivas"],
          notes:
            "Este es el gran evento visual del bloque.",
        },

        {
          time: "17:00",
          type: "transporte",
          title: "Regreso a Londres (misma ruta inversa)",
          icon: "train",
          desc:
            "Shuttle → Watford → Euston. Mantener grupo junto en transbordos.",
          subTitle: "Regreso limpio",
          details: [
            "Regla: todos juntos en estaciones. Punto de encuentro fijo si se separan (salida del andén).",
          ],
          options: [
            { title: "Modo pro", text: "No compras largas en estación. Directo al tren." },
          ],
          tips: ["Todos juntos", "Punto fijo", "No perder tiempo"],
          notes:
            "Llegan cansados: cena final debe ser fácil.",
        },

        {
          time: "20:00",
          type: "cena",
          title: "Cena final: DISHOOM (si no fueron el viernes)",
          icon: "utensils",
          desc:
            "Si no cayó el día 11, hoy es EL día. Vibe de banquete compartido perfecto para despedida.",
          subTitle: "Sede sugerida + pedido base",
          details: [
            "Sede sugerida: Kensington suele tener menos fila que Covent Garden.",
            "Pedido recomendado: Chicken Ruby, Black Daal, Garlic Naan, Okra Fries.",
          ],
          options: [
            { title: "Plan A", text: "Dishoom Kensington (cierre ideal)." },
            { title: "Plan B", text: "Si están destruidos: cena simple cerca del hotel y Dishoom se reubica." },
          ],
          tips: ["Compartir platos", "Reservar/planear fila", "Cierre con intención"],
          notes:
            "Si ya fueron Dishoom el viernes, hoy cena simple y temprano.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 15 — Mar 14 Abr | Últimas compras + Heathrow (vuelo 22:30)
    // ------------------------------------------------------------
    abr14: {
      tag: "SALIDA",
      title: "Día 15 | Últimas compras + Heathrow",
      goal:
        "Aprovechar el día completo sin sufrir con maletas. Cierre elegante y traslado a LHR con buffer real.",
      events: [
        {
          time: "09:30",
          type: "hotel",
          title: "Check-out + maletas en concierge",
          icon: "luggage",
          desc:
            "Dejen todo en el concierge del County Hall. Seguro y práctico.",
          subTitle: "Libertad total",
          details: [
            "Tip: guarden una bolsita con esenciales (cargadores, agua, capa ligera).",
          ],
          options: [
            { title: "Modo pro", text: "Maletas fuera de la mente, día ligero." },
          ],
          tips: ["Concierge", "Esenciales en bolsa", "Batería"],
          notes:
            "Esto convierte el día final en día normal (no día de maletas).",
        },

        {
          time: "11:00",
          type: "paseo",
          title: "Opción ganadora: Notting Hill + Portobello",
          icon: "shopping-bag",
          desc:
            "Visual icónico + compras ligeras + cafés cool. Fisha (1) lo disfruta muchísimo.",
          subTitle: "Último paseo perfecto",
          details: [
            "Casas de colores + Portobello para antigüedades/souvenirs bonitos.",
            "Osvaldo: buen lugar para fotos sin ‘museo’.",
          ],
          options: [
            { title: "Plan A (recomendado)", text: "Notting Hill + Portobello (cero estrés)." },
            {
              title: "Plan B (alternativa 1/1/1/1)",
              text: "Kew Gardens si hay sol perfecto y energía para caminar 3+ horas.",
            },
          ],
          tips: ["Visual", "Compras ligeras", "No cansarse de más"],
          notes:
            "Recomendación: Notting Hill gana por simplicidad y mood.",
        },

        {
          time: "12:00",
          type: "nota",
          title: "Alternativa: Kew Gardens (solo si clima perfecto)",
          icon: "leaf",
          desc:
            "Kew era 1/1/1/1. Se hace únicamente si el día está espectacular y el grupo está con energía.",
          subTitle: "Logística Kew (si aplica)",
          details: [
            "District line hacia Kew.",
            "Lockers: puede haber en Victoria Gate, pero confirmar disponibilidad.",
            "Opciones: ir con maletas (más fricción) o ir sin maletas y volver al hotel (más seguro).",
          ],
          options: [
            { title: "Modo seguro", text: "Notting Hill y listo." },
            { title: "Modo Kew", text: "Solo con sol + energía + timing controlado." },
          ],
          tips: ["No forzar", "Clima manda", "Timing"],
          notes:
            "Kew es precioso, pero no a costa de estresar el día final.",
        },

        {
          time: "15:30",
          type: "logística",
          title: "Regreso al hotel + último reset",
          icon: "home",
          desc:
            "Recoger maletas, baños del lobby, cambio de ropa si conviene para el avión.",
          subTitle: "Reset final",
          details: [
            "Checklist: pasaportes, wallet, baterías, abrigo a mano (LHR puede ser frío).",
            "Objetivo: salir 17:30 con calma.",
          ],
          options: [
            { title: "Modo pro", text: "Todo listo antes de subir al transfer." },
          ],
          tips: ["Baños lobby", "Cambio ropa", "Checklist"],
          notes:
            "Este reset evita ‘buscar cosas’ en el aeropuerto.",
        },

        {
          time: "17:30",
          type: "transporte",
          title: "Traslado a Heathrow (vuelo 22:30)",
          icon: "plane",
          desc:
            "Para 5 pax: transfer privado (Van) o 2 Uber XL. County Hall → LHR puede ser 60–90 min en hora pico.",
          subTitle: "Buffer real",
          details: [
            "Opción premium: private transfer (Van Mercedes) reservado con antelación.",
            "Opción alternativa: 2 Uber XL.",
            "Meta: llegar 19:30 (perfecto para vuelo 22:30).",
          ],
          options: [
            { title: "Plan A (premium)", text: "Private transfer reservado." },
            { title: "Plan B", text: "2 Uber XL (coordinación por punto fijo)." },
          ],
          tips: ["Salgan con tiempo", "Tráfico 60–90 min", "Llegar 19:30"],
          notes:
            "Cierre perfecto = llegar con margen y sin estrés.",
        },
      ],
    },
  },
};

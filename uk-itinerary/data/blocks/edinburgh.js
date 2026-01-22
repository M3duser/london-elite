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
    title: "REGLAS RÁPIDAS",
    subtitle: "Pequeñas decisiones que hacen que Edimburgo se sienta premium.",
    bullets: [
      "Con maletas o viento/lluvia fuerte: taxi. Edimburgo castiga la fricción.",
      "Máximo una subida fuerte al día: Calton Hill sí; Arthur’s Seat solo si amanecen frescos.",
      "Pubs: 1 parada fuerte por noche. Mejor calidad que maratón.",
      "Degustación inteligente: half pints y flights para probar más sin reventarse.",
      "Si el viento está duro: cambien colinas por miradores urbanos + museos + pubs.",
      "Reservas clave: Castillo (slot), Rosslyn (slot), cenas foodie (Kitchin / Little Chartroom), spa si quieren tratamiento.",
    ],
  },

  days: {
    // ------------------------------------------------------------
    // DÍA 6 — Dom 5 Abr | York -> Edinburgh + check-in + cena fácil
    // ------------------------------------------------------------
    abr05: {
      tag: "LLEGADA",
      title: "Día 6 | Llegada a Edimburgo + check-in + cena fácil",
      goal: "Llegar, instalarse, comer bien sin complicarse y dormir. Hoy se gana con simpleza.",
      events: [
        {
          time: "15:30",
          type: "tren",
          title: "Tren York -> Edinburgh Waverley (reservado)",
          icon: "ticket",
          desc: "Tramo perfecto para bajar revoluciones: baño antes, agua lista y un snack para no depender del carrito.",
          subTitle: "Modo pro: descanso primero, planes después",
          details: [
            "Baño antes de subir. Una vez a bordo, todo fluye mejor.",
            "Agua + snack listos (ideal algo salado).",
            "Confirmen vagón/asientos 10–15 min antes para reagrupar sin estrés.",
          ],
          options: [
            { title: "Modo recovery", text: "40–60 min de silencio y descanso. Llegan humanos." },
            { title: "Modo planeación ligera", text: "Definan cena cerca del hotel y cierre temprano." },
          ],
          tips: ["Agua", "Snack", "Reagrupar antes", "Descanso primero"],
          notes: "Este tren es su reset. Úsenlo a su favor.",
        },

        {
          time: "18:10",
          type: "transporte",
          title: "Waverley -> Sheraton (taxi recomendado)",
          icon: "car",
          desc: "Con 5–6 personas y maletas, taxi/Uber gana por tiempo y cero fricción, especialmente si hay viento.",
          subTitle: "Puerta a puerta",
          details: [
            "Objetivo: llegar al hotel sin vueltas ni cambios.",
            "Si hay lluvia o ráfagas, no lo duden: taxi directo.",
          ],
          options: [
            { title: "Opción A - Taxi/Uber", text: "La recomendación con grupo y equipaje." },
            { title: "Opción B - A pie / público", text: "Solo si van ligeros y el clima está amable." },
          ],
          tips: ["Taxi con maletas", "No inventar rutas", "Llegar y resetear"],
          notes: "Edimburgo se disfruta más cuando evitan la fricción del clima.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena cerca (elige según energía)",
          icon: "utensils",
          desc: "Hoy la prioridad es comer bien sin logística. Cena corta y a dormir.",
          subTitle: "Cero estrés",
          details: [
            "Opción A: pub cómodo cerca del hotel (la más fácil).",
            "Opción B: steak / cocina moderna (wow sin formalidad) si reservan.",
            "Opción C: room service si llegan destruidos (válido y smart).",
          ],
          options: [
            { title: "Opción A - Pub cómodo", text: "Rico, rápido y sin complicarse." },
            { title: "Opción B - Wow sin formalidad", text: "Si el grupo viene con energía y reserva." },
            { title: "Opción C - Room service", text: "Cierre premium cuando el cuerpo pide cama." },
          ],
          tips: ["Cerca del hotel", "No traslados", "Hidratación", "Dormir manda"],
          notes: "Mañana hay castillo: hoy es inversión en energía.",
        },

        {
          time: "21:00",
          type: "paseo",
          title: "Paseo ultra corto (opcional)",
          icon: "map",
          desc: "Solo si el clima coopera. Un primer vistazo sin convertirlo en caminata.",
          subTitle: "15–30 min máximo",
          details: [
            "Princes Street Gardens (borde) o un mirador urbano fácil.",
            "Si hay viento fuerte: se salta sin culpa.",
            "Si aún hay energía: 1 drink corto en un bar bonito cerca del hotel y listo.",
          ],
          options: [
            { title: "Modo vista", text: "Un vistazo, 2–3 fotos y regreso." },
            { title: "Modo viento", text: "Skip y a dormir. Mañana lo agradecen." },
          ],
          tips: ["Corto", "No enfriarse", "Una sola parada"],
          notes: "El primer día en Edimburgo se gana con un cierre inteligente.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 7 — Lun 6 Abr | Castillo + Royal Mile corto + Museo + Leith foodie + skyline
    // ------------------------------------------------------------
    abr06: {
      tag: "CASTILLO",
      title: "Día 7 | Castillo + museo perfecto + Leith foodie + skyline",
      goal: "Edimburgo esencial sin maratón: castillo temprano, museo flexible si llueve y primer Leith bien hecho.",
      events: [
        {
          time: "08:00",
          type: "desayuno",
          title: "Desayuno práctico (modo grupo)",
          icon: "coffee",
          desc: "Hoy conviene desayunar bien: el castillo se camina y el viento desgasta.",
          subTitle: "Eficiente y sin filas",
          details: [
            "Prioridad: rápido y funcional para salir temprano.",
            "Eviten desayuno largo: el castillo manda el ritmo.",
          ],
          options: [
            { title: "Modo pro", text: "Café + algo salado + algo dulce. Balance perfecto." },
            { title: "Modo ultra eficiente", text: "To-go y directo. Cero fricción." },
          ],
          tips: ["Comer bien", "No alargar", "Agua", "Capas"],
          notes: "Buen desayuno = castillo disfrutado, no sufrido.",
        },

        {
          time: "09:15",
          type: "transporte",
          title: "Traslado al castillo / punto de entrada",
          icon: "car",
          desc: "Si el clima está amable, caminata suave. Si hay viento o lluvia: taxi sin dudar.",
          subTitle: "Clima manda",
          details: [
            "Plan A: caminata tranquila si está bien el día.",
            "Plan B: taxi si llueve o pega el viento (se siente premium).",
          ],
          options: [
            { title: "Plan A - Caminata", text: "Si el día está bonito, suma vibes." },
            { title: "Plan B - Taxi", text: "Si el clima castiga, esto salva el día." },
          ],
          tips: ["Capas", "No llegar tarde", "No sufrir el viento"],
          notes: "Edimburgo premia decisiones prácticas.",
        },

        {
          time: "09:30",
          type: "visita",
          title: "Edinburgh Castle (bloque pesado)",
          icon: "landmark",
          desc: "Estrategia pro: primero lo icónico, luego fortificación/arquitectura y al final las vistas si el clima ayuda.",
          subTitle: "Leer el castillo como fortificación sobre roca",
          details: [
            "Entren directo a lo más icónico al inicio.",
            "Luego recorrido defensivo/arquitectura: capas de muralla + topografía.",
            "Al final: miradores y vistas (solo si el viento coopera).",
          ],
          options: [
            { title: "Modo highlights", text: "Icónico + defensivo + salida con energía." },
            { title: "Modo arquitectos", text: "Menos salas, más lectura de terreno y muralla." },
          ],
          tips: ["Capas", "No intentar todo", "Fotos selectivas", "Vistas al final"],
          notes: "Castillo bien hecho = Edimburgo entendido.",
        },

        {
          time: "12:15",
          type: "walk",
          title: "Royal Mile - best bits (mini-walk eficiente)",
          icon: "camera",
          desc: "Vibes y fotos, sin alargar. Aquí es fácil perder una hora sin darse cuenta.",
          subTitle: "20–40 min máximo",
          details: [
            "Hagan 20–40 min: 2–3 spots y listo.",
            "Regla: no convertirlo en maratón; hoy hay museo + Leith.",
          ],
          options: [
            { title: "Modo eficiente", text: "Fotos clave y seguir." },
            { title: "Modo cine", text: "Buscar 1–2 encuadres con faroles/piedra y listo." },
          ],
          tips: ["No alargar", "Fotos rápidas", "Mantener ritmo"],
          notes: "El segundo acto del día se disfruta más si aquí son disciplinados.",
        },

        {
          time: "13:15",
          type: "visita",
          title: "National Museum of Scotland (perfecto con lluvia)",
          icon: "museum",
          desc: "Ideal para un grupo mixto: ciencia/ingeniería para Osvaldo y arquitectura/museografía para ustedes.",
          subTitle: "Grand Gallery + 2 secciones",
          details: [
            "Entrada general suele ser gratuita (según exposiciones).",
            "Ruta recomendada: Grand Gallery + 2 secciones y listo.",
            "No intenten ver todo: es un museo que se vuelve infinito.",
          ],
          options: [
            { title: "Ruta A - Ciencia/ingeniería", text: "Para Osvaldo: secciones técnicas y ciencia." },
            { title: "Ruta B - Diseño/espacio", text: "Para ustedes: interiores, montaje y narrativa." },
          ],
          tips: ["No ver todo", "2 secciones", "Reset mental"],
          notes: "Museo bien dosificado = tarde con energía.",
        },

        {
          time: "15:30",
          type: "café",
          title: "Reset / café (baño + decidir energía real)",
          icon: "coffee",
          desc: "Parada corta para recalibrar: si el viento está fuerte, ajusten el plan sin culpa.",
          subTitle: "15–30 min",
          details: [
            "Café rápido + baño.",
            "Decidir: ¿Leith y Calton? ¿o solo Leith y regreso temprano?",
          ],
          options: [
            { title: "Modo pro", text: "Corto y efectivo. No alargar la pausa." },
            { title: "Modo clima", text: "Si el viento está duro, recortar colina al final." },
          ],
          tips: ["Corto", "Baño", "Revisar clima", "Capas"],
          notes: "Esta mini pausa evita que el día se rompa.",
        },

        {
          time: "16:15",
          type: "transporte",
          title: "Traslado a Leith (taxi recomendado)",
          icon: "car",
          desc: "Leith se disfruta más si llegan frescos. Taxi = energía guardada para lo bueno.",
          subTitle: "Llegar sin cansancio",
          details: [
            "Con grupo, taxi suele ser lo más eficiente.",
            "Leith vale por la comida, pubs y vibe; no lleguen fundidos.",
          ],
          options: [
            { title: "Opción A - Taxi", text: "Recomendado: cero fricción." },
            { title: "Opción B - Público", text: "Solo si el clima está perfecto y van con tiempo." },
          ],
          tips: ["Taxi", "Guardar energía", "No llegar tarde"],
          notes: "Leith es su ‘acto foodie’ del día.",
        },

        {
          time: "17:00",
          type: "pub",
          title: "Pub Session Leith: Teuchters Landing (walk-in)",
          icon: "beer",
          desc: "Perfecto para cervezas + primer whisky sin formalidad. Aquí manda la degustación inteligente.",
          subTitle: "Half pints + 1 whisky por persona (máx)",
          details: [
            "Tip tasting: half pints para probar 2 estilos sin cansarse.",
            "Whisky: 1 por persona máximo, o un flight para compartir.",
          ],
          options: [
            { title: "Modo beer", text: "Half pint cask + half pint stout/porter si hay." },
            { title: "Modo whisky light", text: "1 dram por persona o flight compartido." },
          ],
          tips: ["Half pints", "1 whisky máximo", "Una sola parada fuerte"],
          notes: "Pubs premium = calidad, no cantidad.",
        },

        {
          time: "18:30",
          type: "cena",
          title: "Cena (lunes top y realista): The Little Chartroom (si hay reserva)",
          icon: "utensils",
          desc: "Cierre alto sin ponerse formal: perfecto para lunes si logran mesa.",
          subTitle: "Plan B: cena buena en Leith sin complicarse",
          details: [
            "Si hay reserva: perfecto para cerrar el día.",
            "Si no: elijan una cena buena y cercana. La logística manda.",
          ],
          options: [
            { title: "Plan A - Little Chartroom", text: "Cierre foodie con vibra relajada." },
            { title: "Plan B - Leith casual top", text: "Buena comida sin pelear por reservas." },
          ],
          tips: ["Reservas ayudan", "No cruzar la ciudad", "Cierre corto"],
          notes: "Después del castillo, la cena debe sentirse fácil.",
        },

        {
          time: "20:30",
          type: "mirador",
          title: "Calton Hill (opcional) - foto nocturna",
          icon: "view",
          desc: "Si el viento coopera, 20–30 min de fotos y bajan. Si no, cambien por cocktail corto cerca del hotel.",
          subTitle: "Una subida al día, máximo",
          details: [
            "Si hay viento fuerte: no forzar. Edimburgo no perdona arriba.",
            "Si suben: 20–30 min, fotos, y bajan antes de enfriarse.",
          ],
          options: [
            { title: "Plan A - Calton", text: "Subida corta, fotos, salida." },
            { title: "Plan B - Cocktail cerca", text: "Cierre bonito sin pelear con el clima." },
          ],
          tips: ["Viento manda", "Corto", "Capas", "No maratón"],
          notes: "La mejor foto es la que no les cuesta el día siguiente.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 8 — Mar 7 Abr | Dean Village + Water of Leith + Stockbridge + cena wow
    // ------------------------------------------------------------
    abr07: {
      tag: "FOTOS",
      title: "Día 8 | Dean Village + naturaleza urbana + Stockbridge + cena wow",
      goal: "El día más fotogénico: arquitectura + río + barrios finos, y llegar enteros a una cena top.",
      events: [
        {
          time: "08:00",
          type: "desayuno",
          title: "Desayuno eficiente (para ganarle a Dean Village)",
          icon: "coffee",
          desc: "Dean Village se llena: salir temprano hace que las fotos sean más limpias y el paseo más tranquilo.",
          subTitle: "Rápido y funcional",
          details: ["Hoy: desayuno corto. El premio es la luz y menos gente."],
          options: [
            { title: "Modo pro", text: "Café + algo salado + algo dulce." },
            { title: "Modo to-go", text: "Si el grupo quiere salir ya: perfecto." },
          ],
          tips: ["Salir temprano", "No alargar", "Capas"],
          notes: "La primera hora define si este día se siente ‘postal’ o ‘multitud’.",
        },

        {
          time: "09:15",
          type: "transporte",
          title: "Traslado a Dean Village (según clima)",
          icon: "car",
          desc: "Si el día está lindo, caminata suave. Si está feo, taxi: guardan energía para el río.",
          subTitle: "Clima manda",
          details: [
            "Taxi si hay viento/lluvia.",
            "Caminata si está amable y el grupo va bien.",
          ],
          options: [
            { title: "Plan A - Caminata", text: "Suma vibes cuando el clima coopera." },
            { title: "Plan B - Taxi", text: "Salva el día cuando el clima castiga." },
          ],
          tips: ["Taxi si está feo", "Capas", "No perder tiempo"],
          notes: "Decisión práctica = día premium.",
        },

        {
          time: "09:45",
          type: "paseo",
          title: "Dean Village (foto + arquitectura)",
          icon: "camera",
          desc: "Arquitectura y escala humana junto al río. Fotos muy fáciles si el flujo es corto y limpio.",
          subTitle: "Hidden gem: Well Court (Arts & Crafts)",
          details: [
            "Tip foto: encuadres bajos + líneas del río + textura de piedra.",
            "Well Court vale la mini desviación por detalles y composición.",
          ],
          options: [
            { title: "Modo foto pro", text: "30–45 min máximo para no quemar la mañana." },
            { title: "Modo arquitectura", text: "Detalles, materialidad, proporción y listo." },
          ],
          tips: ["Corto", "Fotos limpias", "No alargar"],
          notes: "Dean Village se disfruta más en dosis perfecta, no en overstay.",
        },

        {
          time: "10:45",
          type: "walk",
          title: "Water of Leith Walkway -> Stockbridge",
          icon: "map",
          desc: "Naturaleza real sin salir de la ciudad. Osvaldo aquí va a estar feliz.",
          subTitle: "Naturaleza urbana (suave)",
          details: [
            "Ruta suave hacia Stockbridge.",
            "Plan lluvia: tramo corto (15–20 min) y taxi a Stockbridge.",
          ],
          options: [
            { title: "Plan A - Caminata completa", text: "Si el clima coopera, es de lo mejor del viaje." },
            { title: "Plan B - Tramo corto", text: "Si llueve, mantengan lo bonito y recorten lo incómodo." },
          ],
          tips: ["Capas", "No forzar si llueve", "Guardar energía"],
          notes: "Este paseo es la pausa perfecta entre fotos y comida.",
        },

        {
          time: "12:30",
          type: "comida",
          title: "Lunch: The Scran & Scallie (Stockbridge)",
          icon: "utensils",
          desc: "Pub moderno muy bien hecho. Perfecto para grupo y para recargar sin hacerse pesado.",
          subTitle: "Platos al centro (modo pro-grupo)",
          details: [
            "Tip: 2–3 platos al centro + 1 por persona para probar más variedad.",
            "Mantenerlo rico pero no excesivo: la tarde sigue.",
          ],
          options: [
            { title: "Modo compartir", text: "Se prueba más y se tarda menos." },
            { title: "Modo ligero", text: "Plato por persona y listo, sin sobremesa eterna." },
          ],
          tips: ["Compartir", "No sobremesa larga", "Agua"],
          notes: "Aquí se siente el Edimburgo ‘local fino’.",
        },

        {
          time: "14:00",
          type: "paseo",
          title: "Naturaleza light (opcional): Botanic Garden o parque cercano",
          icon: "leaf",
          desc: "Un extra elegante si van con energía. Si no, se salta y listo.",
          subTitle: "Opcional inteligente",
          details: [
            "Royal Botanic Garden suele ser una gran opción para caminar suave.",
            "Si ya van cansados: skip sin culpa.",
          ],
          options: [
            { title: "Plan A - Botanic", text: "Caminar suave y reset mental." },
            { title: "Plan B - Skip", text: "Guardar energía para la cena." },
          ],
          tips: ["Opcional", "No forzar", "Guardar energía"],
          notes: "La clave es llegar bien a la noche.",
        },

        {
          time: "15:30",
          type: "paseo",
          title: "New Town (George St / Multrees Walk) + café",
          icon: "shopping-bag",
          desc: "Diseño, tiendas y vibra elegante sin desgaste. Perfecto como puente hacia la noche.",
          subTitle: "Compras sin maratón",
          details: [
            "Paseo curado, sin atravesar media ciudad.",
            "Café corto para recalibrar.",
          ],
          options: [
            { title: "Modo diseño", text: "Tiendas puntuales y regreso." },
            { title: "Modo chill", text: "Café + paseo corto y listo." },
          ],
          tips: ["No alargar", "Café corto", "Mantener ritmo"],
          notes: "Tarde limpia = cena disfrutada.",
        },

        {
          time: "17:15",
          type: "pub",
          title: "Pre-cena: 1 parada corta (Leith o bar de whisky)",
          icon: "beer",
          desc: "Solo si van bien. La regla: una parada corta para llegar perfectos a cena.",
          subTitle: "1 drink y listo",
          details: [
            "Si ya hicieron Teuchters ayer: hoy puede ser un whisky bar alterno (sin maratón).",
            "Mantenerlo corto: 45–60 min máximo.",
          ],
          options: [
            { title: "Modo whisky light", text: "Flight compartido y se van." },
            { title: "Modo cerveza", text: "Half pint y listo." },
          ],
          tips: ["Corto", "No maratón", "Llegar bien a cena"],
          notes: "La noche se gana con disciplina, no con más paradas.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena: The Kitchin (si reservan) / alternativa top en Leith",
          icon: "utensils",
          desc: "Este es el cierre foodie del bloque. Si hay reserva, perfecto. Si no, Leith tiene plan B excelente.",
          subTitle: "Cierre alto",
          details: [
            "Plan A: The Kitchin (con reserva).",
            "Plan B: otra cena muy buena en Leith, más casual pero igual sólida.",
          ],
          options: [
            { title: "Plan A - Kitchin", text: "Cierre elegante y muy escocés." },
            { title: "Plan B - Leith casual top", text: "Igual de rico, menos formalidad." },
          ],
          tips: ["Reserva manda", "No traslados largos", "Cierre corto"],
          notes: "Después de un día fotogénico, la cena debe sentirse ‘recompensa’.",
        },

        {
          time: "22:00",
          type: "paseo",
          title: "Paseo corto / directo a dormir",
          icon: "home",
          desc: "Si el clima está amable, un mini paseo. Si no, cama. Mañana toca reset premium.",
          subTitle: "Cero culpa",
          details: ["Hoy ya fue día largo. Dormir bien es parte del plan."],
          options: [
            { title: "Modo cama", text: "Directo. Recuperación real." },
            { title: "Modo mini paseo", text: "10–15 min y regreso, sin enfriarse." },
          ],
          tips: ["Dormir manda", "No enfriarse", "Hidratación"],
          notes: "El viaje premium también es saber cuándo parar.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 9 — Mié 8 Abr | Rosslyn + naturaleza corta + One Spa + noche flexible
    // ------------------------------------------------------------
    abr08: {
      tag: "RESET",
      title: "Día 9 | Rosslyn + One Spa + noche flexible",
      goal: "Día de reset premium: arquitectura única, recuperación real y una noche sin obligaciones.",
      events: [
        {
          time: "08:00",
          type: "desayuno",
          title: "Desayuno rápido y funcional",
          icon: "coffee",
          desc: "Hoy no vale desayuno eterno. La idea es salir a Rosslyn con ritmo suave y sin prisas.",
          subTitle: "Simple y efectivo",
          details: ["Café + algo salado. Guardar hambre para comer simple después."],
          options: [
            { title: "Modo pro", text: "Rápido y afuera. El día se trata de ritmo." },
            { title: "Modo to-go", text: "Perfecto si quieren salir temprano." },
          ],
          tips: ["No alargar", "Agua", "Capas"],
          notes: "Día premium = pocas fricciones.",
        },

        {
          time: "09:15",
          type: "transporte",
          title: "Traslado a Rosslyn (taxi recomendado)",
          icon: "car",
          desc: "Grupo + clima = taxi gana. Llegar tranquilos mejora la experiencia.",
          subTitle: "Cero fricción",
          details: ["Taxi recomendado. Eviten cambios y esperas."],
          options: [
            { title: "Opción A - Taxi", text: "La opción premium y práctica." },
            { title: "Opción B - Público", text: "Solo si el clima está perfecto y van con tiempo." },
          ],
          tips: ["Taxi", "Capas", "Buffer"],
          notes: "Rosslyn vale llegar con calma.",
        },

        {
          time: "10:15",
          type: "visita",
          title: "Rosslyn Chapel (slot recomendado)",
          icon: "landmark",
          desc: "Una joya de detalle. Mejor con slot: entran directo y se evitan esperas.",
          subTitle: "Modo pro: dividirse por temas y luego compartir",
          details: [
            "Reservar slot evita colas y tiempos muertos.",
            "Divídanse por enfoque: detalle / estructura / símbolos. Luego se cuentan hallazgos.",
          ],
          options: [
            { title: "Modo detalle", text: "Texturas, tallas, patrones y luz." },
            { title: "Modo estructura", text: "Cómo se sostiene, cómo se lee y cómo se recorre." },
          ],
          tips: ["Slot", "Fotos selectivas", "No correr", "Compartir hallazgos"],
          notes: "Este lugar se disfruta cuando lo miran con calma.",
        },

        {
          time: "12:05",
          type: "paseo",
          title: "Naturaleza corta (solo si el clima ayuda)",
          icon: "leaf",
          desc: "Mini paseo verde para cerrar Rosslyn con aire. Si llueve: se salta sin culpa.",
          subTitle: "20–30 min",
          details: [
            "Tramo corto tipo ‘glen/verde’.",
            "Si llueve o hay viento duro: skip.",
          ],
          options: [
            { title: "Plan A - Sí clima", text: "20–30 min y regreso." },
            { title: "Plan B - No clima", text: "Directo a comer y al spa." },
          ],
          tips: ["No forzar", "Capas", "Corto"],
          notes: "La prioridad hoy es llegar al spa con energía.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Lunch simple (no pesado)",
          icon: "utensils",
          desc: "Coman simple para entrar al spa sin fricción. Hoy no es día de comida pesada.",
          subTitle: "Ligero y práctico",
          details: ["Ideal cerca del hotel para no sumar traslados."],
          options: [
            { title: "Modo práctico", text: "Sándwich/ensalada/sopa y listo." },
            { title: "Modo pub light", text: "Algo salado, sin exceso." },
          ],
          tips: ["Ligero", "Cerca", "Agua"],
          notes: "Spa + comida pesada nunca es buena combinación.",
        },

        {
          time: "14:45",
          type: "spa",
          title: "One Spa (Sheraton) - recovery block",
          icon: "sparkles",
          desc: "El bloque que hace que el viaje no se sienta maratón. Aquí recuperan piernas, espalda y mente.",
          subTitle: "Piscina + steam/sauna + lounge",
          details: [
            "Circuito sugerido: piscina / steam / sauna + lounge.",
            "Si quieren tratamiento: reserven horario. Si no, el acceso general basta.",
            "Tip: tómenselo en serio. Este bloque es parte del plan, no un extra.",
          ],
          options: [
            { title: "Modo circuito", text: "Steam/sauna alternados + descanso en lounge." },
            { title: "Modo tratamiento", text: "Si reservan, lleguen 10–15 min antes para no correr." },
          ],
          tips: ["Hidratación", "No prisa", "Reservar si hay tratamiento"],
          notes: "Este día es su seguro anti-cansancio para lo que sigue.",
        },

        {
          time: "19:00",
          type: "noche",
          title: "Noche flexible (elige 1 camino)",
          icon: "moon",
          desc: "Una sola elección, cero compromisos. Hoy el lujo es no forzar.",
          subTitle: "1 plan y se cierra",
          details: [
            "Opción A: evento tipo ‘Science Festival Lates’ si coincide.",
            "Opción B: pub tranquilo (1 parada) + whisky flight.",
            "Opción C: dormir temprano (súper válido).",
          ],
          options: [
            { title: "Opción A - Evento", text: "Ciencia + drinks sin caminar de más." },
            { title: "Opción B - Pub 1 parada", text: "Flight y a dormir." },
            { title: "Opción C - Cama", text: "Recovery real para mañana." },
          ],
          tips: ["1 plan", "No maratón", "Dormir manda"],
          notes: "Día premium = terminar con energía, no con cansancio.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 10 — Jue 9 Abr | Old Town curado + Victoria St + Calton golden hour + música
    // ------------------------------------------------------------
    abr09: {
      tag: "OLD TOWN",
      title: "Día 10 | Old Town curado + Victoria St + Calton + noche escocesa",
      goal: "La postal final: closes seleccionados, Victoria Street y Calton en golden hour, con cena auténtica sin maratón.",
      events: [
        {
          time: "08:30",
          type: "desayuno",
          title: "Desayuno balance (hoy sí conviene)",
          icon: "coffee",
          desc: "Hoy hay mucha caminata en Old Town. Desayuno decente = energía estable.",
          subTitle: "Sin filas largas",
          details: ["Café + algo salado. No sobremesa eterna."],
          options: [
            { title: "Modo balance", text: "Desayuno decente y a caminar." },
            { title: "Modo eficiente", text: "To-go si el clima está raro." },
          ],
          tips: ["Comer decente", "No alargar", "Capas"],
          notes: "Un buen arranque hace que Old Town no se sienta pesado.",
        },

        {
          time: "10:00",
          type: "walk",
          title: "Royal Mile + closes (curado)",
          icon: "camera",
          desc: "Hagan Old Town con curaduría: 2–3 closes máximo para que se sienta especial, no repetitivo.",
          subTitle: "2–3 closes y listo",
          details: [
            "Regla: 2–3 closes máximo.",
            "Elijan uno con escaleras/faroles para fotos ‘cinema’.",
            "Mantengan el flujo: hoy hay Victoria Street y Calton.",
          ],
          options: [
            { title: "Modo cine", text: "1 close con faroles + 1 close con escaleras y listo." },
            { title: "Modo eficiente", text: "Royal Mile corto y directo a Victoria Street." },
          ],
          tips: ["2–3 closes", "No repetición", "Mantener ritmo"],
          notes: "Curaduría = se siente premium.",
        },

        {
          time: "12:20",
          type: "visita",
          title: "Mary King’s Close (opcional)",
          icon: "museum",
          desc: "Solo si el grupo quiere tour guiado y underworld. Si no, se salta sin culpa: Old Town ya lo cubre.",
          subTitle: "Tour guiado",
          details: [
            "Si no quieren tours: skip.",
            "Si van: reserven slot para no perder tiempo.",
          ],
          options: [
            { title: "Plan A - Sí tour", text: "Slot y hacerlo sin prisas." },
            { title: "Plan B - Skip", text: "Sigan con Victoria Street y fotos." },
          ],
          tips: ["Slot si van", "Skip sin culpa", "No forzar"],
          notes: "Hoy manda el flujo y la luz de tarde.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Lunch rápido (45–60 min)",
          icon: "utensils",
          desc: "Comida corta para seguir con energía. Hoy el premio es la tarde fotogénica.",
          subTitle: "Práctico y cercano",
          details: [
            "Street food local o pub lunch.",
            "Eviten cruzar media ciudad: mantenerlo cerca.",
          ],
          options: [
            { title: "Opción A - Pub lunch", text: "Rápido, caliente y cómodo." },
            { title: "Opción B - Street food", text: "Más ágil y mantiene el ritmo." },
          ],
          tips: ["Corto", "Cerca", "Agua"],
          notes: "Lunch inteligente = golden hour disfrutado.",
        },

        {
          time: "14:45",
          type: "paseo",
          title: "Victoria Street + Grassmarket (fotos brutales)",
          icon: "camera",
          desc: "Curvas, desnivel y piedra: aquí salen las fotos más cinematográficas sin esfuerzo.",
          subTitle: "Tiendas + composición urbana",
          details: [
            "Tómense su tiempo, pero sin perder el control del reloj.",
            "Si el viento está duro, busquen refugios y spots cortos entre calles.",
          ],
          options: [
            { title: "Modo foto", text: "2–3 spots fuertes y listo." },
            { title: "Modo tiendas", text: "Tiendas puntuales, sin alargar." },
          ],
          tips: ["Fotos aquí sí", "No perder el reloj", "Capas"],
          notes: "Esta zona es la esencia visual de Old Town.",
        },

        {
          time: "17:30",
          type: "mirador",
          title: "Calton Hill (golden hour)",
          icon: "view",
          desc: "Subida corta, fotos y bajada. Si hay viento duro: 20–30 min y listo.",
          subTitle: "Una subida al día",
          details: [
            "Si hay viento fuerte: suban, 20–30 min de fotos, bajen.",
            "No se queden a congelarse: la foto se logra rápido.",
          ],
          options: [
            { title: "Modo pro", text: "Llegar antes, 20–30 min de fotos y bajar." },
            { title: "Modo clima", text: "Si está imposible, cambien por mirador urbano + bar." },
          ],
          tips: ["Viento manda", "Corto", "Capas", "No enfriarse"],
          notes: "Calton bien hecho = postal final sin desgaste.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena con música / pub escocés (vibe auténtica)",
          icon: "music",
          desc: "Cierre escocés real: música en vivo o pub clásico. La regla: una sola parada fuerte y a dormir.",
          subTitle: "Auténtico, no maratón",
          details: [
            "Opción A: The Piper’s Rest (música en vivo, vibe local).",
            "Opción B: pub clásico cerca del castillo para whisky + cena.",
            "Opción C: cena foodie cierre alto si quieren final elegante.",
          ],
          options: [
            { title: "Opción A - Música en vivo", text: "Vibe local sin complicarse." },
            { title: "Opción B - Pub clásico", text: "Whisky + cena con cero drama." },
            { title: "Opción C - Foodie", text: "Cierre elegante si el grupo lo pide." },
          ],
          tips: ["1 parada fuerte", "Half pints/flights", "Dormir temprano"],
          notes: "Mañana hay tren largo: cierre bonito, no tarde.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 11 — Vie 10 Abr | Check-out + tren a Londres (logística)
    // ------------------------------------------------------------
    abr10: {
      tag: "TREN",
      title: "Día 11 | Check-out + tren a Londres (día logístico)",
      goal: "Cero estrés: maletas listas, taxi a Waverley con margen y tren como recovery block.",
      events: [
        {
          time: "07:45",
          type: "desayuno",
          title: "Desayuno + cierre de maletas (modo eficiente)",
          icon: "coffee",
          desc: "Café + pastry + algo salado. Hoy manda la logística.",
          subTitle: "Simple y útil",
          details: ["Objetivo: desayunar sin alargar y cerrar maletas con calma."],
          options: [
            { title: "Modo pro", text: "Desayuno corto y checklist de salida." },
            { title: "Modo to-go", text: "Si quieren salir temprano, perfecto." },
          ],
          tips: ["No alargar", "Agua", "Batería"],
          notes: "Una mañana limpia hace que el tren se sienta premium.",
        },

        {
          time: "09:00",
          type: "transporte",
          title: "Check-out + traslado a Waverley (taxi recomendado)",
          icon: "car",
          desc: "Con maletas y grupo, taxi es lo más eficiente. Eviten escaleras y viento.",
          subTitle: "Puerta a puerta",
          details: [
            "Taxi recomendado con equipaje.",
            "Objetivo: llegar con margen real, sin correr.",
          ],
          options: [
            { title: "Opción A - Taxi/Uber", text: "La recomendación para salida sin fricción." },
            { title: "Opción B - Público", text: "Solo si van muy ligeros y con tiempo." },
          ],
          tips: ["Taxi", "Buffer", "No correr"],
          notes: "Edimburgo castiga improvisación, sobre todo con clima.",
        },

        {
          time: "10:15",
          type: "logística",
          title: "Buffer en estación (súper recomendable)",
          icon: "train",
          desc: "Baños, agua, ubicar andén/vagón, reagrupar. Esto evita el único drama posible.",
          subTitle: "45–60 min si se puede",
          details: [
            "Agua/snacks + baño.",
            "Ubicar andén/vagón con calma.",
            "Reagrupar antes de abordar.",
          ],
          options: [
            { title: "Modo pro", text: "Todo listo antes de que anuncien el andén." },
            { title: "Modo snack", text: "Comprar algo simple para el tren." },
          ],
          tips: ["Tickets listos", "Agua", "Baño", "Reagrupar"],
          notes: "Buffer = viaje premium.",
        },

        {
          time: "11:00",
          type: "tren",
          title: "Tren Edinburgh -> London King’s Cross (reservado)",
          icon: "ticket",
          desc: "Este tramo es su recovery block: duerman 30–45 min y llegan a Londres humanos.",
          subTitle: "Descanso primero",
          details: [
            "Sugerencia: 30–45 min de siesta corta.",
            "Luego: planear check-in y primera tarde en Londres 2.",
          ],
          options: [
            { title: "Modo recovery", text: "Siesta + audífonos + cero culpa." },
            { title: "Modo planeación", text: "Revisar logística de llegada y cena en Londres." },
          ],
          tips: ["Dormir", "Agua", "Cargar batería"],
          notes: "Llegar con energía cambia Londres 2 por completo.",
        },
      ],
    },
  },
};

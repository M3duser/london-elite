export const edinburgh = {
  id: "edinburgh",
  name: "EDIMBURGO",
  color: "#0f1b1f",
  hotel:
    "Base A: Sheraton Grand (Jorge/Vanya/Lucas) · Base B: Leonardo Royal (Fisha/Osvaldo)",
  dates: "05 Abr - 10 Abr",
  base: "West End + Old Town (viento, historia y whisky)",
  daysOrder: ["abr05", "abr06", "abr07", "abr08", "abr09", "abr10"],

  rules: {
    title: "ESTRATEGIA + LOGÍSTICA DEL BLOQUE",
    subtitle:
      "Edimburgo cambia de modo a mitad del bloque: primero 5 pax (logística grande), luego 3 pax (slow travel premium).",
    bullets: [
      "05–07 Abr: 5 personas (Jorge, Vanya, Lucas, Fisha, Osvaldo). → Uber Van/2 taxis + reservas para 5 son CRÍTICAS.",
      "08–10 Abr: 3 personas (Jorge, Vanya, Lucas). → un taxi/Uber X, ritmo más calmado.",
      "Dos hoteles: no perder tiempo en lobbies. Punto de encuentro = directo en el lugar (desayuno/actividad).",
      "Clima manda: capas + impermeable. Con viento fuerte, se ajusta plan sin culpa.",
      "Buffer estándar: 45–60 min antes de trenes/actividades fijas. En zonas turísticas, no subestimar colas.",
    ],
  },

  days: {
    // ------------------------------------------------------------
    // DÍA 6 — Dom 05 Abr | Llegada + Cena de Bienvenida (TODOS - 5 pax)
    // ------------------------------------------------------------
    abr05: {
      tag: "LLEGADA",
      title: "Día 6 | Llegada + cena de bienvenida",
      goal:
        "Coordinar dos hoteles sin fricción, cenar rico sin complicaciones y dormir temprano para el Castillo.",
      events: [
        {
          time: "17:59",
          type: "tren",
          title: "Llegada a Edinburgh Waverley (desde York)",
          icon: "train",
          desc:
            "Aterrizaje en estación: aquí la clave es separarse rápido por sub-grupos y no intentar sincronizar maletas.",
          subTitle: "Separación táctica (2 bases)",
          details: [
            "Grupo Sheraton (Jorge/Vanya/Lucas): salir por Waverley Bridge o Market St → taxi directo al Sheraton.",
            "Grupo Leonardo (Fisha/Osvaldo): su propio taxi directo al Leonardo.",
            "Tip: no intenten irse todos juntos a dejar maletas. Se ahorra tiempo y estrés separándose.",
          ],
          options: [
            { title: "Modo pro", text: "Cada sub-grupo a su base y se ven directo en la cena." },
            {
              title: "Modo clima",
              text: "Si llueve/viento: taxi sí o sí (Edimburgo castiga caminatas con maleta).",
            },
          ],
          tips: ["Separarse por hoteles", "Taxi con maletas", "Punto de encuentro = cena"],
          notes:
            "Estrategia clave del bloque: cero lobby-time.",
        },

        {
          time: "18:30",
          type: "hotel",
          title: "Check-in + reset",
          icon: "hotel",
          desc:
            "Ducha rápida, capas listas (más frío que Londres), power bank y a cenar.",
          subTitle: "Reset de 45–60 min",
          details: [
            "Capas: Edimburgo = viento. Aseguren algo que corte viento + impermeable.",
            "Power bank cargando desde ya (tickets, mapas, regreso).",
            "Objetivo: llegar a cena puntuales sin correr.",
          ],
          options: [
            { title: "Modo express", text: "Llegar, ducha, cambiar y salir." },
            { title: "Modo comfy", text: "Si vienen cansados, 10 min extra, pero sin ‘tirarse’." },
          ],
          tips: ["Capas anti-viento", "Power bank", "No alargar"],
          notes:
            "Mañana es Castillo temprano. Dormir manda.",
        },

        {
          time: "19:45",
          type: "cena",
          title: "Cena de reencuentro (mesa para 5)",
          icon: "utensils",
          desc:
            "Plan A: Dishoom Edinburgh (St Andrew Square). Osvaldo la ama y esta sede es visualmente superior.",
          subTitle: "Plan A + Plan B sin drama",
          details: [
            "Plan A: Dishoom. Si hay fila fuerte, evalúen rápido: si la espera es absurda, cambian sin culpa.",
            "Plan B: The Queens Arms (Frederick St) → pub acogedor y cena sólida (Pie & Mash).",
            "Regla: hoy no se persigue ‘la perfección’. Se prioriza dormir temprano.",
          ],
          options: [
            { title: "Plan A", text: "Dishoom Edinburgh (favorito Osvaldo)." },
            { title: "Plan B", text: "The Queens Arms (acogedor + cero complicación)." },
          ],
          tips: ["Mesa para 5", "Plan B listo", "Cenar temprano"],
          notes:
            "Este es el ‘punto de unión’ del grupo antes del día turístico.",
        },

        {
          time: "21:30",
          type: "paseo",
          title: "Cierre corto: Princes Street (Castillo iluminado desde abajo)",
          icon: "view",
          desc:
            "Caminar 15 min para ver el Castillo iluminado. Postales rápidas sin cansarse.",
          subTitle: "Foto + regreso por sub-grupos",
          details: [
            "Mantenerlo corto: 10–20 min máximo.",
            "Cada sub-grupo regresa a su hotel (si Leonardo está lejos, taxi).",
          ],
          options: [
            { title: "Modo foto", text: "1–2 fotos y regreso." },
            { title: "Modo clima", text: "Si hay viento fuerte: se corta y taxi directo." },
          ],
          tips: ["Corto", "No enfriarse", "Taxi si viento"],
          notes:
            "Hoy es dormir temprano para ganar mañana.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 7 — Lun 06 Abr | Castillo + Old Town + Whisky en Leith (TODOS - 5 pax)
    // ------------------------------------------------------------
    abr06: {
      tag: "CASTILLO",
      title: "Día 7 | Castillo + Old Town + whisky en Leith",
      goal:
        "Día turístico con calidad: historia para Fisha, vistas para Vanya, comida/whisky para Osvaldo y Lucas.",
      events: [
        {
          time: "08:30",
          type: "desayuno",
          title: "Desayuno (punto de encuentro)",
          icon: "coffee",
          desc:
            "Regla del bloque: nadie espera en el lobby de nadie. Todos llegan directo al desayuno.",
          subTitle: "Centro, fácil para ambos hoteles",
          details: [
            "Lugar sugerido: Urban Angel (o similar en el centro).",
            "Objetivo: 45–60 min y a subir al castillo.",
          ],
          options: [
            { title: "Modo pro", text: "Todos llegan ahí, desayunan y salen juntos." },
            { title: "Modo clima", text: "Si llueve, reduzcan desayuno y usen taxis más." },
          ],
          tips: ["Punto de encuentro = desayuno", "No lobby-time", "Salir a tiempo"],
          notes:
            "Esto evita el típico caos de dos hoteles.",
        },

        {
          time: "09:30",
          type: "transporte",
          title: "Subida al castillo (caminata vs taxi)",
          icon: "map",
          desc:
            "Si están en el centro, subir caminando por The Mound se siente perfecto. Si llueve, taxi a la Esplanade.",
          subTitle: "Clima decide",
          details: [
            "Plan A: caminata (energía + vistas).",
            "Plan B: taxi directo si viento/lluvia (cero culpa, Edimburgo castiga).",
          ],
          options: [
            { title: "Plan A (seco)", text: "Subir caminando por The Mound." },
            { title: "Plan B (lluvia)", text: "Taxi y los deja arriba en la explanada." },
          ],
          tips: ["Clima manda", "Capas", "No llegar sudados"],
          notes:
            "Llegar cómodo = visita buena.",
        },

        {
          time: "09:45",
          type: "visita",
          title: "Edinburgh Castle (reserva fija)",
          icon: "landmark",
          desc:
            "Estrategia de grupo: vistas primero, luego historia por módulos. Meeting point interno claro.",
          subTitle: "Vistas + módulos + punto de reunión",
          details: [
            "Al entrar: ir directo a las vistas de los cañones hacia el mar (wow inmediato).",
            "Fisha/Jorge: museos de guerra + Capilla de Santa Margarita.",
            "Osvaldo/Lucas: si ‘mucha historia’, café Redcoat con vistas para esperar calientes.",
            "Meeting point interno: ‘frente al One O’Clock Gun’.",
          ],
          options: [
            { title: "Modo completo", text: "2–3 h con pausa en café si hace frío." },
            { title: "Modo eficiente", text: "1.5–2 h: vistas + 2 highlights y salida." },
          ],
          tips: ["Vistas primero", "Meeting point", "Café como plan B", "Capas"],
          notes:
            "Castillo se disfruta más sin perseguir cada sala.",
        },

        {
          time: "12:30",
          type: "paseo",
          title: "Royal Mile (bajada táctica) + Victoria Street",
          icon: "camera",
          desc:
            "Bajan caminando con flow. Victoria Street es parada obligada para fotos (vibe Diagon Alley).",
          subTitle: "Old Town sin zigzags",
          details: [
            "Bajar por Royal Mile sin perderse en tiendas infinitas.",
            "Victoria Street: fotos rápidas y seguir.",
          ],
          options: [
            { title: "Modo foto", text: "Victoria Street 10–15 min y listo." },
            { title: "Modo clima", text: "Si llueve, más rápido y directo a lunch." },
          ],
          tips: ["No zigzags", "Foto rápida", "Mantener ritmo"],
          notes:
            "El día es largo: flow > compras eternas.",
        },

        {
          time: "13:30",
          type: "comida",
          title: "Lunch: Makars Mash Bar o pub histórico",
          icon: "utensils",
          desc:
            "Comfort food perfecto: purés gourmet + salchichas locales. Ideal para grupo de 5.",
          subTitle: "Fila virtual (táctica)",
          details: [
            "Makars: uno llega antes a poner nombre (fila virtual) mientras el resto camina 5 min.",
            "Si prefieren pub: opción histórica cerca con menú sólido.",
          ],
          options: [
            { title: "Plan A", text: "Makars Mash Bar (comfort top)." },
            { title: "Plan B", text: "Pub histórico cercano (más directo, sin esperar)." },
          ],
          tips: ["Fila virtual", "Comer sólido", "No sobremesa eterna"],
          notes:
            "Buen lunch = tarde con energía.",
        },

        {
          time: "15:30",
          type: "visita",
          title: "National Museum of Scotland (versión express)",
          icon: "landmark",
          desc:
            "Gratis y perfecto si empieza a llover. Meta: 60–90 min máximo.",
          subTitle: "2 highlights y fuera",
          details: [
            "Ver: Gran Galería (atrio tipo cristal) + la oveja Dolly.",
            "Si el grupo está cansado, recorten: mejor corto y bueno.",
          ],
          options: [
            { title: "Modo express", text: "60 min: Gran Galería + Dolly." },
            { title: "Modo cómodo", text: "90 min si están disfrutando y el clima está feo." },
          ],
          tips: ["Gratis", "Perfecto lluvia", "2 highlights", "No maratón"],
          notes:
            "Museo aquí funciona como ‘refugio premium’.",
        },

        {
          time: "17:00",
          type: "transporte",
          title: "Traslado a Leith (zona portuaria)",
          icon: "car",
          desc:
            "Con 5 pax: 2 Ubers o 1 Van. Vale la pena salir del centro turístico.",
          subTitle: "Logística pro-grupo",
          details: [
            "Objetivo: llegar juntos y sin vueltas.",
            "Si se descoordina, punto fijo: entrada del pub.",
          ],
          options: [
            { title: "Plan A", text: "Uber Van si aparece." },
            { title: "Plan B", text: "2 taxis/Ubers y se ven en Teuchters Landing." },
          ],
          tips: ["2 taxis si hace falta", "Punto fijo", "No perder tiempo"],
          notes:
            "Leith es el ‘upgrade auténtico’ del bloque.",
        },

        {
          time: "17:30",
          type: "pub",
          title: "Pub: Teuchters Landing (Leith)",
          icon: "beer",
          desc:
            "Ambiente local real junto al agua. Ideal para flights de whisky y vibe auténtica.",
          subTitle: "Whisky sin caos",
          details: [
            "Actividad: si está disponible, pidan el ‘Hoop of Destiny’ (juego para ganar whisky) o vayan directo a flights.",
            "Tip: 1 flight por persona máximo antes de cena (para no ‘apagar’ el resto del día).",
          ],
          options: [
            { title: "Modo tasting", text: "Flights (2–3 drams) y agua entre cada uno." },
            { title: "Modo chill", text: "Una pinta + 1 dram, corto y elegante." },
          ],
          tips: ["Flights con agua", "No excederse", "Ambiente local"],
          notes:
            "Osvaldo y Fisha amarán esto por auténtico y sin turistas.",
        },

        {
          time: "20:00",
          type: "cena",
          title: "Cena en Leith (mariscos o casual)",
          icon: "utensils",
          desc:
            "Plan A: The Ship on the Shore (mariscos increíbles). Plan B: algo casual en la zona.",
          subTitle: "Reserva para 5 = oro",
          details: [
            "Si pueden reservar, háganlo. Leith se disfruta más sin ‘buscar mesa’.",
            "Regreso: taxi directo a Sheraton/Leonardo.",
          ],
          options: [
            { title: "Plan A", text: "The Ship on the Shore (mariscos)." },
            { title: "Plan B", text: "Casual en Leith (cero complicación)." },
          ],
          tips: ["Reservar para 5", "Taxi regreso", "Cierre temprano"],
          notes:
            "Mañana hay hike: no se alarga la noche.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 8 — Mar 07 Abr | Arthur’s Seat + Despedida (TODOS - 5 pax)
    // ------------------------------------------------------------
    abr07: {
      tag: "HIKE",
      title: "Día 8 | Arthur’s Seat + despedida de Fisha y Osvaldo",
      goal:
        "Actividad física épica con decisión por clima. Cerrar el grupo de 5 con un brindis y logística de salida fácil.",
      events: [
        {
          time: "07:30",
          type: "actividad",
          title: "Arthur’s Seat (subida) — decisión por viento",
          icon: "view",
          desc:
            "Punto de encuentro: parking de Holyrood Palace. Ruta suave (camino verde), NO la escalada de rocas.",
          subTitle: "Si hay viento fuerte, se cancela",
          details: [
            "Ruta: camino verde (suave). Evitar rocas directas.",
            "Clima: si viento fuerte (>30 mph) → CANCELEN y vayan a Calton Hill (mucho más bajo y fácil).",
            "Foto de grupo en la cima si se hace: momento épico del viaje juntos.",
          ],
          options: [
            { title: "Plan A (clima OK)", text: "Arthur’s Seat por ruta suave." },
            { title: "Plan B (viento fuerte)", text: "Calton Hill (seguro, vistas igual de buenas)." },
          ],
          tips: ["Zapato con grip", "Capas anti-viento", "No arriesgar con rachas fuertes"],
          notes:
            "Aquí la decisión inteligente es seguridad > orgullo.",
        },

        {
          time: "10:30",
          type: "desayuno",
          title: "Desayuno/Brunch de recompensa",
          icon: "coffee",
          desc:
            "Después del hike necesitan calorías y calor. Brunch sólido cerca de Holyrood.",
          subTitle: "Recuperación",
          details: [
            "Sugerido: Loudons New Waverley (o similar).",
            "Meta: 60–75 min y luego paseo digestivo.",
          ],
          options: [
            { title: "Modo completo", text: "Brunch sólido y café extra." },
            { title: "Modo eficiente", text: "Si el día va apretado, reduzcan a 45–60 min." },
          ],
          tips: ["Comer bien", "Hidratación", "No alargar demasiado"],
          notes:
            "Este brunch estabiliza el resto del día.",
        },

        {
          time: "12:00",
          type: "paseo",
          title: "Holyrood Palace (exterior) + Parlamento",
          icon: "map",
          desc:
            "Paseo digestivo: contraste arquitectura antigua vs moderna sin colas.",
          subTitle: "Corto y visual",
          details: [
            "Exterior de Holyrood + vistazo al Parlamento.",
            "Mantenerlo ligero (hoy ya hubo esfuerzo físico).",
          ],
          options: [
            { title: "Modo foto", text: "10–20 min de fotos y seguir." },
            { title: "Modo clima", text: "Si llueve, se recorta y se prioriza Stockbridge." },
          ],
          tips: ["Corto", "Fotos selectivas", "Mantener energía"],
          notes:
            "Esto es transición, no bloque pesado.",
        },

        {
          time: "13:30",
          type: "paseo",
          title: "Stockbridge → Circus Lane → Dean Village (Water of Leith)",
          icon: "camera",
          desc:
            "Vibe bohemio y relajado. Perfecto para la última tarde de Fisha/Osvaldo con fotos bonitas.",
          subTitle: "Ruta tranquila",
          details: [
            "Taxi a Circus Lane (punto más fotogénico).",
            "Caminar hacia Dean Village bordeando el río (Water of Leith).",
          ],
          options: [
            { title: "Modo chill", text: "Caminar suave, sin prisa y con fotos." },
            { title: "Modo clima", text: "Si hay lluvia, reduzcan a Circus Lane + café cercano." },
          ],
          tips: ["Taxi al punto", "Fotos", "Ritmo tranquilo"],
          notes:
            "Este bloque se siente ‘premium’ sin gastar energía extra.",
        },

        {
          time: "16:00",
          type: "pub",
          title: "Pub de despedida: The Kay’s Bar (o similar)",
          icon: "beer",
          desc:
            "Pub victoriano pequeño en New Town. Brindis final del grupo de 5.",
          subTitle: "Corto y con intención",
          details: [
            "1 ronda y listo. Hoy no se convierte en noche larga.",
            "Objetivo: cerrar en alto y facilitar logística de salida/hiking.",
          ],
          options: [
            { title: "Plan A", text: "The Kay’s Bar." },
            { title: "Plan B", text: "Pub victoriano equivalente cerca." },
          ],
          tips: ["Una ronda", "No alargar", "Brindis y cierre"],
          notes:
            "Último ‘momento equipo’ antes de separarse.",
        },

        {
          time: "18:30",
          type: "cena",
          title: "Cena temprana (logística de maletas)",
          icon: "utensils",
          desc:
            "Algo sólido cerca de los hoteles para facilitar maletas de Fisha/Osvaldo.",
          subTitle: "Cenar cerca",
          details: [
            "Prioridad: simple y cerca (cero traslados largos).",
            "Dejar maletas medio listas hoy.",
          ],
          options: [
            { title: "Modo fácil", text: "Cerca Sheraton/Leonardo." },
            { title: "Modo ultra fácil", text: "Si están cansados: opción directa sin reservas." },
          ],
          tips: ["Temprano", "Cerca", "Preparar maletas"],
          notes:
            "Esta cena protege el día siguiente.",
        },

        {
          time: "21:00",
          type: "logística",
          title: "Separación de grupos",
          icon: "home",
          desc:
            "Fisha/Osvaldo: se preparan para su salida/hiking. Jorge/Vanya/Lucas: regreso al Sheraton y a disfrutar instalaciones.",
          subTitle: "Cierre limpio",
          details: [
            "No improvisar: mañana cambia el tamaño del grupo y el ritmo.",
          ],
          options: [
            { title: "Modo descanso", text: "Cama temprano. Mañana es ‘premium & chill’." },
          ],
          tips: ["Cierre temprano", "Orden", "Recuperación"],
          notes:
            "Desde mañana: ritmo slow travel (3 pax).",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 9 — Mié 08 Abr | Rosslyn + One Spa + Relax (SOLO J/V/L - 3 pax)
    // ------------------------------------------------------------
    abr08: {
      tag: "SPA",
      title: "Día 9 | Rosslyn + One Spa + relax",
      goal:
        "Cambio total de ritmo: 3 pax, taxi fácil, arquitectura y un día premium de spa sin prisas.",
      events: [
        {
          time: "09:00",
          type: "desayuno",
          title: "Desayuno tranquilo en Sheraton",
          icon: "coffee",
          desc:
            "Sin prisas. Si hay buffet incluido, hoy es el día de aprovecharlo.",
          subTitle: "Slow travel",
          details: [
            "Meta: salir 10:15 sin correr.",
            "Agua y capas listas (Rosslyn puede estar frío).",
          ],
          options: [
            { title: "Modo premium", text: "Desayuno completo y salida calmada." },
          ],
          tips: ["Sin prisa", "Capas", "Agua"],
          notes:
            "Hoy el lujo es el ritmo.",
        },

        {
          time: "10:15",
          type: "transporte",
          title: "Taxi a Rosslyn Chapel (cero fricción)",
          icon: "car",
          desc:
            "Taxi directo (~30 min). No pierdan tiempo en bus: hoy es comodidad y eficiencia.",
          subTitle: "Arquitectura y detalle",
          details: [
            "Por qué hoy: con Osvaldo quizá sería ‘mucha piedra’, pero para Jorge/Vanya es detalle arquitectónico puro.",
          ],
          options: [
            { title: "Plan A", text: "Taxi directo ida y regreso." },
          ],
          tips: ["Taxi", "No bus", "Batería"],
          notes:
            "Este bloque se siente ‘curado’ por diseño.",
        },

        {
          time: "11:00",
          type: "visita",
          title: "Rosslyn Chapel (visita)",
          icon: "landmark",
          desc:
            "Capilla famosa por el Código Da Vinci, pero lo real es el tallado y la atmósfera.",
          subTitle: "Detalle > prisa",
          details: [
            "Tómense su tiempo con los relieves (ojo ‘arquitectura’).",
            "Si hay guía breve disponible, vale para contexto rápido.",
          ],
          options: [
            { title: "Modo detalle", text: "Mirar tallas y tomar fotos mentales, no ‘correr’ salas." },
          ],
          tips: ["Mirar detalles", "No correr", "Capas"],
          notes:
            "Este bloque es para disfrutar, no para tachar.",
        },

        {
          time: "13:00",
          type: "comida",
          title: "Regreso + lunch ligero (West End)",
          icon: "utensils",
          desc:
            "Comer ligero: el highlight fuerte de hoy es One Spa.",
          subTitle: "Ligero y directo",
          details: [
            "Meta: 45–60 min máximo para entrar al spa con calma.",
          ],
          options: [
            { title: "Modo fácil", text: "Algo cerca del hotel, sin traslados." },
          ],
          tips: ["Ligero", "No sobremesa", "Hidratación"],
          notes:
            "Spa se disfruta más sin pesadez.",
        },

        {
          time: "14:30",
          type: "relax",
          title: "ONE SPA (Sheraton Grand)",
          icon: "spa",
          desc:
            "Uno de los mejores spas de Europa. Hoy es el día de usarlo sin culpa.",
          subTitle: "Circuito termal + hydropool exterior",
          details: [
            "Hydropool exterior (caliente) es obligatoria.",
            "Jorge/Vanya: circuito termal completo.",
            "Lucas: si no es de spa, momento perfecto para descanso/gaming o paseo corto por Princes St.",
          ],
          options: [
            { title: "Modo spa full", text: "Circuito + hydropool + descanso." },
            { title: "Modo mixto", text: "Spa parcial y paseo corto si quieren aire." },
          ],
          tips: ["Hydropool sí o sí", "Hidratación", "Sin prisa"],
          notes:
            "Hoy el objetivo es recuperar y recargar.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena casual top (mesa para 3)",
          icon: "utensils",
          desc:
            "Noche tranquila. Plan A: The Palmerston (más foodie). Plan B: Mussel Inn (clásico).",
          subTitle: "Cierre elegante",
          details: [
            "Mesa para 3 es fácil: hoy se evita toda fricción de reservas grandes.",
          ],
          options: [
            { title: "Plan A", text: "The Palmerston (foodie, bien curado)." },
            { title: "Plan B", text: "Mussel Inn (clásico y directo)." },
          ],
          tips: ["Tranquilo", "Cerca", "Dormir bien"],
          notes:
            "Mañana: Old Town deep dive + golden hour.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 10 — Jue 09 Abr | Old Town Deep Dive + Golden Hour (SOLO J/V/L - 3 pax)
    // ------------------------------------------------------------
    abr09: {
      tag: "OLDTOWN",
      title: "Día 10 | Old Town deep dive + golden hour",
      goal:
        "Fotografía de nivel, compras selectas (cachemira/whisky) y cierre escocés con opción ‘wow’.",
      events: [
        {
          time: "09:30",
          type: "paseo",
          title: "Old Town: The Closes (callejones) — fotos sin estorbar",
          icon: "camera",
          desc:
            "Con 3 pax se disfruta más: pueden entrar a closes estrechos y hacer fotos sin bloquear a nadie.",
          subTitle: "2 closes top",
          details: [
            "Lady Stair’s Close.",
            "Advocate’s Close.",
            "Tip: 1–2 fotos por lugar y sigan (flow).",
          ],
          options: [
            { title: "Modo foto", text: "Closes + 1 café corto, sin alargar." },
            { title: "Modo clima", text: "Si llueve, reduzcan closes y prioricen tiendas/compras." },
          ],
          tips: ["Flow", "Fotos selectivas", "Capas"],
          notes:
            "Este bloque es ‘textura + atmósfera’.",
        },

        {
          time: "12:00",
          type: "compras",
          title: "Compras selectas (cachemira / whisky)",
          icon: "shopping-bag",
          desc:
            "Hoy es el día de comprar bien: sin prisa, con cabeza y en tiendas establecidas.",
          subTitle: "Royal Mile / Victoria St",
          details: [
            "Cachemira/ropa: mejor calidad en tiendas establecidas (no souvenirs).",
            "Whisky: comprar en lugar serio para evitar ‘tourist traps’.",
          ],
          options: [
            { title: "Plan A", text: "Royal Mile (tiendas clásicas) + 1 parada puntual." },
            { title: "Plan B", text: "Victoria St (vibe + tiendas) si quieren más visual." },
          ],
          tips: ["Comprar selectivo", "No tiendas al azar", "Una botella bien elegida"],
          notes:
            "Compras aquí se sienten premium cuando son pocas y buenas.",
        },

        {
          time: "14:00",
          type: "comida",
          title: "Lunch en pub: The World’s End",
          icon: "utensils",
          desc:
            "Clásico turístico pero con historia. Fish & Chips sólido.",
          subTitle: "Comida estable, sin sorpresa",
          details: [
            "Meta: 60–75 min y seguir. Hoy el atardecer manda.",
          ],
          options: [
            { title: "Modo clásico", text: "Fish & Chips + bebida y listo." },
            { title: "Modo ligero", text: "Si no quieren pesado, opción más ligera del menú." },
          ],
          tips: ["No sobremesa eterna", "Guardar energía para golden hour"],
          notes:
            "Comida estable para un día fotográfico.",
        },

        {
          time: "17:30",
          type: "paseo",
          title: "Calton Hill (atardecer)",
          icon: "view",
          desc:
            "Subida fácil (escaleras). Foto estrella: monumento nacional (columnas) con la ciudad detrás.",
          subTitle: "Golden hour pro",
          details: [
            "Si ya lo hicieron el primer día, alternativa: Dean Village (si sienten que faltó).",
            "Capas: arriba pega el viento.",
          ],
          options: [
            { title: "Plan A", text: "Calton Hill para atardecer." },
            { title: "Plan B", text: "Dean Village si prefieren más ‘postcard’ tranquila." },
          ],
          tips: ["Capas", "Viento", "Fotos cortas y buenas"],
          notes:
            "Este es el cierre visual de Edimburgo.",
        },

        {
          time: "20:00",
          type: "cena",
          title: "Cena de cierre: The Witchery (lujo) o Howies (local)",
          icon: "utensils",
          desc:
            "Si quieren ‘wow’: The Witchery (gótico, velas, caro). Si quieren rico y local: Howies (Waterloo Place).",
          subTitle: "Última noche escocesa",
          details: [
            "Mesa para 3: fácil de asegurar, pero Witchery conviene reservar.",
          ],
          options: [
            { title: "Plan A (wow)", text: "The Witchery (cierre con drama elegante)." },
            { title: "Plan B (local)", text: "Howies (rico, clásico, sin complicación)." },
          ],
          tips: ["Reservar si es Witchery", "Cierre temprano-ish", "Dormir bien"],
          notes:
            "Mañana hay tren a Londres: salida limpia.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 11 — Vie 10 Abr | Regreso a Londres (SOLO J/V/L - 3 pax)
    // ------------------------------------------------------------
    abr10: {
      tag: "REGRESO",
      title: "Día 11 | Regreso a Londres",
      goal:
        "Salida limpia, taxi fácil a Waverley y tren en modo descanso (editar fotos, dormir, planear llegada).",
      events: [
        {
          time: "08:30",
          type: "hotel",
          title: "Desayuno + check-out",
          icon: "coffee",
          desc:
            "Aprovechen servicio del hotel para bajar maletas. Cero carreras.",
          subTitle: "Orden y buffer",
          details: [
            "Meta: maletas listas antes de bajar.",
            "Agua + snacks pequeños para el tren.",
          ],
          options: [
            { title: "Modo pro", text: "Check-out limpio y taxi listo." },
          ],
          tips: ["Orden", "Agua", "No correr"],
          notes:
            "Hoy lo premium es salir sin estrés.",
        },

        {
          time: "09:45",
          type: "transporte",
          title: "Taxi a Edinburgh Waverley",
          icon: "car",
          desc:
            "Desde Sheraton: 10–15 min en taxi (según tráfico).",
          subTitle: "Llegar con margen",
          details: [
            "Buffer recomendado: 45–60 min para estación.",
            "Boletos descargados offline por si la señal falla.",
          ],
          options: [
            { title: "Plan A", text: "Taxi directo, entrar y ubicar andén." },
          ],
          tips: ["Buffer", "Tickets offline", "Baño antes de abordar"],
          notes:
            "Estación puede estar movida: buffer = tranquilidad.",
        },

        {
          time: "11:00",
          type: "tren",
          title: "Tren a Londres King’s Cross",
          icon: "ticket",
          desc:
            "Viajan juntos (3 pax). Momento ideal para descansar y aterrizar el plan de Londres II (Marriott County Hall).",
          subTitle: "Descanso + planeación ligera",
          details: [
            "Actividad sugerida: 30–40 min de descanso primero.",
            "Luego: editar fotos, revisar tickets y planear llegada al hotel.",
          ],
          options: [
            { title: "Modo descanso", text: "Dormir/ojos cerrados y recuperar." },
            { title: "Modo productivo", text: "Editar fotos + organizar el día de llegada." },
          ],
          tips: ["Agua", "Batería", "Descanso primero"],
          notes:
            "Llegar a Londres con energía cambia la segunda mitad del viaje.",
        },
      ],
    },
  },
};

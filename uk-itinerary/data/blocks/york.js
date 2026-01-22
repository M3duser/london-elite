export const york = {
  id: "york",
  name: "YORK",
  color: "#2b1b10",
  hotel: "1 noche en York (centro histórico)",
  dates: "04 Abr - 05 Abr",
  base: "Centro medieval (todo caminable)",
  daysOrder: ["abr04", "abr05"],

  days: {
    // ------------------------------------------------------------
    // DÍA 5 - Sáb 4 Abr | Londres -> York + Shambles + Murallas + Pub
    // ------------------------------------------------------------
    abr04: {
      tag: "MEDIEVAL",
      title: "Día 5 | Londres -> York + Shambles + murallas + pub legendario",
      goal:
        "Llegar sin drama, dejar maletas, caminar lo mejor del centro medieval y coronar con golden hour en murallas + un pub histórico.",
      events: [
        {
          time: "10:15",
          type: "logística",
          title: "Llegada a King’s Cross (buffer pro-grupo)",
          icon: "train",
          desc: "Estación grande + grupo + maletas: aquí gana el margen. La idea es llegar tranquilos y sin carreras.",
          subTitle: "Regla de oro: 45–60 min antes",
          details: [
            "Objetivo: estar en estación con 45–60 min de buffer.",
            "Con maletas, Taxi/Uber suele ganar vs Tube (escaleras, cambios y tiempo).",
            "Checklist express (2 min): tickets listos, vagón/asientos ubicados, baño, agua, snack para el tren.",
          ],
          options: [
            { title: "Modo cero estrés", text: "Lleguen, ubican vagón y se quedan cerca del andén." },
            { title: "Modo práctico", text: "Baño y agua antes de abordar. Evita dramas ya arriba." },
          ],
          tips: ["Buffer real", "Baño antes", "Agua lista", "No improvisar en andén"],
          notes: "Este bloque se siente premium cuando la mañana es tranquila.",
        },

        {
          time: "11:33",
          type: "tren",
          title: "Tren LNER King’s Cross -> York (reservado)",
          icon: "ticket",
          desc: "Transición perfecta: descanso corto y luego planeación ligera para llegar con el plan claro.",
          subTitle: "Viaje suave: agua + snack + modo descanso",
          details: [
            "Compren agua y un snack antes de abordar (no dependan del carrito).",
            "Sugerencia: 30–40 min de descanso silencioso y luego platican/planean York.",
            "Si van en Primera Clase: más espacio y menos estrés con maletas (se siente viaje redondo).",
          ],
          options: [
            { title: "Modo descanso", text: "Audífonos + 30–40 min de pausa para llegar frescos." },
            { title: "Modo planeación", text: "Repasan ruta medieval y definen cena/pubs." },
          ],
          tips: ["Agua antes", "Snack antes", "Batería", "No llegar con hambre"],
          notes: "Llegar a York con energía cambia todo: la ciudad se camina delicioso.",
        },

        {
          time: "13:27",
          type: "logística",
          title: "Llegada a York + hotel / taxi corto + dejar maletas",
          icon: "hotel",
          desc: "Dejen maletas y salgan rápido. York se disfruta más cuando arrancan sin pausas largas.",
          subTitle: "Luggage storage + reset de 15 min",
          details: [
            "Aunque no tengan habitación lista: pidan luggage storage y listo.",
            "Reset perfecto: baño rápido, ajustar capas, power bank, agua.",
            "Objetivo: estar caminando a más tardar 14:15.",
          ],
          options: [
            { title: "Modo express", text: "15 min y afuera. Nada de quedarse en la habitación." },
            { title: "Modo comfy", text: "Si el clima está pesado, ajusten capas y salgan igual." },
          ],
          tips: ["Capas", "Power bank", "Agua", "Salir rápido"],
          notes: "York es compacta: la magia está en caminarla, no en planearla demasiado.",
        },

        {
          time: "14:30",
          type: "comida",
          title: "Comida rápida (street food) - 3 opciones top",
          icon: "utensils",
          desc: "Comer rico y eficiente. Hoy no conviene una comida pesada: el highlight es caminar + murallas + cena.",
          subTitle: "Grupo feliz: variedad, poco tiempo y cero fricción",
          details: [
            "Opción A: Shambles Market (la más eficiente para probar y seguir).",
            "Opción B: Spark:York (bajo techo, plan perfecto si llueve y para gustos distintos).",
            "Opción C: pub lunch ligero (sentados 30–40 min y listo).",
          ],
          options: [
            { title: "Opción A - Shambles Market", text: "Cada quien elige algo distinto, se comparte y siguen." },
            { title: "Opción B - Spark:York", text: "Plan B lluvia excelente y muy cómodo para grupo." },
            { title: "Opción C - Pub lunch", text: "Si quieren sentarse un rato sin perder la tarde." },
          ],
          tips: ["No comida pesada", "Compartir para probar más", "Agua", "Mantener ritmo"],
          notes: "Coman práctico. La tarde es la parte más fotogénica del día.",
        },

        {
          time: "15:30",
          type: "paseo",
          title: "The Shambles + Stonegate + core medieval (ruta sin zigzags)",
          icon: "map",
          desc: "La York medieval en su mejor versión: calles con textura, ritmo y fotos muy fáciles.",
          subTitle: "Shambles -> King’s Square -> Stonegate -> Minster precinct",
          details: [
            "Ruta recomendada: The Shambles -> King’s Square -> Stonegate -> Chapter House St / Minster precinct.",
            "Modo fotos/arquitectura: madera, voladizos, ventanas, texturas y detalles.",
            "Tip Shambles: fotos mejores desde ángulos laterales (evitan el túnel lleno de gente).",
            "Plan B si está saturado: Shambles rápido (15–20 min) y más tiempo en murallas + Minster exterior.",
          ],
          options: [
            { title: "Mini desvío divertido", text: "Whip-Ma-Whop-Ma-Gate (parada corta y memorable)." },
            { title: "Coffee stop", text: "Cafetería pequeña en calle lateral para resetear." },
          ],
          tips: ["Shambles rápido si está lleno", "Fotos laterales", "No zigzags", "Mantener flujo"],
          notes: "York se siente increíble cuando la caminan en línea, no en laberinto.",
        },

        {
          time: "16:45",
          type: "visita",
          title: "York Minster: interior si hay cero cola / exterior si no",
          icon: "landmark",
          desc: "Decisión inteligente según filas. Con Easter weekend, el exterior puede ser el mejor plan.",
          subTitle: "45–60 min ideal, o exterior premium sin colas",
          details: [
            "Opción A: entrar 45–60 min si la fila está razonable.",
            "Opción B: exterior + precinct (fotos brutales sin perder tiempo).",
            "Tip foto: tarde y cielo dramático = magia total.",
          ],
          options: [
            { title: "Modo interior", text: "Solo si la entrada es rápida. Si no, no lo sufran." },
            { title: "Modo exterior", text: "Se siente igual de épico y protege el resto del día." },
          ],
          tips: ["No regalar 60 min en fila", "Exterior también es wow", "Fotos selectivas"],
          notes: "La mejor experiencia es la que no te roba el atardecer en murallas.",
        },

        {
          time: "18:00",
          type: "paseo",
          title: "Murallas al atardecer (momento estrella)",
          icon: "view",
          desc: "El momento foto del viaje. York desde arriba se siente medieval de verdad.",
          subTitle: "Tramo recomendado: Bootham Bar -> Monk Bar",
          details: [
            "Tramo sencillo y fotogénico: Bootham Bar -> Monk Bar (o equivalente cercano).",
            "Por qué aquí: elevación, vistas, torres y sensación medieval real.",
            "Tip clima: arriba pega el viento. Capas e impermeable mandan.",
            "Checklist de fotos: 1) skyline/Minster, 2) detalle de piedra/torres, 3) walking shot del grupo.",
            "Plan B lluvia fuerte: tramo corto y a refugio (pub/café). Con lluvia ligera, sí se puede.",
          ],
          options: [
            { title: "Modo foto pro", text: "15 min de caminar + 20–25 min de fotos y listo." },
            { title: "Modo chill", text: "Recorrido corto, sin prisa, y bajar antes de enfriarse." },
          ],
          tips: ["Capas", "Viento arriba", "Walking shot", "No alargar si hace frío"],
          notes: "Este bloque es el recuerdo visual de York. Vale hacerlo bien.",
        },

        {
          time: "19:45",
          type: "cena",
          title: "Cena del sábado (elige estilo)",
          icon: "utensils",
          desc: "Una buena cena aquí redondea York perfecto. Reservar, si se puede, es oro.",
          subTitle: "Plan principal: Skosh (o similar)",
          details: [
            "Opción A: Skosh (fusión moderna, ideal para una sola noche).",
            "Opción B: Roots York (Tommy Banks) si consiguen lugar, es wow real (requiere reserva).",
            "Opción C: bistro/brasserie fácil y rico si el grupo ya va cansado.",
            "Tip grupo: pidan 2–3 platos al centro para probar más variedad.",
          ],
          options: [
            { title: "Opción A - Skosh", text: "El plan más redondo para sábado en York." },
            { title: "Opción B - Roots", text: "Upgrade foodie si aparece disponibilidad." },
            { title: "Opción C - Bistro fácil", text: "Cero estrés, rico y directo." },
          ],
          tips: ["Reservar si se puede", "Platos al centro", "No complicarse con traslados"],
          notes: "Cena buena, logística simple. Ese es el mood del bloque.",
        },

        {
          time: "21:30",
          type: "pub",
          title: "Pub Session (imperdible): The House of Trembling Madness",
          icon: "beer",
          desc: "Cierre perfecto: vibe histórica y selección seria de cervezas/ales. Una ronda con calma.",
          subTitle: "Degustación inteligente (half pints)",
          details: [
            "Cómo pedir (modo degustación): 1 half pint de cask ale + 1 half pint de stout/porter para comparar.",
            "Whisky: 1 dram por persona máximo (o flight si hay).",
            "Regla de oro: hoy duerman bien. Mañana hay festival + tren.",
          ],
          options: [
            { title: "Modo tasting", text: "Half pints para probar sin cansarse." },
            { title: "Modo clásico", text: "Una pinta tranquila y cierre corto." },
          ],
          tips: ["Half pints", "1 dram máximo", "Una ronda con calma", "Dormir manda"],
          notes: "Un solo pub fuerte por noche es la receta para viajar livianos.",
        },
      ],
    },

    // ------------------------------------------------------------
    // DÍA 6 - Dom 5 Abr | Chocolate Festival + Taste Trail + tren a Edimburgo
    // ------------------------------------------------------------
    abr05: {
      tag: "FESTIVAL",
      title: "Día 6 | Chocolate Festival + Taste Trail + tren a Edimburgo",
      goal:
        "Vivir el festival sin colas absurdas, hacer fotos exteriores top, comer ligero y salir al tren con margen.",
      events: [
        {
          time: "08:30",
          type: "desayuno",
          title: "Desayuno (según fila y energía)",
          icon: "coffee",
          desc: "Hoy no conviene desayunar eterno. La mañana es del festival.",
          subTitle: "Bonito vs smart vs to-go",
          details: [
            "Opción A: clásico y bonito (tipo Bettys). Pro: vibe. Contra: filas fuertes en fin de semana/Easter.",
            "Opción B: café muy bueno sin fila larga (smart). Ideal para arrancar rápido.",
            "Opción C: to-go (ultra eficiente) si quieren maximizar el festival.",
          ],
          options: [
            { title: "Opción A - Clásico", text: "Solo si la fila está razonable." },
            { title: "Opción B - Smart", text: "La recomendación para arrancar sin perder tiempo." },
            { title: "Opción C - To-go", text: "Perfecto si quieren llegar 10:00 puntuales al festival." },
          ],
          tips: ["No desayuno eterno", "Arrancar temprano", "Café y agua"],
          notes: "Domingo de Pascua puede tener tiendas cerradas. Mejor ir directo al plan fuerte.",
        },

        {
          time: "10:00",
          type: "evento",
          title: "York Chocolate Festival + Taste Trail (core)",
          icon: "ticket",
          desc: "Háganlo pro: temprano, en parejas y compartiendo. Así prueban más y se empalagan menos.",
          subTitle: "Llegar temprano + dividirse + reagrupar",
          details: [
            "Lleguen 10:00 para evitar el pico de gente.",
            "Divídanse en parejas: cada pareja hace 2 paradas del trail.",
            "Se juntan, prueban y comparten (nadie se empalaga).",
            "Compren 1–2 souvenirs comestibles para el tren.",
            "Tip anti-empalague: alternen chocolate con café y agua.",
          ],
          options: [
            { title: "Qué probar (ideas prácticas)", text: "Chocolate caliente si hace frío, trufas artesanales y algo raro (sal/ají/whisky si hay)." },
            { title: "Souvenir inteligente", text: "Algo pequeño y resistente para el tren (trufas/caramelos)." },
          ],
          tips: ["Llegar 10:00", "Parejas y compartir", "Agua entre pruebas", "Comprar para el tren"],
          notes: "El secreto es probar mucho sin que se vuelva pesado.",
        },

        {
          time: "13:00",
          type: "paseo",
          title: "Walk corto + fotos (sin meterse a colas)",
          icon: "camera",
          desc: "Cierre visual rápido. Si hay colas masivas por Pascua, el exterior se vuelve el plan premium.",
          subTitle: "Minster exterior + callejeo corto",
          details: [
            "Si hay colas por servicios de Pascua: York Minster solo exterior y listo.",
            "Callejeo corto por Shambles/Stonegate para últimas fotos.",
            "Extra rápido: un último vistazo a murallas desde un punto accesible si el clima coopera.",
          ],
          options: [
            { title: "Modo eficiente", text: "30–45 min de fotos buenas y a comer algo ligero." },
            { title: "Modo clima", text: "Si hay viento o lluvia: reduzcan y prioricen refugio." },
          ],
          tips: ["No filas", "Exterior premium", "Fotos rápidas", "Mantener ritmo"],
          notes: "Hoy la prioridad es llegar al tren sin estrés.",
        },

        {
          time: "14:00",
          type: "comida",
          title: "Snack / lunch ligero antes del tren",
          icon: "utensils",
          desc: "Coman ligero. El tren es aprox 2.5 horas y llegarán listos para cenar en Edimburgo.",
          subTitle: "Práctico y rápido",
          details: [
            "Opción A: sándwich + café (lo más práctico).",
            "Opción B: Spark:York si quieren variedad rápida.",
            "Opción C: para llevar y comer en el tren.",
          ],
          options: [
            { title: "Opción A - Sándwich", text: "Rápido, limpio y cero complicación." },
            { title: "Opción B - Spark:York", text: "Variedad rápida si el grupo quiere opciones." },
            { title: "Opción C - To-go", text: "Perfecto si el tiempo se apretó." },
          ],
          tips: ["Ligero", "Agua", "Algo para el tren", "No comida pesada"],
          notes: "Comida corta, buffer largo. Esa es la fórmula.",
        },

        {
          time: "14:15",
          type: "logística",
          title: "Estación + buffer (reagrupar al equipo)",
          icon: "train",
          desc: "Llegar con margen evita el único drama posible del día: correr con maletas.",
          subTitle: "45–60 min recomendados",
          details: [
            "Buffer recomendado: 45–60 min.",
            "Checklist final York: souvenirs en bolsa pequeña, baterías cargadas, tickets listos.",
            "Baños, agua, ubicar andén y quedarse juntos.",
          ],
          options: [
            { title: "Modo pro", text: "Todos juntos antes de pasar a andén. Nadie se queda atrás." },
            { title: "Modo snack", text: "Comprar agua y algo pequeño ya en estación si hace falta." },
          ],
          tips: ["Buffer real", "Tickets listos", "Baño antes", "Reagrupar"],
          notes: "Salida tranquila = llegada a Edimburgo con buen mood.",
        },

        {
          time: "15:30",
          type: "tren",
          title: "Tren York -> Edinburgh Waverley (reservado)",
          icon: "ticket",
          desc: "Momento ideal para descanso y luego planear la cena de Edimburgo sin prisa.",
          subTitle: "40–60 min de silencio + plan ligero",
          details: [
            "Sugerencia: 40–60 min de descanso silencioso.",
            "Después: planean cena ligera cerca del hotel.",
          ],
          options: [
            { title: "Modo descanso", text: "Audífonos, cerrar ojos y recuperar energía." },
            { title: "Modo planeación", text: "Definir cena simple y regreso temprano." },
          ],
          tips: ["Agua", "Cargar batería", "Descanso primero", "Plan simple"],
          notes: "Llegar descansados hace que Edimburgo arranque fino.",
        },

        {
          time: "18:10",
          type: "transporte",
          title: "Llegada a Edimburgo + taxi al Sheraton",
          icon: "home",
          desc: "Con maletas, taxi/Uber es lo más eficiente. Cero vueltas innecesarias.",
          subTitle: "Puerta a puerta",
          details: [
            "Prioridad: llegar al hotel sin fricción.",
            "Si llueve o hace viento, taxi se siente doblemente buena decisión.",
          ],
          options: [
            { title: "Opción A - Taxi/Uber", text: "La recomendación con equipaje." },
            { title: "Opción B - Transporte público", text: "Solo si van súper ligeros y con tiempo." },
          ],
          tips: ["Taxi con maletas", "No alargar traslados", "Llegar y resetear"],
          notes: "Cierre limpio para empezar castillo mañana con energía.",
        },

        {
          time: "19:30",
          type: "cena",
          title: "Cena ligera cerca del Sheraton",
          icon: "utensils",
          desc: "Algo rico, simple y sin logística. Objetivo: dormir temprano.",
          subTitle: "Pub cómodo / brasserie simple / take-away",
          details: [
            "Opción A: pub cómodo cerca (cena sin complicarse).",
            "Opción B: brasserie simple (tranquilo y directo).",
            "Opción C: take-away si vienen cansados.",
          ],
          options: [
            { title: "Opción A - Pub cómodo", text: "La opción más fácil para cerrar el día." },
            { title: "Opción B - Brasserie simple", text: "Buena mesa sin moverse mucho." },
            { title: "Opción C - Take-away", text: "Si el cuerpo ya pidió cama." },
          ],
          tips: ["Ligero", "Hidratación", "Dormir temprano", "No maratón"],
          notes: "Regla final: dormir temprano hoy = lunes de castillo perfecto.",
        },
      ],
    },
  },
};

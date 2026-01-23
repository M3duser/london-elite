// data/sheets.js

export const SHEETS = {
  guia: {
    title: "Guía + Recomendaciones",
    icon: "map",
    content: [
      {
        title: "Moverse (sin fricción)",
        text:
          "• Usen Contactless en Tube/Bus (lo más fácil).\n" +
          "• Eviten hora pico: 07:30–09:30 y 17:00–19:00.\n" +
          "• En grupo con maletas: Taxi/Uber es rey.\n" +
          "• Si llueve: prioricen planes indoor (museos, mercados, pubs).",
      },
      {
        title: "Tickets y filas (estrategia pro)",
        text:
          "• Si algo tiene “slot” por hora, reserven: reduce colas y estrés.\n" +
          "• Lleguen 10–15 min antes a entradas con seguridad.\n" +
          "• Para miradores gratis: los tickets vuelan (activen recordatorios).\n" +
          "• Para grupos 4–6: reservar mesa mejora el viaje 10x.",
      },
      {
        title: "Comer bien sin sufrir",
        text:
          "• En Londres, mesa para 6 sin reserva es difícil en zonas top.\n" +
          "• Pubs: normalmente walk-in (llegar temprano = mesa segura).\n" +
          "• Restos casuales populares: reserven si van en horario prime.\n" +
          "• Plan B: mercados (Borough / Maltby / etc.) son perfectos sin reserva.",
      },
      {
        title: "Pubs para ver fútbol (sin caos)",
        text:
          "• Lleguen 45–60 min antes si es partido grande.\n" +
          "• Si quieren “mesa fija” frente a pantalla: revisen si hay reservas.\n" +
          "• Si no hay reserva: entren, pidan en barra, aseguren sitio y ya.",
      },
      {
        title: "Reglas de oro",
        text:
          "• Menos caminata = mejor mood del grupo.\n" +
          "• Cuando haya 2 opciones parecidas, elijan la más simple.\n" +
          "• Si algo se complica: pub + buena cena = rescate perfecto.",
      },
    ],
  },

  reservas: {
  title: "Reservas (Se agota)",
  icon: "ticket",
  kind: "reservas",

  levels: [
    {
      key: "nivel1",
      label: "Crítico",
      subtitle: "Sin esto, el itinerario se rompe",
      tone: "critical",
      cities: [
        {
          name: "Londres",
          items: [
            {
              title: "Warner Bros. Studio Tour (Harry Potter)",
              why: "Se agota meses antes. No hay venta en taquilla.",
              when: "Reservar YA (o cuando abran tu fecha)",
            },
            {
              title: "Harry Potter & The Cursed Child (Teatro)",
              why: "Evento ancla del viaje.",
              when: "Comprar cuanto antes",
            },
            {
              title: "Sky Garden / The Garden at 120",
              why: "Gratis, pero sin ticket no subes.",
              when: "Suelen liberar tickets los lunes (≈ 3 semanas antes)",
            },
            {
              title: "Churchill War Rooms",
              why: "Capacidad limitada + colas brutales.",
              when: "Mejor con hora fija",
            },
            {
              title: "Cena Viernes Santo (3 Abr)",
              why: "Feriado (Good Friday): muchos sitios cierran o se llenan.",
              when: "Reservar con anticipación (ideal 2–4 semanas)",
            },
          ],
        },
        {
          name: "Edimburgo",
          items: [
            {
              title: "Castillo de Edimburgo (6 Abr – feriado bancario)",
              why: "Todo el turismo estará ahí. Sin ticket pierdes la mañana.",
              when: "Comprar ticket con hora",
            },
            {
              title: "Rosslyn Chapel",
              why: "Muy pequeña y funciona por slots. Está lejos como para arriesgar.",
              when: "Reservar slot antes de ir",
            },
          ],
        },
        {
          name: "York",
          items: [
            {
              title: "Tren LNER (Londres ↔ York ↔ Edimburgo)",
              why: "Precios suben fuerte y se acaban asientos (ir de pie no es plan).",
              when: "Reservar aprox. 12 semanas antes",
            },
          ],
        },
      ],
    },

    {
      key: "nivel2",
      label: "Estratégico",
      subtitle: "Te ahorra filas, fricción y estrés de grupo",
      tone: "strategic",
      cities: [
        {
          name: "Londres",
          items: [
            {
              title: "Westminster Abbey",
              why: "La seguridad es inevitable, pero con ticket comprado fluye mejor.",
              when: "Comprar antes (según el día)",
            },
            {
              title: "Cena entre actos (Día 12)",
              why: "Tiempo limitado (~1h45). Todo el teatro sale a comer a la vez.",
              when: "Reservar mesa (Bancone / Dishoom / Flat Iron)",
            },
            {
              title: "Sunday Roast (Dom 12 Abr)",
              why: "Domingo al mediodía es sagrado en UK. Los pubs buenos se llenan.",
              when: "Reservar semanas antes (Blacklock / Pig and Butcher)",
            },
            {
              title: "Restaurantes top (ej. St. JOHN)",
              why: "Para grupos, sin reserva es muy difícil improvisar calidad.",
              when: "Reservar 3–4 semanas antes",
            },
          ],
        },
        {
          name: "Edimburgo",
          items: [
            {
              title: "Cena fine dining (Timberyard / The Kitchin / Little Chartroom)",
              why: "Grupos de 6 sin walk-ins casi nunca. Muy demandados.",
              when: "Reservar 2–3 meses antes",
            },
            {
              title: "One Spa (Sheraton)",
              why: "Si quieren masaje/tratamiento, se llena.",
              when: "Reservar antes (circuito: revisar en check-in)",
            },
          ],
        },
        {
          name: "York",
          items: [
            {
              title: "Roots o Skosh",
              why: "Sitios pequeños y premiados. Sábado noche es imposible sin reserva.",
              when: "Reservar con anticipación",
            },
          ],
        },
      ],
    },

    {
      key: "nivel3",
      label: "Walk-in",
      subtitle: "Mejor llegar y fluir",
      tone: "walkin",
      cities: [
        {
          name: "General",
          items: [
            {
              title: "Pubs para beber",
              why: "La mayoría no reserva para drinks (o reservan pocas mesas).",
              when: "Llegar, pedir en barra y asegurar hueco",
            },
            {
              title: "Mercados (Borough / Maltby / Shambles)",
              why: "Street food: no necesitas reserva.",
              when: "Llegar y comer al ritmo del grupo",
            },
            {
              title: "Museos grandes (British Museum / Tate Modern)",
              why: "Entrada general suele ser libre y fluida.",
              when: "Reservar solo exposiciones temporales (si aplica)",
            },
            {
              title: "Sports bar (fútbol)",
              why: "Normalmente por orden de llegada. Mesa VIP a veces se puede reservar.",
              when: "Si quieres mesa fija: revisar ~2 semanas antes",
            },
          ],
        },
      ],
    },
  ],

  proTip: {
    title: "Tip pro para grupos (4–6 pax)",
    text:
      "En Londres, mesa para 6 sin reserva es difícil en zonas top. " +
      "Usen OpenTable o Resy para coordinar y evitar estrés.",
  },
},


  insider: {
    title: "Insider Notes",
    icon: "sparkles",
    kind: "insider",
    filters: ["All", "Food", "Pubs", "Coffee", "Views", "Museums", "Shopping"],
    places: [
      // LONDON
      {
        name: "Dishoom",
        city: "London",
        type: "Food",
        note: "Si sois 6, reserven. Brunch también es top. Perfecto para vibes Londres.",
        priority: "gold",
      },
      {
        name: "Bancone (Covent Garden)",
        city: "London",
        type: "Food",
        note: "Ideal entre actos del teatro: rápido, rico, y muy consistente.",
        priority: "gold",
      },
      {
        name: "Flat Iron",
        city: "London",
        type: "Food",
        note: "Cena fácil, precio/calidad brutal. Buena opción cuando el grupo no decide.",
        priority: "normal",
      },
      {
        name: "Sky Garden",
        city: "London",
        type: "Views",
        note: "Gratis pero con ticket. Atardecer = wow. Llegar temprano aunque tengas hora.",
        priority: "gold",
      },
      {
        name: "The Garden at 120",
        city: "London",
        type: "Views",
        note: "Alternativa al Sky Garden. Menos presión, muy buena para fotos.",
        priority: "normal",
      },
      {
        name: "Famous Three Kings (sports pub)",
        city: "London",
        type: "Pubs",
        note: "Buen lugar para ver fútbol. Si quieren mesa “prime”, revisen reservas 2 semanas antes.",
        priority: "normal",
      },
      {
        name: "Liberty London",
        city: "London",
        type: "Shopping",
        note: "Shopping bonito + edificio icónico. Fácil de meter como parada corta.",
        priority: "normal",
      },
      {
        name: "British Museum (plan lluvia)",
        city: "London",
        type: "Museums",
        note: "Entrada general suele fluir. Perfecto para rescatar un día con mal clima.",
        priority: "normal",
      },

      // YORK
      {
        name: "The Shambles Market",
        city: "York",
        type: "Food",
        note: "Street food fácil. Ideal para comer sin reservar y seguir caminando.",
        priority: "normal",
      },
      {
        name: "Trembling Madness (York)",
        city: "York",
        type: "Pubs",
        note: "Beer heaven. Lleguen temprano si van en fin de semana.",
        priority: "gold",
      },

      // EDINBURGH
      {
        name: "Edinburgh Castle (tips)",
        city: "Edinburgh",
        type: "Museums",
        note: "Con ticket por hora evitan taquilla. Vayan temprano para fotos limpias.",
        priority: "gold",
      },
      {
        name: "Dean Village (walk)",
        city: "Edinburgh",
        type: "Views",
        note: "Caminata corta y fotogénica. Mejor en mañana para luz suave.",
        priority: "normal",
      },
      {
        name: "The Kitchin / Timberyard (fine dining)",
        city: "Edinburgh",
        type: "Food",
        note: "Si quieren una cena ‘wow’, aquí. Reservar con mucha anticipación.",
        priority: "gold",
      },
      {
        name: "One Spa (Sheraton)",
        city: "Edinburgh",
        type: "Coffee",
        note: "No es coffee, pero lo dejo como “reset”. Ideal para recuperación si el grupo va cansado.",
        priority: "normal",
      },
    ],
  },
};

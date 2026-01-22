export const london2 = {
  id: "london2",
  name: "LONDRES II",
  color: "#1c1917",
  hotel: "The London Edition",
  dates: "09 Abr - 14 Abr",
  daysOrder: ["abr09"],

  days: {
    abr09: {
      tag: "REGRESO",
      title: "De vuelta a la capital",
      goal: "Últimas compras y vibes finales.",
      events: [
        {
          time: "16:00",
          type: "visita",
          title: "Soho Shopping",
          icon: "shopping-bag",

          // portada (timeline)
          img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=1400",

          // ✅ 2–3 fotos reales (modal)
          gallery: [
            "https://commons.wikimedia.org/wiki/Special:FilePath/Carnaby%20Street%20Londres.jpg?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Neals%20Yard.JPG?width=1600",
            "https://commons.wikimedia.org/wiki/Special:FilePath/Liberty%20London%2021.jpg?width=1600",
          ],

          desc: "Explorar tiendas de diseño y discos.",

          subTitle: "Neal’s Yard · Seven Dials · Libertys · Vinilos · Pasajes cool",

          details: [
            "Ruta recomendada: Covent Garden → Neal’s Yard (15–20 min) → Seven Dials → Soho.",
            "Meta real: comprar 2–3 cosas buenas sin caminar como locos.",
            "Tómense 1 café a mitad de ruta para mantener energía y evitar irritación de grupo 😄",
            "Si alguien quiere vinilos: dense 25–35 min máximo para que no se vuelva ‘misión infinita’.",
          ],

          options: [
            {
              title: "Opción A — Diseño & Departamentales (Top)",
              text: "Liberty London (imperdible). Si van por regalos o algo elegante, aquí salen con algo bueno sí o sí.",
            },
            {
              title: "Opción B — Vinilos & música",
              text: "Buscar tiendas de discos en Soho. Regla: 1–2 tiendas y máximo 35 min cada una.",
            },
            {
              title: "Opción C — Shopping rápido sin caos",
              text: "Ir directo a 2 lugares definidos (ej. Liberty + una tienda de diseño) y luego café/descanso.",
            },
          ],

          tips: [
            "Liberty London es imperdible",
            "Half pint si paran en pub",
            "No compren con hambre",
            "Si llueve: arcades + tiendas interiores",
          ],

          notes:
            "Tip pro: si el grupo se dispersa, pongan un punto de reunión fijo cada 40 min. Así no se pierde nadie y no se vuelve caos.",
        },
      ],
    },
  },
};

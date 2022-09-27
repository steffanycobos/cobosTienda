const data = [
  ///               SHAMPOO                  /////

  {
    key: 1,
    id: 1,
    price: 10,
    title: "Maui",
    detail:
      "El shampoo de Maui Moisture tiene una fórmula nutritiva que ayuda a hidratar ligeramente. Es un producto vegano, sin sulfatos, siliconas, parabenos ni colorantes sintéticos.",
    img: "/assets/productoFoto/shampooMaui.jpg",
    stock: 4,
    categoria: "shampoo",
  },

  {
    key: 2,
    id: 2,
    price: 15,
    title: "Shea Moisture",
    detail:
      "Tratamiento nutritivo para el cabello que proporciona una humedad intensa para hacer que tus rizos sean suaves y estilizados.",
    img: "/assets/productoFoto/shampooShea.png",
    stock: 10,
    categoria: "shampoo",
  },

  {
    key: 3,
    id: 3,
    price: 20,
    title: "Shampoo Cantú",
    detail:
      " Realza el brillo y proporciona una nutrición intensiva.Incluye manteca de karité como ingrediente, hidratará y fortalecerá tu cabello.",
    img: "/assets/productoFoto/shampooCantu.png",
    stock: 4,
    categoria: "shampoo",
  },

  {
    key: 4,
    id: 4,
    price: 20,
    title: "Mane Choice",
    detail:
      "Lo suficientemente suave para el uso diario y lo suficientemente potente como para reparar y restaurar su Tresses. Añadir este acondicionador cabello a su sano régimen y ver como tu cabello se transforma en un estado mucho más fuerte, más brillantes y más sano.",
    img: "/assets/productoFoto/shampooDoit.png",
    stock: 5,
    categoria: "shampoo",
  },
  {
    key: 5,
    id: 5,
    price: 10,
    title: "Shea Moisture",
    detail:
      " El uso del champú Purple Rice Water Strength + Color Care puede ayudar a restaurar el cabello dañado a un estado más fuerte y saludable. Este shampoo, que no incluye sulfatos, es un shampoo fortalecedor del cabello ideal para cabellos dañados.",
    img: "/assets/productoFoto/shampooShea2.png",
    stock: 4,
    categoria: "shampoo",
  },

  {
    key: 6,
    id: 6,
    price: 15,
    title: "Palmers",
    detail:
      "Este champú tiene una maravillosa combinación de aceite de amla, manteca de cacao y manteca de karité, y está repleto de vitaminas, ácidos grasos esenciales y nutrientes. También contiene miel natural de la flor de manuka.",
    img: "/assets/productoFoto/shampooPalmers.png",
    stock: 10,
    categoria: "shampoo",
  },

  {
    key: 7,
    id: 7,
    price: 10,
    title: " Pure Care",
    detail:
      "Esta solución sin sulfato, que es ideal para los patrones de rizos más sueltos, debe ocupar un lugar destacado en tu reserva cosmética una vez al mes entre tu lavado habitual con champú para lucir rizos limpios, saludables y vibrantes.",
    img: "/assets/productoFoto/shampooWomen.png",
    stock: 4,
    categoria: "shampoo",
  },

  {
    key: 8,
    id: 8,
    price: 20,
    title: "Spray Maui",
    detail:
      "Debido a sus notables propiedades hidratantes, es ideal para reparar y restaurar los rizos secos y dañados. La composición comienza con una mezcla única de jugo de aloe vera y luego se mezcla con agua de coco pura para brindar una hidratación que realmente puedes sentir.",
    img: "/assets/productoFoto/sprayMaui.png",
    stock: 5,
    categoria: "shampoo",
  },

  //                   ACONDICIONADORES                              /////

  {
    key: 9,
    id: 9,
    price: 20,
    title: " AfroLove",
    detail:
      " Su fórmula última intervensión de sal, sulfato, parabenos, formaldehído, DEA, colorante, aceites minerales y silicona proporciona brillo, definición y sedosidad a cada mechón. Sus productos están hechos de elementos naturales como menta, eucalipto, manteca de karité, aloe vera, miel y varios aceites (oliva, aguacate, coco, árbol de té, romero y aceite de ricino), cuando se combinan crean una mezcla especial que estimula, refresca, hidrata, nutre y protege tu cabello.",
    img: "/assets/productoFoto/acondicionadorAfro.png",
    stock: 5,
    categoria: "acondicionador",
  },
  {
    key: 10,
    id: 10,
    price: 10,
    title: "Cantu",
    detail:
      "Este acondicionador proporciona la gran nutrición y hidratación que tu cabello necesita. Hecho con la formula clásica y galardonada de manteca de karité más aceite de aguacate y Vitamina E aporta la hidratación y nutrición necesaria para sacar lo mejor de tus rizos. ",
    img: "/assets/productoFoto/acondicionadorCantu.png",
    stock: 5,
    categoria: "acondicionador",
  },
  {
    key: 11,
    id: 11,
    price: 10,
    title: "Cantu",
    detail:
      "Hecho con manteca de karité pura, aceite de aguacate, aloe, mantequilla de semillas de mango y aceite de oliva, tus rizos disfrutarán de la máxima hidratación y mayor definición.",
    img: "/assets/productoFoto/acondicionadorCantu2.png",
    stock: 5,
    categoria: "acondicionador",
  },
  {
    key: 12,
    id: 12,
    price: 15,
    title: "TXTR",
    detail:
      "Revierte las señales de daño mientras brinda fuerza a tu cabello. Acondicionador infusionado con una exclusiva mezcla de Proteinfusion, que se concentra en las áreas severamente dañadas de tu pelo, dándole una sensación suave y acondicionada.",
    img: "/assets/productoFoto/acondicionadorCantu3.png",
    stock: 5,
    categoria: "acondicionador",
  },
  {
    key: 13,
    id: 13,
    price: 10,
    title: "Revlon",
    detail:
      "Acondicionador desenredante instantáneo con resultados inmediatos: cabello brillante y manejable que se siente suave e hidratado.",
    img: "/assets/productoFoto/acondicionadorRevlon.png",
    stock: 5,
    categoria: "acondicionador",
  },
  {
    key: 14,
    id: 14,
    price: 12,
    title: "Shea Moisture",
    detail:
      "Contiene aceite de coco para hidratar y proteger el cabello y reducir la rotura, proteínas de seda para una sensación suave y sedosa al tacto y aceite de neem para controlar el encrespamiento y añadir un toque brillante. Después del lavado, aplicar generosamente y peinar para distribuir de manera uniforme.",
    img: "/assets/productoFoto/acondicionadorShea.png",
    stock: 5,
    categoria: "acondicionador",
  },
  {
    key: 15,
    id: 15,
    price: 16,
    title: "Shea Moisture",
    detail:
      "Fortalece y restaura el cabello seco, dañado o en transición. Nuestro champú sin sulfatos ayuda a hidratar el cabello seco, dañador y sobreprocesado. Perfecto para la transición del cabello tratado químicamente a natural.",
    img: "/assets/productoFoto/acondicionadorShea2.png",
    stock: 5,
    categoria: "acondicionador",
  },
  {
    key: 16,
    id: 16,
    price: 10,
    title: "Shea Moisture",
    detail:
      ". Como un champú aclarador, elimina la acumulación de productos para el cabello, creando una espuma agradable y rica que limpia tanto el cabello como el cuero cabelludo sin quitar la humedad tan necesaria. ",
    img: "/assets/productoFoto/acondicionadorShea3.png",
    stock: 5,
    categoria: "acondicionador",
  },

  //             CREMAS                                //////

  {
    key: 17,
    id: 17,
    price: 15,
    title: "Crema Skala",
    detail:
      "Formulado especialmente para quien está pasando el proceso de transición. Elimina el frizz, hidrata, da volumen y moldea los rizos de manera suave sin dejar residuos.",
    img: "/assets/productoFoto/crema2Skala.png",
    stock: 5,
    categoria: "cremas",
  },
  {
    key: 18,
    id: 18,
    price: 10,
    title: "Crema AfroLove",
    detail:
      "Contiene una mezcla de 3 óleos: Argan, Coco y Patauá (palmera amazónica) y Extracto de Amaranto. Brinda al cabello Fuerza, Hidratación y Suavidad. Previene la ruptura del pelo y da un brillo natural. ",
    img: "/assets/productoFoto/cremaAfro.png",
    stock: 5,
    categoria: "cremas",
  },
  {
    key: 19,
    id: 19,
    price: 15,
    title: "Crema AfroHair",
    detail:
      "Suaviza e hidrata el cabello reseco, posee propiedades que ayudan a fortalecer el cabello seco y opaco, con nutrientes poderosos que dan suavidad al cabello dejándolo hermoso.",
    img: "/assets/productoFoto/cremaAroHair.png",
    stock: 5,
    categoria: "cremas",
  },
  {
    key: 20,
    id: 20,
    price: 10,
    title: "Crema  Cantu",
    detail:
      "La manteca de karité, el aceite de aguacate, el aloe, la mantequilla de semillas de mango y el aceite de oliva aumentan la humedad y la hidratación.Los nuevos ingredientes producen un delicioso aroma nuevo.",
    img: "/assets/productoFoto/cremaCantu2.png",
    stock: 5,
    categoria: "cremas",
  },
  {
    key: 21,
    id: 21,
    price: 10,
    title: "Crema  Cantu",
    detail:
      "Elaborada con extracto de piña y manteca de mango. Se puede utilizar como ACONDICIONADOR, ACTIVADOR DE RIZOS Y MÁSCARILLA PROFUNDA.",
    img: "/assets/productoFoto/cremaCantu3.png",
    stock: 5,
    categoria: "cremas",
  },
  {
    key: 22,
    id: 22,
    price: 12,
    title: "Crema  Cream",
    detail:
      "Empapa tu melena seca en esta mezcla reconstituyente de aceite de oliva orgánico certificado ultrahidratante y semilla de uva orgánica certificada rica en nutrientes para transformar el cabello reseco en una perfección suave y sedosa.",
    img: "/assets/productoFoto/cremaCream.jpg",
    stock: 5,
    categoria: "cremas",
  },
  {
    key: 23,
    id: 23,
    price: 14,
    title: "Crema  Rulls",
    detail:
      "Si tu cabello se siente seco y un poco infeliz, dale un poco de amor con nuestra mascarilla capilar de nutrición profunda. Ayuda a dejar el cabello suave como la seda, acondicionado y más manejable. ",
    img: "/assets/productoFoto/cremaRulls.png",
    stock: 5,
    categoria: "cremas",
  },
  {
    key: 24,
    id: 24,
    price: 20,
    title: "Crema  Shea",
    detail:
      "Este acondicionador reparador sin enjuague suaviza y desenreda el cabello mientras controla el encrespamiento. Perfecto para aquellos que se tiñen, alisan, hacen permanente o peinan con calor con regularidad, así como para estilos naturales rizados, rizados u ondulados. ",
    img: "/assets/productoFoto/cremaShea.png",
    stock: 5,
    categoria: "cremas",
  },

  /////                         ACCESORIOS                //////////////////
  {
    key: 25,
    id: 25,
    price: 5,
    title: "Cepillo Desenredante",
    detail:
      "Cepillo desenredante para cabello natural para Afro América 3a a 4c rizado ondulado, rizado, cabello en espiral, desenreda fácilmente con mojado/seco.",
    img: "/assets/productoFoto/accesorioCepillo.png",
    stock: 5,
    categoria: "accesorios",
  },
  {
    key: 26,
    id: 26,
    price: 5,
    title: "Cepillo Desenredante",
    detail:
      "Cepillo desenredante para cabello natural para Afro América 3a a 4c rizado ondulado, rizado, cabello en espiral, desenreda fácilmente con mojado/seco.",
    img: "/assets/productoFoto/accesorioCepillo2.png",
    stock: 5,
    categoria: "accesorios",
  },
  {
    key: 27,
    id: 27,
    price: 10,
    title: "Difusor",
    detail:
      "Los difusores de pelo están diseñados para dar volumen a tu cabello rizado y ondulado. Pero no te preocupes, también funciona en nuestras chicas con cabello liso que desea tener un ligero rizo de playa. Simplemente gira tu cabello húmedo y deja que nuestro difusor haga el trabajo.",
    img: "/assets/productoFoto/accesorioDifusor.png",
    stock: 5,
    categoria: "accesorios",
  },
  {
    key: 28,
    id: 28,
    price: 10,
    title: "Difusor",
    detail:
      "Los difusores de pelo están diseñados para dar volumen a tu cabello rizado y ondulado. Pero no te preocupes, también funciona en nuestras chicas con cabello liso que desea tener un ligero rizo de playa. Simplemente gira tu cabello húmedo y deja que nuestro difusor haga el trabajo. ",
    img: "/assets/productoFoto/accesorioDifusor2.png",
    stock: 5,
    categoria: "accesorios",
  },
  {
    key: 29,
    id: 29,
    price: 5,
    title: "Gorro",
    detail:
      "Tejido de satén de calidad, tacto sedoso y suave. El cordón elástico alrededor de la abertura garantiza un ajuste seguro. Genial gorro de dormir para combinar con su pijama o falda de noche .También se puede usar para bañarse, cuidar la piel y más.",
    img: "/assets/productoFoto/accesorioGorro.png",
    stock: 5,
    categoria: "accesorios",
  },
  {
    key: 30,
    id: 30,
    price: 8,
    title: "Gorro",
    detail:
      "Tejido de satén de calidad, tacto sedoso y suave. El cordón elástico alrededor de la abertura garantiza un ajuste seguro. Genial gorro de dormir para combinar con su pijama o falda de noche .También se puede usar para bañarse, cuidar la piel y más.",
    img: "/assets/productoFoto/accesorioGorro2.png",
    stock: 5,
    categoria: "accesorios",
  },
];
export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export function getSingleItem(idItem) {
  return new Promise((resolve, reject) => {
    let itemFind = data.find((item) => {
      return item.id === parseInt(idItem);
    });

    if (itemFind) {
      resolve(itemFind);
    } else reject(new Error("item no encontrado"));
  });
}

export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {
    let itemFind = data.filter((item) => {
      return item.categoria === cat;
    });
    setTimeout(() => {
      console.log("Encontramos:", itemFind);
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 1000);
  });
}



const data = [
  {
    id: 8,
    price: 10,
    title: "Maui",
    detail: "Shampoo sin parabenos",
    img: "https://s.cornershopapp.com/product-images/1157560.jpg?versionId=QMJlM2wDc0wZKfsCI8NBCwLDRCTJdArm",
    stock: 4,
  },

  {
    id: 1,
    price: 15,
    title: "Shea Moisture",
    detail: "Shampoo sin sal",
    img: "https://cdn0.woolworths.media/content/wowproductimages/large/152243.jpg",
    stock: 10,
  },

  {
    id: 2,
    price: 20,
    title: "Gel Cantu",
    detail: "Gel para fijación",
    img: "https://cdn.shopify.com/s/files/1/0283/5569/0568/products/Cantu_Avo_HydGel_18.5oz_fr_540x.jpg?v=1637091794",
    stock: 4,
  },

  {
    id: 3,
    price: 20,
    title: "Crema Skala",
    detail: "Crema hidratante",
    img: "https://skalacosmeticos.com.ar/wp-content/uploads/2021/02/cosmetic2.png",
    stock: 5,
  },
  {
    id: 4,
    price: 10,
    title: "Maui",
    detail: "Rehidrata, nutre y suaviza profundamente el cabello seco y dañado para que tu cabello vuelva a lucir saludable con esta mezcla con Manteca de Karité cremosa, Leche de Coco nutritiva y Aceite de Macadamia puro. Ayuda a mantener el cabello hidratado y sin frizz Maui Moisture Frizz-Free + Shea Butter Leave-in Conditioning Mist. Este spray fácil de usar ayuda a proteger del calor mientras define sus rizos para realzar su belleza natural. Seguro Para Cabello Teñido",
    img: "https://cdn.shopify.com/s/files/1/0503/8895/9421/products/0005280067702_large.jpg?v=1635467933",
    stock: 4,
  },

  {
    id: 5,
    price: 15,
    title: "Shea Moisture",
    detail: "Crema para Peinar",
    img: "https://www.famaideal.es/media/catalog/product/cache/1/thumbnail/600x600/110584b489ad505ddb03d4cf9cf008d7/m/o/moisture1_5.jpg",
    stock: 10,
  },

  {
    id: 6,
    price: 10,
    title: " Cantu",
    detail: "Acondicionador",
    img: "http://cdn.shopify.com/s/files/1/0283/5569/0568/products/817513015472_front_grande.jpg?v=1644355537",
    stock: 4,
  },

  {
    id: 7,
    price: 20,
    title: "Crema Skala",
    detail: "Crema hidratante",
    img: "https://www.ge-store.ch/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-11-at-21.21.54-5.jpeg",
    stock: 5,
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export function getSingleItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data[4]), 1500);
  });
} 
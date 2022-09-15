import React from "react";
import Card from "./cards";

function ItemListContainer() {
  return (
    <div>
      <h1 className="tracking-in-expand">Productos Estrella 🌟</h1>  
      <div className="container">
        <Card
          price={20}
          title="Crema Skala"
          detail="Crema hidratante"
          img="https://skalacosmeticos.com.ar/wp-content/uploads/2021/02/cosmetic2.png"
          stock={5}
        />


        <Card
          price={10}
          title="Maui"
          detail="Shampoo sin parabenos"
          img="https://s.cornershopapp.com/product-images/1157560.jpg?versionId=QMJlM2wDc0wZKfsCI8NBCwLDRCTJdArm"
          stock={4}
        />
        <Card
          price={15}
          title="Shea Moisture"
          detail="Shampoo sin sal"
          img="https://cdn0.woolworths.media/content/wowproductimages/large/152243.jpg"
          stock={10}
        />
        <Card
          price={20}
          title="Gel Cantu"
          detail="Gel para fijación"
          img="https://cdn.shopify.com/s/files/1/0283/5569/0568/products/Cantu_Avo_HydGel_18.5oz_fr_540x.jpg?v=1637091794"
          stock={4}
        />
      </div>
    </div> 
  );
}

export default ItemListContainer;

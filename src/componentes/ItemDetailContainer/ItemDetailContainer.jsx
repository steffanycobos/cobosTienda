import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAPI"
import "../componentes/productos/cards.css"
import ItemListContainer from "../componentes/productos/ItemListContainer"
import ItemCount from "../ItemCount/ItemCount";
import BasicExample from "./Accordion";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  useEffect(() => {
    getSingleItem(1).then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div className="card">
      <div className="card-img">
        <img src={data.img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{data.title}</h3>
        <h4>{data.price}$</h4>
      </div>
      <BasicExample/>
      <ItemCount/>
      <button className="boton boton2">
        Agregar al Carrito{" "}
        <img src="https://img.icons8.com/windows/32/000000/shopping-cart.png" />
      </button>
  </div>

);
}

export default ItemDetailContainer;
import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAPI";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos));
  }, [id]);

  return (
    <div>
      <div>
        <img className="img" src={data.img} alt=""></img>
      </div>
      <div className="detalle">
        <div className="card-detail">
          <h1>
            <strong>{data.title}</strong>
          </h1>
          <h4>{data.price}$</h4>
          <p className="descripcion">{data.detail}</p>
        </div>
        <ItemCount />
        <button className="boton boton2" >
          Agregar al Carrito{" "}
          <img src="/assets/productoFoto/carrito2.png" alt="" / >
        </button>
      </div>
    </div>
  );
}


export default ItemDetailContainer;

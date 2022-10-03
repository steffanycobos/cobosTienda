import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import "./cards.css";
import "../../../services/mockAPI"


function Card(props) {
  let { id, price, title, img, stock} = props;
  let urlDetalles = "/detalles/" + id;

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <h4>{price}$</h4>
        <Link className="verMas boton2" to={urlDetalles}>Ver Mas</Link>
      </div>
      <ItemCount stock={stock}/>
   
    </div>
  );
}

export default Card;

import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";
import "../../../services/firestore"


function Card(props) {
  let { id, price, title, img} = props;
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
    </div>
  );
}

export default Card;

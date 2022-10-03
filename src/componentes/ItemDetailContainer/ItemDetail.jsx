import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css"

function ItemDetail({ course }) {
  let estadoCarrito = false;

 function handleAddToCart(count) {
    alert(`Agregaste al carrito: ${count} ${course.title}`);
  }

  return (
    <div>
      <div>
        <img className="img" src={course.img} alt=""></img>
      </div>
      <div className="detalle">
        <div className="card-detail">
          <h1>
            <strong>{course.title}</strong>
          </h1>
          <h4>{course.price}$</h4>
          <p className="descripcion">{course.detail}</p>
        </div>
      </div>

      {estadoCarrito === false ? (
        <ItemCount
          className="boton boton2"
          stock={course.stock}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <Link className="boton boton2" to="/cart">Finalizar Compra</Link>
      )}
    </div>
  );
}

export default ItemDetail;

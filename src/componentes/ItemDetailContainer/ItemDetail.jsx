import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css"


function ItemDetail({ course }) {
  const [estadoCart, setEstadoCart] = useState(false);
  const { addItem } = useContext(cartContext);
  const handleAddToCart = (values) => {
    addItem(course, values);
    setEstadoCart(true);
    alert(
      `Agregaste al carrito ${values} ${course.categoria} de ${course.title}`
    );
  };

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

      {estadoCart === false ? (
        <ItemCount onAddToCart={handleAddToCart} />
      ) : (
        <div className="margen">
          <Link className="botonFinalizar verMas boton2 " to={"/cart"}>
            Finalizar Compra 🥳
          </Link>
        </div>
      )}
    </div>
  );
}
export default ItemDetail;

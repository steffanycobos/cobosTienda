import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css"
import Swal from 'sweetalert2'


function ItemDetail({ item}) {
  const [estadoCart, setEstadoCart] = useState(false);
  const { addItem } = useContext(cartContext);
  
  function handleAddToCart(count) {
    addItem(item, count);
    setEstadoCart(true);
    Swal.fire({
      icon: 'success',
      title: 'Agregaste '+ count +' ' + item.title ,
      color: "#716add",
        background: "#fff url(/assets/productoFoto/fondoAlert.png)",
        backdrop: `rgba(116,73, 106, 0.4)`,
  })};

  return (
    <div>
      <div>
        <img className="img" src={item.img} alt=""></img>
      </div>
      <div className="detalle">
        <div className="card-detail">
          <h1>
            <strong>{item.title}</strong>
          </h1>
          <h4>{item.price}$</h4>
          <p className="descripcion">{item.detail}</p>
        </div>
      </div>

      {estadoCart === false ? (
        <ItemCount onAddToCart={handleAddToCart} />
      ) : (
        <div className="margen">
          <Link className="botonFinalizar verMas boton2 " to={"/cart"}>
          Ir al Carrito 🛒
          </Link>
          <Link className="botonFinalizar verMas boton2 " to={"/"}>
          Seguir Comprando
          </Link>
        </div>
      )}
    </div>
  );
}
export default ItemDetail;

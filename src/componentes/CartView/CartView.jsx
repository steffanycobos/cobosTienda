import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import FinalCount from "./FinalCount";

import "./cartView.css";

function CartView() {
  const context = useContext(cartContext);
  const { cart, deleteItem } = context;

  if (cart.length === 0) {
    return (
      <div>
        {" "}
        <h3 className="carritoVacio"> <strong>    Tu carrito esta vacio... Quieres comprar?{" "}</strong>
      
        </h3>
        <iframe src="https://giphy.com/embed/TdvLcceTQeEBZK88OH" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> <br />
        <Link className="botonCompra" to={"/"}>
          {" "}
          Seguir Comprando!
        </Link>{" "}
      </div>
    );
  }

  return (
    <>
      {cart.map((item) => {
        return (
          <div key={item.id} className="cart">
            <img className="imagencarrito" src={item.img} alt="" />

            <strong className="titulo">{item.title}</strong>
            <div className="detallescarrito">
              <br />
              Precio:{item.price} $ Cantidad: {item.count}
            </div>

            <br />

            <IconButton onClick={() => deleteItem(item.id)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </div>
        );
      })}

      <FinalCount />
      <Link className="botonCompra" to="/checkout/orderid">
        {" "}
        Finaliza la Compra
      </Link>
      <Link className="botonCompra" to={"/"}>
          Seguir Comprando
          </Link>
    </>
  );
}

export default CartView;

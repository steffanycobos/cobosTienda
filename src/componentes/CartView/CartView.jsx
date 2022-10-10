import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import FinalCount from "./FinalCount";
import "./cartView.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function CartView() {
  const context = useContext(cartContext);
  const { cart, deleteItem } = context;

  if (cart.length === 0) {
    return (
      <div>
        {" "}
        <h3 className="carritoVacio">
          Tu carrito esta vacio... Quieres seguir comprando?{" "}
        </h3>
        <Link className="botonCompra" to={"/"}>
          {" "}
          Seguir Comprando!
        </Link>{" "}
      </div>
    );
  } else {
    return cart.map((item) => (
      <div key={item.key} className="cart">
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

        <FinalCount />
      </div>
    ));
  }
}

export default CartView;

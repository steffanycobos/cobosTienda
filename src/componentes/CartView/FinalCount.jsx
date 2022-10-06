import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

import DeleteIcon from "@mui/icons-material/Delete";
import "./cartView.css";

function FinalCount() {
  const context = useContext(cartContext);
  const { cart, emptyCart, getItemCount, getItemPrice } = context;

  return (
    <div>
      <div className="cajaFinal">
        N° de Articulos: {getItemCount()}
        {"   "}
        Precio Total:{getItemPrice()}
        {"  "}
      </div>
      <button className="boton3" onClick={emptyCart}>
        Vaciar <DeleteIcon />
      </button>
    </div>
  );
}

export default FinalCount;

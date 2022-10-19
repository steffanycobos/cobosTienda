import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

import DeleteIcon from "@mui/icons-material/Delete";
import "./cartView.css";

function FinalCount() {
  const context = useContext(cartContext);
  const { emptyCart, getItemCount, getItemPrice } = context;

  return (
    <div>
      <div className="cajaFinal">
      <strong>  N° de Articulos: {getItemCount()}</strong>
        {"   "}
       <strong>Precio Total:{getItemPrice()} $ </strong> 
        
        {"  "}
      </div>
      <button className="boton3" onClick={emptyCart}>
        Vaciar Carrito <DeleteIcon />
      </button>
    </div>
  );
}

export default FinalCount;

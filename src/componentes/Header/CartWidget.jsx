import React, { useContext } from "react";
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge} from '@mui/material'
import { cartContext } from "../../context/cartContext";

function CartWidget() {

  const {getItemCount}= useContext(cartContext)
  return (
    <div className="carrito">
  <Badge badgeContent={getItemCount()} color="secondary">
    
  <ShoppingCartIcon fontSize="large" />
  </Badge>
 
    </div>
  );
}

export default CartWidget;

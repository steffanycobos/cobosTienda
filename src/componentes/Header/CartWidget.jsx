import React, { useContext } from "react";
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge} from '@mui/material'
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {

  const {getItemCount}= useContext(cartContext)
  return (
    <div className="carrito">
  <Badge badgeContent={getItemCount()} color="warning">
    <Link to={"/cart"}>
  <ShoppingCartIcon fontSize="large" color="action"  />
  </Link>
  </Badge>
 
    </div>
  );
}

export default CartWidget;
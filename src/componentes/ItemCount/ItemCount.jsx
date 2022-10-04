import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    count >= stock
      ? alert("No tenemos mas stock del producto solicitado")
      : setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="contador2">
      <button onClick={handleSubtract} className="sumaresta">
        {" "}
        -{" "}
      </button>
      {count}
      <button onClick={handleAdd} className="sumaresta">
        {" "}
        +{" "}
      </button>
      <div className="itemcount_btns">
        <button className="boton boton2" onClick={() => onAddToCart(count)}>
          Agregar al Carrito{" "}
          <img
            src="https://img.icons8.com/windows/32/000000/shopping-cart.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default ItemCount;


import { createContext, useState } from "react";

export const cartContext = createContext();

const { Provider } = cartContext;

function MyProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Esta en el carrito?
  function isInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
  }
  //agregar al carrito
  function addItem(item, count) {
    if (isInCart(item.id)) {
      let newCart = cart.map((x) => {
        if (x.id === item.id) {
          x.count += count;
          return x;
        } else return x;
      });

      setCart(newCart);
    } else {
      let newCart = cart.map((item) => item);
      newCart.push({ ...item, count: count });
      setCart(newCart);
    }
  }
  // vaciar carrito
  const emptyCart = () => {
    return setCart([]);
  };
  // eliminar item

  function deleteItem(id) {
    return setCart(cart.filter((item) => item.id !== id));
  }

  //cantidad de unidades en el carrito
  const getItemCount = () => {
    return cart.reduce((acc, item) => (acc += item.count), 0);
  };
  // precio
  const getItemPrice = () => {
    return cart.reduce((acc, item) => (acc += item.price * item.count), 0);
  };

  return (
    <Provider
      value={{
        cart,
        isInCart,
        addItem,
        emptyCart,
        deleteItem,
        getItemCount,
        getItemPrice,
      }}
    >
      {children}{" "}
    </Provider>
  );
}

export default MyProvider;

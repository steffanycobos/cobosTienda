import { createContext, useState } from "react";

export const cartContext = createContext();

const { Provider } = cartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // esta en el carrito?
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  //agregar al carrito
  const addItem = (item, count) => {
    const newCart = {
      ...item,
      count,
    };
    if (isInCart(newCart.id)) {
      const findProducto = cart.filter((x) => x.id === newCart.id);
      const productoIndex = cart.indexOf(findProducto);
      const copiaCart = [...cart];
      copiaCart[productoIndex].count += count;
      setCart(copiaCart);
    } else {
      setCart([...cart, newCart]);
    }
  };
  // vaciar carrito
  const emptyCart = () => {
    return setCart([]);
  };
  // eliminar item
  const deleteItem = (id) => {
    return setCart(cart.filter((item) => item.id !== id));
  };
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
};

export default MyProvider;

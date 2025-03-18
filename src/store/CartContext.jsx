//Por hacer: Crear contexto que maneje el carrito
import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(item) {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }

  function removeItemFromCart(item) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem !== item)
    );
  }

  const ctxValue = { cartItems, addItemToCart, removeItemFromCart };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

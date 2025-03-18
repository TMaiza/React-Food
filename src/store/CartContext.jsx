import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(item) {
    setCartItems((prevCartItems) => {
      // Verifica si el item ya existe en el carrito
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // Si el item ya existe, incrementa la cantidad
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Si el item no existe, lo agrega con cantidad inicial de 1
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  }

  function removeItemFromCart(itemId) {
    setCartItems(
      (prevCartItems) =>
        prevCartItems
          .map((cartItem) =>
            cartItem.id === itemId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0) // Elimina si la cantidad llega a 0
    );
  }

  const ctxValue = { cartItems, addItemToCart, removeItemFromCart };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

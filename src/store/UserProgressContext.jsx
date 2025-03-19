import { createContext, useReducer } from "react";

// Definir los estados disponibles
const STATES = {
  HOME: "home",
  CART: "cart",
  CHECKOUT: "checkout",
};

// Definir las acciones
const ACTION_TYPES = {
  ENTER_HOME: "ENTER_HOME",
  ENTER_CART: "ENTER_CART",
  ENTER_CHECKOUT: "ENTER_CHECKOUT",
};

// Reducer para manejar las transiciones de estado
function userProgressReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ENTER_HOME:
      return STATES.HOME;
    case ACTION_TYPES.ENTER_CART:
      return STATES.CART;
    case ACTION_TYPES.ENTER_CHECKOUT:
      return STATES.CHECKOUT;
    default:
      return state;
  }
}

// Crear contexto
export const UserProgressContext = createContext(STATES.HOME);

export default function UserProgressContextProvider({ children }) {
  const [userProgress, dispatch] = useReducer(userProgressReducer, STATES.HOME);

  // Funciones para cambiar de estado
  const enterHome = () => dispatch({ type: ACTION_TYPES.ENTER_HOME });
  const enterCart = () => dispatch({ type: ACTION_TYPES.ENTER_CART });
  const enterCheckout = () => dispatch({ type: ACTION_TYPES.ENTER_CHECKOUT });

  const ctxValue = {
    userProgress,
    enterHome,
    enterCart,
    enterCheckout,
  };

  return (
    <UserProgressContext.Provider value={ctxValue}>
      {children}
    </UserProgressContext.Provider>
  );
}

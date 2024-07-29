import { createContext, useState } from "react";

export const miContexto = createContext();
const Provider = miContexto.Provider;

function CartContext(props) {
  const [carrito, setCarrito] = useState([]);
  const [carritoCant, setCarritoCant] = useState(0);

  const addToCart = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCarrito([...carrito, newItem]);
    setCarritoCant(carritoCant + quantity);
  };

  const calculateTotal = () => {
    return carrito.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setCarritoCant(0);
  };

  const valorDelContexto = {
    carrito,
    cant: carritoCant,
    addToCart,
    calculateTotal,
    vaciarCarrito,
    loggedIn: false,
  };

  return <Provider value={valorDelContexto}>{props.children}</Provider>;
}

export default CartContext;
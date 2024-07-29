import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useContext } from "react"
import { miContexto } from "./CartContext"

function NavBar(props) {

  const valorDelContexto = useContext(miContexto)


  if (props.isHeader == true) {
    return (
      <nav>
        <NavLink to="/">Inicio</NavLink >
        <NavLink to="/productos">Productos</NavLink >
        <NavLink to="/categoria/jewelery">Joyeria</NavLink >
        <NavLink to="/categoria/electronics">Electrónica</NavLink >
        <NavLink to="/carrito">Carrito</NavLink >
        <span className="cart-count">{valorDelContexto.cant}</span>
        <CartWidget />
      </nav>
    )
  }
  else {
    return (
      <nav>
        <a href="#">Terminos y Condiciones</a>
        <a href="#">Contactanos</a>
        <a href="#">F.A.Q</a>
      </nav>
    )
  }



}

export default NavBar
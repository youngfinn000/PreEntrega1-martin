import logoPaginaWeb from "../../img/logoPagina.jpg"
import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <div className="brand flex justify-left">
            <img src={logoPaginaWeb} width={150} alt="imagen de e-comerce" className="mr-4" />
        </div>
    {/* agregar tipografia con google fonts */}
        <ul className="flex justify-center grow text-lg md:text-xl lg:text-2xl mx-4 md:mx-8 lg:mx-12">
            <li>-comida normal-</li>

            <li>-comida especial-</li>

            <li>-pociones-</li>

            <li>-combos-</li>
            
        </ul>

        <CartWidget className="flex justify-end" />
    </nav>
    )
}
export default NavBar
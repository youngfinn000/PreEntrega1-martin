import logoPaginaWeb from "../../img/logoPagina.jpg";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <link to='/' className="brand flex justify-left">
                <img src={logoPaginaWeb} width={150} alt="imagen de e-comerce" className="mr-4" />
            </link>
            {/* agregar tipografia con google fonts */}

            <ul className="categories flex justify-center grow text-lg md:text-xl lg:text-2xl mx-4 md:mx-8 lg:mx-12">
                <link to="/categoria/comida-normal" className="category">
                    <li>-comida-normal-</li>
                </link>
                <link to="/categoria/comida-especial" className="category">
                    <li>-comida-especial-</li>
                </link>
                <link to="/categoria/pociones" className="category">
                    <li>-pociones-</li>
                </link>
                <link to="/categoria/combos" className="category">
                    <li>-combos-</li>
                </link>

            </ul>

            <CartWidget className="flex justify-end" />
        </nav>
    )
}
export default NavBar
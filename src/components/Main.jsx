import Button from "./Button"
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>


    </main>

  )
}



export default Main
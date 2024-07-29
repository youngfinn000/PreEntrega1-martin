import NavBar from "./NavBar"
import {Routes, Route } from "react-router-dom"

function Header(){
return (
  <header className="header">
    <img src="/knight.svg" alt="imagen" className="logo1" />
  <h1>bazarWeb</h1>
  <Routes>
    <Route path="/productos" element={<input/>}/>
  </Routes>

  <NavBar isHeader={true} />
  </header>
) 
}


export default Header
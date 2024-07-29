import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./components/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Header />
        <Main />
        <Footer />
      </CartContext>
    </BrowserRouter>
  )
}

export default App;
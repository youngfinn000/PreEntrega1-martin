// segundo importo con la ruta
import crearTitulo from "./titulo.js"

const app = () => {
const div = document.getElementById("root");

// tercero la llamo donde la quiero utilizar
crearTitulo(div)// y le paso por parametro donde se utiliza
 
};

// ajecuto app
app();


const crearTitulo = (div) => {

    const titulo = document.createElement("h1");
    titulo.innerText = "Bienvenidos a mi pagina con React";
    
    div.appendChild(titulo);

}

// primero exporto 
export default crearTitulo
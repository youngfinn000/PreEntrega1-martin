import { obtenerProductos } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import "./ItemListContainer.scss";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [Loading, setLoading] = useState(false)

    const { idCategoria } = useParams();

    useEffect(() => {
        //mostrar pantalla de carga
        setLoading(true)
        obtenerProductos()
            .then((respuesta) => {
                if (idCategoria) {
                    //filtrar los productos por esa categoria
                    const productosFiltrados = respuesta.filter(
                        (producto) => producto.categoria === idCategoria
                    );
                    setProductos(productosFiltrados);
                } else {
                    //guardar todos los productos
                    setProductos(respuesta);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                //oculto pantalla de carga
                setLoading(false)
            });
    }, [idCategoria]);

    return (
        <div className="itemlistcontainer">
            {Loading ? <div>cargando...</div> : <ItemList productos={productos} />}
        </div>
    );
};
export default ItemListContainer;

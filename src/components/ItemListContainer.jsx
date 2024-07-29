import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const params= useParams()
  

  useEffect(() => {

    if (params.id) {
      fetch('https://fakestoreapi.com/products/category/' + params.id)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          
          setProductos(data)
        })
    } else {
      fetch('https://fakestoreapi.com/products')
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setProductos(data)
        })
    }

  }, [params.id])


  return (
    <ItemList productos={productos} />
  );
}

export default ItemListContainer;

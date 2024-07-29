import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      fetch('https://fakestoreapi.com/products/' + id)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
        });
    }
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
    
    



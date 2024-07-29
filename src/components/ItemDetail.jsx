import React, { useState, useContext } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import { miContexto } from './CartContext';

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(miContexto);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
    alert('Producto agregado al carrito!');
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p className='precio-detalle'>Precio: ${item.price}</p>
      <ItemQuantitySelector onQuantityChange={handleQuantityChange} />
      <button onClick={handleAddToCart} className="addToCartButton">
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetail;






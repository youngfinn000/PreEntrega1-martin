import React, { useState, useContext } from 'react';
import { miContexto } from './CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseconfig';

function Carrito() {
  const { carrito, calculateTotal, vaciarCarrito } = useContext(miContexto);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [errores, setErrores] = useState({});

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!nombre) {
      nuevosErrores.nombre = 'El nombre es requerido';
    }
    if (!email) {
      nuevosErrores.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nuevosErrores.email = 'El email no es válido';
    }
    if (!direccion) {
      nuevosErrores.direccion = 'La dirección es requerida';
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      const nuevoPedido = {
        nombre,
        email,
        direccion,
        productos: carrito,
        total: calculateTotal(),
        fecha: new Date()
      };

      try {
        await addDoc(collection(db, "pedidos"), nuevoPedido);
        alert('Compra completada con éxito!');
        vaciarCarrito();
      } catch (error) {
        console.error("Error al registrar el pedido: ", error);
      }
    }
  };

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                <p className='items-carrito'>{item.title} - Cantidad: {item.quantity} - Subtotal: ${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <p className='total-carrito'>Total: ${calculateTotal()}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input 
            type="text" 
            id="nombre" 
            value={nombre} 
            onChange={handleNombreChange} 
            required 
          />
          {errores.nombre && <p className="error">{errores.nombre}</p>}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
          />
          {errores.email && <p className="error">{errores.email}</p>}
        </div>
        <div>
          <label htmlFor="direccion">Dirección: </label>
          <input 
            type="text" 
            id="direccion" 
            value={direccion} 
            onChange={handleDireccionChange} 
            required 
          />
          {errores.direccion && <p className="error">{errores.direccion}</p>}
        </div>
        <button type="submit" className="btn-cc">Completar Compra</button>
      </form>
    </div>
  );
}

export default Carrito;
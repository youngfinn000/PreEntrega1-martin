import React, { useState } from 'react';

const ItemQuantitySelector = ({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
        onQuantityChange(newQuantity); 
    };

    return (
        <div>
            <label htmlFor="quantity" className='IQC-1'>Cantidad:    </label>
            <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleChange}
                min={1}
            />
        </div>
    );
};

export default ItemQuantitySelector;

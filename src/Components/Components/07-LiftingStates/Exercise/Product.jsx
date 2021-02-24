'use strict';
import { useState } from 'react';

const Product = ({addToBasket}) => {
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(0);

    const add = (e) => {
        e.preventDefault();
        const d = {
            productName: productName,
            quantity: quantity
        }
        addToBasket(d);
    }

    return (
        <form onSubmit={add}>
            <input
                placeholder="Enter Name"
                type="text"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
            />
            <input
                placeholder="Enter Quantity"
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
            />
            <button
                type="submit"
            >
                Add Product
      </button>
        </form>
    )

}






export default Product;
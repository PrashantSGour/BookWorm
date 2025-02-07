import React from 'react';
import './CartDetails.css';

const CartDetails = ({ cartItems }) => {
    // Sample cart items if none are provided
    const sampleCartItems = [
        { name: 'Book 1', quantity: 2, price: 19.99, image: 'https://via.placeholder.com/150' },
        { name: 'Book 2', quantity: 1, price: 9.99, image: 'https://via.placeholder.com/150' },
        { name: 'Book 3', quantity: 3, price: 14.99, image: 'https://via.placeholder.com/150' }
    ];

    const items = cartItems && cartItems.length > 0 ? cartItems : sampleCartItems;

    return (
        <div className="cart-details">
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <span>{item.name}</span>
                                <span>Quantity: {item.quantity}</span>
                                <span>Price: ${item.price.toFixed(2)}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartDetails;
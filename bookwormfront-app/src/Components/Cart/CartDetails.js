import React, { useState, useEffect } from 'react';
import './CartDetails.css';

const CartDetails = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchCartDetails();
    }, []);

    const fetchCartDetails = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/cart-details/customer/${localStorage.getItem('customerId')}`);
            const data = await response.json();
            setCartItems(data);
            const total = data.reduce((acc, item) => acc + item.product.productSpCost * item.quantity, 0);
            setTotalPrice(total);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (cartdetailsId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/cart-details/${cartdetailsId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchCartDetails(); // Refresh cart details after deletion
                console.log('Product removed from cart successfully');
            } else {
                console.error('Failed to remove product from cart');
                const errorData = await response.text();
                console.error('Delete Error details:', errorData);
            }
        } catch (error) {
            console.error('Delete Request Error:', error);
        }
    };

    return (
        <div className="cart-details">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <img src={item.product.productImage} alt={item.product.productEnglishName} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                            <div>
                                <span>{item.product.productEnglishName}</span> - 
                                <span> Quantity: {item.quantity}</span> - 
                                <span> Price: ${item.product.productSpCost.toFixed(2)}</span>
                                <button onClick={() => handleDelete(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div>
                <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default CartDetails;
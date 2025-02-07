import React, { useState, useEffect } from "react";
import HeadingPage from '../Components/Cart/HeadingPage';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import CartDetails from '../Components/Cart/CartDetails';
import { useNavigate } from "react-router-dom";

function CartPage() {
    const [cartDetails, setCartDetails] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetchCartDetails();
    }, []);

    const fetchCartDetails = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/cart-details/customer/${localStorage.getItem('customerId')}`);
            const data = await response.json();
            setCartDetails(data);
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

    const handleCheckout = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/invoices/${localStorage.getItem('customerId')}`, {
                method: 'POST'
            });
            if (response.ok) {
                const invoiceData = await response.json();
                console.log('Invoice created successfully:', invoiceData);
                navigate('/invoice'); // Navigate to the invoice page
            } else {
                console.error('Failed to create invoice');
                const errorData = await response.text();
                console.error('Invoice Creation Error details:', errorData);
            }
        } catch (error) {
            console.error('Checkout Request Error:', error);
        }
    };

    return (
        <div>
            <div style={{ marginLeft: "193px", marginTop: "133px" }}>
                <HeadingPage title="Cart Details" />
            </div>
            <div>
                <Container>
                    <CartDetails cartItems={cartDetails} />
                </Container>
            </div>
            <div style={{ marginTop: "20px", marginLeft: "93px" }}>
                <Alert variant="info">
                    <h4>Total Price: {totalPrice}</h4>
                </Alert>
                <Button 
                    variant="primary" 
                    onClick={handleCheckout}    
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
}

export default CartPage;
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Button, TextField, Typography, Grid, Container, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import { FaTrashAlt } from 'react-icons/fa';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    },
}));

const CartPage = () => {
    const [cartDetails, setCartDetails] = useState([]);
    const [products, setProducts] = useState({});
    const [error, setError] = useState(null);

    const fetchCartDetails = async () => {
        try {
            const email = sessionStorage.getItem('customerEmail');
            const customerResponse = await fetch(`http://localhost:8080/api/customers/email/${email}`);
            if (!customerResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const customerData = await customerResponse.json();
            const customerId = customerData.customerid;
            const cartDetailsResponse = await fetch(`http://localhost:8080/api/cart-details/customer/${customerId}`);
            if (!cartDetailsResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const cartDetailsData = await cartDetailsResponse.json();
            setCartDetails(cartDetailsData);

            // Fetch product data for each unique product in cart details
            const productData = {};
            const uniqueProductIds = [...new Set(cartDetailsData.map(item => item.productId.productId))];
            for (const productId of uniqueProductIds) {
                const productResponse = await fetch(`http://localhost:8080/api/products/${productId}`);
                if (!productResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const product = await productResponse.json();
                productData[productId] = product;
            }
            setProducts(productData);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchCartDetails();
    }, []);

    const handleUpdate = (id, field, value) => {
        setCartDetails(cartDetails.map(item => item.cartDetailsId === id ? { ...item, [field]: value } : item));
    };

    const handleSave = (id) => {
        const updatedItem = cartDetails.find(item => item.cartDetailsId === id);
        fetch(`http://localhost:8080/api/cart-details/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Updated successfully:', data);
            fetchCartDetails();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/cart-details/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchCartDetails();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    if (error) return <div>Error: {error.message}</div>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Your Cart
            </Typography>
            <Grid container spacing={3}>
                {Object.keys(products).map(productId => (
                    <Grid item xs={12} sm={6} md={4} key={productId}>
                        <StyledCard>
                            <CardContent>
                                <Box display="flex" justifyContent="center">
                                    <img src="https://imgs.search.brave.com/fQFeRg-OtzjHLG6UXvP2pkejFD634-A3HiMYb94D9iQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjA4/MDc1NTE4L3Bob3Rv/L2hhbnVtYW4tcmFt/YXlhbmEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUNVb3BE/UUY5aWJ1MkNCX1hK/ZDY2bTNwTWJfMk9n/Q2xlYy1fLXdGSU0t/LUk9" alt={products[productId]?.productName || 'Loading...'} style={{ maxWidth: '100%', height: 'auto' }} />
                                </Box>
                                <Typography variant="h6" gutterBottom align="center" fontWeight="bold">
                                    {products[productId]?.productName || 'Loading...'}
                                </Typography>
                                <Typography variant="body2" gutterBottom align="center">
                                    {products[productId]?.productDescriptionShort || 'Loading...'}
                                </Typography>
                                {cartDetails.filter(item => item.productId.productId === productId).map(item => (
                                    <div key={item.cartDetailsId}>
                                        <TextField
                                            label="Quantity"
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => handleUpdate(item.cartDetailsId, 'quantity', e.target.value)}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Rent No Of Days"
                                            type="number"
                                            value={item.rentNoOfDays}
                                            onChange={(e) => handleUpdate(item.cartDetailsId, 'rentNoOfDays', e.target.value)}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <FormControl fullWidth margin="normal">
                                            <InputLabel>Transaction Type</InputLabel>
                                            <Select
                                                value={item.transType}
                                                onChange={(e) => handleUpdate(item.cartDetailsId, 'transType', e.target.value)}
                                            >
                                                <MenuItem value="rent">Rent</MenuItem>
                                                <MenuItem value="purchase">Purchase</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            label="Offer Cost"
                                            type="number"
                                            value={item.offerCost}
                                            onChange={(e) => handleUpdate(item.cartDetailsId, 'offerCost', e.target.value)}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <CardActions>
                                            <Button variant="contained" color="primary" onClick={() => handleSave(item.cartDetailsId)}>
                                                Save
                                            </Button>
                                            <Button variant="contained" color="secondary" onClick={() => handleDelete(item.cartDetailsId)}>
                                                <FaTrashAlt /> Delete
                                            </Button>
                                        </CardActions>
                                    </div>
                                ))}
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CartPage;

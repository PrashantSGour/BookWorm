import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardActions, Button, TextField, Typography, Container, MenuItem, Select, FormControl, InputLabel, Box, Collapse } from '@mui/material';
import { FaTrashAlt } from 'react-icons/fa';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, height 0.3s ease',
    height: '200px', // Initial height to display name and description
    width: '100%', // Ensure cards take full width in their container
    maxWidth: '300px', // Set a max width for the cards
    margin: '10px', // Add margin between cards
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    },
}));

const CartPage = () => {
    const [cartDetails, setCartDetails] = useState([]);
    const [products, setProducts] = useState({});
    const [expandedCard, setExpandedCard] = useState(null);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);

    const fetchCartDetails = async () => {
        try {
            const email = sessionStorage.getItem('customerEmail');
            const token = sessionStorage.getItem('token');
            const customerResponse = await fetch(`http://localhost:8080/api/customers/email/${email}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!customerResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const customerData = await customerResponse.json();
            const customerId = customerData.customerid;

            const cartDetailsResponse = await fetch(`http://localhost:8080/api/cart-details/customer/${customerId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!cartDetailsResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const cartDetailsData = await cartDetailsResponse.json();
            setCartDetails(cartDetailsData);

            // Fetch product data for each unique product in cart details
            const productData = {};
            const uniqueProductIds = [...new Set(cartDetailsData.map(item => item.productId.productId))];
            for (const productId of uniqueProductIds) {
                const productResponse = await fetch(`http://localhost:8080/api/products/${productId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
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

    const handleSave = async (id) => {
        const updatedItem = cartDetails.find(item => item.cartDetailsId === id);
        updatedItem.transType === 'purchase' ? updatedItem.rentNoOfDays = 0 : updatedItem.rentNoOfDays = updatedItem.rentNoOfDays;
        updatedItem.isRented = updatedItem.transType === 'rent';
        
        const token = sessionStorage.getItem('token');
        await fetch(`http://localhost:8080/api/cart-details/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    const handleDelete = (id) => {
        const token = sessionStorage.getItem('token');
        fetch(`http://localhost:8080/api/cart-details/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(cartDetails.find(item => item.cartDetailsId === id)),

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

    const handleExpandClick = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setExpandedCard(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleTransact = async () => {
        const token = sessionStorage.getItem('token');
        const email = sessionStorage.getItem('customerEmail');
        try {
            const customerResponse = await fetch(`http://localhost:8080/api/customers/email/${email}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!customerResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const customerData = await customerResponse.json();
            const customerId = customerData.customerid;

            const shelfResponse = await fetch(`http://localhost:8080/api/myshelf/customer/${customerId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!shelfResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const shelfData = await shelfResponse.json();
            const myShelfId = shelfData.shelfId;

            for (const item of cartDetails) {
                if (!item.transType) {
                    alert('Please select a transaction type for all items.');
                    return;
                }

                await handleSave(item.cartDetailsId);

                const expiryDate = item.transType === 'purchase' ? null : new Date();
                if (expiryDate) {
                    expiryDate.setDate(expiryDate.getDate() + item.rentNoOfDays);
                }

                const myShelfRequest = {
                    shelfId: myShelfId,
                    productId: item.productId.productId,
                    expiryDate: expiryDate,
                    tranType: item.transType
                };
                fetch(`http://localhost:8080/api/myshelf/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(myShelfRequest),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Product added to shelf successfully:', data);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    if (error) return <div>Error: {error.message}</div>;

    return (
        <Container ref={containerRef}>
            <Typography variant="h4" gutterBottom>
                Your Cart
            </Typography>
            <Box display="flex" justifyContent="center" marginBottom="20px" >
                <Button variant="contained" color="primary" onClick={handleTransact}>
                    Transact
                </Button>
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                {cartDetails.map(item => (
                    <StyledCard key={item.cartDetailsId} onClick={() => handleExpandClick(item.cartDetailsId)} style={{ height: expandedCard === item.cartDetailsId ? 'auto' : '280px' }}>
                        <CardContent>
                            <Box display="flex" justifyContent="center">
                                <img src="https://imgs.search.brave.com/fQFeRg-OtzjHLG6UXvP2pkejFD634-A3HiMYb94D9iQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjA4/MDc1NTE4L3Bob3Rv/L2hhbnVtYW4tcmFt/YXlhbmEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUNVb3BE/UUY5aWJ1MkNCX1hK/ZDY2bTNwTWJfMk9n/Q2xlYy1fLXdGSU0t/LUk9" alt={item.productId.productName || 'Loading...'} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Box>
                            <Typography variant="h6" gutterBottom align="center" fontWeight="bold">
                                {item.productId.productName || 'Loading...'}
                            </Typography>
                            <Typography variant="body2" gutterBottom align="center">
                                {item.productId.productDescriptionShort || 'Loading...'}
                            </Typography>
                            <Collapse in={expandedCard === item.cartDetailsId} timeout="auto" unmountOnExit>
                                <FormControl fullWidth margin="dense">
                                    <InputLabel>Transaction Type</InputLabel>
                                    <Select
                                        value={item.transType}
                                        onChange={(e) => {
                                            e.stopPropagation(); // Prevent collapse on select change
                                            handleUpdate(item.cartDetailsId, 'transType', e.target.value);
                                        }}
                                    >
                                        <MenuItem value="rent">Rent</MenuItem>
                                        <MenuItem value="purchase">Purchase</MenuItem>
                                    </Select>
                                </FormControl>
                                {item.transType === 'rent' && (
                                    <>
                                        <TextField
                                            label="Rent No Of Days"
                                            type="number"
                                            value={item.rentNoOfDays}
                                            onChange={(e) => handleUpdate(item.cartDetailsId, 'rentNoOfDays', Math.max(e.target.value, products[item.productId.productId].minRentDays))} // Ensure it can't go less than minRentDays
                                            fullWidth
                                            margin="dense"
                                            onClick={(e) => e.stopPropagation()} // Prevent collapse on input change
                                        />
                                        <TextField
                                            label="Rent Per Day"
                                            type="number"
                                            value={products[item.productId.productId].rentPerDay}
                                            fullWidth
                                            margin="dense"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            onClick={(e) => e.stopPropagation()} // Prevent collapse on input change
                                        />
                                    </>
                                )}
                                <TextField
                                    label="Total Price"
                                    type="number"
                                    value={item.transType === 'rent' ? item.rentNoOfDays * products[item.productId.productId].rentPerDay : item.offerCost || 0}
                                    fullWidth
                                    margin="dense"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    onClick={(e) => e.stopPropagation()} // Prevent collapse on input change
                                />
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Button variant="contained" color="secondary" onClick={() => handleDelete(item.cartDetailsId)}>
                                        <FaTrashAlt /> Delete
                                    </Button>
                                </CardActions>
                            </Collapse>
                        </CardContent>
                    </StyledCard>
                ))}
            </Box>
        </Container>
    );
};

export default CartPage;

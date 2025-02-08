import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, TextField, Typography, Container, Box, Collapse } from '@mui/material';
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

const ShelfPage = () => {
    const [shelfDetails, setShelfDetails] = useState([]);
    const [books, setBooks] = useState({});
    const [expandedCard, setExpandedCard] = useState(null);
    const [error, setError] = useState(null);
    const containerRef = useRef(null);

    const fetchShelfDetails = async () => {
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

            const shelfResponse = await fetch(`http://localhost:8080/api/myshelf/customer/${customerId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!shelfResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const shelfData = await shelfResponse.json();
            const shelfId = shelfData.shelfId;
            const shelfDetailsResponse = await fetch(`http://localhost:8080/api/myshelf/${shelfId}/details`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!shelfDetailsResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const shelfDetailsData = await shelfDetailsResponse.json();
            setShelfDetails(shelfDetailsData);
            alert(shelfDetailsData);
            // Fetch book data for each unique book in shelf details
            const bookData = {};
            const uniqueBookIds = [...new Set(shelfDetailsData.map(item => item.productId.productId))];
            for (const bookId of uniqueBookIds) {
                const bookResponse = await fetch(`http://localhost:8080/api/products/${bookId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!bookResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const book = await bookResponse.json();
                bookData[bookId] = book;
            }
            setBooks(bookData);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchShelfDetails();
    }, []);

    const handleUpdate = (id, field, value) => {
        setShelfDetails(shelfDetails.map(item => item.shelfDetailsId === id ? { ...item, [field]: value } : item));
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

    if (error) return <div>Error: {error.message}</div>;

    return (
        <Container ref={containerRef}>
            <Typography variant="h4" gutterBottom>
                Your Shelf
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                {shelfDetails.map(item => (
                    <StyledCard key={item.shelfDetailsId} onClick={() => handleExpandClick(item.shelfDetailsId)} style={{ height: expandedCard === item.shelfDetailsId ? 'auto' : '280px' }}>
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
                            <Collapse in={expandedCard === item.shelfDetailsId} timeout="auto" unmountOnExit>
                                <TextField
                                    label="Notes"
                                    type="text"
                                    value={item.notes}
                                    onChange={(e) => handleUpdate(item.shelfDetailsId, 'notes', e.target.value)}
                                    fullWidth
                                    margin="dense"
                                    onClick={(e) => e.stopPropagation()} // Prevent collapse on input change
                                />
                            </Collapse>
                        </CardContent>
                    </StyledCard>
                ))}
            </Box>
        </Container>
    );
};

export default ShelfPage;

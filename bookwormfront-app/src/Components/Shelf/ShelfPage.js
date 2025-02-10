import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, Typography, Container, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, height 0.3s ease',
    height: 'auto', // Adjust height to match the content
    width: '100%', // Ensure cards take full width in their container
    maxWidth: '300px', // Set a max width for the cards
    margin: '10px', // Add margin between cards
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    },
}));

const IconContainer = styled('div')`
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
`;

const ExpiryChip = styled(Chip)(({ theme }) => ({
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
}));

const ShelfPage = () => {
    const [shelfDetails, setShelfDetails] = useState([]);
    const [books, setBooks] = useState({});
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
            console.error('There was a problem with the fetch operation:', error);
            setShelfDetails([]); // Set shelfDetails to an empty array to display "Your Shelf is Empty"
            toast.error('Failed to fetch shelf details');
        }
    };

    useEffect(() => {
        fetchShelfDetails();
    }, []);

    if (error) return (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <Typography variant="h6" color="textSecondary">
                {error}
            </Typography>
        </Box>
    );

    return (
        <Container ref={containerRef}>
            <ToastContainer />
            <Box display="flex" justifyContent="center" marginBottom="20px">
                <Typography variant="h4" gutterBottom align="center">
                    Your Shelf
                </Typography>
            </Box>
            {shelfDetails.length === 0 ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                    <Typography variant="h6" color="textSecondary">
                        Your Shelf is Empty
                    </Typography>
                </Box>
            ) : (
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    {shelfDetails.map(item => (
                        <StyledCard key={item.shelfDetailsId}>
                            <IconContainer>
                                {item.tranType === 'rent' ? <FaCalendarAlt /> : <FaShoppingCart />}
                            </IconContainer>
                            <CardContent>
                                <Box display="flex" justifyContent="center">
                                    <img src="https://imgs.search.brave.com/fQFeRg-OtzjHLG6UXvP2pkejFD634-A3HiMYb94D9iQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjA4/MDc1NTE4L3Bob3Rv/L2hhbnVtYW4tcmFt/YXlhbmEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUNVb3BE/UUY5aWJ1MkNCX1hK/ZDY2bTNwTWJfMk9n/Q2xlYy1fLXdGSU0t/LUk9" alt={item.productId.productName || 'Loading...'} style={{ maxWidth: '100%', height: 'auto' }} />
                                </Box>
                                <Typography variant="h6" gutterBottom align="center" fontWeight="bold">
                                    {item.productId.productName || 'Loading...'}
                                </Typography>
                                <Typography variant="body2" gutterBottom align="center">
                                    {item.productId.productDescriptionLong || 'Loading...'}
                                </Typography>
                                <ExpiryChip
                                    label={item.tranType === 'rent' ? `Expiry Date: ${new Date(item.expiryDate).toLocaleDateString()}` : 'Expiry Date: Lifetime'}
                                />
                            </CardContent>
                        </StyledCard>
                    ))}
                </Box>
            )}
        </Container>
    );
};

export default ShelfPage;

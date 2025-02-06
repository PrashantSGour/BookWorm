import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import ReactCardCarousel from 'react-card-carousel'; // Import the carousel component

import image1 from './Pictures/image1.jpg'; // Ensure your image is accessible

// BookCard component to display individual book details
const BookCard = ({ book }) => {
  return (
    <div style={styles.cardStyle}>
      <CardMedia
        component="img"
        height="200"
        image={image1}
        alt={book.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.authorName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.description}
        </Typography>
      </CardContent>
    </div>
  );
};

// Styles for the carousel and the card
const styles = {
  containerStyle: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'middle',
  },
  cardStyle: {
    height: '400px', 
    width: '345px',
    paddingTop: '20px', 
    textAlign: 'center',
    background: '#52C0F5',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const PopularBooks = () => {
  const [books, setBooks] = useState([]);

  // Fetching books data from the API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data); // Store the books in the state
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#7d6df8' }}>
        Popular Books
      </Typography>
      {/* Carousel Component */}
      <div style={styles.containerStyle}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          {books.map((book, index) => (
            <BookCard key={book.id || index} book={book} />
          ))}
        </ReactCardCarousel>
      </div>
    </Box>
  );
};

export default PopularBooks;

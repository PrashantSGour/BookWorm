import React from 'react';
import PopularBooks from './PopularBooks';
import { Box, Typography } from '@mui/material';
import image1 from './Pictures/image1.jpg';
import image2 from './Pictures/image2.jpg';
import image3 from './Pictures/image3.jpg';
import image4 from './Pictures/image4.jpg';

const HomePage = () => {
    return (
        <Box sx={{ maxWidth: '80%', mx: 'auto', mt: 4, border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: 3, bgcolor: 'white' }}>
            <PopularBooks />
            <Box sx={{ p: 3, textAlign: 'center', bgcolor: 'lightpurple' }}>
                <Typography variant="h4" sx={{ mb: 2, color: 'purple' }}>Welcome to BookWorm</Typography>
                <Typography variant="body1" sx={{ color: 'purple' }}>
                    Discover a wide range of books from various genres and authors. Enjoy reading and explore new worlds with BookWorm.
                </Typography>
            </Box>
        </Box>
    );
};

export default HomePage;

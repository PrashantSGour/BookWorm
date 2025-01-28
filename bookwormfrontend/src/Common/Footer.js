import * as React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer()
{
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(218,31,38,255)', // Apply the red background
                py: 6,
                position: 'relative',
                width: '100%',
                bottom: 0,
                mt: 'auto',
                color: 'white', // Ensure text is white for better contrast
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        backgroundColor: 'white', // Apply white content box
                        borderRadius: '8px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Grid container spacing={4} justifyContent="space-between">
                        {/* Footer Links */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom color="rgba(218,31,38,255)">
                                About Us
                            </Typography>
                            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '8px' }}>
                                Company Info
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '8px' }}>
                                Careers
                            </Link>
                            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '8px' }}>
                                Privacy Policy
                            </Link>
                            <Link href="#" color="inherit" underline="none">
                                Terms & Conditions
                            </Link>
                        </Grid>

                        {/* Social Media */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom color="rgba(218,31,38,255)">
                                Follow Us
                            </Typography>
                            <IconButton color="inherit" sx={{ color: 'rgba(218,31,38,255)' }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="inherit" sx={{ color: 'rgba(218,31,38,255)' }}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton color="inherit" sx={{ color: 'rgba(218,31,38,255)' }}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton color="inherit" sx={{ color: 'rgba(218,31,38,255)' }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton color="inherit" sx={{ color: 'rgba(218,31,38,255)' }}>
                                <GitHubIcon />
                            </IconButton>
                        </Grid>

                        {/* Additional Information */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom color="rgba(218,31,38,255)">
                                Contact Us
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Email: support@bookworm.com
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Phone: +1 123-456-7890
                            </Typography>
                        </Grid>

                        {/* Newsletter */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom color="rgba(218,31,38,255)">
                                Newsletter
                            </Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>
                                Subscribe to our newsletter to stay updated with the latest news and offers.
                            </Typography>
                            <Link href="#" color="inherit" underline="none" sx={{ color: 'rgba(218,31,38,255)' }}>
                                Subscribe Now
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

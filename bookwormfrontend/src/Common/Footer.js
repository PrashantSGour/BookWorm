import * as React from 'react';
import { Box, Container, Grid2, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'skyeblue', // Set background to paper or match header's background
        py: 6,
        position: 'relative',  // Keep footer relative and allow content to push it down
        width: '100%',
        bottom: 0,
        mt: 'auto',  // Ensure footer pushes to bottom
        marginTop: 'auto', // This ensures footer remains at the bottom of the screen
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} justifyContent="space-between">
          {/* Footer Links */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Company Info
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Careers
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Privacy Policy
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Terms & Conditions
            </Link>
          </Grid2>

          {/* Social Media */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit">
              <GitHubIcon />
            </IconButton>
          </Grid2>

          {/* Additional Information */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: support@bookworm.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: +1 123-456-7890
            </Typography>
          </Grid2>

          {/* Newsletter */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Subscribe to our newsletter to stay updated with the latest news and offers.
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Subscribe Now
            </Link>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

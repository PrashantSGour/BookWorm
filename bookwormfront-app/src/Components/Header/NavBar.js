import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, Drawer } from '@mui/material';
import LoginComponent from '../Login/LoginComponent';
import RegistrationComponent from '../Registration/RegistrationComponent';
import './NavBar.css'; // Import CSS file

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [signupOpen, setSignupOpen] = React.useState(false);

  const handleLogout = async () => {
    try {
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('customerEmail'); // Remove email from local storage
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignupOpen = () => {
    setSignupOpen(true);
    handleLoginClose();
  };

  const handleSignupClose = () => {
    setSignupOpen(false);
  };

  const handleLoginFromSignup = () => {
    setSignupOpen(false);
    setLoginOpen(true);
  };

  const handleLoginSuccess = () => {
    setLoginOpen(false);
    navigate("/products");
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-container" style={{ zIndex: 1200 }}>
        <Container>
          {/* Brand Name */}
          <Navbar.Brand as={Link} to="/" className="navbar-brand" style={{ color: '#7d6df8' }}>
            BookWorm
          </Navbar.Brand>

          {/* Toggle Button for Small Screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Centered Search Bar */}
            <div className="search-container mx-auto">
              <input type="text" placeholder="Search..." className="search-input" />
              <button type="button" className="search-button">Search</button>
            </div>

            {/* Conditional Button */}
            <Nav className="ms-auto">
              {isLoggedIn ? (
                <Button variant="contained" sx={{ bgcolor: '#7d6df8' }} onClick={handleLogout}>
                  Log Out
                </Button>
              ) : (
                <Button variant="contained" sx={{ bgcolor: '#7d6df8' }} onClick={handleLoginOpen}>
                  Sign In
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Component Drawer */}
      <Drawer
        anchor="right"
        open={loginOpen}
        onClose={handleLoginClose}
        PaperProps={{ sx: { width: 500, zIndex: 1100 } }} // Set the width and z-index of the drawer
      >
        <LoginComponent onClose={handleLoginClose} onSignupOpen={handleSignupOpen} onLoginSuccess={handleLoginSuccess} />
      </Drawer>

      {/* Signup Component Drawer */}
      <Drawer
        anchor="right"
        open={signupOpen}
        onClose={handleSignupClose}
        PaperProps={{ sx: { width: 600, zIndex: 1100 } }} // Set the width and z-index of the drawer
      >
        <RegistrationComponent onClose={handleSignupClose} onLoginOpen={handleLoginFromSignup} />
      </Drawer>
    </>
  );
}

export default NavBar;

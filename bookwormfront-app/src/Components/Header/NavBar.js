import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaRegUser } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5"; // Login icon
import { HiOutlineUserAdd } from "react-icons/hi"; // Signup icon

import { Button, Drawer } from '@mui/material';
import LoginComponent from '../Login/LoginComponent';
import RegistrationComponent from '../Registration/RegistrationComponent';

import { Button, Drawer } from '@mui/material';
import LoginComponent from '../Login/LoginComponent';
import RegistrationComponent from '../Registration/RegistrationComponent';
import './NavBar.css';
import Logo from './logo.png'; // Import the logo image

function NavBar({ onSearch }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [signupOpen, setSignupOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleLogout = async () => {
    try {
      sessionStorage.setItem('isLoggedIn', 'false');
      sessionStorage.removeItem('customerEmail'); // Remove email from session storage
      sessionStorage.removeItem('token'); // Remove token from session storage
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

  const handleCartOpen = () => {
    navigate("/cart");
  };

  const handleShelfOpen = () => {
    navigate("/shelf");
  };

  const handleBrandClick = () => {
    if (isLoggedIn) {
      navigate("/products");
    } else {
      navigate("/");
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-container">
        <Container>
          <Navbar.Brand onClick={handleBrandClick} className="navbar-brand">
            <img src={Logo} alt="Logo" className="navbar-logo" /> BookWorm
          </Navbar.Brand>

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button type="button" className="search-button">Search</button>
        </div>

        {/* User Dropdown with Tooltip */}
        <Nav className="nav-options">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Dropdown
              show={showDropdown}
              onToggle={(isOpen) => setShowDropdown(isOpen)}
            >
              <Dropdown.Toggle variant="link" id="user-dropdown" className="dropdown-toggle">
                <FaRegUser size={22} className="user-icon" /> {/* User icon */}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item as={Link} to="/login" className="dropdown-item-custom" onClick={handleSelect}>
                  <IoLogInOutline size={18} className="dropdown-icon" /> Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/signup" className="dropdown-item-custom" onClick={handleSelect}>
                  <HiOutlineUserAdd size={18} className="dropdown-icon" /> Signup
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>

    <>
      <Navbar expand="lg" className="navbar-container" style={{ zIndex: 1200 }}>
        <Container>
          {/* Brand Name */}
          <Navbar.Brand onClick={handleBrandClick} className="navbar-brand" style={{ color: '#7d6df8', cursor: 'pointer' }}>
            BookWorm
          </Navbar.Brand>

          {/* Toggle Button for Small Screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
              {/* Add other Nav links here */}
            </Nav>
            <Nav className="ms-auto">
              {isLoggedIn ? (
                <>
                  <Button className="nav-btn" onClick={() => navigate('/cart')}>Cart</Button>
                  <Button className="nav-btn" onClick={() => navigate('/shelf')}>Shelf</Button>
                  <Button className="nav-btn logout-btn" onClick={handleLogout}>Log Out</Button>
                 </>
              ) : (
                <>
                  <Button className="nav-btn login-btn" onClick={() => setLoginOpen(true)}>Sign In</Button>
                  <Button className="nav-btn signup-btn" onClick={() => setSignupOpen(true)}>Sign Up</Button>
                </>
             )}
// =======

//             {/* Conditional Buttons */}
//             <Nav className="ms-auto">
//               {isLoggedIn ? (
//                 <>
//                   <Button variant="contained" sx={{ bgcolor: '#7d6df8', marginRight: '10px' }} onClick={handleCartOpen}>
//                     Cart
//                   </Button>
//                   <Button variant="contained" sx={{ bgcolor: '#7d6df8', marginRight: '10px' }} onClick={handleShelfOpen}>
//                     Shelf
//                   </Button>
//                   <Button variant="contained" sx={{ bgcolor: '#7d6df8' }} onClick={handleLogout}>
//                     Log Out
//                   </Button>
//                 </>
//               ) : (
//                 <Button variant="contained" sx={{ bgcolor: '#7d6df8' }} onClick={handleLoginOpen}>
//                   Sign In
//                 </Button>
//               )}
// >>>>>>> main
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Drawer anchor="right" open={loginOpen} onClose={() => setLoginOpen(false)}>
        <LoginComponent onClose={() => setLoginOpen(false)} onSignupOpen={() => setSignupOpen(true)} />
       </Drawer>
// =======

//       {/* Login Component Drawer */}
//       <Drawer
//         anchor="right"
//         open={loginOpen}
//         onClose={handleLoginClose}
//         PaperProps={{ sx: { width: 500, zIndex: 1100 } }} // Set the width and z-index of the drawer
//       >
//         <LoginComponent onClose={handleLoginClose} onSignupOpen={handleSignupOpen} onLoginSuccess={handleLoginSuccess} />
//       </Drawer>
// >>>>>>> main

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

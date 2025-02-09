import * as React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Container, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
import { FaRegUser } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5"; // Login icon
import { HiOutlineUserAdd } from "react-icons/hi"; // Signup icon
import './NavBar.css'; // Import CSS file
=======
import { Button, Drawer } from '@mui/material';
import LoginComponent from '../Login/LoginComponent';
import RegistrationComponent from '../Registration/RegistrationComponent';
import './NavBar.css';
import Logo from './logo.png'; // Import the logo image
>>>>>>> Stashed changes

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      User options
    </Tooltip>
  );

  const handleSelect = () => {
    setShowDropdown(false); // Close the dropdown after selecting an option
  };

  return (
<<<<<<< Updated upstream
    <Navbar expand="lg" className="navbar-container">
      <Container className="navbar-content">
        {/* Brand Name */}
        <Navbar.Brand href="#home" className="navbar-brand">BookWorm</Navbar.Brand>
=======
    <>
      <Navbar expand="lg" className="navbar-container">
        <Container>
          <Navbar.Brand onClick={handleBrandClick} className="navbar-brand">
            <img src={Logo} alt="Logo" className="navbar-logo" /> BookWorm
          </Navbar.Brand>
>>>>>>> Stashed changes

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button type="button" className="search-button">Search</button>
        </div>

<<<<<<< Updated upstream
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
=======
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
              {/* Add other Nav links here */}
            </Nav>
            {/* <div className="search-container">
              <input
                type="text"
                placeholder="Search for books..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="button" className="search-button">Search</button>
            </div> */}
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Drawer anchor="right" open={loginOpen} onClose={() => setLoginOpen(false)}>
        <LoginComponent onClose={() => setLoginOpen(false)} onSignupOpen={() => setSignupOpen(true)} />
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
>>>>>>> Stashed changes
  );
}

export default NavBar;

import * as React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Container, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5"; // Login icon
import { HiOutlineUserAdd } from "react-icons/hi"; // Signup icon
import './NavBar.css'; // Import CSS file

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
    <Navbar expand="lg" className="navbar-container">
      <Container className="navbar-content">
        {/* Brand Name */}
        <Navbar.Brand href="#home" className="navbar-brand">BookWorm</Navbar.Brand>

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
  );
}

export default NavBar;

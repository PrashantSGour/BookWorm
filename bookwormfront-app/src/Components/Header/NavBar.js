import * as React from 'react';
import { Navbar, Nav, Container, Dropdown, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS file

function NavBar() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      User options
    </Tooltip>
  );

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">BookWorm</Navbar.Brand>

        {/* Search bar */}
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>

        {/* User Dropdown with Tooltip */}
        <Nav className="nav-options">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Dropdown>
              <Dropdown.Toggle variant="link" id="user-dropdown" className="dropdown-toggle">
                User
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                <Dropdown.Item as={Link} to="/signup">Signup</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

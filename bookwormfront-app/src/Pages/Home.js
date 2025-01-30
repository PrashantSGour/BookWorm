import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveCarousel from '../Carousel';
import LoginPage from '../LoginRegistration/Login_page';  // Assuming this file exists
import RegistrationPage from '../LoginRegistration/customer_registration';  // Assuming this file exists

const HomePage = ({ page }) => {
  return (
    <div style={{display:'block'}}>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
        <h1>BookWorm</h1>
        <nav>
          <Link to="/signin" style={{ margin: '0 10px', textDecoration: 'none', color: 'rgba(218,31,38,255)' }}>Sign In</Link>
          <Link to="/signup" style={{ margin: '0 10px', textDecoration: 'none', color: 'rgba(218,31,38,255)' }}>Sign Up</Link>
        </nav>
      </header>
      <div>
        <ResponsiveCarousel />
      </div>
      <div
        style={{
          backgroundColor: 'rgb(255, 204, 102)',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          boxSizing: 'border-box',
        }}
      >
        {/* Conditionally render LoginPage or RegistrationPage based on the `page` prop */}
        {page === 'login' && <LoginPage />}
        {page === 'register' && <RegistrationPage />}
        
        {/* If no page is specified, HomePage content is displayed */}
        {!page && <div>Your home page content goes here!</div>}
      </div>
    </div>
  );
};

export default HomePage;

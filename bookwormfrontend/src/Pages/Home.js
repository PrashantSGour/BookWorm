import React from 'react';
import LoginPage from '../LoginRegistration/Login_page';  // Assuming this file exists
import RegistrationPage from '../LoginRegistration/customer_registration';  // Assuming this file exists

const HomePage = ({ page }) => {
  return (
    <div>
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

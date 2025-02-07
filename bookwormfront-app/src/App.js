import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Header/NavBar';

import ProductsPage from './Components/Products/ProductdDisplay';
import RegistrationForm from './Components/Registration/RegistrationComponent';
import SignInPage from './Components/Login/LoginComponent';
import HomePage from './Components/Home/HomePage';
 // Similarly, import your SignUpPage
import CartPage from './Pages/CartPage';
import UserProfile from './Components/UserProfile/UserProfile'; // Import UserProfile

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Header/NavBar';
import SignUpPage from './Components/Registration/RegistrationForm';
import SignInPage from './Components/Login/LoginComponent';
 // Similarly, import your SignUpPage
import CartPage from './Pages/CartPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" component={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

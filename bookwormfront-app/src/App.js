import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Header/NavBar';
import SignUpPage from './Components/Registration/SignUpPage';
import SignInPage from './Components/Login/SignIn';
import ProductsPage from './Components/Products/ProductDisplay';
 // Similarly, import your SignUpPage

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

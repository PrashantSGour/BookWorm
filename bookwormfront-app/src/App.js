import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Header/NavBar';
import SignUpPage from './Components/Registration/RegistrationComponent';
import SignInPage from './Components/Login/LoginComponent';
import HomePage from './Components/Home/HomePage';
 // Similarly, import your SignUpPage

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;

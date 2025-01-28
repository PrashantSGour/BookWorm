import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginRegistration/Login_page';
import RegistrationPage from './LoginRegistration/customer_registration';
import Layout from './Common/Layout';


function App()
{
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

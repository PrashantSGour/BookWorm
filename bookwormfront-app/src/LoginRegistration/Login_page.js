import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from './Box'; // Assuming Box is in the same folder

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        alert('Login Successful!');
    };

    return (
        <div
            style={{
                position: 'relative',
                height: '100vh',
                padding: '10px',
                boxSizing: 'border-box',
            }}
        >
            {/* Centering the box */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Box>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Page</h2>
                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: 'rgba(218,31,38,255)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginBottom: '10px',
                            }}
                        >
                            Sign In
                        </button>
                    </form>
                    <button
                        onClick={() => navigate('/register')}
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: 'white',
                            color: 'rgba(218,31,38,255)',
                            border: '1px solid rgba(218,31,38,255)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Sign Up
                    </button>
                </Box>
            </div>
        </div>
    );
};

export default LoginPage;

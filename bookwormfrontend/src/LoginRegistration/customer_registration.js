import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import Box from './Box'; // Assuming Box is in the same folder

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        dateOfBirth: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Form submitted:', formData);
        alert('Registration Successful!');
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
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <FaBookOpen /> Registration Page
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }}
                            />
                        </div>
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
                        <div style={{ marginBottom: '15px' }}>
                            <label>Repeat Password:</label>
                            <input
                                type="password"
                                name="repeatPassword"
                                value={formData.repeatPassword}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Date of Birth:</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Address:</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px', resize: 'none', boxSizing: 'border-box' }}
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
                            }}
                        >
                            Register
                        </button>
                    </form>
                </Box>
            </div>
        </div>
    );
};

export default RegistrationPage;

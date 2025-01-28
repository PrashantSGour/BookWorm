import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const HomePage = () =>
{
    const navigate = useNavigate();

    return (
        <div>
            <div style={{
                backgroundColor: 'rgba(218,31,38,255)',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                boxSizing: 'border-box',
            }}>
            </div>
        </div>
    );
};

export default HomePage;

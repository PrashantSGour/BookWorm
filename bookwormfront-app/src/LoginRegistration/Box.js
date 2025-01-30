import React from 'react';

const Box = ({ children, style = {} }) => {
    return (
        <div
            style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '400px',
                boxSizing: 'border-box',
                ...style, // Merge custom styles if provided
            }}
        >
            {children}
        </div>
    );
};

export default Box;

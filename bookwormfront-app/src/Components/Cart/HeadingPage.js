import React from 'react';
import './HeadingPage.js';

const HeadingPage = ({ title }) => {
    return (
        <div className="heading-page">
            <h1>{title}</h1>
        </div>
    );
};

export default HeadingPage;
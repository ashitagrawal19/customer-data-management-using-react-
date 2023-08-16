import React from 'react';
import './Header.css'; // Import your CSS file for the Header

function Header({ setIsAdding }) {
    return (
        <header className="header-container">
            <h1 className="header-title">Customer Data Management </h1>
            <div className="header-button-container">
                <button onClick={() => setIsAdding(true)} className="round-button">Add Customer</button>
            </div>
        </header>
    )
}

export default Header;

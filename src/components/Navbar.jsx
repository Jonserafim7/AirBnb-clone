import React from 'react';
import AirbnbLogo from '/public/assets/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav>
            <img className="airbnb-logo" src={AirbnbLogo} alt='airbnb logo'/>   
        </nav>
    );
};

export default Navbar;

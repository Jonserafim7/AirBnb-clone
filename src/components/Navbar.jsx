import React from 'react';
import AirbnbLogo from '../assets/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav>
            <img class="airbnb-logo" src={AirbnbLogo} alt='airbnb logo'/>   
        </nav>
    );
};

export default Navbar;

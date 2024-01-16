import React from 'react';
import AirbnbLogo from '../assets/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav>
            <div className='flex-container'>
                <img class="airbnb-logo" src={AirbnbLogo} alt='airbnb logo'/>   
            </div>
        </nav>
    );
};

export default Navbar;

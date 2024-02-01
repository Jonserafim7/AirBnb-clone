import React from 'react';
import HeroImageGrid from '/public/assets/photo-grid.png';

const Hero = () => {
    return (
        <section className='hero'>
            <img className='hero-image' src={HeroImageGrid} alt='hero image'/>
            <h1 className='hero-title'>Online Experiences</h1>
            <h2 className='hero-subtitle'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </h2>
        </section>
    );
};

export default Hero;

import React from 'react';
import KatieZaferesPhoto from '../assets/image12.png';
import StarIcon from '../assets/Star.png';
import EllipseIcon from '../assets/Ellipse6.png';

const Card = () => {
    return (
        <div className="card">
            <p className='tag'>SOLD OUT</p>
            <img className="card-image" src={KatieZaferesPhoto} alt='Katie Zaferes'/>
            <div className='card-text'>
                <div className='rating'>
                    <img className='star-icon' src={StarIcon} alt='start icon'/>
                    <p className='rating'>5.0</p>
                    <p className='number-of-ratings'>(6) </p>
                    <img className='ellipse-icon' src={EllipseIcon}/>
                    <p className='location'>USA</p>
                </div>
                <h2 className='description'>Life lessons with Katie Zaferes</h2>
                <p><span className='bold'>From $136</span> / person</p>
            </div>
        </div>
    );
};

export default Card;

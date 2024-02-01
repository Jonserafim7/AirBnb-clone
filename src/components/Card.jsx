import React from 'react';

import StarIcon from '/public/assets/Star.png';
import EllipseIcon from '/public/assets/Ellipse6.png';


const Card = (props) => {  
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className='tag'>{badgeText}</div>}
            <img className="card-image" src={`/public/assets/${props.coverImg}`} alt='Katie Zaferes'/>
            <div className='card-text'>
                <div className='rating'>
                    <img className='star-icon' src={StarIcon} alt='start icon'/>
                    <p className='rating'>{props.stats.rating}</p>
                    <p className='number-of-ratings'>({props.stats.reviewCount})</p>
                    <img className='ellipse-icon' src={EllipseIcon}/>
                    <p className='location'>{props.location}</p>
                </div>
                <h2 className='description'>{props.title}</h2>
                <p><span className='bold'>From ${props.price}</span> / person</p>
            </div>
        </div>
    );
};

export default Card;

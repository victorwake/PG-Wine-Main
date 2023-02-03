import React from 'react';
import { Link } from 'react-router-dom';

import './card.css';
import React from "react";


export default function Card({image, name, varietal , winery,price, id}) {
    return (
        <div>
            <Link to={'/wine/' + id}>
            <img className='card_image' src={image} alt='img not found'/>
            </Link>
            <h3>{name}</h3>
            <h5>{varietal}</h5>
            <h5>{winery}</h5>
            <h5>{price}</h5>
            
        </div>
    );


}
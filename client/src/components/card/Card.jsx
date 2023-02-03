import React from 'react';
import { Link } from 'react-router-dom';

import './card.css';
import React from "react";


<<<<<<< HEAD
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
=======
export const Card = () => {
>>>>>>> 8dee92399bd045ddf9b0519a318e17a553e887e5

}
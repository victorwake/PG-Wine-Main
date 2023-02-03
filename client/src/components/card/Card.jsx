import React from 'react';
import { Link } from 'react-router-dom';
import { getDbVarietal } from '../../../../api/src/controllers/varietalControllers';
import './card.css';

export default function Card({image, name, getDbVarietal, weight, id}) {
    return (
        <div>
            <Link to={'/wine/' + id}>
            <img className='card_image' src={image} alt='img not found'/>
            </Link>
            <h3>{name}</h3>
            <h5>{getDbVarietal}</h5>
           
            
        </div>
    );

}
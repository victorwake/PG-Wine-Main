import './card.css';
import React from "react";
import { useSelector } from "react-redux";

 export default function Card({image, name, varietal , winery,price, id}) {
        return (
            <div>
                {/* <Link to={'/wine/' + id}> /}
                <img className='card_image' src={image} alt='img not found'/>
                {/ </Link> */}
                <h3>{name}</h3>
                <h5>{varietal}</h5>
                <h5>{winery}</h5>
                <h5>{price}</h5>
    
            </div>
        )
    }
    

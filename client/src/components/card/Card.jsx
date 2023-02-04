import './card.css';
import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

 export default function Card({image, name, varietal , winery,price, id}) {
    console.log(id)
        return (
            <div>
                  <Link to={`/winedetail/${id}`  }> 
                <img className='card_image' src={image} alt='img not found'/>
                 </Link> 
                <h3><b>Nombre:</b> {name}</h3>
            <h5><b>Varietal:</b> {varietal}</h5>
            <h5><b>Bodega:</b> {winery}</h5>
            <h5><b>Precio:</b> ${price}</h5>   

            </div>
        )

    }


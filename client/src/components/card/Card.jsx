import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './card.css';



export default function Card({image, name, varietal , winery,price, id, colour_type}) {
    const clase = useSelector(store => store.theme);
    return (
        <div className={"card-container-" + clase}>
            
                <div className={"card-" + clase}>
                    <div className={"img-card-" + clase}><img height="200px" className={"img-" + clase} src={image} alt = {name} /></div>
                    <div><h2 className={"name-card-" + clase} >Vino {colour_type} {name}</h2></div>
                    <div><h4 className={"type-wine-card-" + clase}>{varietal} </h4></div>
                    <div><h4 className={"winery-card-" + clase}>{winery}</h4></div>
                    <div><h4 className={"price-card-" + clase}>{price} $</h4></div>
                </div>
        </div>
    );
}
import './card.css';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from '../../redux/actions';


export const Card = ({ image, name, color_type, varietal , winery, price, id }) => {//se lo paso por props
    const clase = useSelector(store => store.theme);
    const wines = useSelector(store => store.wines)
    const dispatch = useDispatch();

    return (
        <div className={"card-container-" + clase}>
            
                <div className={"card-" + clase}>
                    <div className={"img-card-" + clase}><img height="200px" className={"img-" + clase} src={image} alt = {name} /></div>
                    <div><h2 className={"name-card-" + clase} >Vino {color_type} {name}</h2></div>
                    <div><h4 className={"type-wine-card-" + clase}>{varietal} </h4></div>
                    <div><h4 className={"winery-card-" + clase}>{winery}</h4></div>
                    <div><h4 className={"price-card-" + clase}>{price} $</h4></div>
 
                    <div>
                    <button onClick={() => dispatch(addToCart(id))}>Agregar al Carrito</button>
                    </div>
               </div>
        </div>
    );
    }



    
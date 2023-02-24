import './expCard.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";





export const ExpCard = ({ name, price, kindOfExp, image, url}) => {//se lo paso por props
    const clase = useSelector(store => store.theme);
    const experiences = useSelector(store => store.experiences)


    return (
        <div className={"card-container-exp-" + clase}>
            
                <div className={"card-exp-" + clase}>
                    <div className={"img-card-exp-" + clase}><img height="200px" className={"img-" + clase} src={image} alt = {name} /></div>
                    <div><h2 className={"name-card-exp-" + clase} >{name}</h2></div>
                    <div><h4 className={"type-exp-card-" + clase}>{kindOfExp} </h4></div>
                    <div><h4 className={"url-card-" + clase}>{url}</h4></div>
                    <div><h4 className={"price-card-" + clase}>{price} $</h4></div>
                </div>
        </div>
    );
}

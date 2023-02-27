import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { NavBar } from "../navBar/NavBar";
import { Card }from '../card/Card';
import {
    getWineDetail,
    addToCart,
    addWineToFavorites,
    removeWineFromFavorites,
    getWinesFromFavorites,
  } from "../../redux/actions";

export const Favorite= () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const currentUser = useSelector((state) => state.usuario);
    const clase = useSelector((store) => store.theme);




    useEffect(() => {
        dispatch(getWinesFromFavorites(currentUser.usuario.idUser));
      }, [dispatch]);


    return (
        <div  className={"card-container-home-" + clase} >
        
      {favorites.length > 0 && favorites.map((w => ((
        <Fragment key={w.id}>
     <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
         <Card     
         name={w.name}
         varietal={w.varietal}
         image= {w.image} 
         winery={w.winery}
         price= {w.price} 
         />
          </Link>
         </Fragment>
       ))))}
      
       </div>
    );
}


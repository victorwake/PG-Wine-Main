import { NavBar } from '../navBar/NavBar';
import './home.css';
import { Fragment, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getWines, addToCart,removeFromCart } from '../../redux/actions';
import { Card }from '../card/Card'
import { NavBarWineType } from '../navBarWineType/NavBarWineType';
import { Link } from 'react-router-dom';
import { Sale } from '../sale/Sale'
import _ from 'lodash';
import FloatCart from '../shoppingCart/FloatCart';



export const Home = () => {

    const dispatch = useDispatch();
    const allWines = useSelector(state=> state.wines)
    const clase= useSelector(store => store.theme);
    

    const shuffledWines = _.shuffle(allWines);
    const tenRandomWines = shuffledWines.slice(0, 8);
    const discountedWines = tenRandomWines.map((w) => ({
        ...w,
        price: w.price * 0.9,
    }));

    //Lo usariamos cuando tengamos los filtros, se cambiaria el allWines.slide por este

    useEffect(()=>{
        if(!allWines.length)dispatch(getWines())
    },[]);

   
   

    return (
      <div className={"home-container-" + clase}>
      <div className='home_nav'>
          <NavBar/>
          <FloatCart/>
      </div>
      <NavBarWineType />
      <h2 className={"sale-type-h2-" + clase}>Destacados</h2>
      <div  className={"card-container-home-" + clase} >
      
          {tenRandomWines?.map((w => (
              <fragment key={w.id}>
                      <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                      <Card
                          name={w.name}
                          varietal={w.varietal}
                          image= {w.image} 
                          winery={w.winery}
                          price= {w.price}
                          
                          />
                        <button onClick={() => dispatch(addToCart(w.id)) }>Comprar</button> 
                           

                      </Link>
                  </fragment>
          )))}  
      </div>
  </div>
    )
}
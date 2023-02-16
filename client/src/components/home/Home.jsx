import { NavBar } from '../navBar/NavBar';
import './home.css';
import { Fragment, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getWines, addToCart } from '../../redux/actions';
import { Card }from '../card/Card'
import { NavBarWineType } from '../navBarWineType/NavBarWineType';
import { Link } from 'react-router-dom';
import { Sale } from '../sale/Sale'
import _ from 'lodash';



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
            </div>
            <NavBarWineType />
           
            <h2 className={"sale-type-h2-" + clase}>Ofertas al 10%</h2>
            <div  className={"card-container-home-" + clase} >
                {/* <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..."/>
                        <h5>Promo 1</h5>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                        <h5>Promo 2</h5>
                        </div>
                        <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..."/>
                        <h5>Promo 3</h5>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}
                {discountedWines?.map((w => (
                        <Fragment key={w.id}>
                            <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <Card
                                name={w.name}
                                varietal={w.varietal}
                                image= {w.image} 
                                winery={w.winery}
                                price= {w.price}
                                />
                                <Link to = {'/carrito'}>
                                <button className='agregarcart' onClick={() => dispatch(addToCart(w.id))}>Agregar al Carrito</button>
                            </Link>
                            </Link>
                        </Fragment>
                )))}  
            </div>
        </div>
    )
}
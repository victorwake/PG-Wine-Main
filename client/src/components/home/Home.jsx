import { NavBar } from '../navBar/NavBar';
import './home.css';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getVarietal, getWines } from '../../redux/actions';
import Card from '../card/Card'
import { Link } from 'react-router-dom';

export const Home = () => {

    const dispatch = useDispatch();
    const allWines = useSelector(state=> state.wines)
    const allVarietal = useSelector(state => state.varietal)


    function handleClick(e){
        e.preventDefault();
        // dispatch(cleanAllFilters());
        }
     useEffect(()=>{
       dispatch(getWines());
    //    dispatch(getVarietal())
     },[]);        

    return (
        <div className='home-container-light'>
            <div className='home_nav'>
                <NavBar/>
            </div>
            <div className='card-container-home-light'>
                {allWines.map(e => {
                    return(
                        <Link to={`/winedetail/${e.id}`} key={e.id}>
                        <div className='cardgrid'>
                        <Card
                        image= {e.image} 
                        name={e.name}
                        varietal={e.varietal}
                        winery={e.winery}
                        price= {e.price}
                        />
                        </div>
                        </Link>
                        )})}
            </div>
        </div>
    )
}
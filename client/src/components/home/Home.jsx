import { NavBar } from '../navBar/NavBar';
import './home.css';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getVarietal, getWines } from '../../redux/actions';
import Card from '../card/Card'

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
        <div className='home'>
            <div className='home_nav'>
                <NavBar/>
            </div>
            <div className='home_data'>
                {allWines.map(e => {
                    return(
                        <div className='cardgrid'>
                        <Card
                        
                                name={e.name}
                                varietal={e.varietal}
                                image= {e.image} 
                                winery={e.winery}
                                price= {e.price}
                            />
                        </div>)})}
            </div>
        </div>


       
    )
}
import './general.css';
import { NavBar } from '../navBar/NavBar';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getVarietal, getWines } from '../../redux/actions';




export const General = () => {

    const dispatch = useDispatch();
    const allWines = useSelector(state=> state.wines)
    const allVarietal = useSelector(state => state.varietal)

    function handleClick(e){
        e.preventDefault();
        // dispatch(cleanAllFilters());
        }
     useEffect(()=>{
       dispatch(getWines());
       dispatch(getVarietal())
     },[]);        

    return (
        <div className='general'>
            <div className='general_nav'>
                <NavBar/>
            </div>
            <div className='general_data'>
                <h1>aca van las card</h1>
            </div>
        </div>

    )
}
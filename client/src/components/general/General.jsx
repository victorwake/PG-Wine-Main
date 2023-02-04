import './general.css';
import { NavBar } from '../navBar/NavBar';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getVarietal, getWines, getWinery, getColourType, getListType } from '../../redux/actions';


export const General = () => {

    const dispatch = useDispatch();
    const allWines = useSelector(state=> state.wines)
    const allVarietal = useSelector(state => state.varietal)
    const page = useSelector(state => state.currentPage)

    
    const winePerPage = 18;
    const lasWine = page * winePerPage // 1 *  = 9
    const firstWine = lasWine-winePerPage // 9 - 9 = 0
    const winePage = allWines.slice(firstWine, lasWine)
               
    function handleClick(e){
        e.preventDefault();
        // dispatch(cleanAllFilters());
        }


     useEffect(()=>{
       dispatch(getWines());
       dispatch(getVarietal());
       dispatch(getWinery());
    //    dispatch(getColourType)
       dispatch(getListType())
     },[dispatch]);        


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


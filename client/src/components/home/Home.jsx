import { NavBar } from '../navBar/NavBar';
import './home.css';
import { Fragment, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getWines } from '../../redux/actions';
import { Card }from '../card/Card'
import { NavBarWineType } from '../navBarWineType/NavBarWineType';
import { Link } from 'react-router-dom';


export const Home = () => {

    const dispatch = useDispatch();
    const allWines = useSelector(state=> state.wines)
    const clase= useSelector(store => store.theme);

    
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
            <div  className={"card-container-home" + clase} >
                {allWines?.map((w => (
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
                )))}
                        
            </div>
        </div>
    )
}
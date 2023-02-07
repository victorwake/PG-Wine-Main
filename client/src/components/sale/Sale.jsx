
import './sale.css';
import { NavBar } from '../navBar/NavBar';
import { Link } from 'react-router-dom';
import { getWines } from '../../redux/actions';
import { Card }from '../card/Card'
import { Fragment, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const Sale = () => {
    const allWines = useSelector(state=> state.wines)
    const shuffledWines = allWines.shuffle(allWines);
    const tenRandomWines = shuffledWines.slice(0, 10);
    const dispatch = useDispatch();
    const clase = useSelector((state) => state.theme);

    useEffect(() => {
        dispatch(getWines())
    }, [dispatch])
    


    return (
        <div className={"sale-container-" + clase}>
            <NavBar/>
            <h1 className={"sale-type-h1-" + clase}>Ofertas</h1>
            <div className="wine-type">
                <div className={"card-container-sale-" + clase}>
                {tenRandomWines?.map((w => (
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
        </div>
    );

}
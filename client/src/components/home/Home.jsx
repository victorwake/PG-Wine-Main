import './home.css';
import { NavBar } from '../navBar/NavBar';
import { NavBarWineType } from '../navBarWineType/NavBarWineType';
import { Carousel } from '../carousel/Carousel';
import { useEffect, Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getWines } from '../../redux/actions';
import { Card }from '../card/Card'
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Footer } from '../footer/Footer';

export const Home = () => {

    const dispatch = useDispatch();
    const allWines = useSelector(state=> state.wines)
    const clase= useSelector(store => store.theme);

    const shuffledWines = _.shuffle(allWines);
    const tenRandomWines = shuffledWines.slice(0, 10);
    // const discountedWines = tenRandomWines.map((w) => ({
    //     ...w,
    //     price: w.price * 0.9,
    // }));
    
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
            <Carousel/>
            <h2 className={"sale-type-h2-" + clase}>Destacados</h2>
            <div  className={"card-container-home-" + clase} >
            
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
            <Footer/>
        </div>
    )
}

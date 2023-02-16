import './wineType.css';
import { Pagination } from '../pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import {getWineType} from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { Card } from '../card/Card';
import { Link } from 'react-router-dom';
import { NavBar } from '../navBar/NavBar';
import  Nav  from '../navAdmin/Nav';
import { Filters } from '../filters/Filters';
import { nameASC, nameDES, priceDES, priceASC } from '../../helpers/sort';

export const WineType= () => {
    const currentPage = useSelector(state => state.currentPage);
    const clase = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const nameOrder = useSelector(state => state.nameOrder);
    const price = useSelector(state => state.price)
    const wine = useSelector(state => state.wineType)
    const {type} = useParams();

    let wines = [...wine]
    
    if(nameOrder === 'asc' ) wines.sort(nameASC);
    if(nameOrder === 'desc') wines.sort(nameDES);   
    if(price === 'Menor') wines.sort(priceASC);
    if(price === 'Mayor') wines.sort(priceDES);
    

    // paginado
    const winesPerPage = 15;
    const indexLastWine = currentPage * winesPerPage;
    const indexFirstWine = indexLastWine - winesPerPage;
    const currentWines = wines.slice(indexFirstWine, indexLastWine);

    

    useEffect(() => {
        dispatch(getWineType(type))
    }, [dispatch, type])


    return (
        <div className={"wine-container-" + clase}>
            <NavBar />
            <Filters/>
            <h1 className={"wine-type-h1-" + clase}>Vinos {type}</h1>
            <div className={"pagination-container-type-" + clase} >
                {<Pagination wines = {wines.length} winesPerPage = {winesPerPage} />}
                </div>
            <div className="wine-type">
                <div className={"card-container-wine-" + clase}>
                    
                    {currentWines?.map((w => (
                        <Fragment key={w.id}>
                            <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit' }}>
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
import './wineType.css';
import { Pagination } from '../pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import {getWineType} from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { Card } from '../card/Card';
import { Link } from 'react-router-dom';
import { NavBar } from '../navBar/NavBar';

export const WineType= () => {
    const currentPage = useSelector(state => state.currentPage);
    const clase = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const wine = useSelector(state => state.wineType)
    const {type} = useParams();

    // paginado
    // const winesPerPage = 10;
    // const indexLastWine = currentPage * winesPerPage;
    // const indexFirstWine = indexLastWine - winesPerPage;
    // const currentWines = allWines.slice(indexFirstWine, indexLastWine);

    useEffect(() => {
        dispatch(getWineType(type))
    }, [dispatch, type])


    return (
        <div className={"wine-container-" + clase}>
            <NavBar/>
            <h1 className={"wine-type-h1-" + clase}>Vinos {type}</h1>
            <div className="wine-type">
                <div className={"card-container-wine-" + clase}>
                    
                    {wine.map((w => (
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
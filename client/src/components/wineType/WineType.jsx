import './wineType.css';
import { Pagination } from '../pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import {getWineType} from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { Card } from '../card/Card';
import { Link } from 'react-router-dom';

export const WineType= () => {
    const currentPage = useSelector(state => state.currentPage);
    const clase = useSelector((state) => state.clase);
    const dispatch = useDispatch();
    const wine = useSelector(state => state.winType)
    const {type} = useParams();
    console.log(type)
    console.log(wine)

    // paginado
    // const winesPerPage = 10;
    // const indexLastWine = currentPage * winesPerPage;
    // const indexFirstWine = indexLastWine - winesPerPage;
    // const currentWines = allWines.slice(indexFirstWine, indexLastWine);

    useEffect(() => {
        dispatch(getWineType(type))
    }, [dispatch, type])


    return (
        <div class="wine-type-conteiner">
            <div className="wine-type">
                <div className="wine-type-title">
                    <h1>Vinos {type}</h1>
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
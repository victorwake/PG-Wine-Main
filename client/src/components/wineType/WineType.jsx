import { useEffect, Fragment, useCallback, useState, useMemo } from 'react';
import './wineType.css';
import { Pagination } from '../pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getWineType } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { Card } from '../card/Card';
import { Link } from 'react-router-dom';
import { NavBar } from '../navBar/NavBar';
import { Filters } from '../filters/Filters';
import { priceDES, priceASC } from '../../helpers/sort';
import { PriceRange } from '../priceRange/PriceRange';

export const WineType = () => {
    const currentPage = useSelector(state => state.currentPage);
    const clase = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const priceOrder = useSelector(state => state.price)
    const wines = useSelector(state => state.wineType)
    const { type } = useParams();
    const defaultPriceRange = useMemo(() => [0, 10000000], [])
    const [priceRange, setPriceRange] = useState(defaultPriceRange)

    // Filter the total list of wines
    const filteredWines = useMemo(() => {
        return wines
            .filter(el => el.price >= priceRange[0] && el.price <= priceRange[1])
            .sort((priceOrder === 'Mayor') ? priceDES : priceASC)
    }, [wines, priceRange, priceOrder])

    // Keep only the wines of the current page
    const winesPerPage = 15;
    const pageWines = useMemo(() => {
        const indexLastWine = currentPage * winesPerPage;
        const indexFirstWine = indexLastWine - winesPerPage;
        return filteredWines.slice(indexFirstWine, indexLastWine)
    }, [currentPage, filteredWines, winesPerPage])

    const handleChangePriceRange = useCallback((range) => {
        setPriceRange(range)
    }, [])


    useEffect(() => {
        dispatch(getWineType(type))
    }, [dispatch, type])


    return (
        <div className={"wine-container-" + clase}>
            <NavBar  />
            <Filters />
            <PriceRange onChangePriceRange={handleChangePriceRange} defaultPriceRange={defaultPriceRange} />
            <h1 className={"wine-type-h1-" + clase}>Vinos {type}s</h1>
            <div className={"pagination-container-type-" + clase} >
                <Pagination wines={filteredWines.length} winesPerPage={winesPerPage} />
            </div>

            <div className="wine-type">
                <div className={"card-container-wine-" + clase}>
                    {pageWines?.map((w => (
                        <Fragment key={w.id}>
                            <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Card
                                    name={w.name}
                                    varietal={w.varietal}
                                    image={w.image}
                                    winery={w.winery}
                                    price={w.price}
                                />
                            </Link>
                        </Fragment>
                    )))}
                </div>
            </div>
        </div>
    );
}

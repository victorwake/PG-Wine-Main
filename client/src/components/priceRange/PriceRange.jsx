import './priceRange.css'
import { useState, useCallback, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Filters } from '../filters/Filters';
import { changeCurrentPage }  from "../../redux/actions";  
import { useDispatch } from "react-redux";

export const PriceRange = ({ onChangePriceRange, defaultPriceRange }) => {
    const dispatch = useDispatch()
    const clase = useSelector(state => state.theme)
    const [range, setRange] = useState(defaultPriceRange || [0, 10000000])

    const handleChangeRange = useCallback((e) => {
        e.preventDefault()
        const selectedRange = e.target.value
        setRange(selectedRange.split(','))
        onChangePriceRange(range)
        dispatch(changeCurrentPage(1));
        console.log('rango: ' + range)
    })

    const handleClickFilter = useCallback(() => {
        onChangePriceRange(range)
        dispatch(changeCurrentPage(1));
    })

    return (
        <div>
            <label for="customRange2" className={'h5-' + clase} >Rangos: </label>
            <select onChange={(e) => handleChangeRange(e)} className={"select-filter-" + clase}>
                <option value="0,10000000">Todos</option>
                <option value="0,10000">$0 - $10.000</option>
                <option value="10000,30000">$10.000 - $30.000</option>
                <option value="30000,50000">$30.000 - $50.000</option>
                <option value="50000,100000">$50.000 - $100.000</option>
                <option value="100000,1000000">Mas de $100.000</option>
            </select>
            <button onClick={(e) => handleClickFilter(e)}>Buscar</button>
        </div>
    )

}
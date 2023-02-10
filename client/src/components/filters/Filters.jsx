import { useDispatch, useSelector } from "react-redux";
import { 
    changeNameOrder, 
    changeCurrentPage, 
    changeUseFilter, 
    getPrice } 
    from "../../redux/actions";   
import { PriceRange } from "../priceRange/PriceRange";
import './filters.css'

export const Filters = () => {

    const dispatch = useDispatch()
    const clase = useSelector(state => state.theme)
    const nameOrder = useSelector(state => state.nameOrder);
    const useFilter = useSelector(state => state.useFilter);
    const price = useSelector(state => state.price);


    const handleNameOrder = e => {
        e.preventDefault()
        dispatch(changeNameOrder(e.target.value));     
        if(!useFilter) dispatch(changeUseFilter(true));
    };


    const handlePriceOrder = e => {
        e.preventDefault()
        dispatch(getPrice(e.target.value))
        dispatch(changeCurrentPage(1));
    }


    return (
        <div className={"filter-container-" + clase}>

            <div className={"filter-box-" + clase}>

                <h5 className={'h5-' + clase}>Filtrar por:</h5>
                {/* <select value= {nameOrder} onChange={handleNameOrder} className={"select-filter-" + clase}>
                    <option value= '' disabled>Name</option>
                    <option value= 'asc'>A - Z</option>
                    <option value= 'desc'>Z - A</option>
                </select> */}

                <select value= {price} onChange={handlePriceOrder} className={"select-filter-" + clase}>
                    <option value= '' disabled>Precios</option>
                    <option value= 'Menor'>Menor precio</option>
                    <option value= 'Mayor'>Mayor precio</option>
                </select>
        
                <PriceRange/>
                
            </div>
        </div>
    )
};




import { useDispatch, useSelector } from "react-redux";
import { cleanAllFilters, 
        changeNameOrder, 
    } from "../../redux/actions";
import './setFilters.css'

export const SetFilters = () => {  

    const dispatch = useDispatch();
    const nameOrder = useSelector(state => state.nameOrder);
    const useFilter = useSelector(state => state.useFilter);

    if(!nameOrder.length && !priceOrder.length && useFilter)  dispatch(changeUseFilter(false))
    
    const handleResetAll = () => {
        dispatch(cleanAllFilters());
    }

    const handleResetName = () => {
        if(nameOrder !== '') dispatch(changeNameOrder(''));
    };

    const handleResetPrice = () => {
        if(priceOrder !== '') dispatch(changepriceOrder(''));
    };

    return (
        <>
            <br />          
            <button className="butR" onClick={handleResetAll}>Reset</button>   
            {
                genresFilter.length !== 0 && <button className="butF" onClick= {handleResetGenres}>Genre: {genresFilter}</button>
                
            }
            {
                platformsFilter.length !== 0 && <button className="butF" onClick= {handleResetPlatforms}>Platforms: {platformsFilter}</button>
                
            }
            {           
                typeFilter.length !== 0  && <button className="butF" onClick={handleResetType}>Type: {typeFilter}</button>
                
            }
            {           
                nameOrder.length !== 0 && <button className="butF" onClick={handleResetName}>Name: {nameOrder}</button>
                
            }
            {           
                priceOrder.length !== 0 && <button className="butF" onClick={handleResetPrice}>Price: {priceOrder}</button>
            }
        </>
    )

};
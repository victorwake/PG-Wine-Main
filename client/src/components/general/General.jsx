import './general.css';
import { SearchBar } from '../searchBar/SearchBar';
import { NavBar } from '../navBar/NavBar';
import {useDispatch, useSelector} from 'react-redux';




export const General = () => {

    const dispatch = useDispatch();
    // const allVarietal = useSelector(state => state.varietal)

    // function handleClick(e){
    //     e.preventDefault();
    //     // dispatch(cleanAllFilters());
    //     }
        

    return (
        <div className='general'>
            <div className='general_nav'>
                <NavBar/>
            </div>
            <div className='general_data'>
                <h1>aca van las card</h1>
            </div>
        </div>

    )
}


import './general.css';
import { SearchBar } from '../searchBar/SearchBar';
import {useDispatch, useSelector} from 'react-redux';




export const General = () => {

    const dispatch = useDispatch();
    // const allVarietal = useSelector(state => state.varietal)

    function handleClick(e){
        e.preventDefault();
        // dispatch(cleanAllFilters());
        }
        

    return (
        <div className='general'>
            <div className='general_nav'>
                    <h1>Esta es la Nav</h1><div className="container_nav">
                <div className="filters">
                    <div className="dietsFilter">
                    <label>Varietal: </label>
                        <select>
                   {/* {allVarietal.map(d => (
                                 <option value={d.name}>{d.name}</option>
                            ))}  */}
                        </select>
                    </div>
                    <div>
                        <label>Tipo: </label> 
                        <select>
                        {/* {allTipes.map(d => (
                                 <option value={d.name}>{d.name}</option>
                            ))} */}
                        </select>
                    </div>
                    <div>
                        <label>Region: </label> 
                        <select>
                        {/* {allDiets.map(d => (
                                 <option value={d.name}>{d.name}</option>
                            ))} */}
                        </select>
                    </div>
                    <div>
                        <label>Bodega: </label> 
                        <select>
                        {/* {allDiets.map(d => (
                                 <option value={d.name}>{d.name}</option>
                            ))} */}
                        </select>
                    </div>

                    <div className="orderName">
                        <label>Ordenar por Nombre:  </label>
                        <select >
                            <option value= 'asc'>A-Z</option>
                            <option value= 'desc'>Z-A</option>
                        </select>
                    </div>
                    <div className="orderPrice">
                        <label> Precio: </label>
                        <select  >
                            <option value= 'asc'>Mayor Precio</option>
                            <option value= 'desc'>Menor Precio</option>
                        </select>
                    </div>
                    <button className="refreshButton" onClick={ e => {handleClick (e)}}>Clean filter</button>
                </div>
                <div className="serchBar">
                    <SearchBar/>
                </div>
            </div>

            </div>
            <div className='general_data'>
                <h1>aca van las card</h1>
            </div>
        </div>

    )
}


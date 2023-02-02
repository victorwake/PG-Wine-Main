import { SearchBar } from '../searchBar/SearchBar';
import './navBar.css';

export const NavBar = () => {

    function handleClick(e){
        e.preventDefault();
        // dispatch(cleanAllFilters());
        }

    return(
        <div className='general_nav'>
            <div className='menu_bar'>
                <a href='#' className='bt_menu'><span class='icon_list'/>Menu</a>
            </div>
                <div className='general_filter' >
                    <div className='filter'>
                        <label>Varietal: </label>
                        <select>
                            {/* {allVarietal.map(d => (
                                <option value={d.name}>{d.name}</option>
                            ))}  */}     
                         </select>
                    </div>
                    <div className='filter'>
                        <label>Tipo: </label> 
                        <select>
                            {/* {allTipes.map(d => (
                                    <option value={d.name}>{d.name}</option>
                                ))} */}
                        </select>
                    </div>
                    <div className='filter'>
                        <label>Region: </label> 
                        <select>
                        {/* {allDiets.map(d => (
                                <option value={d.name}>{d.name}</option>                                
                                ))} */}
                        </select>
                    </div>
                    <div className='filter'>
                        <label>Bodega: </label> 
                        <select>
                        {/* {allDiets.map(d => (
                                <option value={d.name}>{d.name}</option>
                            ))} */}
                        </select>
                    </div >
                    <div className="order">
                        <label>Ordenar por Nombre:  </label>
                        <select >
                            <option value= 'asc'>A-Z</option>
                            <option value= 'desc'>Z-A</option>
                        </select>
                    </div>
                    <div className="order">
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
    )
}
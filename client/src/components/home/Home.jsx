import { NavBar } from '../navBar/NavBar';
import './home.css';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getVarietal, getWines } from '../../redux/actions';
import Card from '../card/Card'
import Pagination from '../pagination/Pagination';


export const Home = () => {
    const dispatch = useDispatch() 
    const allWines = useSelector((state) => state.wines) //me lo trae del reducer
    const allVarietal = useSelector((state) => state.varietal)
//Paginado: un estado con la pag actual y un estado que me setee la pag actual    
    const[currentPage, setCurrentPage] = useState(1) //use State xq es un estado local. Es 1 xq siempre voy a arrancar en la 1er pag
    const[winesPerPage, /*setDogsPerPage*/] = useState(8)
    const [/*order*/, setOrder] = useState('')
    const [pagesNumber]=useState(22)
    const indexOfLastWines = currentPage * winesPerPage // 1 * 8 = 8   mas que un index se refiere a cantidad
    const indexOfFirstWines = indexOfLastWines - winesPerPage // 8 - 8 = 0
    const currentDWines = allWines.slice(indexOfFirstWines, indexOfLastWines) // divide un array y tomar una porcion dependiendo lo que estoy pasando por parametro el primero y el ultimo perro
    // pag 1 -----------0--------------8
    // pag 2 -----------9--------------17

    const pagination = (pageNumber) => { //esto va a ser en renderizado
      setCurrentPage(pageNumber)    // setear la pag en ese numero de pagina
    }

    function handleClick(e){
        e.preventDefault();
        // dispatch(cleanAllFilters());
        }
     useEffect(()=>{
       dispatch(getWines());
    //    dispatch(getVarietal())
     },[]);        

    return (
        <div className='home'>
            <div className='home_nav'>
                <NavBar/>
            </div>
            <div className='home_data'>
                {allWines.map(e => {
                    return(
                        <div className='cardgrid'>
                        <Card
                        
                                name={e.name}
                                varietal={e.varietal}
                                image= {e.image} 
                                winery={e.winery}
                                price= {e.price}
                            />
                        </div>)})}
            </div>
        </div>


       
    )
}
import './searchBar.css';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getWinesByName} from '../../redux/actions';


export const SearchBar = () =>  {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const wines = useSelector(state => state.wines)


  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    // console.log(name)
  }
 
  function handleSumit(e) {
    e.preventDefault();
    setName('');
    if(name){
      dispatch(getWinesByName(name))
    }else{
      setName('')
      alert('Debe ingresar un nombre de vino o bodega')
    }    
    // e.preventDefault();
    // if(!name){ alert('vino no encontrado')}
    // else{
    // try{
    //     dispatch(getWinesByName(name))
    // }catch(error){
    //     return error
    // }}
    // setName('')
  }
   
  useEffect(() => {
    dispatch(getWinesByName(name));
  }, [dispatch]);

    return (
    <div>
       <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" onChange={(e) => handleInputChange(e)}/>
        <button class="btn btn-search position-absolute" type="submit" onClick={(e) => handleSumit(e)}><i class="bi bi-search"></i></button>
      </form>
    </div>
  );

  
};
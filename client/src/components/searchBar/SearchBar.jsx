import './searchBar.css';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getWinesByName} from '../../redux/actions';
import { getWines } from '../../redux/actions';


export const SearchBar = () =>  {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const wines = useSelector(state => state.wines)


  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    // console.log(name)
  }
 
  const handleSumit = (e) => {
    e.preventDefault();
    setName('');
    if(name){
      dispatch(getWinesByName(name))
    }else{
      setName('')
      alert('Debe ingresar un nombre de vino o bodega')
    }
    // if(!name){ alert('Debe ingresar un nombre de vino o bodega')}
    // else{
    // try{
    //     dispatch(getWinesByName(name))
    // }catch(err){
    //     alert(err.msg);
    // }}

  }

  useEffect(() => {
    dispatch(getWinesByName(name));
  }, [dispatch]);

    return (
    <div>
     <form class="d-flex" role="search">
      <input
        id="search"
        className="form-control me-2" 
        aria-label="Search"
        type="search"
        placeholder="Busca por nombre..."
        onChange={(e) => handleInputChange(e)}
      />
      <button      
      className="btn btn-outline-success"
      type="submit"
      onClick={(e) => handleSumit(e)}
      >Buscar</button>
      </form>
    </div>
  );

  
};
import './searchBar.css';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getWinesByName} from '../../redux/actions';

export const SearchBar = () =>  {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name)
  }

  function handleSumit(e) {
    e.preventDefault();
    var search = document.getElementById('search').value;
    if(search.length === 0) {
      alert('Ingresa algunos caracteres para buscar');
      return;
    }   
    dispatch(getWinesByName(name)) 
    // dispatch(getWineType(type))
  }
   
  useEffect(() => {
    dispatch(getWinesByName(name));
  }, [dispatch, name]);
    return (
    <div>
      <input
        id="search"
        className="search-input" 
        type="text"
        placeholder="Busca un vino..."
        onChange={(e) => handleInputChange(e)} 
        // onChange={(e) => handleInputChangeType(e)}
      />
      <button      
      className="btn-search"
      type="submit"
      onClick={(e) => handleSumit(e)}
      >Buscar</button>
    </div>
  );
};
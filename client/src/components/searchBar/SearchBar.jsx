import './searchBar.css';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getWinesByName} from '../../redux/actions';


export const SearchBar = () =>  {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const wines = useSelector(state => state.winetype)


  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name)
  }
 
  function handleSumit(e) {
    e.preventDefault();
    if(!name){ alert('receta no encontrada')}
    else{
    try{
        dispatch(getWinesByName(name))
    }catch(error){
        return error
    }}
    setName('')
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
      />
      <button      
      className="btn-search"
      type="submit"
      onClick={(e) => handleSumit(e)}
      >Buscar</button>
    </div>
  );

  
};
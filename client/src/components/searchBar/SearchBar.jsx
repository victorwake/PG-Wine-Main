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
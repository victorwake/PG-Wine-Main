import './searchBar.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWinesByName, getWines } from '../../redux/actions';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [searchBy, setSearchBy] = useState('name'); // nombre de vino por defecto
  const wines = useSelector(state => state.wines);

  useEffect(() => {
    if (wines.length > 0) {
      setImage(wines[0].image);
      setPrice(wines[0].price);
    } else {
      setImage('');
      setPrice('');
    }
  }, [wines]);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSearchByChange(e) {
    setSearchBy(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (input) {
      dispatch(getWinesByName(input, searchBy));
    } else {
      alert('Debe ingresar un nombre de vino o bodega');
    }
  }

  function handleFilterClear() {
    setInput('');
    setSearchBy('name');
    dispatch(getWines());
  }

  return (
    <div className="align-items-center">
      {/* {image && <img src={image} alt="Vino" width="50" height="50" className="me-2" />} */}
      {/* {price && <p className="me-2">${price}</p>} */}
      <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
        <input
          className="form-control"
          type="search"
          placeholder="Buscar"
          aria-label="Buscar"
          value={input}
          onChange={handleInputChange}
          list="datalistOptions"
        />
        <select className="form-select" value={searchBy} onChange={handleSearchByChange}>
          <option value="name">Nombre de vino</option>
          <option value="winery">Bodega</option>
        </select>
        <button className="btn-outline-success" type="submit">
          <i className="bi bi-search"></i>
        </button>
        <button className="btn btn-secondary" type="button" onClick={handleFilterClear}>
          Limpiar filtro
        </button>
        <datalist id="datalistOptions">
          {wines.map((w) => (
            <option key={w.id} value={w[searchBy]}>
              {w[searchBy]}
            </option>
          ))}
        </datalist>
      </form>
    </div>
  );
};
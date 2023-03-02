import './searchBar.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWinesByName, getWines } from '../../redux/actions'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const wines = useSelector(state => state.wines)

  function handleInputChange(e) {
    setInput(e.target.value)
    const filteredWines = wines.filter(
      wine =>
        wine.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        wine.winery.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    dispatch({ type: 'GET_WINES_SUCCESS', payload: filteredWines })
  }

  function handleFilterClear() {
    setInput('')
    dispatch(getWines())
  }

  return (
    <div className="align-items-center">
      <form className="d-flex" role="search">
        <input
          className="form-control"
          type="search"
          placeholder="Buscar"
          aria-label="Buscar"
          value={input}
          onChange={handleInputChange}
          list="datalistOptions"
        />
        {/* <button className="btn btn-secondary" type="button" onClick={handleFilterClear}>
          Limpiar filtro
        </button> */}
        <datalist id="datalistOptions">
          {wines.map(w => (
            <option key={w.id} value={w.name}>
              {w.name}
            </option>
          ))}
        </datalist>
      </form>
    </div>
  )
}

import './searchBar.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWinesByName } from '../../redux/actions'
import { Link } from 'react-router-dom'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const wines = useSelector(state => state.wines)

  function handleInputChange(e) {
    e.preventDefault()
    setInput(e.target.value)
    // console.log(name)
  }

  function handleSumit(e) {
    e.preventDefault()
    setInput('')
    if (input) {
      dispatch(getWinesByName(input))
    } else {
      setInput('')
      alert('Debe ingresar un nombre de vino o bodega')
    }
  }

  // useEffect(() => {
  //   dispatch(getWinesByName(input));
  // }, [dispatch]);

  return (
    <div>
      {/* <label for="exampleDataList" class="form-label">Datalist example</label> */}
      <input
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
      <datalist id="datalistOptions">
        {wines.map(w => (
          <Link to="dietal/">
            <option key={w.id} value={w.name}>
              {w.name}
            </option>
          </Link>
        ))}
        {/* <option value="San Francisco"/>
  <option value="New York"/>
  <option value="Seattle"/>
  <option value="Los Angeles"/>
  <option value="Chicago"/> */}
      </datalist>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" onChange={(e) => handleInputChange(e)}/>
        <button class="btn btn-outline-success " type="submit" onClick={(e) => handleSumit(e)}><i class="bi bi-search"></i></button>
      </form> */}
    </div>
  )
}

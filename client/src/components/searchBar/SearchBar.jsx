import './searchBar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWineName, getWinery } from '../../redux/actions';


export const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput]=useState('')



function handleImputChange(e){
    e.preventDefault()
    setInput(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    if(!input){ alert('No encontramos nada con ese Nombre')}
    else{
    try{
        if (input){dispatch(getWinery(input))}
        if (input){dispatch(getWineName(input))}
    }catch(error){
        return error
    }}
    setInput('')
}

    return (
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>handleImputChange(e)}/>
            <button class="btn btn-outline-success" type="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
        </form>
    )
}
import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { getWineName, getWinery } from "../../redux/actions";
import './searchBar.css';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput]=useState('')

function handleImputChange(e){
    e.preventDefault()
    setInput(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    try{
        dispatch(getWineName(input))
    }catch(error){
        return error
    }}
    setInput('')

    return (
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>handleImputChange(e)}/>
            <button class="btn btn-outline-success" type="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
        </form>
    )
}
import './filter.css';
import { useState } from 'react';

export const Filter = () => {
    const [input, setInput]=useState('')
    
    function handleImputChange(e){
        e.preventDefault()
        setInput(e.target.value)
    }

    return (
        <div>
            <label for="customRange2" class="form-label">Precios</label>
            <input type="range" class="form-range" min="0" max="900000" id="customRange2" onChange={(e)=>handleImputChange(e)}></input>
        </div>
    )
}
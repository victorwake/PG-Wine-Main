import './priceRange.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPriceRange } from '../../redux/actions'




export const PriceRange = () =>{
    const dispatch = useDispatch()
    // const [value, setValue]=useState('')
    const [range, setRange] = useState('10000')
  

    var min = 0
    var max = 10000
    if (range === "10000"){
        max=10000} 
    if (range === "30000"){
        min=10000 
        max=30000}
    if (range === "50000"){
        min = 30000
        max = 50000}
    if (range === "100000"){
        min = 50000
        max = 100000}
    if (range === "all"){
        min = 100000
        max = 1000000}
        

    function handleRange(e){
        e.preventDefault()
        setRange(e.target.value)
    }
    // function handleImputChange(e){
    //     e.preventDefault()
    //     setValue(e.target.value)
    // }

    function handleClick(e){
        dispatch(getPriceRange(min,max))
    }

    return (
        <div>
            <label for="customRange2" class="form-label">Rangos: </label>
            <select onChange={(e)=> handleRange(e)}>
                <option value="10000">$0 - $10.000</option>
                <option value="30000">$10.000 - $30.000</option>
                <option value="50000">$30.000 - $50.000</option>
                <option value="100000">$50.000 - $100.000</option>
                <option value="all">Mas de $100.000</option>
            </select>
            {/* <input type="range" class="form-range" min ={min}  max={max} id="customRange2" onChange={(e)=>handleImputChange(e)}></input>
            <h5>${min} - ${value}</h5>  */}
            <button onClick={(e)=> handleClick(e)}>Buscar</button>
        </div>
    )

}
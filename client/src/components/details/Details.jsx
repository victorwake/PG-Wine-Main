import './details.css'
import { getWineDetail, addToCart } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { NavBar } from '../navBar/NavBar'



export const Details = () => {

    const dispatch = useDispatch();
    const wineDetail = useSelector((state) => state.wineDetail);
    // const clase = useSelector((state) => state.clase);
    const {id} = useParams();

    const wineColorType = wineDetail.color_type;
    let colorType = ""
    let colorName = ""
    
    const handleClick = (id) => {
        // dispatch(addToCart(wineDetail.id))
        console.log(wineDetail.id)
    }
    
    let fauvorite = true
    const handleFav= (e)=>{
       (fauvorite === true) ? fauvorite = false : fauvorite= true 
        console.log(fauvorite)
    }

    
if(!!wineColorType){
    colorType = wineColorType.toLowerCase()
    colorName = wineColorType.toUpperCase()}

    useEffect(() => {
        dispatch(getWineDetail(id))
    }, [dispatch, id])

    return (
        <div>
            <NavBar/>
        <div className='containerData'>
            <div>
               <Link to={`/vinos/${wineColorType}`}> <button className="buttonBack" ><i class="bi bi-arrow-return-left"></i>  Volver </button></Link>          
            </div>
            <div className='img'>
                <img className='imagen' src={wineDetail.image} alt={wineDetail.name} />
            </div>
                <div className={"name-" + colorType}>
                    <h2>{colorName}S - {wineDetail.name}</h2>
                </div>
            <div className='tabla'>
               <table class="table">
                    <tbody>
                        <tr>
                        <th className={"th-"+ colorType}>Variedad</th>
                        <td>{wineDetail.varietal}</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Bodega</th>
                        <td>{wineDetail.winery}</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Ubicacion</th>
                        <td>{wineDetail.province}</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Alcohol</th>
                        <td>{wineDetail.alcohol} %</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Año</th>
                        <td>{wineDetail.year}</td>
                        </tr>
                        <tr>
                        <th className={'th-'+ colorType}>Nota de cata</th>
                        <td>{wineDetail.description}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>
                <h3 className='price'>$ {wineDetail.price}</h3>
                <button className='addToCart' onClick={() => handleClick(wineDetail.id)}><i class="bi bi-cart3"></i> Agregar</button>
                <button className='heart' onClick={(e)=>handleFav(e)}>{!fauvorite ? <i class="bi bi-heart"></i> : <i class="bi bi-heart-fill"></i>}</button>
        </div>
        </div>
    );

}
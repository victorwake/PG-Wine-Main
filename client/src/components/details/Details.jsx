import './details.css'
import { getWineDetail, addToCart } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';





export const Details = () => {

    const dispatch = useDispatch();
    const wineDetail = useSelector((state) => state.wineDetail);
    // const clase = useSelector((state) => state.clase);
    const {id} = useParams();


    const handleClick = (id) => {
        dispatch(addToCart(wineDetail.id))
        console.log(wineDetail.id)
    }

    const wineColorType = wineDetail.color_type;
    
   


    useEffect(() => {
        dispatch(getWineDetail(id))
    }, [dispatch, id])

    return (
        <div >
            <div>
               <Link to={`/vinos/${wineColorType}`}> <button className="buttonBack" ><i class="bi bi-arrow-return-left"></i>  Volver </button></Link>          
            </div>
            <div className='img'>
                <img className='imagen' src={wineDetail.image} alt={wineDetail.name} />
            </div>
                <div className='name'>
                    <h2>{wineColorType}s - {wineDetail.name}</h2>
                </div>
            <div className='tabla'>
               <table class="table">
                    <tbody>
                        <tr>
                        <th className='th'>Varierdad</th>
                        <td>{wineDetail.varietal}</td>
                        </tr>
                        <tr>
                        <th className='th'>Bodega</th>
                        <td>{wineDetail.winery}</td>
                        </tr>
                        <tr>
                        <th className='th'>Ubicacion</th>
                        <td>{wineDetail.province}</td>
                        </tr>
                        <tr>
                        <th className='th'>Alcohol</th>
                        <td>{wineDetail.alcohol} %</td>
                        </tr>
                        <tr>
                        <th className='th'>Año</th>
                        <td>{wineDetail.year}</td>
                        </tr>
                        <tr>
                        <th className='th'>Nota de cata</th>
                        <td>{wineDetail.description}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>
                <h3 className='price'>$ {wineDetail.price}</h3>
                <button className='btn' onClick={() => handleClick(wineDetail.id)}><i class="bi bi-cart3"></i> Agregar</button>
        </div>
    );

}



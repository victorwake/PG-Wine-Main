import './details.css'
import { getWineDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actions';
import { NavBar } from '../navBar/NavBar';


export const Details = () => {

    const dispatch = useDispatch();
    const wineDetail = useSelector((state) => state.wineDetail);
    const clase = useSelector((state) => state.clase);
    const {id} = useParams();

    console.log(id)

    useEffect(() => {
        dispatch(getWineDetail(id))
    }, [dispatch, id])

    return (
        
        <div className={'details-container-' + clase}>
            <NavBar/>
                    
       
            <div className={'details-img-' + clase}>
                <img className='imagen' src={wineDetail.image} alt={wineDetail.name} />
            </div>
            <div className={'details-info-' + clase}>
                <h1 className='nombre'>{wineDetail.name}</h1>
                <h2 className='variedad'><b>&nbsp;</b> {wineDetail.varietal}</h2>
                <p className='tipo'><b>&nbsp;</b> {wineDetail.color_type}</p>
                <p  className='bodega'><b>&nbsp;</b> {wineDetail.winery}</p>
                <p className='origen'><b>&nbsp;</b> {wineDetail.province}, {wineDetail.region}</p>
                <p className='alcohol'><b>Alcohol:&nbsp;</b> {wineDetail.alcohol}%</p>
                <p className='year'><b>Año:&nbsp;</b> {wineDetail.year}</p>
                <p  className='price'><b>Precio:&nbsp;</b> {wineDetail.price}</p>
                <p className='cata'><b>&nbsp;</b></p>
                <p className='descripcion'>{wineDetail.description}</p>
                <div>
                            <button onClick={() => dispatch(addToCart(id))}>Agregar al Carrito</button>
                            </div>
            </div>
        </div>
    );

}
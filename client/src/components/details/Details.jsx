import './details.css'
import { getWineDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";



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
       
            <div className={'details-img-' + clase}>
                <img className='imagen' src={wineDetail.image} alt={wineDetail.name} />
            </div>
            <div className={'details-info-' + clase}>
                <h1 className='nombre'><b>Vino {wineDetail.colour_type}</b> {wineDetail.name}</h1>
                <h2 className='variedad'><b>Variedad:</b> {wineDetail.varietal}</h2>
                <p className='tipo'><b>Tipo:</b> {wineDetail.colour_type}</p>
                <p  className='bodega'><b>Bodega:</b> {wineDetail.winery}</p>
                <p className='origen'><b>UBICACIÓN / ORIGEN</b> {wineDetail.province}, {wineDetail.region}</p>
                {/* <p><b>Url:</b> {wineDetail.url}</p> */}
                <p className='alcohol'><b>Alcohol:</b> {wineDetail.alcohol}%</p>
                <p className='year'><b>Año:</b> {wineDetail.year}</p>
                <p  className='price'><b>Precio:</b> {wineDetail.price}</p>
                <p className='cata'><b>Nota de cata:</b></p>
                <p className='descripcion'>{wineDetail.description}</p>
            </div>
        </div>
    );

}

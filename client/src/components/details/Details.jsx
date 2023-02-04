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
    

    useEffect(() => {
        dispatch(getWineDetail(id))
    }, [dispatch, id])

    return (
        <div className={'details-container-' + clase}>
            <div className={'details-img-' + clase}>
                <img src={wineDetail.image} alt={wineDetail.name} />
            </div>
            <div className={'details-info-' + clase}>
                <h1><b>Vino {wineDetail.colour_type}</b> {wineDetail.name}</h1>
                <h2><b>Variedad:</b> {wineDetail.varietal}</h2>
                <p><b>Tipo:</b> {wineDetail.colour_type}</p>
                <p><b>Bodega:</b> {wineDetail.winery}</p>
                <p><b>UBICACIÓN / ORIGEN</b> {wineDetail.province}, {wineDetail.region}</p>
                <p><b>Url:</b> {wineDetail.url}</p>
                <p><b>Alcohol:</b> {wineDetail.alcohol}%</p>
                <p><b>Año:</b> {wineDetail.year}</p>
                <p><b>Precio:</b> {wineDetail.price}</p>
                <p><b>Nota de cata:</b></p>
                <p>{wineDetail.description}</p>
            </div>
        </div>
    );

}

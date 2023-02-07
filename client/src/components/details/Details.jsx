import './details.css'
import { getWineDetail, cleanWineDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';



export const Details = () => {

    const dispatch = useDispatch();

    const wineDetail = useSelector((state) => state.wineDetail);
    const clase= useSelector(store => store.theme);
    const {id} = useParams();
    

    useEffect(() => {
        dispatch(getWineDetail(id))
        return () => {
            dispatch(cleanWineDetail({}))
        }
    }, [dispatch, id])

    return (
        <div className={'conteiner-card-details-found-' + clase}>
            
            <div className={'conteiner-card-details-' + clase}>
            <Link style={{color: 'inherit',  textDecoration: 'inherit'}} to="/home">
                <button className={'button-back-' + clase}>Back</button>
            </Link>

            <Link to = {'/create/' + id}>
                <button 
                    className={'button-back-' + clase}
                    >Update
                </button>
            </Link>

            <div className='card-details-'>
            

            <div className={'details-img-' + clase}>
                <img height="600px" className={'image-details-' + clase} src={wineDetail.image} alt={wineDetail.name} />
            </div>
            <div className={'details-info-' + clase}>
                <h1><b>Vino {wineDetail.colour_type}</b> {wineDetail.name}</h1>
                <h2><b>Variedad:</b> {wineDetail.varietal}</h2>
                <p><b>Tipo:</b> {wineDetail.color_type}</p>
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
            </div>
        </div>
    );

}


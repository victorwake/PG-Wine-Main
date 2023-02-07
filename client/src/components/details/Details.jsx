// import './details.css'
// import { getWineDetail, cleanWineDetail } from '../../redux/actions'
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';



// export const Details = () => {

//     const dispatch = useDispatch();

//     const wineDetail = useSelector((state) => state.wineDetail);
//     const clase= useSelector(store => store.theme);
//     const {id} = useParams();
    

//     useEffect(() => {
//         dispatch(getWineDetail(id))
//         return () => {
//             dispatch(cleanWineDetail({}))
//         }
//     }, [dispatch, id])

//     return (
//         <fragment className={'conteiner-card-details-found-' + clase}>
            
//             <div className={'conteiner-card-details-' + clase}>
//             <Link style={{color: 'inherit',  textDecoration: 'inherit'}} to="/home">
//                 <button className={'button-back-' + clase}>Volver</button>
//             </Link>
//             <div className='card-details-'>
            

//             <fragment className={'details-img-' + clase}>
//                 <img height="600px" className={'image-details-' + clase} src={wineDetail.image} alt={wineDetail.name} />
//             </fragment>
//             <div className={'details-info-' + clase}>
//                 <h1><b>Vino {wineDetail.colour_type}</b> {wineDetail.name}</h1>
//                 <h2><b>Variedad:</b> {wineDetail.varietal}</h2>
//                 <p><b>Tipo:</b> {wineDetail.color_type}</p>
//                 <p><b>Bodega:</b> {wineDetail.winery}</p>
//                 <p><b>UBICACIÓN / ORIGEN</b> {wineDetail.province}, {wineDetail.region}</p>
//                 <p><b>Url:</b> {wineDetail.url}</p>
//                 <p><b>Alcohol:</b> {wineDetail.alcohol}%</p>
//                 <p><b>Año:</b> {wineDetail.year}</p>
//                 <p><b>Precio:</b> {wineDetail.price}</p>
//                 <p><b>Nota de cata:</b></p>
//                 <p>{wineDetail.description}</p>
//             </div>
//             </div>
//             </div>
//         </fragment>
//     );

// }


import './details.css'
import { getWineDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';



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
            <div><Link to='/home'><button className="buttonBack" >Volver a inicio</button></Link></div>
       
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
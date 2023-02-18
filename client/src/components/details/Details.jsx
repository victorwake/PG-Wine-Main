import './details.css'
import { getWineDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/reducer/cartSlice';




export const Details = () => {

    const dispatch = useDispatch();
    const wineDetail = useSelector((state) => state.wineDetail);
    const clase = useSelector((state) => state.clase);
    const {id} = useParams();
    const quantity = 1;


    const addCart = (id) => {
        dispatch(addToCart(id, quantity, wineDetail.price))
    }


    const wineColorType = wineDetail.color_type;

    let colorType = "";

    if(wineColorType=== "Tinto") {
        colorType = "tinto"
    } else if (wineColorType === "Blanco") {
        colorType = "blanco"
    } else if (wineColorType === "Rosado") {
        colorType = "rosado"
    } else if (wineColorType === "Espumante") {
        colorType = "espumante"
    } else {
        colorType = "otro"
    }



    

    useEffect(() => {
        dispatch(getWineDetail(id))
    }, [dispatch, id])

    return (
        
        <div className={'details-container-' + clase}>
            <div>
                {
                wineColorType === 'Tinto'? <Link to='/vinos/tinto'><button className="buttonBack" >Volver a tintos</button></Link> 
                : wineColorType === 'Blanco'? <Link to='/vinos/blanco'><button className="buttonBack" >Volver a blancos</button></Link>
                : wineColorType === 'Rosado'? <Link to='/vinos/rosado'><button className="buttonBack" >Volver a rosados</button></Link>
                : wineColorType === 'Espumante'? <Link to='/vinos/espumante'><button className="buttonBack" >Volver a espumantes</button></Link>
                : <Link to='/home'><button className="buttonBack" >Volver a inicio</button></Link>
                }
            </div>
            <Link to = {'/create/' + id}>
                <button 
                    className={'button-back-' + clase}
                    >Update
                </button>
            </Link>
            <div className={'details-img-' + clase}>
                <img className='imagen' src={wineDetail.image} alt={wineDetail.name} />
            </div>
            <div className={'details-info-' + clase}>
                <h1 className={'nombre-' + colorType}><b>Vino {wineDetail.color_type}</b> {wineDetail.name}</h1>
                <h2 className='variedad'><b>Variedad: </b> {wineDetail.varietal}</h2>
                <p className='tipo'><b>Tipo: </b> {wineDetail.color_type}</p>
                <p  className='bodega'><b>Bodega: </b> {wineDetail.winery}</p>
                <p className='origen'><b>UBICACIÓN / ORIGEN </b> {wineDetail.province}, {wineDetail.region}</p>
                {/* <p><b>Url:</b> {wineDetail.url}</p> */}
                <p className='alcohol'><b>Alcohol: </b> {wineDetail.alcohol}%</p>
                <p className='year'><b>Año: </b> {wineDetail.year}</p>
                <p  className='price'><b>Precio: </b> {wineDetail.price}</p>
                <p className='cata'><b>Nota de cata: </b></p>
                <p className='descripcion'>{wineDetail.description}</p>
            </div>
            <div className={"button-card-" + clase}><button onClick={() => addCart(wineDetail.id, quantity, wineDetail.price )}>Agregar al carro</button></div>
        </div>
    );

}



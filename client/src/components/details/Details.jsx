import './details.css'
import { getWineDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
<<<<<<< HEAD
=======
import { useParams } from "react-router-dom";
>>>>>>> 8dee92399bd045ddf9b0519a318e17a553e887e5



export const Details = () => {

    const dispatch = useDispatch();

<<<<<<< HEAD
    const detail = useSelector((state) => state.detail);
    const clase = useSelector((state) => state.clase);
    const id = "4a301fc4-4a6c-4cb5-ac0c-d9b6826e6aa1"
=======
    const wineDetail = useSelector((state) => state.wineDetail);
    const clase = useSelector((state) => state.clase);
    const {id} = useParams();
    
>>>>>>> 8dee92399bd045ddf9b0519a318e17a553e887e5

    useEffect(() => {
        dispatch(getWineDetail(id))
    }, [dispatch, id])

    return (
<<<<<<< HEAD
      <body>
<div className={'details-container-' + clase}>
            <div className={'details-img-' + clase}>
                <img src={detail.image} alt={detail.name} />
            </div>
            <div className={'details-info-' + clase}>
                <h1>{detail.name}</h1>
                <h2>{detail.type}</h2>
                <p>{detail.description}</p>
                <p>{detail.price}</p>
            </div>
        </div>


      </body>
    );      
}
=======
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


>>>>>>> 8dee92399bd045ddf9b0519a318e17a553e887e5

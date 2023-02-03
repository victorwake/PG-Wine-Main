import './details.css'
import { getDetails } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



export const Details = () => {

    const dispatch = useDispatch();

    const detail = useSelector((state) => state.detail);
    const clase = useSelector((state) => state.clase);
    const id = "4a301fc4-4a6c-4cb5-ac0c-d9b6826e6aa1"

    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch, id])

    return (
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
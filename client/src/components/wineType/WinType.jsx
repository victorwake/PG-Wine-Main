import './winType.css';
import { getWineType } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const WinType = () => {
    const dispatch = useDispatch();

    const clase = useSelector((state) => state.clase);
    
    
    return (
        <div className={'winType-container-' + clase}>
            <section className={'winType-red-' + clase}>

            </section>

            <section className={'winType-white-' + clase}>

            </section>

            <section className={'winType-rose-' + clase}>

            </section>

            <section className={'winType-sparkling-' + clase}>

            </section>
            
        </div>
    );
}

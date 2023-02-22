import './experiences.css';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { getExp} from '../../../redux/actions';
import { NavBarExpType } from '../navBarExpType/NavBarExpType';
import { NavBar } from '../../navBar/NavBar';

export const Experiences = () => {
    const dispatch = useDispatch();
    const allExp = useSelector(state=> state.wines)
    const clase= useSelector(store => store.theme);

    useEffect(()=>{
        if(!allExp.length)dispatch(getExp())
    },[]);  


    return (
    <div className={"home-container-" + clase}>
        <div className='home_nav'>
                <NavBar/>
            </div>
           <NavBarExpType />
    </div>
    )
}
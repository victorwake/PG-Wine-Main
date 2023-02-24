import './experiences.css';
import { useEffect, Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { getExp} from '../../../redux/actions';
import { NavBarExpType } from '../navBarExpType/NavBarExpType';
import { NavBar } from '../../navBar/NavBar';
import {ExpCard} from '../card/ExpCard'

export const Experiences = () => {
    const dispatch = useDispatch();
    const allExp = useSelector(state=> state.experiences)
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
           <div  className={"card-container-home-" + clase} >
            
            {allExp?.map((e => (
                <Fragment key={e.id}>
                        <Link to={'/expDetails/' + e.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <ExpCard
                            name={e.name}
                            kindOfExp={e.kindOfExp}
                            image= {e.image} 
                            price= {e.price}
                            />
                        </Link>
                    </Fragment>
            )))}  
        </div>
    </div>
    )
}
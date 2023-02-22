
import {NavAdmin} from '../navAdmin/NavAdmin'
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { getUsers} from '../../redux/actions';
import { Link } from 'react-router-dom';


export const Users = () =>  {
    const users = useSelector (state => state.users)
    const dispatch = useDispatch()



    useEffect(()=>{
        if(!users.length)dispatch(getUsers())
    },[]);  

    return(
        <div>
        <NavAdmin/>
            
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Estado</th>
                <th scope="col">Rol</th>
                <th scope="col">Suspender</th>
                <th scope="col">Detalle</th>
                </tr>
            </thead>
            <tbody>
                  {users?.map((u=> (
                    <Fragment key={u.id}>
                          <tr>
                            <th scope="row">{u.idUser}</th>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.email} </td>
                            <td>{u.status}</td>
                            <td>{u.rol}</td>
                            <td><button><i class="bi bi-slash-square"></i></button></td>
                            <Link to= {'/admin/user/' + u.idUser}>
                                <td><button><i class="bi bi-pencil-square"></i></button></td>
                            </Link>
                            </tr>
                    </Fragment>
                )))}  
             </tbody>
      
        </table>

    </div>
    )
}
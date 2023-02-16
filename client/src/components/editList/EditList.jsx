import './editList.css';
import {NavAdmin} from '../navAdmin/NavAdmin'
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { getWines } from '../../redux/actions';
import { Link } from 'react-router-dom';


export const EditList = () =>  {
    const products = useSelector (state => state.wines)
    const dispatch = useDispatch()



    useEffect(()=>{
        if(!products.length)dispatch(getWines())
    },[]);  

    return(
        <div>
        <NavAdmin/>
            
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Bodega</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col">Editar</th>
                <th scope="col">Suspender</th>
                </tr>
            </thead>
            <tbody>
                  {products?.map((w => (
                    <Fragment key={w.id}>
                          <tr>
                            <th scope="row">{w.id}</th>
                            <td>{w.winery}</td>
                            <td>{w.name}</td>
                            <td>$ {w.price} </td>
                            <td>{w.stock}</td>
                            <Link to= {'/admin/create/' + w.id}>
                                <td><button><i class="bi bi-pencil-square"></i></button></td>
                            </Link>
                            <td><button><i class="bi bi-slash-square"></i></button></td>
                            </tr>
                    </Fragment>
                )))}  
             </tbody>
      
        </table>

    </div>
    )
}

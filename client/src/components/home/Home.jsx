import { NavBar } from '../navBar/NavBar';
import './home.css';
import { Fragment, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getWines, addToCart } from '../../redux/actions';
import { Card }from '../card/Card'
import { NavBarWineType } from '../navBarWineType/NavBarWineType';
import { Link } from 'react-router-dom';
import { Sale } from '../sale/Sale'
import _ from 'lodash';



export const Home = () => {

    const dispatch = useDispatch();
    const allWines = useSelector(state=> state.wines)
    const clase= useSelector(store => store.theme);
    const alertVisible = useSelector(state => state.alertVisible);
    const cart = useSelector(state => state.cart)

    const shuffledWines = _.shuffle(allWines);
    const tenRandomWines = shuffledWines.slice(0, 8);
    const discountedWines = tenRandomWines.map((w) => ({
        ...w,
        price: w.price * 0.9,
    }));
    
    //Lo usariamos cuando tengamos los filtros, se cambiaria el allWines.slide por este

    useEffect(()=>{
        if(!allWines.length)dispatch(getWines())
    },[]);     
    
    document.addEventListener('DOMContentLoaded', function() {
        var openCartModal = document.querySelector('#openCartModal');
        var cartModal = document.querySelector('#cartModal');
        
        openCartModal.addEventListener('click', function() {
          cartModal.classList.add('show');
          cartModal.style.display = 'block';
          document.body.classList.add('modal-open');
        });
      });
      function agregarCantidad(index, cantidad) {
        const newCart = [...cart];
        newCart[index].quantity += cantidad;
        setCart(newCart);
      }

    return (
        <div className={"home-container-" + clase}>
            <div className='home_nav'>
                <NavBar/>
             
                <div class="container">
          


<div class="modal" id="openCartModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title" id="exampleModalLabel">
          Tu carrito de compras
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
  <table class="table table-image">
    <thead>
      <tr>
        <th scope="col">Imagen</th>
        <th scope="col">Nombre</th>
        <th scope="col">Variedad</th>
        <th scope="col">Bodega</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      {cart?.map((item) => (
        <tr>
          <td><img src={item.image} class="img-fluid img-thumbnail" alt="Vino"/></td>
          <td>{item.name}</td>
          <td>{item.varietal}</td>
          <td>{item.winery}</td>
          <td>{item.price}</td>
          <td>{item.quantity}
          
            <button onClick={() => agregarCantidad(item, +1)}>+</button>
            {item.quantity}
            <button onClick={() => agregarCantidad(item, -1)}>-</button>
          </td>
          <td>{item.price * item.quantity}</td>
         
        </tr>
      ))}
      <tr>
        
      </tr>
    </tbody>
  </table>
</div>
        <div class="d-flex justify-content-end">
          {/* <h5>Total: <span class="price text-success">$89</span></h5> */}
        </div>
      </div>
      <div class="modal-footer border-top-0 d-flex justify-content-between">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"/>Cerrar<button/>
            </div>
            </div>
            </div>
        </div>

        </div>
            <div class="alert alert-primary hide" container position-sticky top-0 role="alert">
            Producto añadido al carrito!
            
            </div>
            {alertVisible && <div className="alert">El vino ha sido agregado al carrito</div>}
            <NavBarWineType />
   
           
            <h2 className={"sale-type-h2-" + clase}>Ofertas al 10%</h2>
            <div  className={"card-container-home-" + clase} >
                {discountedWines?.map((w => (
                        <Fragment key={w.id}>
                            <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <Card
                                name={w.name}
                                varietal={w.varietal}
                                image= {w.image} 
                                winery={w.winery}
                                price= {w.price}
                                />
                            </Link>
                            <div>
                            <button onClick={() => dispatch(addToCart(w.id))}>Agregar al Carrito</button>
                            </div>
                                
                        </Fragment>
                )))}  
            </div>
        </div>

   

    )
}
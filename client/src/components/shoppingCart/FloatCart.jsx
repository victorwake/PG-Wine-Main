import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { removeFromCart, addToCart } from "../../redux/actions";
import { Fragment, useState, useEffect } from 'react';
const FloatCart = () => {
document.addEventListener('DOMContentLoaded', function() {
    var openCartModal = document.querySelector('#openCartModal');
    var cartModal = document.querySelector('#cartModal');

    openCartModal.addEventListener('click', function() {
      cartModal.classList.add('show');
      cartModal.style.display = 'block';
      document.body.classList.add('modal-open');
    });
  });
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
return(

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
        {/* <th scope="col">Variedad</th> */}
        <th scope="col">Bodega</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Total</th>
        <th scope='col'>Borrar Item</th>
        
      </tr>
    </thead>
    <tbody>

      {cart?.map((item) => (
        <tr>
          <td><img src={item.image} class="img-fluid img-thumbnail" alt="Vino"/></td>
          <td>{item.name}</td>
          <td>{item.varietal}</td>
          {/* <td>{item.winery}</td> */}
          <td>${item.price}</td>
          <td>
            <input type="number" id="id" name="name"
            min="1" max="10"/>
          </td>
          <td>{item.price * item.quantity}</td> 
          <button onClick={() => dispatch(removeFromCart(item.id)) }>X</button>
|         
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
            </div>)
 }
 export default FloatCart;
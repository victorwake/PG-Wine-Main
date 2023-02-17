import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { removeFromCart, addToCart,updateCartItem } from "../../redux/actions";
import { Fragment, useState, useEffect } from 'react';
import './FloatCart.css'

export const FloatCart = ({ image, name, color_type, price, id }) => {//se lo paso por props
  const cart = useSelector(state => state.cart)
const clase = useSelector(store => store.theme);
const [quantity, setQuantity] = useState(1);
const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);


    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleAddToCart = () => {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            const updatedQuantity = existingItem.quantity + quantity;
            const updatedTotalPrice = existingItem.price * updatedQuantity;
            dispatch(updateCartItem(id, updatedQuantity, updatedTotalPrice));
        } else {
            const totalPrice = price * quantity;
            dispatch(addToCart(id, quantity, totalPrice));
        }
    }
    const dispatch = useDispatch();
    document.addEventListener('DOMContentLoaded', function() {
    var openCartModal = document.querySelector('#openCartModal');
    var cartModal = document.querySelector('#cartModal');
    
    openCartModal.addEventListener('click', function() {
      cartModal.classList.add('show');
      cartModal.style.display = 'block';
      document.body.classList.add('modal-open');
    });
  });


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
        {/* <th scope="col">Bodega</th> */}
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
          {/* <td>{item.varietal}</td> */}
          {/* <td>{item.winery}</td> */}
          <td>${item.price}</td>
          
          <td>     
            <input
                className="myinput"
                type="number"
                id={`quantity-${item.id}`}
                name={`quantity-${item.id}`}
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item.id)}
             /></td>                   
         <td>   <h4 className="price-card-">{item.price * quantity} $</h4></td>
         <td>  <button className="Borrar" onClick={() => dispatch(removeFromCart(item.id)) }>X</button></td>
        {/* <td>  <button onClick={handleAddToCart}>Agregar al Carrito</button></td> */}
               
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
        <div class="modal-footer border-top-0 d-flex justify-content-between">
      <Link to={'/carrito'}>
          <button  type="button">Ir al carrito</button>
      </Link>
      <Link to={'/Home'}>
          <button  type="button">Ir a Pagar</button>
      </Link>
            </div>
      </div>
      <div class="modal-footer border-top-0 d-flex justify-content-between">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"/>Cerrar<button/>
            </div>
            </div>
            </div>)
 }
 
 export default FloatCart;
import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { removeFromCart, addToCart,updateCartItem } from "../../redux/actions";
import { Fragment, useState, useEffect } from 'react';
import './FloatCart.css'

export const FloatCart = ({ image, name, price, id }) => {//se lo paso por props
  const cart = useSelector(state => state.cart)
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  
  useEffect(() => {
    const quantitiesFromLocalStorage = JSON.parse(localStorage.getItem('quantities')) || {};
    setQuantities(quantitiesFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('quantities', JSON.stringify(quantities));
  }, [quantities]);

  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
    setQuantities({...quantities, [itemId]: newQuantity});
    dispatch(updateCartItem(itemId, newQuantity));
  }

  const total = cart.reduce((acc, item) => {
    const quantity = quantities[item.id] || item.quantity;
    return acc + (item.price * quantity);
  }, 0);
  
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
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Total</th>
        <th scope='col'>Borrar Item</th>
      </tr>
    </thead>
    <tbody>
      {cart?.map((item) => (
        <tr key= {item.id}>
          <td><img src={item.image} class="img-fluid img-thumbnail" alt="Vino"/></td>
          <td>{item.name}</td>
          <td>$ {item.price}</td>
          <td>     
            <input
                className="myinput"
                type="number"
                id={`quantity-${item.id}`}
                name={`quantity-${item.id}`}
                min="1"
                value={quantities[item.id] || item.quantity}
                onChange={(e) => handleQuantityChange(e, item.id)}
             />
          </td>                  
          <td>   
          <h4 className="price-card-">{item.price * (quantities[item.id] || item.quantity)} $</h4>
          </td>
          <td>  
            <button className="Borrar" onClick={() => dispatch(removeFromCart(item.id)) }>X</button>
          </td>
        </tr>
))}
    </tbody>
  </table>
  </div>
          <div className="d-flex justify-content-end">
            <h5 className="total" >Total: <span class="text-success">${total}</span></h5>
          </div>
          <div className="modal-footer border-top-0 d-flex justify-content-between">
          </div>
          <div className="modal-footer border-top-0 d-flex justify-content-between">
          </div>
        </div>
      </div>
    </div>
  )
}
 
 export default FloatCart;
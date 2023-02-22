import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "./cartItem.css";
import { Link } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import CartItem from "./CartItem";
import { removeFromCart, clearCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from 'axios';

export const ShoppingCart = () => {
  const [quantities, setQuantities] = useState({});
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const clase= useSelector(store => store.theme);
  useEffect(() => {
    const quantitiesFromLocalStorage =
      JSON.parse(localStorage.getItem("quantities")) || {};
    setQuantities(quantitiesFromLocalStorage);
  }, []);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});
  const [mpResponse, setMpResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser  = useSelector((state) => state.usuario);

  const cartItems = cart.map(item => ({
    id: item.id,
    title: item.name,
    unit_price: item.price,
    quantity: quantities[item.id] || item.quantity,
  }));

  const itemsJSON = JSON.stringify(cartItems);

  const enviarDatos = (cartItems) => {
    setIsLoading(true);
    axios.post('http://localhost:3001/procesarmp', itemsJSON, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setMpResponse(response.data);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (mpResponse) {

    }
  }, [mpResponse]);
  return (
    <div>
      
      <div className="Detail">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Dionisio Wines</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        
       
      </ul>
     </div>
  </div>
</nav>
      <div className="cart">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} data={item} quantities={quantities} />
          ))}
        </article>
        <div className="sale-ok">
        {!mpResponse &&(
            <>
              {currentUser ? (
                  <button className="btn-send" onClick={enviarDatos}>Enviar pedido</button>
                    ) : (
                <Link to="/login">
                  <button className="btn-sale">Enviar pedido</button>
                </Link>
              )}
            </>
        )}
      {isLoading && <p>procesando pedido...</p>}
      </div>
      {mpResponse && (
          <div className="sale-ok">
            <Link to={mpResponse.id.init_point}>
            <button className="btn-sale">Pagar con MercadoPago</button>
            </Link>
            {/* <p>ID de la transacción: {mpResponse.id.id}</p> */}
          </div>
        )}
    </div>
    </div>
  );
};






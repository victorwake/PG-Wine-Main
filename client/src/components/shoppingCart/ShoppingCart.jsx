import "./shoppingCart.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { useEffect, useState } from "react";
import axios from 'axios';
import { removeAllTransaction } from "../../redux/actions";

export const ShoppingCart = () => {
  const cart = useSelector((store) => store.cart);
  const [quantities, setQuantities] = useState({});
  const [mpResponse, setMpResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser  = useSelector((state) => state.usuario);
  const totalCar = useSelector ((state) => state.ammountCar)
  const totalItems = useSelector ((state) => state.cartItems)
  const dispatch = useDispatch();

  const cartItems = cart.map(item => ({
    id: item.id,
    title: item.name,
    unit_price: item.price,
    quantity: quantities[item.id] || item.quantity,
  }));

  const itemsJSON = JSON.stringify(cartItems);

  const enviarDatos = (cartItems) => {
    localStorage.setItem('AmmountCart', JSON.stringify(totalCar));
    localStorage.setItem('ItemsCart', JSON.stringify(totalItems));
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

  useEffect(() => {
    const quantitiesFromLocalStorage =
      JSON.parse(localStorage.getItem("quantities")) || {};
    setQuantities(quantitiesFromLocalStorage);
  }, []);

  useEffect ( () => {
    dispatch(removeAllTransaction())
  }, [removeAllTransaction])



  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Carrito de Compras</h1>
        <article className="box">
        {cart.map((item) => (
            <CartItem key={item.id} data={item} quantities={quantities} />
          ))}
        </article>
        <CartTotal cartItems={cart} quantities={quantities} />
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

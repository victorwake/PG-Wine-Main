import "./shoppingCart.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import CartItem from "./CartItem";
import { addToCart, removeFromCart, clearCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const ShoppingCart = () => {
  const cart = useSelector((store) => store.cart);
  // const location = useLocation();
  // const { cartItems } = location.state;
  // const [quantities, setQuantities] = useState({});

  

  // const cartItems = cart.map(item => ({
  //   id: item.id,
  //   name: item.name,
  //   price: item.price,
  //   quantity: quantities[item.id] || item.quantity,
  // }));

  // const arrayDeItems = [];    

  // cartItems.forEach(item => {
  //   arrayDeItems.push(item);
  // });

  // console.log(arrayDeItems);
  
  // console.log(cartItems);
  

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Carrito de Compras</h1>
        <article className="box">
          {cart.map((items) => (
            <CartItem data={items} />
          ))}
        </article>
      </div>
    </div>
  );
};
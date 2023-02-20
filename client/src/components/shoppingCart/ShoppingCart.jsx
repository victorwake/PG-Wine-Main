import "./shoppingCart.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import CartItem from "./CartItem";
import { addToCart, removeFromCart, clearCart } from "../../redux/actions";

export const ShoppingCart = () => {
  const cart = useSelector((store) => store.cart);
  

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

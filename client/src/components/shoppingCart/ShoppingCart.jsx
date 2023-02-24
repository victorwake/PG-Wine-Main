import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "../shoppingCart/CartItem.css";
import { Link } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import { SearchBar } from "../searchBar/SearchBar";

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
        </div>
        <CartTotal cartItems={cart} quantities={quantities} />
      </div>
      </div>
    </div>
  );
};






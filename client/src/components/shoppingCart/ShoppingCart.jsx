import { useState } from "react";
import { useSelector} from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../redux/actions";
import CartItem from "./CartItem";
import { NavBar } from "../navBar/NavBar";



const ShoppingCart = () => {

  const cart = useSelector(store => store.cart)

  
  return (
     <div>
      
        
      <h2 className="Tit">Carrito de Compras</h2>
      <article className="box">
     
        {cart.map((items) => (
          <CartItem data={items}/>
        ))} 
      </article>
    </div>
  );

};

export default ShoppingCart;



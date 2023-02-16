import { useState } from "react";
import { useSelector} from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../redux/actions";
import CartItem from "./CartItem";




const ShoppingCart = () => {

  const cart = useSelector(store => store.cart)

  
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((items) => (
          <CartItem data={items}/>
        ))} 
      </article>
    </div>
  );
};

export default ShoppingCart;



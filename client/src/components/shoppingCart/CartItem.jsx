import { useDispatch , useSelector} from "react-redux";
import { removeFromCart} from '../../redux/actions'
import './cartItem.css'
import { NavBar } from "../navBar/NavBar";

import React, { useState, useEffect } from "react";
const CartItem = ({ data }) => {
  const [quantities, setQuantities] = useState({});
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);
  const [setTotal] = useState(0);

  const total = Array.isArray(cart) ? cart.reduce((acc, item) => {
    const quantity = quantities[item.id] || item.quantity;
    return acc + (item.price * quantity);
  }, 0) : 0;

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("cart")) || [];
    const filteredItems = localStorageItems.filter(item => item.id === data.id);
    setItem(filteredItems.length ? filteredItems[0] : null);
  }, [data.id]);
  
  const handleTotal = () => {
    let sum = 0;
    cart.forEach((item) => {
      const quantity = localStorage.getItem("quantities")
        ? JSON.parse(localStorage.getItem("quantities"))[item.id] || item.quantity
        : item.quantity;
      sum += item.price * quantity;
    });
    setTotal(sum);
  };



  useEffect(() => {
    const quantitiesFromLocalStorage = JSON.parse(localStorage.getItem('quantities')) || {};
    setQuantities(quantitiesFromLocalStorage);
  }, []);

  if (!item) {
    return null;
  }

  return (

  <div className="cart-item">
 
      <div style={{ borderBottom: "thin solid gray" }}>
        <div key={item.id}>
          <div><img height="200px"  className={"img-"} src={item.image} alt={item.name} /></div>
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {quantities[item.id] || item.quantity}</p>
          <h4 className="total-unidad">
            {item.price * (quantities[item.id] || item.quantity)} $
          </h4>
          
          <button className="btn-cart-item" onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
          
        </div>
      </div>
    
    </div>
  );
};
export default CartItem;
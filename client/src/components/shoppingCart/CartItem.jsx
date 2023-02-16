import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, removeAllFromCart } from '../../redux/actions'
import { Link } from "react-router-dom";
import './CartItem.css'
import { NavBar } from "../navBar/NavBar";


const CartItem = ({ id, name, price, quantity,image }) => {
  const dispatch = useDispatch();
     
    return (
      <body>
        <NavBar>
          
        </NavBar>
       

          <div style={{ borderBottom: "thin solid gray" }}>
         
        <h4 >{name}</h4>
        <h5>
          ${price}.00
        </h5>
        <div><img height="200px"  className={"img-"} src={image} alt = {name} /></div>
        <div>

        <button onClick={() => dispatch(removeFromCart(id))}>Eliminar</button>
        

        </div>
      </div>
      </body>
    );
  };
  
  export default CartItem;


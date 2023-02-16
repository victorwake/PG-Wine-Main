import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, removeAllFromCart } from '../../redux/actions'



const CartItem = ({ data, delFromCart }) => {
  const dispatch = useDispatch();
        let { id, name, price, quantity,image } = data;
    return (
      <div style={{ borderBottom: "thin solid gray" }}>
        <h4>{name}</h4>
        <h5>
          ${price}.00
        </h5>
        <div><img height="200px" className={"img-"} src={image} alt = {name} /></div>
        <div>
        <button onClick={() => dispatch(removeFromCart(id))}>Eliminar</button>
        </div>
        
      </div>
    );
  };
  
  export default CartItem;


import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import "./CartContent.css";


const CartContent = () => {
  const { cart } = useContext(dataContext);

  
  return cart.length > 0 ? (
    <>
    <Link to='/home'><button className="buttonBack" >Volver a inicio</button>
      </Link>
      <CartElements />
      <CartTotal />
    </>
  ) : (
    <div>
      
      <h2 className='cart-message-center'>Your cart is empty</h2>
      </div>
    
    
    
  );
};

export default CartContent;
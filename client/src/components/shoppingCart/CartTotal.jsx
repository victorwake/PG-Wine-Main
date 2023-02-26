import React, { useEffect } from "react";
import { setAmmountCart, setItemsCart }  from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CartTotal = ({ cartItems, quantities }) => {

  const dispatch = useDispatch();
  
  const total = cartItems.reduce((acc, item) => {
    const quantity = quantities[item.id] || item.quantity;
    return acc + (item.price * quantity);
  }, 0);

  let totalCar = total;
  let itemsCar = useSelector( (state) => state.cart)

  useEffect ( () => {
    dispatch(setAmmountCart(totalCar))
    dispatch( setItemsCart (itemsCar))
  },[dispatch, itemsCar, totalCar])

  return (
    <div>
      <h3>Total: $ {total} </h3>
    </div>
  );
};

export default CartTotal;
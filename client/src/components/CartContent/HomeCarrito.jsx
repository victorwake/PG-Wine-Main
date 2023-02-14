import React, { useState } from "react";

const Cart = () => {
  // State to store the items in the cart
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove items from the cart
  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i !== item));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart("Item 1")}>Add Item 1</button>
      <button onClick={() => addToCart("Item 2")}>Add Item 2</button>
    </div>
  );
};

export default Cart;
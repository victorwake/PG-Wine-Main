import React from "react";

const CartTotal = ({ cartItems, quantities }) => {
  const total = cartItems.reduce((acc, item) => {
    const quantity = quantities[item.id] || item.quantity;
    return acc + (item.price * quantity);
  }, 0);

  return (
    <div>
      <h3>Total: {total} $</h3>
    </div>
  );
};

export default CartTotal;
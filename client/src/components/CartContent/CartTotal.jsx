import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.price, 0);
  return (
    <div className='cartTotal'>
      <h3 className="total">total a pagar: {total} $</h3>
    </div>
  );
};

export default CartTotal;
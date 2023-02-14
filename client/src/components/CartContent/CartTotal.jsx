import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './CartTotal.css'
import { Link } from "react-router-dom";
const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.price, 0);
const clearcart= ()=>{};

  return (
    <div className='cartTotal'>
      <h3 className="total">total a pagar: {total} $</h3>
      <div><Link to='/carrito'><button className="buttonPagar">limpiar carrito</button></Link></div>
<div><Link to='/home'><button className="buttonPagar">Volver atras</button></Link></div>
      <button className="agregar">+</button>
      <button className="restar">-</button>
    </div>
  );
};

export default CartTotal;
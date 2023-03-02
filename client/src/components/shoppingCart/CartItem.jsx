import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, removeAllFromCart } from '../../redux/actions'
import './cartItem.css'

import { NavBar } from '../navBar/NavBar'
import { useSelector } from 'react-redux'


const CartItem = ({ data }) => {
  const dispatch = useDispatch()
  const cart = useSelector(store => store.cart)
  let { id, name, price, quantity, image } = data
  return (
    <div className="cart-item">
      <div style={{ borderBottom: 'thin solid gray' }}>
        <th>
          <h4>{name}</h4>
        </th>
        <h5>${price}.00</h5>
        <h5>cantidad {quantity}</h5>
        <div>
          <img height="200px" className={'img-'} src={image} alt={name} />
        </div>
        <div>
          <button className="btn-cart-item" onClick={() => dispatch(removeFromCart(id))}>
            Eliminar
          </button>
          {/* <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default CartItem

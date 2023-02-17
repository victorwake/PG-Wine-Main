import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, addToCart, updateCartItem } from "../../redux/actions";

const FloatCart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (itemId, event) => {
    const newQuantity = Number(event.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      dispatch(updateCartItem(itemId, newQuantity));
    }
  };

  const handleAddToCart = (itemId) => {
    const existingItem = cart.find((item) => item.id === itemId);
    if (existingItem) {
      const updatedQuantity = existingItem.quantity + quantity;
      const updatedTotalPrice = existingItem.price * updatedQuantity;
      dispatch(updateCartItem(itemId, updatedQuantity, updatedTotalPrice));
    } else {
      const totalPrice = item.price * quantity;
      dispatch(addToCart(itemId, quantity, totalPrice));
    }
    setQuantity(1);
  };

  return (
    <div className="modal" id="openCartModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title" id="exampleModalLabel">
              Tu carrito de compras
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">Imagen</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                  <th scope="col">Borrar Item</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        className="img-fluid img-thumbnail"
                        alt="Vino"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        name={`quantity-${item.id}`}
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e)}
                      />
                    </td>
                    <td>
                      <h4 className="price-card-">{item.price * item.quantity} $</h4>
                    </td>
                    <td>
                      <button onClick={() => dispatch(removeFromCart(item.id))}>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end">
            <div>Total Price: {totalPrice} $</div>
          </div>
        <div class="modal-footer border-top-0 d-flex justify-content-between">
      <Link to={'/carrito'}>
          <button  type="button">Ir al carrito</button>
      </Link>
      <Link to={'/Home'}>
          <button  type="button">Ir a Pagar</button>
      </Link>
            </div>
      </div>
      <div class="modal-footer border-top-0 d-flex justify-content-between">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"/>Cerrar<button/>
            </div>
            </div>
            </div>)
 }
 export default FloatCart;
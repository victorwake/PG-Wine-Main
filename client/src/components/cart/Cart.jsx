import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";
import {removeFromCart, cleanCart } from '../../redux/reducer/cartSlice';


export const Cart = () => {
  const clase = useSelector((store) => store.theme);
  const products = useSelector((store) => store.products);

  const dispatch = useDispatch();


  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleCleanCart = (cart) => {
    dispatch(cleanCart(cart));
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(products);

  return (
    <div className={"cart-container-" + clase}>
      <div className="container">
        <Button variant="success" onClick={handleShow}>
          View Cart
        </Button>
      </div>

      <Modal size="xl" dialogClassName="custom-modal-dialog" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-image">
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Varietal</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
                <th scope="col">Borrar</th>
              </tr>
            </thead>
            <tbody>
  {products?.map((product) => (
    <tr key={product.id}>
      <td>
        <img src={product.image} alt={product.name} />
      </td>
      <td>{product.name}</td>
      <td>{product.varietal}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.price * product.quantity}</td>
      <td>
        <button onClick={() => handleRemoveItem(product)}>Borrar</button>
      </td>
    </tr>
  ))}
</tbody>
          </table>
          <div className="d-flex justify-content-end">
            <h4>Total: <span >$</span></h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleCleanCart}>
            Vaciar carrito
          </Button>
          <Link to="/shopingcard"><Button variant="success">
            Completar la compra
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}        
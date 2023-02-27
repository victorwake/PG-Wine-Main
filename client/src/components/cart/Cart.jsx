import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { removeFromCart, updateCartItem, removeAllFromCart } from "../../redux/actions";
import axios from 'axios';


export const Cart = () => {
  const clase = useSelector((store) => store.theme);
  const allWines = useSelector(state=> state.wines)
  const cart = useSelector(state => state.cart);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);

  const cartItems = cart.map(item => ({
    id: item.id,
    title: item.name,
    unit_price: item.price,
    quantity: quantities[item.id] || item.quantity,
  }));
  console.log(cartItems)


  const itemsJSON = JSON.stringify(cartItems);




  const handleClick = (cartItems) => {
    try{
      axios.post('http://localhost:3001/procesarmp', itemsJSON, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => { window.location.href = res.data.id.init_point
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
        console.log(res.data);
      }).catch(error => { console.log(error)})
    } catch(error) {
        // Aquí puedes manejar el error de la solicitud
        console.error(error)
    }
  }
  
// console.log(enviarDatos(cartItems))

  // .then(res => window.location.href = res.data.response.body.init_point);
  //prueba para el control de stock de cart, para no vender mas de la cantidad que hay en stock
  const firstCartItem = cart[0];
  if (firstCartItem) {
    const stock = allWines.find(wine => wine.id === firstCartItem.id)?.stock;
    console.log(stock);
  }

  
  const handleEmptyCart = () => {
    if (cart.length === 0) {
      setShowEmptyCartModal(true);
    }
  }

  const handleCloseEmptyCartModal = () => {
    setShowEmptyCartModal(false);
  }


  const total = Array.isArray(cart) ? cart.reduce((acc, item) => {
    const quantity = quantities[item.id] || item.quantity;
    return acc + (item.price * quantity);
  }, 0) : 0;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
      setQuantities({...quantities, [itemId]: newQuantity});
      dispatch(updateCartItem(itemId, newQuantity));
  }

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  }

  useEffect(() => {
    const quantitiesFromLocalStorage = JSON.parse(localStorage.getItem('quantities')) || {};
    setQuantities(quantitiesFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('quantities', JSON.stringify(quantities));
  }, [quantities]);


  return (
    <div className={"cart-container-" + clase}>
      <div>
        <Button variant="success" onClick={cart.length ? handleShow : handleEmptyCart} >
        <i class="bi bi-cart3"></i>
        </Button>
      </div>

      <Modal show={showEmptyCartModal} onHide={handleCloseEmptyCartModal}>
          <Modal.Header closeButton>
            <Modal.Title>Carrito vacío</Modal.Title>
          </Modal.Header>
          <Modal.Body>El carrito está vacío.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEmptyCartModal}>
              Cerrar
            </Button>
          </Modal.Footer>
      </Modal>

      <Modal size="xl" dialogClassName="custom-modal-dialog" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tu carrito de compras</Modal.Title>
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
                {cart?.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.image}  className="img-fluid img-thumbnail" alt="Vino" /></td>
                    <td>{item.name}</td>
                    <td>{item.varietal}</td>
                    <td>${item.price}</td>
                    <td>
                      <input
                        className="input-cantidad"
                        type="number"
                        id={`quantity-${item.id}`}
                        name={`quantity-${item.id}`}
                        min="1"
                        value={quantities[item.id] || item.quantity}
                        onChange={(e) => handleQuantityChange(e, item.id)}
                      />
                    </td>
                    <td>
                      <h4 className="total-unidad" >{item.price * (quantities[item.id] || item.quantity)} $</h4>
                    </td>
                    <td>
                      <Button variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>X</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <h4>Total: <span >${total}</span></h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleRemoveAllFromCart}>
            Vaciar carrito
          </Button>

          <Link to={'/shoppingcart'}>
          <Button 
            variant="success"
            >
            Ir al carrito
            </Button>
          </Link>

            <Button 
            variant="success" 
            onClick={handleClick}
            >
            Finalizar compra
            </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}        
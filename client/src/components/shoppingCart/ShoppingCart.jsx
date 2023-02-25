import "./shoppingCart.css";
import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import axios from "axios";
import CartItem from "./cartItem";
import { addToCart, removeFromCart, clearCart, updateCartItem  } from "../../redux/actions";
import { useState, useEffect, Fragment } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useLocation } from "react-router-dom";
import { getWines } from '../../redux/actions';
import { Card }from '../card/Card'
import _ from 'lodash';
import { Footer } from "../footer/Footer";


export const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const clase= useSelector(store => store.theme);

  const [shippingCost, setShippingCost] = useState(0);

  const [quantities, setQuantities] = useState({});


  const allWines = useSelector(state=> state.wines)
  const shuffledWines = _.shuffle(allWines);
  const tenRandomWines = shuffledWines.slice(0, 10);
  const discountedWines = tenRandomWines.map((w) => ({
    ...w,
    price: w.price * 0.9,
}));

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // Función para calcular el costo de envío
  const calculateShippingCost = () => {
    if (calculateTotal() < 15000) {
      setShippingCost(1500);
    } else {
      setShippingCost(0);
    }
  };

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

  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
      setQuantities({...quantities, [itemId]: newQuantity});
      dispatch(updateCartItem(itemId, newQuantity));
  }

  useEffect(() => {
    calculateShippingCost();
  }, [cart]);


return (
<div>
    <NavBar />
  <div className="container">
        <h1>Carrito de Compras</h1>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
        <table className="product-column">
          <thead className="theadProductos">
            <tr>
              <th>Producto</th>
              <th>Precio unitario</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
            <tr key={item.id}>
                <td><img src={item.image} alt={item.name} width="90" height="90"/>
                <span>{item.name}</span>
                </td>
                <td>${item.price.toFixed(2)}</td>
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
                <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
            ))}
          </tbody>
        </table>

      <table className="shipping-column">
        <tbody>
        <tr>
          <td>
            <table className="total-table">
              <tbody>
                <tr>
                  <td>Subtotal:</td>
                  <td>${calculateTotal().toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Costo de envío:</td>
                  <td>${shippingCost.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>${(calculateTotal() + shippingCost).toFixed(2)}</td>
                </tr>
                <button
            variant="success" 
            onClick={handleClick}
            >
            Finalizar compra
            </button> 
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="conteinerInfo">
      
      <div>
      <div>
      <i class="bi bi-cash" style={{fontSize: '3em', transform: 'scale(2)'}}></i>
      </div>
  


      <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" >
        Las mejores formas de pago
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div>
        <strong>
          <img src='https://ucarecdn.com/148d3226-8dcd-46f3-b736-03f54ea5fa97/-/format/auto/-/preview/3000x3000/-/quality/lighter/20.png'width="90" height="90"/>Mercado Pago 
          </strong> 
          </div>
          <strong>
          <img src='https://ucarecdn.com/25309bd4-2308-4028-8e72-c5c0b8029d31/-/format/auto/-/preview/3000x3000/-/quality/lighter/22.png'width="80" height="80"/>Transferencia Bancaria
          </strong> 
      </div>
    </div>
  </div>
  </div>

      </div>
   
      <div style={{  alignItems: 'center' }}>
      <div>
      <i class="bi bi-shield-check" style={{ fontSize: '2.7em', transform: 'scale(2)' }}></i>
      </div>
   
      <b>Compra Segura</b>
      <p>Si tu producto llega en malas condiciones, te devolvemos el dinero</p>

      </div>

      <div>
      <div>
      <i class="bi bi-chat-left-heart-fill" style={{fontSize: '2.5em', transform: 'scale(2)'}}></i>
      </div>
      <b>Miles de Clientes Felices</b>
      <Link>
      <p>Leé sus comentarios</p>
      </Link>
      </div>

  </div>

      <h3 className={"saleshopp-type-h2-" + clase}>Promociones imperdibles</h3>
     <div className={"homeshopp-container-" + clase}>
            <div  className={"cardshopp-container-home-" + clase} >
                {discountedWines?.map((w => (
                  <Fragment key={w.id}>
                            <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>

                              <div>
                                <span className="etiquetaProduct">10% DESC</span>
                                <div>
                                <div style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <del>${w.price}</del>
                                </div>
                                <div style={{ color: 'green', textDecoration: 'inherit', fontSize:'20px', fontWeight: 'bold'}}>
                                <span>${(w.price * 0.9).toFixed(2)}</span>
                                </div>
                                </div>
                              <Card className={'cardshopp'}
                                name={w.name}
                                varietal={w.varietal}
                                image= {w.image} 
                                winery={w.winery}
                                />
                                </div>
                                <div className={'cardDisc'}>
                                </div>
                            </Link>
                        </Fragment>
                )))}  
            </div>
        </div>
    </div>
    <Footer/>
  </div>
)}


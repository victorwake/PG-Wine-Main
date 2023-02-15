import './shoppingCart.css';
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export const ShoppingCart = () => {
    const products = useSelector((store) => store.products);
    const cart = useSelector((store) => store.cart);
    
    

    const addToCart = () => {};
    const removeFromCart = () => {}
    const deleteFromCart = () => {}

    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <h3>Productos</h3>
            <article className="box">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <h4>{product.name}</h4>
                    <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            ))}
            </article>
            <h3>Carrito</h3>
            <article className="box"></article>
        </div>
    );
}
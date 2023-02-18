import './shoppingCart.css';
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";


export const ShoppingCart = () => {
    const totalItems = useSelector((store) => store.totalItems);
    const cart = useSelector((store) => store.cart);
    
    

    const addToCart = () => {};
    const removeFromCart = () => {}
    const deleteFromCart = () => {}

    return (
        <div >
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Shopping Cart</h1>
                        </div>
                        </div>
                        </div>


            
        </div>
    );
}
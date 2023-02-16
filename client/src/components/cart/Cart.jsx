import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import './cart.css'

export const Cart = () => {

    const clase= useSelector(store => store.theme);
    return (
        <div className={"cart-container-" + clase}>
            <Link to="/shopingcard" style={{ color: "inherit", textDecoration: "inherit" }}>
            <h2>Cart</h2>
            </Link>
        </div>
    );
};

import './mercadoPagoSucess.css';
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar } from "../navBar/NavBar";



export const MercadoPagoSucess = () => {
  const currentUser = useSelector((state) => state.usuario);
  const clase = useSelector((store) => store.theme);
  const [searchParams, setSearchParams] = useSearchParams();
  const paymentId = searchParams.get("payment_id")


    return (
        <div className={"contenedor-profile-" + clase}>
        <NavBar />
        <div className={"box-profile-" + clase}>
          <header className="jumbotron">
            <h1> Datos de tu compra</h1>
            <h3>
               <strong>{currentUser.usuario.firstName}</strong>, tu compra fue procesada correctamente.
            </h3>
            <h3>
               Tu id de compra es <strong>{paymentId}</strong>.
            </h3>
          </header>
        </div>
      </div>
    )
}
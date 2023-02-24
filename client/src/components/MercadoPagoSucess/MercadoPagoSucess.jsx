import './mercadoPagoSucess.css';
import React, {useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../navBar/NavBar";
import { procesarPagoExitoso } from "../../redux/actions";



export const MercadoPagoSucess = () => {
  const currentUser = useSelector((state) => state.usuario);
  const pagoExitoso = useSelector((stae) => state.transactionResult)
  const clase = useSelector((store) => store.theme);
  const [searchParams, setSearchParams] = useSearchParams();
  const paymentId = searchParams.get("payment_id")

  const dispatch = useDispatch();

  useEffect( () =>{ 
    dispatch(procesarPagoExitoso(paymentId))

  }, [procesarPagoExitoso])


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
               Tu id de compra es <strong>{pagoExitoso}</strong>.
            </h3>
          </header>
        </div>
      </div>
    )
}
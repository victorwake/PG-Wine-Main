import './mercadoPagoSucess.css';
import React, {useEffect} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../navBar/NavBar";
import { procesarPagoExitoso } from "../../redux/actions";



export const MercadoPagoSucess = () => {
  const currentUser = useSelector((state) => state.usuario);
  const pagoExitoso = useSelector((state) => state.transactionResult)
  const total = localStorage.getItem('AmmountCart');
  const items = localStorage.getItem('ItemsCart');
  const clase = useSelector((store) => store.theme);
  const [searchParams, setSearchParams] = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const status = searchParams.get("status");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect( () =>{ 
    dispatch(procesarPagoExitoso({
    idUser: currentUser.usuario.idUser,
    payment_id: paymentId ,
    ammount: total,
    items: JSON.parse(items),
    shipping_address: currentUser.usuario.street,
    order_email: currentUser.usuario.email,
    order_status:status
    }));
    navigate("/user/perfil")

  }, [dispatch, navigate])


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
               Tu id de pago en Mercado Pago es: <strong>{pagoExitoso.payment_id}</strong>.
            </h3>
            <h3>
               Tu dirección de despacho es: <strong>{pagoExitoso.shipping_address}</strong>.
            </h3>
            <h3>
               Monto total de la compra: <strong>$ </strong>{pagoExitoso.ammount}.
            </h3>
          </header>
        </div>
      </div>
    )
}
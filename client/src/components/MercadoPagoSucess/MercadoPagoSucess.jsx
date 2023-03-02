
import React, {useEffect} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../navBar/NavBar";
import { procesarPagoExitoso } from "../../redux/actions";
import { Cart } from "../cart/Cart";



export const MercadoPagoSucess = () => {
  const currentUser = useSelector((state) => state.usuario);
  const pagoExitoso = useSelector((state) => state.transactionResult)
  const totalCart = useSelector((state) => state.cart)
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
      </div>
    )
}
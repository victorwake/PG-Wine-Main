import "./details.css";
import {
  getWineDetail,
  addToCart,
  addWineToFavorites,
  removeWineFromFavorites,
  getWinesFromFavorites,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import { Button, Modal } from 'react-bootstrap';

export const Details = () => {
  const clase = useSelector((state) => state.theme);
  const wineDetail = useSelector((state) => state.wineDetail);
  const currentUser = useSelector((state) => state.usuario);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);

  const cart = useSelector((state) => state.cart);
  const itemInCart = cart.some((item) => item.id === wineDetail.id);

  const dispatch = useDispatch();

  const { id } = useParams();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const favorites = useSelector((state) => state.favorites);
  let idUser = ''
  if (currentUser) {
    idUser = currentUser.usuario.idUser;
  }


  const handleFavorite = () => {
    currentUser ?  handleShow() : handleEmptyCart()
    if (isFavorite) {
      dispatch(removeWineFromFavorites(idUser, id)).then(() =>
        setIsFavorite(false)
      );
    } else {
      dispatch(addWineToFavorites(idUser, id)).then(() => setIsFavorite(true));
    }
  };
  

  useEffect(() => {
    if (currentUser) {
      dispatch(getWinesFromFavorites(idUser)).then(() => {
        setIsFavorite(favorites.some((f) => f.user_wine.wineId === id));
      });
    }
  }, [dispatch]);

  const wineColorType = wineDetail.color_type;
  let colorType = "";
  let colorName = "";

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    dispatch(
      addToCart(
        wineDetail.id,
        wineDetail.name,
        wineDetail.varietal,
        wineDetail.price,
        wineDetail.image,
        wineDetail.quantity
      )
    );

    setTimeout(() => {
      setIsAddingToCart(false);
    }, 10000);
  };

  if (!!wineColorType) {
    colorType = wineColorType.toLowerCase();
    colorName = wineColorType.toUpperCase();
  }

  useEffect(() => {
    dispatch(getWineDetail(id));
  }, [dispatch, id]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleEmptyCart = () => {
    if (cart.length === 0) {
      setShowEmptyCartModal(true);
    }
  }

  const handleCloseEmptyCartModal = () => {
    setShowEmptyCartModal(false);
  }


  return (
    <div className={"detail-container-" + clase}>
      <NavBar />
      <div className="containerData">

      

        <div>
          <Link to={`/vinos/${wineColorType}`}>
            {" "}
            <button id={"agregar-" + clase} className="buttonBack">
              <i class="bi bi-arrow-return-left"></i> Volver{" "}
            </button>
          </Link>
        </div>
        <div className="img">
          <img
            className="imagen"
            src={wineDetail.image}
            alt={wineDetail.name}
          />
        </div>
        <div className={"name-" + colorType}>
          <h2>
            {colorName}S - {wineDetail.name}
          </h2>
        </div>
        <div className="tabla">
          <table class="table">
            <tbody>
              <tr>
                <th className={"th-" + colorType}>Variedad</th>
                <td id={"td-" + clase}>{wineDetail.varietal}</td>
              </tr>
              <tr>
                <th className={"th-" + colorType}>Bodega</th>
                <td id={"td-" + clase}>{wineDetail.winery}</td>
              </tr>
              <tr>
                <th className={"th-" + colorType}>Ubicacion</th>
                <td id={"td-" + clase}>{wineDetail.province}</td>
              </tr>
              <tr>
                <th className={"th-" + colorType}>Alcohol</th>
                <td id={"td-" + clase}>{wineDetail.alcohol} %</td>
              </tr>
              <tr>
                <th className={"th-" + colorType}>Año</th>
                <td id={"td-" + clase}>{wineDetail.year}</td>
              </tr>
              <tr>
                <th className={"th-" + colorType}>Nota de cata</th>
                <td id={"td-" + clase}>{wineDetail.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="price">$ {wineDetail.price}</h3>
        <button
          id={"agregar-" + clase}
          className="addToCart"
          onClick={handleAddToCart}
          disabled={isAddingToCart || itemInCart}
        >
          <i id={"agregar-" + clase} class="bi bi-cart3">
            {" "}
            {itemInCart ? "Item en Carrito" : "Agregar al Carrito"}
          </i>
        </button>
        <Modal show={showEmptyCartModal} onHide={handleCloseEmptyCartModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>Debe loguearce para agregar a favoritos.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEmptyCartModal}>
              Cerrar
            </Button>
          </Modal.Footer>
      </Modal>
        <button 
        className="heart" 
        variant="success"
        onClick={handleFavorite}>
          {(!currentUser ? (<i className="bi bi-heart"></i>) : !isFavorite ? (<i className="bi bi-heart"></i>) : (<i className="bi bi-heart-fill"></i>) )}
        </button>
      </div>
    </div>
  );
};

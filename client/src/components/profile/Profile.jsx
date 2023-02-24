import React, { useCallback, useEffect, Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { NavBar } from "../navBar/NavBar";
import "./profile.css";
import { Link } from 'react-router-dom';
import {
  getWineDetail,
  addToCart,
  addWineToFavorites,
  removeWineFromFavorites,
  getWinesFromFavorites,
} from "../../redux/actions";
import { Card }from '../card/Card'

const Profile = () => {
  const currentUser = useSelector((state) => state.usuario);
  const clase = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getWinesFromFavorites(currentUser.usuario.idUser));
  }, [dispatch]);





  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className={"contenedor-profile-" + clase}>
      <NavBar />
      <div className={"box-profile-" + clase}>
        <header className="jumbotron">
          <h1> Datos de tu cuenta</h1>
          <h3>
            Perfil de <strong>{currentUser.usuario.firstName}</strong>
          </h3>
        </header>
        {currentUser.usuario.profilePic !== null ?
      <div>
      <img id="img-perfil" src={currentUser.usuario.profilePic} alt="profile"></img>
      </div>:
      <div className="img-registro"></div>
      }
      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.usuario.idUser}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.usuario.email}
      </p>      
      <div>
        {currentUser.usuario.rol &&
        <div>
        <div><strong>Rol:</strong></div>
        
          <div> {currentUser.usuario.rol}</div>
          </div>
          }
      
      </div>
      <p><a href="/login" className="nav-link" onClick={logOut}>
                Cerrar sesión
              </a></p>
      </div>
      <div  className={"card-container-home-" + clase} >
        
      {favorites.length > 0 && favorites.map((w => ((
        <Fragment key={w.id}>
        <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <Card  
        name={w.name}
        varietal={w.varietal}
        image= {w.image} 
        winery={w.winery}
        price= {w.price} 
        />
         </Link>
        </Fragment>
      ))))}
      
      </div>
    </div>
  );
};

export default Profile;

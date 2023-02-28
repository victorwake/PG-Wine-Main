import React, { useCallback } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { NavBar } from "../navBar/NavBar";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const currentUser = useSelector((state) => state.usuario);
  const clase = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const tokenRevi = localStorage.getItem('nombre')

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    
    <div className={"contenedor-profile-" + clase}>
      
      <div>
      <NavBar />
      </div>
      

        <div className="barraPerfil">
      <div class="list-group" style={{ fontSize:'1.3em' ,padding: '20px', textAlign:"center"}}>
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    Mi Cuenta
  </a>
  <Link style={{ fontSize: '1em', padding: '20px', width:"350px", textAlign:"center"}} class="list-group-item list-group-item-action" to={"/user/perfil"}><i className="bi bi-person-circle"></i> Mi Perfil</Link>
  <Link style={{ fontSize: '1em', padding: '20px', width:"350px", textAlign:"center"}} class="list-group-item list-group-item-action"to={"/user/orders/"}><i class="bi bi-bag"></i> Mis Compras</Link>
  <Link style={{ fontSize: '1em', padding: '20px', width:"350px", textAlign:"center" }} class="list-group-item list-group-item-action" to={"/user/favoritos/"}><i class="bi bi-heart"></i> Mis Favoritos</Link>
  <li class="list-group-item list-group-item-action" >
        { !currentUser && !tokenRevi?  <Link to="/registrar" style={{ color: "inherit", textDecoration: "inherit" }}>
          <a class="nav-link active" id={"font-color-" + clase} aria-current="page">Registrar</a>
          </Link>: <Link style={{ textDecoration: 'none',fontSize:'1em', fontWeight:"bold" }} to="/home" onClick={logOut}><a id={"font-color-" + clase} class="nav-link active" aria-current="page">Cerrar sesion</a></Link>}
    </li>
</div>
</div>

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
      {/* <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p> */}
      {/* <p>
        <strong>Id:</strong> {currentUser.usuario.idUser}
      </p> */}
      <p>
        <strong>Email:</strong> {currentUser.usuario.email}
      </p>      
      {/* <div>
        {currentUser.usuario.rol &&
        <div>
        <div><strong>Rol:</strong></div>
        
          <div> {currentUser.usuario.rol}</div>
          </div>
          }
      
      </div> */}

      </div>
    </div>
  );
};

export default Profile;

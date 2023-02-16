import "./profile.css";

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "../login/LogoutBtn";
import { Link } from "react-router-dom";
import { NavBar } from '../navBar/NavBar';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const nombreLocal = localStorage.getItem("nombre");
  const apellidoLocal = localStorage.getItem("apellido");

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    // isAuthenticated && (
    //   <div>
    //     <img src={user.picture} alt={user.name} />
    //     <h2>{user.name}</h2>
    //     <p>{user.email}</p>
    //     <div><LogoutButton /> </div>
    //   </div>
    // )
    <div>
      <NavBar/>
      {nombreLocal ? (
        <div className="contenedor-profile">
          <div><h1>Este es tu perfil</h1> </div>
           <div><h2>{nombreLocal}</h2></div>
           <div><p>{apellidoLocal}</p></div>
          <div><Link to="/home">Sigue Navegando</Link></div>
        </div>
      ) : (
        <div className="contenedor-profile">
        <p>Si llegaste aquí y no ves nada, debes loguearte <Link to="/login">Login</Link></p>
        </div>
      )}
    </div>
  );
};

export default Profile;

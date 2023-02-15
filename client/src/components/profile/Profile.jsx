import React, {useCallback} from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth"
import { NavBar } from "../navBar/NavBar";

const Profile = () => {
  const currentUser  = useSelector((state) => state.usuario);
  const dispatch = useDispatch();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="container">
      <NavBar />
      <header className="jumbotron">
        <h1> Datos de tu cuenta</h1>
        <h3>
         Perfil de <strong>{currentUser.usuario.firstName}</strong>
        </h3>
      </header>
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
      <strong>Roles:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      <p><a href="/login" className="nav-link" onClick={logOut}>
                Cerrar sesión
              </a></p>
    </div>
  );
};

export default Profile;

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { clearMessage } from "../../redux/actions/message";
import { logout } from "../../redux/actions/auth"

import "bootstrap/dist/css/bootstrap.min.css";
import { SearchBar } from "../searchBar/SearchBar";

export default function Nav() {
    

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
  
    const currentUser  = useSelector((state) => state.usuario);
    const dispatch = useDispatch();
  
    let location = useLocation();
  
    useEffect(() => {
      if (["/login", "/registrar"].includes(location.pathname)) {
        dispatch(clearMessage()); // clear message when changing location
      }
    }, [dispatch, location]);
  
    const logOut = useCallback(() => {
      dispatch(logout());
    }, [dispatch]);
  
    useEffect(() => {
      if (currentUser) {
        setShowModeratorBoard(currentUser.usuario.rol.includes("ROLE_MODERATOR"));
        setShowAdminBoard(currentUser.usuario.rol.includes("ADMIN_ROLE"));
      } else {
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
      }
    }, [currentUser]);
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
        Dionisio Wines
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Vinos
          </a>
          <ul class="dropdown-menu">
          <Link to={"/vinos/" + "tinto"}  style={{ color: "inherit", textDecoration: "inherit" }}>
              <li><p class="dropdown-item" >Tintos</p></li>
          </Link>
          <Link to={"/vinos/" + "blanco"}  style={{ color: "inherit", textDecoration: "inherit" }}>
              <li><p class="dropdown-item" >Blancos</p></li>
          </Link>
          <Link to={"/vinos/" + "rosado"}  style={{ color: "inherit", textDecoration: "inherit" }}>
              <li><p class="dropdown-item" >Rosados</p></li>
          </Link>
          <Link to={"/vinos/" + "espumante"}  style={{ color: "inherit", textDecoration: "inherit" }}>
              <li><p class="dropdown-item" >Espumantes</p></li>
          </Link>         
          </ul>
        </li>        

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Panel Admin
              </Link>
            </li>            
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">
                Crear un vino
              </Link>
            </li>            
          )}

          {/* {currentUser && (
            <li className="nav-item">
              <Link to={"/perfil"} className="nav-link">
                Perfil
              </Link>
            </li>
          )} */}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/perfil"} className="nav-link">
                {currentUser.usuario.firstName}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/registrar"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
        </nav>
    </div>
  )
}

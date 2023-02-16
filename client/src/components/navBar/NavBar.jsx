import "./navBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from '../searchBar/SearchBar';
import  LoginButton  from '../login/LoginBtn';
import Profile from "../profile/Profile";
import { useSelector } from "react-redux";
import { FloatCart } from "../shoppingCart/FloatCart";

export const NavBar = () => {

  const borrar = () => {
    localStorage.clear();
    this.location.reload();
  };
  
  const tokenRevi = localStorage.getItem('nombre')


  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <h1 class="navbar-brand">Dionisio Wines</h1>
     
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" style={{ color: "inherit", textDecoration: "inherit" }}>
          <a class="nav-link active" aria-current="page">Inicio</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/create" style={{ color: "inherit", textDecoration: "inherit" }}>
          <a class="nav-link active" aria-current="page">Crear</a>
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
        <li class="nav-item">
          { !tokenRevi? <Link to="/login" style={{ color: "inherit", textDecoration: "inherit" }}>
          <a class="nav-link active" aria-current="page">Login</a>
          </Link>: <Link to="/perfil"><a class="nav-link active" aria-current="page">Bienvenido, {tokenRevi}</a></Link>}          
        </li>
        <li class="nav-item">
        { !tokenRevi? <Link to="/registrar" style={{ color: "inherit", textDecoration: "inherit" }}>
          <a class="nav-link active" aria-current="page">Registrar</a>
          </Link>: <Link to="/home" onClick={borrar}><a class="nav-link active" aria-current="page">Cerrar sesion</a></Link>}
        </li>
      </ul>
      <button type="button"  data-toggle="modal" data-target="#openCartModal">
    🛒
</button>
      
          
      <SearchBar/>    
    </div>
  </div>

</nav>

  );
};

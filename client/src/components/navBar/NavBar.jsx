import "./navBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from '../searchBar/SearchBar';

export const NavBar = () => {
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
          <a class="nav-link active" aria-current="page">Home</a>
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
      </ul>
      <SearchBar/>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  );
};
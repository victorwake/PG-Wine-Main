import { SearchBar } from '../searchBar/SearchBar';
import { Login } from '../login/Login';
import './navBar.css';
import { Link } from 'react-router-dom';
import { Filter } from '../filters/Filter';

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
            <a class="nav-link active" aria-current="page" href="#">Home</a>˙
          </li>
          <li class="nav-item">
            <a class="nav-link active" href={<Login/>}>Login</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Vinos
            </a>
            <ul class="dropdown-menu">
              <li><p class="dropdown-item" >Tintos</p></li>
              <li><p class="dropdown-item" >Blancos</p></li>
              <li><p class="dropdown-item" >Rosados</p></li>
              <li><p class="dropdown-item" >Espumantes</p></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bodegas            </a>
            <ul class="dropdown-menu">
              <li><p class="dropdown-item" >Rutini</p></li>
              <li><p class="dropdown-item" >Trapiche</p></li>
              <li><p class="dropdown-item" >Costa&Pampa</p></li>
              <li><p class="dropdown-item" >El Enemigo</p></li>
            </ul>
          </li>
          <li class="nav-item">
            <a ><Filter/></a>
          </li>
        </ul>
        <SearchBar/>
      </div>
    </div>
  </nav>
    );}

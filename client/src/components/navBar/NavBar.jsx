import { SearchBar } from '../searchBar/SearchBar';
import { Login } from '../login/Login';
import './navBar.css';
import { Link } from 'react-router-dom';
import { Filter } from '../filters/Filter';

export const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <h1 className="navbar-brand">Dionisio Wines</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
          <li className="nav-item">
            <a className="nav-link active" href={<Login/>}>Login</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Vinos
            </a>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" >Tintos</p></li>
              <li><p className="dropdown-item" >Blancos</p></li>
              <li><p className="dropdown-item" >Rosados</p></li>
              <li><p className="dropdown-item" >Espumantes</p></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bodegas            </a>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" >Rutini</p></li>
              <li><p className="dropdown-item" >Trapiche</p></li>
              <li><p className="dropdown-item" >Costa&Pampa</p></li>
              <li><p className="dropdown-item" >El Enemigo</p></li>
            </ul>
          </li>
          <li className="nav-item">
            <a ><Filter/></a>
          </li>
        </ul>
        <SearchBar/>
      </div>
    </div>
  </nav>
    );}

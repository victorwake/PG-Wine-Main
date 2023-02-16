import "./navBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from '../searchBar/SearchBar';
import { useSelector } from "react-redux";
import { themeChange } from '../../redux/actions/';
import { useDispatch } from "react-redux";
import { Cart } from '../cart/Cart';


export const NavBar = () => {
    const dispatch = useDispatch();

  const borrar = () => {
    localStorage.clear();
    this.location.reload();
  };

  const handleTheme = () => {
    if(clase === 'dark') {
        dispatch(themeChange('light'));
    } else {
        dispatch(themeChange('dark'));
    }
}

  const currentUser  = useSelector((state) => state.usuario);
  const clase= useSelector(store => store.theme);

    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id={"navbar-expand-lg-" + clase}>
  <div class="container-fluid">
    <h1 id={"h1-navbar-" + clase}>Dionisio Wines</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  class="navbar-nav me-auto mb-2 mb-lg-0">
        <li  class="nav-item">
          <Link to="/home" style={{ color: "inherit", textDecoration: "inherit" }}>
          <a class="nav-link active" id={"font-color-" + clase} aria-current="page">Inicio</a>
          </Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id={"font-color-" + clase} role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Vinos
          </a>
          <ul class="dropdown-menu" id={"background-color-" + clase}>
          <Link to={"/vinos/" + "tinto"}  style={{ color: "inherit", textDecoration: "inherit" }}>
              <li><p class="dropdown-item" id={"font-color-" + clase} >Tintos</p></li>
          </Link>
          <Link to={"/vinos/" + "blanco"}  style={{ color: "inherit", textDecoration: "inherit" }}>
              <li><p class="dropdown-item" id={"font-color-" + clase} >Blancos</p></li>
          </Link>
          <Link to={"/vinos/" + "rosado"}  style={{ color: "inherit", textDecoration: "inherit" }}>
              <li><p class="dropdown-item" id={"font-color-" + clase} >Rosados</p></li>
          </Link>
          <Link to={"/vinos/" + "espumante"}  style={{ color: "inherit", textDecoration: "inherit" }}>
              <li><p class="dropdown-item" id={"font-color-" + clase} >Espumantes</p></li>
          </Link>         
          </ul>
        </li>
        <li class="nav-item">
          { !currentUser? <Link to="/login" style={{ color: "inherit", textDecoration: "inherit" }}>
          <a class="nav-link active" id={"font-color-" + clase} aria-current="page">Login</a>
          </Link>: <Link style={{ textDecoration: 'none' }} to="/perfil"><a id={"font-color-" + clase} class="nav-link active" aria-current="page">Bienvenido, {currentUser.usuario.firstName}</a></Link>}          
        </li>
        <li class="nav-item">
        { !currentUser? <Link to="/carrito" style={{ color: "inherit", textDecoration: "inherit" }}>
          </Link>: <Link style={{ textDecoration: 'none' }} to="/admin"><a id={"font-color-" + clase} class="nav-link active" aria-current="page">Administrar</a></Link>}
        </li>
        <li class="nav-item">
        { !currentUser? <Link to="/registrar" style={{ color: "inherit", textDecoration: "inherit" }}>
          <a class="nav-link active" id={"font-color-" + clase} aria-current="page">Registrar</a>
          </Link>: <Link style={{ textDecoration: 'none' }} to="/home" onClick={borrar}><a id={"font-color-" + clase} class="nav-link active" aria-current="page">Cerrar sesion</a></Link>}
        </li>
      </ul>
      <Cart/>
      <div className={'conteiner-switch-' + clase}>   
                        <input type='checkbox' 
                        className={'input-switch-' + clase}
                        id='switch' 
                        onClick={()=> handleTheme()}>                    
                        </input>
                        <label id={'label-' + clase} htmlFor='switch' className={'checkbox-' + clase}></label>
                </div>
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

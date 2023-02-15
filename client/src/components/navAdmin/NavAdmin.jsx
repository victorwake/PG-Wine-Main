import './navAdmin.css'
import { SearchBar } from '../searchBar/SearchBar' 


export const NavAdmin = () =>{

    return (
    <div>
        <nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Panel de administrador </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Administrar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Publicidades</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Promociones</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nueva bodegas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Usuarios</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Vinos
                                </a>
                                <ul class="dropdown-menu">
                                    <a class="dropdown-item" href='/admin/create' >Crear</a>
                                    <a class="dropdown-item" href='/admin/editWines'>Editar</a>    
                                </ul>
                            </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/home">Volver a Inicio</a>
                                </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
   
    </div>
    )
}
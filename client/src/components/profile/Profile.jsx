import React, { useCallback, useEffect, Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { NavBar } from "../navBar/NavBar";
import "./profile.css";
import { Link } from "react-router-dom";
import {
  getWineDetail,
  addToCart,
  addWineToFavorites,
  removeWineFromFavorites,
  getWinesFromFavorites,
} from "../../redux/actions";
import { Card } from "../card/Card";
import { Favorite } from "./Favorites";

const Profile = () => {
  const currentUser = useSelector((state) => state.usuario);
  const clase = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getWinesFromFavorites(currentUser.usuario.idUser));
  }, [dispatch]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className={"contenedor-profile-" + clase}>
      <NavBar />
      <div class="wrapper d-flex h-100">
        <aside class="sidebar h-100">
          <div class="sidebar-section sidebar-header">
            <div class="sidebar-logo text-center">
              <a href="#" class="text-light">
                {" "}
                Datos de tu cuenta
              </a>
            </div>
          </div>
          <div
            id="picture-profile"
            class="sidebar-section sidebar-profile pt-4 pb-4"
          >
            <div class="profile-picture">
              <div class="picture-wrapper rounded-circle ml-auto mr-auto">
                {currentUser.usuario.profilePic !== null ? (
                  <img
                    src={currentUser.usuario.profilePic}
                    class="img-fluid"
                    alt="profile"
                  ></img>
                ) : (
                  <div className="img-registro"></div>
                )}
              </div>
              <span class="profile-alert"></span>
              <div class="profile-details text-center mt-2">
                <div class="name">
                  <strong>{currentUser.usuario.firstName}</strong>
                </div>
                <small class="role">
                  <div>
                    <strong>{currentUser.usuario.rol}</strong>
                  </div>
                </small>
              </div>
            </div>
          </div>
          <div class="sidebar-section sidebar-menu p-0">

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active pt-3 pb-2"
                id="menu"
                role="tabpanel"
                aria-labelledby="menu-tab"
              >
                <div class="tab-header text-uppercase p-2">Menu</div>
                <ul>
                  <li>
                    <a href="#" class="d-flex align-items-center">
                      <i class="fas fa-tachometer-alt"></i>
                      <span class="menu-text flex-fill">Perfil</span>
                      <span class="badge badge-pill badge-warning rounded-0">
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="d-flex align-items-center">
                      <i class="far fa-gem"></i>
                      <span class="menu-text flex-fill">Favoritos</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="d-flex align-items-center">
                      <i class="fa fa-chart-line"></i>
                      <span class="menu-text flex-fill">Compras</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="d-flex align-items-center">
                      <i class="fa fa-shopping-cart"></i>
                      <span class="menu-text flex-fill">Reseñas</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="d-flex align-items-center">
                      <i class="fa fa-calendar"></i>
                      <span class="menu-text flex-fill">Mensajes</span>
                      <span class="badge badge-pill badge-primary rounded-0">
                        mensajes nuevos aca
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/login"
                      class="d-flex align-items-center"
                      onClick={logOut}
                    >
                      <i class="fa fa-book"></i>
                      <span class="menu-text">Cerrar sesión</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <main class="page-content p-4">
          <h5>Favoritos </h5>
          <Favorite />
        </main>
      </div>
    </div>
  );
};

export default Profile;

// <div className={"contenedor-profile-" + clase}>
//   <NavBar />
//   <div className={"box-profile-" + clase}>
//     <header className="jumbotron">
//       <h1> Datos de tu cuenta</h1>
//       <h3>
//         Perfil de <strong>{currentUser.usuario.firstName}</strong>
//       </h3>
//     </header>
//     {currentUser.usuario.profilePic !== null ?
//   <div>
//   <img id="img-perfil" src={currentUser.usuario.profilePic} alt="profile"></img>
//   </div>:
//   <div className="img-registro"></div>
//   }
//   <p>
//     <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
//     {currentUser.token.substr(currentUser.token.length - 20)}
//   </p>
//   <p>
//     <strong>Id:</strong> {currentUser.usuario.idUser}
//   </p>
//   <p>
//     <strong>Email:</strong> {currentUser.usuario.email}
//   </p>
//   <div>
//     {currentUser.usuario.rol &&
//     <div>
//     <div><strong>Rol:</strong></div>

//       <div> {currentUser.usuario.rol}</div>
//       </div>
//       }

//   </div>
//   <p><a href="/login" className="nav-link" onClick={logOut}>
//             Cerrar sesión
//           </a></p>
//   </div>
//   <div  className={"card-container-home-" + clase} >

//   {favorites.length > 0 && favorites.map((w => ((
//     <Fragment key={w.id}>
//     <Link to={'/details/' + w.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
//     <Card
//     name={w.name}
//     varietal={w.varietal}
//     image= {w.image}
//     winery={w.winery}
//     price= {w.price}
//     />
//      </Link>
//     </Fragment>
//   ))))}

//   </div>
// </div>

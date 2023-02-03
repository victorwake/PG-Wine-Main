import { SearchBar } from '../searchBar/SearchBar';
import { Login } from '../login/Login';

import './navBar.css';

export const NavBar = () => {

}

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
    );
// export const NavBar = () => {

//     function handleClick(e){
//         e.preventDefault();
//         // dispatch(cleanAllFilters());
//         }

//     return(
//         <div className='general_nav'>
//             <div className='menu_bar'>
//                 <a href='#' className='bt_menu'><span class='icon_list'/>Menu</a>
//             </div>
//                 <div className='general_filter' >
//                     <div className='filter'>
//                         <label>Varietal: </label>
//                         <select>
//                             {/* {allVarietal.map(d => (
//                                 <option value={d.name}>{d.name}</option>
//                             ))}  */}     
//                          </select>
//                     </div>
//                     <div className='filter'>
//                         <label>Tipo: </label> 
//                         <select>
//                             {/* {allTipes.map(d => (
//                                     <option value={d.name}>{d.name}</option>
//                                 ))} */}
//                         </select>
//                     </div>
//                     <div className='filter'>
//                         <label>Region: </label> 
//                         <select>
//                         {/* {allDiets.map(d => (
//                                 <option value={d.name}>{d.name}</option>                                
//                                 ))} */}
//                         </select>
//                     </div>
//                     <div className='filter'>
//                         <label>Bodega: </label> 
//                         <select>
//                         {/* {allDiets.map(d => (
//                                 <option value={d.name}>{d.name}</option>
//                             ))} */}
//                         </select>
//                     </div >
//                     <div className="order">
//                         <label>Ordenar por Nombre:  </label>
//                         <select >
//                             <option value= 'asc'>A-Z</option>
//                             <option value= 'desc'>Z-A</option>
//                         </select>
//                     </div>
//                     <div className="order">
//                         <label> Precio: </label>
//                         <select  >
//                             <option value= 'asc'>Mayor Precio</option>
//                             <option value= 'desc'>Menor Precio</option>
//                         </select>
//                     </div>
//                     <button className="refreshButton" onClick={ e => {handleClick (e)}}>Clean filter</button>
//                 </div>
//                 <div className="serchBar">
//                     <SearchBar/>
//                 </div>
//             </div>
//     )
// }

// import "./navBar.css";

// export const NavBar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <h1 class="navbar-brand">Dionisio Wines</h1>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><p class="dropdown-item" >Action</p></li>
//             <li><p class="dropdown-item" >Another action</p></li>
//             <li></li>
//             <li><p class="dropdown-item" >Something else here</p></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//   );
// };

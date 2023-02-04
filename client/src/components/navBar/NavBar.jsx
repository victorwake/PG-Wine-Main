import { SearchBar } from '../searchBar/SearchBar';
import { Login } from '../login/Login';
import './navBar.css';
import { Link } from 'react-router-dom';
import { Filter } from '../filters/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { getWinery, getColourType } from '../../redux/actions';

export const NavBar = () => {

const allTypes = useSelector(state => state.colourType)
const allWinery = useSelector(state => state.winery)
const dispatch = useDispatch()

function handleFilterbyType(e){
  dispatch(getColourType(e.target.value))
  }

function handleFilterbyWinery(e){
  dispatch(getWinery(e.target.value))
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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href={<Login/>}>Login</a>
          </li>
          <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
              Vinos
            </a> 
            <ul class="dropdown-menu" onChange={(e)=>handleFilterbyType(e)}>
              {allTypes.map( el => (
                <option class="dropdown-item" value={el}>{el}</option>
              ))}  
            </ul> 
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bodegas            </a>
            <ul class="dropdown-menu" onChange={(e)=>handleFilterbyWinery(e)}>
              {allWinery.map( el => (
                <option class="dropdown-item" value={el} >{el}</option>
              ))}  
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

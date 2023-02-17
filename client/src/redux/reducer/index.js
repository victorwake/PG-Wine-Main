import { nameASC } from '../../helpers/sort.js';
import {
  THEME_CHANGE,
  THEME_LIGHT,
  THEME_DARK,
  GET_WINES,
  GET_WINE_TYPE,
  GET_WINE_DETAIL,
  CLEAN_DETAIL,
  CURRENT_PAGE,
  NAME_ORDER,
  RESET_PAGE,
  PRICE_ORDER,
  CLEAN_ALL_FILTERS,
  GET_BY_NAME,
  GET_BY_RANGE_PRICE,
  GET_VARIETAL,
  POST_WINES,
  UPDATE_WINE,
  SAVE_IMAGE,
  ADD_TO_CART,
  REMOVE_ONE_CART,
  CLEAR_CART,
} from "../actions/index.js";

/*--------AUTH---------*/

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGGIN_SUCCESS_G
} from "../actions/type.js";

/*--------MESSAGE---*/
import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/type.js";

const initialState = {
  theme: "light",
  wines: [],
  wineType: [],
  wineDetail: {},
  currentPage: 1,
  nameOrder: "",
  useFilter: false,
  price: "",
  varietal: [],
  urlCloudinary: "",
  productos: [],
  cart: [],
  totalItems: 0,
  message: "",
  isLoggedIn: false,
  usuario: null,
};

const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
  initialState.isLoggedIn = true;
  initialState.usuario = usuario;
} else {
  initialState.isLoggedIn = false;
  initialState.usuario = null;
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        theme: action.theme,
      };
    case THEME_LIGHT:
      return {
        ...state,
        theme: "light",
      };
    case THEME_DARK:
      return {
        ...state,
        theme: "dark",
      };
    case GET_WINES:
      return {
        ...state,
        wines: action.payload,
      };
    case GET_WINE_TYPE:
      return {
        ...state,
        wineType: action.payload,
      };
    case GET_WINE_DETAIL:
      return {
        ...state,
        wineDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        wineDetail: action.payload,
      };
    case NAME_ORDER:
      return {
        ...state,
        nameOrder: action.payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    ///////////////////////////////
    case CLEAN_ALL_FILTERS:
      return {
        ...state,
        currentPage: 1,
        useFilter: false,
        typeFilter: "",
        nameOrder: "",
        price: "", // Faltaba setear el precio
      };
    case RESET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case PRICE_ORDER:
      return {
        ...state,
        price: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        wines: action.payload,
      };
    case GET_BY_RANGE_PRICE:
      return {
        ...state,
        wineType: action.payload,
        price: "",
      };
    case GET_VARIETAL:
      return {
        ...state,
        varietal: action.payload.sort(nameASC)
      };
    case POST_WINES:
      return {
        ...state,
      };
    case UPDATE_WINE:
      return {
        ...state,
      };
    case SAVE_IMAGE:
      return {
        ...state,
        urlCloudinary: action.urlCloudinary,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalItems: state.totalItems + 1,
      };
    case REMOVE_ONE_CART:
      return {
        ...state,
        cart: state.cart.filter((e, i) => i !== action.payload.id),
        totalItems: state.totalItems - 1,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        totalItems: 0,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        usuario: action.payload.usuario,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        usuario: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        usuario: null,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    case LOGGIN_SUCCESS_G:
        return {
          isLoggedIn: true,
          usuario: action.payload.usuario,
        };
    default:
      return state;
  }
};

export default rootReducer;

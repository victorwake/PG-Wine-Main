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
  ADD_WINE_TO_FAVORITES,
  REMOVE_WINE_FROM_FAVORITES,
  GET_WINES_FROM_FAVORITES,
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  POST_EXP,
  GET_EXP,
  UPDATE_EXP,
  GET_EXP_TYPE,


  // ADD_TO_CART,
  // REMOVE_ONE_CART,
  // CLEAR_CART,

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
  message: "",
  isLoggedIn: false,
  usuario: null,
  favorites: [],
  quantity: 1,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  alertVisible: false,
  cartItems: [],
  isAddingToCart: false,
  isRemovingFromCart: false,
  experiences: [],
  expType: "",

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
    case ADD_WINE_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_WINE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((e, i) => i !== action.payload.id),
      };
    case GET_WINES_FROM_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
          cart: [
            ...state.cart,
              {
                id: action.payload.id,
                name:action.payload.name,
                varietal: action.payload.varietal,
                price: action.payload.price,
                image: action.payload.image,
                quantity: action.payload.quantity || 1
                // quantity: action.payload.quantity,
              }
          ]
      };
      case "UPDATE_CART_ITEM":
        return {
          ...state,
          cart: state.cart.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: action.payload.quantity,
                totalPrice: action.payload.totalPrice
              };
            }
            return item;
          })
        };  
        case REMOVE_FROM_CART:
          return ({
              ...state,
              cart: state.cart.filter((product) => product.id !== action.payload)}
          )  
          case REMOVE_ALL_FROM_CART:
            return ({
                ...state,
                cart: []}
            )

    /////EXPERIENCES////
    case GET_EXP:
        return {
          ...state,
          experiences: action.payload,
        };
    case POST_EXP:
        return {
          ...state,
        };
    case UPDATE_EXP:
        return {
          ...state,
        };
   case GET_EXP_TYPE:
      return {
        ...state,
        expType: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

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
    POST_REGISTER,
    POST_AUTH,
    ADD_TO_CART,
    HIDE_ALERT,
    SHOW_ALERT,
    REMOVE_FROM_CART,
    REMOVE_ALL_FROM_CART,
    CLEAR_CART,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE, 
    CLEAR_MESSAGE, 
    getWines,
    CALCULATE_TOTAL_PRICE_OF_THE_CART
} from '../actions/index.js';

  

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  
  const initialStateUsuario = usuario
    ? { isLoggedIn: true, usuario }
    : { isLoggedIn: false, usuario: null };



const initialState = {
    theme: 'light',
    wines: [],
    wineType: [],
    wineDetail: {},
    currentPage: 1,
    nameOrder: '',
    useFilter: false,
    price: '',
    varietal: [],
    initialStateUsuario: initialStateUsuario,
    message: {},
    quantity: 1,
    cart : [],
    alertVisible: false,
    quantity: 1,
    cartItems: [],
    isAddingToCart: false,
    isRemovingFromCart: false,
    totalPriceCart: 0
}


const rootReducer = (state = initialState, action) => {
   
  
    switch (action.type) {
        case THEME_CHANGE:
            return {
                ...state,
                theme: action.theme
            };
        case THEME_LIGHT:
            return {
                ...state,
                theme: 'light'
            };
        case THEME_DARK:
            return {
                ...state,
                theme: 'dark'
            };
        case GET_WINES:
            return {
                ...state,
                wines: action.payload
            };
        case GET_WINE_TYPE:
            return {
                ...state,
                wineType: action.payload
            };
        case GET_WINE_DETAIL:
            console.log("entro al detail")
            return {
                ...state,
                wineDetail: action.payload
                
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                wineDetail: action.payload
            };
        case NAME_ORDER:
            return {
                ...state,
                nameOrder: action.payload
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
            ///////////////////////////////    
        case CLEAN_ALL_FILTERS:
            return {
                ...state,
                currentPage: 1,
                useFilter: false,
                typeFilter: '',
                nameOrder: '',
                price: '', // Faltaba setear el precio 
            }
        case RESET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case PRICE_ORDER:
            return {
                ...state,
                price: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                wines: action.payload
            }
        case GET_BY_RANGE_PRICE:
            return {
                ...state,
                wineType: action.payload,
                price: ''
            }
        case GET_VARIETAL:
            return {
                ...state,
                varietal: action.payload
            }
        case POST_WINES:
            return {
                ...state,
            }
        case UPDATE_WINE:
            return {
                ...state,
            }


         ///////////////////////////////////

        // case ADD_TO_CART:
        //     console.log("entro en reducer")
        //     let newItem = state.wines.find( (wine) => wine.id === action.payload)
        //     return ({
        //         ...state,
        //         cart: [...state.cart, newItem]
          
        //     } )

        case ADD_TO_CART:
      console.log("entro en reducer");
      let newItem = state.wines.find(wine => wine.id === action.payload);
      return {
        ...state,
        cart: [...state.cart, newItem],
        alertVisible: true
      };
    case SHOW_ALERT:
      return {
        ...state,
        alertVisible: true
      };
    case HIDE_ALERT:
      return {
        ...state,
        alertVisible: false
      };

        
        case REMOVE_FROM_CART:
            console.log("entro al delete")
            // console.log('Removing item with id: ', action.payload);
            // console.log('Current cart state: ', state.cart);
            // let itemToDelete = state.cart.find((item) => item.id === action.payload);
            // console.log('Item to delete: ', itemToDelete);
            return ({
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)}
            )
            case 'UPDATE_CART_ITEM':
            return {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload.id
                  ? {
                      ...item,
                      quantity: action.payload.quantity,
                      totalPrice: action.payload.totalPrice,
                    }
                  : item
              ),
            };
       
            case REMOVE_ALL_FROM_CART:
                console.log("entro al deleteALL")
                // console.log('Removing item with id: ', action.payload);
                // console.log('Current cart state: ', state.cart);
                // let itemToDelete = state.cart.find((item) => item.id === action.payload);
                // console.log('Item to delete: ', itemToDelete);
                    return ({
                            cart: state.cart})

            case CLEAR_CART:{
            return initialState;
        };
        case CALCULATE_TOTAL_PRICE_OF_THE_CART: {
            return {
              ...state,
              totalPriceCart: state.cart.reduce((previousValue, wine) => previousValue + wine.price, 0)
            }
          }
        
             

        default:
            return state;
        }
   
}

export default rootReducer;


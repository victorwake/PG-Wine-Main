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
    GET_VARIETAL,
    POST_WINES,
    UPDATE_WINE

} from '../actions/index.js';

const initialState = {
    theme: 'light',
    wines: [],
    wineType: [],
    wineDetail: {},
    currentPage: 1,
    nameOrder:'',
    useFilter: false,
    price: '',
    varietal: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
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
                nameOrder:'',
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
        default:
            return state;
    }
} 

export default rootReducer;



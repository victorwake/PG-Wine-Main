import {
    THEME_CHANGE, 
    THEME_LIGHT, 
    THEME_DARK,
    GET_WINES,
    GET_WINE_TYPE,
    GET_WINE_DETAIL,
    CLEAN_DETAIL, 
    CURRENT_PAGE,
    GET_BY_NAME

} from '../actions/index.js';

const initialState = {
    theme: 'light',
    wines: [],
    wineType: [],
    wineDetail: {},
    currentPage: 1,
    wineByName: []
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
        case CURRENT_PAGE:
            return {
            ...state,
                currentPage: action.payload
        }
        case GET_BY_NAME:
            return {
                ...state,
                wines: action.payload
            }        
        default:
            return state;
    }
} 

export default rootReducer;


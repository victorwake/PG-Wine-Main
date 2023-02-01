import {
    THEME_CHANGE, 
    THEME_LIGHT, 
    THEME_DARK,
    GET_WINES,

} from '../actions/index.js';

const initialState = {
    theme: 'light',
    wines: [],
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
        
        default:
            return state;
    }
} 

export default rootReducer;


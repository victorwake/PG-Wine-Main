import axios from 'axios';

/*Cambio de tema*/
export const themeChange = (theme) => {
    if (theme === 'light') {
        return {
            type: THEME_LIGHT
        };
    } else if (theme === 'dark') {
        return {
            type: THEME_DARK
        };
    }
};
export const THEME_CHANGE = 'THEME_CHANGE';

export  const themeLight = () => {
    return {
        type: THEME_LIGHT,
        theme: 'light'
    }
};
export const THEME_LIGHT = 'THEME_LIGHT';

export  const themeDark = () => {
    return {
        type: THEME_DARK,
        theme: 'dark'
    } 
};
export const THEME_DARK = 'THEME_DARK';

/*Fin de cambio de tema*/

/*----------------------------------------------*/



export const getWines = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/general');
            dispatch({
                type: GET_WINES,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};
export const GET_WINES = 'GET_WINES';
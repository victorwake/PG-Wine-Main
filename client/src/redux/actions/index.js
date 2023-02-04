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
            const response = await axios.get('http://localhost:3001/home');
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

export function getWineName(payload) {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/home?name=' + payload);
            return dispatch({
                type: 'GET_WINE_NAME',
                payload: json.data 
            })
        } catch (error) {
            alert('wine not found');

        }
    }
}


export const getWineType = (type) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/colourtype/${type}`);
            dispatch({
                type: GET_WINE_TYPE,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}
export const GET_WINE_TYPE = 'GET_WINE_TYPE';

export const getWineDetail = id => {
    return dispatch => axios(`http://localhost:3001/winedetail/${id}`)
    .then(res => dispatch({ type: GET_WINE_DETAIL, payload: res.data}))
    .catch(err => console.log(err));
};
export const GET_WINE_DETAIL = 'GET_WINE_DETAIL';

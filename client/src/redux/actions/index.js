import axios from 'axios';

export function getWines() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/general', {

        });
        return dispatch({
            type: 'GET_WINES',
            payload: json.data
        })
    }
}

export function getWineName(name) { //name o payload, da igual
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/general?name=' + name);
            return dispatch({
                type: 'GET_WINE_NAME',
                payload: json.data //json.data es lo q devuelve esa ruta
            })
        } catch (error) {
            alert('wine not found');

        }
    }
}

export function getVarietal() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/varietal/');
        return dispatch({
            type: 'GET_VARIETAL',
            payload: json.data
        })
    }
}
export function getWinery() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/winery/');
        return dispatch({
            type: 'GET_WINERY',
            payload: json.data
        })
    }
}

export function postWine(payload) {
    return async function(dispatch) {
        const data = await axios.post('http://localhost:3001/wine/', payload);
        console.log(data)
        return data;
    }
}

export function filterWineByVarietal(payload) { //el payload es el value q me va a llegar
    console.log(payload)
    return {
        type: 'FILTER_BY_VARIETAL',
        payload
    }

}

// export function filterCreated(payload){// el payload es la opcion que yo elija en el form
//     return {
//         type: 'FILTER_CREATED',
//         payload
//     }

// }

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME', //despacho con ese type
        payload
    }
}

export function orderByPrice(payload) {
    return {
        type: 'ORDER_BY_PRICE',
        payload
    }
}
export function cleanAllFilters() {
    return dispatch => {
        dispatch({ type: 'CLEAN_FILTERS' })
    }
};

export function getDetails(id) {

    return async function(dispatch) {
        try {
            if (id) {
                const detail = await axios.get(`http://localhost:3001/winedetail/:id`);
                dispatch({
                    type: 'GET_DETAIL',
                    payload: detail.data
                })
            } else {
                dispatch({
                    type: 'GET_DETAIL',
                    payload: []


                })
            }

        } catch (error) {
            console.log(error)

        }
    }

}
=======
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


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

export const themeLight = () => {
    return {
        type: THEME_LIGHT,
        theme: 'light'
    }
};
export const THEME_LIGHT = 'THEME_LIGHT';

export const themeDark = () => {
    return {
        type: THEME_DARK,
        theme: 'dark'
    }
};
export const THEME_DARK = 'THEME_DARK';

/*Fin de cambio de tema*/

/*----------------------------------------------*/


/*----------------------------------------------*/

export const getWines = () => {
    return async(dispatch) => {
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

/*----------------------------------------------*/

export const getWineType = (type) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/vinos/${type}`);
            dispatch({ type: GET_WINE_TYPE, payload: response.data });
            dispatch(changeCurrentPage(1)); // actualiza el currentPage a 1
            dispatch(cleanAllFilters()) // resetea los filtros
        } catch (error) {
            console.log(error);
        }
    }
}
export const GET_WINE_TYPE = 'GET_WINE_TYPE';

/*----------------------------------------------*/

export const getWineDetail = id => {
    return dispatch => axios(`http://localhost:3001/details/${id}`)
        .then(res => dispatch({ type: GET_WINE_DETAIL, payload: res.data }))
        .catch(err => console.log(err));
};
export const GET_WINE_DETAIL = 'GET_WINE_DETAIL';

/*----------------------------------------------*/

export const cleanWineDetail = payload => {
    return dispatch => {
        dispatch({ type: CLEAN_DETAIL, payload })
    }
};
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

/*----------------------------------------------*/

export const changeCurrentPage = payload => {
    return dispatch => {
        dispatch({ type: CURRENT_PAGE, payload })
    }
};
export const CURRENT_PAGE = 'CURRENT_PAGE';

/*----------------------------------------------*/



export const cleanAllFilters = () => {
    return dispatch => {
        dispatch({ type: CLEAN_ALL_FILTERS })
    }
};
export const CLEAN_ALL_FILTERS = 'CLEAN_ALL_FILTERS';
/*----------------------------------------------*/


export const resetPage = payload => {
    return dispatch => {
        dispatch({ type: RESET_PAGE, payload })
    }
}
export const RESET_PAGE = 'RESET_PAGE';
/*----------------------------------------------*/

export const getPrice = payload => {
    return dispatch => {
        dispatch({ type: PRICE_ORDER, payload })
    }
};
export const PRICE_ORDER = 'PRICE_ORDER';

/*------------------------------------------------*/



export const changeUseFilter = payload => {
    return dispatch => {
        dispatch({ type: USE_FILTER, payload })
    }
};
export const USE_FILTER = 'USE_FILTER';
/*----------------------------------------------*/


export const changeNameOrder = payload => {
    return dispatch => {
        dispatch({ type: NAME_ORDER, payload })
    }
};
export const NAME_ORDER = 'NAME_ORDER';
/*----------------------------------------------*/

export const getWinesByName = (name) => {
    return async(dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/home/?name=' + name);
            dispatch({
                type: GET_BY_NAME,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};
export const GET_BY_NAME = 'GET_BY_NAME';
/*----------------------------------------------*/

export const getPriceRange = (min, max) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/orderAsc/price/` + min + `/` + max)
                // const response = await axios.get(`http://localhost:3001/products?order=asc&sorderBy=price&minPrice=${min}&maxPrice=${max}`)
            dispatch({
                type: GET_BY_RANGE_PRICE,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};
export const GET_BY_RANGE_PRICE = 'GET_BY_RANGE_PRICE';
/*----------------------------------------------*/

export const postWines = (payload) => {
    return async function() {
        const newWine = await axios.post('http://localhost:3001/wines', payload);
        return newWine;
    }
};

export const POST_WINES = 'POST_WINES';
/*----------------------------------------------*/

export const updateWine = (id, payload) => {
    return async function() {
        const updateWine = await axios.put(`http://localhost:3001/wines/${id}`, payload);
        return updateWine;
    }
};

export const UPDATE_WINE = 'UPDATE_WINE';

/*----------------------------------------------*/

export function getVarietal() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/varietal');
        return dispatch({
            type: GET_VARIETAL,
            payload: json.data
        })
    }
};

export const GET_VARIETAL = 'GET_VARIETAL';

/*----------------------------------------------*/

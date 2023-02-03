import axios from 'axios';

export function getWines() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/wine', {

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
            var json = await axios.get('http://localhost:3001/wine?name=' + name);
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
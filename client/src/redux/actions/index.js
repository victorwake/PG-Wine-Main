import axios from 'axios'

/*Cambio de tema*/
export const themeChange = theme => {
  if (theme === 'light') {
    return {
      type: THEME_LIGHT,
    }
  } else if (theme === 'dark') {
    return {
      type: THEME_DARK,
    }
  }
}
export const THEME_CHANGE = 'THEME_CHANGE'

export const themeLight = () => {
  return {
    type: THEME_LIGHT,
    theme: 'light',
  }
}
export const THEME_LIGHT = 'THEME_LIGHT'

export const themeDark = () => {
  return {
    type: THEME_DARK,
    theme: 'dark',
  }
}
export const THEME_DARK = 'THEME_DARK'

/*Fin de cambio de tema*/

/*----------------------------------------------*/

/*----------------------------------------------*/

export const getWines = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://dionisiowines-be.onrender.com/home')
      dispatch({
        type: GET_WINES,
        payload: response.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_WINES = 'GET_WINES'

/*----------------------------------------------*/

export const getWineType = type => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://dionisiowines-be.onrender.com/vinos/${type}`)
      dispatch({ type: GET_WINE_TYPE, payload: response.data })
      dispatch(changeCurrentPage(1)) // actualiza el currentPage a 1
      dispatch(cleanAllFilters()) // resetea los filtros
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_WINE_TYPE = 'GET_WINE_TYPE'

/*----------------------------------------------*/

export const getWineDetail = id => {
  return dispatch =>
    axios(`https://dionisiowines-be.onrender.com/details/${id}`)
      .then(res => dispatch({ type: GET_WINE_DETAIL, payload: res.data }))
      .catch(err => console.log(err))
}
export const GET_WINE_DETAIL = 'GET_WINE_DETAIL'

/*----------------------------------------------*/

export const getUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://dionisiowines-be.onrender.com/usuarios/all')
      dispatch({
        type: GET_USERS,
        payload: response.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_USERS = 'GET_USERS'
/*----------------------------------------------*/

export const cleanWineDetail = payload => {
  return dispatch => {
    dispatch({ type: CLEAN_DETAIL, payload })
  }
}
export const CLEAN_DETAIL = 'CLEAN_DETAIL'

/*----------------------------------------------*/

export const changeCurrentPage = payload => {
  return dispatch => {
    dispatch({ type: CURRENT_PAGE, payload })
  }
}
export const CURRENT_PAGE = 'CURRENT_PAGE'

/*----------------------------------------------*/

export const cleanAllFilters = () => {
  return dispatch => {
    dispatch({ type: CLEAN_ALL_FILTERS })
  }
}
export const CLEAN_ALL_FILTERS = 'CLEAN_ALL_FILTERS'
/*----------------------------------------------*/

export const resetPage = payload => {
  return dispatch => {
    dispatch({ type: RESET_PAGE, payload })
  }
}
export const RESET_PAGE = 'RESET_PAGE'
/*----------------------------------------------*/

export const getPrice = payload => {
  return dispatch => {
    dispatch({ type: PRICE_ORDER, payload })
  }
}
export const PRICE_ORDER = 'PRICE_ORDER'

/*------------------------------------------------*/

export const changeUseFilter = payload => {
  return dispatch => {
    dispatch({ type: USE_FILTER, payload })
  }
}
export const USE_FILTER = 'USE_FILTER'
/*----------------------------------------------*/

export const changeNameOrder = payload => {
  return dispatch => {
    dispatch({ type: NAME_ORDER, payload })
  }
}
export const NAME_ORDER = 'NAME_ORDER'
/*----------------------------------------------*/

export const getWinesByName = name => {
  return async dispatch => {
    try {
      const response = await axios.get('https://dionisiowines-be.onrender.com/home/?name=' + name)
      dispatch({
        type: GET_BY_NAME,
        payload: response.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_BY_NAME = 'GET_BY_NAME'
/*----------------------------------------------*/

export const getPriceRange = (min, max) => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://dionisiowines-be.onrender.com/orderAsc/price/` + min + `/` + max,
      )
      // const response = await axios.get(`https://dionisiowines-be.onrender.com/products?order=asc&sorderBy=price&minPrice=${min}&maxPrice=${max}`)
      dispatch({
        type: GET_BY_RANGE_PRICE,
        payload: response.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_BY_RANGE_PRICE = 'GET_BY_RANGE_PRICE'
/*----------------------------------------------*/

export const postWines = payload => {
  return async function () {
    const newWine = await axios.post('https://dionisiowines-be.onrender.com/wines', payload)
    return newWine
  }
}

export const POST_WINES = 'POST_WINES'
/*----------------------------------------------*/

export const updateWine = (id, payload) => {
  return async function () {
    const updateWine = await axios.put(`https://dionisiowines-be.onrender.com/wines/${id}`, payload)
    return updateWine
  }
}

export const UPDATE_WINE = 'UPDATE_WINE'

/*----------------------------------------------*/

export const updateUser = (id, payload) => {
  return async function () {
    const updateUser = await axios.put(
      `https://dionisiowines-be.onrender.com/usuarios/${id}`,
      payload,
    )
    return updateUser
  }
}

export const UPDATE_USER = 'UPDATE_USER'

/*----------------------------------------------*/

export function getVarietal() {
  return async function (dispatch) {
    var json = await axios.get('https://dionisiowines-be.onrender.com/varietal')
    return dispatch({
      type: GET_VARIETAL,
      payload: json.data,
    })
  }
}

export const GET_VARIETAL = 'GET_VARIETAL'

/*----------------------------------------------*/

export const saveImage = urlCloudinary => ({
  type: SAVE_IMAGE,
  urlCloudinary,
})
export const SAVE_IMAGE = 'SAVE_IMAGE'

/*----------------------------------------------*/

export const addWineToFavorites = (idUser, wineId) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://dionisiowines-be.onrender.com/usuarios/${idUser}/favorites/${wineId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      dispatch({ type: ADD_WINE_TO_FAVORITES, payload: data })
    } catch (error) {
      console.log(error)
    }
  }
}
export const ADD_WINE_TO_FAVORITES = 'ADD_WINE_TO_FAVORITES'

/*----------------------------------------------*/

export const removeWineFromFavorites = (idUser, wineId) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://dionisiowines-be.onrender.com/usuarios/${idUser}/favorites/${wineId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      dispatch({ type: REMOVE_WINE_FROM_FAVORITES, payload: data })
    } catch (error) {
      console.log(error)
    }
  }
}

export const REMOVE_WINE_FROM_FAVORITES = 'REMOVE_WINE_FROM_FAVORITES'

/*----------------------------------------------*/

export const getWinesFromFavorites = userId => {
  return dispatch =>
    axios(`https://dionisiowines-be.onrender.com/usuarios/${userId}/favorites`)
      .then(res => dispatch({ type: GET_WINES_FROM_FAVORITES, payload: res.data }))
      .catch(err => console.log(err))
}
export const GET_WINES_FROM_FAVORITES = 'GET_WINES_FROM_FAVORITES'

/*----------------------------------------------*/

export const addToCart = (id, name, varietal, price, image, quantity) => ({
  type: 'ADD_TO_CART',
  payload: { id, name, varietal, price, image, quantity },
})
export const ADD_TO_CART = 'ADD_TO_CART'

/*----------------------------------------------*/

export const updateCartItem = (id, name, varietal, price, image, quantity) => ({
  type: 'UPDATE_CART_ITEM',
  payload: { id, name, varietal, price, image, quantity },
})
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'

/*----------------------------------------------*/

export const removeFromCart = id => {
  // console.log(id, all);
  return dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    })
  }
}
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

/*----------------------------------------------*/

export const removeAllFromCart = () => {
  // console.log(id, all);
  return dispatch => {
    dispatch({
      type: REMOVE_ALL_FROM_CART,
    })
  }
}

export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'

/*----------------------------------------------*/

export const procesarPago = payload => {
  return dispatch => {
    axios
      .post('https://dionisiowines-be.onrender.com/procesarmp', payload)
      .then(response => {
        console.log(response)

        dispatch(procesarPagoExitoso(response.data))
      })
      .catch(error => {
        console.log(error)

        dispatch(procesarPagoError(error.message))
      })
  }
}

//EXPERIENCIAS
/*----------------------------------------------*/

export const postExp = payload => {
  return async function () {
    const newExp = await axios.post('https://dionisiowines-be.onrender.com/experiences', payload)
    return newExp
  }
}

export const POST_EXP = 'POST_EXP'

/*----------------------------------------------*/
export const updateExp = (id, payload) => {
  return async function () {
    const updateExp = await axios.put(
      `https://dionisiowines-be.onrender.com/experiences/${id}`,
      payload,
    )
    return updateExp
  }
}

export const UPDATE_EXP = 'UPDATE_EXP'

/*----------------------------------------------*/
export const getExp = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://dionisiowines-be.onrender.com/experiences')
      dispatch({
        type: GET_EXP,
        payload: response.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_EXP = 'GET_EXP'

/*----------------------------------------------*/

export function getAllExp() {
  return async function (dispatch) {
    var json = await axios.get('https://dionisiowines-be.onrender.com/expriences/all')
    return dispatch({
      type: GET_ALL_EXP,
      payload: json.data,
    })
  }
}

export const GET_ALL_EXP = 'GET_ALL_EXP'

/*----------------------------------------------*/

export const getExpType = type => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://dionisiowines-be.onrender.com/experiencias/${type}`)
      dispatch({ type: GET_EXP_TYPE, payload: response.data })
      dispatch(changeCurrentPage(1)) // actualiza el currentPage a 1
      dispatch(cleanAllFilters()) // resetea los filtros
    } catch (error) {
      console.log(error)
    }
  }
}
export const GET_EXP_TYPE = 'GET_EXP_TYPE'

/*----------------------------------------------*/

export const getExpDetail = id => {
  return dispatch =>
    axios(`https://dionisiowines-be.onrender.com/expDetails/${id}`)
      .then(res => dispatch({ type: GET_EXP_DETAIL, payload: res.data }))
      .catch(err => console.log(err))
}
export const GET_EXP_DETAIL = 'GET_EXP_DETAIL'

/*----------------------------------------------*/
export function getOrden(idUser) {
  return function (dispatch) {
    console.log('entro en action getOrden')
    return axios
      .get(`https://dionisiowines-be.onrender.com/orders/orderbyuser/?buyer=${idUser}`)
      .then(res =>
        dispatch({
          type: GET_ORDEN,
          payload: res.data,
        }),
      )
  }
}

export const GET_ORDEN = 'GET_ORDEN'

export const procesarPagoExitoso = payload => {
  return dispatch => {
    axios
      .post('https://dionisiowines-be.onrender.com/orders/post', payload)
      .then(response => {
        dispatch({
          type: PROCESAR_PAGO_EXITOSO,
          payload: response.data,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
export const PROCESAR_PAGO_EXITOSO = 'PROCESAR_PAGO_EXITOSO'

export const setAmmountCart = payload => {
  return dispatch => {
    dispatch({
      type: SET_CART_AMMOUNT,
      payload: payload,
    })
  }
}

export const SET_CART_AMMOUNT = 'SET_CART_AMMOUNT'

export const setItemsCart = payload => {
  return dispatch => {
    dispatch({
      type: SET_CART_ITEMS,
      payload: payload,
    })
  }
}

export const SET_CART_ITEMS = 'SET_CART_ITEMS'

export const removeAllTransaction = () => {
  // console.log(id, all);
  return dispatch => {
    localStorage.removeItem('AmmountCart')
    localStorage.removeItem('ItemsCar')
    dispatch({
      type: REMOVE_ALL_FROM_TRANSACTION,
    })
  }
}

export const REMOVE_ALL_FROM_TRANSACTION = 'REMOVE_ALL_FROM_TRANSACTION'

export const procesarPagoError = error => {
  return {
    type: PROCESAR_PAGO_ERROR,
    payload: error,
  }
}

export const PROCESAR_PAGO_ERROR = 'PROCESAR_PAGO_ERROR'

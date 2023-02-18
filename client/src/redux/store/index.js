import { applyMiddleware } from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit"; // configureStore es una funcion de redux-toolkit nueva que reemplaza a createStore
import {composeWithDevTools} from 'redux-devtools-extension';
import cartReducer from '../reducer/cartSlice';

const store = configureStore({ 
    reducer: rootReducer,
    applyMiddleware: applyMiddleware(thunk),
    enhancer: composeWithDevTools(),
    cart: cartReducer
});

export default store;
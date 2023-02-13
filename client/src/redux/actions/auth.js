import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    CLEAR_MESSAGE
  } from "./type";
  
  import AuthService from "../../services/auth.service";
  
  export const register = (email, firstName, lastName, password) => (dispatch) => {
    return AuthService.register(email, firstName, lastName, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.msg
        });      
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.msg ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { usuario: data.usuario },
        });
         
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.msg ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };
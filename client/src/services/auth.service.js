import axios from "axios";

const API_URL = "http://localhost:3001/";

const register = (userName, email, firstName, lastName, password) => {
  return axios.post(API_URL + "usuarios/crear", {
      userName,
      email,
      firstName,
      lastName,
      password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("usuario", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("usuario");
};

export default {
  register,
  login,
  logout,
};
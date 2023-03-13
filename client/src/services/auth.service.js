import axios from 'axios'

const API_URL = 'https://dionisio-wines.onrender.com/'

const register = (email, firstName, lastName, password, rol) => {
  return axios.post(API_URL + 'usuarios/crear', {
    email,
    firstName,
    lastName,
    password,
    rol,
  })
}

const login = (email, password) => {
  return axios
    .post(API_URL + 'auth', {
      email,
      password,
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('usuario', JSON.stringify(response.data))
        localStorage.setItem('token', JSON.stringify(response.data.token))
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('usuario')
}


export default {
  register,
  login,
  logout,
}

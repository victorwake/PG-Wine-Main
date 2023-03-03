import axios from 'axios'

const API_URL = 'https://dionisiowines-be.onrender.com/'

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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
}

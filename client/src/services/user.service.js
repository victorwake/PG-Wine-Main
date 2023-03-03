import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://dionisiowines-be.onrender.com/usuarios/'

const getPublicContent = () => {
  return axios.get(API_URL + 'all')
}

const getUserBoard = () => {
  return axios.get(API_URL + 'user', { headers: authHeader() })
}

const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', { headers: authHeader() })
}

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}

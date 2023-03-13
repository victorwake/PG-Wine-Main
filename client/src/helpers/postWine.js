import axios from 'axios'

export const postWine = payload => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/wines`, payload)
    .then(res => {
      if (res.status === 201) console.log('Vino creado exitosamente')
    })
    .catch(err => alert(err.message))
}

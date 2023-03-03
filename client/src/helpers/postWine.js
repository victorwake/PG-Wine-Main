import axios from "axios";

export const postWine = payload => {
    return axios.post('https://dionisio-wines.onrender.com/wines', payload)
    .then(res => {
        if (res.status === 201) console.log('Vino creado exitosamente')
    })
    .catch(err => alert(err.message))
};
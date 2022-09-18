import axios from 'axios'


const baseURL  =  "https://puertorico.secondchancebonuszone.com"

const axiosBase =  axios.create({
    baseURL,
    headers:{
        "Access-Control-Allow-Origin":"*"
    }
})


export default axiosBase
import axios from 'axios'


const baseURL  =  "https://puertorico.secondchancebonuszone.com"

const axiosBase =  axios.create({
    baseURL,
    headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-type":"application/json",
        mode:"no-cors"
    }
})


export default axiosBase
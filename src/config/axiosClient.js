import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "https://backend-ecommerce-c3.onrender.com"
})

export default axiosClient;
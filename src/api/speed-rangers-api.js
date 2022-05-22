import axios from "axios";
//'/api-speed-rangers/public/api'
export default axios.create({
    baseURL: '/api-speed-rangers/public/api',
    headers: {
        Accept: 'application/json'
    }
})
import axios from "axios";
//'/api-speed-rangers/public/api'
export default axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        Accept: 'application/json'
    }
})
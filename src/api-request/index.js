import { postRequest } from "./post-request";
import { getRequest } from "./get-request";
import ApiReducer from "./api-reducer";
export const apiRequest = () => {
    const { collection, collect } = ApiReducer()
    postRequest.bind(null, collect)
    getRequest.bind(null, collect)
    return{
        post:(api, url, payload) => postRequest(api, url, payload, collect),
        get: (api, url) => getRequest(api, url, collect),
        res: collection
    }
}
import { CollectInput } from "../collect-input"
import { PostRequest } from "./post-request"

export const ApiRequest = () =>{
    const { collection, collect } = CollectInput()
    PostRequest.bind(null, collect)
    return{
        post: (api, url, data) => PostRequest(api, url, data),
        res: collection
    }
}
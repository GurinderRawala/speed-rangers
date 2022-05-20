import { apiRequest } from "../../api-request"
import speedRangersApi from "../../api/speed-rangers-api"

export const submitForm = ({ collection }) =>{
    const { post, res } = apiRequest()
    const submit = (event) =>{
        event.preventDefault()
        post(speedRangersApi,'/contacts', collection)
    }
    return { submit, res }
}
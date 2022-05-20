import { apiRequest } from "../../api-request"
import speedRangersApi from "../../api/speed-rangers-api"

export const Submit = ({collection}) =>{
  const { post, res } = apiRequest()
  const submit = (e) =>{
    e.preventDefault()
    let formData =  new FormData()
    for(const x in collection){
        formData.append(x, collection[x])
     }
  post(speedRangersApi,'/careers', formData)
  }
  return { submit, res }
}
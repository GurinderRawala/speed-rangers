import { useReducer } from "react"
import reducer from "./reducer";
export const CollectInput = (inital) =>{
    const [collection, collect] = useReducer(reducer, inital)
    return { collection, collect }
}
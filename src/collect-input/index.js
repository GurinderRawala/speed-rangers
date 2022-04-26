import { useReducer } from "react"
import { reducer } from "./collection-reducer"

export const CollectInput = (inital) =>{
    const [collection, dispatch] = useReducer(reducer, inital)
    return{ collection, collect: dispatch }
}
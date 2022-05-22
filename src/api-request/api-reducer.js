import { useReducer } from "react"
const reducer = (state, action) =>{
    const { type, payload } = action;
    switch(type){
    case 'res':
        return{
            ...state,
            err: null,
            res: payload
        }
    case 'err':
        return{
            ...state,
            res: null,
            err: payload
        }
    case 'isLoading':
        return{
            ...state,
            isLoading: payload
        }
    default:
        return state
    }
}
const ApiReducer = () =>{
    const [collection, collect] = useReducer(reducer, {res: null, err: null, isLoading: false});
    return { collection, collect }
}
export default ApiReducer
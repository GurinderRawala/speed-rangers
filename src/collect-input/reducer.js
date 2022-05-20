const reducer = (state, action) =>{
    const { type, payload } = action
    if(type === 'clear'){
        return {};
    }
    return{
        ...state,
        [type]: payload
    }
   
}
export default reducer;
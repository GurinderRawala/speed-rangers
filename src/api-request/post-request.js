export const PostRequest = async(api, collect, url, data) =>{
    try{
        collect({type: 'isLoading', payload: true})
        const res = await api.post(url, data)
        collect({type: 'isLoading', payload: false})
        collect({type: 'response', payload: res})
    }catch(err){
        collect({type: 'err', payload: err})
    }
}
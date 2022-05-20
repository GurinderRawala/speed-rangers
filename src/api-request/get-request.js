export const getRequest = async (api, url, collect) =>{
    try{
        collect({type: 'isLoading', payload: true})
        const response = await api.get(url)
        collect({type: 'isLoading', payload: false})
        collect({type: 'res', payload: response?.data})
    }catch(err){
        collect({type: 'err', payload: err?.response?.data})
        collect({type: 'isLoading', payload: false})
    }
}
import { createSlice } from '@reduxjs/toolkit'
const inital = { show: false }
export const signalSlice = createSlice({
    name: "signal", 
    initialState: inital,
    reducers: {
        updateSignal: (state, action) =>{
            const { payload } = action
            return{
                ...state,
                show: payload
            }
        },
    }
})

export const { updateSignal } = signalSlice.actions

export default signalSlice.reducer
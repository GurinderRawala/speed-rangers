import { configureStore } from '@reduxjs/toolkit'
import  signalSlice  from './signal-slice'

export default configureStore({
    reducer: {
        signal: signalSlice
    },
})
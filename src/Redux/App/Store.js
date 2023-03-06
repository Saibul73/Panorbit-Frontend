import { configureStore } from '@reduxjs/toolkit'
import userAuth from '../Features/UserSlice'



export const Store = configureStore({
    reducer: {
        userData : userAuth
    }
})
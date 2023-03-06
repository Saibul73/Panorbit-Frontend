import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: null,
    user:null
}

export const userAuth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:(state,action)=>{
            state.user = action.payload
        },
        
        setUsers:(state,action)=>{
            console.log(action)
            state.users = action.payload
        },
        
    }
})

export const {setUser,setUsers} = userAuth.actions;
export default userAuth.reducer;
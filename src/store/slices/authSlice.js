import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth : false,
    accessToken : ""
}

const authslice = createSlice({
    name: "auth", initialState,
    reducers:{
        setLogin: (state, action) =>{
            state.isAuth = true
            state.accessToken = action.payload.accessToken
        },
        setLogout: (state) =>{
            state.isAuth = false
            state.accessToken = ""
        }
    }
})

export const {setLogin, setLogout}  = authslice.actions;

export default authslice.reducer;
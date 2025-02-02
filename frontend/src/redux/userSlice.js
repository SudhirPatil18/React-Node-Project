import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   email : "",
   firstName : "",
   image : "",
   lastName : "",
   _id : "",
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        loginRedux : (state, action)=>{
            console.log(action.payload.data)
         //   state.user= action.payload.data
         state._id= action.payload._id
         state.firstName =action.payload._id
         state.lastName =action.payload.lastName
         state.image =action.payload.image
         state.email=action.payload.email
         },
         logoutRedux : (state,action) =>{
            state._id= "";
         state.firstName ="";
         state.lastName ="";
         state.image ="";
         state.email="";
         }
    }
})

export const { loginRedux , logoutRedux } = userSlice.actions

export default userSlice.reducer
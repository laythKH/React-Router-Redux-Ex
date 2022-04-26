import { createSlice } from "@reduxjs/toolkit";

let initialValue = { name: "", email: "", isLogged: false }

export const userSlice = createSlice({
   name: 'users',
   initialState: { value: initialValue },
   reducers: {
      login: (state, action) => {
         // const newData = action.payload
         state.value = action.payload
      },

      logout: (state) => {
         state.value = initialValue
      }
   }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer


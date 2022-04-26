import data from '../data'

import { createSlice } from "@reduxjs/toolkit";

let initialValue = { movies: data.movies, series: data.series }

export const infoSlice = createSlice({
   name: 'info',
   initialState: { value: initialValue },
   reducers: {
      login: (state, action) => {
         const newData = action.payload
         state.value = { ...initialValue, ...newData }
      },

      logout: (state, action) => {
         state.value = initialValue
      }
   }
})

export const { login, logout } = infoSlice.actions

export default infoSlice.reducer


// , collection: [], name: '', email: '', isLogged: false